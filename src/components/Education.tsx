import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const education = [
  {
   title: 'Bachelor of Arts in Philosophy and Ethics',
    institution: 'University of Dar es Salaam (UDSM)',
    period: '2022 - 2025',
    description: 'Specialized in philosophy, ethics, and global socio-political systems. Developed strong critical thinking, analytical reasoning, and research skills. Graduated with honors.',
    type: 'Degree',
  },
  {
    title: 'Certificate in AI for Software Engineering',
    institution: 'PLP Academy, Kenya',
    period: '2025',
    description: 'Completed an intensive program focused on artificial intelligence, full-stack development, algorithms, and modern software engineering practices.',
    type: 'Certification',
  },
  {
    title: 'Advanced Secondary Education (ACSEE)',
    institution: 'Ngara Boys High School',
    period: '2020 - 2022',
    description: 'Focused on Social Sciences (HKL - History, Kiswahili, and Language). Built a strong foundation in communication, analysis, and critical thinking.',
    type: '(ACSEE)Certificate',
  },
  {
    title: 'Secondary Education (CSEE)',
    institution: 'Unyanyembe TPDF Secondary School',
    period: '2016 - 2020',
    description: 'Focused on Social Sciences (HKL - History, Kiswahili, and Language). Built a strong foundation in communication, analysis, and critical thinking.',
    type: '(CSEE)Certificate',
  },
  {
        title: 'Primary Education',
    institution: 'Gongoni Primary School',
    period: '2009 - 2015',
    description: 'Completed foundational education, developing basic literacy, numeracy, and personal development skills.',
    type: 'Primary School Certificate',
  },
];

export function Education() {
  return (
    <section id="education" className="py-24 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Education Background</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative border-l-2 border-muted pl-8 ml-4 md:ml-12 space-y-12">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute -left-[41px] top-0 bg-background p-2 rounded-full border-2 border-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                {item.type === 'degree' ? <GraduationCap size={20} /> : <Award size={20} />}
              </div>
              
              <div className="p-6 bg-card rounded-2xl border shadow-sm group-hover:shadow-md group-hover:border-primary transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between mb-4 gap-4">
                  <h3 className="text-xl md:text-2xl font-bold">{item.title}</h3>
                  <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full">
                    <Calendar size={14} />
                    {item.period}
                  </div>
                </div>
                <h4 className="text-primary font-semibold mb-3 text-lg">{item.institution}</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}