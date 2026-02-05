export default function JournalPage() {
  return (
  <section className="py-24 px-6 md:px-12 bg-white border-t border-black/5">
    <div className="max-w-4xl mx-auto text-center mb-20 space-y-4">
      <span className="text-blue-600 font-mono text-[10px] tracking-[0.4em] uppercase">E-UKAY Journal</span>
      <h3 className="text-5xl font-black tracking-tighter uppercase leading-none">The Culture <br/> <span className="italic font-serif font-light lowercase">of second life.</span></h3>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-[1200px] mx-auto">
      <article className="group cursor-pointer">
        <div className="aspect-video overflow-hidden rounded-xl mb-6">
          <img src="https://images.unsplash.com/photo-1516762689617-e1cffcef479d" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        </div>
        <span className="text-[9px] font-black uppercase tracking-widest text-gray-400">February 05, 2026</span>
        <h4 className="text-2xl font-black tracking-tighter uppercase mt-2 group-hover:text-blue-600 transition-colors">Why 90s Leather is the ultimate investment.</h4>
        <p className="text-sm text-gray-500 mt-4 leading-relaxed line-clamp-2 italic">A deep dive into the tanning processes of the late 90s and why these pieces outlast modern luxury...</p>
      </article>

      <article className="group cursor-pointer">
        <div className="aspect-video overflow-hidden rounded-xl mb-6">
          <img src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        </div>
        <span className="text-[9px] font-black uppercase tracking-widest text-gray-400">January 28, 2026</span>
        <h4 className="text-2xl font-black tracking-tighter uppercase mt-2 group-hover:text-blue-600 transition-colors">The Ozone Process: How we clean history.</h4>
        <p className="text-sm text-gray-500 mt-4 leading-relaxed line-clamp-2 italic">Understanding the eco-friendly technology that sanitizes vintage fibers without damaging the soul of the garment...</p>
      </article>
    </div>
  </section>
)};