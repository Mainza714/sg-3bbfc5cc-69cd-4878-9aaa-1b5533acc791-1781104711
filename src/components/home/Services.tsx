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
      id: 'television-production',
      title: 'Television Production',
      description: 'Full-service production from concept to delivery. We specialize in documentaries, branded content, and narrative storytelling that captivates audiences.',
      image: '/img-20230119-wa0029-mab837x5.jpg'
    },
    {
      id: 'photography',
      title: 'Photography',
      description: 'Professional photography services capturing authentic moments with artistic vision. From editorial to commercial, we deliver striking visuals that tell your story.',
      image: '/img-20230119-wa0038-mab83amh.jpg'
    },
    {
      id: 'international-fixing',
      title: 'International Fixing',
      description: 'End-to-end production support for international projects. We handle logistics, permits, local crew hiring, and cultural navigation to ensure smooth production anywhere in the world.',
      image: '/whatsapp-image-2022-10-24-at-15-56-35-mab83cb2.jpeg'
    },
    {
      id: 'masterclass-facilitation',
      title: 'Masterclass Facilitation',
      description: 'Expert-led workshops and training sessions for filmmakers and content creators. Learn industry best practices and cutting-edge techniques from seasoned professionals.',
      image: '/whatsapp-image-2023-01-19-at-16-13-22-mab83ije.jpeg'
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