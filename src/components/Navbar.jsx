import { User, Menu, X } from 'lucide-react' // Added X icon for closing
import { useState } from 'react'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="fixed w-full z-50 bg-gray-800 px-6 py-2 flex justify-between items-center text-white">
            {/* LOGO */}
            <div>
                <a href='#'>
                    <img src="https://www.jawayezdimotorcycles.com/cdn/shop/files/Rectangle_traced.png?v=1753943031&width=465" alt="logo" className="w-44 h-auto" />
                </a>
            </div>

            {/* DESKTOP MENU (Hidden on Mobile) */}
            <div className="hidden md:flex justify-between text-[22px] gap-10 font-medium tracking-wide">
                <a href="#home" className='hover:text-zinc-400 hover:scale-95 duration-300'>Home</a>
                <a href="#jawa" className='hover:text-zinc-400 hover:scale-95 duration-300'>Jawa</a>
                <a href="#yezdi" className='hover:text-zinc-400 hover:scale-95 duration-300'>Yezdi</a>
                <a href="#about" className='hover:text-zinc-400 hover:scale-95 duration-300'>About</a>
                <a href="#contact" className='hover:text-zinc-400 hover:scale-95 duration-300'>Contact</a>
            </div>

            {/* MOBILE MENU PANEL (Slides down when isOpen is true) */}
            <div className={`absolute top-full left-0 w-full bg-gray-900 flex flex-col items-center gap-6 py-8 text-xl transition-all duration-300 md:hidden ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <a href="#home" onClick={toggleMenu} className='hover:text-red-500'>Home</a>
                <a href="#jawa" onClick={toggleMenu} className='hover:text-red-500'>Jawa</a>
                <a href="#yezdi" onClick={toggleMenu} className='hover:text-red-500'>Yezdi</a>
                <a href="#services" onClick={toggleMenu} className='hover:text-red-500'>Services</a>
                <a href="#about" onClick={toggleMenu} className='hover:text-red-500'>About</a>
                <a href="#contact" onClick={toggleMenu} className='hover:text-red-500'>Contact</a>
            </div>

            {/* ICONS AREA */}
            <div className='flex items-center gap-3'>
                <User size={24} strokeWidth={2} className='hover:text-zinc-400 cursor-pointer' />
                
                {/* TOGGLE BUTTON */}
                <div onClick={toggleMenu} className="md:hidden cursor-pointer">
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </div>
            </div>
        </nav>
    )
}