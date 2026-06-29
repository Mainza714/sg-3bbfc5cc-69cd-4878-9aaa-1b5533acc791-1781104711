import { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface Video {
  id: string;
  title: string;
  description: string;
  youtubeId: string;
  artwork: string;
}

export function VideoShowcase() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [defaultImageLoaded, setDefaultImageLoaded] = useState(false);
  const videoRefs = useRef<{ [key: string]: HTMLIFrameElement | null }>({});
  
  const videos: Video[] = [
    {
      id: "video-1",
      title: "MAKOFI",
      description: "A journey through time and memory showcasing African storytelling",
      youtubeId: "By4Gxr3_U6s",
      artwork: "/makofi-mad1xrli.png"
    },
    {
      id: "video-2",
      title: "CAN YOU SEE US",
      description: "Exploring the depths of human connection in African cinema",
      youtubeId: "0FOCFfDR-qA",
      artwork: "/can-you-see-us-slide-mad29y0i.png"
    },
    {
      id: "video-3",
      title: "TURN OF FORTUNE",
      description: "When destiny takes an unexpected path in this Zambian film",
      youtubeId: "27jNnFeCrSQ",
      artwork: "/turn-of-fortune-mad296qa.jpg"
    }
  ];

  useEffect(() => {
    // Create YouTube Player API script
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    // Set default video thumbnails
    setDefaultImageLoaded(true);

    return () => {
      // Clean up
      setActiveVideo(null);
      setIsPlaying(false);
    };
  }, []);

  const handleMouseEnter = (videoId: string) => {
    setActiveVideo(videoId);
    setIsPlaying(true);
  };

  const handleMouseLeave = () => {
    setIsPlaying(false);
    setActiveVideo(null);
  };

  const handleClick = (videoId: string) => {
    if (activeVideo === videoId) {
      // If clicking the same video, toggle play/pause
      setIsPlaying(!isPlaying);
    } else {
      // If clicking a different video, switch to it and play
      setActiveVideo(videoId);
      setIsPlaying(true);
    }
  };

  return (
    <section className="relative min-h-screen bg-black text-white">
      {/* Video Background Layer */}
      <div className="absolute inset-0 z-0">
        {/* Default Film Artwork Grid */}
        {!activeVideo && (
          <div className="absolute inset-0 bg-black">
            <div className="grid grid-cols-1 md:grid-cols-3 h-full">
              {videos.map((video) => (
                <div key={video.id} className="relative h-full overflow-hidden">
                  <div className="absolute inset-0 bg-black/50 z-10"></div>
                  <Image
                    src={video.artwork}
                    alt={`${video.title} - African film by Centripetal Media showcasing ${video.description}`}
                    fill
                    className="object-cover opacity-70 transition-transform duration-700 hover:scale-105"
                    priority
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Video Players */}
        {videos.map((video) => (
          <div 
            key={video.id}
            className={`absolute inset-0 transition-opacity duration-500 ${
              activeVideo === video.id ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <iframe
              ref={(el) => {
                videoRefs.current[video.id] = el;
              }}
              src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=${
                activeVideo === video.id && isPlaying ? "1" : "0"
              }&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=${video.youtubeId}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </div>
        ))}
      </div>
      
      {/* Content Layer (on top of videos) - Now horizontally aligned at the top */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 h-screen">
        <div className="pt-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videos.map((video) => (
              <div 
                key={video.id}
                className="group text-center cursor-pointer"
                onMouseEnter={() => handleMouseEnter(video.id)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick(video.id)}
              >
                <h1 className={`text-2xl md:text-3xl font-bold tracking-tight transition-all duration-300 ${
                  activeVideo === video.id ? "text-white scale-105" : "text-white"
                } group-hover:text-white group-hover:scale-105`}>
                  {video.title}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
