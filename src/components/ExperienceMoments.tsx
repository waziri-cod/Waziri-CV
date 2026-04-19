import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Eye, Play, X } from 'lucide-react';

const moments = [
  {
    title: 'Exhibition Pitch',
    location: 'Tanzania Nane-Nane natinion exhibiton 2024',
    description: 'Showcase and provide awareness about corruption to the field.',
    type: 'video',
    thumbnail: 'src/assets/IMG_0778.JPG.jpeg',
    media: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    date: 'Aug 2024',
  },
  {
    title: 'Team Workshop',
    location: 'TAKUKURU Pavilion',
    description: 'Collaborating on providing awareness to the guests who visit us.',
    type: 'photo',
    thumbnail: 'src/assets/IMG_0786.JPG.jpeg',
    media: 'src/assets/IMG_0786.JPG.jpeg',
    date: 'Aug 2024',
  },
  {
    title: 'Nane-Nane Exhibition',
    location: 'TAKUKURU Pavilion',
    description: 'Celebrating a top-performance with our mentorswith our mentor and supervisor Mr Victor Malecha and classmates.',
    type: 'photo',
    thumbnail: 'src/assets/IMG_0782.JPG.jpeg',
    media: 'src/assets/IMG_0782.JPG.jpeg',
    date: 'Aug 2024',
  },
  {
    title: 'Jakaya Exhibition Pitch',
    location: 'Tanzania Jakaya Kikwete Exhibition 2024',
    description: 'outstanding to provid education and awareness to visitors.',
    type: 'video',
    thumbnail: 'src/assets/IMG_0391.JPG.jpeg',
    media: 'src/assets/IMG_0391.JPG.jpeg',
    date: 'Sep 2024',
  },
  {
    title: 'Team Workshop',
    location: 'Tech Institute of Excellence',
    description: 'Collaboratio between DCEA and PCCB.',
    type: 'photo',
    thumbnail: 'src/assets/IMG_0496.JPG.jpeg',
    media: 'src/assets/IMG_0496.JPG.jpeg',
    date: 'Sep 2024',
  },
  {
    title: 'Exhibittion progress',
    location: 'jakaya Pavalion',
    description: 'Me on dutie to provide awareness to our guests.',
    type: 'photo',
    thumbnail: 'src/assets/IMG_0546.JPG.jpeg',
    media: 'src/assets/IMG_0546.JPG.jpeg',
    date: 'Sep 2024',
  },
  {
    title: 'Exhibition Pitch',
    location: 'jakaya Kikwete Exhibition',
    description: 'Madam Idda Siriwa on her duties.',
    type: 'video',
    thumbnail: 'src/assets/IMG_0570.JPG.jpeg',
    media: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    date: 'Sep 2024',
  },
  {
    title: 'Team Workshop',
    location: 'jakaya Kikwete Exhibition',
    description: ' Communicatio Oficcers(COs) Collaborating each other .',
    type: 'photo',
    thumbnail: 'src/assets/IMG_0567.JPG.jpeg',
    media: 'src/assets/IMG_0567.JPG.jpeg',
    date: 'Sep 2024',
  },
  {
    title: 'Exhibittion progress',
    location: 'jakaya Kikwete Exhibition',
    description: 'Celebrating a top-performance award with mentors and classmates.',
    type: 'photo',
    thumbnail: 'src/assets/IMG_0556.JPG.jpeg',
    media: 'src/assets/IMG_0556.JPG.jpeg',
    date: 'Sep 2024',
  },
  {
    title: 'Exhibition Pitch',
    location: 'jakaya Kikwete Exhibition',
    description: 'Presenting our privacy-first social media solution to judges and peers.',
    type: 'video',
    thumbnail: 'src/assets/IMG_0413.JPG.jpeg',
    media: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    date: 'Sep 2024',
  },
  {
    title: 'Team Workshop',
    location: 'jakaya Kikwete Exhibition',
    description: 'Collaborating on prototypes, user flows, and design direction.',
    type: 'photo',
    thumbnail: 'src/assets/IMG_0423.JPG.jpeg',
    media: 'src/assets/IMG_0423.JPG.jpeg',
    date: 'Sep 2024',
  },
  {
    title: 'Exhibittion progress',
    location: 'jakaya Kikwete Exhibition',
    description: 'Celebrating a top-performance award with mentors and classmates.',
    type: 'photo',
    thumbnail: 'src/assets/IMG_0514.JPG.jpeg',
    media: 'src/assets/IMG_0514.JPG.jpeg',
    date: 'May 2024',
  },
  {
    title: 'Auditory Pitch',
    location: 'Radio Mwangaza Dodoma',
    description: 'Presenting our knowledge and awareness about Corraption and its effects.',
    type: 'video',
    thumbnail: 'src/assets/IMG_0655.JPG.jpeg',
    media: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    date: 'Aug-Oct 2024',
  },
  {
    title: 'Panelist Pitch',
    location: 'UDSM Events',
    description: 'Youth platforms events.',
    type: 'photo',
    thumbnail: 'src/assets/xxxx.jpg',
    media: 'src/assets/xxxx.jpg',
    date: '2025',
  },
  {
    title: 'Presentation Pitch',
    location: 'Radio Uzima Dodoma',
    description: 'OnAir platform to provide education about Corruption and its effects .',
    type: 'photo',
    thumbnail: 'src/assets/IMG_0692.JPG.jpeg',
    media: 'src/assets/IMG_0655.JPG.jpeg',
    date: 'Aug-Oct 2024',
  },
];

export function ExperienceMoments() {
  const [selectedMoment, setSelectedMoment] = useState<typeof moments[number] | null>(null);

  return (
    <section id="experience" className="py-24 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Experience Moments</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            A gallery of photos and videos that capture key field experiences.
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {moments.map((moment, index) => (
            <motion.div
              key={moment.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-3xl border p-6 flex flex-col items-center text-center group shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative mb-6 w-full aspect-[4/3] overflow-hidden rounded-3xl bg-muted">
                <img
                  src={moment.thumbnail}
                  alt={moment.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <button
                    onClick={() => setSelectedMoment(moment)}
                    className="p-3 bg-background rounded-full shadow-lg hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    {moment.type === 'video' ? <Play size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>
              <Camera className="text-primary mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">{moment.title}</h3>
              <p className="text-primary font-medium text-sm mb-2">{moment.location}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {moment.description}
              </p>
              <span className="text-xs text-muted-foreground mt-4 block">{moment.date}</span>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedMoment && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm"
              onClick={() => setSelectedMoment(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="relative max-w-4xl w-full bg-background rounded-3xl overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedMoment(null)}
                  className="absolute top-4 right-4 p-2 bg-background/50 hover:bg-background rounded-full transition-all z-10"
                >
                  <X size={24} />
                </button>
                {selectedMoment.type === 'video' ? (
                  <video
                    src={selectedMoment.media}
                    controls
                    className="w-full h-auto bg-black"
                  />
                ) : (
                  <img
                    src={selectedMoment.media}
                    alt={selectedMoment.title}
                    className="w-full h-auto object-contain"
                  />
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
