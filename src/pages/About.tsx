
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/shared/PageHeader";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <PageHeader 
        title="Our Story" 
        subtitle="The journey of BLVD Coffee Co."
        backgroundImage="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop"
      />
      
      <main>
        <section className="section-padding bg-white">
          <div className="blvd-container">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-light mb-8 text-center">Crafting Exceptional Coffee Experiences</h2>
              
              <div className="prose prose-lg mx-auto">
                <p>
                  BLVD Coffee Co. was born from a passion for exceptional coffee and a desire to create a welcoming space for our community. Founded in 2015 by coffee enthusiasts Michael and Sarah Thompson, BLVD has grown from a small corner cafe to a beloved local institution.
                </p>
                
                <p>
                  Our journey began when Michael, after years of working in specialty coffee shops around the world, decided to bring his expertise back to Melbourne. Together with Sarah, whose background in hospitality and interior design shaped the warm, inviting atmosphere of our spaces, they created BLVD with a simple mission: to serve outstanding coffee in an environment that feels like home.
                </p>
                
                <div className="my-10">
                  <img 
                    src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?q=80&w=2071&auto=format&fit=crop" 
                    alt="BLVD Coffee founders" 
                    className="w-full h-auto rounded-sm"
                  />
                  <p className="text-sm text-center mt-2 text-blvd-charcoal/70">Michael and Sarah Thompson, Founders of BLVD Coffee Co.</p>
                </div>
                
                <h3 className="font-display text-2xl font-light mb-4">Our Philosophy</h3>
                <p>
                  At BLVD, we believe that every cup of coffee tells a story — of the farmers who grew the beans, the roasters who developed their flavor profiles, and the baristas who craft each beverage with care. We're committed to ethical sourcing practices, working directly with farmers whenever possible and ensuring fair compensation for their exceptional products.
                </p>
                
                <p>
                  We roast our beans in small batches to maintain quality and freshness, developing unique profiles that highlight the natural characteristics of each origin. Our team of skilled baristas undergoes rigorous training to ensure that every beverage we serve meets our exacting standards.
                </p>
                
                <h3 className="font-display text-2xl font-light mb-4">Our Community</h3>
                <p>
                  Beyond great coffee, BLVD is about building connections. We host regular events, from cupping sessions and brewing workshops to art exhibitions and acoustic performances by local musicians. Our spaces are designed to be versatile — a peaceful morning retreat for the early risers, a productive workspace for the midday crowd, and a vibrant gathering place in the evenings.
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
                  As we continue to grow, our core values remain unchanged. We're committed to quality, community, and creating memorable experiences for everyone who walks through our doors. Whether you're a coffee aficionado or just beginning to explore beyond your regular cup, we invite you to join us on this journey.
                </p>
                
                <p>
                  Visit us at BLVD Coffee Co. and become part of our story.
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
