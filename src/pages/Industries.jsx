
import { useRef, useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Check,
  ChevronRight,
  Layers3,
  Sparkles,
  X,
} from 'lucide-react';

const FadeIn = ({
  children,
  delay = 0,
  className = '',
}) => {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: '-70px',
  });

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: 28,
      }}
      animate={
        inView
          ? {
              opacity: 1,
              y: 0,
            }
          : {}
      }
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const industries = [
  {
    name: 'Healthcare',
    emoji: '🏥',
    short:
      'Digital systems designed around patients, providers, and healthcare operations.',
    color: 'from-emerald-500 via-teal-500 to-cyan-500',
    glow: 'bg-emerald-500',
    light: 'bg-emerald-50',
    text: 'text-emerald-600',
    border: 'border-emerald-100',
    solutions: [
      'Patient Records Systems',
      'Telemedicine Platforms',
      'HIPAA-compliant Software',
      'Hospital Management',
    ],
    technologies: [
      'React',
      'Node.js',
      'PostgreSQL',
      'AWS',
      'AI Integrations',
    ],
    metrics: [
      { value: '24/7', label: 'Digital Access' },
      { value: '99.9%', label: 'System Uptime' },
    ],
  },

  {
    name: 'Finance',
    emoji: '💳',
    short:
      'Secure financial products, dashboards, integrations, and data-driven platforms.',
    color: 'from-blue-500 via-indigo-500 to-violet-600',
    glow: 'bg-blue-500',
    light: 'bg-blue-50',
    text: 'text-blue-600',
    border: 'border-blue-100',
    solutions: [
      'Financial Dashboards',
      'Fintech Applications',
      'Payment Gateways',
      'Risk Analytics',
    ],
    technologies: [
      'Next.js',
      'Node.js',
      'PostgreSQL',
      'Stripe',
      'API Integrations',
    ],
    metrics: [
      { value: '100%', label: 'Secure APIs' },
      { value: 'Real-time', label: 'Analytics' },
    ],
  },

  {
    name: 'Education',
    emoji: '🎓',
    short:
      'Modern learning platforms that make education more accessible and measurable.',
    color: 'from-violet-500 via-purple-500 to-fuchsia-500',
    glow: 'bg-purple-500',
    light: 'bg-purple-50',
    text: 'text-purple-600',
    border: 'border-purple-100',
    solutions: [
      'LMS Platforms',
      'Student Portals',
      'E-learning Systems',
      'Progress Tracking',
    ],
    technologies: [
      'React',
      'Next.js',
      'Node.js',
      'PostgreSQL',
      'Cloud Infrastructure',
    ],
    metrics: [
      { value: '24/7', label: 'Learning Access' },
      { value: 'Multi-role', label: 'Platforms' },
    ],
  },

  {
    name: 'Real Estate',
    emoji: '🏢',
    short:
      'Connected property systems for brokers, developers, landlords, and tenants.',
    color: 'from-orange-500 via-amber-500 to-yellow-400',
    glow: 'bg-orange-500',
    light: 'bg-orange-50',
    text: 'text-orange-600',
    border: 'border-orange-100',
    solutions: [
      'Property Portals',
      'CRM Systems',
      'Listing Management',
      'Tenant Platforms',
    ],
    technologies: [
      'React',
      'Next.js',
      'Node.js',
      'Maps APIs',
      'CRM Integrations',
    ],
    metrics: [
      { value: '1000+', label: 'Listings Ready' },
      { value: 'Live', label: 'Property Data' },
    ],
  },

  {
    name: 'Manufacturing',
    emoji: '⚙️',
    short:
      'Operational software connecting production, inventory, teams, and supply chains.',
    color: 'from-slate-600 via-gray-600 to-zinc-500',
    glow: 'bg-slate-600',
    light: 'bg-slate-50',
    text: 'text-slate-600',
    border: 'border-slate-200',
    solutions: [
      'ERP Systems',
      'Inventory Management',
      'Production Tracking',
      'Supply Chain Tools',
    ],
    technologies: [
      'Node.js',
      'PostgreSQL',
      'Docker',
      'REST APIs',
      'Automation',
    ],
    metrics: [
      { value: 'Real-time', label: 'Operations' },
      { value: 'Automated', label: 'Workflows' },
    ],
  },

  {
    name: 'Logistics',
    emoji: '🚚',
    short:
      'Smarter logistics platforms for fleets, warehouses, dispatch, and delivery.',
    color: 'from-yellow-500 via-orange-500 to-red-500',
    glow: 'bg-orange-500',
    light: 'bg-orange-50',
    text: 'text-orange-600',
    border: 'border-orange-100',
    solutions: [
      'Fleet Management',
      'Route Optimization',
      'Warehouse Software',
      'Delivery Tracking',
    ],
    technologies: [
      'React',
      'Node.js',
      'Maps APIs',
      'WebSockets',
      'Automation',
    ],
    metrics: [
      { value: 'Live', label: 'Tracking' },
      { value: 'Smart', label: 'Routing' },
    ],
  },

  {
    name: 'E-commerce',
    emoji: '🛒',
    short:
      'High-converting commerce experiences built for growth, speed, and scale.',
    color: 'from-pink-500 via-rose-500 to-red-500',
    glow: 'bg-rose-500',
    light: 'bg-rose-50',
    text: 'text-rose-600',
    border: 'border-rose-100',
    solutions: [
      'Online Stores',
      'Marketplace Platforms',
      'Inventory Systems',
      'Analytics Dashboards',
    ],
    technologies: [
      'Next.js',
      'Shopify',
      'Stripe',
      'PostgreSQL',
      'Redis',
    ],
    metrics: [
      { value: 'Fast', label: 'Checkout' },
      { value: 'Scalable', label: 'Commerce' },
    ],
  },

  {
    name: 'Startups',
    emoji: '🚀',
    short:
      'From idea to launch — rapid product engineering for ambitious startups.',
    color: 'from-cyan-500 via-blue-500 to-indigo-600',
    glow: 'bg-cyan-500',
    light: 'bg-cyan-50',
    text: 'text-cyan-600',
    border: 'border-cyan-100',
    solutions: [
      'MVPs',
      'SaaS Platforms',
      'Rapid Prototyping',
      'Growth Automation',
    ],
    technologies: [
      'React',
      'Next.js',
      'Node.js',
      'AI',
      'Cloud',
    ],
    metrics: [
      { value: 'MVP', label: 'Launch Ready' },
      { value: 'Rapid', label: 'Iterations' },
    ],
  },

  {
    name: 'SaaS',
    emoji: '☁️',
    short:
      'Scalable SaaS architecture built for users, subscriptions, analytics, and growth.',
    color: 'from-indigo-500 via-violet-500 to-purple-600',
    glow: 'bg-indigo-500',
    light: 'bg-indigo-50',
    text: 'text-indigo-600',
    border: 'border-indigo-100',
    solutions: [
      'Multi-tenant Architecture',
      'Billing Systems',
      'Analytics',
      'API Development',
    ],
    technologies: [
      'Next.js',
      'TypeScript',
      'PostgreSQL',
      'Redis',
      'Docker',
    ],
    metrics: [
      { value: 'Multi-tenant', label: 'Architecture' },
      { value: 'API-first', label: 'Systems' },
    ],
  },
];

