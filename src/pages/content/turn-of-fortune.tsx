import { Layout } from "@/components/layout/Layout";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

export default function TurnOfFortune() {
  return (
    <>
      <Head>
        <title>Turn of Fortune | Centripetal Media</title>
        <meta name="description" content="Turn of Fortune - A gritty drama series exploring the harsh realities of life on the streets of Lusaka." />
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
                  alt="Turn of Fortune"
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
                      <p className="text-gray-300">Lawrence Thompson</p>
                    </div>

                    <div>
                      <h2 className="text-xl font-semibold mb-2">Writers</h2>
                      <ul className="text-gray-300">
                        <li>Lawrence Thompson</li>
                        <li>David Smith</li>
                      </ul>
                    </div>

                    <div>
                      <h2 className="text-xl font-semibold mb-2">Stars</h2>
                      <ul className="text-gray-300">
                        <li>Edward Mukudu</li>
                        <li>Lee Sendford</li>
                      </ul>
                    </div>

                    <div>
                      <h2 className="text-xl font-semibold mb-2">Technical Details</h2>
                      <ul className="text-gray-300 space-y-1">
                        <li><span className="text-white">Episodes:</span> 45</li>
                        <li><span className="text-white">Release:</span> 2019</li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl font-semibold mb-2">Synopsis</h2>
                      <p className="text-gray-300 mb-4">
                        Turn of Fortune is a gritty drama series that explores the harsh realities of life on the streets of Lusaka, where poverty, marginalization, and dangerous criminal influences shape the lives of the vulnerable.
                      </p>
                      <p className="text-gray-300 mb-4">
                        At the heart of the story is Ziphe, also known as David, a young boy raised in a violent and abusive home. His life takes a devastating turn when, while trying to protect his mother from yet another brutal beating, he strikes his abusive father with a heavy object. Believing he has killed him, Ziphe is consumed by fear and guilt.
                      </p>
                      <p className="text-gray-300 mb-4">
                        Terrified and desperate, he flees home and hides aboard a railway wagon. When he wakes up, he finds himself in Lusaka, alone and far from everything he knows. Now living as a fugitive, Ziphe must navigate the unforgiving streets while carrying the heavy burden of what he believes to be an unforgivable act.
                      </p>
                      <p className="text-gray-300 italic">
                        Breakthrough performance by Edward Mukudu.
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