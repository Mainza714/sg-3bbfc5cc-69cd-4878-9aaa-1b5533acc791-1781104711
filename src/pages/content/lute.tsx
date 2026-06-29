import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Layout } from "@/components/layout/Layout";

export default function LutePage() {
  return (
    <>
      <Head>
        <title>Lute | Centripetal Media</title>
        <meta name="description" content="Lute - An African drama film by Centripetal Media. A powerful story of family, tradition, and resilience." />
        <meta name="keywords" content="Lute film, African drama, Centripetal Media, Zambian cinema, independent film, African storytelling, Lawrence Thompson" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Lute | Centripetal Media" />
        <meta property="og:description" content="A powerful African drama exploring family, tradition, and resilience." />
        <meta property="og:image" content="https://centripetalmedia.digital/LUTE_PREVIEW_2_Horzontal.jpg" />
        <meta property="og:url" content="https://centripetalmedia.digital/content/lute" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:title" content="Lute | Centripetal Media" />
        <meta name="twitter:description" content="A powerful African drama exploring family, tradition, and resilience." />
        <meta name="twitter:image" content="https://centripetalmedia.digital/LUTE_PREVIEW_2_Horzontal.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://centripetalmedia.digital/content/lute" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Movie",
              "name": "Lute",
              "description": "A powerful African drama exploring family, tradition, and resilience",
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
          
          <section className="relative h-[90vh] w-full overflow-hidden">
            <div className="absolute inset-0 bg-black/60 z-10" />
            <div className="relative h-full w-full">
              <Image
                src="/LUTE_PREVIEW_2_Horzontal.jpg"
                alt="Lute"
                fill
                priority
                className="object-contain"
              />
            </div>
            <div className="absolute inset-0 z-20 flex flex-col justify-center items-start px-4 md:px-8 lg:px-16">
              <div className="max-w-2xl">
                <div className="mb-4">
                  <span className="inline-block bg-amber-600 text-white px-3 py-1 text-sm font-medium rounded">
                    POST PRODUCTION
                  </span>
                </div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
                  LUTE
                </h1>
                <div className="flex items-center gap-6 text-white/80 mb-6">
                  <span className="text-lg">2026</span>
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
                      In the dark of night Young LUTE and her mother travel back to the village of Berry Lute's father, their lives are thrown upside down when Berry her father dies in a car crash. LUTE looks at the night sky and asks her mother "Mummy why is the sky the same are we going back home?" Thandiwe looks at her child and ponders if she understands what is going on "Our lives are going to change my child, please forgive me " and she begins to cry, LUTE wipes the tear from her mother's eyes and promises to take care of her mother and to look after her, As per tradition Thandiwe has to take the funeral to the village for all the relatives in his village to mourn him as well and for them to carry out traditional rites.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Suddenly the driver of the van car starts to honk the horn to announce the arrival of the funeral to the villagers. The vehicle winds down a narrow bush track, the next thing they see are fire torches along the road as villagers wait for their arrival. When they enter an opening in the village there is a loud sound of women wailing mournfully as per the Nsenga tradition. LUTE, her mother, and their entourage are welcomed and informed that the rites would take place the following morning.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-8">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Project Details</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Expected Release</span>
                        <span className="font-medium">2026</span>
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
                        <span className="font-medium">Post Production</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Cast</h3>
                    <div className="space-y-2 text-gray-700 text-sm">
                      <p>Catherine Mulope</p>
                      <p>Malumba Malumba</p>
                      <p>Kondwani Zulu</p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Production Team</h3>
                    <div className="space-y-2 text-gray-700 text-sm">
                      <p><span className="font-medium">Writer/Director:</span> Lawrence Thompson</p>
                      <p><span className="font-medium">Director of Photography:</span> Longwe Nyirenda</p>
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