
import { Instagram } from 'lucide-react';

const instagramPosts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=2070&auto=format&fit=crop",
    alt: "Coffee art latte"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=2067&auto=format&fit=crop",
    alt: "Coffee beans"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1534040385115-33dcb3acba5b?q=80&w=1974&auto=format&fit=crop",
    alt: "BLVD interior"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1579888944880-d98341245702?q=80&w=2070&auto=format&fit=crop",
    alt: "Pastries and coffee"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?q=80&w=2069&auto=format&fit=crop",
    alt: "Coffee brewing"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1525193612562-0ec53b0e5d7c?q=80&w=2070&auto=format&fit=crop",
    alt: "Coffee shop atmosphere"
  },
];

export default function InstagramFeed() {
  return (
    <section className="section-padding bg-blvd-beige">
      <div className="blvd-container">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-block text-blvd-gold text-sm uppercase tracking-wider mb-4">Social</span>
          <h2 className="font-display text-3xl md:text-4xl font-light mb-6">Follow Our Journey</h2>
          <p className="text-blvd-charcoal/80 leading-relaxed mb-4">
            Join our community on Instagram and share your BLVD moments with us.
          </p>
          <a 
            href="https://instagram.com/blvdcoffee" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-blvd-gold hover:text-blvd-taupe transition-colors"
          >
            <Instagram className="mr-2" size={20} />
            @blvdcoffee
          </a>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {instagramPosts.map((post) => (
            <div 
              key={post.id} 
              className="aspect-square overflow-hidden group cursor-pointer"
            >
              <img 
                src={post.image} 
                alt={post.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
