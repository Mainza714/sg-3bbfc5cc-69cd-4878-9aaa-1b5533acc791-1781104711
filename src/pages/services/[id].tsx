
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import { Layout } from "@/components/layout/Layout";

interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string[];
  image: string;
  gallery: string[];
}

export default function ServicePage() {
  const router = useRouter();
  const { id } = router.query;
  
  const services: Service[] = [
    {
      id: "television-production",
      title: "Television Production",
      description: "Full-service production from concept to delivery. We specialize in documentaries, branded content, and narrative storytelling that captivates audiences.",
      longDescription: [
        "Our television production services cover every aspect of the production process, from initial concept development to final delivery. We work with broadcasters, streaming platforms, and independent producers to create compelling content that resonates with audiences.",
        "With a focus on quality storytelling and technical excellence, our team brings together creative vision and practical expertise to deliver exceptional results. We handle everything from pre-production planning and scriptwriting to shooting, editing, and post-production.",
        "Our experience spans documentaries, branded content, reality shows, and narrative storytelling. We pride ourselves on our ability to adapt to different genres and formats while maintaining the highest production standards."
      ],
      image: "https://images.unsplash.com/photo-1540655037529-dec987208707?q=80&w=1600&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1576826631139-5ea0a7e88b1c?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1523251343397-9225e4cb6319?q=80&w=1600&auto=format&fit=crop"
      ]
    },
    {
      id: "photography",
      title: "Photography",
      description: "Professional photography services capturing authentic moments with artistic vision. From editorial to commercial, we deliver striking visuals that tell your story.",
      longDescription: [
        "Our photography services combine technical skill with artistic vision to create compelling visual narratives. We specialize in editorial, commercial, and documentary photography, delivering images that capture the essence of your story.",
        "With an eye for detail and composition, our photographers work closely with clients to understand their vision and bring it to life. We use state-of-the-art equipment and post-processing techniques to ensure the highest quality results.",
        "Whether you need striking portraits, dynamic event coverage, or atmospheric location shots, we have the expertise to deliver images that make an impact and resonate with your audience."
      ],
      image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1600&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1520390138845-fd2d229dd553?q=80&w=1600&auto=format&fit=crop"
      ]
    },
    {
      id: "international-fixing",
      title: "International Fixing",
      description: "End-to-end production support for international projects. We handle logistics, permits, local crew hiring, and cultural navigation to ensure smooth production anywhere in the world.",
      longDescription: [
        "Our international fixing services provide comprehensive support for productions operating in unfamiliar territories. We leverage our global network of contacts and local knowledge to overcome the challenges of international production.",
        "From securing permits and locations to hiring local crew and navigating cultural sensitivities, we ensure that your production runs smoothly wherever you're filming. Our fixers have extensive experience working across different countries and cultures.",
        "We handle logistics, transportation, accommodation, and equipment rental, allowing you to focus on the creative aspects of your production. Our goal is to make international production as seamless and stress-free as possible."
      ],
      image: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=1600&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1476900543704-4312b78632f8?q=80&w=1600&auto=format&fit=crop"
      ]
    },
    {
      id: "masterclass-facilitation",
      title: "Masterclass Facilitation",
      description: "Expert-led workshops and training sessions for filmmakers and content creators. Learn industry best practices and cutting-edge techniques from seasoned professionals.",
      longDescription: [
        "Our masterclass facilitation services bring industry expertise directly to aspiring filmmakers and content creators. Led by seasoned professionals with years of experience, our workshops provide practical insights and hands-on training.",
        "We cover a wide range of topics, from directing and cinematography to editing and sound design. Our masterclasses are designed to be interactive and engaging, with a focus on practical skills that participants can immediately apply to their work.",
        "Whether you're looking to enhance your technical skills, develop your creative vision, or understand the business side of the industry, our masterclasses provide valuable knowledge and networking opportunities."
      ],
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1600&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1551818255-e6e10975bc17?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1600&auto=format&fit=crop"
      ]
    }
  ];
  
  const service = services.find(s => s.id === id);
  
  if (!service && typeof id === "string") {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-3xl font-bold mb-4">Service not found</h1>
          <p>The service you're looking for doesn't exist.</p>
        </div>
      </Layout>
    );
  }
  
  if (!service) {
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
        <title>{service.title} | Centripetal Media</title>
        <meta name="description" content={service.description} />
      </Head>
      
      <Layout>
        <div className="bg-black text-white">
          {/* Hero Section */}
          <div className="relative h-[60vh] md:h-[70vh]">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/50 flex items-end">
              <div className="container mx-auto px-4 md:px-6 pb-12 md:pb-24">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
                  {service.title}
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 max-w-3xl">
                  {service.description}
                </p>
              </div>
            </div>
          </div>
          
          {/* Content Section */}
          <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
              <div className="space-y-6">
                {service.longDescription.map((paragraph, index) => (
                  <p key={index} className="text-gray-300">
                    {paragraph}
                  </p>
                ))}
              </div>
              
              <div className="space-y-6">
                {service.gallery.map((image, index) => (
                  <div key={index} className="relative aspect-video overflow-hidden">
                    <Image
                      src={image}
                      alt={`${service.title} - Gallery image ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
