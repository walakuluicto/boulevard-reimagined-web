
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/shared/PageHeader";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

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
      </main>
      
      <Footer />
    </>
  );
}
