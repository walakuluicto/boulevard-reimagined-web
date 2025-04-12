
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
            <Tabs defaultValue="coffee" className="w-full max-w-5xl mx-auto">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full mb-8">
                <TabsTrigger value="coffee">Coffee & Tea</TabsTrigger>
                <TabsTrigger value="beverages">Other Beverages</TabsTrigger>
                <TabsTrigger value="breakfast">All Day Breakfast & Specialties</TabsTrigger>
                <TabsTrigger value="kids">Kids & Seasonal</TabsTrigger>
              </TabsList>
              
              <TabsContent value="coffee" className="flex justify-center">
                <div className="max-w-4xl">
                  <img 
                    src="/lovable-uploads/2faa7e7d-3684-45ea-b541-ddd4b90c2557.png" 
                    alt="Coffee and tea menu" 
                    className="w-full rounded-md shadow-md"
                  />
                </div>
              </TabsContent>
              
              <TabsContent value="beverages" className="flex justify-center">
                <div className="max-w-4xl">
                  <img 
                    src="/lovable-uploads/f8848e41-8651-435f-a0c4-2b8332007d68.png" 
                    alt="Other beverages menu" 
                    className="w-full rounded-md shadow-md"
                  />
                </div>
              </TabsContent>
              
              <TabsContent value="breakfast" className="flex justify-center">
                <div className="max-w-4xl">
                  <img 
                    src="/lovable-uploads/eebcc708-a05a-411f-b301-9957ba1bbc6f.png" 
                    alt="All day breakfast and specialties menu" 
                    className="w-full rounded-md shadow-md"
                  />
                </div>
              </TabsContent>
              
              <TabsContent value="kids" className="flex justify-center">
                <div className="max-w-4xl">
                  <img 
                    src="/lovable-uploads/64ef18b4-9a92-47f1-a82e-cde716c6c6e6.png" 
                    alt="Kids and seasonal menu" 
                    className="w-full rounded-md shadow-md"
                  />
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
