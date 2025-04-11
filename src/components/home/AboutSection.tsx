
import { Link } from 'react-router-dom';

export default function AboutSection() {
  return (
    <section className="section-padding bg-white">
      <div className="blvd-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=2070&auto=format&fit=crop" 
              alt="BLVD Coffee Interior" 
              className="w-full h-auto object-cover rounded-sm"
            />
          </div>
          
          <div>
            <span className="inline-block text-blvd-gold text-sm uppercase tracking-wider mb-4">Our Story</span>
            <h2 className="font-display text-3xl md:text-4xl font-light mb-6">Coffee With a Purpose</h2>
            <p className="text-blvd-charcoal/80 mb-6 leading-relaxed">
              At BLVD, we believe in the power of a perfect cup of coffee to transform your day. Founded in 2015, our café has become a beloved gathering place for the community, where exceptional coffee meets warm hospitality.
            </p>
            <p className="text-blvd-charcoal/80 mb-10 leading-relaxed">
              We source our beans ethically from around the world, roast them with precision, and serve them with care. Every cup tells a story of dedication to quality and sustainability.
            </p>
            <Link to="/about" className="btn-primary">
              OUR STORY
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
