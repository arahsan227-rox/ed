import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Zap, Star } from 'lucide-react';

const FadeIn = ({ children, delay = 0, className = '' }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>
      {children}
    </motion.div>
  );
};

const plans = [
  {
    name: 'Starter',
    badge: 'Custom Project Focus',
    desc: 'Perfect for small businesses and startups needing a strong, high-performance digital presence.',
    features: [
      'Up to 10 pages design & dev', 'Mobile-responsive layout', 'Foundational SEO setup', 'Contact form integrations',
      'Google Analytics tracking', '1 month post-launch support', 'Easy-to-use CMS integration',
    ],
    cta: 'Get a Tailored Quote',
    color: 'blue',
    popular: false,
  },
  {
    name: 'Growth',
    badge: 'Web App & Automation',
    desc: 'For businesses ready to scale with custom applications, process automation, and third-party integrations.',
    features: [
      'Everything in Starter', 'Custom web application dev', 'CRM or email automation systems',
      'Secure payment gateway APIs', 'Custom administration dashboards', 'Internal API development', '3 months post-launch support',
      'Advanced performance optimization',
    ],
    cta: 'Discuss Your Goals',
    color: 'purple',
    popular: true,
  },
  {
    name: 'Enterprise',
    badge: 'Dedicated Engineering',
    desc: 'For large organizations requiring mission-critical, highly scalable, and custom enterprise software.',
    features: [
      'Everything in Growth', 'Custom ERP / CRM systems', 'Scalable microservices architecture',
      'Dedicated engineering team', 'SLA-backed priority support', 'Cloud infrastructure management',
      'Rigorous security audits & compliance', 'Priority 24/7 emergency support line',
    ],
    cta: 'Book Discovery Call',
    color: 'cyan',
    popular: false,
  },
];

const colorMap = {
  blue: { border: 'border-blue-200', text: 'text-blue-700', bg: 'bg-blue-50', icon: 'text-blue-500' },
  purple: { border: 'border-indigo-300', text: 'text-indigo-700', bg: 'bg-indigo-50', icon: 'text-indigo-500' },
  cyan: { border: 'border-emerald-200', text: 'text-emerald-700', bg: 'bg-emerald-50', icon: 'text-emerald-500' },
};

export default function Pricing() {
  return (
    <>
      <section className="pt-36 pb-16 px-6 text-center">
        <FadeIn>
          <div className="section-tag mb-6 mx-auto w-fit">Flexible Solutions</div>
          <h1 className="text-4xl md:text-5xl font-black font-heading mb-6">
            Tailored <span className="gradient-text">Engagement Models</span>
          </h1>
          <p className="text-muted text-xl max-w-2xl mx-auto">
            We offer transparent, project-based estimates and dedicated sprints built to align with your business objectives.
          </p>
        </FadeIn>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {plans.map((plan, i) => {
              const c = colorMap[plan.color];
              return (
                <FadeIn key={plan.name} delay={i * 0.1}>
                  <div className={`card p-8 flex flex-col h-full relative ${plan.popular ? 'border-2 border-primary shadow-xl scale-105 z-10' : 'border border-gray-200'}`}>
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <span className="px-4 py-1.5 bg-primary text-white text-xs font-bold rounded-full flex items-center gap-1.5 shadow-md">
                          <Star className="w-3.5 h-3.5 fill-current" /> MOST POPULAR
                        </span>
                      </div>
                    )}
                    <div className="mb-6">
                      <h3 className={`text-2xl font-bold font-heading mb-3 text-heading`}>{plan.name}</h3>
                      <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-4 ${c.bg} ${c.text} border ${c.border}`}>
                        {plan.badge}
                      </span>
                      <p className="text-muted text-sm leading-relaxed">{plan.desc}</p>
                    </div>
                    <ul className="space-y-3 mb-8 flex-grow border-t border-gray-100 pt-6">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-sm text-body">
                          <CheckCircle2 className={`w-4 h-4 ${c.icon} flex-shrink-0 mt-0.5`} />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      className={`${plan.popular ? 'btn-primary' : 'btn-secondary'} text-center justify-center w-full`}
                    >
                      {plan.cta} <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </FadeIn>
              );
            })}
          </div>

          {/* Guarantees */}
          <FadeIn>
            <div className="card p-10 text-center border-l-4 border-l-indigo-500 section-alt">
              <div className="w-16 h-16 rounded-2xl bg-indigo-100 flex items-center justify-center mx-auto mb-5">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold font-heading mb-3 text-heading">Our Guarantee</h3>
              <p className="text-muted max-w-xl mx-auto leading-relaxed">
                We offer a 30-day quality guarantee. If your project doesn't meet the agreed specifications, we'll iterate until it does — at no extra cost.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
