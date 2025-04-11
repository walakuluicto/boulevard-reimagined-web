
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="h-full w-full bg-cover bg-center bg-no-repeat" 
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=2070&auto=format&fit=crop')`,
          }}
        ></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 blvd-container">
        <div className="max-w-xl text-white">
          <span className="inline-block mb-4 text-sm uppercase tracking-wide font-medium">Welcome to BLVD</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-light mb-6">
            Specialty Coffee & Good Vibes
          </h1>
          <p className="text-lg mb-8 font-light">
            Artisanal coffee, freshly baked goods, and a welcoming atmosphere in the heart of the city.
          </p>
          <div className="flex space-x-4">
            <Link to="/menu" className="btn-primary">
              OUR MENU
            </Link>
            <Link to="/location" className="px-6 py-3 border border-white text-white text-sm uppercase tracking-wider font-medium transition-all hover:bg-white/20">
              FIND US
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
