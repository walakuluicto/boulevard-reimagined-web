
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/shared/PageHeader";
import { MapPin, Clock, Bus, Car, Train } from "lucide-react";

export default function LocationPage() {
  return (
    <>
      <Navbar />
      <PageHeader 
        title="Find Us" 
        subtitle="Visit our coffee shop in Melbourne"
        backgroundImage="https://images.unsplash.com/photo-1513267048331-5611cad62e41?q=80&w=2070&auto=format&fit=crop"
      />
      
      <main>
        <section className="section-padding bg-white">
          <div className="blvd-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="font-display text-3xl font-light mb-6">Our Location</h2>
                
                <div className="space-y-8 mb-8">
                  <div className="flex items-start">
                    <div className="mr-4 text-blvd-gold">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-2">Address</h3>
                      <p className="text-blvd-charcoal/80">
                        123 Main Street<br />
                        Melbourne, VIC 3000<br />
                        Australia
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 text-blvd-gold">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-2">Opening Hours</h3>
                      <div className="space-y-1 text-blvd-charcoal/80">
                        <p>Monday - Friday: 7:00 AM - 6:00 PM</p>
                        <p>Saturday: 8:00 AM - 6:00 PM</p>
                        <p>Sunday: 8:00 AM - 4:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <h3 className="font-medium text-lg mb-4">Getting Here</h3>
                
                <div className="space-y-5">
                  <div className="flex items-center">
                    <Car className="mr-3 text-blvd-gold" size={20} />
                    <div>
                      <h4 className="font-medium">By Car</h4>
                      <p className="text-sm text-blvd-charcoal/80">Metered parking available on Main Street and in the Wilson Parking garage on Cross Street.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Train className="mr-3 text-blvd-gold" size={20} />
                    <div>
                      <h4 className="font-medium">By Train</h4>
                      <p className="text-sm text-blvd-charcoal/80">We're a 5-minute walk from Central Station. Take the north exit and head east.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Bus className="mr-3 text-blvd-gold" size={20} />
                    <div>
                      <h4 className="font-medium">By Bus</h4>
                      <p className="text-sm text-blvd-charcoal/80">Routes 301, 302, and 305 stop directly in front of our café.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="h-full min-h-[500px] rounded-sm overflow-hidden">
                {/* This would typically be a Google Maps embed */}
                <img 
                  src="https://images.unsplash.com/photo-1595867818082-083862f3d630?q=80&w=2070&auto=format&fit=crop" 
                  alt="Map showing BLVD Coffee location"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="mt-16">
              <h2 className="font-display text-3xl font-light mb-8 text-center">Our Space</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=2070&auto=format&fit=crop" 
                    alt="BLVD Coffee interior"
                    className="w-full h-64 object-cover rounded-sm mb-4"
                  />
                  <h3 className="font-medium text-lg mb-2">Cozy Seating</h3>
                  <p className="text-sm text-blvd-charcoal/80">
                    Our café features comfortable seating arrangements for individuals and groups, perfect for working, studying, or catching up with friends.
                  </p>
                </div>
                
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=2070&auto=format&fit=crop" 
                    alt="BLVD Coffee barista station"
                    className="w-full h-64 object-cover rounded-sm mb-4"
                  />
                  <h3 className="font-medium text-lg mb-2">Barista Bar</h3>
                  <p className="text-sm text-blvd-charcoal/80">
                    Watch our skilled baristas craft your perfect beverage at our custom-built coffee bar featuring state-of-the-art equipment.
                  </p>
                </div>
                
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop" 
                    alt="BLVD Coffee outdoor seating"
                    className="w-full h-64 object-cover rounded-sm mb-4"
                  />
                  <h3 className="font-medium text-lg mb-2">Outdoor Patio</h3>
                  <p className="text-sm text-blvd-charcoal/80">
                    Enjoy your coffee in the fresh air on our landscaped patio, a tranquil urban oasis perfect for sunny days.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
