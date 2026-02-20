import React from 'react';
import { motion } from 'framer-motion';
import { LayoutGrid, Code2, Play, Search, Bell, Settings, Wifi } from 'lucide-react';

const BrowserWindow: React.FC = () => {
  return (
    <div className="relative w-full h-full group perspective-1000">
      {/* Glow Effect behind the window */}
      <div className="absolute -inset-1 bg-gradient-to-r from-nexus-500 to-nexus-200 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
      
      {/* Main Container */}
      <div className="relative w-full h-full bg-[#0a0a0a] rounded-xl ring-1 ring-white/10 shadow-2xl flex flex-col overflow-hidden backdrop-blur-md">
        
        {/* Browser Top Bar */}
        <div className="h-10 bg-nexus-900/50 border-b border-white/5 flex items-center px-4 justify-between select-none">
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-[#ff5f56] rounded-full hover:brightness-110 transition-all cursor-pointer shadow-inner"></div>
            <div className="w-3 h-3 bg-[#ffbd2e] rounded-full hover:brightness-110 transition-all cursor-pointer shadow-inner"></div>
            <div className="w-3 h-3 bg-[#27c93f] rounded-full hover:brightness-110 transition-all cursor-pointer shadow-inner"></div>
          </div>
          
          <div className="flex items-center gap-2 px-4 py-1 bg-black/20 rounded-md border border-white/5 w-96 max-w-full">
            <div className="w-3 h-3 text-gray-500">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </div>
            <span className="text-xs text-gray-500 font-mono">nexus.dev/builder/project-alpha</span>
          </div>

          <div className="flex gap-3">
             <div className="w-2 h-2 rounded-full bg-gray-600"></div>
             <div className="w-2 h-2 rounded-full bg-gray-600"></div>
          </div>
        </div>

        {/* Content - Split View (Editor | Preview) */}
        <div className="flex-1 flex overflow-hidden">
            {/* Sidebar */}
            <div className="w-14 bg-nexus-900/30 border-r border-white/5 flex flex-col items-center py-4 gap-6 text-gray-400">
                <div className="p-2 bg-nexus-700/20 text-nexus-300 rounded-lg"><Code2 size={20} /></div>
                <div className="hover:text-white transition-colors cursor-pointer"><Search size={20} /></div>
                <div className="hover:text-white transition-colors cursor-pointer"><LayoutGrid size={20} /></div>
                <div className="mt-auto hover:text-white transition-colors cursor-pointer"><Settings size={20} /></div>
            </div>

            {/* Code Editor Area */}
            <div className="flex-1 bg-[#050505] p-6 font-mono text-sm relative overflow-hidden">
                {/* Simulated Typing */}
                <div className="text-gray-500 mb-2">// Generating component based on prompt...</div>
                
                <div className="space-y-1">
                    <div className="flex">
                        <span className="text-nexus-400 w-8 inline-block select-none opacity-50">1</span>
                        <span className="text-purple-400">import</span> <span className="text-yellow-100">React</span> <span className="text-purple-400">from</span> <span className="text-green-400">'react'</span>;
                    </div>
                    <div className="flex">
                        <span className="text-nexus-400 w-8 inline-block select-none opacity-50">2</span>
                        <span className="text-purple-400">import</span> {'{'} <span className="text-yellow-100">motion</span> {'}'} <span className="text-purple-400">from</span> <span className="text-green-400">'framer-motion'</span>;
                    </div>
                    <div className="flex">
                        <span className="text-nexus-400 w-8 inline-block select-none opacity-50">3</span>
                    </div>
                    <div className="flex">
                        <span className="text-nexus-400 w-8 inline-block select-none opacity-50">4</span>
                        <span className="text-blue-400">const</span> <span className="text-yellow-300">FitnessDashboard</span> <span className="text-white">=</span> () <span className="text-blue-400">=&gt;</span> {'{'}
                    </div>
                    <div className="flex">
                        <span className="text-nexus-400 w-8 inline-block select-none opacity-50">5</span>
                        <span className="ml-4 text-blue-400">return</span> (
                    </div>
                    <div className="flex">
                        <span className="text-nexus-400 w-8 inline-block select-none opacity-50">6</span>
                        <span className="ml-8 text-white">&lt;</span><span className="text-red-400">div</span> <span className="text-yellow-100">className</span>=<span className="text-green-400">"flex flex-col h-screen bg-black"</span><span className="text-white">&gt;</span>
                    </div>
                    <div className="flex relative">
                         {/* Cursor Animation */}
                        <motion.div 
                            animate={{ opacity: [1, 0] }}
                            transition={{ repeat: Infinity, duration: 0.8 }}
                            className="absolute left-[200px] top-0 h-5 w-0.5 bg-nexus-300" 
                        />
                        <span className="text-nexus-400 w-8 inline-block select-none opacity-50">7</span>
                        <span className="ml-12 text-white">&lt;</span><span className="text-red-400">Header</span> <span className="text-yellow-100">title</span>=<span className="text-green-400">"My Workouts"</span> /<span className="text-white">&gt;</span>
                    </div>
                </div>

                {/* AI Chat Overlay */}
                <div className="absolute bottom-6 right-6 w-80 bg-nexus-900 border border-nexus-700 rounded-lg p-3 shadow-2xl">
                    <div className="flex gap-2 items-center mb-2">
                        <div className="w-2 h-2 bg-nexus-200 rounded-full animate-pulse"></div>
                        <span className="text-xs text-nexus-200 font-semibold">Nexus AI</span>
                    </div>
                    <p className="text-xs text-gray-300">I've added the header component. Would you like to integrate the heart rate monitor API next?</p>
                </div>
            </div>

            {/* Mobile Preview Area */}
            <div className="w-[320px] bg-gray-900 border-l border-white/5 flex flex-col items-center justify-center p-4 bg-grid-white/[0.02]">
                <div className="w-full h-full bg-black rounded-[2rem] border-[4px] border-nexus-800 shadow-xl overflow-hidden relative">
                    {/* Phone Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-nexus-800 rounded-b-xl z-20"></div>
                    
                    {/* Simulated Mobile App UI */}
                    <div className="w-full h-full bg-gradient-to-br from-nexus-900 to-black text-white p-4 pt-10 flex flex-col">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-lg font-bold">Today</h2>
                            <div className="w-8 h-8 rounded-full bg-nexus-700"></div>
                        </div>
                        
                        <div className="space-y-4">
                            {/* Card 1 */}
                            <motion.div 
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 1 }}
                                className="p-4 rounded-xl bg-nexus-800/50 border border-nexus-700/50"
                            >
                                <div className="text-xs text-gray-400 mb-1">Calories Burned</div>
                                <div className="text-2xl font-bold text-nexus-200">842 <span className="text-xs text-gray-500">kcal</span></div>
                            </motion.div>

                            {/* Card 2 */}
                            <motion.div 
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 1.2 }}
                                className="p-4 rounded-xl bg-gradient-to-r from-nexus-600 to-nexus-500 border border-nexus-500"
                            >
                                <div className="text-xs text-white/80 mb-1">Heart Rate</div>
                                <div className="flex items-end justify-between">
                                    <div className="text-2xl font-bold text-white">112 <span className="text-xs text-white/70">bpm</span></div>
                                    <Wifi size={16} className="text-white/50 animate-pulse" />
                                </div>
                            </motion.div>
                             
                            {/* Simulated List */}
                            {[1, 2].map((i) => (
                                <motion.div 
                                    key={i}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 1.4 + (i * 0.1) }}
                                    className="h-12 rounded-lg bg-white/5 w-full"
                                />
                            ))}

                        </div>
                        
                        <div className="mt-auto flex justify-center pb-2">
                             <div className="w-32 h-1 bg-gray-700 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default BrowserWindow;