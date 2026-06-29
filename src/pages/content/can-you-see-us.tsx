import { Layout } from "@/components/layout/Layout";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

export default function CanYouSeeUs() {
  return (
    <>
      <Head>
        <title>Can You See Us | Centripetal Media</title>
        <meta name="description" content="Can You See Us - Exploring the depths of human connection through powerful storytelling and exceptional performances." />
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
                  alt="Can You See Us Movie Poster"
                  fill
                  className="object-contain rounded-lg"
                  priority
                />
              </div>
              
              <div className="space-y-8">
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">Can You See Us</h1>
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
                        "Can You See Us" is a poignant exploration of visibility and recognition in 
                        contemporary society. The film follows three interconnected stories of 
                        individuals struggling to be seen and heard in a world that often overlooks 
                        their experiences and contributions.
                      </p>
                      <p className="text-gray-300">
                        Through intimate character studies and powerful performances, the film 
                        challenges audiences to examine their own perceptions and biases while 
                        celebrating the resilience of the human spirit.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-xl font-semibold mb-2">Critical Reception</h2>
                      <ul className="text-gray-300 space-y-1">
                        <li>• "A masterful debut that announces Kenny Mumba as a filmmaker to watch" - Film Quarterly</li>
                        <li>• "Powerful performances anchor this thought-provoking drama" - African Cinema Review</li>
                        <li>• "A film that stays with you long after the credits roll" - The Guardian</li>
                      </ul>
                    </div>

                    <div>
                      <h2 className="text-xl font-semibold mb-2">Themes</h2>
                      <p className="text-gray-300">
                        The film explores themes of identity, social justice, family dynamics, 
                        and the power of storytelling to bridge cultural and generational divides.
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
