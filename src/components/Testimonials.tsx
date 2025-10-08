import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { containerVariants, fadeUpVariants, scaleUpVariants, scrollAnimationProps } from '../utils/animations';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      content: 'Working with this team was an absolute pleasure. They delivered beyond our expectations and the results speak for themselves.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Founder, GrowthLabs',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      content: 'The attention to detail and commitment to quality is unmatched. Our conversion rate increased by 40% after the redesign.',
      rating: 5
    },
    {
      name: 'Emma Rodriguez',
      role: 'Marketing Director, Bloom',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400',
      content: 'Not only did they create a beautiful design, but they also provided strategic insights that transformed our business.',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-32 px-6 bg-gradient-to-b from-[#0f0f0f] to-transparent">
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
            Testimonials
          </motion.span>
          <motion.h2
            className="text-5xl md:text-6xl font-light mt-4 mb-6"
            variants={fadeUpVariants}
          >
            What Clients <span className="text-white/60">Say</span>
          </motion.h2>
          <motion.p
            className="text-lg text-white/70 max-w-2xl mx-auto"
            variants={fadeUpVariants}
          >
            Don't just take my word for it—hear from some of the amazing people I've worked with
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-6"
          {...scrollAnimationProps}
          variants={containerVariants}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="p-8 bg-[#111111] border border-white/10 rounded-3xl hover:border-white/20 transition-all"
              variants={scaleUpVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-white text-white" />
                ))}
              </div>

              <p className="text-white/80 leading-relaxed mb-8 italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-medium">{testimonial.name}</h4>
                  <p className="text-sm text-white/50">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
