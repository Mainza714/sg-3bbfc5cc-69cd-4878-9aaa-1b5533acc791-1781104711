
import { Layout } from "@/components/layout/Layout";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function News2() {
  return (
    <>
      <Head>
        <title>MAKOFI Selected for International Film Festival | Centripetal Media</title>
        <meta name="description" content="MAKOFI has been officially selected for screening at a prestigious international film festival, marking a significant achievement for Centripetal Media." />
      </Head>
      <Layout>
        <div className="bg-white text-black min-h-screen">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to Home
                </Link>
              </div>

              <article className="space-y-8">
                <header className="space-y-4">
                  <div className="text-sm text-gray-500">March 22, 2023</div>
                  <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                    MAKOFI SELECTED FOR INTERNATIONAL FILM FESTIVAL
                  </h1>
                </header>

                <div className="relative aspect-[16/9] mb-8">
                  <Image
                    src="/makofi-mad1xrli.png"
                    alt="MAKOFI Film"
                    fill
                    className="object-cover rounded-lg"
                    priority
                  />
                </div>

                <div className="prose prose-lg max-w-none space-y-6">
                  <p className="text-xl text-gray-700 leading-relaxed">
                    We are thrilled to announce that MAKOFI has been officially selected for 
                    screening at the prestigious Toronto International Film Festival (TIFF), 
                    marking a significant milestone for Centripetal Media and Zambian cinema.
                  </p>

                  <p className="text-gray-700 leading-relaxed">
                    This selection represents not only recognition of the film's artistic merit 
                    but also the growing international appreciation for African storytelling. 
                    MAKOFI joins a select group of films from around the world that will be 
                    showcased to industry professionals, critics, and cinema enthusiasts.
                  </p>

                  <h2 className="text-2xl font-bold mt-8 mb-4">About the Selection</h2>
                  
                  <p className="text-gray-700 leading-relaxed">
                    The film was chosen from thousands of submissions worldwide, highlighting 
                    its unique narrative approach and exceptional production values. The 
                    selection committee praised MAKOFI's "compelling exploration of memory 
                    and identity, brought to life through stunning cinematography and 
                    powerful performances."
                  </p>

                  <p className="text-gray-700 leading-relaxed">
                    Director Marcus Chilufya expressed his excitement: "Having MAKOFI selected 
                    for TIFF is a dream come true. It's an opportunity to share our story with 
                    a global audience and showcase the incredible talent we have in Zambia."
                  </p>

                  <h2 className="text-2xl font-bold mt-8 mb-4">Festival Screening Details</h2>
                  
                  <p className="text-gray-700 leading-relaxed">
                    MAKOFI will screen multiple times during the festival, with the premiere 
                    scheduled for the opening week. The film will be presented in its original 
                    format with subtitles, ensuring international audiences can fully appreciate 
                    the authentic dialogue and cultural nuances.
                  </p>

                  <p className="text-gray-700 leading-relaxed">
                    This achievement opens doors for future collaborations and distribution 
                    opportunities, potentially bringing MAKOFI to theaters and streaming 
                    platforms worldwide. We look forward to sharing more updates as the 
                    festival approaches.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
