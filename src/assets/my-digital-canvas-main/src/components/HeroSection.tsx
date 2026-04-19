import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, Briefcase } from "lucide-react";
import { useState, useEffect } from "react";
import heroBg from "@/assets/hero-bg.jpg";
// Profile photo URL in public/ folder, centered in hero section
const profilePhotoUrl = "/src/src/prof.png";

const HeroSection = () => {
  const [displayedName, setDisplayedName] = useState("");
  const fullName = "Waziri Shaban";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullName.length) {
        setDisplayedName(fullName.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 150);
    return () => clearInterval(timer);
  }, []);
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-navy/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        {/* Profile Photo */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="flex justify-center mb-8"
        >
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-gold overflow-hidden mx-auto">
            <img
              src={profilePhotoUrl}
              alt="Waziri Shaban - Profile Photo"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gold font-medium tracking-widest uppercase text-sm mb-4"
        >
          Welcome to my portfolio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight"
        >
          {displayedName}
          <span className="animate-pulse">|</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="text-primary-foreground/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-body"
        >
          A passionate professional blending academic excellence with PHILOSOPHY and ETHICS while participate with cutting-edge technology skills.
          Transforming ideas into impactful digital solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 gold-gradient text-accent-foreground font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            <Briefcase size={18} />
            Hire Me
          </a>
          <a
            href="#cv"
            className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-gold text-gold font-semibold rounded-lg hover:bg-gold/10 transition-all"
          >
            <Download size={18} />
            Download CV
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-primary-foreground/30 text-primary-foreground/80 font-semibold rounded-lg hover:border-primary-foreground/60 transition-all"
          >
            <Mail size={18} />
            Contact
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a href="#about" className="text-primary-foreground/40 hover:text-gold transition-colors">
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
              <ArrowDown size={24} />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
