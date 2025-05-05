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
      id: "lawrence-thompson",
      name: "Lawrence Thompson",
      role: "Director",
      bio: "Leading Centripetal Media with vision and expertise in creating compelling visual narratives.",
      image: "/director-lawrence-thompson-mab5r1hd.png"
    },
    {
      id: "amanda-rose",
      name: "Amanda Rose",
      role: "Interior Designer",
      bio: "Creating stunning visual environments and spaces that enhance our production value.",
      image: "/designer-amanda-rose-mab5uigp.jpg"
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member) => (
            <div key={member.id} className="group max-w-md mx-auto">
              <Link href={`/team/${member.id}`}>
                <div className="cursor-pointer space-y-4">
                  <div className="relative aspect-square overflow-hidden rounded-lg w-full">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-80"></div>
                  </div>
                  <div className="space-y-2 text-center">
                    <h3 className="text-xl font-bold tracking-tight group-hover:text-gray-300 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-gray-300 font-medium">
                      {member.role}
                    </p>
                    <p className="text-gray-400 text-sm">
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