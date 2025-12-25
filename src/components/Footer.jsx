import { Instagram, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-900 py-12 px-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-red-600 font-bold uppercase cursor-default">Jawa Yezdi</div>
        <div className="flex gap-6 text-gray-500 text-sm uppercase">
          <a href="#">Privacy</a><a href="#">Terms</a><a href="#">Sitemap</a>
        </div>
        <div className="flex gap-4 text-white">
          <a href='https://www.instagram.com/jawamotorcycles/?hl=en'><Instagram size={20} /></a>
          <a href='https://x.com/jawamotorcycles?lang=en'><Twitter size={20} /></a>
          <a href='https://www.facebook.com/jawamotorcycles/'><Facebook size={20} /></a>
        </div>
      </div>
      <p className="text-center text-gray-600 text-[10px] mt-10 uppercase tracking-widest">
        © 2025 Jawa Yezdi Motorcycles. All Rights Reserved.
      </p>
    </footer>
  );
}