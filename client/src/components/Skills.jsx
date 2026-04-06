import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const skillGroups = [
  { category: 'Languages', icon: '{ }', skills: ['C', 'JavaScript'] },
  { category: 'Frontend', icon: '◻', skills: ['HTML', 'CSS', 'Bootstrap', 'EJS'] },
  { category: 'Backend', icon: '⚡', skills: ['Node.js', 'Express.js'] },
  { category: 'Database', icon: '🗄️', skills: ['MongoDB', 'Mongoose'] },
  { category: 'Concepts', icon: '💡', skills: ['REST APIs', 'MVC Architecture', 'Auth & Sessions'] },
  { category: 'Tools', icon: '🔧', skills: ['Git', 'GitHub', 'Postman', 'VS Code'] },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <div className="section-padding">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="font-mono text-accent text-sm tracking-widest uppercase">Skills</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">
            Tech <span className="gradient-text">Stack</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map(({ category, icon, skills }, gi) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: gi * 0.1, duration: 0.5 }}
              className="glass-card rounded-2xl p-6 card-hover group"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{icon}</span>
                <h3 className="font-display font-bold text-lg group-hover:text-accent transition-colors">
                  {category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
