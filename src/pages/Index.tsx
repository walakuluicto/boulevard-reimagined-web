
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import MenuSection from "@/components/home/MenuSection";
import LocationSection from "@/components/home/LocationSection";
import ContactSection from "@/components/home/ContactSection";
import InstagramFeed from "@/components/home/InstagramFeed";

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <MenuSection />
        <LocationSection />
        <InstagramFeed />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
