import { motion } from 'framer-motion';
import { ArrowRight, Github, Mail, ChevronDown } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center hero-gradient grid-pattern overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 pt-24 pb-12 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div {...fadeUp(0.1)}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-mono mb-6">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                Available for opportunities
              </span>
            </motion.div>

            <motion.h1 {...fadeUp(0.2)} className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
              Hi, I'm{' '}
              <span className="gradient-text">Rahul Kumar</span>
            </motion.h1>

            <motion.h2 {...fadeUp(0.3)} className="font-display text-2xl md:text-3xl font-semibold text-gray-600 dark:text-gray-400 mb-6">
              Full Stack Developer
            </motion.h2>

            <motion.p {...fadeUp(0.4)} className="text-lg text-gray-600 dark:text-gray-400 max-w-lg mb-8 leading-relaxed">
              Building real-world web applications using{' '}
              <span className="text-accent font-medium">Node.js</span>,{' '}
              <span className="text-accent font-medium">Express</span>, and{' '}
              <span className="text-accent font-medium">MongoDB</span>.
            </motion.p>

            <motion.div {...fadeUp(0.5)} className="flex flex-wrap gap-4 mb-10">
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary flex items-center gap-2"
              >
                View Projects <ArrowRight size={16} />
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-outline"
              >
                Contact Me
              </button>
            </motion.div>

            <motion.div {...fadeUp(0.6)} className="flex items-center gap-4">
              <a
                href="https://github.com/rahul031102"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-gray-100 dark:bg-white/5 hover:bg-accent/10 hover:text-accent border border-transparent hover:border-accent/20 transition-all"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:rahuld031102@gmail.com"
                className="p-2.5 rounded-lg bg-gray-100 dark:bg-white/5 hover:bg-accent/10 hover:text-accent border border-transparent hover:border-accent/20 transition-all"
              >
                <Mail size={20} />
              </a>
              <span className="text-sm text-gray-500 dark:text-gray-500 font-mono">rahuld031102@gmail.com</span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="glass-card rounded-2xl overflow-hidden shadow-2xl">
              <div className="flex items-center gap-2 px-4 py-3 bg-gray-100 dark:bg-white/5 border-b border-gray-200 dark:border-white/5">
                <span className="w-3 h-3 rounded-full bg-red-400" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-2 font-mono text-xs text-gray-500">rahul.js</span>
              </div>
              <div className="p-6 font-mono text-sm">
                <p><span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> = {'{'}</p>
                <p className="ml-4"><span className="text-green-400">name</span>: <span className="text-amber-300">"Rahul Kumar"</span>,</p>
                <p className="ml-4"><span className="text-green-400">role</span>: <span className="text-amber-300">"Full Stack Developer"</span>,</p>
                <p className="ml-4"><span className="text-green-400">learning</span>: <span className="text-amber-300">"Apna College"</span>,</p>
                <p className="ml-4"><span className="text-green-400">stack</span>: [</p>
                <p className="ml-8"><span className="text-amber-300">"Node.js"</span>, <span className="text-amber-300">"Express"</span>,</p>
                <p className="ml-8"><span className="text-amber-300">"MongoDB"</span>, <span className="text-amber-300">"React"</span></p>
                <p className="ml-4">],</p>
                <p className="ml-4"><span className="text-green-400">available</span>: <span className="text-accent">true</span></p>
                <p>{'}'}</p>
                <p className="mt-3 text-gray-500">{'// Currently building cool stuff 🚀'}</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 dark:text-gray-600"
        >
          <ChevronDown size={24} />
        </motion.div>
      </div>
    </div>
  );
}
