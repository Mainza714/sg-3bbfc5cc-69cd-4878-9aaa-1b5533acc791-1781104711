
import Head from "next/head";
import Image from "next/image";
import { Layout } from "@/components/layout/Layout";

export default function About() {
  return (
    <>
      <Head>
        <title>About | Centripetal Media</title>
        <meta name="description" content="Learn about Centripetal Media, our mission, vision, and the team behind our innovative storytelling." />
      </Head>
      
      <Layout>
        <div className="pt-20">
          {/* Hero Section */}
          <section className="relative h-[70vh] w-full overflow-hidden">
            <div className="absolute inset-0 bg-black/60 z-10" />
            <div className="relative h-full w-full">
              <Image
                src="/e0a70f72bdae9885bfc32d7cd19a26a1-l-mab9d8uv.jpg"
                alt="Centripetal Media Zambia"
                fill
                priority
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white max-w-4xl tracking-tight leading-tight mb-6">
                ABOUT US
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-2xl">
                Dedicated to creating authentic, thought-provoking content
              </p>
            </div>
          </section>
          
          {/* Mission Section */}
          <section className="py-24 bg-white text-black">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">OUR MISSION</h2>
                <p className="text-xl leading-relaxed mb-8">
                  Centripetal Media was founded with a clear mission: to create compelling, authentic stories 
                  that challenge perspectives and inspire audiences. We believe in the transformative power 
                  of visual storytelling and its ability to connect people across cultural and social boundaries.
                </p>
                <p className="text-xl leading-relaxed mb-8">
                  Our approach combines innovative filmmaking techniques with thoughtful narratives, 
                  resulting in content that is both artistically significant and emotionally resonant.
                </p>
                <p className="text-xl leading-relaxed">
                  We are committed to supporting diverse voices and perspectives, collaborating with 
                  talented creators from various backgrounds to bring unique stories to the screen.
                </p>
              </div>
            </div>
          </section>
          
          {/* Team Section */}
          <section className="py-24 bg-gray-100 text-black">
            <div className="container mx-auto px-4 md:px-6">
              <div className="mb-16 text-center">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">OUR TEAM</h2>
                <div className="h-px w-16 bg-black mx-auto mt-4"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="text-center">
                  <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden mb-6">
                    <Image
                      src="/director-lawrence-thompson-mab9szby.png"
                      alt="Lawrence Thompson"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold tracking-tight mb-1">LAWRENCE THOMPSON</h3>
                  <p className="text-gray-600 mb-4">Founder & Creative Director</p>
                  <p className="text-gray-700">
                    A visionary filmmaker with extensive experience in directing and producing, 
                    Lawrence leads Centripetal Media with a passion for storytelling and a 
                    commitment to excellence in African cinema.
                  </p>
                </div>

                <div className="text-center">
                  <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden mb-6">
                    <Image
                      src="/amanda-rose.jpg"
                      alt="Amanda Rose"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold tracking-tight mb-1">AMANDA ROSE</h3>
                  <p className="text-gray-600 mb-4">Interior Designer</p>
                  <p className="text-gray-700">
                    With her keen eye for detail and creative vision, Amanda brings spaces to life 
                    through innovative design solutions that perfectly balance aesthetics and functionality.
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Values Section */}
          <section className="py-24 bg-black text-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">OUR VALUES</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {[
                    {
                      title: "AUTHENTICITY",
                      description: "We believe in telling stories that are genuine and true to the human experience."
                    },
                    {
                      title: "INNOVATION",
                      description: "We constantly push creative boundaries to discover new ways of storytelling."
                    },
                    {
                      title: "COLLABORATION",
                      description: "We value diverse perspectives and foster an environment of creative partnership."
                    },
                    {
                      title: "IMPACT",
                      description: "We create content that resonates, challenges, and inspires meaningful change."
                    }
                  ].map((value, index) => (
                    <div key={index}>
                      <h3 className="text-xl font-bold tracking-tight mb-4">{value.title}</h3>
                      <p className="text-gray-400">{value.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
