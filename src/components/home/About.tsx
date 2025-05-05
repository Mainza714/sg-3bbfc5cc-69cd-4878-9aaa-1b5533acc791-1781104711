import Link from "next/link";

export function About() {
  const values = [
    {
      title: 'INTEGRITY',
      description: 'We uphold the highest standards of integrity in all of our actions.'
    },
    {
      title: 'CREATIVITY',
      description: 'We use original ideas to create the best outcomes for our clients.'
    },
    {
      title: 'INNOVATION',
      description: 'Developing unique and insightful ideas.'
    },
    {
      title: 'QUALITY',
      description: 'Setting a standard for high production value ideas.'
    },
    {
      title: 'PASSION',
      description: 'Driven by our inner drive to create value for our customers.'
    },
    {
      title: 'TEAMWORK',
      description: 'Working together to see the vision come to life.'
    }
  ];

  return (
    <section className='py-24 bg-white text-black'>
      <div className='container mx-auto px-4 md:px-6'>
        <div className='max-w-3xl mx-auto text-center'>
          <h2 className='text-3xl md:text-4xl font-bold tracking-tight mb-8'>ABOUT CENTRIPETAL</h2>
          <p className='text-xl leading-relaxed mb-8'>
            Centripetal Media is a forward-thinking production company dedicated to creating authentic, 
            thought-provoking content that resonates with audiences worldwide. Our team of passionate 
            filmmakers, writers, and producers collaborate to bring unique stories to life.
          </p>
          <p className='text-xl leading-relaxed mb-12'>
            We believe in the power of storytelling to connect, inspire, and transform. 
            Our work spans feature films, documentaries, and innovative digital content.
          </p>
        </div>

        <div className='max-w-6xl mx-auto mt-16'>
          <h3 className='text-2xl md:text-3xl font-bold text-center mb-12'>OUR VALUES</h3>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {values.map((value, index) => (
              <div key={index} className='p-6 border border-gray-200 rounded-lg text-center'>
                <h4 className='text-xl font-bold mb-3'>{value.title}</h4>
                <p className='text-gray-600'>{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className='text-center mt-12'>
          <Link href='/about' className='inline-block border border-black px-8 py-3 text-sm tracking-wider hover:bg-black hover:text-white transition-colors'>
            LEARN MORE
          </Link>
        </div>
      </div>
    </section>
  );
}