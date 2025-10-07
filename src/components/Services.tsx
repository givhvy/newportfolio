import { Briefcase, Smartphone, Globe, Package } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Globe,
      title: 'Web Design',
      description: 'Beautiful, responsive websites that captivate your audience and drive results.',
      features: ['Responsive Design', 'SEO Optimization', 'Performance Tuning']
    },
    {
      icon: Smartphone,
      title: 'App Development',
      description: 'Native and cross-platform mobile applications built for performance and scalability.',
      features: ['iOS & Android', 'React Native', 'Progressive Web Apps']
    },
    {
      icon: Package,
      title: 'Brand Identity',
      description: 'Cohesive brand systems that tell your story and resonate with your audience.',
      features: ['Logo Design', 'Style Guides', 'Marketing Materials']
    },
    {
      icon: Briefcase,
      title: 'Consulting',
      description: 'Strategic guidance to help you make informed decisions about your digital presence.',
      features: ['UX Audits', 'Tech Stack', 'Growth Strategy']
    }
  ];

  return (
    <section id="services" className="py-32 px-6 bg-gradient-to-b from-transparent to-[#0f0f0f]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-sm uppercase tracking-wider text-white/50">Services</span>
          <h2 className="text-5xl md:text-6xl font-light mt-4 mb-6">
            What I <span className="text-white/60">Offer</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your unique needs and goals
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-10 bg-[#111111] border border-white/10 rounded-3xl hover:bg-[#161616] hover:border-white/20 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/20 group-hover:scale-110 transition-all">
                <service.icon className="w-7 h-7" />
              </div>

              <h3 className="text-3xl font-light mb-4">{service.title}</h3>
              <p className="text-white/60 leading-relaxed mb-6">{service.description}</p>

              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-white/50">
                    <div className="w-1.5 h-1.5 bg-white/50 rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
