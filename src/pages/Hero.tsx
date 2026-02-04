import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, ChevronRight, ArrowRight, Star, Heart } from 'lucide-react';

const PremiumShop: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-[#1A1A1A] selection:bg-blue-100">
      {/* Dynamic Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? 'py-4 bg-white/90 backdrop-blur-md shadow-sm' : 'py-8 bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
          <div className="flex items-center space-x-12">
            <h1 className="text-2xl font-black tracking-[0.2em] uppercase">eShoping</h1>
            <div className="hidden lg:flex space-x-8 text-[11px] font-bold uppercase tracking-[0.15em] text-gray-500">
              <a href="#" className="hover:text-black transition-colors">New Arrivals</a>
              <a href="#" className="hover:text-black transition-colors">Collections</a>
              <a href="#" className="hover:text-black transition-colors">Journal</a>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <Search className="w-5 h-5 cursor-pointer hover:scale-110 transition-transform" />
            <div className="relative cursor-pointer group">
              <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">0</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Parallax Vibe */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=2070" 
            className="w-full h-full object-cover scale-105 animate-slow-zoom"
            alt="Hero"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-8 w-full">
          <div className="max-w-2xl space-y-8">
            <div className="overflow-hidden">
              <span className="block text-sm font-bold tracking-[0.3em] uppercase text-blue-600 animate-slide-up">
                Spring / Summer 2026
              </span>
            </div>
            <h2 className="text-7xl md:text-8xl font-light leading-[0.9] tracking-tighter">
              Refined <br />
              <span className="font-serif italic font-normal">Simplicity.</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-md leading-relaxed">
              Experience the intersection of architectural tailoring and sustainable luxury textiles.
            </p>
            <div className="flex items-center space-x-8 pt-4">
              <button className="group flex items-center space-x-4 bg-black text-white px-8 py-5 rounded-full hover:bg-blue-600 transition-all duration-300">
                <span className="font-bold uppercase tracking-widest text-xs">Explore Shop</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Card Showcase */}
      <section className="py-32 px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <h3 className="text-4xl font-light tracking-tight">The Curated Edit</h3>
          <p className="text-gray-400 font-medium border-b-2 border-gray-100 pb-1 cursor-pointer hover:border-black transition-all">View All Pieces</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {[
            { name: "Silk Trench Coat", price: "$890", img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=1000" },
            { name: "Minimalist Totebag", price: "$420", img: "https://images.unsplash.com/photo-1584917033904-4912063c6751?auto=format&fit=crop&q=80&w=1000" },
            { name: "Cashmere Knit", price: "$310", img: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80&w=1000" }
          ].map((product, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 rounded-sm mb-6">
                <img 
                  src={product.img} 
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
                  alt={product.name}
                />
                <button className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur py-4 text-[10px] font-bold uppercase tracking-widest translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  Quick Add — {product.price}
                </button>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Heart className="w-5 h-5 text-white drop-shadow-md hover:fill-white" />
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-sm tracking-wide uppercase">{product.name}</h4>
                  <p className="text-gray-400 text-xs mt-1 uppercase tracking-tighter">Available in 4 colors</p>
                </div>
                <span className="text-sm font-serif italic">{product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PremiumShop;