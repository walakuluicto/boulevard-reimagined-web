
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: "Advanced Hydration Serum",
    price: "$95.00",
    image: "https://images.unsplash.com/photo-1594125311687-8c8321a508b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2tpbmNhcmUlMjBwcm9kdWN0fGVufDB8fDB8fHww",
  },
  {
    id: 2,
    name: "Restorative Night Cream",
    price: "$120.00",
    image: "https://images.unsplash.com/photo-1598452963314-b09f397a5c48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNraW5jYXJlJTIwcHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 3,
    name: "Vitamin C Brightening Complex",
    price: "$85.00",
    image: "https://images.unsplash.com/photo-1556229010-aa3f7ff66b24?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNraW5jYXJlJTIwcHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 4,
    name: "Gentle Exfoliating Cleanser",
    price: "$65.00",
    image: "https://images.unsplash.com/photo-1617897903246-719242758050?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2tpbmNhcmUlMjBwcm9kdWN0fGVufDB8fDB8fHww",
  },
];

export default function ProductsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="blvd-container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-blvd-gold text-sm uppercase tracking-wider mb-4">Our Products</span>
          <h2 className="font-display text-3xl md:text-4xl font-light mb-6">Premium Skin Care Range</h2>
          <p className="text-blvd-charcoal/80 leading-relaxed">
            Continue your skincare journey at home with our curated selection of medical-grade products, personally recommended by our expert therapists.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="mb-4 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="font-medium text-lg mb-1">{product.name}</h3>
              <p className="text-blvd-gold font-medium">{product.price}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/shop" className="btn-primary">
            SHOP ALL PRODUCTS
          </Link>
        </div>
      </div>
    </section>
  );
}
