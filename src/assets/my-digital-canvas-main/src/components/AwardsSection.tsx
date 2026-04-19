import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Medal, Star, FileCheck } from "lucide-react";

const awards = [
  {
    icon: Trophy,
    title: "Dean's List Award",
    issuer: "University Name",
    year: "2023",
    description: "Recognized for outstanding academic performance and maintaining a high GPA throughout the academic year.",
  },
  {
    icon: Medal,
    title: "Web Development Certificate",
    issuer: "Online Academy",
    year: "2022",
    description: "Completed comprehensive full-stack web development bootcamp with distinction.",
  },
  {
    icon: Star,
    title: "Hackathon Winner",
    issuer: "Tech Competition",
    year: "2023",
    description: "First place in university hackathon for building an innovative community service application.",
  },
  {
    icon: FileCheck,
    title: "Research Excellence",
    issuer: "Department of Studies",
    year: "2024",
    description: "Awarded for outstanding research paper presentation at the annual academic conference.",
  },
];

const AwardsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="awards" className="section-padding bg-secondary/30" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-2">Recognition</p>
          <h2 className="section-title">Awards & Certificates</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {awards.map((award, i) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="glass-card p-6 text-center group hover:border-accent/50 transition-all hover:shadow-xl"
            >
              <div className="w-16 h-16 rounded-full gold-gradient flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <award.icon size={28} className="text-accent-foreground" />
              </div>
              <span className="text-accent text-xs font-bold tracking-wider">{award.year}</span>
              <h3 className="font-display text-lg font-bold text-primary mt-2 mb-1">{award.title}</h3>
              <p className="text-muted-foreground text-xs font-medium mb-3">{award.issuer}</p>
              <p className="text-foreground/60 text-sm leading-relaxed">{award.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
