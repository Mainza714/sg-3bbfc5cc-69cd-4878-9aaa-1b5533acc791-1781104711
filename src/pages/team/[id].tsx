
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Layout } from "@/components/layout/Layout";
import { ArrowLeft, Linkedin, Twitter, Instagram } from "lucide-react";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string[];
  image: string;
  expertise?: string[];
  projects?: {
    title: string;
    description: string;
    image: string;
  }[];
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
}

export default function TeamMemberPage() {
  const router = useRouter();
  const { id } = router.query;
  
  const teamMembers: TeamMember[] = [
    {
      id: "john-doe",
      name: "John Doe",
      role: "Creative Director",
      bio: [
        "Award-winning filmmaker with over 15 years of experience directing documentaries and narrative features. John has led creative teams on projects for major networks and streaming platforms.",
        "His work has been recognized at international film festivals including Sundance, TIFF, and Cannes. John brings a unique vision and storytelling approach to every project, with a focus on authentic human stories.",
        "Before joining Centripetal Media, John worked as a director and producer for National Geographic and BBC, where he developed his distinctive approach to visual storytelling and narrative structure."
      ],
      expertise: [
        "Documentary Filmmaking",
        "Narrative Direction",
        "Creative Team Leadership",
        "Visual Storytelling",
        "Content Development"
      ],
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1600&auto=format&fit=crop",
      projects: [
        {
          title: "MAKOFI",
          description: "A journey through time and memory, exploring cultural heritage and identity.",
          image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1600&auto=format&fit=crop"
        },
        {
          title: "CAN YOU SEE US",
          description: "An intimate portrait of invisible communities fighting for recognition.",
          image: "https://images.unsplash.com/photo-1492724724894-7464c27d0ceb?q=80&w=1600&auto=format&fit=crop"
        }
      ],
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
        "Her approach combines technical precision with an intuitive understanding of visual storytelling. Jane is known for creating immersive visual experiences that enhance narrative and emotional impact.",
        "Jane's background in fine art photography informs her cinematic style, which emphasizes composition, color theory, and the emotional qualities of light."
      ],
      expertise: [
        "Cinematography",
        "Natural Light Techniques",
        "Visual Storytelling",
        "Camera Operation",
        "Lighting Design"
      ],
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1600&auto=format&fit=crop",
      projects: [
        {
          title: "TURN OF FORTUNE",
          description: "A visual exploration of fate and circumstance in urban environments.",
          image: "https://images.unsplash.com/photo-1533267615634-39066a1a3146?q=80&w=1600&auto=format&fit=crop"
        },
        {
          title: "Urban Landscapes",
          description: "A photography series documenting architectural transformation in global cities.",
          image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=1600&auto=format&fit=crop"
        }
      ],
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
        "His strategic approach to production ensures that creative vision is realized within practical constraints. Michael excels at building partnerships and securing distribution for challenging creative projects.",
        "With a background in media finance and business development, Michael brings a unique perspective to content creation that balances artistic integrity with commercial viability."
      ],
      expertise: [
        "Production Management",
        "Content Development",
        "Financing",
        "Distribution Strategy",
        "Business Affairs"
      ],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1600&auto=format&fit=crop",
      projects: [
        {
          title: "International Documentary Series",
          description: "Executive producer for a six-part documentary series exploring global cultural phenomena.",
          image: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=1600&auto=format&fit=crop"
        },
        {
          title: "Brand Partnership Initiative",
          description: "Developed and implemented strategic content partnerships with major global brands.",
          image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1600&auto=format&fit=crop"
        }
      ],
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
        "Her technical knowledge spans the entire post-production workflow, from editing to color grading and sound design. Sarah is passionate about finding the emotional core of every story.",
        "Sarah's background in both narrative and documentary editing gives her a versatile approach to post-production that adapts to the unique needs of each project."
      ],
      expertise: [
        "Video Editing",
        "Post-Production Supervision",
        "Color Grading",
        "Narrative Structure",
        "Workflow Management"
      ],
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1600&auto=format&fit=crop",
      projects: [
        {
          title: "CAN YOU SEE US",
          description: "Lead editor for this award-winning documentary exploring human connection.",
          image: "https://images.unsplash.com/photo-1492724724894-7464c27d0ceb?q=80&w=1600&auto=format&fit=crop"
        },
        {
          title: "Commercial Campaign Series",
          description: "Post-production supervisor for a series of high-end commercial campaigns.",
          image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1600&auto=format&fit=crop"
        }
      ],
      socialLinks: {
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com"
      }
    }
  ];
  
  const member = teamMembers.find(m => m.id === id);
  
  if (!member && typeof id === "string") {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-3xl font-bold mb-4">Team member not found</h1>
          <p>The team member you're looking for doesn't exist.</p>
          <Link href="/team" className="inline-flex items-center mt-6 text-blue-500">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to team
          </Link>
        </div>
      </Layout>
    );
  }
  
  if (!member) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-3xl font-bold mb-4">Loading...</h1>
        </div>
      </Layout>
    );
  }

  return (
    <>
      <Head>
        <title>{member.name} | Centripetal Media Team</title>
        <meta name="description" content={`Learn more about ${member.name}, ${member.role} at Centripetal Media. ${member.bio[0]}`} />
      </Head>
      
      <Layout>
        <div className="pt-20 bg-black text-white">
          {/* Hero Section */}
          <div className="relative h-[50vh] md:h-[60vh]">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-black/30 flex items-end">
              <div className="container mx-auto px-4 md:px-6 pb-12 md:pb-24">
                <Link href="/team" className="inline-flex items-center text-gray-300 hover:text-white mb-6 transition-colors">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to team
                </Link>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-2">
                  {member.name}
                </h1>
                <p className="text-xl md:text-2xl text-gray-300">
                  {member.role}
                </p>
                
                {member.socialLinks && (
                  <div className="flex space-x-4 mt-6">
                    {member.socialLinks.linkedin && (
                      <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                        <Linkedin className="h-5 w-5" />
                      </a>
                    )}
                    {member.socialLinks.twitter && (
                      <a href={member.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                        <Twitter className="h-5 w-5" />
                      </a>
                    )}
                    {member.socialLinks.instagram && (
                      <a href={member.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                        <Instagram className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Bio Section */}
          <div className="container mx-auto px-4 md:px-6 py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24">
              <div className="md:col-span-2 space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">Biography</h2>
                {member.bio.map((paragraph, index) => (
                  <p key={index} className="text-gray-300">
                    {paragraph}
                  </p>
                ))}
              </div>
              
              {member.expertise && (
                <div>
                  <h2 className="text-2xl font-bold tracking-tight mb-6">Expertise</h2>
                  <ul className="space-y-2">
                    {member.expertise.map((skill, index) => (
                      <li key={index} className="text-gray-300">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
          
          {/* Projects Section */}
          {member.projects && (
            <div className="container mx-auto px-4 md:px-6 py-16">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">Featured Work</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {member.projects.map((project, index) => (
                  <div key={index} className="group">
                    <div className="space-y-4">
                      <div className="relative aspect-video overflow-hidden rounded-lg">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold tracking-tight">
                          {project.title}
                        </h3>
                        <p className="text-gray-400">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Contact Section */}
          <div className="container mx-auto px-4 md:px-6 py-16">
            <div className="bg-gray-900 p-8 md:p-12 rounded-lg">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Work with {member.name.split(" ")[0]}
              </h2>
              <p className="text-gray-300 mb-6">
                Interested in collaborating with {member.name} on your next project?
                Get in touch to discuss how we can bring your vision to life.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 bg-white text-black font-medium rounded-md hover:bg-gray-100 transition-colors"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