const stats = [
  {
    value: '9+',
    label: 'Industries Served',
  },
  {
    value: '50+',
    label: 'Digital Solutions',
  },
  {
    value: '15+',
    label: 'Technology Integrations',
  },
  {
    value: '100%',
    label: 'Custom Engineering',
  },
];

export default function Industries() {
  const [selectedIndustry, setSelectedIndustry] = useState(null);

  const openIndustry = (industry) => {
    setSelectedIndustry(industry);

    requestAnimationFrame(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
  };

  const closeIndustry = () => {
    setSelectedIndustry(null);
  };

  return (
    <>
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden pt-36 pb-20 px-6 text-center">
        {/* Background Glow */}
        <div className="pointer-events-none absolute left-1/2 top-10 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />

        <div className="pointer-events-none absolute left-10 top-40 -z-10 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="pointer-events-none absolute right-10 top-20 -z-10 h-48 w-48 rounded-full bg-purple-500/10 blur-3xl" />

        <FadeIn>
          <div className="section-tag mb-6 mx-auto w-fit">
            Industries
          </div>

          <h1 className="mx-auto max-w-5xl text-4xl md:text-6xl font-black font-heading leading-tight">
            Technology Built Around{' '}
            <span className="gradient-text">
              Your Industry
            </span>
          </h1>

          <p className="text-muted text-lg md:text-xl max-w-2xl mx-auto mt-6 leading-relaxed">
            We combine product engineering, automation, AI, and
            industry-specific workflows to build technology that
            actually fits the way your business operates.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="btn-primary"
            >
              Discuss Your Project
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="#industries"
              className="btn-secondary"
            >
              Explore Industries
            </a>
          </div>
        </FadeIn>
      </section>

      {/* =====================================================
          STATS
      ====================================================== */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="grid grid-cols-2 lg:grid-cols-4 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`p-6 md:p-8 text-center ${
                    index !== stats.length - 1
                      ? 'border-b sm:border-b-0 lg:border-r border-gray-100'
                      : ''
                  } ${
                    index === 1
                      ? 'border-r'
                      : ''
                  }`}
                >
                  <div className="text-3xl md:text-4xl font-black font-heading gradient-text">
                    {stat.value}
                  </div>

                  <div className="mt-2 text-xs md:text-sm font-semibold text-muted">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* =====================================================
          INDUSTRIES
      ====================================================== */}
      <section
        id="industries"
        className="relative px-6 pb-28 pt-20 section-alt"
      >
        <div className="max-w-7xl mx-auto">
          <FadeIn className="mb-12">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <div className="section-tag mb-4 w-fit">
                  What We Build
                </div>

                <h2 className="text-3xl md:text-4xl font-black font-heading text-heading">
                  Solutions for{' '}
                  <span className="gradient-text">
                    Real Businesses
                  </span>
                </h2>
              </div>

              <p className="max-w-md text-muted text-sm leading-relaxed">
                Explore the industries where our engineering,
                automation, and AI capabilities can create
                practical business value.
              </p>
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <FadeIn
                key={industry.name}
                delay={index * 0.045}
              >
                <motion.button
                  type="button"
                  onClick={() => openIndustry(industry)}
                  whileHover={{
                    y: -7,
                  }}
                  whileTap={{
                    scale: 0.985,
                  }}
                  className="group relative w-full overflow-hidden rounded-3xl border border-gray-200 bg-white text-left shadow-sm transition-all duration-300 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-500/10"
                >
                  {/* Gradient Header */}
                  <div
                    className={`relative h-36 bg-gradient-to-br ${industry.color} overflow-hidden`}
                  >
                    <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/10 blur-2xl" />

                    <div className="absolute -bottom-12 -left-8 h-28 w-28 rounded-full bg-white/10 blur-2xl" />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />

                    <div className="relative flex h-full items-center justify-between px-7">
                      <span className="text-6xl drop-shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                        {industry.emoji}
                      </span>

                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white backdrop-blur-md transition-all duration-300 group-hover:bg-white group-hover:text-slate-900">
                        <ChevronRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-xl font-black font-heading text-heading">
                        {industry.name}
                      </h3>

                      <span
                        className={`text-[10px] font-bold uppercase tracking-wider ${industry.text}`}
                      >
                        Explore
                      </span>
                    </div>

                    <p className="mt-3 min-h-[48px] text-sm leading-relaxed text-muted">
                      {industry.short}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {industry.solutions.slice(0, 3).map((solution) => (
                        <span
                          key={solution}
                          className="rounded-lg border border-gray-100 bg-gray-50 px-2.5 py-1 text-[10px] font-semibold text-slate-600"
                        >
                          {solution}
                        </span>
                      ))}

                      <span className="rounded-lg border border-gray-100 bg-gray-50 px-2.5 py-1 text-[10px] font-bold text-slate-400">
                        +1
                      </span>
                    </div>

                    <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-4">
                      <span className="text-xs font-bold text-slate-400">
                        View solutions
                      </span>

                      <div className="flex items-center gap-1 text-xs font-bold text-slate-700 transition-colors group-hover:text-indigo-600">
                        Explore
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </motion.button>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CAPABILITY SECTION
      ====================================================== */}
      <section className="px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="relative overflow-hidden rounded-[32px] bg-slate-950 px-7 py-12 md:px-12 md:py-16 text-white">
              {/* Background */}
              <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

              <div className="relative grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
                <div>
                  <div className="mb-5 flex items-center gap-2 text-cyan-300">
                    <Sparkles className="h-4 w-4" />
                    <span className="text-xs font-bold uppercase tracking-[0.18em]">
                      Beyond Development
                    </span>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-black font-heading leading-tight">
                    Your industry has unique problems.
                    <span className="block text-cyan-300">
                      Your software should too.
                    </span>
                  </h2>

                  <p className="mt-5 max-w-2xl text-sm md:text-base leading-relaxed text-slate-300">
                    We don't force businesses into generic templates.
                    We understand your workflows, users, data,
                    integrations, and operational requirements before
                    designing the technology around them.
                  </p>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-50"
                    >
                      Start a Conversation
                      <ArrowRight className="h-4 w-4" />
                    </Link>

                    <Link
                      to="/services"
                      className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10"
                    >
                      View Services
                    </Link>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    'Custom Software',
                    'AI Integrations',
                    'Business Automation',
                    'Web Platforms',
                    'Data Systems',
                    'Cloud Infrastructure',
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
                    >
                      <div className="mb-2 flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-300">
                        <Check className="h-3.5 w-3.5" />
                      </div>

                      <span className="text-xs font-bold text-slate-200">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}
      <section className="px-6 pb-28">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
              <Layers3 className="h-6 w-6" />
            </div>

            <h2 className="text-3xl md:text-4xl font-black font-heading text-heading">
              Don't see your industry?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-muted leading-relaxed">
              That's okay. If you have a complex workflow, product
              idea, or operational problem, let's talk about it.
            </p>

            <div className="mt-7">
              <Link
                to="/contact"
                className="btn-primary"
              >
                Let's Talk
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* =====================================================
          INDUSTRY MODAL
      ====================================================== */}
      <AnimatePresence>
        {selectedIndustry && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm"
            onClick={closeIndustry}
          >
            <motion.div
              initial={{
                opacity: 0,
                y: 25,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 20,
                scale: 0.96,
              }}
              transition={{
                duration: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              onClick={(event) => event.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[28px] bg-white shadow-2xl"
            >
              {/* Modal Header */}
              <div
                className={`relative overflow-hidden bg-gradient-to-br ${selectedIndustry.color} px-7 py-8 text-white`}
              >
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />

                <button
                  type="button"
                  onClick={closeIndustry}
                  className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-xl bg-black/10 text-white transition hover:bg-black/20"
                  aria-label="Close industry details"
                >
                  <X className="h-5 w-5" />
                </button>

                <div className="relative flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 text-4xl shadow-lg backdrop-blur-md">
                    {selectedIndustry.emoji}
                  </div>

                  <div>
                    <div className="mb-1 text-xs font-bold uppercase tracking-wider text-white/70">
                      Industry Solutions
                    </div>

                    <h3 className="text-2xl md:text-3xl font-black font-heading">
                      {selectedIndustry.name}
                    </h3>
                  </div>
                </div>

                <p className="relative mt-5 max-w-xl text-sm leading-relaxed text-white/85">
                  {selectedIndustry.short}
                </p>
              </div>

              {/* Modal Content */}
              <div className="space-y-7 p-7">
                {/* Solutions */}
                <div>
                  <div className="mb-3 flex items-center gap-2">
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-lg ${selectedIndustry.light} ${selectedIndustry.text}`}
                    >
                      <Check className="h-4 w-4" />
                    </div>

                    <h4 className="font-bold text-slate-900">
                      Solutions We Build
                    </h4>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-2">
                    {selectedIndustry.solutions.map((solution) => (
                      <div
                        key={solution}
                        className={`flex items-center gap-2 rounded-xl border ${selectedIndustry.border} ${selectedIndustry.light} px-3 py-3 text-xs font-semibold text-slate-700`}
                      >
                        <Check
                          className={`h-3.5 w-3.5 shrink-0 ${selectedIndustry.text}`}
                        />
                        {solution}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technology */}
                <div>
                  <div className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-400">
                    Typical Technology
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {selectedIndustry.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-semibold text-slate-600"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3">
                  {selectedIndustry.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-2xl border border-gray-100 bg-slate-50 p-4"
                    >
                      <div
                        className={`text-xl font-black font-heading ${selectedIndustry.text}`}
                      >
                        {metric.value}
                      </div>

                      <div className="mt-1 text-[11px] font-semibold text-slate-400">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="border-t border-gray-100 pt-6">
                  <Link
                    to="/contact"
                    onClick={closeIndustry}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-indigo-600"
                  >
                    Discuss Your {selectedIndustry.name} Project
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
