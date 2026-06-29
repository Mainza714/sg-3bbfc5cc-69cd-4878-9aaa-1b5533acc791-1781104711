export function LatestNews() {
  const news = [
    {
      id: "news-1",
      title: "Lute Film Premier 2026",
      date: ""
    },
    {
      id: "news-2",
      title: "Pre-production for fading memories to resume in August 2026.",
      date: ""
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
            <div key={item.id} className="block">
              <div className="border-b border-gray-200 pb-6">
                {item.date && (
                  <span className="text-sm text-gray-500">{item.date}</span>
                )}
                <h3 className="text-lg font-medium mt-2">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}