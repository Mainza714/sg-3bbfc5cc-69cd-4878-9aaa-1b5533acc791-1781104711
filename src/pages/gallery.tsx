
import Head from "next/head";
import { Layout } from "@/components/layout/Layout";
import { PhotoGallery } from "@/components/home/PhotoGallery";

export default function GalleryPage() {
  return (
    <>
      <Head>
        <title>Photo Gallery | Centripetal Media</title>
        <meta name="description" content="Explore our collection of professional photography work showcasing our visual storytelling capabilities." />
      </Head>
      
      <Layout>
        <div className="pt-20 bg-black">
          <div className="container mx-auto px-4 md:px-6 py-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Photo Gallery</h1>
            <p className="text-gray-300 max-w-3xl text-lg md:text-xl">
              Our photography portfolio showcases our commitment to visual excellence and storytelling.
              From documentary and portrait work to architectural and abstract photography, we capture
              moments that resonate and inspire.
            </p>
          </div>
          
          <PhotoGallery />
          
          <div className="container mx-auto px-4 md:px-6 py-16">
            <div className="bg-gray-900 p-8 md:p-12 rounded-lg">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Looking for custom photography services?
              </h2>
              <p className="text-gray-300 mb-6">
                Our team of professional photographers is available for commercial, editorial, and documentary projects.
                Contact us to discuss your specific requirements and how we can help bring your vision to life.
              </p>
              <a 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 bg-white text-black font-medium rounded-md hover:bg-gray-100 transition-colors"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
