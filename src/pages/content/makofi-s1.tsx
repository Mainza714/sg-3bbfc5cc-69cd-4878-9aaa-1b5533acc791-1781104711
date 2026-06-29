import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Layout } from "@/components/layout/Layout";

export default function MakofiPage() {
  return (
    <>
      <Head>
        <title>MAKOFI | Centripetal Media</title>
        <meta name="description" content="A compelling series that captivates audiences across Africa, streaming on Zambezi Magic." />
      </Head>
      
      <Layout>
        <div className="pt-20">
          <div className="container mx-auto px-4 md:px-6 mb-8">
            <Link href="/content/television" className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Television
            </Link>
          </div>
          
          <section className="relative h-[70vh] w-full overflow-hidden">
            <div className="absolute inset-0 bg-black/50 z-10" />
            <div className="relative h-full w-full">
              <Image
                src="/makofi-mad1xrli.png"
                alt="MAKOFI"
                fill
                priority
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 z-20 flex flex-col justify-center items-start px-4 md:px-8 lg:px-16">
              <div className="max-w-2xl">
                <div className="mb-4">
                  <span className="inline-block bg-purple-600 text-white px-3 py-1 text-sm font-medium rounded">
                    ZAMBEZI MAGIC
                  </span>
                </div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
                  MAKOFI
                </h1>
                <div className="flex items-center gap-6 text-white/80 mb-6">
                  <span className="text-lg">2021</span>
                  <span className="text-lg">•</span>
                  <span className="text-lg">Television Series</span>
                  <span className="text-lg">•</span>
                  <span className="text-lg">Drama</span>
                </div>
              </div>
            </div>
          </section>
          
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-8">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">About the Series</h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      MAKOFI is a compelling television series that has captivated audiences across Africa with its authentic storytelling and powerful performances. The series explores contemporary African life through the lens of relatable characters facing real-world challenges and triumphs.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Set in modern-day Zambia, MAKOFI weaves together multiple storylines that reflect the diverse experiences of African communities. The series has been praised for its cultural authenticity, strong character development, and its ability to address important social issues while maintaining engaging entertainment value.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Critical Reception</h3>
                    <p className="text-gray-700 leading-relaxed">
                      The series has received widespread acclaim from both critics and audiences for its authentic portrayal of African life and its commitment to telling stories that resonate with viewers across the continent. MAKOFI has established itself as a flagship production for Zambezi Magic.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Cultural Impact</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Beyond entertainment, MAKOFI has sparked important conversations about identity, community, and progress in contemporary Africa. The series has become a cultural touchstone, inspiring discussions about representation and storytelling in African media.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-8">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Series Details</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Premiere Year</span>
                        <span className="font-medium">2021</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Network</span>
                        <span className="font-medium">Zambezi Magic</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Genre</span>
                        <span className="font-medium">Drama</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Language</span>
                        <span className="font-medium">English</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Created By</span>
                        <span className="font-medium">Lawrence Thompson</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Production</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Produced by Centripetal Media for Zambezi Magic, MAKOFI represents the highest standards of African television production, combining compelling storytelling with exceptional production values.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Audience</h3>
                    <p className="text-gray-700 text-sm">
                      The series has built a dedicated following across Africa and beyond, resonating with viewers who appreciate authentic African storytelling and high-quality television production.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
