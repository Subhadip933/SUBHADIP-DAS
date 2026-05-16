import { motion } from 'motion/react';
import { Terminal } from 'lucide-react';

export default function Header() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0A0A0A]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 font-mono font-bold text-lg"
        >
          <Terminal className="w-5 h-5 text-white/60" />
          <span>SUBHADIP_DAS</span>
        </motion.div>
        
        <div className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest text-white/50">
          <a href="#about" className="hover:text-white transition-colors">01_About</a>
          <a href="#skills" className="hover:text-white transition-colors">02_Skills</a>
          <a href="#education" className="hover:text-white transition-colors">03_Education</a>
          <a href="#contact" className="hover:text-white transition-colors">04_Contact</a>
        </div>
      </div>
    </nav>
  );
}
