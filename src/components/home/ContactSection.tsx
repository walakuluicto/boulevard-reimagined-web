
import { MapPin, Phone, Mail, Send } from 'lucide-react';

export default function ContactSection() {
  return (
    <section className="section-padding bg-blvd-sand">
      <div className="blvd-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <span className="inline-block text-blvd-gold text-sm uppercase tracking-wider mb-4">Get In Touch</span>
            <h2 className="font-display text-3xl md:text-4xl font-light mb-6">Contact Us</h2>
            <p className="text-blvd-charcoal/80 mb-8 leading-relaxed">
              Have questions, suggestions, or interested in catering services? We'd love to hear from you! Reach out to our team through any of the channels below.
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
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Phone</h4>
                  <p className="text-blvd-charcoal/80 text-sm">+61 3 9123 4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 text-blvd-gold">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <p className="text-blvd-charcoal/80 text-sm">hello@blvdcoffee.com.au</p>
                </div>
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
  );
}
