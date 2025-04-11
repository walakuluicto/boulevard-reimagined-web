
interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

export default function PageHeader({ title, subtitle, backgroundImage = "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2071&auto=format&fit=crop" }: PageHeaderProps) {
  return (
    <div className="relative pt-24 pb-16 md:pb-24">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="h-full w-full bg-cover bg-center bg-no-repeat" 
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${backgroundImage}')`,
          }}
        ></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 blvd-container h-full flex items-center justify-center text-center py-16 md:py-24">
        <div className="text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-light mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl font-light max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
