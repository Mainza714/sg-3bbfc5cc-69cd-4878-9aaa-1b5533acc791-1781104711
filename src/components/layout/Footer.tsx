
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="flex flex-col items-center text-center">
          <div className="relative h-12 w-12 mb-4">
            <Image 
              src="/c-ma9y38y6.png" 
              alt="Centripetal Media" 
              fill
              className="object-contain"
            />
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 mb-6 text-sm">
            <Link href="/about" className="text-gray-400 hover:text-white transition-colors">ABOUT</Link>
            <Link href="/work" className="text-gray-400 hover:text-white transition-colors">WORK</Link>
            <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">CONTACT</Link>
          </div>
          
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Centripetal Media. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
