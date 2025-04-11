
import { Link } from 'react-router-dom';

export default function IntroSection() {
  return (
    <section className="section-padding bg-white">
      <div className="blvd-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1620331311520-246422fd82f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNraW5jYXJlfGVufDB8fDB8fHww" 
              alt="BLVD Skin Clinics Interior" 
              className="w-full h-auto object-cover rounded-sm"
            />
          </div>
          
          <div>
            <span className="inline-block text-blvd-gold text-sm uppercase tracking-wider mb-4">Our Philosophy</span>
            <h2 className="font-display text-3xl md:text-4xl font-light mb-6">A Personalized Approach to Beauty</h2>
            <p className="text-blvd-charcoal/80 mb-6 leading-relaxed">
              At BLVD Skin Clinics, we believe everyone deserves to feel confident in their own skin. Our team of expert dermal therapists and medical practitioners are dedicated to providing personalized treatments that enhance your natural beauty.
            </p>
            <p className="text-blvd-charcoal/80 mb-10 leading-relaxed">
              Using the latest technology and premium products, we ensure each treatment is tailored to your unique skin concerns and aesthetic goals, delivering visible, long-lasting results.
            </p>
            <Link to="/about" className="btn-primary">
              ABOUT US
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
