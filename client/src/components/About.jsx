import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { BookOpen, Code2, Globe } from 'lucide-react';

const stats = [
  { label: 'Projects Built', value: '4+' },
  { label: 'Technologies', value: '12+' },
  { label: 'Learning From', value: 'Apna College' },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div className="section-padding bg-gray-50 dark:bg-surface-card/30">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-accent text-sm tracking-widest uppercase">About Me</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">
            Who I <span className="gradient-text">Am</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              I'm a self-taught full stack developer on a journey with{' '}
              <span className="text-accent font-medium">Apna College</span>, passionate about building
              real-world applications that solve actual problems.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              My focus is on <span className="text-accent font-medium">backend development</span> — designing
              robust REST APIs, implementing authentication systems, and working with databases. I love
              the architecture side of software: MVC patterns, clean code, and scalable systems.
            </p>

            <div className="grid grid-cols-1 gap-4">
              {[
                { icon: BookOpen, title: 'Self-Taught', desc: 'Learning from Apna College & building projects' },
                { icon: Code2, title: 'Backend Focused', desc: 'Node.js, Express, MongoDB & REST APIs' },
                { icon: Globe, title: 'Full Stack', desc: 'From server to browser — end to end' },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-4 p-4 glass-card rounded-xl">
                  <div className="p-2 rounded-lg bg-accent/10 text-accent shrink-0">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold">{title}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-1 gap-6"
          >
            {stats.map(({ label, value }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="p-8 glass-card rounded-2xl card-hover text-center"
              >
                <div className="font-display text-5xl font-bold gradient-text mb-2">{value}</div>
                <div className="text-gray-500 dark:text-gray-400 font-medium">{label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
