import { useState, useRef, useEffect } from "react";
import Link from "next/link";

interface Video {
  id: string;
  title: string;
  description: string;
  youtubeId: string;
}

export function VideoShowcase() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRefs = useRef<{ [key: string]: HTMLIFrameElement | null }>({});
  
  const videos: Video[] = [
    {
      id: "video-1",
      title: "MAKOFI", // Updated title
      description: "A journey through time and memory",
      youtubeId: "By4Gxr3_U6s"
    },
    {
      id: "video-2",
      title: "SILENT CURRENTS",
      description: "Exploring the depths of human connection",
      youtubeId: "0FOCFfDR-qA"
    }
  ];

  useEffect(() => {
    // Create YouTube Player API script
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

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
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">FEATURED VIDEOS</h2>
          <div className="h-px w-16 bg-white mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="relative aspect-video bg-black">
            {videos.map((video) => (
              <div 
                key={video.id}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  activeVideo === video.id ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              >
                <iframe
                  ref={(el) => { // Fix: Ref callback should return void or cleanup function
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
            
            {!activeVideo && (
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-gray-500 text-lg">Hover over a title to play</p>
              </div>
            )}
          </div>
          
          <div className="flex flex-col justify-center">
            <ul className="space-y-12">
              {videos.map((video) => (
                <li 
                  key={video.id}
                  className="group"
                  onMouseEnter={() => handleMouseEnter(video.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link href={`/work/${video.id}`}>
                    <div className="cursor-pointer">
                      <h3 className={`text-2xl md:text-3xl font-bold tracking-tight transition-colors duration-300 ${
                        activeVideo === video.id ? "text-white" : "text-gray-500"
                      } group-hover:text-white`}>
                        {video.title}
                      </h3>
                      <p className={`mt-2 transition-colors duration-300 ${
                        activeVideo === video.id ? "text-gray-300" : "text-gray-600"
                      } group-hover:text-gray-300`}>
                        {video.description}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}