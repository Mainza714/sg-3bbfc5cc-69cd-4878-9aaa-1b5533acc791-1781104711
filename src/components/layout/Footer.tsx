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
              src="/Centripetal_logo.jpeg" 
              alt="Centripetal Media" 
              fill
              className="object-contain"
            />
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 mb-6 text-sm">
            <Link href="/about" className="text-gray-400 hover:text-white transition-colors">ABOUT</Link>
            <Link href="/content" className="text-gray-400 hover:text-white transition-colors">CONTENT</Link>
            <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">CONTACT</Link>
          </div>
          
          {/* Social Media Links */}
          <div className="flex items-center gap-6 mb-6">
            <Link 
              href="https://www.facebook.com/profile.php?id=100063657996917" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </Link>
            <Link 
              href="https://www.instagram.com/centripetal_media_zambia?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.781c-.49 0-.928-.175-1.297-.49-.367-.315-.49-.753-.49-1.243 0-.49.123-.928.49-1.243.369-.367.807-.49 1.297-.49s.928.123 1.297.49c.367.315.49.753.49 1.243 0 .49-.123.928-.49 1.243-.369.315-.807.49-1.297.49zm-4.281 7.277c1.051 0 1.911-.367 2.587-1.051.675-.684 1.051-1.536 1.051-2.587 0-1.051-.376-1.903-1.051-2.587-.676-.684-1.536-1.051-2.587-1.051-1.051 0-1.911.367-2.587 1.051-.675.684-1.051 1.536-1.051 2.587 0 1.051.376 1.903 1.051 2.587.676.684 1.536 1.051 2.587 1.051z"/>
              </svg>
            </Link>
          </div>
          
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Centripetal Media. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
