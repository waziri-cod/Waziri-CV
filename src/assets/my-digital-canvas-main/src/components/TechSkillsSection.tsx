import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const techSkills = [
  { name: "HTML5", level: 90, description: "Semantic markup and accessibility standards" },
  { name: "CSS3 / Tailwind", level: 85, description: "Responsive design and utility-first styling" },
  { name: "JavaScript", level: 80, description: "ES6+ features and DOM manipulation" },
  { name: "TypeScript", level: 70, description: "Type-safe JavaScript development" },
  { name: "React", level: 75, description: "Component-based UI development" },
  { name: "Node.js", level: 65, description: "Server-side JavaScript runtime" },
  { name: "Python", level: 60, description: "Scripting and data processing" },
  { name: "Git & GitHub", level: 80, description: "Version control and collaboration" },
  { name: "SQL / Databases", level: 70, description: "Data modeling and querying" },
  { name: "Figma / UI Design", level: 65, description: "Interface design and prototyping" },
];

const tools = [
  "VS Code", "GitHub", "Figma", "Postman", "Docker",
  "Linux", "MongoDB", "Firebase", "Vercel", "WordPress",
];

const TechSkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="tech-skills" className="section-padding bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-2">Technical Expertise</p>
          <h2 className="section-title">Tech Skills</h2>
          <p className="section-subtitle mx-auto mt-4">
            Self-taught technology skills that complement my academic background
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Progress bars */}
          <div className="space-y-5">
            {techSkills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.06 }}
              >
                <div className="flex justify-between mb-1.5">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className="text-sm font-semibold text-foreground cursor-help hover:text-accent transition-colors">
                        {skill.name}
                      </span>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{skill.description}</p>
                    </TooltipContent>
                  </Tooltip>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-2.5 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: 0.4 + i * 0.06, ease: "easeOut" }}
                    className="h-full gold-gradient rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tools */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-display text-2xl font-bold text-primary mb-6">Tools & Technologies</h3>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool, i) => (
                <motion.span
                  key={tool}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.5 + i * 0.05 }}
                  className="px-5 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-navy-light transition-colors cursor-default"
                >
                  {tool}
                </motion.span>
              ))}
            </div>

            <div className="mt-10 glass-card p-6">
              <h4 className="font-display font-bold text-primary mb-3">My Tech Journey</h4>
              <p className="text-foreground/70 text-sm leading-relaxed">
                My technology journey began with curiosity about how websites work. Starting with HTML and CSS,
                I progressively learned JavaScript, React, and backend technologies. Today, I can build
                full-stack web applications from concept to deployment, complementing my academic expertise
                with practical technical skills.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechSkillsSection;
