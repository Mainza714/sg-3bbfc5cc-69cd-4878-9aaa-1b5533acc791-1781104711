
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function ContentPage() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const contentCategories = [
    {
      id: "film",
      title: "FILM",
      href: "/content/film",
      image: "/can-you-see-us-slide-mad29y0i.png",
      description: "Compelling dramas and powerful storytelling"
    },
    {
      id: "television",
      title: "TELEVISION",
      href: "/content/television",
      image: "/makofi-mad1xrli.png",
      description: "Captivating series across Africa"
    },
    {
      id: "audio",
      title: "AUDIO",
      href: "/content/audio",
      image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=2070&auto=format&fit=crop",
      description: "Immersive audio experiences"
    },
    {
      id: "in-development",
      title: "IN DEVELOPMENT",
      href: "/content/in-development",
      image: "/lute-film-md8t0hqc.jpg",
      description: "Upcoming projects and new ventures"
    }
  ];

  return (
    <>
      <Head>
        <title>Content | Centripetal Media</title>
        <meta name="description" content="Explore our diverse content portfolio spanning film, television, audio, and upcoming projects." />
      </Head>
      
      <div className="min-h-screen bg-black text-white">
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex items-center justify-between h-20">
              <Link href="/" className="text-white hover:text-gray-300 transition-colors">
                ← Back
              </Link>
              
              <div className="absolute left-1/2 transform -translate-x-1/2">
                <Link href="/" className="relative h-16 w-16 md:h-20 md:w-20 block">
                  <Image 
                    src="/c-ma9y38y6.png" 
                    alt="Centripetal Media" 
                    fill
                    className="object-contain"
                  />
                </Link>
              </div>
              
              <div className="w-16"></div>
            </div>
          </div>
        </header>

        <main className="pt-20">
          <div className="container mx-auto px-4 md:px-6 py-16">
            <div className="text-center mb-16">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-6">
                CONTENT
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Discover our diverse portfolio of compelling stories across multiple mediums
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {contentCategories.map((category) => (
                <Link
                  key={category.id}
                  href={category.href}
                  className="group relative overflow-hidden aspect-[4/3] rounded-lg"
                  onMouseEnter={() => setHoveredCategory(category.id)}
                  onMouseLeave={() => setHoveredCategory(null)}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
                  
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">
                    <div className="transform transition-transform duration-500 group-hover:translate-y-0 translate-y-4">
                      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2 text-white">
                        {category.title}
                      </h2>
                      <p className={`text-gray-200 text-lg transition-opacity duration-500 ${
                        hoveredCategory === category.id ? 'opacity-100' : 'opacity-0'
                      }`}>
                        {category.description}
                      </p>
                    </div>
                    
                    <div className={`mt-4 transform transition-all duration-500 ${
                      hoveredCategory === category.id ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                    }`}>
                      <span className="inline-flex items-center text-white font-medium">
                        Explore
                        <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </div>
                  </div>
                  
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30" />
                </Link>
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
