import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, ExternalLink, Loader2 } from 'lucide-react';

const fallbackProjects = [
  {
    _id: '1',
    title: 'WanderLust',
    description: 'A full-stack Airbnb-style app with authentication, CRUD listings, Cloudinary image upload, and interactive Mapbox maps for location visualization.',
    techStack: ['Node.js', 'Express.js', 'MongoDB', 'Passport.js', 'Cloudinary', 'Mapbox', 'EJS', 'Bootstrap'],
    githubUrl: 'https://github.com/rahul031102/WanderLust-Full-Stack-Rental-Platform.git',
    liveUrl: 'https://airbnb-clone-gid6.onrender.com',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80',
    featured: true,
  },
  {
    _id: '2',
    title: 'Auth System',
    description: 'Secure login/signup system using Passport.js with local strategy, session management, bcrypt password hashing, and protected route middleware.',
    techStack: ['Node.js', 'Express.js', 'MongoDB', 'Passport.js', 'express-session', 'bcrypt'],
    githubUrl: 'https://github.com/rahul031102/Auth-system.git',
    liveUrl: '#',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80',
    featured: true,
  },
  {
    _id: '3',
    title: 'Flask Task Manager',
    description: 'A clean CRUD task management application built with Python Flask and SQLite. Supports creating, reading, updating, and deleting tasks.',
    techStack: ['Python', 'Flask', 'SQLite', 'SQLAlchemy', 'HTML', 'CSS'],
    githubUrl: 'https://github.com/rahul031102/Flask-Task-Manager.git',
    liveUrl: '#',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80',
    featured: false,
  },
  {
    _id: '4',
    title: 'Mini WhatsApp (CRUD APIs)',
    description: 'A RESTful API backend simulating WhatsApp messaging features. Full CRUD operations with proper HTTP methods, status codes, and UUID-based IDs.',
    techStack: ['Node.js', 'Express.js', 'REST APIs', 'Postman', 'UUID'],
    githubUrl: 'https://github.com/rahul031102/Mini-whatsApp-.git',
    liveUrl: '#',
    image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&q=80',
    featured: false,
  },
];

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch('/api/projects');
        if (!res.ok) throw new Error('API unavailable');
        const data = await res.json();
        setProjects(data.data?.length ? data.data : fallbackProjects);
      } catch {
        setProjects(fallbackProjects);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return (
    <div className="section-padding bg-gray-50 dark:bg-surface-card/20">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="font-mono text-accent text-sm tracking-widest uppercase">Work</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-4 max-w-xl mx-auto">
            Real-world applications built to solve problems and practice full-stack development.
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 size={40} className="animate-spin text-accent" />
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={project._id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                className="glass-card rounded-2xl overflow-hidden card-hover group"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  {project.featured && (
                    <span className="absolute top-3 right-3 px-2.5 py-1 bg-accent text-surface-dark text-xs font-mono font-bold rounded-full">
                      Featured
                    </span>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="font-display text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.techStack?.slice(0, 5).map((tech) => (
                      <span key={tech} className="skill-tag text-xs">{tech}</span>
                    ))}
                    {project.techStack?.length > 5 && (
                      <span className="skill-tag text-xs text-gray-400">+{project.techStack.length - 5}</span>
                    )}
                  </div>

                  <div className="flex items-center gap-3 pt-4 border-t border-gray-200 dark:border-white/5">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-accent transition-colors"
                    >
                      <Github size={16} /> GitHub
                    </a>
                    {project.liveUrl && project.liveUrl !== '#' && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-accent transition-colors"
                      >
                        <ExternalLink size={16} /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
