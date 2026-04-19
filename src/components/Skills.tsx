import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Layout, Database, MessageSquare, Users, Search, Lightbulb } from 'lucide-react';

const techSkills = [
  { name: 'React / Next.js', level: 90, icon: <Layout size={20} /> },
  { name: 'TypeScript / JS', level: 85, icon: <Code size={20} /> },
  { name: 'Node.js / Express', level: 80, icon: <Server size={20} /> },
  { name: 'PostgreSQL / MongoDB', level: 75, icon: <Database size={20} /> },
  { name: 'Tailwind CSS', level: 95, icon: <Layout size={20} /> },
  { name: 'Python', level: 70, icon: <Code size={20} /> },
];

const softSkills = [
  { name: 'Effective Communication', icon: <MessageSquare className="text-primary" /> },
  { name: 'Leadership & Mentoring', icon: <Users className="text-primary" /> },
  { name: 'Analytical Research', icon: <Search className="text-primary" /> },
  { name: 'Creative Problem Solving', icon: <Lightbulb className="text-primary" /> },
];

export function Skills() {
  const paragraphWords = [
    { text: 'Bridging the gap between ', animated: false },
    { text: 'Humanities', animated: true },
    { text: ' and ', animated: false },
    { text: 'Technology', animated: true },
    { text: '.', animated: false },
  ];

  return (
    <section id="skills" className="py-24 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Tech & Professional Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-6 max-w-2xl mx-auto text-sm md:text-base leading-7 text-muted-foreground">
            {paragraphWords.map((word, index) => (
              <motion.span
                key={index}
                initial={word.animated ? { y: 12, opacity: 0 } : { opacity: 1 }}
                whileInView={word.animated ? { y: 0, opacity: 1 } : { opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: word.animated ? index * 0.08 : 0 }}
                whileHover={word.animated ? { scale: 1.06, color: '#0ea5e9' } : undefined}
                className={word.animated ? 'font-semibold text-primary' : ''}
              >
                {word.text}
              </motion.span>
            ))}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Code className="text-primary" /> Tech Proficiency
            </h3>
            {techSkills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center text-sm font-semibold">
                  <span className="flex items-center gap-2">{skill.icon} {skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="h-full bg-primary"
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Users className="text-primary" /> Professional Competencies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="p-6 bg-card rounded-2xl border shadow-sm flex flex-col items-center text-center gap-4 transition-all duration-300"
                >
                  <div className="p-3 bg-primary/10 rounded-xl">
                    {skill.icon}
                  </div>
                  <h4 className="font-semibold">{skill.name}</h4>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-8 bg-background border rounded-3xl shadow-xl overflow-hidden relative"
        >
           <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16"></div>
          <h3 className="text-2xl font-bold mb-8 text-center">My Tech Learning Roadmap</h3>
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-muted hidden md:block -z-10"></div>
            {[
              { year: '2022', label: 'HTML/CSS/JS Basics' },
              { year: '2023', label: 'React & Frontend Frameworks' },
              { year: '2024', label: 'Full-Stack & Backend Systems' },
              { year: 'Beyond', label: 'AI Integration & System Architecture' },
            ].map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center gap-4 bg-background px-4">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                  {index + 1}
                </div>
                <div>
                  <div className="font-bold text-primary">{step.year}</div>
                  <div className="text-sm font-medium">{step.label}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}