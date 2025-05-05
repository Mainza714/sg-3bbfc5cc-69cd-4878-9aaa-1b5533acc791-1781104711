
import { Layout } from "@/components/layout/Layout";
import Image from "next/image";
import Head from "next/head";

export default function CanYouSeeUs() {
  return (
    <>
      <Head>
        <title>Can You See Us | Centripetal Media</title>
        <meta name="description" content="Can You See Us - A compelling drama directed by Kenny Mumba, featuring outstanding performances from Kangwa Chileshe, Ruth Jule, and Thabo Kaamba." />
      </Head>
      <Layout>
        <div className="bg-black text-white min-h-screen">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-6xl mx-auto">
              <div className="relative aspect-[16/9] mb-12">
                <Image
                  src="/can-you-see-us-slide-mab8v7ss.png"
                  alt="Can You See Us Movie Poster"
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              </div>
              
              <div className="space-y-8">
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">Can They See Us</h1>
                  <div className="inline-block bg-yellow-400 text-black px-4 py-1 text-sm font-semibold rounded">
                    DRAMA
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
                        <li>Andrew Thompson (additional writing)</li>
                        <li>Lawrence Thompson</li>
                      </ul>
                    </div>

                    <div>
                      <h2 className="text-xl font-semibold mb-2">Stars</h2>
                      <ul className="text-gray-300">
                        <li>Kangwa Chileshe</li>
                        <li>Ruth Jule</li>
                        <li>Thabo Kaamba</li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl font-semibold mb-2">About the Film</h2>
                      <p className="text-gray-300">
                        A powerful drama that explores compelling themes through the lens of 
                        exceptional storytelling. This film showcases the remarkable talent 
                        of Zambian filmmaking and brings to life a story that resonates with 
                        audiences worldwide.
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
