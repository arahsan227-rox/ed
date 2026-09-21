import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

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

const tabs = [
  {
    id: 'web', icon: '🌐', label: 'Web Development', color: 'indigo',
    hero: 'High-Performance Web Solutions',
    desc: 'We architect and build web experiences that are fast, scalable, beautiful, and conversion-optimized.',
    services: [
      { title: 'Corporate Websites', desc: 'Premium brand presence that builds credibility and converts visitors.' },
      { title: 'SaaS Platforms', desc: 'Full-featured software-as-a-service with auth, billing, and multi-tenancy.' },
      { title: 'E-commerce Stores', desc: 'High-converting online stores with seamless checkout experiences.' },
      { title: 'Web Applications', desc: 'Complex data-driven apps with real-time features and robust APIs.' },
      { title: 'Admin Dashboards', desc: 'Beautiful analytics and management interfaces for your team.' },
      { title: 'Landing Pages', desc: 'Conversion-focused pages designed to generate leads and signups.' },
    ],
    stack: ['React', 'Next.js', 'Node.js', 'TypeScript', 'MongoDB', 'PostgreSQL', 'AWS', 'Vercel'],
  },
  {
    id: 'automation', icon: '🤖', label: 'Business Automation', color: 'emerald',
    hero: 'Eliminate Manual Work Forever',
    desc: 'Intelligent automation that handles your repetitive tasks, freeing your team to focus on what matters.',
    services: [
      { title: 'CRM Automation', desc: 'Automate lead capture, nurturing, follow-ups and deal tracking.' },
      { title: 'Lead Management', desc: 'Multi-channel lead generation with automated scoring and routing.' },
      { title: 'Email Marketing Automation', desc: 'Personalized drip campaigns triggered by user behavior.' },
      { title: 'AI Chatbots', desc: 'Conversational AI agents that qualify leads and handle support 24/7.' },
      { title: 'WhatsApp Automation', desc: 'Automated messaging workflows on WhatsApp Business API.' },
      { title: 'API Integration', desc: 'Connect your tools — CRMs, ERPs, payment gateways — seamlessly.' },
    ],
    stack: ['Zapier', 'Make.com', 'OpenAI', 'Twilio', 'HubSpot API', 'Webhooks', 'Node.js', 'Python'],
  },
  {
    id: 'software', icon: '💻', label: 'Software Development', color: 'purple',
    hero: 'Enterprise-Grade Custom Software',
    desc: 'We design and build mission-critical software that powers your entire business operations.',
    services: [
      { title: 'ERP Systems', desc: 'End-to-end resource planning for finance, HR, inventory, and more.' },
      { title: 'HR Management Systems', desc: 'Recruitment, onboarding, payroll, and performance in one platform.' },
      { title: 'Inventory Management', desc: 'Real-time stock tracking, purchase orders, and warehouse management.' },
      { title: 'Healthcare Systems', desc: 'HIPAA-compliant patient records, billing, and appointment systems.' },
      { title: 'Education Platforms', desc: 'LMS, student portals, and e-learning with progress tracking.' },
      { title: 'Fintech Applications', desc: 'Secure payment, lending, and financial analytics platforms.' },
    ],
    stack: ['React', 'NestJS', 'PostgreSQL', 'Prisma', 'Redis', 'Docker', 'AWS', 'Kubernetes'],
  },
  {
    id: 'seo', icon: '📈', label: 'SEO Services', color: 'orange',
    hero: 'Data-Driven SEO Strategies',
    desc: 'Dominate search results and drive organic growth with our comprehensive SEO services.',
    services: [
      { title: 'Technical SEO Audits', desc: 'Deep dive into website structure, speed, and indexing issues.' },
      { title: 'Keyword Strategy', desc: 'Identifying high-value, high-intent keywords for your industry.' },
      { title: 'On-Page Optimization', desc: 'Optimizing content, meta tags, and internal linking structures.' },
      { title: 'Link Building', desc: 'Acquiring high-quality backlinks to boost domain authority.' },
      { title: 'Local SEO', desc: 'Optimizing Google Business Profile and local directory listings.' },
      { title: 'E-Commerce SEO', desc: 'Product page optimization and schema markup for online stores.' },
    ],
    stack: ['Ahrefs', 'SEMrush', 'Google Analytics', 'Search Console', 'Screaming Frog', 'Moz'],
  },
];

