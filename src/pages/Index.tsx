
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import IntroSection from "@/components/home/IntroSection";
import ServicesSection from "@/components/home/ServicesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ProductsSection from "@/components/home/ProductsSection";
import ContactSection from "@/components/home/ContactSection";

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <IntroSection />
        <ServicesSection />
        <TestimonialsSection />
        <ProductsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
