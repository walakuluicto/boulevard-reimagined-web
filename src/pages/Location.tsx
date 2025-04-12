
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/shared/PageHeader";
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";

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
          <div className="blvd-container text-center">
            <h2 className="font-display text-3xl font-light mb-6">Our Location</h2>
            <p className="text-blvd-charcoal/80 mb-8 max-w-xl mx-auto">
              Located in the heart of the city, BLVD SPECIALTY COFFEE is more than just a coffee shop — it's a community hub where people connect, work, and relax in a welcoming environment.
            </p>
            
            <div className="flex justify-center mb-8">
              <div className="flex items-start">
                <div className="mr-4 text-blvd-gold">
                  <MapPin size={36} />
                </div>
                <div className="text-left">
                  <h3 className="font-medium text-lg mb-2">Address</h3>
                  <p className="text-blvd-charcoal/80">
                    123 Main Street<br />
                    Melbourne, VIC 3000<br />
                    Australia
                  </p>
                </div>
              </div>
            </div>
            
            <div className="h-96 max-w-4xl mx-auto rounded-sm overflow-hidden mb-10">
              <img 
                src="https://images.unsplash.com/photo-1595867818082-083862f3d630?q=80&w=2070&auto=format&fit=crop" 
                alt="Map showing BLVD Coffee location"
                className="w-full h-full object-cover"
              />
            </div>
            
            <Link to="/contact" className="btn-primary">
              VIEW DETAILED INFORMATION
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
