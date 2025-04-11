
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-blvd-charcoal text-white pt-16 pb-8">
      <div className="blvd-container">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <div className="mb-6">
              <Link to="/" className="flex items-center">
                <span className="text-2xl font-display font-light">BLVD</span>
                <span className="ml-2 text-xs uppercase tracking-widest font-light">Skin Clinics</span>
              </Link>
            </div>
            <p className="text-sm text-gray-400 mb-6">
              Providing luxury skin treatments and expert care to help you look and feel your best.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-blvd-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-blvd-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-blvd-gold transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Treatments</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/treatments" className="hover:text-white transition-colors">Facials</Link></li>
              <li><Link to="/treatments" className="hover:text-white transition-colors">Anti-Wrinkle</Link></li>
              <li><Link to="/treatments" className="hover:text-white transition-colors">Dermal Fillers</Link></li>
              <li><Link to="/treatments" className="hover:text-white transition-colors">Skin Needling</Link></li>
              <li><Link to="/treatments" className="hover:text-white transition-colors">LED Therapy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">About</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link to="/team" className="hover:text-white transition-colors">Our Team</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">FAQs</Link></li>
              <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>123 Bourke Street</li>
              <li>Melbourne, VIC 3000</li>
              <li className="pt-2">contact@blvdskins.com.au</li>
              <li>+61 3 9123 4567</li>
            </ul>
            <div className="mt-6">
              <Link to="/book" className="btn-primary">
                BOOK NOW
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-xs text-gray-500">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2025 BLVD Skin Clinics. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
