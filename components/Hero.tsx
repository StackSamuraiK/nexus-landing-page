import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import BrowserWindow from './BrowserWindow';

interface HeroProps {
  onOpenWaitlist: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenWaitlist }) => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 lg:pt-0 overflow-hidden bg-nexus-900">
      {/* Background Decorative Blob for Hero */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-nexus-600/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content - Securely separated from the browser */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center lg:col-span-5 xl:col-span-5"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-nexus-900/50 border border-nexus-700/50 w-fit mb-8 backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-nexus-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-nexus-500"></span>
              </span>
              <span className="text-xs font-mono font-medium tracking-wide text-nexus-100 uppercase">Beta Access Live</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6 text-white tracking-tight">
              Turn <span className="text-transparent bg-clip-text bg-gradient-to-r from-nexus-300 via-nexus-100 to-nexus-50">Words</span> <br />
              Into <span className="text-white relative inline-block">
                  Software
                  <span className="absolute -bottom-2 left-0 w-full h-2 bg-nexus-600/50 -skew-x-12 blur-sm"></span>
              </span>.
            </h1>
            
            <p className="text-lg text-gray-400 mb-8 max-w-lg leading-relaxed">
              Nexus transforms your natural language descriptions into fully functional mobile apps. 
              The first AI-native IDE that builds, tests, and deploys.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <div className="relative group w-full sm:w-[440px]">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-nexus-500 to-nexus-300 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                  <div className="relative flex items-center bg-black/80 rounded-2xl overflow-hidden border border-white/10 h-16 backdrop-blur-xl">
                      <input 
                          type="text" 
                          placeholder="Describe your dream app..." 
                          className="flex-1 bg-transparent h-full pl-6 pr-4 text-gray-200 focus:outline-none placeholder:text-gray-600 text-sm md:text-base border-none"
                      />
                      <button 
                          onClick={onOpenWaitlist}
                          className="h-12 w-12 mr-2 rounded-xl bg-nexus-600 hover:bg-nexus-500 text-white transition-all flex items-center justify-center shrink-0 shadow-lg shadow-nexus-600/20 active:scale-95"
                      >
                          <ArrowRight size={20} className="group-hover:translate-x-0.5 transition-transform" />
                      </button>
                  </div>
              </div>
            </div>

            <div className="flex items-center gap-8 border-t border-white/5 pt-8">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white tracking-tight">10k+</span>
                <span className="text-[10px] font-bold text-nexus-200 uppercase tracking-[0.2em] mt-1">Devs on Waitlist</span>
              </div>
              <div className="w-px h-10 bg-white/10"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white tracking-tight">AI</span>
                <span className="text-[10px] font-bold text-nexus-200 uppercase tracking-[0.2em] mt-1">Native Engine</span>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Browser Window utilizing 70% of visible screen */}
          <div className="hidden lg:block lg:col-span-7 relative">
            <div 
              className="relative w-[70vw] h-[80vh] left-0 pointer-events-none"
              style={{
                maskImage: 'linear-gradient(to right, black 65%, transparent 95%)',
                WebkitMaskImage: 'linear-gradient(to right, black 65%, transparent 95%)'
              }}
            >
              <motion.div
                initial={{ opacity: 0, rotateY: 20, x: 100 }}
                animate={{ opacity: 1, rotateY: -15, x: 0 }}
                transition={{ duration: 1.8, delay: 0.3, type: "spring", bounce: 0.1 }}
                style={{ perspective: "3000px", transformStyle: "preserve-3d" }}
                className="w-full h-full pointer-events-auto"
              >
                <div className="w-full h-full relative group">
                  {/* Subtle edge blur overlay for the very end of the laptop screen */}
                  <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-r from-transparent to-nexus-900/80 backdrop-blur-md z-40 rounded-r-3xl"></div>
                  <BrowserWindow />
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Mobile-only browser preview (Simplified) */}
        <div className="lg:hidden mt-12 w-full h-[450px]">
           <BrowserWindow />
        </div>
      </div>
    </section>
  );
};

export default Hero;