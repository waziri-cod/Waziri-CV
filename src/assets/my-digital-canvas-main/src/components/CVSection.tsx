import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Download, Briefcase, GraduationCap, Code, Award } from "lucide-react";
// Add your CV import here:
const cvFileUrl = "/Waziri_S,CV.pdf";

const cvSections = [
  {
    icon: Briefcase,
    title: "Work Experience",
    items: [
      { period: "2023 – Present", role: "Freelance Web Developer", place: "Self-Employed", desc: "Building responsive web applications for clients across various industries." },
      { period: "2022 – 2023", role: "IT Intern", place: "Company Name", desc: "Assisted with website maintenance, data management, and technical support." },
    ],
  },
  {
    icon: GraduationCap,
    title: "Education",
    items: [
      { period: "2021 – Present", role: "Bachelor's Degree", place: "University Name", desc: "Pursuing a degree with focus on research and analytical skills." },
    ],
  },
  {
    icon: Code,
    title: "Technical Skills",
    items: [
      { period: "", role: "Frontend", place: "", desc: "HTML, CSS, JavaScript, React, TypeScript, Tailwind CSS" },
      { period: "", role: "Backend", place: "", desc: "Node.js, Express, Python, SQL, MongoDB" },
      { period: "", role: "Tools", place: "", desc: "Git, GitHub, VS Code, Figma, Docker, Linux" },
    ],
  },
];

const CVSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="cv" className="section-padding bg-background" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-2">Professional Summary</p>
          <h2 className="section-title">My CV</h2>

          {/* CV Download Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6"
          >
            <a
              href={cvFileUrl}
              download="Waziri_Shaban_CV.pdf"
              className="inline-flex items-center gap-2 px-8 py-3.5 gold-gradient text-accent-foreground font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <Download size={18} />
              Download Full CV (PDF)
            </a>
          </motion.div>
        </motion.div>

        <div className="space-y-10">
          {cvSections.map((section, si) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + si * 0.15 }}
              className="glass-card p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                  <section.icon size={20} className="text-primary-foreground" />
                </div>
                <h3 className="font-display text-2xl font-bold text-primary">{section.title}</h3>
              </div>

              <div className="space-y-6">
                {section.items.map((item, i) => (
                  <div key={i} className="border-l-2 border-accent/30 pl-6">
                    {item.period && (
                      <span className="text-accent text-sm font-semibold">{item.period}</span>
                    )}
                    <h4 className="font-display font-bold text-primary text-lg">{item.role}</h4>
                    {item.place && (
                      <p className="text-muted-foreground text-sm font-medium">{item.place}</p>
                    )}
                    <p className="text-foreground/70 text-sm mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CVSection;
