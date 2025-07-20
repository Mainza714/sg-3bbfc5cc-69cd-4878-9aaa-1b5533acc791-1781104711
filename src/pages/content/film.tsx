
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Layout } from "@/components/layout/Layout";

export default function FilmContent() {
  const filmContent = [
    {
      id: "can-you-see-us",
      title: "Can You See Us",
      category: "Film",
      image: "/can-you-see-us-slide-mad29y0i.png",
      network: "Netflix",
      year: "2024",
      description: "A powerful drama exploring themes of identity and belonging."
    },
    {
      id: "makofi",
      title: "MAKOFI",
      category: "Film",
      image: "/makofi-mad1xrli.png",
      network: "Independent",
      year: "2024",
      description: "A journey through time and memory, exploring the depths of human experience."
    },
    {
      id: "turn-of-fortune",
      title: "Turn of Fortune",
      category: "Film",
      image: "/turn-of-fortune-mad296qa.jpg",
      network: "Independent",
      year: "2024",
      description: "When destiny takes an unexpected path, exploring themes of fate and choice."
    },
    {
      id: "lute",
      title: "Lute",
      category: "Film",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=2070&auto=format&fit=crop",
      network: "Independent",
      year: "2024",
      description: "A musical journey exploring traditional instruments in contemporary storytelling."
    }
  ];

  return (
    <>
      <Head>
        <title>Film | Centripetal Media</title>
        <meta name="description" content="Explore our film portfolio featuring compelling dramas and powerful storytelling." />
      </Head>
      
      <Layout>
        <div className="pt-20">
          <div className="container mx-auto px-4 md:px-6 mb-8">
            <Link href="/content" className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Content
            </Link>
          </div>
          
          <section className="relative h-[50vh] w-full overflow-hidden">
            <div className="absolute inset-0 bg-black/60 z-10" />
            <div className="relative h-full w-full">
              <Image
                src="/can-you-see-us-slide-mad29y0i.png"
                alt="Film"
                fill
                priority
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white max-w-4xl tracking-tight leading-tight">
                FILM
              </h1>
            </div>
          </section>
          
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filmContent.map((item) => (
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
