
import { Layout } from "@/components/layout/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function Services() {
  const services = [
    {
      title: "International Fixing",
      description: "With our vast experience and highly trained team, One of our key functions is to provide Production support to international Production houses looking to film in Zambia or anywhere else in Africa.",
      subServices: [
        "Location Scouting",
        "Press/ Filming accreditation facilitation",
        "Customs Clearance",
        "Accommodation facilitation",
        "Car Hire",
        "Equipment hire",
        "Catering",
        "and more according to filming needs"
      ]
    },
    {
      title: "Television and Film Production",
      description: "With our fully equipped studio, we produce, film, and package a wide range of content for television and other platforms. We also produce Commercials, Documentaries locally produced shows, and Movies.",
      portfolio: [
        "Can They See Us The Movie",
        "Makofi On Zambezi Magic",
        "Pembe Commercial"
      ]
    },
    {
      title: "Photography",
      description: "Photography is where it all began, our passion for captured beauty developed into a passion to capture beautiful moments in time that one can revisit at any given chance. Our studio is well-equipped and ready for any photography needs."
    },
    {
      title: "International & Local Masterclass Facilitation",
      description: "We are well-positioned and connected to various local and international film industry professionals who are eager to share tips and skills on how to develop in the various areas of film. These masterclasses are facilitated in collaboration with various partners in the industry who are invested in seeing the growth and development of talent in the country and beyond."
    }
  ];

  const partners = [
    "Multichoice",
    "Zambezi Magic",
    "Ministry of Youth Sports and arts",
    "Filmmaker Guild of Zambia",
    "The Business of Film initiative in Zambia",
    "Multi-choice Talent Factory"
  ];

  const clients = [
    "Zambezi Magic",
    "Garda world",
    "Aljazeera",
    "Cutting edge",
    "Abacus 360",
    "Kafue Gorge regional training centre",
    "Human Rights Watch",
    "The Amazing Race",
    "Mandahill Mall",
    "CEC"
  ];

  return (
    <>
      <Head>
        <title>Our Services | Centripetal Media</title>
        <meta name="description" content="Explore our comprehensive range of media production services at Centripetal Media." />
      </Head>
      
      <Layout>
        <div className="bg-black text-white min-h-screen">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-6xl mx-auto space-y-16">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
                <div className="h-px w-16 bg-white"></div>
              </div>

              <div className="grid gap-12">
                {services.map((service, index) => (
                  <Card key={index} className="bg-zinc-900 border-zinc-800">
                    <CardContent className="p-6 space-y-4">
                      <h2 className="text-2xl md:text-3xl font-bold text-white">{service.title}</h2>
                      <p className="text-gray-300">{service.description}</p>
                      
                      {service.subServices && (
                        <div className="mt-4">
                          <h3 className="text-xl font-semibold mb-2">Services Provided:</h3>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {service.subServices.map((subService, idx) => (
                              <li key={idx} className="text-gray-300 flex items-center">
                                <span className="mr-2">•</span>
                                {subService}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {service.portfolio && (
                        <div className="mt-4">
                          <h3 className="text-xl font-semibold mb-2">Featured Projects:</h3>
                          <ul className="space-y-1">
                            {service.portfolio.map((item, idx) => (
                              <li key={idx} className="text-gray-300">{item}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Separator className="bg-zinc-800" />

              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-6">Key Partners</h2>
                  <ul className="space-y-2">
                    {partners.map((partner, index) => (
                      <li key={index} className="text-gray-300 flex items-center">
                        <span className="mr-2">•</span>
                        {partner}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-6">Past & Present Clients</h2>
                  <ul className="space-y-2">
                    {clients.map((client, index) => (
                      <li key={index} className="text-gray-300 flex items-center">
                        <span className="mr-2">•</span>
                        {client}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
