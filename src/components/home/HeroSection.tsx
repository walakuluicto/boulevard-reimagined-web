
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="h-full w-full bg-cover bg-center bg-no-repeat" 
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop')`,
          }}
        ></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 blvd-container">
        <div className="max-w-xl text-white">
          <span className="inline-block mb-4 text-sm uppercase tracking-wide font-medium">Welcome to BLVD Skin Clinics</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-light mb-6">
            Transform Your Skin's Natural Beauty
          </h1>
          <p className="text-lg mb-8 font-light">
            Expert treatments and skin care solutions delivered by qualified therapists in a luxurious setting.
          </p>
          <div className="flex space-x-4">
            <Link to="/book" className="btn-primary">
              BOOK NOW
            </Link>
            <Link to="/treatments" className="px-6 py-3 border border-white text-white text-sm uppercase tracking-wider font-medium transition-all hover:bg-white/20">
              EXPLORE TREATMENTS
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
