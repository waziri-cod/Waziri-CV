import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Eye, Download, X } from 'lucide-react';

const awards = [
  {
    title: 'Viread Certificate Award ',
    issuer: 'Kenyatta and UDSM University',
    description: 'Awarded for exceptional academic achievement in visual studies.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/b5a66526-cd45-4698-96ad-959b134d33d0/certificate-placeholder-2ec893d9-1771491324492.webp',
  },
  {
    title: 'UDSM Tax Club Membership Award',
    issuer: 'UDSM Tax Club',
    description: 'Recognized as active member of tax club',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/b5a66526-cd45-4698-96ad-959b134d33d0/certificate-placeholder-2ec893d9-1771491324492.webp',
  },
  {
    title: 'AI for Software Engineering',
    issuer: 'PLP Academy',
    description: 'Professional certification for mastering modern web technologies.',
    image: 'src/assets/PLP cert.PNG',
  },
];

export function Awards() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="awards" className="py-24 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Awards & Certificates</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-2xl border p-6 flex flex-col items-center text-center group shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative mb-6 w-full aspect-[4/3] overflow-hidden rounded-xl bg-muted">
                <img
                  src={award.image}
                  alt={award.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <button
                    onClick={() => setSelectedImage(award.image)}
                    className="p-3 bg-background rounded-full shadow-lg hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Eye size={20} />
                  </button>
                  <button className="p-3 bg-background rounded-full shadow-lg hover:bg-primary hover:text-primary-foreground transition-all">
                    <Download size={20} />
                  </button>
                </div>
              </div>
              <Award className="text-primary mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">{award.title}</h3>
              <p className="text-primary font-medium text-sm mb-4">{award.issuer}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {award.description}
              </p>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-4xl w-full bg-background rounded-2xl overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 p-2 bg-background/50 hover:bg-background rounded-full transition-all z-10"
                >
                  <X size={24} />
                </button>
                <img src={selectedImage} alt="Certificate Large" className="w-full h-auto" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}