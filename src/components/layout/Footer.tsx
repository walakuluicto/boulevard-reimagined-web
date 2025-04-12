
import { Facebook, Instagram, Twitter, Coffee, Phone, MapPin, Mail } from 'lucide-react';
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
                <Coffee className="mr-2 text-blvd-gold" size={20} />
                <span className="text-2xl font-display font-light">BLVD</span>
                <span className="ml-2 text-xs uppercase tracking-widest font-light">Specialty Coffee</span>
              </Link>
            </div>
            <p className="text-sm text-gray-400 mb-6">
              Crafting exceptional coffee experiences since 2015. Our mission is to serve quality coffee in a welcoming space where community thrives.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/blvdcoffee" className="text-white hover:text-blvd-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com/blvdcoffee" className="text-white hover:text-blvd-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com/blvdcoffee" className="text-white hover:text-blvd-gold transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Menu</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/menu#coffee" className="hover:text-white transition-colors">Coffee</Link></li>
              <li><Link to="/menu#breakfast" className="hover:text-white transition-colors">Breakfast</Link></li>
              <li><Link to="/menu#lunch" className="hover:text-white transition-colors">Lunch</Link></li>
              <li><Link to="/menu#pastries" className="hover:text-white transition-colors">Pastries</Link></li>
              <li><Link to="/menu#beans" className="hover:text-white transition-colors">Coffee Beans</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link to="/team" className="hover:text-white transition-colors">Our Team</Link></li>
              <li><Link to="/events" className="hover:text-white transition-colors">Events</Link></li>
              <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Visit Us</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start">
                <MapPin size={16} className="mr-2 mt-1 text-blvd-gold flex-shrink-0" />
                <span>123 Main Street<br />Melbourne, VIC 3000</span>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2 text-blvd-gold flex-shrink-0" />
                <span>+61 3 9123 4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-blvd-gold flex-shrink-0" />
                <span>hello@blvdcoffee.com.au</span>
              </li>
            </ul>
            <div className="mt-6">
              <a 
                href="https://blvdsc.square.site/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary"
              >
                ORDER ONLINE
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-xs text-gray-500">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2025 BLVD SPECIALTY COFFEE. All rights reserved.</p>
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
