import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-black/90 backdrop-blur-sm" : "bg-transparent"}`}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="relative h-16 w-16 md:h-20 md:w-20">
              <Image 
                src="/c-ma9y38y6.png" 
                alt="Centripetal Media" 
                fill
                className="object-contain"
              />
            </Link>
            
            <button 
              className="text-white z-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className="sr-only">Toggle menu</span>
              <div className="flex flex-col items-end space-y-1.5">
                <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
                <span className={`block w-4 h-0.5 bg-white transition-opacity duration-300 ${isMenuOpen ? "opacity-0" : ""}`}></span>
                <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
              </div>
            </button>
          </div>
        </div>
      </header>
      
      {/* Full screen menu overlay */}
      <div 
        className={`fixed inset-0 bg-black z-40 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 h-full flex flex-col justify-center">
          <nav className="flex flex-col items-center space-y-8 py-8">
            <NavLinks mobile onClick={() => setIsMenuOpen(false)} />
          </nav>
        </div>
      </div>
    </>
  );
}

function NavLinks({ mobile = false, onClick }: { mobile?: boolean; onClick?: () => void }) {
  const links = [
    { href: "/about", label: "ABOUT" },
    { href: "/work", label: "WORK" },
    { href: "/services/television-production", label: "SERVICES" },
    { href: "/films", label: "FILMS" },
    { href: "/contact", label: "CONTACT" }
  ];
  
  return (
    <>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`text-white hover:text-gray-300 transition-colors ${mobile ? "text-4xl md:text-6xl font-bold tracking-tighter" : "text-sm tracking-wider"}`}
          onClick={onClick}
        >
          {link.label}
        </Link>
      ))}
    </>
  );
}