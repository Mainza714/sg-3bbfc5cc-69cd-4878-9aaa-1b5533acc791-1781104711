import { Layout } from "@/components/layout/Layout";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

export default function CanYouSeeUs() {
  return (
    <>
      <Head>
        <title>Can You See Us? | Centripetal Media</title>
        <meta name="description" content="Can You See Us? - Exploring the depths of human connection through powerful storytelling and exceptional performances." />
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

              <div className="relative w-full max-w-lg mx-auto aspect-square mb-12 bg-black">
                <Image
                  src="/CYSU_square01_now_streaming.png"
                  alt="Can You See Us? Movie Poster"
                  fill
                  className="object-contain rounded-lg"
                  priority
                />
              </div>
              
              <div className="space-y-8">
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">Can You See Us?</h1>
                  <div className="flex gap-2 mb-4">
                    <div className="inline-block bg-red-600 text-white px-4 py-1 text-sm font-semibold rounded">
                      DRAMA
                    </div>
                    <div className="inline-block bg-purple-600 text-white px-4 py-1 text-sm font-semibold rounded">
                      SOCIAL COMMENTARY
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl font-semibold mb-2">Director</h2>
                      <p className="text-gray-300">Kenny Mumba</p>
                    </div>

                    <div>
                      <h2 className="text-xl font-semibold mb-2">Writers</h2>
                      <ul className="text-gray-300">
                        <li>Lawrence Thompson</li>
                        <li>Andrew Thompson (additional writing)</li>
                        <li>Kenny Mumba (story)</li>
                      </ul>
                    </div>

                    <div>
                      <h2 className="text-xl font-semibold mb-2">Stars</h2>
                      <ul className="text-gray-300">
                        <li>Kangwa Chileshe</li>
                        <li>Ruth Jule</li>
                        <li>Thabo Kaamba</li>
                        <li>Patricia Mwanza</li>
                      </ul>
                    </div>

                    <div>
                      <h2 className="text-xl font-semibold mb-2">Technical Details</h2>
                      <ul className="text-gray-300 space-y-1">
                        <li><span className="text-white">Runtime:</span> 98 minutes</li>
                        <li><span className="text-white">Language:</span> English, Nyanja</li>
                        <li><span className="text-white">Release:</span> 2022</li>
                        <li><span className="text-white">Rating:</span> PG-13</li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl font-semibold mb-2">Synopsis</h2>
                      <p className="text-gray-300 mb-4">
                        Inspired by the extraordinary real-life journey of celebrated Zambian musician and humanitarian John Chiti, Can You See Us? is a towering achievement in African cinema. This profoundly moving, masterfully crafted coming-of-age masterpiece fearlessly confronts deep-seated social stigmas, superstition, and discrimination surrounding albinism.
                      </p>
                      <p className="text-gray-300 mb-4">
                        The story follows Joseph, a young boy born with albinism whose arrival is met with immediate rejection by a father who views him as a curse. Left to navigate a world clouded by ignorance and isolation, Joseph's journey is anchored by the fierce, unwavering love of his mother, Chama. Despite facing relentless bullying from his peers, Joseph's destiny shifts beautifully when he forms an unexpected bond with a local outcast who introduces him to the guitar. Through the transcendent power of music, love, and an indomitable spirit, Joseph remarkably transforms his pain into purpose—discovering his true identity and ultimately reshaping the heart of his entire community. It is a triumphant, deeply emotional celebration of human resilience that leaves an indelible mark on the viewer.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-xl font-semibold mb-2">Awards Won & Major Milestones</h2>
                      <p className="text-gray-300 mb-4">
                        A brilliant triumph for Zambian storytelling, Can You See Us? captured the hearts of critics and audiences alike, accumulating massive acclaim and shattering industry glass ceilings:
                      </p>
                      <ul className="text-gray-300 space-y-2">
                        <li>• <strong>Ngoma Awards (Zambia):</strong> Thabo Kaamba took home the coveted Best Actress in a Feature Film award for her absolutely breathtaking, tour-de-force performance cross-playing the role of the young boy, Joseph.</li>
                        <li>• <strong>International Circuit Recognition:</strong> Director Kenny "Roc" Mumba was highly praised for his visionary direction, securing the prestigious Best Director Southern Africa title on the international circuit.</li>
                        <li>• <strong>Sotambe Film Festival:</strong> The film stood out as the crown jewel of Zambia's premier film and arts festival, sweeping up critical praise and widespread festival acclaim during its monumental rollout.</li>
                      </ul>
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