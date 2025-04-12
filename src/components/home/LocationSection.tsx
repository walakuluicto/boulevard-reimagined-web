
import { MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LocationSection() {
  return (
    <section className="section-padding bg-white">
      <div className="blvd-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <span className="inline-block text-blvd-gold text-sm uppercase tracking-wider mb-4">Visit Us</span>
            <h2 className="font-display text-3xl md:text-4xl font-light mb-6">Our Location</h2>
            <p className="text-blvd-charcoal/80 mb-8 leading-relaxed">
              Located in the heart of the city, BLVD SPECIALTY COFFEE is more than just a coffee shop — it's a community hub where people connect, work, and relax in a welcoming environment.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="mr-4 text-blvd-gold">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Address</h4>
                  <p className="text-blvd-charcoal/80 text-sm">123 Main Street, Melbourne VIC 3000</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 text-blvd-gold">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Opening Hours</h4>
                  <div className="text-blvd-charcoal/80 text-sm space-y-1">
                    <p>Monday - Friday: 7:00 AM - 6:00 PM</p>
                    <p>Saturday: 8:00 AM - 6:00 PM</p>
                    <p>Sunday: 8:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Link to="/location" className="btn-primary">
              GET DIRECTIONS
            </Link>
          </div>
          
          <div className="h-full min-h-[400px] rounded-sm overflow-hidden">
            {/* This would typically be a Google Maps embed, using a placeholder image for now */}
            <img 
              src="https://images.unsplash.com/photo-1595867818082-083862f3d630?q=80&w=2070&auto=format&fit=crop" 
              alt="BLVD Coffee location map"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
