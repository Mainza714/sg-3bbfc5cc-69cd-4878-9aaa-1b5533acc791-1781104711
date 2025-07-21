
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Layout } from "@/components/layout/Layout";

export default function CanTheySeeUsPage() {
  return (
    <>
      <Head>
        <title>Mwabi: Can They See Us | Centripetal Media</title>
        <meta name="description" content="A powerful drama exploring themes of identity and belonging, streaming on Netflix." />
      </Head>
      
      <Layout>
        <div className="pt-20">
          <div className="container mx-auto px-4 md:px-6 mb-8">
            <Link href="/content/film" className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Films
            </Link>
          </div>
          
          <section className="relative h-[70vh] w-full overflow-hidden">
            <div className="absolute inset-0 bg-black/50 z-10" />
            <div className="relative h-full w-full">
              <Image
                src="/can-you-see-us-slide-mad29y0i.png"
                alt="Mwabi: Can They See Us"
                fill
                priority
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 z-20 flex flex-col justify-center items-start px-4 md:px-8 lg:px-16">
              <div className="max-w-2xl">
                <div className="mb-4">
                  <span className="inline-block bg-red-600 text-white px-3 py-1 text-sm font-medium rounded">
                    NETFLIX ORIGINAL
                  </span>
                </div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
                  MWABI: CAN THEY SEE US
                </h1>
                <div className="flex items-center gap-6 text-white/80 mb-6">
                  <span className="text-lg">2024</span>
                  <span className="text-lg">•</span>
                  <span className="text-lg">Film</span>
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
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Synopsis</h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      A powerful and emotionally charged drama that explores themes of identity, belonging, and the search for truth in contemporary society. Through compelling storytelling and authentic performances, the film delves into the complexities of human relationships and the courage it takes to be truly seen.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Set against a backdrop of social change, "Mwabi: Can They See Us" challenges audiences to confront their own perceptions while celebrating the resilience of the human spirit. This thought-provoking narrative weaves together multiple perspectives to create a tapestry of hope, struggle, and ultimate redemption.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Production Notes</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Produced by Centripetal Media in collaboration with Netflix, this film represents a significant milestone in African cinema. The production brought together talented cast and crew members to create an authentic and impactful viewing experience that resonates with global audiences.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-8">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Film Details</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Release Year</span>
                        <span className="font-medium">2024</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Platform</span>
                        <span className="font-medium">Netflix</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Genre</span>
                        <span className="font-medium">Drama</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Language</span>
                        <span className="font-medium">English</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Awards & Recognition</h3>
                    <p className="text-gray-700 text-sm">
                      This film has garnered critical acclaim for its authentic storytelling and powerful performances, establishing itself as a significant contribution to contemporary African cinema.
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
