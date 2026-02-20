import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Terminal, PlayCircle } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Describe',
    icon: <MessageSquare size={20} />,
    desc: 'Chat with Nexus AI to outline your features.',
    visual: (
        <div className="flex flex-col gap-3 p-4">
            <div className="self-end bg-nexus-600 text-white p-3 rounded-t-xl rounded-bl-xl text-sm max-w-[80%]">
                I need a crypto wallet app that tracks Bitcoin and Ethereum prices in real-time.
            </div>
            <div className="self-start bg-nexus-800 text-gray-200 p-3 rounded-t-xl rounded-br-xl text-sm max-w-[80%]">
                <span className="text-nexus-300 font-bold block mb-1">Nexus AI</span>
                Sure! I'll set up a React Native project with WebSockets for real-time data and CoinGecko API.
            </div>
        </div>
    )
  },
  {
    id: 2,
    title: 'Generate',
    icon: <Terminal size={20} />,
    desc: 'Watch the code being written live in the VS Code environment.',
    visual: (
        <div className="p-4 font-mono text-xs text-gray-400">
            <div className="text-green-500">✔ Initializing project structure...</div>
            <div className="text-green-500">✔ Installing dependencies...</div>
            <div className="mt-2 text-blue-400">writing /components/PriceChart.tsx</div>
            <div className="pl-2 border-l border-gray-700 my-2 text-gray-500">
                <span className="text-purple-400">const</span> <span className="text-yellow-200">ws</span> = <span className="text-purple-400">new</span> <span className="text-yellow-200">WebSocket</span>(<span className="text-green-400">'wss://stream.binance.com'</span>);
            </div>
            <div className="text-white animate-pulse">_</div>
        </div>
    )
  },
  {
    id: 3,
    title: 'Preview',
    icon: <PlayCircle size={20} />,
    desc: 'Interact with your app immediately in the browser simulator.',
    visual: (
        <div className="h-full w-full bg-black flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-nexus-900/50 to-transparent"></div>
            <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">$42,125.00</div>
                <div className="text-green-400 text-sm flex items-center justify-center gap-1">
                    ▲ 2.4% <span className="text-gray-500">BTC/USD</span>
                </div>
                <div className="mt-8 flex gap-4 justify-center">
                    <button className="px-6 py-2 bg-nexus-600 rounded-lg text-sm font-semibold hover:bg-nexus-500">Buy</button>
                    <button className="px-6 py-2 bg-gray-800 rounded-lg text-sm font-semibold hover:bg-gray-700">Sell</button>
                </div>
            </div>
        </div>
    )
  }
];

const IDEWalkthrough: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section className="py-24 px-6 bg-black/20" id="workflow">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">From Prompt to Production</h2>
            <p className="text-gray-400">Three simple steps to build your dream application.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Steps List */}
            <div className="flex flex-col gap-6">
                {steps.map((step) => (
                    <div 
                        key={step.id}
                        onClick={() => setActiveStep(step.id)}
                        className={`p-6 rounded-2xl cursor-pointer border transition-all duration-300 relative overflow-hidden ${
                            activeStep === step.id 
                            ? 'bg-nexus-900/80 border-nexus-500 shadow-[0_0_30px_rgba(232,93,4,0.15)]' 
                            : 'bg-transparent border-gray-800 hover:border-nexus-800'
                        }`}
                    >
                        {activeStep === step.id && (
                             <motion.div layoutId="activeBorder" className="absolute left-0 top-0 bottom-0 w-1 bg-nexus-400" />
                        )}
                        <div className="flex items-start gap-4">
                            <div className={`p-3 rounded-lg transition-colors ${activeStep === step.id ? 'bg-nexus-500 text-white' : 'bg-gray-800 text-gray-400'}`}>
                                {step.icon}
                            </div>
                            <div>
                                <h3 className={`text-xl font-bold mb-1 ${activeStep === step.id ? 'text-white' : 'text-gray-400'}`}>{step.title}</h3>
                                <p className="text-gray-500 text-sm">{step.desc}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Visual Preview */}
            <div className="h-[400px] bg-nexus-900/50 rounded-2xl border border-nexus-800/50 p-2 backdrop-blur-sm relative">
                <div className="w-full h-full bg-black/50 rounded-xl overflow-hidden relative border border-white/5">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeStep}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                            className="absolute inset-0"
                        >
                            {steps.find(s => s.id === activeStep)?.visual}
                        </motion.div>
                    </AnimatePresence>
                </div>
                
                {/* Decorative elements around preview */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-nexus-500 rounded-full mix-blend-screen filter blur-[60px] opacity-20 pointer-events-none"></div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-nexus-300 rounded-full mix-blend-screen filter blur-[60px] opacity-20 pointer-events-none"></div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default IDEWalkthrough;