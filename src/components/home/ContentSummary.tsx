import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ContentSummary() {
  const featuredContent = [
    {
      id: "can-they-see-us",
      title: "Can You See Us",
      image: "/CYSU_square01_now_streaming.png",
      network: "Netflix",
      year: "2022",
      category: "FILM",
      description: "A powerful drama exploring themes of identity and belonging."
    },
    {
      id: "makofi-s1",
      title: "MAKOFI",
      image: "/makofi-mad1xrli.png",
      network: "Zambezi Magic",
      year: "2023",
      category: "TELEVISION",
      description: "A compelling series that captivates audiences across Africa."
    },
    {
      id: "turn-of-fortune",
      title: "Turn of Fortune",
      image: "/turn-of-fortune-mad296qa.jpg",
      network: "Zambezi Magic",
      year: "2022",
      category: "TELEVISION",
      description: "A drama series exploring life's unexpected twists and turns."
    },
    {
      id: "lute",
      title: "Lute",
      image: "/lute-film-md8t0hqc.jpg",
      network: "Lawrence Thompson Film",
      year: "2025",
      category: "IN DEVELOPMENT",
      description: "A compelling drama featuring Naomi Sakala, Catherine Mulope, Malumba Malumba, and Kondwani Zulu."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 md:mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Content</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            From compelling films to captivating television series, explore our diverse portfolio 
            of content that tells authentic stories and resonates with audiences worldwide.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {featuredContent.map((item) => (
            <div key={item.id} className="group">
              <div className="space-y-4">
                <div className="relative aspect-[16/9] overflow-hidden bg-gray-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-medium text-gray-500 tracking-wider">
                      {item.category}
                    </span>
                    <span className="text-xs text-gray-500">{item.year}</span>
                  </div>
                  <h3 className="text-lg font-bold tracking-tight group-hover:text-gray-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.network}</p>
                  <p className="text-gray-500 text-sm line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/content"
            className="inline-flex items-center px-6 py-3 bg-black text-white font-medium tracking-wider hover:bg-gray-800 transition-colors"
          >
            View All Content <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
