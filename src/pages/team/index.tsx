
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Layout } from "@/components/layout/Layout";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string[];
  image: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
}

export default function TeamPage() {
  const teamMembers: TeamMember[] = [
    {
      id: "lawrence-thompson",
      name: "Lawrence Thompson",
      role: "Founder & Creative Director",
      bio: [
        "A visionary filmmaker with extensive experience in directing and producing, Lawrence leads Centripetal Media with a passion for storytelling and a commitment to excellence in African cinema.",
        "His innovative approach to filmmaking and dedication to authentic storytelling has established him as a leading voice in the African film industry."
      ],
      image: "/director-lawrence-thompson-mab9szby.png",
      socialLinks: {
        linkedin: "https://linkedin.com"
      }
    },
    {
      id: "amanda-rose",
      name: "Amanda Rose",
      role: "Interior Designer",
      bio: [
        "With her keen eye for detail and creative vision, Amanda brings spaces to life through innovative design solutions that perfectly balance aesthetics and functionality.",
        "Her expertise in interior design adds a unique perspective to our production value and set design capabilities."
      ],
      image: "/designer-amanda-rose-mab9sut2.jpg",
      socialLinks: {
        instagram: "https://instagram.com"
      }
    }
  ];

  return (
    <>
      <Head>
        <title>Our Team | Centripetal Media</title>
        <meta name="description" content="Meet the talented team behind Centripetal Media - creative professionals dedicated to exceptional storytelling and media production." />
      </Head>
      
      <Layout>
        <div className="pt-20 bg-black text-white">
          <div className="container mx-auto px-4 md:px-6 py-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Team</h1>
            <p className="text-gray-300 max-w-3xl text-lg md:text-xl mb-12">
              Meet the passionate professionals behind Centripetal Media. Our team brings together 
              expertise from across the media industry, united by a commitment to authentic storytelling 
              and creative excellence.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {teamMembers.map((member) => (
                <div key={member.id} className="group">
                  <div className="space-y-6">
                    <div className="relative aspect-square overflow-hidden rounded-lg">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold tracking-tight">
                        {member.name}
                      </h3>
                      <p className="text-gray-300 text-lg font-medium">
                        {member.role}
                      </p>
                      <div className="space-y-2">
                        {member.bio.map((paragraph, index) => (
                          <p key={index} className="text-gray-400">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="container mx-auto px-4 md:px-6 py-16">
            <div className="bg-gray-900 p-8 md:p-12 rounded-lg">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Join Our Team
              </h2>
              <p className="text-gray-300 mb-6">
                We're always looking for talented individuals who are passionate about storytelling and media production.
                If you're interested in joining our team, we'd love to hear from you.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 bg-white text-black font-medium rounded-md hover:bg-gray-100 transition-colors"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
