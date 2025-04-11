
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Coffee } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-blvd-cream pt-24 pb-16">
        <div className="text-center px-4">
          <Coffee size={60} className="mx-auto text-blvd-gold mb-4" />
          <h1 className="text-6xl md:text-8xl font-display font-light mb-4">404</h1>
          <p className="text-xl md:text-2xl text-blvd-charcoal mb-8">
            Oops! We couldn't find the page you're looking for.
          </p>
          <Link 
            to="/" 
            className="btn-primary"
          >
            BACK TO HOMEPAGE
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
