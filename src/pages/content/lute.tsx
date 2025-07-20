
import { Layout } from "@/components/layout/Layout";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

export default function Lute() {
  return (
    <>
      <Head>
        <title>Lute | Centripetal Media</title>
        <meta name="description" content="Lute - A musical journey that explores the power of traditional instruments in contemporary storytelling." />
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
                  src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=2070&auto=format&fit=crop"
                  alt="Lute Movie Poster"
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              </div>
              
              <div className="space-y-8">
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">Lute</h1>
                  <div className="flex gap-2 mb-4">
                    <div className="inline-block bg-amber-600 text-white px-4 py-1 text-sm font-semibold rounded">
                      MUSICAL DRAMA
                    </div>
                    <div className="inline-block bg-indigo-600 text-white px-4 py-1 text-sm font-semibold rounded">
                      CULTURAL HERITAGE
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl font-semibold mb-2">Director</h2>
                      <p className="text-gray-300">Amara Kone</p>
                    </div>

                    <div>
                      <h2 className="text-xl font-semibold mb-2">Writers</h2>
                      <ul className="text-gray-300">
                        <li>Fatima Diallo</li>
                        <li>Amara Kone</li>
                        <li>Samuel Nyong (music consultant)</li>
                      </ul>
                    </div>

                    <div>
                      <h2 className="text-xl font-semibold mb-2">Stars</h2>
                      <ul className="text-gray-300">
                        <li>Kwame Asante</li>
                        <li>Asha Mwangi</li>
                        <li>Omar Traore</li>
                        <li>Zara Okafor</li>
                      </ul>
                    </div>

                    <div>
                      <h2 className="text-xl font-semibold mb-2">Technical Details</h2>
                      <ul className="text-gray-300 space-y-1">
                        <li><span className="text-white">Runtime:</span> 105 minutes</li>
                        <li><span className="text-white">Language:</span> English, Swahili, French</li>
                        <li><span className="text-white">Release:</span> 2024</li>
                        <li><span className="text-white">Rating:</span> PG</li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl font-semibold mb-2">Synopsis</h2>
                      <p className="text-gray-300 mb-4">
                        "Lute" follows the journey of a young musician who discovers an ancient 
                        lute that connects him to his ancestral heritage. As he learns to play 
                        the traditional instrument, he uncovers family secrets and embarks on 
                        a quest to preserve disappearing musical traditions.
                      </p>
                      <p className="text-gray-300">
                        Set against the backdrop of modern Africa, the film weaves together 
                        contemporary challenges with timeless musical traditions, exploring 
                        themes of identity, cultural preservation, and the universal language of music.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-xl font-semibold mb-2">Musical Heritage</h2>
                      <ul className="text-gray-300 space-y-1">
                        <li>• Features authentic traditional African instruments</li>
                        <li>• Original compositions blend classical and contemporary styles</li>
                        <li>• Collaboration with master musicians from across Africa</li>
                        <li>• Soundtrack recorded with live orchestral arrangements</li>
                      </ul>
                    </div>

                    <div>
                      <h2 className="text-xl font-semibold mb-2">Cultural Impact</h2>
                      <p className="text-gray-300">
                        The film serves as both entertainment and cultural documentation, 
                        preserving traditional musical knowledge while making it accessible 
                        to younger generations. It celebrates the rich musical heritage of 
                        Africa and its continued relevance in contemporary society.
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
