import Head from "next/head";
import Image from "next/image";
import { Layout } from "@/components/layout/Layout";
import Link from "next/link";

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

          {/* Connect Section */}
          <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6 text-black">CONNECT</h2>
                <div className="w-16 h-px bg-gray-300 mx-auto mb-12"></div>
                
                <p className="text-lg text-gray-600 font-light mb-12 leading-relaxed">
                  Follow our journey and stay connected with our latest projects and insights.
                </p>
                
                <div className="flex justify-center items-center gap-8">
                  <Link 
                    href="https://www.facebook.com/profile.php?id=100063657996917" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 text-gray-600 hover:text-black transition-colors"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    <span className="font-light tracking-wide">FACEBOOK</span>
                  </Link>
                  
                  <div className="w-px h-8 bg-gray-300"></div>
                  
                  <Link 
                    href="https://www.instagram.com/centripetal_media_zambia?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 text-gray-600 hover:text-black transition-colors"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.781c-.49 0-.928-.175-1.297-.49-.367-.315-.49-.753-.49-1.243 0-.49.123-.928.49-1.243.369-.367.807-.49 1.297-.49s.928.123 1.297.49c.367.315.49.753.49 1.243 0 .49-.123.928-.49 1.243-.369.315-.807.49-1.297.49zm-4.281 7.277c1.051 0 1.911-.367 2.587-1.051.675-.684 1.051-1.536 1.051-2.587 0-1.051-.376-1.903-1.051-2.587-.676-.684-1.536-1.051-2.587-1.051-1.051 0-1.911.367-2.587 1.051-.675.684-1.051 1.536-1.051 2.587 0 1.051.376 1.903 1.051 2.587.676.684 1.536 1.051 2.587 1.051z"/>
                    </svg>
                    <span className="font-light tracking-wide">INSTAGRAM</span>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
