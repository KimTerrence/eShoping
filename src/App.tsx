import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthOverlay from './components/AuthOverlay';
import BackToTop from './components/BackToTop';

// Page Imports
import Home from './pages/Hero';
import Archives from './pages/Archieves';
import Collections from './pages/Collection';
import Journal from './pages/Journal';
import { useState } from 'react';

function App() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-[#FDFCF9]">
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/archives" element={<Archives />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/journal" element={<Journal />} />
        </Routes>

        <AuthOverlay isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
        <BackToTop />
      </div>
    </Router>
  );
};

export default App;