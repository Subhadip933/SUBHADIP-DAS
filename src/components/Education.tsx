import { motion } from 'motion/react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 text-center mb-16">
        <div className="flex items-center gap-4 mb-16">
          <div className="h-[1px] flex-1 bg-white/10" />
          <h2 className="text-4xl font-bold font-mono tracking-tighter">03_EDUCATION.LOG</h2>
          <div className="h-[1px] flex-1 bg-white/10" />
        </div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative text-left p-8 border-l-2 border-white/10 bg-white/[0.02]"
          >
            <div className="absolute -left-3 top-8 w-5 h-5 rounded-full bg-[#0A0A0A] border-2 border-white/20 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
            </div>

            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold mb-1">Bachelor of Science in Computer Science</h3>
                <p className="text-white/60 font-medium">University / College Name Placeholder</p>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-mono whitespace-nowrap">
                <Calendar className="w-3 h-3 opacity-50" />
                2021 — PRESENT
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono text-white/40 uppercase tracking-widest mb-6">
              <div className="flex items-center gap-1">
                <MapPin className="w-3 h-3 opacity-50" />
                Location Placeholder
              </div>
              <div className="flex items-center gap-1">
                <GraduationCap className="w-3 h-3 opacity-50" />
                3rd Year Undergraduate
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-sm text-white/50 leading-relaxed">
                Focused on theoretical foundations and practical implementations of core computational concepts. 
                Consistently maintaining academic excellence while pursuing independent research in systems engineering.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 border border-white/5 rounded-lg bg-white/5">
                  <div className="text-[10px] font-mono uppercase text-white/30 mb-1">Current Focus</div>
                  <div className="text-xs font-medium">Advanced OS & Computer Architecture</div>
                </div>
                <div className="p-3 border border-white/5 rounded-lg bg-white/5">
                  <div className="text-[10px] font-mono uppercase text-white/30 mb-1">Electives</div>
                  <div className="text-xs font-medium">Network Security, Information Retrieval</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
