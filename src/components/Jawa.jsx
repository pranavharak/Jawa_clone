
const bikeData = [
        {id:1, name:"Jawa 42 Bobber", price:"₹ 1,95,295" ,img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/131937/42-bobber-right-side-view-5.png?isig=0&q=80"},
        {id:2, name:"Jawa Perak", price:"₹ 2,01,931", img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/53643/perak-right-side-view-2.png?isig=0&q=80"},
        {id:3, name:"Jawa 42", price:"₹ 1,61,249", img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/184473/42-right-front-three-quarter-22.png?isig=0&q=80"},
        {id:4, name:"Jawa 42 FJ", price:"₹ 1,83,595", img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/186271/42-fj-right-side-view-21.png?isig=0&q=80"}
    ]


export default function Jawa() {
    const openWindow=()=>{
        window.open("https://www.jawayezdimotorcycles.com/pages/jawa")
    }



  return (
    <section id='jawa'>
        <div className="max-w-7xl mx-auto mt-8">
            <h1 className='cursor-default uppercase text-center text-white font-bold text-4xl md:text-5xl tracking-widest'>
                Jawa
                <span className="block h-1 w-28 bg-red-600 mx-auto mt-2"></span>
            </h1>

            <div className='flex flex-col md:flex-row items-center justify-between gap-10 lg:gap-20 mt-12'>
                
                <div className="w-full md:w-1/2 flex justify-center">
                    <img 
                        src='https://www.jawa.eu/data/filecache/af/@1200x0/3-slider%2Btitul.jpg' 
                        alt='jawa'
                        className='w-full max-w-md h-auto hover:border-yellow-300 border-4 border-transparent rounded-xl hover:scale-105  transition-transform duration-500 mb-5'
                    />
                </div>

                <div className="w-full md:w-1/2 text-center md:text-left items-center justify-center">
                    <center><p className='text-zinc-300 text-[22px] font-medium md:text-xl leading-relaxed'>
                        Jawa Motorcycles brings back the iconic riding experience with a perfect 
                        blend of retro styling and modern engineering. Built for riders who appreciate 
                        classic looks with reliable performance on today's roads. Originally founded in 1929, 
                        Jawa became iconic for its distinctive exhaust note and elegant design. 
                        Today, Jawa motorcycles carry forward this legacy while adapting to modern riding needs. 
                        The brand stands for authenticity, durability, and a deep emotional connection with riders 
                        who appreciate classic motorcycling culture.
                    </p></center>
                    
                    <center><button 
                        className="mt-8 px-7 mb-4 py-3 bg-red-600 text-white font-bold uppercase tracking-wider rounded-lg border-gray-400 hover:bg-red-700 hover:border-black border-2 hover:scale-110 transition-transform" 
                        onClick={openWindow}>
                        Explore Bikes
                    </button></center>
                </div>

            </div>
            
            <h1 className="text-[26px] text-white mt-5 font-semibold ml-4">Popular Bikes</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-7">
                {bikeData.map((bike)=>(
                    <div key={bike.id} 
                        className="bg-zinc-800 overflow-hidden rounded-lg justify-items-center border-2 border-red-500 mb-7 
                            hover:opacity-40 hover:scale-110 hover:rotate-2 duration-700 hover:bg-red-400 px-3 py-4">                        
                        <h3 className="text-xl text-white font-semibold p-1">{bike.name}</h3>
                        <p className="text-[18px] font-medium text-gray-400">{bike.price}</p>
                        <img src={bike.img} alt={bike.name}/>
                    </div>
                ))}
                
            </div>
        </div>
    </section>
  )
}
