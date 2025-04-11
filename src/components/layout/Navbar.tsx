
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
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
    { name: 'TREATMENTS', path: '/treatments' },
    { name: 'SKIN CARE', path: '/skin-care' },
    { name: 'SHOP', path: '/shop' },
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
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-display font-light text-blvd-charcoal">BLVD</span>
            <span className="ml-2 text-xs uppercase tracking-widest font-light">Skin Clinics</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-xs tracking-wider font-medium hover:text-blvd-gold transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/book" 
              className="btn-primary"
            >
              BOOK NOW
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden" onClick={toggleMobileMenu}>
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
                className="block py-2 text-sm tracking-wider hover:text-blvd-gold transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/book"
              className="block btn-primary w-full text-center mt-6"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              BOOK NOW
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
