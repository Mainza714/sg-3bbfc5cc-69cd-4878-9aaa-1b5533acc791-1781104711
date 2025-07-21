
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Layout } from "@/components/layout/Layout";

export default function LutePage() {
  return (
    <>
      <Head>
        <title>Lute | Centripetal Media</title>
        <meta name="description" content="A mysterious drama in development, featuring an ensemble cast in an enigmatic narrative." />
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
          
          <section className="relative h-[70vh] w-full overflow-hidden">
            <div className="absolute inset-0 bg-black/60 z-10" />
            <div className="relative h-full w-full">
              <Image
                src="/lute-film-md8t0hqc.jpg"
                alt="Lute"
                fill
                priority
                className="object-cover"
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
                  LUTE
                </h1>
                <div className="flex items-center gap-6 text-white/80 mb-6">
                  <span className="text-lg">2025</span>
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
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Project Overview</h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      In the shadows of anticipation, a story unfolds that defies conventional narrative. Lute emerges as a cinematic exploration of human connection, where silence speaks louder than words and every gesture carries the weight of unspoken truths.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      This enigmatic project weaves together the threads of destiny and choice, creating a tapestry that challenges audiences to look beyond the surface. What begins as a simple tale transforms into something far more profound, leaving viewers questioning the very nature of storytelling itself.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Creative Vision</h3>
                    <p className="text-gray-700 leading-relaxed">
                      The creative team behind Lute has crafted a narrative that exists in the spaces between words, in the pauses between breaths. This is cinema that trusts its audience, inviting them to become active participants in the unfolding mystery.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Development Status</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Currently in the delicate stages of pre-production, Lute represents a bold step forward in contemporary African cinema. The project maintains an air of mystery that extends beyond its narrative into its very creation.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-8">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Project Details</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Expected Release</span>
                        <span className="font-medium">2025</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Production</span>
                        <span className="font-medium">Lawrence Thompson Film</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Genre</span>
                        <span className="font-medium">Drama</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Status</span>
                        <span className="font-medium">Pre-Production</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Cast</h3>
                    <div className="space-y-2 text-gray-700 text-sm">
                      <p>Naomi Sakala</p>
                      <p>Catherine Mulope</p>
                      <p>Malumba Malumba</p>
                      <p>Kondwani Zulu</p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Production Team</h3>
                    <div className="space-y-2 text-gray-700 text-sm">
                      <p><span className="font-medium">Producer:</span> Andrew Thompson</p>
                      <p><span className="font-medium">Writer:</span> Lawrence Thompson</p>
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
