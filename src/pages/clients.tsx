
import Head from "next/head";
import Image from "next/image";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";

interface ClientLogo {
  name: string;
  src: string;
  alt: string;
}

export default function ClientsPage() {
  const clientLogos: ClientLogo[] = [
    { name: "Abacus", src: "/logos/abacus-other.jpg", alt: "Abacus logo" },
    { name: "Al Jazeera", src: "/logos/aljazeera.png", alt: "Al Jazeera logo" },
    { name: "CEC", src: "/logos/cec-logo.jpg", alt: "CEC logo" },
    { name: "Centripetal Media", src: "/logos/centri.PNG", alt: "Centripetal Media logo" },
    { name: "Cutting Edge PR", src: "/logos/cutting-edge-pr.jpg", alt: "Cutting Edge PR logo" },
    { name: "Garda World", src: "/logos/garda-world.jpg", alt: "Garda World logo" },
    { name: "Human Rights Watch", src: "/logos/hrw-logo.jpg", alt: "Human Rights Watch logo" },
    { name: "Kafue Gorge Regional Training Center", src: "/logos/kafuegorgeregionaltrainingcenter.jpg", alt: "Kafue Gorge Regional Training Center logo" },
    { name: "Manda Hill", src: "/logos/manda-hill-logo.jpg", alt: "Manda Hill logo" },
    { name: "The Amazing Race", src: "/logos/the-amazing-race.jpg", alt: "The Amazing Race logo" },
    { name: "Zambezi Magic", src: "/logos/zambezi-magic-logo.jpg", alt: "Zambezi Magic logo" }
  ];

  return (
    <>
      <Head>
        <title>Our Clients | Centripetal Media</title>
        <meta name="description" content="Discover the diverse range of clients who trust Centripetal Media for their media production needs." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Layout>
        <section className="py-16 px-4 md:px-6 lg:px-8 mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Clients</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're proud to collaborate with these amazing organizations and brands. Our diverse client portfolio reflects our versatility and commitment to excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {clientLogos.map((client) => (
              <Card key={client.name} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 flex items-center justify-center h-48">
                  <div className="relative w-full h-full">
                    <Image
                      src={client.src}
                      alt={client.alt}
                      fill
                      style={{ objectFit: "contain" }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Client List</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Ready to bring your vision to life? Contact us today to discuss how we can help tell your story through innovative media production.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            >
              Contact Us
            </a>
          </div>
        </section>
      </Layout>
    </>
  );
}
