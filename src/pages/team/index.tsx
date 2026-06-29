import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Layout } from "@/components/layout/Layout";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

export default function TeamPage() {
  const teamMembers: TeamMember[] = [
    {
      id: "lawrence-thompson",
      name: "Lawrence Thompson",
      role: "Founder & Creative Director",
      image: "/KZ_photography_15_copy_1335328166.jpg"
    },
    {
      id: "andrew-thompson",
      name: "Andrew Thompson",
      role: "Executive Director",
      image: "/davinci_linkedin_photo_pack.png"
    }
  ];

  return (
    <>
      <Head>
        <title>Our Team | Centripetal Media</title>
        <meta name="description" content="Meet the talented team behind Centripetal Media - creative professionals dedicated to exceptional storytelling and media production." />
      </Head>

      <Layout>
        <div className="pt-20 bg-black text-white">
          <div className="container mx-auto px-4 md:px-6 py-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Team</h1>
            <p className="text-gray-300 max-w-3xl text-lg md:text-xl mb-12">
              Meet the passionate professionals behind Centripetal Media. Our team brings together
              expertise from across the media industry, united by a commitment to authentic storytelling
              and creative excellence.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              {teamMembers.map((member) => (
                <div key={member.id} className="group text-center">
                  <Link href={`/team/${member.id}`}>
                    <div className="cursor-pointer space-y-4">
                      <div className="relative aspect-square overflow-hidden rounded-lg mx-auto max-w-sm">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-2xl font-bold tracking-tight group-hover:text-gray-300 transition-colors">
                          {member.name}
                        </h3>
                        <p className="text-gray-400 text-lg">
                          {member.role}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}