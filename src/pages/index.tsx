import Head from "next/head";
import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { About } from "@/components/home/About";
import { LatestNews } from "@/components/home/LatestNews";
import { VideoShowcase } from "@/components/home/VideoShowcase";
import { Services } from "@/components/home/Services";
import { PhotoGallery } from "@/components/home/PhotoGallery";
import { Team } from "@/components/home/Team";

export default function Home() {
  return (
    <>
      <Head>
        <title>Centripetal Media | Innovative Storytelling</title>
        <meta name="description" content="Centripetal Media is a forward-thinking production company dedicated to creating authentic, thought-provoking content that resonates with audiences worldwide." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Layout>
        <VideoShowcase />
        <Services />
        <PhotoGallery />
        <FeaturedWork />
        <Team />
        <About />
        <LatestNews />
      </Layout>
    </>
  );
}