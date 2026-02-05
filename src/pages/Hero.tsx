import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingBag, Search, Recycle, History, Sparkles, Timer, 
  ArrowRight, ShieldCheck, Truck, RotateCcw, Camera 
} from 'lucide-react';
import LoadingScreen from '../components/LoadingScreen';
import BackToTop from '../components/BackToTop';
import AuthOverlay from '../components/AuthOverlay';
import { Link } from 'react-router-dom';

const CuratedThrift: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [timer] = useState("12:45:02");
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  useEffect(() => {
    const loadTime = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(loadTime);
  }, []);

  return (
    <div className="min-h-screen bg-[#FDFCF9] text-[#1C1C1C] selection:bg-black selection:text-white overflow-x-hidden">
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loader-component" />
        ) : (
          <motion.div
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {/* 1. URGENCY BANNER */}
            <div className="bg-black text-white py-2 px-6 flex justify-between items-center text-[10px] font-bold uppercase tracking-[0.2em]">
              <div className="flex items-center gap-2"><Timer size={12} className="text-blue-500"/> Next Drop in {timer}</div>
              <div className="hidden md:block">Sustainable • Circular • Authentic</div>
              <a href="#" className="underline hover:text-blue-400 transition-colors">Sell your pieces</a>
            </div>

            {/* 2. NAVIGATION */}
            <nav className="border-b border-black/5 py-6 px-6 md:px-12 flex justify-between items-center sticky top-0 bg-[#FDFCF9]/80 backdrop-blur-md z-40">
              <h1 className="text-2xl font-black tracking-tighter uppercase italic">E - UKAY</h1>
              <div className="hidden md:flex gap-10 text-[11px] font-bold uppercase tracking-widest">
                <Link to="/archives" className="hover:line-through transition-all">Archives</Link>
                <Link to="/collections" className="hover:line-through transition-all">Collections</Link>
                <Link to="/journal" className="hover:line-through transition-all">Journal</Link>
              </div>
              <div className="flex items-center gap-6">
                <Search size={20} className="cursor-pointer" />
  {/* New Account Trigger */}
  <button 
    onClick={() => setIsAuthOpen(true)} 
    className="text-[10px] font-black uppercase tracking-widest hover:text-blue-600 transition-colors"
  >
    Account
  </button>
                <div className="relative cursor-pointer group">
                  <ShoppingBag size={20} className="group-hover:rotate-12 transition-transform" />
                  <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">3</span>
                </div>
              </div>
            </nav>

            {/* 3. HERO SECTION */}
            <header className="px-6 md:px-12 py-12 grid md:grid-cols-2 gap-8 items-center border-b border-black/5">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-8"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 text-green-700 rounded-full text-[10px] font-bold uppercase tracking-widest border border-green-100">
                  <Recycle size={12} /> Carbon Neutral Delivery
                </div>
                <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85]">
                  PRE-LOVED, <br />
                  <span className="text-transparent border-t-black border-l-black" style={{ WebkitTextStroke: '1px #1C1C1C' }}>RE-DISCOVERED.</span>
                </h2>
                <p className="max-w-sm text-gray-400 font-medium leading-relaxed">
                  Curating archival pieces from the world's most iconic wardrobes. Authenticated by hand. Worn with history.
                </p>
                <div className="flex gap-4">
                  <button className="bg-black text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-blue-600 transition-all shadow-xl">Shop Archives</button>
                  <button className="border border-black px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all">Learn Process</button>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="relative group overflow-hidden bg-gray-100 rounded-2xl"
              >
                <img 
                  src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=2000" 
                  className="w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-1000 grayscale-[30%] hover:grayscale-0"
                  alt="Thrift Finds"
                />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur p-4 rounded-lg shadow-sm border border-black/5">
                   <span className="block text-[10px] font-bold text-gray-400 font-mono italic">REF: 2026_JKT_01</span>
                   <span className="block font-black tracking-tight uppercase">Archive Leather Blazer</span>
                </div>
              </motion.div>
            </header>

            {/* 4. TRUST STRIP */}
            <section className="border-b border-black/5 py-12 px-6">
              <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { icon: <ShieldCheck size={20}/>, title: "Authenticated", desc: "12-point inspection" },
                  { icon: <History size={20}/>, title: "Archival", desc: "Decade-verified" },
                  { icon: <Truck size={20}/>, title: "Global Shipping", desc: "Fully carbon offset" },
                  { icon: <RotateCcw size={20}/>, title: "Circular", desc: "Life-cycle guarantee" }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center text-center space-y-2">
                    <div className="p-3 bg-gray-50 rounded-full">{item.icon}</div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest">{item.title}</h4>
                    <p className="text-[10px] text-gray-400 font-medium">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 5. CATEGORY BENTO GRID */}
            <section className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-[600px]">
                <div className="md:col-span-8 relative group overflow-hidden rounded-2xl bg-gray-200">
                  <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070" className="w-full h-full object-cover grayscale-[20%] group-hover:scale-105 transition-transform duration-700" alt="Outerwear" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                  <div className="absolute bottom-8 left-8 text-white">
                    <h3 className="text-4xl font-black tracking-tighter uppercase italic">Outerwear Archives</h3>
                    <p className="text-xs font-bold uppercase tracking-widest mt-2 flex items-center gap-2">Explore Collection <ArrowRight size={14}/></p>
                  </div>
                </div>
                <div className="md:col-span-4 relative group overflow-hidden rounded-2xl bg-gray-200">
                  <img src="https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1000" className="w-full h-full object-cover grayscale-[20%] group-hover:scale-105 transition-transform duration-700" alt="Accessories" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                  <div className="absolute bottom-8 left-8 text-white">
                    <h3 className="text-3xl font-black tracking-tighter uppercase italic">Objects</h3>
                    <p className="text-xs font-bold uppercase tracking-widest mt-2 flex items-center gap-2">View Rare <ArrowRight size={14}/></p>
                  </div>
                </div>
              </div>
            </section>

            {/* 6. PRODUCT GRID */}
            <section className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto border-t border-black/5">
              <div className="flex justify-between items-baseline mb-16">
                <h3 className="text-3xl font-black tracking-tighter uppercase italic flex items-center gap-4">
                  <Sparkles className="text-blue-600" /> Recently Found
                </h3>
                <span className="text-xs font-bold uppercase border-b border-black pb-1 cursor-pointer hover:opacity-50 transition-opacity">Full Archive Index</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { name: "Leather Aviator", price: "$145", cond: "Mint", img: "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504" },
                  { name: "Raw Denim Selvedge", price: "$95", cond: "Distressed", img: "https://images.unsplash.com/photo-1542272604-787c3835535d" },
                  { name: "Heavyweight Knit", price: "$68", cond: "Excellent", img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633" },
                  { name: "Archival Tote", price: "$210", cond: "Rare", img: "https://images.unsplash.com/photo-1544816155-12df9643f363" }
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group relative cursor-pointer"
                  >
                    <div className="aspect-[4/5] bg-gray-100 overflow-hidden rounded-xl mb-4 relative shadow-sm">
                      <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale-[20%] group-hover:grayscale-0" alt={item.name} />
                      <div className="absolute top-3 left-3">
                         <span className="bg-black text-white text-[9px] font-bold px-2 py-1 uppercase tracking-widest rounded-sm">{item.cond}</span>
                      </div>
                      <button className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur py-3 text-[10px] font-black uppercase tracking-widest translate-y-12 group-hover:translate-y-0 transition-transform shadow-lg hover:bg-black hover:text-white">
                         Add to Rack — {item.price}
                      </button>
                    </div>
                    <div className="flex justify-between items-center">
                      <h4 className="text-xs font-black uppercase tracking-tight">{item.name}</h4>
                      <div className="flex items-center gap-1 text-[10px] font-bold text-gray-400">
                         {item.price}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* 7. THE PROCESS (EDITORIAL CONTENT) */}
            <section className="bg-black text-white py-24 px-6 md:px-12">
              <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-20 items-center">
                <div className="relative aspect-square">
                   <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070" className="w-full h-full object-cover rounded-2xl opacity-80" alt="Process" />
                   <div className="absolute -bottom-10 -right-10 bg-blue-600 p-8 rounded-2xl hidden lg:block">
                      <Camera className="text-white w-12 h-12 mb-4" />
                      <p className="text-xs font-black uppercase tracking-[0.2em]">Archival <br/> Verification</p>
                   </div>
                </div>
                <div className="space-y-8">
                  <span className="text-blue-500 font-mono text-[10px] tracking-[0.4em] uppercase">Meticulous Curation</span>
                  <h3 className="text-5xl md:text-6xl font-black tracking-tighter uppercase leading-[0.9]">The Life-Cycle <br/> <span className="italic font-serif font-light lowercase">of a garment.</span></h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    We believe your wardrobe should be an archive, not a landfill. Every piece listed on E-UKAY undergoes a rigorous 12-point authentication, ozone cleaning, and historical verification process.
                  </p>
                  <ul className="space-y-4 text-[10px] font-black uppercase tracking-widest text-gray-300">
                    <li className="flex items-center gap-4"><div className="w-2 h-2 bg-blue-600 rounded-full"/> Source: Ethical Archives Only</li>
                    <li className="flex items-center gap-4"><div className="w-2 h-2 bg-blue-600 rounded-full"/> Verify: Hardware & Serial Match</li>
                    <li className="flex items-center gap-4"><div className="w-2 h-2 bg-blue-600 rounded-full"/> Clean: Eco-Friendly Ozone Treatment</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 8. SUSTAINABLE STATS */}
            <section className="bg-blue-600 text-white py-32 px-6 text-center overflow-hidden relative">
               <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="relative z-10"
               >
                 <h4 className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic mb-12 leading-none">Circular Fashion <br/> Matters.</h4>
                 <div className="flex flex-col md:flex-row justify-center gap-16 md:gap-24">
                    <div className="space-y-4">
                       <p className="text-6xl md:text-7xl font-mono">1.2k</p>
                       <p className="text-[11px] uppercase font-bold tracking-[0.3em] opacity-80">Gallons of water saved this month</p>
                    </div>
                    <div className="hidden md:block w-px h-24 bg-white/20"></div>
                    <div className="space-y-4">
                       <p className="text-6xl md:text-7xl font-mono">85%</p>
                       <p className="text-[11px] uppercase font-bold tracking-[0.3em] opacity-80">Less CO2 than retail shopping</p>
                    </div>
                 </div>
               </motion.div>
               {/* Decorative background text */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-black opacity-[0.05] pointer-events-none uppercase">REUSE</div>
            </section>

            {/* 9. FOOTER */}
            <footer className="bg-[#FDFCF9] py-24 px-6 md:px-12 border-t border-black/5">
              <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="space-y-6">
                  <h1 className="text-2xl font-black italic tracking-tighter">E - UKAY</h1>
                  <p className="text-xs text-gray-400 font-medium leading-relaxed">Archiving the future through the past. A circular platform for iconic pre-loved fashion.</p>
                </div>
                <div>
                  <h5 className="text-[10px] font-black uppercase tracking-widest mb-6">Archive Index</h5>
                  <ul className="space-y-3 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                    <li className="hover:text-black cursor-pointer">Outerwear</li>
                    <li className="hover:text-black cursor-pointer">Denim</li>
                    <li className="hover:text-black cursor-pointer">Objects</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-[10px] font-black uppercase tracking-widest mb-6">Support</h5>
                  <ul className="space-y-3 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                    <li className="hover:text-black cursor-pointer">Authentication</li>
                    <li className="hover:text-black cursor-pointer">Shipping</li>
                    <li className="hover:text-black cursor-pointer">Contact</li>
                  </ul>
                </div>
                <div className="space-y-6">
                  <h5 className="text-[10px] font-black uppercase tracking-widest mb-4 text-blue-600">Join the Drop List</h5>
                  <div className="flex border-b border-black pb-2 group">
                    <input type="email" placeholder="Email Address" className="bg-transparent text-xs w-full outline-none placeholder:text-gray-300" />
                    <button className="text-[10px] font-black uppercase tracking-widest group-hover:text-blue-600">Join</button>
                  </div>
                </div>
              </div>
            </footer>
            <AuthOverlay isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
            <BackToTop  />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CuratedThrift;