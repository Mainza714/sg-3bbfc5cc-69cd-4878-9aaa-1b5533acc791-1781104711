
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Layout } from "@/components/layout/Layout";

export default function AudioContent() {
  return (
    <>
      <Head>
        <title>Audio | Centripetal Media</title>
        <meta name="description" content="Explore our audio content portfolio featuring podcasts and immersive audio experiences." />
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
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Coming Soon</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  We're working on exciting audio content that will showcase compelling stories 
                  through immersive sound experiences. Stay tuned for updates on our upcoming 
                  podcast series and audio documentaries.
                </p>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
