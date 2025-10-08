import { Mail, Linkedin, Github, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';
import { containerVariants, fadeUpVariants, blurFadeVariants, scrollAnimationProps } from '../utils/animations';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          {...scrollAnimationProps}
          variants={containerVariants}
        >
          <motion.span
            className="text-sm uppercase tracking-wider text-white/50"
            variants={fadeUpVariants}
          >
            Get in Touch
          </motion.span>
          <motion.h2
            className="text-5xl md:text-7xl font-light mt-4 mb-6 leading-tight"
            variants={blurFadeVariants}
          >
            Let's Create Something <br />
            <span className="text-white/60">Amazing Together</span>
          </motion.h2>
          <motion.p
            className="text-lg text-white/70 mb-12 max-w-2xl mx-auto"
            variants={fadeUpVariants}
          >
            Have a project in mind? I'd love to hear about it. Send me a message and let's discuss how we can work together.
          </motion.p>

          <motion.a
            href="mailto:contact@huy.global"
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black rounded-full text-lg font-medium hover:bg-white/90 transition-all"
            variants={fadeUpVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Mail className="w-5 h-5" />
            <span>contact@huy.global</span>
          </motion.a>

          <motion.div
            className="mt-16 flex items-center justify-center gap-6"
            variants={fadeUpVariants}
          >
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-white/20 transition-all"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-white/20 transition-all"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-white/20 transition-all"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Twitter className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
