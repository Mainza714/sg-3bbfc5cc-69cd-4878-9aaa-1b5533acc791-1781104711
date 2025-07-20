
import { Layout } from "@/components/layout/Layout";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

export default function Makofi() {
  return (
    <>
      <Head>
        <title>MAKOFI | Centripetal Media</title>
        <meta name="description" content="MAKOFI - A journey through time and memory, exploring the depths of human experience through compelling visual storytelling." />
      </Head>
      <Layout>
        <div className="bg-black text-white min-h-screen">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-6xl mx-auto">
              <div className="mb-8">
                <Link href="/content/film" className="inline-flex items-center text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to Film
                </Link>
              </div>

              <div className="relative aspect-[16/9] mb-12">
                <Image
                  src="/makofi-mad1xrli.png"
                  alt="MAKOFI Movie Poster"
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              </div>
              
              <div className="space-y-8">
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">MAKOFI</h1>
                  <div className="flex gap-2 mb-4">
                    <div className="inline-block bg-blue-600 text-white px-4 py-1 text-sm font-semibold rounded">
                      DRAMA
                    </div>
                    <div className="inline-block bg-gray-700 text-white px-4 py-1 text-sm font-semibold rounded">
                      PSYCHOLOGICAL THRILLER
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl font-semibold mb-2">Director</h2>
                      <p className="text-gray-300">Marcus Chilufya</p>
                    </div>

                    <div>
                      <h2 className="text-xl font-semibold mb-2">Writers</h2>
                      <ul className="text-gray-300">
                        <li>Sarah Mwanza</li>
                        <li>Marcus Chilufya</li>
                        <li>David Phiri (story consultant)</li>
                      </ul>
                    </div>

                    <div>
                      <h2 className="text-xl font-semibold mb-2">Stars</h2>
                      <ul className="text-gray-300">
                        <li>Chanda Mubanga</li>
                        <li>Joseph Kalenga</li>
                        <li>Grace Tembo</li>
                        <li>Michael Sata Jr.</li>
                      </ul>
                    </div>

                    <div>
                      <h2 className="text-xl font-semibold mb-2">Technical Details</h2>
                      <ul className="text-gray-300 space-y-1">
                        <li><span className="text-white">Runtime:</span> 127 minutes</li>
                        <li><span className="text-white">Language:</span> English, Bemba</li>
                        <li><span className="text-white">Release:</span> 2024</li>
                        <li><span className="text-white">Rating:</span> PG-13</li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl font-semibold mb-2">Synopsis</h2>
                      <p className="text-gray-300 mb-4">
                        MAKOFI takes viewers on an introspective journey through the fragmented memories 
                        of a young woman returning to her childhood home after years abroad. As she 
                        navigates the familiar yet changed landscape of her past, she must confront 
                        buried traumas and reconcile with family secrets that have shaped her identity.
                      </p>
                      <p className="text-gray-300">
                        Set against the backdrop of contemporary Zambia, the film weaves together 
                        past and present through stunning cinematography and powerful performances, 
                        exploring themes of belonging, forgiveness, and the weight of memory.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-xl font-semibold mb-2">Awards & Recognition</h2>
                      <ul className="text-gray-300 space-y-1">
                        <li>• Best Cinematography - Zambian Film Awards 2024</li>
                        <li>• Audience Choice Award - African Cinema Festival</li>
                        <li>• Official Selection - Toronto International Film Festival</li>
                        <li>• Best Actress - Southern African Film Festival</li>
                      </ul>
                    </div>

                    <div>
                      <h2 className="text-xl font-semibold mb-2">Production Notes</h2>
                      <p className="text-gray-300">
                        Filmed entirely on location in Lusaka and the Copperbelt Province, MAKOFI 
                        represents a new wave of Zambian cinema that combines international production 
                        values with authentic local storytelling.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
