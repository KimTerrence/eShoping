import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  // Track scroll progress for the circular indicator
  const { scrollYProgress } = useScroll();
;

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling 400px
      if (window.pageYOffset > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 z-[60] cursor-pointer group"
        >
          {/* Progress Ring */}
          <svg className="w-14 h-14 -rotate-90">
            <circle
              cx="28"
              cy="28"
              r="24"
              stroke="currentColor"
              strokeWidth="2"
              fill="transparent"
              className="text-gray-200"
            />
            <motion.circle
              cx="28"
              cy="28"
              r="24"
              stroke="currentColor"
              strokeWidth="2"
              fill="transparent"
              className="text-blue-600"
              style={{
                pathLength: scrollYProgress,
              }}
            />
          </svg>

          {/* Icon and Label */}
          <div className="absolute inset-0 flex items-center justify-center">
            <ArrowUp className="w-5 h-5 text-black group-hover:text-blue-600 transition-colors" />
          </div>

          {/* Tooltip on Hover */}
          <motion.span 
            initial={{ opacity: 0, x: 10 }}
            whileHover={{ opacity: 1, x: -60 }}
            className="absolute top-1/2 -translate-y-1/2 right-0 pr-4 text-[9px] font-black uppercase tracking-widest pointer-events-none"
          >
            TOP
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;