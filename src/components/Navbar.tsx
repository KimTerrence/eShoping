import { Link } from 'react-router-dom';
import { Search, ShoppingBag } from 'lucide-react';

interface NavbarProps {
  onAccountClick: () => void;
}


const Navbar: React.FC<NavbarProps> = ({ onAccountClick }) => {
  return (
    <nav className="border-b border-black/5 py-6 px-6 md:px-12 flex justify-between items-center sticky top-0 bg-[#FDFCF9]/80 backdrop-blur-md z-40">
      {/* Brand Logo */}
      <Link to="/">
        <h1 className="text-2xl font-black tracking-tighter uppercase italic">E - UKAY</h1>
      </Link>

      {/* Center Links */}
      <div className="hidden md:flex gap-10 text-[11px] font-bold uppercase tracking-widest">
        <Link to="/archives" className="hover:line-through transition-all">Archives</Link>
        <Link to="/collections" className="hover:line-through transition-all">Collections</Link>
        <Link to="/journal" className="hover:line-through transition-all">Journal</Link>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-6">
        <Search size={20} className="cursor-pointer" />
        
        <button 
          onClick={onAccountClick} 
          className="text-[10px] font-black uppercase tracking-widest hover:text-blue-600 transition-colors"
        >
          Account
        </button>

        <div className="relative cursor-pointer group">
          <ShoppingBag size={20} className="group-hover:rotate-12 transition-transform" />
          <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
            3
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;