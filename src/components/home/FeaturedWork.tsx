
import Image from "next/image";
import Link from "next/link";

export function FeaturedWork() {
  const projects = [
    {
      id: "project-1",
      title: "ECHOES OF TOMORROW",
      category: "Feature Film",
      image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      year: "2023"
    },
    {
      id: "project-2",
      title: "SILENT CURRENTS",
      category: "Documentary",
      image: "https://images.unsplash.com/photo-1533488765986-dfa2a9939acd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      year: "2022"
    },
    {
      id: "project-3",
      title: "FRACTURED LIGHT",
      category: "Short Film",
      image: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      year: "2023"
    }
  ];

  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">FEATURED WORK</h2>
          <div className="h-px w-16 bg-white mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link key={project.id} href={`/work/${project.id}`} className="group">
              <div className="relative aspect-[3/4] overflow-hidden mb-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold tracking-tight group-hover:text-gray-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mt-1">{project.category}</p>
                </div>
                <span className="text-gray-400">{project.year}</span>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link href="/work" className="inline-block border border-white px-8 py-3 text-sm tracking-wider hover:bg-white hover:text-black transition-colors">
            VIEW ALL WORK
          </Link>
        </div>
      </div>
    </section>
  );
}
