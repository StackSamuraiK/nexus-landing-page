import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-nexus-800 bg-nexus-900 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">NEXUS</h2>
          <p className="text-gray-400 max-w-sm">
            Empowering everyone to become a software engineer through the power of artificial intelligence.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
                <h4 className="text-white font-semibold mb-4">Product</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                    <li className="hover:text-nexus-300 cursor-pointer">Features</li>
                    <li className="hover:text-nexus-300 cursor-pointer">Integration</li>
                    <li className="hover:text-nexus-300 cursor-pointer">Pricing</li>
                    <li className="hover:text-nexus-300 cursor-pointer">Changelog</li>
                </ul>
            </div>
            <div>
                <h4 className="text-white font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                    <li className="hover:text-nexus-300 cursor-pointer">About</li>
                    <li className="hover:text-nexus-300 cursor-pointer">Blog</li>
                    <li className="hover:text-nexus-300 cursor-pointer">Careers</li>
                    <li className="hover:text-nexus-300 cursor-pointer">Contact</li>
                </ul>
            </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-nexus-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-gray-500">
            © 2024 Nexus AI Inc. All rights reserved.
        </div>
        <div className="flex gap-6">
            <Github className="text-gray-400 hover:text-white cursor-pointer w-5 h-5" />
            <Twitter className="text-gray-400 hover:text-white cursor-pointer w-5 h-5" />
            <Linkedin className="text-gray-400 hover:text-white cursor-pointer w-5 h-5" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;