
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/shared/PageHeader";
import { Coffee, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

export default function OrderPage() {
  return (
    <>
      <Navbar />
      <PageHeader 
        title="Order Online" 
        subtitle="Skip the line and order ahead"
        backgroundImage="https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=2070&auto=format&fit=crop"
      />
      
      <main>
        <section className="section-padding bg-white">
          <div className="blvd-container">
            <div className="max-w-3xl mx-auto text-center">
              <Coffee className="mx-auto text-blvd-gold mb-6" size={48} />
              <h2 className="font-display text-3xl md:text-4xl font-light mb-6">Coming Soon</h2>
              <p className="text-blvd-charcoal/80 mb-10">
                We're currently developing our online ordering system to make it easier for you to enjoy your favorite BLVD Coffee items. Soon you'll be able to order ahead for pickup or have our coffee beans delivered directly to your door.
              </p>
              
              <div className="mb-12">
                <ShoppingBag className="mx-auto text-blvd-gold/50 mb-6" size={64} />
                <h3 className="font-display text-2xl font-light mb-4">In the meantime...</h3>
                <p className="text-blvd-charcoal/80 mb-6">
                  You can still purchase our coffee beans, gift cards, and merchandise in-store. Visit us at 123 Main Street, Melbourne, or give us a call to place an order for pickup.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Link to="/menu" className="bg-blvd-cream p-8 rounded-sm hover:shadow-md transition-shadow">
                  <h3 className="font-display text-2xl font-light mb-4">Browse Our Menu</h3>
                  <p className="text-blvd-charcoal/80 mb-4">See what's available in-store and plan your next visit.</p>
                  <span className="text-blvd-gold underline">View Menu</span>
                </Link>
                
                <Link to="/contact" className="bg-blvd-cream p-8 rounded-sm hover:shadow-md transition-shadow">
                  <h3 className="font-display text-2xl font-light mb-4">Contact Us</h3>
                  <p className="text-blvd-charcoal/80 mb-4">Call ahead to place a pickup order or inquire about catering.</p>
                  <span className="text-blvd-gold underline">Get In Touch</span>
                </Link>
              </div>
              
              <div className="mt-12">
                <p className="text-blvd-charcoal/80">
                  Want to be notified when online ordering launches? Sign up for our newsletter!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mt-6">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-grow px-4 py-2 border border-blvd-beige focus:outline-none focus:ring-1 focus:ring-blvd-gold"
                  />
                  <button className="btn-primary whitespace-nowrap">
                    SIGN UP
                  </button>
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
