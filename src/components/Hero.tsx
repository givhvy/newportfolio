import { ArrowRight, ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { containerVariants, fadeUpVariants, fadeInVariants, blurFadeVariants } from '../utils/animations';

interface HeroProps {
  scrollToSection: (id: string) => void;
}

export default function Hero({ scrollToSection }: HeroProps) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <img
          src="https://res.cloudinary.com/dxqrmxll4/image/upload/v1759865286/z7092697499138_325ef6e26c355a465ede8d0740f592c5_vcploz.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/70 via-[#0a0a0a]/50 to-[#0a0a0a]"></div>
      </motion.div>

      <div className="relative z-10 max-w-7xl w-full">
        <motion.div
          className="flex flex-col items-center text-center space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="space-y-4" variants={blurFadeVariants}>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tight">
              Huy Phạm
              <br />
            </h1>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed"
            variants={fadeUpVariants}
          >
            I'm a versatile designer and developer specializing in creating beautiful,
            functional digital experiences that help businesses grow. Let's build something great together.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center gap-4 pt-6"
            variants={fadeUpVariants}
          >
            <motion.button
              onClick={() => scrollToSection('projects')}
              className="group px-8 py-4 bg-gradient-to-b from-[#787878] via-[#0a0a0a] to-[#0a0a0a] rounded-full hover:from-[#888888] transition-all duration-300 flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-white text-black rounded-full hover:bg-white/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Get in Touch
            </motion.button>
          </motion.div>

          <motion.button
            onClick={() => scrollToSection('about')}
            className="mt-20 p-3 rounded-full border border-white/10 hover:bg-white/5 transition-all"
            variants={fadeInVariants}
            animate={{ y: [0, 10, 0] }}
            transition={{
              y: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            whileHover={{ scale: 1.1 }}
          >
            <ArrowDown className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
