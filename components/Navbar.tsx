import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, PlayCircle, Check } from 'lucide-react';

interface NavbarProps {
  isWaitlistOpen: boolean;
  setIsWaitlistOpen: (open: boolean) => void;
  isVideoOpen: boolean;
  setIsVideoOpen: (open: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isWaitlistOpen, setIsWaitlistOpen, isVideoOpen, setIsVideoOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleJoinWaitlist = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
            setEmail('');
            setIsWaitlistOpen(false);
        }, 2000);
    }
  };

  /**
   * IMPORTANT: To avoid "Forbidden" errors with Google Drive:
   * 1. File sharing MUST be "Anyone with the link".
   * 2. The link MUST end in /preview, not /view or /edit.
   */
  const getDriveEmbedUrl = (url: string) => {
    if (url.includes('drive.google.com')) {
      const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
      if (match && match[1]) {
        return `https://drive.google.com/file/d/${match[1]}/preview`;
      }
    }
    return url;
  };

  // Replace this ID with your actual Google Drive video ID
  const videoUrl = getDriveEmbedUrl("https://drive.google.com/file/d/1_T0I-0zB-L0G-K_p-r-r-r-r-r-r-r/view");

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          isScrolled 
            ? 'bg-nexus-900/60 backdrop-blur-xl border-b border-white/5 py-4' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer group">
            <span className="text-2xl font-black tracking-tighter text-white group-hover:text-nexus-200 transition-colors duration-300">
              NEXUS
            </span>
          </div>

          <div>
            <button 
                onClick={() => setIsWaitlistOpen(true)}
                className="px-6 py-2.5 rounded-full bg-nexus-100 text-nexus-900 text-sm font-bold hover:bg-white transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(250,163,7,0.3)] hover:shadow-[0_0_30px_rgba(255,186,8,0.5)]"
            >
              Join the waitlist
            </button>
          </div>
        </div>
      </nav>

      {/* Waitlist Modal */}
      <AnimatePresence>
        {isWaitlistOpen && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsWaitlistOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-md bg-nexus-900 border border-nexus-700/50 rounded-2xl p-8 shadow-2xl overflow-hidden"
            >
               <div className="absolute -top-20 -right-20 w-64 h-64 bg-nexus-500/20 rounded-full blur-3xl pointer-events-none" />
               <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-nexus-300/10 rounded-full blur-3xl pointer-events-none" />

               <button onClick={() => setIsWaitlistOpen(false)} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors">
                 <X size={20} />
               </button>

               <div className="relative z-10 text-center">
                 <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Get Early Access</h2>
                 <p className="text-gray-400 mb-8 text-sm leading-relaxed">
                   Join 10,000+ developers waiting to build with Nexus. We are rolling out access in batches.
                 </p>

                 {isSubmitted ? (
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl flex items-center justify-center gap-2 text-green-400 mb-6"
                    >
                        <Check size={18} />
                        <span className="font-semibold">You're on the list!</span>
                    </motion.div>
                 ) : (
                     <form onSubmit={handleJoinWaitlist} className="space-y-4 mb-8">
                        <div className="relative group">
                            <input 
                                type="email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email address"
                                required
                                className="w-full bg-black/30 border border-nexus-700/50 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-nexus-400 focus:ring-1 focus:ring-nexus-400 transition-all group-hover:border-nexus-600"
                            />
                        </div>
                        <button 
                            type="submit"
                            className="w-full py-3 rounded-xl bg-gradient-to-r from-nexus-600 to-nexus-500 text-white font-bold hover:from-nexus-500 hover:to-nexus-400 transition-all shadow-lg hover:shadow-nexus-500/25 active:scale-[0.98]"
                        >
                            Join Waitlist
                        </button>
                     </form>
                 )}

                 <div className="relative">
                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                        <div className="w-full border-t border-gray-800"></div>
                    </div>
                    <div className="relative flex justify-center">
                        <span className="px-2 bg-nexus-900 text-xs text-gray-500 uppercase tracking-wider">or</span>
                    </div>
                 </div>

                 <button 
                    onClick={() => {
                        setIsWaitlistOpen(false);
                        setIsVideoOpen(true);
                    }}
                    className="mt-6 w-full group py-3 px-4 rounded-xl border border-nexus-700/50 hover:border-nexus-500/50 bg-nexus-800/20 hover:bg-nexus-800/40 transition-all flex items-center justify-center gap-3"
                 >
                    <div className="w-8 h-8 rounded-full bg-nexus-500/20 flex items-center justify-center group-hover:bg-nexus-500/40 transition-colors">
                        <PlayCircle size={16} className="text-nexus-200" />
                    </div>
                    <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                        Wanna see how Nexus magic happens?
                    </span>
                 </button>
               </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <div className="fixed inset-0 z-[70] flex items-center justify-center px-4">
             <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsVideoOpen(false)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />
            
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative w-full max-w-5xl aspect-video bg-black rounded-xl overflow-hidden border border-nexus-800 shadow-2xl"
            >
                <button onClick={() => setIsVideoOpen(false)} className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-nexus-600 transition-colors">
                 <X size={24} />
               </button>
                <iframe 
                    src={videoUrl} 
                    title="Nexus Demo" 
                    className="w-full h-full border-none"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                ></iframe>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;