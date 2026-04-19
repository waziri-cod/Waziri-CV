import React from 'react';
import { motion } from 'framer-motion';
import { Download, Printer, User, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import cvFileUrl from '../assets/Waziri_S,CV.pdf';

export function CV() {
  return (
    <section id="cv" className="py-24 px-4 bg-background border-t border-accent/20">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-accent">Professional CV</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent/50 mx-auto rounded-full"></div>
          <div className="mt-8 flex justify-center gap-4">
            <a
              href={cvFileUrl}
              download="Waziri_Shaban_CV.pdf"
              className="inline-flex items-center gap-2 gold-gradient text-accent-foreground px-6 py-2 rounded-lg font-semibold hover:opacity-90 shadow-lg shadow-accent/30 transition-all"
            >
              <Download size={18} /> Download PDF
            </a>
            <button
              type="button"
              className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-2 rounded-lg font-semibold hover:bg-secondary/80 border border-accent/30 transition-all"
              onClick={() => window.print()}
            >
              <Printer size={18} /> Print CV
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-card border border-accent/30 shadow-2xl rounded-3xl overflow-hidden min-h-[800px] flex flex-col md:flex-row"
        >
          {/* Sidebar */}
          <div className="bg-gradient-to-b from-primary to-primary/80 text-primary-foreground p-12 md:w-1/3 flex flex-col gap-12 border-r border-accent/20">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-accent/40 mb-6 shadow-lg">
                <img
                  src="src/assets/prof.png"
                  alt="WS"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold">Waziri Shaban</h3>
              <p className="text-accent font-medium text-sm tracking-wider">AI for Software Engineer</p>
            </div>

            <div className="space-y-6">
              <h4 className="text-lg font-bold border-b border-accent/30 pb-2 text-accent">Contact Info</h4>
              <div className="space-y-4 text-sm">
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-accent" /> <span className="text-primary-foreground/90">wazirishaban20@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-accent" /> <span className="text-primary-foreground/90">+(255) 6208-47754</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={16} className="text-accent" /> <span className="text-primary-foreground/90">Dar es salaam, Tanzania</span>
                </div>
                <div className="flex items-center gap-3">
                  <ExternalLink size={16} className="text-accent" /> <span className="text-primary-foreground/90">portfolio.com</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-lg font-bold border-b border-accent/30 pb-2 text-accent">Top Skills</h4>
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Python', 'Tailwind', 'UI/UX Design', 'Agile'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-accent/15 border border-accent/30 rounded-full text-xs font-medium text-primary-foreground hover:bg-accent/25 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="p-12 md:w-2/3 space-y-12 bg-background">
            <div className="space-y-4">
              <h4 className="text-xl font-bold flex items-center gap-2 text-accent uppercase tracking-wider">
                <User size={20} /> Professional Summary
              </h4>
              <p className="text-foreground/80 leading-relaxed">
                Versatile and detail-oriented Full-Stack Developer with a background in International Relations. Expert in building modern web applications using React, Node.js, and TypeScript. Passionate about creating efficient solutions that provide exceptional user experiences and drive business growth.
              </p>
            </div>

            <div className="space-y-6">
              <h4 className="text-xl font-bold flex items-center gap-2 text-accent uppercase tracking-wider">
                Work Experience
              </h4>
              <div className="space-y-8">
                <div className="relative pl-6 border-l-2 border-accent/30">
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-accent shadow-lg shadow-accent/50"></div>
                  <div className="flex justify-between items-center mb-1">
                    <h5 className="font-bold text-lg text-foreground">Senior Web Developer</h5>
                    <span className="text-xs font-bold bg-accent/20 border border-accent/50 px-2 py-1 rounded text-accent">2023 - Present</span>
                  </div>
                  <p className="text-accent font-semibold text-sm mb-3">Tech Solutions Inc.</p>
                  <ul className="text-sm text-foreground/70 list-disc list-inside space-y-2">
                    <li>Lead the development of a SaaS dashboard using React and GraphQL.</li>
                    <li>Improved application performance by 40% through code optimization.</li>
                    <li>Mentored junior developers and conducted code reviews.</li>
                  </ul>
                </div>

                <div className="relative pl-6 border-l-2 border-accent/30">
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-accent/50"></div>
                  <div className="flex justify-between items-center mb-1">
                    <h5 className="font-bold text-lg text-foreground">Junior Frontend Developer</h5>
                    <span className="text-xs font-bold bg-accent/20 border border-accent/50 px-2 py-1 rounded text-accent">2021 - 2023</span>
                  </div>
                  <p className="text-accent font-semibold text-sm mb-3">Creative Web Agency</p>
                  <ul className="text-sm text-foreground/70 list-disc list-inside space-y-2">
                    <li>Developed responsive websites using HTML, CSS, and JavaScript.</li>
                    <li>Collaborated with design teams to translate mockups into functional UI.</li>
                    <li>Managed 10+ client projects from initial concept to deployment.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-xl font-bold flex items-center gap-2 text-accent uppercase tracking-wider">
                Education
              </h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-bold text-foreground">B.A. in International Relations</h5>
                  <p className="text-sm text-accent font-medium">University of Fine Arts | 2019 - 2023</p>
                </div>
                <div>
                  <h5 className="font-bold text-foreground">Software Engineering Bootcamp</h5>
                  <p className="text-sm text-accent font-medium">Tech Institute | 2021</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}