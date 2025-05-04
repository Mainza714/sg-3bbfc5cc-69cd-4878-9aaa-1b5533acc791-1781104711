
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-12">
          <div className="relative h-20 w-20 mb-6">
            <Image 
              src="/c-ma9y38y6.png" 
              alt="Centripetal Media" 
              fill
              className="object-contain"
            />
          </div>
          <p className="text-gray-400 max-w-md text-center">
            A media company focused on creating and distributing compelling content across multiple platforms.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center md:text-left">
            <h4 className="text-sm font-bold tracking-wider mb-6">NAVIGATION</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">ABOUT</Link></li>
              <li><Link href="/work" className="text-gray-400 hover:text-white transition-colors">WORK</Link></li>
              <li><Link href="/films" className="text-gray-400 hover:text-white transition-colors">FILMS</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">CONTACT</Link></li>
            </ul>
          </div>
          
          <div className="text-center">
            <h4 className="text-sm font-bold tracking-wider mb-6">CONTACT</h4>
            <ul className="space-y-3">
              <li className="text-gray-400">info@centripetal.media</li>
              <li className="text-gray-400">+1 (323) 555-0123</li>
              <li className="text-gray-400">Los Angeles, CA</li>
            </ul>
          </div>
          
          <div className="text-center md:text-right">
            <h4 className="text-sm font-bold tracking-wider mb-6">CONNECT</h4>
            <ul className="space-y-3">
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">INSTAGRAM</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">TWITTER</a></li>
              <li><a href="https://vimeo.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">VIMEO</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Centripetal Media. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link href="/privacy" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
