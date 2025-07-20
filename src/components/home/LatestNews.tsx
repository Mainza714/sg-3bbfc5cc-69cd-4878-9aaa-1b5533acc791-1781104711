
import Link from "next/link";

export function LatestNews() {
  const news = [
    {
      id: 'news-1',
      title: 'CENTRIPETAL ANNOUNCES NEW FILM SLATE FOR 2024',
      date: 'April 15, 2023'
    },
    {
      id: 'news-2',
      title: 'MAKOFI SELECTED FOR INTERNATIONAL FILM FESTIVAL',
      date: 'March 22, 2023'
    }
  ];

  return (
    <section className="py-16 bg-white text-black">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold tracking-tight">LATEST NEWS</h2>
        </div>
        
        <div className="space-y-8">
          {news.map((item) => (
            <Link key={item.id} href={`/news/${item.id}`} className="group block">
              <div className="border-b border-gray-200 pb-6 hover:border-black transition-colors">
                <span className="text-sm text-gray-500">{item.date}</span>
                <h3 className="text-lg font-medium mt-2 group-hover:text-gray-600 transition-colors">
                  {item.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
