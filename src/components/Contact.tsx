import { motion } from 'motion/react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 border-t border-white/5 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-4xl font-bold font-mono tracking-tighter">04_CONTACT.CMD</h2>
          <div className="h-[1px] flex-1 bg-white/10" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-3xl font-bold mb-6">Let's build something <span className="text-white/40 italic font-serif text-4xl">optimized</span>.</h3>
            <p className="text-white/50 mb-12 leading-relaxed max-w-md">
              Available for internships, collaborative open-source projects, or junior software engineering positions.
            </p>

            <div className="space-y-6">
              <a href="mailto:subhadipd670@gmail.com" className="flex items-center gap-4 p-4 border border-white/5 rounded-2xl hover:bg-white/[0.04] transition-all group">
                <div className="p-3 bg-white/5 rounded-xl group-hover:bg-white/10 transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-white/30">Email</div>
                  <div className="text-sm font-medium">subhadipd670@gmail.com</div>
                </div>
              </a>
              
              <div className="flex gap-4">
                <a href="#" className="flex-1 flex items-center gap-4 p-4 border border-white/5 rounded-2xl hover:bg-white/[0.04] transition-all group">
                  <div className="p-3 bg-white/5 rounded-xl group-hover:bg-white/10 transition-colors">
                    <Github className="w-6 h-6" />
                  </div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-white/30">GitHub</div>
                </a>
                <a href="#" className="flex-1 flex items-center gap-4 p-4 border border-white/5 rounded-2xl hover:bg-white/[0.04] transition-all group">
                  <div className="p-3 bg-white/5 rounded-xl group-hover:bg-white/10 transition-colors">
                    <Linkedin className="w-6 h-6" />
                  </div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-white/30">LinkedIn</div>
                </a>
              </div>
            </div>
          </div>

          <div className="p-8 border border-white/5 bg-white/[0.02] rounded-3xl">
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase tracking-widest text-white/30 ml-4">Subject</label>
                <input 
                  type="text" 
                  placeholder="Inquiry: Potential Collaboration"
                  className="w-full px-6 py-4 bg-white/5 border border-white/5 rounded-2xl focus:outline-none focus:border-white/20 transition-all text-sm"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase tracking-widest text-white/30 ml-4">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Hey Subhadip, I saw your portfolio..."
                  className="w-full px-6 py-4 bg-white/5 border border-white/5 rounded-2xl focus:outline-none focus:border-white/20 transition-all text-sm resize-none"
                />
              </div>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-white text-black font-mono font-bold text-sm uppercase tracking-wider rounded-2xl flex items-center justify-center gap-2"
              >
                Transmit()
                <Send className="w-4 h-4" />
              </motion.button>
            </form>
          </div>
        </div>
        
        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono text-white/20 uppercase tracking-[0.2em]">
          <div>© 2024 SUBHADIP_DAS.CORE</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">STDOUT</a>
            <a href="#" className="hover:text-white transition-colors">STDERR</a>
            <a href="#" className="hover:text-white transition-colors">TERMINATE</a>
          </div>
        </div>
      </div>
    </section>
  );
}
