import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import IDEWalkthrough from './components/IDEWalkthrough';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <div className="bg-nexus-900 min-h-screen text-white selection:bg-nexus-300 selection:text-white font-sans">
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
         {/* Ambient Background Glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-nexus-900 rounded-full mix-blend-screen filter blur-[120px] opacity-100"></div>
        <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-nexus-800 rounded-full mix-blend-screen filter blur-[140px] opacity-30 animate-blob"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-nexus-300 rounded-full mix-blend-screen filter blur-[120px] opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute top-[40%] left-[40%] w-[600px] h-[600px] bg-nexus-600 rounded-full mix-blend-screen filter blur-[160px] opacity-10"></div>
      </div>

      <div className="relative z-10 flex flex-col gap-12 overflow-hidden">
        <Navbar 
          isWaitlistOpen={isWaitlistOpen} 
          setIsWaitlistOpen={setIsWaitlistOpen}
          isVideoOpen={isVideoOpen}
          setIsVideoOpen={setIsVideoOpen}
        />
        <Hero onOpenWaitlist={() => setIsWaitlistOpen(true)} />
        <BentoGrid onOpenWaitlist={() => setIsWaitlistOpen(true)} />
        <IDEWalkthrough />
        <Footer />
      </div>
    </div>
  );
};

export default App;