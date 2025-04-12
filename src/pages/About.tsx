
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/shared/PageHeader";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <PageHeader 
        title="Our Story" 
        subtitle="The journey of BLVD Specialty Coffee"
        backgroundImage="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop"
      />
      
      <main>
        <section className="section-padding bg-white">
          <div className="blvd-container">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-light mb-8 text-center">Crafting Exceptional Coffee Experiences</h2>
              
              <div className="prose prose-lg mx-auto">
                <p>
                  Welcome to BLVD Specialty Coffee, a unique cafe that offers a range of specialty coffee blends and carefully crafted food options to provide a memorable dining experience for our customers.
                </p>
                
                <p>
                  At BLVD, we believe that coffee is more than just a drink – it's an art form that requires care and attention to detail to produce a truly delicious cup. That's why we source our coffee beans from some of the finest estates in the world and roast them to perfection in small batches. Our skilled baristas then use these beans to create a variety of coffee drinks, each one carefully crafted to bring out the best in the beans.
                </p>
                
                <div className="my-10">
                  <img 
                    src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?q=80&w=2071&auto=format&fit=crop" 
                    alt="BLVD Coffee founders" 
                    className="w-full h-auto rounded-sm"
                  />
                  <p className="text-sm text-center mt-2 text-blvd-charcoal/70">The founders of BLVD Specialty Coffee</p>
                </div>
                
                <h3 className="font-display text-2xl font-light mb-4">Our Philosophy</h3>
                <p>
                  But coffee is just the beginning. Our menu also features a range of delicious food options, from breakfast items to light bites, that are designed to complement our coffee and provide a satisfying meal. Whether you're grabbing a quick bite on the go or taking the time to sit and enjoy your meal, you're sure to find something that you love.
                </p>
                
                <p>
                  We roast our beans in small batches to maintain quality and freshness, developing unique profiles that highlight the natural characteristics of each origin. Our team of skilled baristas undergoes rigorous training to ensure that every beverage we serve meets our exacting standards.
                </p>
                
                <h3 className="font-display text-2xl font-light mb-4">Our Community</h3>
                <p>
                  At BLVD, we are dedicated to providing an exceptional dining experience for our customers. Our welcoming and relaxed atmosphere, combined with our commitment to quality, makes BLVD the perfect place to start your day, catch up with friends, or simply enjoy some time to yourself.
                </p>
                
                <p>
                  We're proud to be an active part of our local community, partnering with neighborhood businesses and contributing to local initiatives. Our commitment to sustainability extends beyond our sourcing practices to every aspect of our operation, from our biodegradable packaging to our comprehensive recycling program.
                </p>
                
                <div className="my-10">
                  <img 
                    src="https://images.unsplash.com/photo-1518655061710-5ccf392c275a?q=80&w=2069&auto=format&fit=crop" 
                    alt="BLVD Coffee Team" 
                    className="w-full h-auto rounded-sm"
                  />
                  <p className="text-sm text-center mt-2 text-blvd-charcoal/70">Our dedicated team of coffee professionals</p>
                </div>
                
                <h3 className="font-display text-2xl font-light mb-4">Looking Forward</h3>
                <p>
                  So come and visit us today, and discover why BLVD Specialty Coffee is the premier destination for coffee and food lovers alike.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
