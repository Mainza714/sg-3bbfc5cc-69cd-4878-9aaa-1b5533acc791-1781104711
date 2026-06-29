import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Layout } from "@/components/layout/Layout";

export default function FadingMemoriesPage() {
  return (
    <>
      <Head>
        <title>Fading Memories | African Film in Development | Centripetal Media</title>
        <meta name="description" content="Fading Memories - A haunting African drama exploring memory and time by Centripetal Media. Where the past and present collide in unexpected ways through authentic African cinema." />
        <meta name="keywords" content="Fading Memories film, African drama, memory film, Centripetal Media, Zambian cinema, independent film, African storytelling, Lawrence Thompson director" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Fading Memories | African Film in Development | Centripetal Media" />
        <meta property="og:description" content="A haunting exploration of memory and time where past and present collide in African cinema." />
        <meta property="og:image" content="https://centripetalmedia.digital/fading-memories-film-md8tb00x.jpg" />
        <meta property="og:url" content="https://centripetalmedia.digital/content/fading-memories" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:title" content="Fading Memories | African Film in Development" />
        <meta name="twitter:description" content="A haunting exploration of memory and time where past and present collide in African cinema." />
        <meta name="twitter:image" content="https://centripetalmedia.digital/fading-memories-film-md8tb00x.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://centripetalmedia.digital/content/fading-memories" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Movie",
              "name": "Fading Memories",
              "description": "A haunting exploration of memory and time where past and present collide in African cinema",
              "productionCompany": {
                "@type": "Organization",
                "name": "Centripetal Media"
              },
              "director": {
                "@type": "Person",
                "name": "Lawrence Thompson"
              },
              "genre": "Drama",
              "inLanguage": "en",
              "countryOfOrigin": "ZM"
            })
          }}
        />
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
            <div className="absolute inset-0 bg-black/70 z-10" />
            <div className="relative h-full w-full">
              <Image
                src="/fading-memories-film-md8tb00x.jpg"
                alt="Fading Memories"
                fill
                priority
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4">
              <div className="max-w-3xl">
                <div className="mb-4">
                  <span className="inline-block bg-indigo-600 text-white px-3 py-1 text-sm font-medium rounded">
                    IN DEVELOPMENT
                  </span>
                </div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
                  FADING MEMORIES
                </h1>
                <div className="flex items-center justify-center gap-6 text-white/80 mb-6">
                  <span className="text-lg">2027</span>
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
                    <p className="text-lg text-gray-700 leading-relaxed">
                      In the twilight of her career, respected HR professional Prisca is diagnosed with early-onset Alzheimer's, sparking a family reckoning as her children grapple with the responsibility of caring for their once-invincible matriarch.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-8">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Project Information</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Anticipated Release</span>
                        <span className="font-medium">2027</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Production House</span>
                        <span className="font-medium">Centripetal</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Genre</span>
                        <span className="font-medium">Drama</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Development Stage</span>
                        <span className="font-medium">Pre-Production</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Production Team</h3>
                    <div className="space-y-2 text-gray-700 text-sm">
                      <p><span className="font-medium">Writer/Director:</span> Lawrence Thompson</p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Artistic Statement</h3>
                    <p className="text-gray-700 text-sm italic">
                      "Memory is not a recording device, but a creative act. This film explores the poetry found in the spaces between what we remember and what actually was."
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