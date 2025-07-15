
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
          {/* Clean Hero Section - No Background Image */}
          <section className="py-32 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-black tracking-tight leading-tight mb-8">
                  ABOUT US
                </h1>
                <div className="w-24 h-px bg-black mx-auto mb-8"></div>
                <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
                  Dedicated to creating authentic, thought-provoking content
                </p>
              </div>
            </div>
          </section>
          
          {/* Mission Section */}
          <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6 text-black">OUR MISSION</h2>
                  <div className="w-16 h-px bg-gray-300 mx-auto"></div>
                </div>
                
                <div className="space-y-8 text-center">
                  <p className="text-lg md:text-xl leading-relaxed text-gray-700 font-light">
                    Centripetal Media was founded with a clear mission: to create compelling, authentic stories 
                    that challenge perspectives and inspire audiences. We believe in the transformative power 
                    of visual storytelling and its ability to connect people across cultural and social boundaries.
                  </p>
                  <p className="text-lg md:text-xl leading-relaxed text-gray-700 font-light">
                    Our approach combines innovative filmmaking techniques with thoughtful narratives, 
                    resulting in content that is both artistically significant and emotionally resonant.
                  </p>
                  <p className="text-lg md:text-xl leading-relaxed text-gray-700 font-light">
                    We are committed to supporting diverse voices and perspectives, collaborating with 
                    talented creators from various backgrounds to bring unique stories to the screen.
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Team Section */}
          <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6 text-black">OUR TEAM</h2>
                <div className="w-16 h-px bg-gray-300 mx-auto"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
                <div className="text-center">
                  <div className="relative w-56 h-56 mx-auto rounded-full overflow-hidden mb-8 shadow-lg">
                    <Image
                      src="/director-lawrence-thompson-mab9szby.png"
                      alt="Lawrence Thompson"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-light tracking-tight mb-2 text-black">LAWRENCE THOMPSON</h3>
                  <p className="text-gray-500 mb-6 font-light tracking-wide">Founder & Creative Director</p>
                  <p className="text-gray-600 leading-relaxed font-light">
                    A visionary filmmaker with extensive experience in directing and producing, 
                    Lawrence leads Centripetal Media with a passion for storytelling and a 
                    commitment to excellence in African cinema.
                  </p>
                </div>

                <div className="text-center">
                  <div className="relative w-56 h-56 mx-auto rounded-full overflow-hidden mb-8 shadow-lg">
                    <Image
                      src="/designer-amanda-rose-mad2i4hm.jpg"
                      alt="Amanda Rose"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-light tracking-tight mb-2 text-black">AMANDA ROSE</h3>
                  <p className="text-gray-500 mb-6 font-light tracking-wide">Interior Designer</p>
                  <p className="text-gray-600 leading-relaxed font-light">
                    With her keen eye for detail and creative vision, Amanda brings spaces to life 
                    through innovative design solutions that perfectly balance aesthetics and functionality.
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Values Section */}
          <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-20">
                  <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6 text-black">OUR VALUES</h2>
                  <div className="w-16 h-px bg-gray-300 mx-auto"></div>
                </div>
                
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
                    <div key={index} className="text-center p-8">
                      <h3 className="text-xl font-light tracking-wider mb-6 text-black">{value.title}</h3>
                      <p className="text-gray-600 leading-relaxed font-light">{value.description}</p>
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
