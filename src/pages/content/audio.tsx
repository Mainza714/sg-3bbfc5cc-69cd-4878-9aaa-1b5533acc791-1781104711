
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Layout } from "@/components/layout/Layout";

export default function AudioContent() {
  const audioContent = [
    {
      id: "audio-project-1",
      title: "Voices of Africa",
      category: "Audio",
      image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=2070&auto=format&fit=crop",
      network: "Podcast Series",
      year: "2024",
      description: "An immersive audio documentary series exploring African stories."
    }
  ];

  return (
    <>
      <Head>
        <title>Audio | Centripetal Media</title>
        <meta name="description" content="Explore our audio content portfolio featuring podcasts and immersive audio experiences." />
      </Head>
      
      <Layout>
        <div className="pt-20">
          <section className="relative h-[50vh] w-full overflow-hidden">
            <div className="absolute inset-0 bg-black/60 z-10" />
            <div className="relative h-full w-full">
              <Image
                src="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=2070&auto=format&fit=crop"
                alt="Audio"
                fill
                priority
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white max-w-4xl tracking-tight leading-tight">
                AUDIO
              </h1>
            </div>
          </section>
          
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {audioContent.map((item) => (
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
