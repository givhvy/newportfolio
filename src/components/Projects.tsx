import { ExternalLink, Github, Layers, Sparkles, Rocket, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { containerVariants, fadeUpVariants, scaleUpVariants, scrollAnimationProps } from '../utils/animations';

export default function Projects() {
  const projects = [
    {
      title: 'Coming Soon',
      category: 'Web Development',
      description: 'Exciting projects are in the works. Stay tuned for updates!',
      icon: Layers,
      tags: ['React', 'Node.js', 'Stripe'],
      link: '#'
    },
    {
      title: 'Coming Soon',
      category: 'Mobile App',
      description: 'Exciting projects are in the works. Stay tuned for updates!',
      icon: Sparkles,
      tags: ['React Native', 'Firebase', 'AI'],
      link: '#'
    },
    {
      title: 'Coming Soon',
      category: 'Brand Identity',
      description: 'Exciting projects are in the works. Stay tuned for updates!',
      icon: Rocket,
      tags: ['Branding', 'UI/UX', 'Web'],
      link: '#'
    },
    {
      title: 'Coming Soon',
      category: 'Product Design',
      description: 'Exciting projects are in the works. Stay tuned for updates!',
      icon: Zap,
      tags: ['Dashboard', 'Analytics', 'B2B'],
      link: '#'
    }
  ];

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-20"
          {...scrollAnimationProps}
          variants={containerVariants}
        >
          <motion.span
            className="text-sm uppercase tracking-wider text-white/50"
            variants={fadeUpVariants}
          >
            Portfolio
          </motion.span>
          <motion.h2
            className="text-5xl md:text-6xl font-light mt-4 mb-6"
            variants={fadeUpVariants}
          >
            Featured <span className="text-white/60">Work</span>
          </motion.h2>
          <motion.p
            className="text-lg text-white/70 max-w-2xl mx-auto"
            variants={fadeUpVariants}
          >
            A selection of recent projects that showcase my skills and passion
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          {...scrollAnimationProps}
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative bg-[#111111] border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-300"
              variants={scaleUpVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] flex items-center justify-center">
                <project.icon className="w-24 h-24 text-white/20 group-hover:text-white/30 group-hover:scale-110 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] to-transparent opacity-60"></div>
              </div>

              <div className="p-8">
                <span className="text-xs uppercase tracking-wider text-white/40">{project.category}</span>
                <h3 className="text-3xl font-light mt-2 mb-3">{project.title}</h3>
                <p className="text-white/60 leading-relaxed mb-6">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <a
                    href={project.link}
                    className="flex items-center gap-2 text-sm hover:text-white/60 transition-colors"
                  >
                    <span>View Project</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href={project.link}
                    className="flex items-center gap-2 text-sm hover:text-white/60 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
