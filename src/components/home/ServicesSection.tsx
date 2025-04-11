
import { Link } from 'react-router-dom';

const services = [
  {
    id: 1,
    name: "Facial Treatments",
    description: "Revitalize your skin with our range of specialized facial treatments designed to address specific concerns.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop",
    link: "/treatments#facials"
  },
  {
    id: 2,
    name: "Anti-Wrinkle",
    description: "Reduce the appearance of fine lines and wrinkles with our medical-grade anti-wrinkle treatments.",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhdXR5JTIwdHJlYXRtZW50fGVufDB8fDB8fHww",
    link: "/treatments#anti-wrinkle"
  },
  {
    id: 3,
    name: "Dermal Fillers",
    description: "Restore volume and enhance facial contours with our premium dermal filler treatments.",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/treatments#fillers"
  },
  {
    id: 4,
    name: "Skin Needling",
    description: "Stimulate collagen production and improve skin texture with our advanced skin needling procedures.",
    image: "https://images.unsplash.com/photo-1571875257727-256c39da42af?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/treatments#needling"
  },
];

export default function ServicesSection() {
  return (
    <section className="section-padding bg-blvd-cream">
      <div className="blvd-container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-blvd-gold text-sm uppercase tracking-wider mb-4">Our Services</span>
          <h2 className="font-display text-3xl md:text-4xl font-light mb-6">Luxurious Treatments for Every Skin Type</h2>
          <p className="text-blvd-charcoal/80 leading-relaxed">
            We offer a comprehensive range of advanced beauty and skin treatments, delivered by our team of qualified professionals using only premium products and cutting-edge technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white group overflow-hidden">
              <div className="flex flex-col md:flex-row h-full">
                <div className="md:w-2/5 relative overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.name}
                    className="w-full h-48 md:h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-xl mb-3">{service.name}</h3>
                    <p className="text-blvd-charcoal/80 text-sm mb-6">{service.description}</p>
                  </div>
                  <Link 
                    to={service.link}
                    className="text-blvd-gold underline text-sm font-medium uppercase tracking-wider hover:text-blvd-taupe"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/treatments" className="btn-primary">
            VIEW ALL TREATMENTS
          </Link>
        </div>
      </div>
    </section>
  );
}
