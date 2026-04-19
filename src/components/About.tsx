import React from 'react';
import { motion } from 'framer-motion';

export function About() {
  return (
    <section id="about" className="py-24 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              Coming from a background in PHILOSOPHY AND ETHICS, I bring a unique perspective to software development. I specialize in building human-centric applications that solve real-world problems.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My transition into tech was driven by a fascination with how code can scale solutions and impact lives globally. I've spent the last 2 years mastering modern web technologies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold">My Philosophy</h3>
            <p className="text-muted-foreground leading-relaxed">
              I believe that great software is born at the intersection of empathy and logic. My goals are to lead inclusive tech teams and develop tools that enhance educational accessibility.
            </p>
            <div className="p-6 bg-card rounded-2xl border shadow-sm">
              <p className="italic text-primary font-medium">
                "Code is poetry, and the browser is my canvas. My mission is to paint experiences that matter."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}