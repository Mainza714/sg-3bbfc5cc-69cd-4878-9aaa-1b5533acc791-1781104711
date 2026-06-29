import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Layout } from "@/components/layout/Layout";
import { ArrowLeft } from "lucide-react";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string[];
  image: string;
}

export default function TeamMemberPage() {
  const router = useRouter();
  const { id } = router.query;

  const teamMembers: TeamMember[] = [
    {
      id: "lawrence-thompson",
      name: "LAWRENCE THOMPSON",
      role: "Founder & Creative Director",
      bio: [
        "Lawrence Thompson is a legendary Zambian filmmaker, writer, and producer with an illustrious career spanning over 40 years. As a foundational pillar of Zambia's television and cinema landscape, Lawrence has dedicated his life to building the local creative economy from the ground up and elevating authentic African stories to global prominence.",
        "He is widely celebrated as the visionary behind the iconic Zambian television series Kabanana. Most recently, Lawrence made history as the co-writer and executive producer of Can You See Us? (2022)—a deeply moving, critically acclaimed film inspired by the life of musician John Chiti. The project achieved a monumental milestone as the first-ever Zambian feature film to be released globally on Netflix.",
        "Now collaborating as a key creative pillar with Centripetal Media Zambia, Lawrence continues to bridge the gap between pioneering industry foundations and modern cinematic excellence. His work remains focused on mentoring the next generation of creative talent and spearheading premium, structurally sound narrative productions that resonate across international markets."
      ],
      image: "/KZ_photography_39_copy_1184857602.jpg"
    },
    {
      id: "andrew-thompson",
      name: "ANDREW THOMPSON",
      role: "Executive Director",
      bio: [
        "As the Executive Director of Centripetal Media Zambia, Andrew Thompson operates at the intersection of creative vision and strategic execution. He steps into the executive boardroom with a singular mission: to champion authentic, premium African narratives and position Zambia as a highly competitive hub for film and commercial media production.",
        "Andrew leads a multi-disciplinary team of creators, steering everything from high-end corporate imagery and brand management to full-scale cinematic releases. His approach balances rigorous business operations with a deep respect for the creative process—ensuring that every project under the Centripetal umbrella maintains technical excellence and cultural resonance.",
        "Andrew is passionate about the future of creative entrepreneurship in Zambia. When he isn't guiding production slates or forming strategic client relationships, he is actively involved in initiatives that support youth employment and structural development within the local media sector."
      ],
      image: "/1_-718753360.jpg"
    }
  ];

  const member = teamMembers.find(m => m.id === id);

  if (!member && typeof id === "string") {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-3xl font-bold mb-4">Team member not found</h1>
          <p>The team member you're looking for doesn't exist.</p>
          <Link href="/team" className="inline-flex items-center mt-6 text-blue-500">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to team
          </Link>
        </div>
      </Layout>
    );
  }

  if (!member) {
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
        <title>{member.name} | Centripetal Media Team</title>
        <meta name="description" content={`Learn more about ${member.name}, ${member.role} at Centripetal Media.`} />
      </Head>

      <Layout>
        <div className="pt-20 bg-black text-white">
          <div className="container mx-auto px-4 md:px-6 py-12">
            <Link href="/team" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
              <ArrowLeft className="mr-2 h-5 w-5" /> Back to team
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="relative aspect-[3/4] w-full max-w-md overflow-hidden rounded-lg">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="space-y-8">
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">
                    {member.name}
                  </h1>
                  <p className="text-xl text-gray-400 font-medium">
                    {member.role}
                  </p>
                </div>

                <div className="space-y-6">
                  {member.bio.map((paragraph, index) => (
                    <p key={index} className="text-gray-300 leading-relaxed text-lg">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}