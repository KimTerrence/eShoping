import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const LoadingScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 100));
    }, 15);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        y: "-100%", 
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
      }}
      className="fixed inset-0 z-[100] bg-[#0c0c0c] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      <div className="relative z-10 flex flex-col items-center">
        {/* Animated Title */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="text-white text-5xl md:text-8xl font-black italic tracking-tighter uppercase"
          >
            E — UKAY
          </motion.h1>
        </div>

        {/* Progress Info */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex items-center gap-6 mt-8"
        >
          <span className="text-blue-500 font-mono text-[10px] tracking-[0.4em] uppercase">
            Scanning Archives
          </span>
          <div className="h-[1px] w-12 bg-white/20 relative overflow-hidden">
             <motion.div 
               className="absolute inset-0 bg-blue-600 origin-left"
               style={{ scaleX: progress / 100 }}
             />
          </div>
          <span className="text-white font-mono text-xs tabular-nums">
            {progress.toString().padStart(3, '0')}
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;