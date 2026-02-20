import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Code, Smartphone, Cloud, ShieldCheck, ArrowUpRight, ArrowRight } from 'lucide-react';

interface BentoItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  delay?: number;
  highlight?: boolean;
}

const BentoItem: React.FC<BentoItemProps> = ({ title, description, icon, className, delay = 0, highlight = false }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -8, scale: 1.02 }}
    className={`p-7 rounded-[2.5rem] relative overflow-hidden group border transition-all duration-500 cursor-default ${
        highlight 
        ? 'bg-nexus-500 border-nexus-400 shadow-[0_20px_40px_rgba(208,0,0,0.25)]' 
        : 'bg-nexus-900/40 border-white/5 hover:border-nexus-600/50 hover:bg-nexus-800/30 backdrop-blur-xl'
    } ${className}`}
  >
    {/* Refined Hover Glow */}
    {!highlight && (
        <div className="absolute inset-0 bg-gradient-to-br from-nexus-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
    )}

    {/* Content */}
    <div className="relative z-10 flex flex-col h-full">
      <div className="flex justify-between items-start mb-6">
        <motion.div 
            whileHover={{ rotate: 12, scale: 1.1 }}
            className={`w-14 h-14 rounded-[1.25rem] flex items-center justify-center transition-all duration-300 ${
                highlight ? 'bg-black/20 text-white' : 'bg-nexus-800/80 text-nexus-200 border border-white/5'
            }`}
        >
            {icon}
        </motion.div>
        {!highlight && (
          <div className="p-2 rounded-full border border-white/5 text-nexus-700 group-hover:text-nexus-400 group-hover:bg-nexus-500/10 transition-all duration-500">
            <ArrowUpRight size={18} />
          </div>
        )}
      </div>
      
      <h3 className={`text-2xl font-bold mb-3 tracking-tight ${highlight ? 'text-white' : 'text-gray-100 group-hover:text-nexus-50 transition-colors'}`}>
        {title}
      </h3>
      <p className={`text-base leading-relaxed ${highlight ? 'text-white/80' : 'text-gray-500 group-hover:text-gray-400 transition-colors'}`}>
        {description}
      </p>
    </div>

    {/* Enhanced Decorative Elements */}
    <div className={`absolute -bottom-8 -right-8 w-32 h-32 rounded-full blur-[60px] transition-all duration-1000 ${
      highlight ? 'bg-white/10' : 'bg-nexus-600/5 group-hover:bg-nexus-500/20'
    }`}></div>
  </motion.div>
);

interface BentoGridProps {
  onOpenWaitlist: () => void;
}

