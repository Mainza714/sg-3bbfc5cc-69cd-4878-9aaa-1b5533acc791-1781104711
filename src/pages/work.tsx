
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Layout } from "@/components/layout/Layout";

export default function Work() {
  const categories = ["All", "Series", "Movies"];
  const [activeCategory, setActiveCategory] = useState("All");
  
  const projects = [
    {
      id: "makofi-s1",
      title: "MAKOFI",
      category: "Series",
      image: "/makofi-mad1xrli.png",
      network: "Zambezi Magic",
      year: "2023"
    },
    {
      id: "turn-of-fortune",
      title: "Turn of Fortune",
      category: "Series",
      image: "/turn-of-fortune-mad296qa.jpg",
      network: "Zambezi Magic",
      year: "2022"
    },
    {
      id: "can-they-see-us",
      title: "Mwabi: Can They See Us",
      category: "Movies",
      image: "/can-you-see-us-slide-mad29y0i.png",
      network: "Netflix",
      year: "2024"
    }
  ];
  
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <>
      <Head>
        <title>Our Work | Centripetal Media</title>
        <meta name="description" content="Explore the portfolio of Centripetal Media, featuring our original series and movies." />
      </Head>
      
      <Layout>
        <div className="pt-20">
          <section className="relative h-[50vh] w-full overflow-hidden">
            <div className="absolute inset-0 bg-black/60 z-10" />
            <div className="relative h-full w-full">
              <Image
                src="/whatsapp-image-2022-10-24-at-15-56-35-thumb-mad2e7u3.jpeg"
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
          
          <section className="py-12 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                  <Link key={project.id} href={`/work/${project.id}`} className="group">
                    <div className="relative aspect-[16/9] overflow-hidden mb-4">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-xl font-bold tracking-tight group-hover:text-gray-700 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-600">{project.network}</p>
                      <div className="flex justify-between items-center mt-2">
                        <p className="text-gray-600">{project.category}</p>
                        <span className="text-gray-600">{project.year}</span>
                      </div>
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
