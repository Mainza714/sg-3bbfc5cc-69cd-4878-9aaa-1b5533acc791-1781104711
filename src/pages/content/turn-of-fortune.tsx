import { Layout } from "@/components/layout/Layout";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

export default function TurnOfFortune() {
  return (
    <>
      <Head>
        <title>Turn of Fortune | Centripetal Media</title>
        <meta name="description" content="Turn of Fortune - When destiny takes an unexpected path, exploring themes of fate, choice, and redemption." />
      </Head>
      <Layout>
        <div className="bg-black text-white min-h-screen">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-6xl mx-auto">
              <div className="mb-8">
                <Link href="/content/television" className="inline-flex items-center text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to Television
                </Link>
              </div>

              <div className="relative aspect-[16/9] mb-12">
                <Image
                  src="/turn-of-fortune-mad296qa.jpg"
                  alt="Turn of Fortune Movie Poster"
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              </div>
              
              <div className="space-y-8">
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">Turn of Fortune</h1>
                  <div className="flex gap-2 mb-4">
                    <div className="inline-block bg-green-600 text-white px-4 py-1 text-sm font-semibold rounded">
                      THRILLER
                    </div>
                    <div className="inline-block bg-orange-600 text-white px-4 py-1 text-sm font-semibold rounded">
                      CRIME
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl font-semibold mb-2">Director</h2>
                      <p className="text-gray-300">Rebecca Phiri</p>
                    </div>

                    <div>
                      <h2 className="text-xl font-semibold mb-2">Writers</h2>
                      <ul className="text-gray-300">
                        <li>James Banda</li>
                        <li>Rebecca Phiri</li>
                        <li>Thomas Mwale (screenplay)</li>
                      </ul>
                    </div>

                    <div>
                      <h2 className="text-xl font-semibold mb-2">Stars</h2>
                      <ul className="text-gray-300">
                        <li>Daniel Lupupa</li>
                        <li>Mercy Mutale</li>
                        <li>Brian Mulonga</li>
                        <li>Catherine Phiri</li>
                      </ul>
                    </div>

                    <div>
                      <h2 className="text-xl font-semibold mb-2">Technical Details</h2>
                      <ul className="text-gray-300 space-y-1">
                        <li><span className="text-white">Runtime:</span> 115 minutes</li>
                        <li><span className="text-white">Language:</span> English, Tonga</li>
                        <li><span className="text-white">Release:</span> 2024</li>
                        <li><span className="text-white">Rating:</span> R</li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl font-semibold mb-2">Synopsis</h2>
                      <p className="text-gray-300 mb-4">
                        When a small-time businessman stumbles upon a briefcase full of money, 
                        his life takes a dramatic turn that sets off a chain of events involving 
                        corrupt officials, dangerous criminals, and moral dilemmas that test the 
                        very core of his character.
                      </p>
                      <p className="text-gray-300">
                        Set in the bustling streets of Lusaka, "Turn of Fortune" is a gripping 
                        thriller that explores how quickly circumstances can change and how far 
                        someone will go to protect their family when destiny takes an unexpected path.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-xl font-semibold mb-2">Production Highlights</h2>
                      <ul className="text-gray-300 space-y-1">
                        <li>• Shot entirely in Zambia with local cast and crew</li>
                        <li>• Features authentic locations across Lusaka and Livingstone</li>
                        <li>• Original score by award-winning composer Abel Chungu</li>
                        <li>• Breakthrough performance by Daniel Lupupa</li>
                      </ul>
                    </div>

                    <div>
                      <h2 className="text-xl font-semibold mb-2">Director's Vision</h2>
                      <p className="text-gray-300">
                        "I wanted to create a thriller that not only entertains but also reflects 
                        the moral complexities of modern African society. The film asks: what would 
                        you do when faced with an opportunity that could change everything?" - Rebecca Phiri
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
