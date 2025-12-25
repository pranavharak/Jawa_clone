const bikeData = [
        {id:1, name:"Yezdi Roadster", price:"₹ 1,95,582" ,img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/208062/roadster-right-side-view-4.png?isig=0&q=80"},
        {id:2, name:"Yezdi Adventure", price:"₹ 2,00,099", img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/201839/adventure-right-side-view-8.png?isig=0&q=80"},
        {id:3, name:"Yezdi Scrambler", price:"₹ 1,97,499", img:"https://imgd.aeplcdn.com/227x128/n/cw/ec/110491/scrambler-right-side-view-5.png?isig=0&q=80"}
    ]


export default function Yezdi() {
    const openWindow=()=>{
        window.open("https://www.jawayezdimotorcycles.com/pages/yezdi")
    }
  return (
    <section id="yezdi">
        <div className="text-white mt-10 mx-auto max-w-7xl ">
            <div className="mb-14">
                <h1 className="uppercase text-4xl font-bold text-center md:text-5xl tracking-widest">Yezdi
                    <span className="block h-1 w-28 bg-red-600 mx-auto mt-2"></span>
                </h1>
            
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-10 lg:gap-20 mt-12">
                <div className="w-full md:w-1/2 text-center md:text-left ml-5 mr-5 items-center justify-center ">
                    <center><p className="text-zinc-300 text-[22px] font-medium md:text-xl leading-relaxed">Yezdi Motorcycles is designed for riders who seek adventure beyond city limits. 
                    With rugged engineering, strong performance, and a bold stance, Yezdi bikes are 
                    built to handle highways, rough roads, and long journeys with confidence. 
                    Inspired by a legendary past and engineered for modern riders, Yezdi stands 
                    for durability, freedom, and exploration.</p></center>
                    <center><button className="mt-8 px-7 mb-4 py-3 bg-red-600 
                    text-white font-bold uppercase tracking-wider rounded-lg border-gray-400 hover:bg-red-700 hover:border-black border-2 hover:scale-110 transition-transform" 
                    onClick={openWindow}>Explore Bikes</button></center>
                </div>

                <div className="w-full md:w-1/2 flex justify-center">
                        <img 
                            src='https://htcms-prod-images.s3.ap-south-1.amazonaws.com/ht/auto/cms-images/yezdimotorcycles_roadster/images/exterior_yezdi-roadster-2025_front-left-view_930x620.jpg' 
                            alt='yezdi'
                            className='w-full max-w-md h-auto hover:border-yellow-300 border-4 border-transparent rounded-xl hover:scale-105  transition-transform duration-500 mb-7'
                        />
                </div>
            </div>
                <h1 className="text-[26px] text-white mt-5 font-semibold ml-4">Popular Bikes</h1>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-7 ">
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
