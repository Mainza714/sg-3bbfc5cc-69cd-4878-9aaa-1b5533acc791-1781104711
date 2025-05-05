import Link from "next/link";
import Image from "next/image";

export function LatestNews() {
  const news = [
    {
      id: 'news-1',
      title: 'CENTRIPETAL ANNOUNCES NEW FILM SLATE FOR 2024',
      date: 'April 15, 2023',
      excerpt: 'Centripetal Media unveils an ambitious lineup of projects set to begin production in early 2024.',
      image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'news-2',
      title: 'MAKOFI SELECTED FOR INTERNATIONAL FILM FESTIVAL',
      date: 'March 22, 2023',
      excerpt: 'Our latest feature film has been officially selected to premiere at the prestigious International Film Festival.',
      image: 'https://images.unsplash.com/photo-1568111561564-08726a1563e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section className="py-24 bg-gray-100 text-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">LATEST NEWS</h2>
          <div className="h-px w-16 bg-black mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {news.map((item) => (
            <Link key={item.id} href={`/news/${item.id}`} className="group">
              <div className="relative aspect-video overflow-hidden mb-6">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div>
                <span className="text-sm text-gray-600">{item.date}</span>
                <h3 className="text-xl font-bold tracking-tight mt-2 mb-3 group-hover:text-gray-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link href="/news" className="inline-block border border-black px-8 py-3 text-sm tracking-wider hover:bg-black hover:text-white transition-colors">
            VIEW ALL NEWS
          </Link>
        </div>
      </div>
    </section>
  );
}