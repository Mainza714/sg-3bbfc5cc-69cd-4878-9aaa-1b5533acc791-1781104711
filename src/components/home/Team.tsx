
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export function Team() {
  const teamMembers: TeamMember[] = [
    {
      id: "john-doe",
      name: "John Doe",
      role: "Creative Director",
      bio: "Award-winning filmmaker with over 15 years of experience directing documentaries and narrative features.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1600&auto=format&fit=crop"
    },
    {
      id: "jane-smith",
      name: "Jane Smith",
      role: "Director of Photography",
      bio: "Cinematographer specializing in natural light and documentary-style storytelling with a distinct visual signature.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1600&auto=format&fit=crop"
    },
    {
      id: "michael-johnson",
      name: "Michael Johnson",
      role: "Executive Producer",
      bio: "Former network executive with extensive experience in content development, financing, and distribution.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1600&auto=format&fit=crop"
    },
    {
      id: "sarah-williams",
      name: "Sarah Williams",
      role: "Head of Post-Production",
      bio: "Editor and post-production supervisor with expertise in crafting compelling narratives from complex material.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1600&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Our Team</h2>
          <p className="text-gray-400 max-w-3xl">
            Meet the talented individuals behind Centripetal Media. Our diverse team brings together expertise 
            from across the media industry to deliver exceptional creative work.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
                      {member.bio}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            href="/team" 
            className="inline-flex items-center px-6 py-3 bg-white text-black font-medium rounded-md hover:bg-gray-100 transition-colors"
          >
            Meet the full team <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
