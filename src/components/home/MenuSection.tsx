
import { Link } from 'react-router-dom';

const menuItems = [
  {
    id: 1,
    name: "Coffee & Tea",
    description: "Our hand-selected beans are roasted to perfection and prepared using methods that bring out their unique flavors.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop",
    link: "/menu#coffee"
  },
  {
    id: 2,
    name: "Other Beverages",
    description: "Explore our range of specialty drinks, from freshly squeezed juices to milkshakes and smoothies.",
    image: "https://images.unsplash.com/photo-1513267048331-5611cad62e41?q=80&w=2070&auto=format&fit=crop",
    link: "/menu#beverages"
  },
  {
    id: 3,
    name: "All Day Breakfast & Specialties",
    description: "From hearty breakfast options to delicious specialties, we offer nutritious meals made with locally sourced ingredients.",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=2080&auto=format&fit=crop",
    link: "/menu#breakfast"
  },
  {
    id: 4,
    name: "Kids & Seasonal",
    description: "Special menu items for the little ones and seasonal specialties that change throughout the year.",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=2069&auto=format&fit=crop",
    link: "/menu#kids"
  },
];

export default function MenuSection() {
  return (
    <section className="section-padding bg-blvd-cream">
      <div className="blvd-container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-blvd-gold text-sm uppercase tracking-wider mb-4">Our Menu</span>
          <h2 className="font-display text-3xl md:text-4xl font-light mb-6">Crafted With Care</h2>
          <p className="text-blvd-charcoal/80 leading-relaxed">
            At BLVD, we believe that coffee is more than just a drink – it's an art form that requires care and attention to detail. Our menu also features a range of delicious food options designed to complement our coffee and provide a satisfying meal.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {menuItems.map((item) => (
            <div key={item.id} className="bg-white group overflow-hidden">
              <div className="flex flex-col md:flex-row h-full">
                <div className="md:w-2/5 relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-48 md:h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-xl mb-3">{item.name}</h3>
                    <p className="text-blvd-charcoal/80 text-sm mb-6">{item.description}</p>
                  </div>
                  <Link 
                    to={item.link}
                    className="text-blvd-gold underline text-sm font-medium uppercase tracking-wider hover:text-blvd-taupe"
                  >
                    View Menu
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/menu" className="btn-primary">
            FULL MENU
          </Link>
        </div>
      </div>
    </section>
  );
}