const BentoGrid: React.FC<BentoGridProps> = ({ onOpenWaitlist }) => {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto relative" id="features">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-nexus-800/10 rounded-full blur-[160px] pointer-events-none -z-10"></div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8"
      >
        <div className="max-w-2xl">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-[1.1] tracking-tight text-white">
                Everything you need <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-nexus-200 via-nexus-100 to-white">to ship instantly</span>
            </h2>
            <p className="text-gray-400 text-xl leading-relaxed">Nexus replaces your entire dev team with a super-intelligent AI that understands context, design systems, and deployment pipelines.</p>
        </div>
        <div className="hidden md:block pb-2">
            <div className="flex -space-x-3 mb-3">
                {[1,2,3].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-nexus-900 bg-gray-800 flex items-center justify-center text-xs font-bold text-gray-400">
                        {String.fromCharCode(64 + i)}
                    </div>
                ))}
                <div className="w-12 h-12 rounded-full border-4 border-nexus-900 bg-nexus-600 flex items-center justify-center text-xs font-bold text-white shadow-lg">
                    50+
                </div>
            </div>
            <p className="text-sm font-medium text-gray-500 text-right uppercase tracking-widest">Devs joined waitlist</p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-6 h-auto md:h-[900px]">
        
        <BentoItem
          title="Natural Language Engine"
          description="Describe complex logic in plain English. Nexus translates 'Create a user feed with infinite scroll' into efficient, paginated hooks."
          icon={<Bot size={30} />}
          className="md:col-span-2 md:row-span-2 bg-gradient-to-b from-nexus-900 to-black/80 border-white/5 shadow-2xl"
          delay={0.1}
        />

        <div className="md:col-span-1 md:row-span-2 rounded-[2.5rem] bg-nexus-900/40 border border-white/5 relative overflow-hidden group hover:border-nexus-600/50 transition-all duration-500 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-nexus-900/90 z-10"></div>
            <div className="p-8 relative z-20 h-full flex flex-col">
                <div className="w-14 h-14 rounded-[1.25rem] bg-nexus-800 text-nexus-200 flex items-center justify-center mb-6 border border-white/5 shadow-inner">
                    <Smartphone size={26} />
                </div>
                <h3 className="text-2xl font-bold text-gray-100 mb-3 tracking-tight">Real-time Simulator</h3>
                <p className="text-base text-gray-500 leading-relaxed">See changes instantly on simulated devices without waiting for builds.</p>
                
                <div className="mt-auto w-full h-56 bg-black rounded-t-3xl border-t border-x border-white/10 relative overflow-hidden mx-auto translate-y-4 group-hover:translate-y-2 transition-transform duration-700 shadow-2xl">
                     <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-nexus-900 rounded-b-2xl"></div>
                     <div className="p-6 pt-12 space-y-4">
                         <div className="w-3/4 h-3 bg-nexus-800 rounded-full"></div>
                         <div className="w-1/2 h-3 bg-nexus-800 rounded-full"></div>
                         <div className="w-full h-28 bg-white/5 rounded-2xl mt-4 animate-pulse"></div>
                     </div>
                </div>
            </div>
        </div>

        <BentoItem
          title="Full-Stack Code"
          description="Production-ready TS & Node.js code generated instantly."
          icon={<Code size={26} />}
          className="md:col-span-1 md:row-span-1"
          delay={0.2}
        />

         <BentoItem
          title="One-Click Deploy"
          description="Push to App Stores via built-in pipelines."
          icon={<Cloud size={26} />}
          className="md:col-span-1 md:row-span-1"
          delay={0.3}
        />

        <BentoItem
            title="Enterprise Grade Security"
            description="Built-in authentication, RBAC, and encrypted storage by default."
            icon={<ShieldCheck size={26} />}
            className="md:col-span-2 md:row-span-1"
            delay={0.4}
        />

        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.02, y: -4 }}
            onClick={onOpenWaitlist}
            className="md:col-span-2 md:row-span-1 rounded-[2.5rem] bg-gradient-to-r from-nexus-600 to-nexus-400 p-10 flex items-center justify-between relative overflow-hidden cursor-pointer shadow-2xl shadow-nexus-600/20 group transition-all duration-500"
        >
             <div className="absolute -right-10 -bottom-20 w-80 h-80 bg-white/10 rounded-full blur-[80px] group-hover:scale-150 transition-transform duration-1000"></div>
             <div className="relative z-10 pr-4">
                <div className="inline-block px-4 py-1.5 bg-black/20 rounded-full text-xs font-bold text-white mb-4 backdrop-blur-md uppercase tracking-widest">Limited Access</div>
                <h3 className="text-4xl font-black text-white mb-2 tracking-tighter">Start Building Free</h3>
                <p className="text-nexus-100 font-bold text-lg">Join the beta waitlist today.</p>
            </div>
            <div className="w-20 h-20 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-nexus-600 transition-all duration-500 text-white relative z-10 shrink-0 shadow-lg group-hover:rotate-12">
                <ArrowRight size={38} className="group-hover:translate-x-1 transition-transform" />
            </div>
        </motion.div>

      </div>
    </section>
  );
};

export default BentoGrid;