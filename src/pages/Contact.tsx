
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/shared/PageHeader";
import { MapPin, Phone, Mail, Clock, Send, Bus, Car, Train } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <PageHeader 
        title="Contact Us" 
        subtitle="We'd love to hear from you"
        backgroundImage="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop"
      />
      
      <main>
        <section className="section-padding bg-white">
          <div className="blvd-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="font-display text-3xl font-light mb-6">Get In Touch</h2>
                <p className="text-blvd-charcoal/80 mb-8 leading-relaxed">
                  We welcome your questions, feedback, and inquiries. Whether you're looking to book our space for an event, learn more about our coffee sourcing, or simply want to say hello, our team is here to help.
                </p>
                
                <div className="space-y-8 mb-10">
                  <div className="flex items-start">
                    <div className="mr-4 text-blvd-gold">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Visit Us</h3>
                      <p className="text-blvd-charcoal/80 text-sm">123 Main Street, Melbourne VIC 3000</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 text-blvd-gold">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Call Us</h3>
                      <p className="text-blvd-charcoal/80 text-sm">+61 3 9123 4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 text-blvd-gold">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Email Us</h3>
                      <p className="text-blvd-charcoal/80 text-sm">hello@blvdcoffee.com.au</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 text-blvd-gold">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Hours</h3>
                      <div className="text-blvd-charcoal/80 text-sm space-y-1">
                        <p>Monday - Friday: 7:00 AM - 6:00 PM</p>
                        <p>Saturday: 8:00 AM - 6:00 PM</p>
                        <p>Sunday: 8:00 AM - 4:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <h3 className="font-medium text-lg mb-4">Getting Here</h3>
                
                <div className="space-y-5 mb-8">
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
                
                <div>
                  <h3 className="font-medium text-lg mb-4">Inquiries</h3>
                  <div className="space-y-3 text-blvd-charcoal/80 text-sm">
                    <p><span className="font-medium">Catering:</span> catering@blvdcoffee.com.au</p>
                    <p><span className="font-medium">Events:</span> events@blvdcoffee.com.au</p>
                    <p><span className="font-medium">Careers:</span> careers@blvdcoffee.com.au</p>
                    <p><span className="font-medium">Press:</span> media@blvdcoffee.com.au</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-blvd-cream p-8 rounded-sm">
                <h2 className="font-display text-2xl font-light mb-6">Send Us a Message</h2>
                <form>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="name" className="block text-sm mb-1">Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full px-4 py-2 border border-blvd-beige focus:outline-none focus:ring-1 focus:ring-blvd-gold"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm mb-1">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full px-4 py-2 border border-blvd-beige focus:outline-none focus:ring-1 focus:ring-blvd-gold"
                        placeholder="Your Email"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="subject" className="block text-sm mb-1">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      className="w-full px-4 py-2 border border-blvd-beige focus:outline-none focus:ring-1 focus:ring-blvd-gold"
                      placeholder="Subject"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm mb-1">Message</label>
                    <textarea 
                      id="message" 
                      rows={5}
                      className="w-full px-4 py-2 border border-blvd-beige focus:outline-none focus:ring-1 focus:ring-blvd-gold"
                      placeholder="Your Message"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="btn-primary flex items-center justify-center w-full"
                  >
                    <Send size={16} className="mr-2" />
                    SEND MESSAGE
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        
        <section className="section-padding bg-blvd-sand">
          <div className="blvd-container">
            <div className="mt-8">
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
            
            <div className="mt-12 text-center">
              <h3 className="font-display text-2xl font-light mb-6">Find Us</h3>
              <div className="h-96 rounded-sm overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1595867818082-083862f3d630?q=80&w=2070&auto=format&fit=crop" 
                  alt="Map showing BLVD Coffee location"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
