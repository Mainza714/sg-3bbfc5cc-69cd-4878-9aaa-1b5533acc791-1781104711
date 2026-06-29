import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Layout } from "@/components/layout/Layout";

export default function FilmContent() {
  const filmContent = [
    {
      id: "can-they-see-us",
      title: "Can You See Us",
      category: "Film",
      image: "/CYSU_square01_now_streaming.png",
      network: "Netflix",
      year: "2022",
      description: "A powerful drama exploring themes of identity and belonging."
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
          
          <section className="relative w-full overflow-hidden bg-black">
            <div className="relative aspect-video w-full">
              <Image
                src="/Can_You_See_Us_16x9_now_streaming.png"
                alt="Film"
                fill
                priority
                className="object-contain"
              />
            </div>
            <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4 pointer-events-none">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white max-w-4xl tracking-tight leading-tight">
                FILM
              </h1>
            </div>
          </section>
          
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filmContent.map((item) => (
                  <Link key={item.id} href={`/content/can-you-see-us`} className="group">
                    <div className="space-y-4">
                      <div className="relative aspect-[16/9] overflow-hidden bg-gray-100">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-contain transition-transform duration-500 group-hover:scale-105"
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
