
import { useState, useEffect } from 'react';
import { Menu, X, Coffee } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'MENU', path: '/menu' },
    { name: 'LOCATION', path: '/location' },
    { name: 'EVENTS', path: '/events' },
    { name: 'RESERVE', path: '/reserve' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    )}>
      <div className="blvd-container">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className={cn(
            "flex items-center transition-colors",
            isScrolled ? "text-blvd-charcoal" : "text-white"
          )}>
            <Coffee className={cn(
              "mr-2",
              isScrolled ? "text-blvd-gold" : "text-white"
            )} size={24} />
            <span className="text-2xl font-display font-light">BLVD</span>
            <span className="ml-2 text-xs uppercase tracking-widest font-light">Specialty Coffee</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-xs tracking-wider font-medium hover:text-blvd-gold transition-colors",
                  isScrolled ? "text-blvd-charcoal" : "text-white"
                )}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href="https://blvdsc.square.site/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary"
            >
              ORDER ONLINE
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className={cn(
            "lg:hidden transition-colors",
            isScrolled ? "text-blvd-charcoal" : "text-white"
          )} onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white">
          <div className="py-4 px-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block py-2 text-sm tracking-wider text-blvd-charcoal hover:text-blvd-gold transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://blvdsc.square.site/"
              target="_blank"
              rel="noopener noreferrer"
              className="block btn-primary w-full text-center mt-6"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ORDER ONLINE
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
