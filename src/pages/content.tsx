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
      href: "/content/film"
    },
    {
      id: "television",
      title: "TELEVISION",
      href: "/content/television"
    },
    {
      id: "audio",
      title: "AUDIO",
      href: "/content/audio"
    },
    {
      id: "in-development",
      title: "IN DEVELOPMENT",
      href: "/content/in-development"
    }
  ];

  return (
    <>
      <Head>
        <title>Content Portfolio | Centripetal Media Films & Television</title>
        <meta name="description" content="Explore Centripetal Media's diverse content portfolio spanning African films, television series, audio productions, and upcoming projects. Discover authentic African storytelling and independent cinema." />
        <meta name="keywords" content="African films, Zambian television series, independent cinema Africa, film portfolio, TV production Zambia, African media content, Centripetal Media films, African storytelling" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Content Portfolio | Centripetal Media Films & Television" />
        <meta property="og:description" content="Explore our diverse portfolio of African films, television series, and media content." />
        <meta property="og:image" content="https://centripetalmedia.digital/logo-cent-md8qd7zz.png" />
        <meta property="og:url" content="https://centripetalmedia.digital/content" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://centripetalmedia.digital/content" />
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
          <div className="container mx-auto px-4 md:px-6 h-screen flex flex-col justify-center">
            <div className="flex flex-col items-center space-y-12 py-8">
              {contentCategories.map((category) => (
                <Link
                  key={category.id}
                  href={category.href}
                  className="group relative"
                  onMouseEnter={() => setHoveredCategory(category.id)}
                  onMouseLeave={() => setHoveredCategory(null)}
                >
                  <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white hover:text-gray-300 transition-all duration-500 transform group-hover:scale-105">
                    {category.title}
                  </h2>
                  
                  <div className={`absolute -bottom-2 left-0 h-0.5 bg-white transition-all duration-500 ${
                    hoveredCategory === category.id ? 'w-full' : 'w-0'
                  }`} />
                </Link>
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
