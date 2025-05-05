
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
}

export function Services() {
  const services: Service[] = [
    {
      id: "television-production",
      title: "Television Production",
      description: "Full-service production from concept to delivery. We specialize in documentaries, branded content, and narrative storytelling that captivates audiences.",
      image: "https://images.unsplash.com/photo-1540655037529-dec987208707?q=80&w=1600&auto=format&fit=crop"
    },
    {
      id: "photography",
      title: "Photography",
      description: "Professional photography services capturing authentic moments with artistic vision. From editorial to commercial, we deliver striking visuals that tell your story.",
      image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1600&auto=format&fit=crop"
    },
    {
      id: "international-fixing",
      title: "International Fixing",
      description: "End-to-end production support for international projects. We handle logistics, permits, local crew hiring, and cultural navigation to ensure smooth production anywhere in the world.",
      image: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=1600&auto=format&fit=crop"
    },
    {
      id: "masterclass-facilitation",
      title: "Masterclass Facilitation",
      description: "Expert-led workshops and training sessions for filmmakers and content creators. Learn industry best practices and cutting-edge techniques from seasoned professionals.",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1600&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Our Services</h2>
          <p className="text-gray-400 max-w-3xl">
            Comprehensive media production services delivered with expertise and creativity.
            From concept to completion, we bring your vision to life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {services.map((service) => (
            <div key={service.id} className="group">
              <Link href={`/services/${service.id}`}>
                <div className="cursor-pointer space-y-4">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl md:text-2xl font-bold tracking-tight group-hover:text-gray-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 line-clamp-3">
                      {service.description}
                    </p>
                    <div className="flex items-center text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
