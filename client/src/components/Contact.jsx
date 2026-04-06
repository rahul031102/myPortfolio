import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, Github, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(null), 5000);
      } else {
        setErrorMsg(data.message || 'Something went wrong');
        setStatus('error');
      }
    } catch {
      setErrorMsg('Network error. Make sure the server is running.');
      setStatus('error');
    }
  };

  const inputClass = `w-full px-4 py-3 rounded-xl glass-card bg-transparent 
    border border-gray-200 dark:border-white/10
    focus:border-accent dark:focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20
    text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-600
    transition-all duration-200 font-body`;

  return (
    <div className="section-padding">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="font-mono text-accent text-sm tracking-widest uppercase">Contact</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-4 max-w-md mx-auto">
            Have a project in mind or just want to say hi? Drop me a message!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="md:col-span-2 flex flex-col justify-center gap-6"
          >
            <div>
              <h3 className="font-display text-xl font-bold mb-2">Let's connect</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Always open to interesting projects and new opportunities.
              </p>
            </div>
            <a
              href="https://github.com/rahul031102"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 glass-card rounded-xl hover:border-accent/30 card-hover"
            >
              <div className="p-2 rounded-lg bg-gray-900 dark:bg-white/10 text-white">
                <Github size={20} />
              </div>
              <div>
                <p className="font-semibold font-display text-sm">GitHub</p>
                <p className="text-xs text-gray-500">@rahulkumar</p>
              </div>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="md:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className={inputClass}
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className={inputClass}
              />
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message..."
                required
                rows={5}
                className={`${inputClass} resize-none`}
              />

              {status === 'success' && (
                <div className="flex items-center gap-2 text-green-500 text-sm p-3 bg-green-50 dark:bg-green-900/20 rounded-xl">
                  <CheckCircle2 size={16} />
                  Message sent! I'll get back to you soon.
                </div>
              )}
              {status === 'error' && (
                <div className="flex items-center gap-2 text-red-500 text-sm p-3 bg-red-50 dark:bg-red-900/20 rounded-xl">
                  <AlertCircle size={16} />
                  {errorMsg}
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <><Loader2 size={16} className="animate-spin" /> Sending...</>
                ) : (
                  <><Send size={16} /> Send Message</>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
