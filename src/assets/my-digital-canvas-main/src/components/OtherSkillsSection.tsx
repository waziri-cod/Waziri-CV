import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, Users, Search, Puzzle, Presentation, PenTool } from "lucide-react";

const skills = [
  { icon: MessageSquare, title: "Communication", desc: "Effective verbal and written communication across diverse audiences", level: 90 },
  { icon: Users, title: "Leadership", desc: "Experience leading teams and managing projects from start to finish", level: 85 },
  { icon: Search, title: "Research", desc: "Strong analytical and research methodology skills", level: 88 },
  { icon: Puzzle, title: "Problem Solving", desc: "Creative and systematic approach to complex challenges", level: 92 },
  { icon: Presentation, title: "Public Speaking", desc: "Confident presenter with experience in academic and professional settings", level: 80 },
  { icon: PenTool, title: "Technical Writing", desc: "Clear documentation and report writing capabilities", level: 85 },
];

const OtherSkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="other-skills" className="section-padding bg-secondary/30" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-2">Beyond Technology</p>
          <h2 className="section-title">Professional Skills</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="glass-card p-6 group hover:border-accent/50 transition-all hover:shadow-xl"
            >
              <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <skill.icon size={22} className="text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-bold text-primary mb-2">{skill.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{skill.desc}</p>
              <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                  className="h-full gold-gradient rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherSkillsSection;
