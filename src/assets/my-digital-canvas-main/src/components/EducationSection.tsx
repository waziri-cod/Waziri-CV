import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, School, BookOpen, Award } from "lucide-react";

const educationData = [
  {
    icon: GraduationCap,
    period: "2025 – Present",
    title: "Bachelor's Degree",
    institution: "University of Dar es salaam (UDSM)",
    description: "Pursuing a degree in philosophy and Ethics field with distinction. Active involvement in research projects and extracurricular activities.",
    highlight: true,
  },
  {
    icon: Award,
    period: "2019 – 2021",
    title: "Advanced Level / College",
    institution: "College Name",
    description: "Completed advanced studies with excellent results. Developed foundational analytical and critical thinking skills.",
  },
  {
    icon: School,
    period: "2015 – 2019",
    title: "Secondary Education",
    institution: "Unyanyembe TPDF secondary school",
    description: "Graduated with  honors. Participated in sports, displine and physical fitness fairs and academic competitions.",
  },
  {
    icon: BookOpen,
    period: "2007 – 2014",
    title: "Primary Education",
    institution: "Gongoni primary school",
    description: "Built strong academic foundations. Recognized for outstanding performance in multiple subjects.",
  },
];

const EducationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding bg-secondary/30" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-2">My Journey</p>
          <h2 className="section-title">Education Background</h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Line */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />

          {educationData.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className={`relative flex items-start gap-6 mb-12 md:mb-16 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full gold-gradient flex items-center justify-center z-10 shadow-lg">
                <item.icon size={20} className="text-accent-foreground" />
              </div>

              {/* Content */}
              <div className={`ml-20 md:ml-0 md:w-[calc(50%-3rem)] ${i % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"}`}>
                <div className={`glass-card p-6 ${item.highlight ? "border-accent/40" : ""}`}>
                  <span className="text-accent text-sm font-semibold">{item.period}</span>
                  <h3 className="font-display text-xl font-bold text-primary mt-1">{item.title}</h3>
                  <p className="text-muted-foreground font-medium text-sm mt-1">{item.institution}</p>
                  <p className="text-foreground/70 text-sm mt-3 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
