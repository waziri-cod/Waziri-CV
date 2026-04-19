import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Printer } from 'lucide-react';
import heroBg from '../assets/hero-bg.jpg';
import profileImage from '../assets/prof.png';
import cvFileUrl from '../assets/Waziri_S,CV.pdf';

const roles = [
  'Web Developer',
  'UI/UX Designer',
  'AI for Software Engineer',
  'Critical Thinker',
  'Philosopher',
];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [text, setText] = useState('');

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIndex <= currentRole.length) {
      timeout = window.setTimeout(() => {
        setText(currentRole.slice(0, charIndex));
        setCharIndex((c) => c + 1);
      }, 80);
    } else if (!deleting && charIndex > currentRole.length) {
      timeout = window.setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && charIndex > 0) {
      timeout = window.setTimeout(() => {
        setText(currentRole.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      }, 40);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  return (
    <section 
      id="home" 
      className="hero-bg min-h-screen flex items-center pt-20 px-4 relative overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(85, 130, 235, 0.95) 0%, rgba(6, 18, 43, 0.9) 35%, rgba(8, 27, 63, 0.85) 70%, rgba(2, 8, 22, 0.95) 100%), url(${heroBg})`,
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Bridging the gap between <span className="text-primary">Humanities</span> and <span className="text-primary">Technology</span>.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
            Hi, I'm <span className="font-semibold text-foreground">Waziri Shaban</span>. A Bachelor of Arts in PHILOSOPHY AND ETHICS graduate with a passion for software engineering. I build clean, modern, and accessible digital experiences.
          </p>
          <div className="text-xl md:text-2xl text-muted-foreground mb-8 h-10">
            <span className="typing-cursor">{text}</span>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-all hover:scale-105"
            >
              Hire Me <ArrowRight size={18} />
            </a>
            <a
              href={cvFileUrl}
              download="Waziri_Shaban_CV.pdf"
              className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-full font-semibold hover:bg-secondary/80 transition-all hover:scale-105"
            >
              Download CV <Download size={18} />
            </a>
            <button
              type="button"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-all hover:scale-105"
              onClick={() => window.print()}
            >
              <Printer size={18} /> Print CV
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-primary/20 rounded-3xl rotate-6 animate-pulse"></div>
            <img
              src={profileImage}
              alt="Profile"
              className="relative z-10 w-full h-full object-cover rounded-3xl shadow-2xl border-2 border-primary/50"
            />
            <div className="absolute -bottom-6 -right-6 bg-background p-4 rounded-2xl shadow-xl border z-20 hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Available for work</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}