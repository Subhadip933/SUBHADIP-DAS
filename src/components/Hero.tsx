import { motion } from 'motion/react';
import { Cpu, Globe, Database, BookOpen } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="max-w-7xl mx-auto px-4 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] font-mono uppercase tracking-[0.2em] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Available for Internship / Junior Role
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8 leading-tight">
              Subhadip <br />
              <span className="text-white/40">Das</span>
            </h1>
            
            <p className="text-xl text-white/60 max-w-lg mb-10 leading-relaxed">
              3rd Year Computer Science Undergraduate. I build with precision, 
              focusing on low-level systems, networking, and robust data structures.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-white text-black font-mono font-bold text-sm uppercase tracking-wider"
              >
                View Manifest
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 border border-white/20 hover:border-white transition-colors font-mono font-bold text-sm uppercase tracking-wider"
              >
                Connect()
              </motion.button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl border border-white/5 bg-gradient-to-br from-white/5 to-transparent p-8 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <Cpu className="w-12 h-12 text-white/20" />
                <div className="text-right font-mono text-[10px] text-white/30 uppercase leading-relaxed">
                  System Architecture<br />
                  Protocol: TCP/IP<br />
                  Kernel: Monolithic
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="font-mono text-3xl font-bold">50+ DSA</div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '65%' }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="h-full bg-white/20"
                  />
                </div>
                <p className="text-xs font-mono text-white/40 uppercase tracking-widest">Questions Resolved Successfully</p>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <div className="p-4 border border-white/5 bg-white/5 rounded-xl">
                  <Globe className="w-5 h-5 mb-2 opacity-50" />
                  <div className="text-[10px] font-mono uppercase text-white/40">Network</div>
                </div>
                <div className="p-4 border border-white/5 bg-white/5 rounded-xl">
                  <Database className="w-5 h-5 mb-2 opacity-50" />
                  <div className="text-[10px] font-mono uppercase text-white/40">DBMS</div>
                </div>
                <div className="p-4 border border-white/5 bg-white/5 rounded-xl">
                  <BookOpen className="w-5 h-5 mb-2 opacity-50" />
                  <div className="text-[10px] font-mono uppercase text-white/40">OS</div>
                </div>
              </div>
            </div>
            
            {/* Abstract Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border border-white/10 rounded-full animate-spin-slow" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 border border-white/10 rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
