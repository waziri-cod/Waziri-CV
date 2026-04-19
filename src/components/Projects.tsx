import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'TYE- Tanzania Youth Empowerment platform',
    description: 'TYE” often means programs or platforms that support youth in business, innovation, and startups in Tanzania.',
    image: 'src/assets/TYE.PNG',
    tags: ['React', 'TypeScript', 'Tailwind', 'Chart.js'],
    live: '',
    github: 'https://github.com/waziri-cod/YEF-App.git',
  },
  {
    title: 'BongoFlix website',
    description: 'BongoFlix is a digital platform for watching Tanzanian movies and shows online.',
    image: 'src/assets/bongoflix.PNG',
    tags: ['React Native', 'Firebase', 'Framer Motion'],
    live: 'https://lovable.dev/projects/96f13c68-0cde-416e-9cab-f455b76a48f1',
    github: 'https://github.com/waziri-cod/bongostream-hub.git',
  },
  {
    title: 'Tz Estate ',
    description: 'A digital or physical system for buying, selling, or renting land, houses, and apartments in Tanzania.',
    image: 'src/assets/Tz ESTATE.PNG',
    tags: ['Next.js', 'Stripe', 'Supabase', 'Tailwind'],
    live: 'https://8192877a.mydala.app',
    github: 'https://github.com/waziri-cod/jirani-market.git',
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Selected Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto text-lg">
            A showcase of my technical projects where I've applied my skills to solve practical problems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-card rounded-2xl border shadow-sm overflow-hidden flex flex-col group transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-muted text-xs font-semibold rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground py-2 rounded-lg font-semibold text-sm hover:opacity-90 transition-all"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border rounded-lg hover:bg-muted transition-colors"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}