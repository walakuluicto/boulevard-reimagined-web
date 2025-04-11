
import { MapPin, Phone, Mail } from 'lucide-react';

export default function ContactSection() {
  return (
    <section className="section-padding bg-blvd-sand">
      <div className="blvd-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <span className="inline-block text-blvd-gold text-sm uppercase tracking-wider mb-4">Get In Touch</span>
            <h2 className="font-display text-3xl md:text-4xl font-light mb-6">Contact Us</h2>
            <p className="text-blvd-charcoal/80 mb-8 leading-relaxed">
              We're here to answer any questions you may have about our treatments or products. 
              Reach out to our team for personalized advice or to book your consultation.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="mr-4 text-blvd-gold">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Visit Us</h4>
                  <p className="text-blvd-charcoal/80 text-sm">123 Bourke Street, Melbourne VIC 3000</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 text-blvd-gold">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Call Us</h4>
                  <p className="text-blvd-charcoal/80 text-sm">+61 3 9123 4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 text-blvd-gold">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email Us</h4>
                  <p className="text-blvd-charcoal/80 text-sm">contact@blvdskins.com.au</p>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Business Hours</h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>Monday - Friday</div>
                <div>9:00 AM - 7:00 PM</div>
                <div>Saturday</div>
                <div>9:00 AM - 5:00 PM</div>
                <div>Sunday</div>
                <div>10:00 AM - 4:00 PM</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8">
            <h3 className="font-display text-2xl mb-6">Send Us a Message</h3>
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
                className="btn-primary w-full"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
