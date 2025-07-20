
import { Layout } from "@/components/layout/Layout";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

export default function FadedMemories() {
  return (
    <>
      <Head>
        <title>Faded Memories | Centripetal Media</title>
        <meta name="description" content="Faded Memories - A poignant exploration of memory, loss, and the fragments of time that shape our understanding of the past." />
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
                  src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?q=80&w=2025&auto=format&fit=crop"
                  alt="Faded Memories Movie Poster"
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              </div>
              
              <div className="space-y-8">
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">Faded Memories</h1>
                  <div className="flex gap-2 mb-4">
                    <div className="inline-block bg-slate-600 text-white px-4 py-1 text-sm font-semibold rounded">
                      DRAMA
                    </div>
                    <div className="inline-block bg-rose-600 text-white px-4 py-1 text-sm font-semibold rounded">
                      FAMILY SAGA
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl font-semibold mb-2">Director</h2>
                      <p className="text-gray-300">Elena Mwamba</p>
                    </div>

                    <div>
                      <h2 className="text-xl font-semibold mb-2">Writers</h2>
                      <ul className="text-gray-300">
                        <li>Elena Mwamba</li>
                        <li>Peter Sakala</li>
                        <li>Grace Lungu (story development)</li>
                      </ul>
                    </div>

                    <div>
                      <h2 className="text-xl font-semibold mb-2">Stars</h2>
                      <ul className="text-gray-300">
                        <li>Thandiwe Mbewe</li>
                        <li>John Chisanga</li>
                        <li>Mary Banda</li>
                        <li>Christopher Zulu</li>
                      </ul>
                    </div>

                    <div>
                      <h2 className="text-xl font-semibold mb-2">Technical Details</h2>
                      <ul className="text-gray-300 space-y-1">
                        <li><span className="text-white">Runtime:</span> 118 minutes</li>
                        <li><span className="text-white">Language:</span> English, Nyanja, Tonga</li>
                        <li><span className="text-white">Release:</span> 2024</li>
                        <li><span className="text-white">Rating:</span> PG-13</li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl font-semibold mb-2">Synopsis</h2>
                      <p className="text-gray-300 mb-4">
                        "Faded Memories" tells the story of an elderly woman who begins to lose 
                        her memory to dementia, and her family's struggle to preserve the stories 
                        and wisdom she carries. As her memories fade, her granddaughter embarks 
                        on a journey to document their family history before it's lost forever.
                      </p>
                      <p className="text-gray-300">
                        The film explores the delicate relationship between memory and identity, 
                        showing how our past shapes who we are and how the stories we tell 
                        become the legacy we leave behind.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-xl font-semibold mb-2">Themes & Impact</h2>
                      <ul className="text-gray-300 space-y-1">
                        <li>• Intergenerational relationships and wisdom transfer</li>
                        <li>• The importance of oral history and storytelling</li>
                        <li>• Dealing with aging and memory loss in African families</li>
                        <li>• Cultural preservation through personal narratives</li>
                      </ul>
                    </div>

                    <div>
                      <h2 className="text-xl font-semibold mb-2">Director's Statement</h2>
                      <p className="text-gray-300">
                        "This film is deeply personal to me. It's about the stories our elders 
                        carry and the responsibility we have to preserve them. In African culture, 
                        our grandparents are living libraries, and when they pass, entire worlds 
                        of knowledge go with them." - Elena Mwamba
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
