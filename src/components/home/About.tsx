
import Link from "next/link";

export function About() {
  return (
    <section className="py-24 bg-white text-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">ABOUT CENTRIPETAL</h2>
          <p className="text-xl leading-relaxed mb-8">
            Centripetal Media is a forward-thinking production company dedicated to creating authentic, 
            thought-provoking content that resonates with audiences worldwide. Our team of passionate 
            filmmakers, writers, and producers collaborate to bring unique stories to life.
          </p>
          <p className="text-xl leading-relaxed mb-12">
            We believe in the power of storytelling to connect, inspire, and transform. 
            Our work spans feature films, documentaries, and innovative digital content.
          </p>
          <Link href="/about" className="inline-block border border-black px-8 py-3 text-sm tracking-wider hover:bg-black hover:text-white transition-colors">
            LEARN MORE
          </Link>
        </div>
      </div>
    </section>
  );
}