const colorMap = {
  indigo: { bg: 'bg-indigo-50', border: 'border-indigo-200', text: 'text-indigo-600', tab: 'bg-indigo-50 border-indigo-300 text-indigo-700', pill: 'bg-indigo-50 border-indigo-200 text-indigo-600' },
  emerald: { bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-600', tab: 'bg-emerald-50 border-emerald-300 text-emerald-700', pill: 'bg-emerald-50 border-emerald-200 text-emerald-600' },
  purple: { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-600', tab: 'bg-purple-50 border-purple-300 text-purple-700', pill: 'bg-purple-50 border-purple-200 text-purple-600' },
  orange: { bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-600', tab: 'bg-orange-50 border-orange-300 text-orange-700', pill: 'bg-orange-50 border-orange-200 text-orange-600' },
};

export default function Services({ tab: initialTab }) {
  const [active, setActive] = useState(
    tabs.findIndex(t => t.id === initialTab) >= 0 ? tabs.findIndex(t => t.id === initialTab) : 0
  );
  const t = tabs[active];
  const c = colorMap[t.color];

  return (
    <>
      <section className="pt-36 pb-16 px-6 text-center">
        <FadeIn>
          <div className="section-tag mb-6 mx-auto w-fit">Our Services</div>
          <h1 className="text-4xl md:text-5xl font-black font-heading mb-6">
            Full-Spectrum <span className="gradient-text">Digital Solutions</span>
          </h1>
          <p className="text-muted text-xl max-w-2xl mx-auto">
            Three core pillars. One mission: accelerate your business through technology.
          </p>
        </FadeIn>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="flex flex-col sm:flex-row gap-3 mb-12 p-1.5 bg-gray-50 border border-gray-200 rounded-2xl max-w-2xl mx-auto">
              {tabs.map((tab, i) => {
                const cc = colorMap[tab.color];
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActive(i)}
                    className={`flex-1 flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl font-semibold text-sm transition-all ${
                      active === i ? `${cc.tab} border shadow-sm` : 'text-muted hover:text-heading'
                    }`}
                  >
                    <span className="text-xl leading-none">{tab.icon}</span>
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </FadeIn>

          <motion.div key={active} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
            <div className={`card p-10 mb-8 border ${c.border}`}>
              <div className="flex items-start gap-6">
                <div className={`w-16 h-16 rounded-2xl ${c.bg} flex items-center justify-center flex-shrink-0 text-3xl`}>
                  {t.icon}
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold font-heading mb-3">{t.hero}</h2>
                  <p className="text-muted text-lg leading-relaxed max-w-2xl">{t.desc}</p>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
              {t.services.map((s) => (
                <div key={s.title} className={`card p-6 border ${c.border}`}>
                  <div className="flex items-start gap-3 mb-3">
                    <CheckCircle2 className={`w-5 h-5 ${c.text} flex-shrink-0 mt-0.5`} />
                    <h4 className="font-bold text-heading">{s.title}</h4>
                  </div>
                  <p className="text-muted text-sm leading-relaxed pl-8">{s.desc}</p>
                </div>
              ))}
            </div>

            <div className="card p-8">
              <h3 className="font-bold text-lg mb-5 flex items-center gap-2 text-heading">
                🛠️ Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {t.stack.map((tech) => (
                  <span key={tech} className={`px-3.5 py-1.5 ${c.pill} border text-sm rounded-xl font-medium`}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <FadeIn className="text-center mt-12">
            <p className="text-muted mb-5 text-lg">Ready to get started?</p>
            <Link to="/contact" className="btn-primary">
              Get Free Consultation <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
