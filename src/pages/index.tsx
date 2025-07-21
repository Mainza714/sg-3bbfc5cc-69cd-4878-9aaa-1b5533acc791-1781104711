
import Head from "next/head";
import { Layout } from "@/components/layout/Layout";
import { LatestNews } from "@/components/home/LatestNews";
import { VideoShowcase } from "@/components/home/VideoShowcase";

export default function Home() {
  return (
    <>
      <Head>
        <title>Centripetal Media | Film & Television Production Studio</title>
        <meta name="description" content="Discover Centripetal Media, a creative studio producing powerful films, television series, and media content from Africa to the world. African film studio specializing in independent filmmaking and authentic storytelling." />
        <meta name="keywords" content="African film studio, TV production Zambia, independent filmmakers, Centripetal Media, African storytelling, film production company, television production, media content creation, African cinema, Zambian film industry" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Centripetal Media | Film & Television Production Studio" />
        <meta property="og:description" content="African storytelling through film and television. Discover powerful content from Africa to the world." />
        <meta property="og:image" content="https://centripetalmedia.digital/logo-cent-md8qd7zz.png" />
        <meta property="og:url" content="https://centripetalmedia.digital/" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:title" content="Centripetal Media | Film & Television Production Studio" />
        <meta name="twitter:description" content="African storytelling through film and television. Discover powerful content from Africa to the world." />
        <meta name="twitter:image" content="https://centripetalmedia.digital/logo-cent-md8qd7zz.png" />
        
        {/* Additional SEO */}
        <meta name="author" content="Centripetal Media" />
        <meta name="geo.region" content="ZM" />
        <meta name="geo.placename" content="Zambia" />
        
        <link rel="icon" href="/logo-cent-md8qd7zz.png" />
      </Head>
      
      <Layout>
        <VideoShowcase />
        <LatestNews />
      </Layout>
    </>
  );
}
