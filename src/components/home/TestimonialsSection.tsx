
export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Client",
      quote: "The team at BLVD transformed my skin. After struggling with acne for years, their personalized treatment plan gave me the confidence I've always wanted.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 2,
      name: "Michael Thompson",
      role: "Client",
      quote: "The anti-wrinkle treatment I received was exceptional. The results were natural-looking and the staff made me feel completely at ease throughout the process.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 3,
      name: "Emma Wilson",
      role: "Client",
      quote: "From the moment I stepped into BLVD, I knew I was in good hands. Their expertise and attention to detail is unmatched. I couldn't be happier with my results.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    },
  ];

  return (
    <section className="section-padding bg-blvd-beige">
      <div className="blvd-container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-blvd-gold text-sm uppercase tracking-wider mb-4">Testimonials</span>
          <h2 className="font-display text-3xl md:text-4xl font-light mb-6">What Our Clients Say</h2>
          <p className="text-blvd-charcoal/80 leading-relaxed">
            Don't just take our word for it. Hear from our clients about how BLVD Skin Clinics has transformed their skin and boosted their confidence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 shadow-sm">
              <div className="mb-6">
                <svg className="h-8 w-8 text-blvd-gold" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>
              <p className="text-blvd-charcoal/80 mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <img
                  className="h-10 w-10 rounded-full object-cover"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <div className="ml-4">
                  <h4 className="text-sm font-medium">{testimonial.name}</h4>
                  <p className="text-xs text-blvd-charcoal/60">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
