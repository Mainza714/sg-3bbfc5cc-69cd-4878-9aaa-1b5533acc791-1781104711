
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
      id: "john-doe",
      name: "John Doe",
      role: "Creative Director",
      bio: [
        "Award-winning filmmaker with over 15 years of experience directing documentaries and narrative features. John has led creative teams on projects for major networks and streaming platforms.",
        "His work has been recognized at international film festivals including Sundance, TIFF, and Cannes. John brings a unique vision and storytelling approach to every project, with a focus on authentic human stories."
      ],
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1600&auto=format&fit=crop",
      socialLinks: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        instagram: "https://instagram.com"
      }
    },
    {
      id: "jane-smith",
      name: "Jane Smith",
      role: "Director of Photography",
      bio: [
        "Cinematographer specializing in natural light and documentary-style storytelling with a distinct visual signature. Jane has shot award-winning films and commercials across five continents.",
        "Her approach combines technical precision with an intuitive understanding of visual storytelling. Jane is known for creating immersive visual experiences that enhance narrative and emotional impact."
      ],
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1600&auto=format&fit=crop",
      socialLinks: {
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com"
      }
    },
    {
      id: "michael-johnson",
      name: "Michael Johnson",
      role: "Executive Producer",
      bio: [
        "Former network executive with extensive experience in content development, financing, and distribution. Michael has overseen the production of over 200 hours of premium content.",
        "His strategic approach to production ensures that creative vision is realized within practical constraints. Michael excels at building partnerships and securing distribution for challenging creative projects."
      ],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1600&auto=format&fit=crop",
      socialLinks: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com"
      }
    },
    {
      id: "sarah-williams",
      name: "Sarah Williams",
      role: "Head of Post-Production",
      bio: [
        "Editor and post-production supervisor with expertise in crafting compelling narratives from complex material. Sarah has worked on documentaries, feature films, and branded content.",
        "Her technical knowledge spans the entire post-production workflow, from editing to color grading and sound design. Sarah is passionate about finding the emotional core of every story."
      ],
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1600&auto=format&fit=crop",
      socialLinks: {
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com"
      }
    },
    {
      id: "david-chen",
      name: "David Chen",
      role: "Lead Photographer",
      bio: [
        "Award-winning photographer with a background in photojournalism and commercial photography. David's work has been featured in major publications and exhibitions worldwide.",
        "His approach combines documentary authenticity with artistic vision, creating images that tell powerful stories. David specializes in portrait, documentary, and architectural photography."
      ],
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1600&auto=format&fit=crop",
      socialLinks: {
        instagram: "https://instagram.com"
      }
    },
    {
      id: "olivia-rodriguez",
      name: "Olivia Rodriguez",
      role: "Production Manager",
      bio: [
        "Experienced production manager with a background in international productions. Olivia has coordinated complex shoots in over 20 countries.",
        "Her meticulous planning and problem-solving skills ensure smooth production processes even in challenging environments. Olivia excels at building and managing diverse production teams."
      ],
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1600&auto=format&fit=crop",
      socialLinks: {
        linkedin: "https://linkedin.com"
      }
    },
    {
      id: "james-wilson",
      name: "James Wilson",
      role: "Sound Designer",
      bio: [
        "Sound designer and audio engineer with experience across film, television, and immersive media. James has created distinctive soundscapes for award-winning productions.",
        "His approach to sound design focuses on enhancing storytelling through subtle audio cues and atmospheric elements. James is passionate about the emotional impact of sound in visual media."
      ],
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1600&auto=format&fit=crop",
      socialLinks: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com"
      }
    },
    {
      id: "aisha-patel",
      name: "Aisha Patel",
      role: "International Fixer",
      bio: [
        "Experienced international fixer with a global network of contacts. Aisha specializes in facilitating productions in challenging locations across Asia and Africa.",
        "Her cultural knowledge and language skills enable smooth navigation of complex local environments. Aisha is adept at securing permits, locations, and local crew for international productions."
      ],
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1600&auto=format&fit=crop",
      socialLinks: {
        linkedin: "https://linkedin.com",
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
              Meet the passionate professionals behind Centripetal Media. Our diverse team brings together 
              expertise from across the media industry, united by a commitment to authentic storytelling 
              and creative excellence.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-12">
              {teamMembers.map((member) => (
                <div key={member.id} className="group">
                  <Link href={`/team/${member.id}`}>
                    <div className="cursor-pointer space-y-4">
                      <div className="relative aspect-square overflow-hidden rounded-lg">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-80"></div>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold tracking-tight group-hover:text-gray-300 transition-colors">
                          {member.name}
                        </h3>
                        <p className="text-gray-300 font-medium">
                          {member.role}
                        </p>
                        <p className="text-gray-400 text-sm line-clamp-2">
                          {member.bio[0]}
                        </p>
                      </div>
                    </div>
                  </Link>
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
