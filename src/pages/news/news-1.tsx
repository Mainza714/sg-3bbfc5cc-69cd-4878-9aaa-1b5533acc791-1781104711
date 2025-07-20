
import { Layout } from "@/components/layout/Layout";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function News1() {
  return (
    <>
      <Head>
        <title>Centripetal Announces New Film Slate for 2024 | Centripetal Media</title>
        <meta name="description" content="Centripetal Media announces an exciting new slate of films for 2024, showcasing diverse stories and exceptional talent." />
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
                  <div className="text-sm text-gray-500">April 15, 2023</div>
                  <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                    CENTRIPETAL ANNOUNCES NEW FILM SLATE FOR 2024
                  </h1>
                </header>

                <div className="relative aspect-[16/9] mb-8">
                  <Image
                    src="https://images.unsplash.com/photo-1489599735734-79b4169c2a78?q=80&w=2070&auto=format&fit=crop"
                    alt="Film Production"
                    fill
                    className="object-cover rounded-lg"
                    priority
                  />
                </div>

                <div className="prose prose-lg max-w-none space-y-6">
                  <p className="text-xl text-gray-700 leading-relaxed">
                    Centripetal Media is excited to announce our ambitious slate of films for 2024, 
                    featuring a diverse range of stories that showcase the depth and richness of 
                    African cinema while appealing to global audiences.
                  </p>

                  <p className="text-gray-700 leading-relaxed">
                    Our upcoming productions include compelling dramas, thought-provoking documentaries, 
                    and innovative storytelling approaches that push the boundaries of traditional 
                    filmmaking. Each project has been carefully selected to represent authentic voices 
                    and perspectives that deserve to be heard on the world stage.
                  </p>

                  <h2 className="text-2xl font-bold mt-8 mb-4">Upcoming Projects</h2>
                  
                  <p className="text-gray-700 leading-relaxed">
                    The slate includes several high-profile collaborations with international 
                    distributors and streaming platforms, ensuring our stories reach audiences 
                    across multiple continents. We're particularly excited about the opportunity 
                    to work with emerging talent alongside established industry professionals.
                  </p>

                  <p className="text-gray-700 leading-relaxed">
                    "This represents a significant milestone for Centripetal Media," said our 
                    creative director. "We're not just making films; we're building bridges 
                    between cultures and creating opportunities for the next generation of 
                    African filmmakers."
                  </p>

                  <h2 className="text-2xl font-bold mt-8 mb-4">Production Timeline</h2>
                  
                  <p className="text-gray-700 leading-relaxed">
                    Pre-production begins in the second quarter of 2024, with principal 
                    photography scheduled to commence in multiple locations across Africa. 
                    The films are expected to premiere at major international film festivals 
                    throughout 2024 and 2025.
                  </p>

                  <p className="text-gray-700 leading-relaxed">
                    Stay tuned for more announcements about casting, locations, and premiere 
                    dates as we move closer to production. This is just the beginning of an 
                    exciting new chapter for Centripetal Media.
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
