export default function ArchivesPage() {
  return (  
  <section className="py-24 px-6 md:px-12 max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
    {/* Sidebar Filters */}
    <div className="lg:col-span-3 space-y-12">
      <div className="space-y-6 sticky top-32">
        <div>
          <h4 className="text-[10px] font-black uppercase tracking-[0.3em] mb-4 text-blue-600">Filter By Era</h4>
          <ul className="space-y-2 text-xs font-bold uppercase tracking-widest text-gray-400">
            {['1980s', '1990s', '2000s Archive', 'Modern Re-sale'].map(era => (
              <li key={era} className="hover:text-black cursor-pointer transition-colors flex items-center gap-2">
                <div className="w-1 h-1 bg-transparent border border-black group-hover:bg-black" /> {era}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-[10px] font-black uppercase tracking-[0.3em] mb-4 text-blue-600">Category Index</h4>
          <ul className="space-y-2 text-xs font-bold uppercase tracking-widest text-gray-400">
            {['Heavy Outerwear', 'Archival Denim', 'Utility Objects'].map(cat => (
              <li key={cat} className="hover:text-black cursor-pointer transition-colors">{cat}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>

    {/* Main Archive Results */}
    <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-12">
      {/* Map through products here as we did in previous grids */}
    </div>
  </section>
)}