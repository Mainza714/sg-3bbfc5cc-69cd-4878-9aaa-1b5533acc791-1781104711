import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

interface Video {
  id: string;
  title: string;
  description: string;
  youtubeId: string;
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
      description: "A journey through time and memory",
      youtubeId: "By4Gxr3_U6s"
    },
    {
      id: "video-2",
      title: "CAN YOU SEE US",
      description: "Exploring the depths of human connection",
      youtubeId: "0FOCFfDR-qA"
    },
    {
      id: "video-3",
      title: "TURN OF FORTUNE",
      description: "When destiny takes an unexpected path",
      youtubeId: "27jNnFeCrSQ"
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

  return (
    <section className="relative min-h-screen bg-black text-white">
      {/* Video Background Layer */}
      <div className="absolute inset-0 z-0">
        {/* Default Video Thumbnails Grid */}
        {!activeVideo && (
          <div className="absolute inset-0 bg-black">
            <div className="grid grid-cols-1 md:grid-cols-3 h-full">
              {videos.map((video) => (
                <div key={video.id} className="relative h-full overflow-hidden">
                  <div className="absolute inset-0 bg-black/50 z-10"></div>
                  <img 
                    src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                    alt={video.title}
                    className="object-cover h-full w-full opacity-70"
                  />
                  {/* Removed title and description here */}
                </div>
              ))}
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-white text-lg bg-black/70 px-6 py-3 rounded-full">Hover over a title to play</p>
            </div>
          </div>
        )}

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
      
      {/* Content Layer (on top of videos) */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 h-screen flex items-center">
        <div className="w-full md:w-1/2 lg:w-2/5">
          <ul className="space-y-12 py-12">
            {videos.map((video) => (
              <li 
                key={video.id}
                className="group"
                onMouseEnter={() => handleMouseEnter(video.id)}
                onMouseLeave={handleMouseLeave}
              >
                <Link href={`/work/${video.id}`}>
                  <div className="cursor-pointer">
                    <h3 className={`text-3xl md:text-4xl font-bold tracking-tight transition-colors duration-300 ${
                      activeVideo === video.id ? "text-white" : "text-gray-500"
                    } group-hover:text-white`}>
                      {video.title}
                    </h3>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}