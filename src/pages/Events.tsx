
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/shared/PageHeader";
import { Calendar, Clock, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const events = [
  {
    id: 1,
    title: "Coffee Cupping Workshop",
    date: "June 15, 2024",
    time: "9:00 AM - 11:00 AM",
    description: "Join our master barista for an interactive coffee tasting experience. Learn how to identify flavor notes and appreciate different coffee origins.",
    image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=2070&auto=format&fit=crop",
    price: "$35 per person"
  },
  {
    id: 2,
    title: "Latte Art Masterclass",
    date: "June 22, 2024",
    time: "2:00 PM - 4:00 PM",
    description: "Learn the techniques behind creating beautiful latte art. This hands-on workshop will cover basic patterns and advanced designs.",
    image: "https://images.unsplash.com/photo-1534040385115-33dcb3acba5b?q=80&w=1974&auto=format&fit=crop",
    price: "$40 per person"
  },
  {
    id: 3,
    title: "Acoustic Music Night",
    date: "June 28, 2024",
    time: "7:00 PM - 9:00 PM",
    description: "Enjoy the soulful sounds of local musicians in our cozy café environment. Light refreshments and full coffee menu available.",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2074&auto=format&fit=crop",
    price: "Free entry"
  },
  {
    id: 4,
    title: "Home Brewing Methods",
    date: "July 8, 2024",
    time: "10:00 AM - 12:00 PM",
    description: "Discover how to brew café-quality coffee at home. We'll explore various brewing methods including pour-over, French press, AeroPress, and more.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop",
    price: "$30 per person"
  },
];

export default function EventsPage() {
  return (
    <>
      <Navbar />
      <PageHeader 
        title="Events & Workshops" 
        subtitle="Join us for coffee education and community gatherings"
        backgroundImage="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2074&auto=format&fit=crop"
      />
      
      <main>
        <section className="section-padding bg-white">
          <div className="blvd-container">
            <div className="max-w-3xl mx-auto mb-12">
              <h2 className="font-display text-3xl font-light mb-6 text-center">Upcoming Events</h2>
              <p className="text-blvd-charcoal/80 text-center mb-8">
                At BLVD Coffee, we love bringing people together. From coffee workshops to live music evenings, our events are designed to create community and share our passion for great coffee.
              </p>
              
              <div className="text-center mb-12">
                <Link to="/contact" className="btn-primary">
                  INQUIRE ABOUT PRIVATE EVENTS
                </Link>
              </div>
            </div>
            
            <div className="space-y-12">
              {events.map((event) => (
                <div key={event.id} className="bg-blvd-cream p-6 rounded-sm grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-1">
                    <div className="h-48 md:h-full rounded-sm overflow-hidden">
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className="md:col-span-2">
                    <h3 className="font-display text-2xl font-light mb-3">{event.title}</h3>
                    
                    <div className="flex items-center mb-2 text-sm text-blvd-charcoal/80">
                      <Calendar size={16} className="mr-2 text-blvd-gold" />
                      <span>{event.date}</span>
                      <Clock size={16} className="ml-4 mr-2 text-blvd-gold" />
                      <span>{event.time}</span>
                    </div>
                    
                    <div className="flex items-center mb-4 text-sm text-blvd-charcoal/80">
                      <MapPin size={16} className="mr-2 text-blvd-gold" />
                      <span>BLVD Coffee, 123 Main Street</span>
                    </div>
                    
                    <p className="text-blvd-charcoal/80 mb-4">{event.description}</p>
                    
                    <div className="flex flex-wrap items-center justify-between">
                      <span className="font-medium">{event.price}</span>
                      <Link to="/contact" className="btn-primary mt-2 md:mt-0">
                        BOOK NOW
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-16">
              <h3 className="font-display text-2xl font-light mb-6 text-center">Private Events</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1522682178963-d2e96cc8d978?q=80&w=1974&auto=format&fit=crop" 
                    alt="Private event at BLVD Coffee"
                    className="w-full h-auto rounded-sm"
                  />
                </div>
                <div>
                  <p className="text-blvd-charcoal/80 mb-6">
                    Our café is available for private bookings outside regular hours. Whether you're planning a corporate gathering, book club meeting, or celebration, our space can be customized to your needs.
                  </p>
                  <p className="text-blvd-charcoal/80 mb-6">
                    We offer catering options featuring our signature coffee drinks and a selection of pastries, sandwiches, and other light fare. Our team will work with you to create a memorable experience for your guests.
                  </p>
                  <p className="text-blvd-charcoal/80 mb-8">
                    For pricing and availability, please contact our events team at events@blvdcoffee.com.au or fill out the inquiry form on our contact page.
                  </p>
                  <Link to="/contact" className="btn-primary">
                    INQUIRE NOW
                  </Link>
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
