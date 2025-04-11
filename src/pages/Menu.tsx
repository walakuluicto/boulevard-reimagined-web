
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/shared/PageHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function MenuPage() {
  return (
    <>
      <Navbar />
      <PageHeader 
        title="Our Menu" 
        subtitle="Carefully crafted coffee and food made with quality ingredients"
        backgroundImage="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=2070&auto=format&fit=crop"
      />
      
      <main>
        <section className="section-padding bg-white">
          <div className="blvd-container">
            <Tabs defaultValue="coffee" className="w-full max-w-4xl mx-auto">
              <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full mb-8">
                <TabsTrigger value="coffee">Coffee</TabsTrigger>
                <TabsTrigger value="breakfast">Breakfast</TabsTrigger>
                <TabsTrigger value="lunch">Lunch</TabsTrigger>
                <TabsTrigger value="pastries">Pastries</TabsTrigger>
                <TabsTrigger value="beans">Coffee Beans</TabsTrigger>
              </TabsList>
              
              <TabsContent value="coffee">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                  <div>
                    <h2 className="font-display text-2xl mb-6">Espresso</h2>
                    
                    <div className="space-y-6">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-medium">Espresso</h3>
                          <span className="text-blvd-gold">$4.50</span>
                        </div>
                        <p className="text-sm text-blvd-charcoal/80">A rich, concentrated coffee served in a small cup</p>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-medium">Macchiato</h3>
                          <span className="text-blvd-gold">$4.80</span>
                        </div>
                        <p className="text-sm text-blvd-charcoal/80">Espresso with a dash of frothy milk</p>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-medium">Cortado</h3>
                          <span className="text-blvd-gold">$5.20</span>
                        </div>
                        <p className="text-sm text-blvd-charcoal/80">Equal parts espresso and warm milk</p>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-medium">Flat White</h3>
                          <span className="text-blvd-gold">$5.50</span>
                        </div>
                        <p className="text-sm text-blvd-charcoal/80">Espresso with steamed milk and minimal foam</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="font-display text-2xl mb-6">Specialty</h2>
                    
                    <div className="space-y-6">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-medium">Pour Over</h3>
                          <span className="text-blvd-gold">$6.50</span>
                        </div>
                        <p className="text-sm text-blvd-charcoal/80">Hand-brewed coffee highlighting complex flavor notes</p>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-medium">Cold Brew</h3>
                          <span className="text-blvd-gold">$5.80</span>
                        </div>
                        <p className="text-sm text-blvd-charcoal/80">Smooth, low-acidity coffee steeped for 24 hours</p>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-medium">Affogato</h3>
                          <span className="text-blvd-gold">$6.20</span>
                        </div>
                        <p className="text-sm text-blvd-charcoal/80">Espresso poured over a scoop of vanilla ice cream</p>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-medium">BLVD Signature Latte</h3>
                          <span className="text-blvd-gold">$6.50</span>
                        </div>
                        <p className="text-sm text-blvd-charcoal/80">Our special blend with hints of caramel and vanilla</p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="breakfast">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                  <div>
                    <h2 className="font-display text-2xl mb-6">Morning Favorites</h2>
                    
                    <div className="space-y-6">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-medium">Avocado Toast</h3>
                          <span className="text-blvd-gold">$14.50</span>
                        </div>
                        <p className="text-sm text-blvd-charcoal/80">Sourdough toast, smashed avocado, poached egg, chili flakes</p>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-medium">Breakfast Bowl</h3>
                          <span className="text-blvd-gold">$16.80</span>
                        </div>
                        <p className="text-sm text-blvd-charcoal/80">Quinoa, kale, poached eggs, avocado, roasted tomatoes</p>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-medium">French Toast</h3>
                          <span className="text-blvd-gold">$15.20</span>
                        </div>
                        <p className="text-sm text-blvd-charcoal/80">Brioche bread, mixed berries, maple syrup, whipped cream</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="font-display text-2xl mb-6">Eggs & More</h2>
                    
                    <div className="space-y-6">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-medium">Eggs Benedict</h3>
                          <span className="text-blvd-gold">$16.50</span>
                        </div>
                        <p className="text-sm text-blvd-charcoal/80">English muffin, poached eggs, hollandaise, choice of ham or spinach</p>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-medium">Breakfast Burrito</h3>
                          <span className="text-blvd-gold">$15.80</span>
                        </div>
                        <p className="text-sm text-blvd-charcoal/80">Scrambled eggs, black beans, avocado, cheese, salsa</p>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-medium">Classic Breakfast</h3>
                          <span className="text-blvd-gold">$18.20</span>
                        </div>
                        <p className="text-sm text-blvd-charcoal/80">Two eggs any style, bacon, toast, roasted tomatoes, mushrooms</p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="lunch">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                  {/* Lunch menu content here */}
                  <div>
                    <h2 className="font-display text-2xl mb-6">Sandwiches</h2>
                    
                    <div className="space-y-6">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-medium">Chicken Pesto Panini</h3>
                          <span className="text-blvd-gold">$16.50</span>
                        </div>
                        <p className="text-sm text-blvd-charcoal/80">Grilled chicken, pesto, mozzarella, tomato on sourdough</p>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-medium">Mediterranean Veggie</h3>
                          <span className="text-blvd-gold">$14.80</span>
                        </div>
                        <p className="text-sm text-blvd-charcoal/80">Hummus, roasted vegetables, feta, olive tapenade on focaccia</p>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-medium">BLVD Club</h3>
                          <span className="text-blvd-gold">$17.20</span>
                        </div>
                        <p className="text-sm text-blvd-charcoal/80">Turkey, bacon, avocado, lettuce, tomato on multi-grain bread</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="font-display text-2xl mb-6">Salads</h2>
                    
                    <div className="space-y-6">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-medium">Quinoa & Kale</h3>
                          <span className="text-blvd-gold">$15.50</span>
                        </div>
                        <p className="text-sm text-blvd-charcoal/80">Quinoa, kale, roasted sweet potato, cranberries, almonds, lemon dressing</p>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-medium">Chicken Caesar</h3>
                          <span className="text-blvd-gold">$16.80</span>
                        </div>
                        <p className="text-sm text-blvd-charcoal/80">Grilled chicken, romaine, parmesan, croutons, house-made Caesar dressing</p>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-medium">Mediterranean Bowl</h3>
                          <span className="text-blvd-gold">$16.20</span>
                        </div>
                        <p className="text-sm text-blvd-charcoal/80">Falafel, hummus, tabbouleh, mixed greens, tzatziki sauce</p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="pastries">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                  {/* Pastries content here */}
                  <div>
                    <h2 className="font-display text-2xl mb-6">Sweet Treats</h2>
                    
                    <div className="space-y-6">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-medium">Croissant</h3>
                          <span className="text-blvd-gold">$4.50</span>
                        </div>
                        <p className="text-sm text-blvd-charcoal/80">Traditional butter croissant, baked fresh daily</p>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-medium">Pain au Chocolat</h3>
                          <span className="text-blvd-gold">$5.20</span>
                        </div>
                        <p className="text-sm text-blvd-charcoal/80">Chocolate-filled croissant pastry</p>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-medium">Cinnamon Roll</h3>
                          <span className="text-blvd-gold">$5.50</span>
                        </div>
                        <p className="text-sm text-blvd-charcoal/80">Swirled pastry with cinnamon, sugar, and vanilla glaze</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="font-display text-2xl mb-6">Cookies & More</h2>
                    
                    <div className="space-y-6">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-medium">Chocolate Chip Cookie</h3>
                          <span className="text-blvd-gold">$3.80</span>
                        </div>
                        <p className="text-sm text-blvd-charcoal/80">Classic cookie with semi-sweet chocolate chunks</p>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-medium">Blueberry Muffin</h3>
                          <span className="text-blvd-gold">$4.80</span>
                        </div>
                        <p className="text-sm text-blvd-charcoal/80">Moist muffin packed with fresh blueberries</p>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-medium">Banana Bread</h3>
                          <span className="text-blvd-gold">$4.50</span>
                        </div>
                        <p className="text-sm text-blvd-charcoal/80">Homemade with ripe bananas and walnuts</p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="beans">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                  {/* Coffee beans content here */}
                  <div>
                    <h2 className="font-display text-2xl mb-6">Single Origin</h2>
                    
                    <div className="space-y-6">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-medium">Ethiopian Yirgacheffe</h3>
                          <span className="text-blvd-gold">$18.50</span>
                        </div>
                        <p className="text-sm text-blvd-charcoal/80">Floral and citrus notes with a bright acidity, 250g</p>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-medium">Colombian Supremo</h3>
                          <span className="text-blvd-gold">$16.80</span>
                        </div>
                        <p className="text-sm text-blvd-charcoal/80">Rich caramel sweetness with hints of chocolate, 250g</p>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-medium">Costa Rican Tarrazu</h3>
                          <span className="text-blvd-gold">$17.20</span>
                        </div>
                        <p className="text-sm text-blvd-charcoal/80">Bold body with notes of honey and tropical fruit, 250g</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="font-display text-2xl mb-6">House Blends</h2>
                    
                    <div className="space-y-6">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-medium">BLVD Signature Blend</h3>
                          <span className="text-blvd-gold">$15.50</span>
                        </div>
                        <p className="text-sm text-blvd-charcoal/80">Our flagship blend with notes of chocolate, caramel, and nuts, 250g</p>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-medium">Espresso Blend</h3>
                          <span className="text-blvd-gold">$16.80</span>
                        </div>
                        <p className="text-sm text-blvd-charcoal/80">Dark roast with a rich crema and robust flavor, 250g</p>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-medium">Decaf Blend</h3>
                          <span className="text-blvd-gold">$17.20</span>
                        </div>
                        <p className="text-sm text-blvd-charcoal/80">Swiss water process decaffeinated with full flavor, 250g</p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
