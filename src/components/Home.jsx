export default function Home() {
  return (
    <section id="home">
      <div className="relative h-[400px] md:h-[600px] w-full overflow-hidden bg-gray-900">
        
        <div className="hidden md:block absolute inset-0 w-full mt-16">
            <video     
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover">
                <source src="https://www.jawayezdimotorcycles.com/cdn/shop/videos/c/vp/2a2673a880474fcc9d43876ea6f12eea/2a2673a880474fcc9d43876ea6f12eea.SD-480p-1.5Mbps-57234668.mp4?v=0" type="video/mp4"/>
            </video>
        </div>
        <div className="block md:hidden absolute inset-0 w-full h-full mt-14">
          <img
            src="https://www.jawayezdimotorcycles.com/cdn/shop/files/Website_Banner_images_Mob_Ver_JY_-2_Mob_Ver_1.png?v=1765953623&width=1500"
            alt="Jawa Mobile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}