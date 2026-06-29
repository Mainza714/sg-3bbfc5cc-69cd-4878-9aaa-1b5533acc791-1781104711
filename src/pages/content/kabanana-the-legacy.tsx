import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Layout } from "@/components/layout/Layout";

export default function KabananaTheLegacyPage() {
  return (
    <>
      <Head>
        <title>Kabanana: The Legacy | Centripetal Media</title>
        <meta name="description" content="Kabanana: The Legacy - A powerful drama series exploring the fractured world of Zambia's elite business dynasty." />
      </Head>
      
      <Layout>
        <div className="pt-20">
          <div className="container mx-auto px-4 md:px-6 mb-8">
            <Link href="/content/in-development" className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to In Development
            </Link>
          </div>
          
          <section className="relative h-[90vh] w-full overflow-hidden">
            <div className="absolute inset-0 bg-black/60 z-10" />
            <div className="relative h-full w-full">
              <Image
                src="/Kabanana_Poster.jpg"
                alt="Kabanana: The Legacy"
                fill
                priority
                className="object-contain"
              />
            </div>
            <div className="absolute inset-0 z-20 flex flex-col justify-center items-start px-4 md:px-8 lg:px-16">
              <div className="max-w-2xl">
                <div className="mb-4">
                  <span className="inline-block bg-amber-600 text-white px-3 py-1 text-sm font-medium rounded">
                    IN DEVELOPMENT
                  </span>
                </div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
                  KABANANA: THE LEGACY
                </h1>
                <div className="flex items-center gap-6 text-white/80 mb-6">
                  <span className="text-lg">2027</span>
                  <span className="text-lg">•</span>
                  <span className="text-lg">Series</span>
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
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Series Synopsis</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      In the heart of Zambia's elite business world stands the mighty Kabanana empire — a dynasty built on power, fear, sacrifice, and secrets. Founded by the ruthless patriarch Maybin Kabanana and publicly managed by his charismatic son Jason Kabanana, the family empire stretches across transport, mining, property, and political influence.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mt-4">
                      But beneath the polished image of wealth and prestige lies a deeply fractured family haunted by betrayal, forbidden love, hidden children, and unresolved emotional wounds.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-8">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Project Details</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Expected Release</span>
                        <span className="font-medium">2027</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Production</span>
                        <span className="font-medium">Centripetal Media</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Genre</span>
                        <span className="font-medium">Drama</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Status</span>
                        <span className="font-medium">In Development</span>
                      </div>
                    </div>
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