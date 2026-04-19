import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Lightbulb, Heart, Sparkles } from "lucide-react";

const highlights = [
  { icon: Target, title: "Goal-Oriented", desc: "Driven to deliver impactful results" },
  { icon: Lightbulb, title: "Creative Thinker", desc: "Innovative solutions to complex problems" },
  { icon: Heart, title: "Passionate", desc: "Dedicated to continuous growth" },
  { icon: Sparkles, title: "Tech-Savvy", desc: "Bridging academia and technology" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-2">Get to Know Me</p>
          <h2 className="section-title">About Me</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-foreground/80 text-lg leading-relaxed">
              I am a dedicated professional with a unique blend of academic expertise and technology skills.
              While pursuing my degree in a non-technology field, I discovered a passion for web development
              and digital solutions that has become central to my professional identity.
            </p>
            <p className="text-foreground/80 text-lg leading-relaxed">
              My journey bridges the gap between traditional academia and modern technology, allowing me
              to bring a distinctive perspective to every project. I believe in the power of continuous
              learning and leveraging technology to create meaningful impact.
            </p>
            <p className="text-foreground/80 text-lg leading-relaxed">
              Whether it's building responsive web applications or solving complex research problems,
              I approach every challenge with creativity, determination, and a commitment to excellence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="glass-card p-6 text-center group hover:border-accent/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg gold-gradient flex items-center justify-center mx-auto mb-3">
                  <item.icon size={22} className="text-accent-foreground" />
                </div>
                <h3 className="font-display font-semibold text-primary mb-1">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
