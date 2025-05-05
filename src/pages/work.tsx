
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Layout } from "@/components/layout/Layout";

export default function Work() {
  const categories = ["All", "Feature Films", "Documentaries", "Short Films", "Series"];
  const [activeCategory, setActiveCategory] = useState("All");
  
  const projects = [
    {
      id: "project-1",
      title: "ECHOES OF TOMORROW",
      category: "Feature Films",
      image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      year: "2023"
    },
    {
      id: "project-2",
      title: "SILENT CURRENTS",
      category: "Documentaries",
      image: "https://images.unsplash.com/photo-1533488765986-dfa2a9939acd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      year: "2022"
    },
    {
      id: "project-3",
      title: "FRACTURED LIGHT",
      category: "Short Films",
      image: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      year: "2023"
    },
    {
      id: "project-4",
      title: "BENEATH THE SURFACE",
      category: "Documentaries",
      image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      year: "2021"
    },
    {
      id: "project-5",
      title: "MIDNIGHT CHRONICLES",
      category: "Series",
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      year: "2022"
    },
    {
      id: "project-6",
      title: "THE LAST JOURNEY",
      category: "Feature Films",
      image: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      year: "2023"
    }
  ];
  
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <>
      <Head>
        <title>Our Work | Centripetal Media</title>
        <meta name="description" content="Explore the portfolio of Centripetal Media, featuring our feature films, documentaries, short films, and series." />
      </Head>
      
      <Layout>
        <div className="pt-20">
          {/* Hero Section */}
          <section className="relative h-[50vh] w-full overflow-hidden">
            <div className="absolute inset-0 bg-black/60 z-10" />
            <div className="relative h-full w-full">
              <Image
                src="https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                alt="Our Work"
                fill
                priority
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white max-w-4xl tracking-tight leading-tight">
                OUR WORK
              </h1>
            </div>
          </section>
          
          {/* Filter Section */}
          <section className="py-12 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 text-sm tracking-wider transition-colors ${
                      activeCategory === category
                        ? "bg-black text-white"
                        : "border border-black text-black hover:bg-black hover:text-white"
                    }`}
                  >
                    {category.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </section>
          
          {/* Projects Grid */}
          <section className="py-12 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
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
                        <h3 className="text-xl font-bold tracking-tight group-hover:text-gray-700 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 mt-1">{project.category}</p>
                      </div>
                      <span className="text-gray-600">{project.year}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
