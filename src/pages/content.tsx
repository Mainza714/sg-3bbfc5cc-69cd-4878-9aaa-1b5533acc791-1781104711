import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Layout } from "@/components/layout/Layout";

export default function Content() {
  const categories = ["All", "Film", "Television", "Audio", "In Development"];
  const [activeCategory, setActiveCategory] = useState("All");
  
  const content = [
    {
      id: "can-they-see-us",
      title: "Mwabi: Can They See Us",
      category: "Film",
      image: "/can-you-see-us-slide-mad29y0i.png",
      network: "Netflix",
      year: "2024",
      description: "A powerful drama exploring themes of identity and belonging."
    },
    {
      id: "makofi-s1",
      title: "MAKOFI",
      category: "Television",
      image: "/makofi-mad1xrli.png",
      network: "Zambezi Magic",
      year: "2023",
      description: "A compelling series that captivates audiences across Africa."
    },
    {
      id: "turn-of-fortune",
      title: "Turn of Fortune",
      category: "Television",
      image: "/turn-of-fortune-mad296qa.jpg",
      network: "Zambezi Magic",
      year: "2022",
      description: "A drama series exploring life's unexpected twists and turns."
    },
    {
      id: "audio-project-1",
      title: "Voices of Africa",
      category: "Audio",
      image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=2070&auto=format&fit=crop",
      network: "Podcast Series",
      year: "2024",
      description: "An immersive audio documentary series exploring African stories."
    },
    {
      id: "fading-memories",
      title: "Fading Memories",
      category: "In Development",
      image: "/fading-memories-film-md8skxp3.jpg",
      network: "Lawrence Thomson Film",
      year: "2025",
      description: "A compelling drama featuring Naomi Sakala, Catherine Mulope, Leo Simukoko, and Kondwani Zulu. Directed by Lawrence Thomson."
    }
  ];
  
  const filteredContent = activeCategory === "All" 
    ? content 
    : content.filter(item => item.category === activeCategory);

  return (
    <>
      <Head>
        <title>Our Content | Centripetal Media</title>
        <meta name="description" content="Explore the diverse content portfolio of Centripetal Media, featuring films, television series, audio content, and projects in development." />
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
                OUR CONTENT
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
                    className={`px-4 py-2 text-sm tracking-wider transition-colors ${
                      activeCategory === category
                        ? "bg-black text-white"
                        : "border border-black text-black hover:bg-black hover:text-white"
                    }`}
                  >
                    {category.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </section>
          
          <section className="py-12 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredContent.map((item) => (
                  <Link key={item.id} href={`/content/${item.id}`} className="group">
                    <div className="space-y-4">
                      <div className="relative aspect-[16/9] overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between items-start">
                          <span className="text-xs font-medium text-gray-500 tracking-wider">
                            {item.category.toUpperCase()}
                          </span>
                          <span className="text-xs text-gray-500">{item.year}</span>
                        </div>
                        <h3 className="text-xl font-bold tracking-tight group-hover:text-gray-700 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 text-sm">{item.network}</p>
                        <p className="text-gray-500 text-sm line-clamp-2">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
