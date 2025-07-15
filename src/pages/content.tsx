import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { Layout } from "@/components/layout/Layout";

export default function Content() {
  const categories = ["FILM", "TELEVISION", "AUDIO", "IN DEVELOPMENT"];
  const [activeCategory, setActiveCategory] = useState("FILM");
  
  const contentItems = {
    FILM: [
      {
        id: "can-they-see-us",
        title: "Mwabi: Can They See Us",
        image: "/can-you-see-us-slide-mad29y0i.png",
        network: "Netflix",
        year: "2024",
        description: "A powerful drama exploring themes of identity and belonging."
      }
    ],
    TELEVISION: [
      {
        id: "makofi-s1",
        title: "MAKOFI",
        image: "/makofi-mad1xrli.png",
        network: "Zambezi Magic",
        year: "2023",
        description: "A compelling series that captivates audiences across Africa."
      },
      {
        id: "turn-of-fortune",
        title: "Turn of Fortune",
        image: "/turn-of-fortune-mad296qa.jpg",
        network: "Zambezi Magic",
        year: "2022",
        description: "A drama series exploring life's unexpected twists and turns."
      }
    ],
    AUDIO: [
      {
        id: "audio-project-1",
        title: "Podcast Series",
        image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=2070&auto=format&fit=crop",
        network: "Various Platforms",
        year: "2024",
        description: "Original audio content and podcast productions."
      }
    ],
    "IN DEVELOPMENT": [
      {
        id: "upcoming-film",
        title: "Untitled Project",
        image: "https://images.unsplash.com/photo-1489599735734-79b4af4e22f2?q=80&w=2070&auto=format&fit=crop",
        network: "TBA",
        year: "2025",
        description: "Exciting new projects currently in development."
      }
    ]
  };
  
  const currentContent = contentItems[activeCategory as keyof typeof contentItems] || [];

  return (
    <>
      <Head>
        <title>Content | Centripetal Media</title>
        <meta name="description" content="Explore Centripetal Media's content across film, television, audio, and upcoming projects." />
      </Head>
      
      <Layout>
        <div className="pt-20">
          <section className="relative h-[50vh] w-full overflow-hidden">
            <div className="absolute inset-0 bg-black/60 z-10" />
            <div className="relative h-full w-full">
              <Image
                src="/whatsapp-image-2022-10-24-at-15-56-35-thumb-mad2e7u3.jpeg"
                alt="Our Content"
                fill
                priority
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white max-w-4xl tracking-tight leading-tight">
                CONTENT
              </h1>
            </div>
          </section>
          
          <section className="py-12 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-6 py-3 text-sm tracking-wider transition-colors font-medium ${
                      activeCategory === category
                        ? "bg-black text-white"
                        : "border border-black text-black hover:bg-black hover:text-white"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </section>
          
          <section className="py-12 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              {currentContent.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {currentContent.map((item) => (
                    <div key={item.id} className="group">
                      <div className="relative aspect-[16/9] overflow-hidden mb-4">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <h3 className="text-xl font-bold tracking-tight group-hover:text-gray-700 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-gray-600">{item.network}</p>
                        <p className="text-gray-500 text-sm">{item.description}</p>
                        <div className="flex justify-between items-center mt-2">
                          <span className="text-gray-600 font-medium">{activeCategory}</span>
                          <span className="text-gray-600">{item.year}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Coming Soon</h3>
                  <p className="text-gray-600 max-w-md mx-auto">
                    We're working on exciting new content in this category. Stay tuned for updates!
                  </p>
                </div>
              )}
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}