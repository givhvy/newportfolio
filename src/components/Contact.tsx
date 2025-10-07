import { Mail, Linkedin, Github, Twitter } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-sm uppercase tracking-wider text-white/50">Get in Touch</span>
          <h2 className="text-5xl md:text-7xl font-light mt-4 mb-6 leading-tight">
            Let's Create Something <br />
            <span className="text-white/60">Amazing Together</span>
          </h2>
          <p className="text-lg text-white/70 mb-12 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Send me a message and let's discuss how we can work together.
          </p>

          <a
            href="mailto:contact@huy.global"
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black rounded-full text-lg font-medium hover:bg-white/90 transition-all hover:scale-105"
          >
            <Mail className="w-5 h-5" />
            <span>contact@huy.global</span>
          </a>

          <div className="mt-16 flex items-center justify-center gap-6">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-white/20 transition-all"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-white/20 transition-all"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-white/20 transition-all"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
