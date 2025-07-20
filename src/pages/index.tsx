
import Head from "next/head";
import { Layout } from "@/components/layout/Layout";
import { LatestNews } from "@/components/home/LatestNews";
import { VideoShowcase } from "@/components/home/VideoShowcase";

export default function Home() {
  return (
    <>
      <Head>
        <title>Centripetal Media | Innovative Storytelling</title>
        <meta name="description" content="Centripetal Media is a forward-thinking production company dedicated to creating authentic, thought-provoking content that resonates with audiences worldwide." />
        <link rel="icon" href="/logo-cent-md8qd7zz.png" />
      </Head>
      
      <Layout>
        <VideoShowcase />
        <LatestNews />
      </Layout>
    </>
  );
}
