import { motion } from 'motion/react';
import { Terminal, Code, Cpu, Network, Database, Layers } from 'lucide-react';

const coreSkills = [
  {
    name: 'C Programming',
    category: 'Lower-Level',
    icon: <Code className="w-5 h-5" />,
    description: 'Deep knowledge of memory management, pointers, and manual memory control.',
    level: 90
  },
  {
    name: 'Operating Systems',
    category: 'System',
    icon: <Cpu className="w-5 h-5" />,
    description: 'Process scheduling, deadlocks, memory virtualization, and file systems.',
    level: 85
  },
  {
    name: 'Networking',
    category: 'Infrastructure',
    icon: <Network className="w-5 h-5" />,
    description: 'TCP/IP stack, Socket programming, and network security foundations.',
    level: 80
  },
  {
    name: 'DBMS',
    category: 'Persistence',
    icon: <Database className="w-5 h-5" />,
    description: 'SQL optimization, normalization, indexing, and ACID property implementation.',
    level: 85
  },
  {
    name: 'DSA',
    category: 'Problem Solving',
    icon: <Layers className="w-5 h-5" />,
    description: '50+ problems solved. Focus on space-time complexity and efficient algorithm design.',
    level: 75
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 border-t border-white/5 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-4xl font-bold font-mono tracking-tighter">02_SKILLS.SYS</h2>
          <div className="h-[1px] flex-1 bg-white/10" />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-white/5 rounded-lg group-hover:bg-white/10 transition-colors">
                  {skill.icon}
                </div>
                <span className="font-mono text-[10px] text-white/30 uppercase tracking-widest">{skill.category}</span>
              </div>
              
              <h3 className="text-xl font-bold mb-3">{skill.name}</h3>
              <p className="text-sm text-white/50 leading-relaxed mb-8">
                {skill.description}
              </p>
              
              <div className="space-y-2">
                <div className="flex justify-between font-mono text-[10px] uppercase tracking-wider text-white/30">
                  <span>Proficiency</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="h-full bg-white/40"
                  />
                </div>
              </div>
            </motion.div>
          ))}
          
          <div className="p-8 border border-dashed border-white/10 flex flex-col items-center justify-center text-center opacity-50 grayscale hover:grayscale-0 transition-all">
            <Terminal className="w-8 h-8 mb-4 opacity-20" />
            <h3 className="font-mono text-sm uppercase tracking-widest mb-2">Expanding...</h3>
            <p className="text-[10px] uppercase opacity-40">System continuously learning</p>
          </div>
        </div>
      </div>
    </section>
  );
}
