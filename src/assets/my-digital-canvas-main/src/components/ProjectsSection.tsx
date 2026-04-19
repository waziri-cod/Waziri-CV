import { motion, useInView } from "framer-motion";
import { useRef, useState, useMemo } from "react";
import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack online store with payment integration, user authentication, and an admin dashboard for product management.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Portfolio Website",
    description: "A responsive personal portfolio showcasing projects, skills, and professional experience with modern animations.",
    technologies: ["HTML", "CSS", "JavaScript", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management tool with real-time updates, drag-and-drop functionality, and team workspaces.",
    technologies: ["React", "Firebase", "TypeScript"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Blog Platform",
    description: "A content management system with markdown support, SEO optimization, and a clean reading experience.",
    technologies: ["Next.js", "PostgreSQL", "Prisma"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedFilter, setSelectedFilter] = useState("All");

  const allTechnologies = useMemo(() => {
    const techSet = new Set<string>();
    projects.forEach(project => project.technologies.forEach(tech => techSet.add(tech)));
    return Array.from(techSet).sort();
  }, []);

  const filteredProjects = useMemo(() => {
    if (selectedFilter === "All") return projects;
    return projects.filter(project => project.technologies.includes(selectedFilter));
  }, [selectedFilter]);

  return (
    <section id="projects" className="section-padding bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-2">My Work</p>
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle mx-auto mt-4">
            A selection of projects that showcase my technical capabilities
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <button
            onClick={() => setSelectedFilter("All")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              selectedFilter === "All"
                ? "bg-gold text-accent-foreground shadow-lg"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            All
          </button>
          {allTechnologies.map((tech) => (
            <button
              key={tech}
              onClick={() => setSelectedFilter(tech)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedFilter === tech
                  ? "bg-gold text-accent-foreground shadow-lg"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {tech}
            </button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {filteredProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="glass-card p-6 md:p-8 group hover:border-accent/50 transition-all hover:shadow-xl"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Folder size={24} className="text-accent" />
                </div>
                <div className="flex gap-3">
                  <a href={project.githubUrl} className="text-muted-foreground hover:text-accent transition-colors">
                    <Github size={20} />
                  </a>
                  <a href={project.liveUrl} className="text-muted-foreground hover:text-accent transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <h3 className="font-display text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
