import Head from "next/head";
import Image from "next/image";
import { Layout } from "@/components/layout/Layout";
import Link from "next/link";

export default function About() {
  return (
    <>
      <Head>
        <title>About Centripetal Media | African Film & Television Production Studio</title>
        <meta name="description" content="Learn about Centripetal Media, a leading African film production company based in Zambia. Discover our mission, vision, and the creative team behind our innovative storytelling and authentic African cinema." />
        <meta name="keywords" content="African film studio, Zambian film production, independent filmmakers Africa, Lawrence Thompson director, African storytelling, film production company Zambia, African cinema, television production Africa" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="About Centripetal Media | African Film & Television Production Studio" />
        <meta property="og:description" content="Leading African film production company creating authentic stories from Zambia to the world." />
        <meta property="og:image" content="https://centripetalmedia.digital/Centripetal_logo.jpeg" />
        <meta property="og:url" content="https://centripetalmedia.digital/about" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:title" content="About Centripetal Media | African Film Production Studio" />
        <meta name="twitter:description" content="Leading African film production company creating authentic stories from Zambia to the world." />
        <meta name="twitter:image" content="https://centripetalmedia.digital/Centripetal_logo.jpeg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://centripetalmedia.digital/about" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Centripetal Media",
              "description": "African film and television production studio creating authentic stories from Zambia to the world",
              "url": "https://centripetalmedia.digital",
              "logo": "https://centripetalmedia.digital/Centripetal_logo.jpeg",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "ZM",
                "addressRegion": "Zambia"
              },
              "founder": {
                "@type": "Person",
                "name": "Lawrence Thompson",
                "jobTitle": "Founder & Creative Director"
              },
              "sameAs": [
                "https://www.facebook.com/profile.php?id=100063657996917",
                "https://www.instagram.com/centripetal_media_zambia"
              ]
            })
          }}
        />
      </Head>
      
      <Layout>
        <div className="pt-20">
          {/* Hero Section */}
          <section className="relative h-[70vh] min-h-[500px]">
            <Image
              src="/MG_9756.jpg"
              alt="Centripetal Media"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl">
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-tight mb-6">
                    ABOUT US
                  </h1>
                  <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed">
                    The Circle of Vision
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Intro Section */}
          <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto text-center">
                <p className="text-2xl md:text-3xl leading-relaxed text-gray-900 font-light mb-8">
                  Bringing African stories to the world through powerful visual storytelling.
                </p>
                <p className="text-lg md:text-xl leading-relaxed text-gray-600 font-light">
                  At Centripetal Media, we believe stories do more than entertain, they shape culture, challenge perspectives, and inspire change. Our vision is rooted in authentic African storytelling that reflects the richness, complexity, and beauty of the continent.
                </p>
                <p className="text-lg md:text-xl leading-relaxed text-gray-600 font-light mt-6">
                  We create stories that move people.
                </p>
              </div>
            </div>
          </section>
          
          {/* Who We Are Section */}
          <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src="/Picture_with_president.jpg"
                    alt="Centripetal Media Team"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 text-black">Who We Are</h2>
                  <div className="space-y-6 text-gray-700 leading-relaxed">
                    <p>
                      Centripetal Media Zambia (CMZ) is a Zambian-based film and television production company dedicated to producing high-quality, impactful content for local and global audiences.
                    </p>
                    <p>
                      From feature films and television dramas to documentaries and digital productions, we specialize in compelling narratives, striking visuals, and meaningful storytelling. Our work combines creative excellence with cultural authenticity, ensuring every production resonates deeply with its audience.
                    </p>
                    <p>
                      Over the years, CMZ has built a reputation for delivering bold, socially relevant, and emotionally powerful stories that reflect African society while meeting international production standards.
                    </p>
                    <p>
                      Our portfolio includes acclaimed productions such as <strong>Can You See Us</strong>, <strong>Makofi</strong>, and <strong>Turn of Fortune</strong>, as well as exciting upcoming projects including <strong>Lute</strong> and <strong>Fading Memories</strong>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Vision & Mission Section */}
          <section className="py-24 bg-black text-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
                <div className="space-y-6">
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Vision</h2>
                  <p className="text-lg leading-relaxed text-gray-300">
                    To be Africa's leading professional media hub, producing inspirational and entertaining content that connects with audiences across the world.
                  </p>
                </div>
                <div className="space-y-6">
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Mission</h2>
                  <p className="text-lg leading-relaxed text-gray-300">
                    To inspire and entertain audiences in Africa and beyond through organic storytelling that reflects the diverse African landscape, powered by exceptional creative talent and innovation.
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          {/* What We Do Section */}
          <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-black">What We Do</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {[
                  {
                    title: "Film Production",
                    description: "We develop and produce powerful films that entertain, provoke thought, and spark conversation. Our productions are built around authentic storytelling, emotional depth, and cinematic excellence."
                  },
                  {
                    title: "Television Production",
                    description: "From drama series to entertainment programming, we create television content designed to captivate audiences and build lasting cultural impact."
                  },
                  {
                    title: "Documentaries",
                    description: "We produce compelling documentaries focused on important social, cultural, and developmental issues. Our documentary work shines a light on stories that matter and drives meaningful dialogue."
                  },
                  {
                    title: "International Fixing",
                    description: "CMZ provides trusted local production support for international filmmakers, broadcasters, and media organizations working in Zambia and across the region. Our expertise spans logistics, location scouting, research, permits, and production coordination."
                  },
                  {
                    title: "Concept Development",
                    description: "Great productions begin with great ideas. We specialize in concept creation, story development, scriptwriting, and creative direction, helping transform ideas into powerful screen experiences."
                  }
                ].map((service, index) => (
                  <div key={index} className="bg-gray-50 p-8 rounded-lg">
                    <h3 className="text-xl font-bold mb-4 text-black">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          {/* Kabanana Image Break */}
          <section className="relative h-[50vh] min-h-[400px]">
            <Image
              src="/Kabanana_-_series.jpg"
              alt="Kabanana Series"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center px-4">
                <p className="text-2xl md:text-4xl text-white font-light italic">
                  "Stories shape culture. We create stories that move it."
                </p>
              </div>
            </div>
          </section>
          
          {/* Why Centripetal Media Section */}
          <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-black">Why Centripetal Media</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {[
                  {
                    title: "Award-Winning Storytelling",
                    description: "We create stories that are impactful, memorable, and culturally relevant."
                  },
                  {
                    title: "Authentic African Narratives",
                    description: "Our work reflects real African experiences with honesty and depth."
                  },
                  {
                    title: "International Production Standards",
                    description: "We deliver world-class production quality from development to final delivery."
                  },
                  {
                    title: "Strong Regional Network",
                    description: "Our connections across key sectors enable seamless production support across Southern Africa."
                  },
                  {
                    title: "Creative Excellence",
                    description: "Our team combines talent, innovation, and experience to produce exceptional content."
                  }
                ].map((reason, index) => (
                  <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                    <h3 className="text-lg font-bold mb-3 text-black">{reason.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          {/* Client List Section */}
          <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-black">Client List</h2>
                <div className="w-16 h-px bg-gray-300 mx-auto"></div>
              </div>
              <div className="max-w-4xl mx-auto">
                <Image
                  src="/client-list.png"
                  alt="Centripetal Media Client List"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </section>
          
          {/* Closing Section */}
          <section className="py-24 bg-black text-white">
            <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Our Commitment</h2>
              <p className="text-lg md:text-xl leading-relaxed text-gray-300 mb-6">
                At Centripetal Media, storytelling sits at the center of everything we do.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-gray-300 mb-6">
                We are committed to pushing the boundaries of African film and television through authenticity, innovation, and creative excellence.
              </p>
              <p className="text-2xl md:text-3xl font-light text-white mt-12">
                Stories shape culture. We create stories that move it.
              </p>
            </div>
          </section>
          
          {/* Connect Section */}
          <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-black">Connect</h2>
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