const timelineData = [
  {
    id: 1,
    year: "1929",
    title: "The Birth of Jawa",
    description: "Jawa Motorcycles was founded in Czechoslovakia, earning global recognition for its reliable engineering and distinctive motorcycle design.",
    image: "https://i.pinimg.com/736x/74/9e/38/749e3837685f72cabb4979ac28db0cf2.jpg"
  },
  {
    id: 2,
    year: "1960s",
    title: "Jawa in India",
    description: "Jawa motorcycles became a household name in India, admired for their durability, smooth performance, and iconic exhaust sound.",
    image: "https://staticimg.amarujala.com/assets/images/2018/10/14/jawa-motorcycle_1539489922.jpeg?w=414&dpr=1.0&q=80"
  },
  {
    id: 3,
    year: "1973",
    title: "Yezdi Legacy Begins",
    description: "Jawa motorcycles were rebranded as Yezdi in India, creating a strong independent identity while continuing the Jawa engineering legacy.",
    image: "https://www.cartoq.com/wp-content/uploads/2023/10/yezdi-restored-1.jpg"
  },
  {
    id: 4,
    year: "2018",
    title: "Jawa Returns to India",
    description: "Jawa made a grand comeback in India under Classic Legends, reintroducing classic motorcycles with modern technology and design.",
    image: "https://c.ndtvimg.com/2018-11/fgnt780s_jawa-forty-two_625x300_16_November_18.jpg"
  },
  {
    id: 5,
    year: "2022",
    title: "Jawa-Yezdi United",
    description: "Classic Legends brought Jawa and Yezdi together, combining retro heritage and adventure-focused engineering under one brand family.",
    image: "https://imgd.aeplcdn.com/1280x720/n/bw/models/colors/jawa-select-model-stealth-1712700694621.jpeg"
  },
  {
    id: 6,
    year: "2024",
    title: "Modern Classics & Adventure",
    description: "With Jawa 42 Bobber and Yezdi Adventure, the brand continues to serve both classic motorcycle lovers and modern adventure riders.",
    image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/184473/42-2024-left-front-three-quarter-8.jpeg?isig=0&q=80"
  }
];

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <div className="mb-16">
          <h2 className="text-white text-4xl font-bold uppercase tracking-tighter">
            Our History
          </h2>
          <div className="w-20 h-1 bg-red-600 mt-4"></div>
        </div>

        {/* Timeline Line Container */}
        <div className="relative border-l-2 border-zinc-800 ml-2 md:ml-6">
          {timelineData.map((bike) => (
            <div key={bike.id} className="mb-16 ml-8 md:ml-12 relative group">
              
              {/* Simplified Timeline Dot */}
              <div className="absolute -left-[43px] md:-left-[59px] top-1.5 w-4 h-4 bg-red-600 rounded-full border-4 border-black z-10"></div>

              {/* Flex Wrapper: Stacks on mobile, alternates on desktop */}
              <div className={`flex flex-col gap-8 items-start ${bike.id% 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                
                {/* Text Content */}
                <div className="w-full md:w-1/2">
                  <span className="text-red-600 font-bold text-xl font-mono block mb-2">
                    {bike.year}
                  </span>
                  <h3 className="text-white text-2xl font-bold uppercase italic mb-3">
                    {bike.title}
                  </h3>
                  <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
                    {bike.description}
                  </p>
                </div>

                {/* Image Container: Optimized for all screens */}
                <div className="w-full md:w-1/2">
                  <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 shadow-2xl">
                    <img 
                      src={bike.image} 
                      alt={bike.title} 
                      className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}