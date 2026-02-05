import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Github } from 'lucide-react';

interface AuthProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthOverlay: React.FC<AuthProps> = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0c0c0c]/60 backdrop-blur-xl z-[70]"
          />

          {/* Side Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full md:w-[450px] bg-white z-[80] shadow-2xl p-8 md:p-12 flex flex-col"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-16">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600">
                {isLogin ? 'Access Archive' : 'Create Identity'}
              </span>
              <button onClick={onClose} className="p-2 hover:rotate-90 transition-transform duration-300">
                <X size={20} />
              </button>
            </div>

            {/* Form Content */}
            <div className="flex-1 space-y-8">
              <div className="space-y-2">
                <h2 className="text-4xl font-black tracking-tighter uppercase italic italic">
                  {isLogin ? 'Welcome \nBack.' : 'Join the \nArchive.'}
                </h2>
                <p className="text-xs text-gray-400 font-medium uppercase tracking-widest leading-loose">
                  {isLogin ? 'Secure access to your curated rack.' : 'Start your circular fashion journey.'}
                </p>
              </div>

              <div className="space-y-4">
                <div className="space-y-1 border-b border-black/10 pb-2 focus-within:border-black transition-colors">
                  <label className="text-[9px] font-black uppercase tracking-widest text-gray-400">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="NAME@VAULT.COM" 
                    className="w-full bg-transparent outline-none text-xs font-bold uppercase tracking-widest placeholder:text-gray-200"
                  />
                </div>

                <div className="space-y-1 border-b border-black/10 pb-2 focus-within:border-black transition-colors">
                  <label className="text-[9px] font-black uppercase tracking-widest text-gray-400">Password</label>
                  <input 
                    type="password" 
                    placeholder="••••••••" 
                    className="w-full bg-transparent outline-none text-xs font-bold uppercase tracking-widest placeholder:text-gray-200"
                  />
                </div>
              </div>

              <button className="w-full bg-black text-white py-5 text-[10px] font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 group hover:bg-blue-600 transition-colors">
                {isLogin ? 'Unlock Account' : 'Initialize Profile'} 
                <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
              </button>

              <div className="relative py-4">
                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-black/5" /></div>
                <div className="relative flex justify-center text-[8px] font-bold uppercase tracking-[0.3em]"><span className="bg-white px-4 text-gray-300">OR</span></div>
              </div>

              <button className="w-full border border-black/10 py-4 text-[10px] font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-gray-50 transition-all">
                <Github size={16} /> Continue with Github
              </button>
            </div>

            {/* Footer Toggle */}
            <div className="pt-12 text-center border-t border-black/5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4">
                {isLogin ? "No identity yet?" : "Already a member?"}
              </p>
              <button 
                onClick={() => setIsLogin(!isLogin)}
                className="text-[10px] font-black uppercase tracking-widest border-b-2 border-black pb-1 hover:text-blue-600 hover:border-blue-600 transition-all"
              >
                {isLogin ? 'Request Membership' : 'Authorized Access'}
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default AuthOverlay;