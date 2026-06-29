import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Layout } from "@/components/layout/Layout";

export default function InDevelopmentContent() {
  const inDevelopmentContent = [
    {
      id: "lute",
      title: "Lute",
      category: "In Development",
      image: "/lute-film-md8t0hqc.jpg",
      network: "Lawrence Thompson Film",
      year: "2026",
      description: ""
    },
    {
      id: "fading-memories",
      title: "Fading Memories",
      category: "In Development",
      image: "/fading-memories-film-md8tb00x.jpg",
      network: "Lawrence Thompson Film",
      year: "2027",
      description: ""
    }
  ];

  return (
    <>
      <Head>
        <title>In Development | Centripetal Media</title>
        <meta name="description" content="Explore our upcoming projects currently in development, featuring exciting new films and series." />
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
                src="/lute-film-md8t0hqc.jpg"
                alt="In Development"
                fill
                priority
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white max-w-4xl tracking-tight leading-tight">
                IN DEVELOPMENT
              </h1>
            </div>
          </section>
          
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {inDevelopmentContent.map((item) => (
                  <Link key={item.id} href={`/content/${item.id}`} className="group">
                    <div className="space-y-4">
                      <div className={`relative overflow-hidden ${
                        item.id === "fading-memories" ? "aspect-[3/4]" : "aspect-[16/9]"
                      }`}>
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
