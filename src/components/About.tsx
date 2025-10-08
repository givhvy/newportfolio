import { Code, Palette, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { containerVariants, fadeUpVariants, slideRightVariants, scrollAnimationProps } from '../utils/animations';

export default function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="space-y-8"
            {...scrollAnimationProps}
            variants={containerVariants}
          >
            <motion.div className="inline-block" variants={fadeUpVariants}>
              <span className="text-sm uppercase tracking-wider text-white/50">About Me</span>
            </motion.div>
            <motion.h2
              className="text-5xl md:text-6xl font-light leading-tight"
              variants={fadeUpVariants}
            >
              Crafting Digital <br />
              <span className="text-white/60">Experiences</span>
            </motion.h2>
            <motion.p
              className="text-lg text-white/70 leading-relaxed"
              variants={fadeUpVariants}
            >
              With over 5 years of experience in design and development, I've helped dozens of
              clients bring their visions to life. My approach combines aesthetic excellence with
              technical precision to create experiences that users love.
            </motion.p>
            <motion.p
              className="text-lg text-white/70 leading-relaxed"
              variants={fadeUpVariants}
            >
              I believe great design is invisible—it simply works. Whether it's a website, app,
              or brand identity, I focus on solving real problems while maintaining beauty and elegance.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid gap-6"
            {...scrollAnimationProps}
            variants={containerVariants}
          >
            <motion.div
              className="p-8 bg-[#111111] border border-white/10 rounded-3xl hover:border-white/20 transition-all group"
              variants={slideRightVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
                <Code className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-light mb-3">Development</h3>
              <p className="text-white/60 leading-relaxed">
                Modern web technologies including React, TypeScript, and Node.js to build fast, scalable applications.
              </p>
            </motion.div>

            <motion.div
              className="p-8 bg-[#111111] border border-white/10 rounded-3xl hover:border-white/20 transition-all group"
              variants={slideRightVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
                <Palette className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-light mb-3">Design</h3>
              <p className="text-white/60 leading-relaxed">
                User-centered design with a focus on aesthetics, usability, and conversion optimization.
              </p>
            </motion.div>

            <motion.div
              className="p-8 bg-[#111111] border border-white/10 rounded-3xl hover:border-white/20 transition-all group"
              variants={slideRightVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-light mb-3">Strategy</h3>
              <p className="text-white/60 leading-relaxed">
                Data-driven approach to help businesses achieve their goals through thoughtful digital strategy.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
