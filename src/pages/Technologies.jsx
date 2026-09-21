import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  Cpu,
  Database,
  Globe2,
  Layers3,
  Rocket,
  Server,
  Sparkles,
  Workflow,
  Zap,
} from 'lucide-react';

const FadeIn = ({
  children,
  delay = 0,
  className = '',
  direction = 'up',
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: '-80px',
  });

  const directions = {
    up: { y: 35, x: 0 },
    down: { y: -35, x: 0 },
    left: { y: 0, x: 35 },
    right: { y: 0, x: -35 },
  };

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        ...directions[direction],
      }}
      animate={
        inView
          ? {
              opacity: 1,
              y: 0,
              x: 0,
            }
          : {}
      }
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const techCategories = [
  {
    name: 'Frontend',
    eyebrow: 'INTERFACE ENGINEERING',
    color: 'blue',
    icon: Code2,
    description:
      'Fast, responsive and beautifully engineered digital experiences built for modern users.',
    items: [
      {
        name: 'React',
        icon: '⚛️',
        desc: 'Interactive UI experiences',
      },
      {
        name: 'Next.js',
        icon: '▲',
        desc: 'Production React framework',
      },
      {
        name: 'TypeScript',
        icon: '🔷',
        desc: 'Reliable type-safe applications',
      },
      {
        name: 'Tailwind CSS',
        icon: '🎨',
        desc: 'Rapid modern UI systems',
      },
      {
        name: 'Framer Motion',
        icon: '🎭',
        desc: 'Premium interface motion',
      },
    ],
  },
  {
    name: 'Backend',
    eyebrow: 'SYSTEM ENGINEERING',
    color: 'purple',
    icon: Server,
    description:
      'Scalable APIs and backend systems engineered for performance, reliability and growth.',
    items: [
      {
        name: 'Node.js',
        icon: '🟢',
        desc: 'High-performance runtime',
      },
      {
        name: 'NestJS',
        icon: '🐱',
        desc: 'Enterprise backend architecture',
      },
      {
        name: 'Express',
        icon: '⚡',
        desc: 'Flexible web applications',
      },
      {
        name: 'GraphQL',
        icon: '◈',
        desc: 'Flexible data APIs',
      },
      {
        name: 'Python',
        icon: '🐍',
        desc: 'AI, automation & data systems',
      },
    ],
  },
  {
    name: 'Database',
    eyebrow: 'DATA INFRASTRUCTURE',
    color: 'cyan',
    icon: Database,
    description:
      'Robust data infrastructure designed to remain fast, secure and dependable as you scale.',
    items: [
      {
        name: 'PostgreSQL',
        icon: '🐘',
        desc: 'Powerful relational database',
      },
      {
        name: 'MongoDB',
        icon: '🍃',
        desc: 'Flexible document database',
      },
      {
        name: 'MySQL',
        icon: '🐬',
        desc: 'Reliable relational storage',
      },
      {
        name: 'Redis',
        icon: '🔴',
        desc: 'Lightning-fast caching',
      },
      {
        name: 'Prisma',
        icon: '💎',
        desc: 'Modern database ORM',
      },
    ],
  },
  {
    name: 'Cloud & DevOps',
    eyebrow: 'CLOUD INFRASTRUCTURE',
    color: 'orange',
    icon: Globe2,
    description:
      'Modern deployment infrastructure that makes applications easier to ship, monitor and scale.',
    items: [
      {
        name: 'AWS',
        icon: '☁️',
        desc: 'Global cloud infrastructure',
      },
      {
        name: 'Vercel',
        icon: '▲',
        desc: 'Modern frontend cloud',
      },
      {
        name: 'Docker',
        icon: '🐳',
        desc: 'Portable application containers',
      },
      {
        name: 'Kubernetes',
        icon: '⎈',
        desc: 'Container orchestration',
      },
      {
        name: 'GitHub Actions',
        icon: '🔄',
        desc: 'Automated CI/CD pipelines',
      },
    ],
  },
  {
    name: 'Automation & AI',
    eyebrow: 'INTELLIGENT SYSTEMS',
    color: 'green',
    icon: Workflow,
    description:
      'Connected automation and AI systems that remove repetitive work and unlock new possibilities.',
    items: [
      {
        name: 'Zapier',
        icon: '⚡',
        desc: 'Business workflow automation',
      },
      {
        name: 'Make.com',
        icon: '⚙️',
        desc: 'Visual automation workflows',
      },
      {
        name: 'OpenAI',
        icon: '🤖',
        desc: 'AI-powered applications',
      },
      {
        name: 'Twilio',
        icon: '📱',
        desc: 'Communication infrastructure',
      },
      {
        name: 'Webhooks',
        icon: '🔗',
        desc: 'Real-time system connections',
      },
    ],
  },
];

const colorMap = {
  blue: {
    accent: '#3b82f6',
    glow: 'rgba(59,130,246,0.35)',
    soft: 'bg-blue-50',
    border: 'border-blue-100',
    text: 'text-blue-600',
    gradient: 'from-blue-600 via-indigo-600 to-violet-600',
    iconBg: 'bg-blue-100',
  },
  purple: {
    accent: '#8b5cf6',
    glow: 'rgba(139,92,246,0.35)',
    soft: 'bg-purple-50',
    border: 'border-purple-100',
    text: 'text-purple-600',
    gradient: 'from-purple-600 via-violet-600 to-fuchsia-600',
    iconBg: 'bg-purple-100',
  },
  cyan: {
    accent: '#06b6d4',
    glow: 'rgba(6,182,212,0.35)',
    soft: 'bg-cyan-50',
    border: 'border-cyan-100',
    text: 'text-cyan-600',
    gradient: 'from-cyan-500 via-blue-600 to-indigo-600',
    iconBg: 'bg-cyan-100',
  },
  orange: {
    accent: '#f97316',
    glow: 'rgba(249,115,22,0.35)',
    soft: 'bg-orange-50',
    border: 'border-orange-100',
    text: 'text-orange-600',
    gradient: 'from-orange-500 via-red-500 to-pink-600',
    iconBg: 'bg-orange-100',
  },
  green: {
    accent: '#10b981',
    glow: 'rgba(16,185,129,0.35)',
    soft: 'bg-emerald-50',
    border: 'border-emerald-100',
    text: 'text-emerald-600',
    gradient: 'from-emerald-500 via-teal-500 to-cyan-600',
    iconBg: 'bg-emerald-100',
  },
};

const stats = [
  {
    value: '25+',
    label: 'Technologies',
    icon: Layers3,
  },
  {
    value: '5',
    label: 'Technology Domains',
    icon: Cpu,
  },
  {
    value: '100%',
    label: 'Project Specific',
    icon: Check,
  },
  {
    value: '∞',
    label: 'Possibilities',
    icon: Sparkles,
  },
];

function FloatingOrb({ className = '' }) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl pointer-events-none ${className}`}
      animate={{
        x: [0, 25, -15, 0],
        y: [0, -20, 20, 0],
        scale: [1, 1.08, 0.95, 1],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
}

function TechCard({ item, category, index }) {
  const c = colorMap[category.color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.55,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -8,
        scale: 1.015,
      }}
      className="group relative"
    >
      <div
        className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"
        style={{
          background: c.glow,
        }}
      />

      <div
        className={`relative h-full min-h-[190px] rounded-2xl border ${c.border} bg-white p-6 overflow-hidden transition-all duration-500 group-hover:border-transparent group-hover:shadow-xl`}
      >
        <div
          className="absolute -right-10 -top-10 w-28 h-28 rounded-full opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500"
          style={{ background: c.accent }}
        />

        <div className="relative flex items-start justify-between mb-5">
          <motion.div
            whileHover={{
              rotate: [0, -8, 8, 0],
              scale: 1.08,
            }}
            className={`w-14 h-14 rounded-2xl ${c.soft} border ${c.border} flex items-center justify-center text-3xl shadow-sm`}
          >
            {item.icon}
          </motion.div>

          <ArrowUpRight
            className={`w-5 h-5 ${c.text} opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300`}
          />
        </div>

        <div className="relative">
          <h4 className="font-bold text-lg text-heading mb-1 group-hover:text-primary transition-colors">
            {item.name}
          </h4>

          <p className="text-muted text-sm leading-relaxed">
            {item.desc}
          </p>
        </div>

        <div
          className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-700"
          style={{ background: c.accent }}
        />
      </div>
    </motion.div>
  );
}

export default function Technologies() {
  return (
    <div className="relative overflow-hidden">
      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative pt-32 md:pt-40 pb-24 px-6 overflow-hidden">
        {/* Ambient background */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                'linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(90deg, #6366f1 1px, transparent 1px)',
              backgroundSize: '55px 55px',
            }}
          />

          <FloatingOrb className="w-72 h-72 bg-indigo-400/20 left-[5%] top-20" />
          <FloatingOrb className="w-80 h-80 bg-purple-400/20 right-[5%] top-10" />

          <motion.div
            className="absolute left-1/2 top-40 w-[600px] h-[600px] -translate-x-1/2 rounded-full border border-indigo-100/50"
            animate={{ rotate: 360 }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: 'linear',
            }}
          />

          <motion.div
            className="absolute left-1/2 top-48 w-[450px] h-[450px] -translate-x-1/2 rounded-full border border-purple-100/60"
            animate={{ rotate: -360 }}
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </div>

        <div className="relative max-w-6xl mx-auto text-center">
          <FadeIn>
            <motion.div
              whileHover={{ scale: 1.04 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-indigo-100 shadow-sm mb-7"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-500 opacity-60" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-600" />
              </span>

              <span className="text-xs md:text-sm font-bold tracking-widest uppercase text-indigo-700">
                Technology Universe
              </span>

              <Sparkles className="w-4 h-4 text-indigo-500" />
            </motion.div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-heading tracking-tight leading-[0.95] mb-8">
              We Build With
              <br />
              <span className="relative inline-block">
                <span className="gradient-text">Tomorrow's Tech.</span>

                <motion.span
                  className="absolute -bottom-3 left-0 right-0 h-1 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.5 }}
                />
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.16}>
            <p className="text-muted text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
              A carefully selected technology ecosystem engineered to turn
              ambitious ideas into{' '}
              <span className="font-semibold text-heading">
                fast, scalable and extraordinary digital products.
              </span>
            </p>
          </FadeIn>

          <FadeIn delay={0.24}>
            <div className="flex flex-wrap justify-center gap-3 mt-9">
              {[
                'Modern Architecture',
                'Scalable Infrastructure',
                'AI Ready',
                'Cloud Native',
              ].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.35 + i * 0.08 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-sm font-semibold text-body"
                >
                  <Check className="w-4 h-4 text-emerald-500" />
                  {item}
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* =========================================================
          STATS
      ========================================================== */}
      <section className="px-6 pb-20">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="relative overflow-hidden rounded-3xl bg-gray-950 p-[1px] shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 opacity-60" />

              <div className="relative rounded-[23px] bg-gray-950 px-6 py-8 md:px-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {stats.map((stat, index) => {
                    const Icon = stat.icon;

                    return (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: index * 0.1,
                          duration: 0.5,
                        }}
                        className="text-center relative"
                      >
                        {index > 0 && (
                          <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 h-12 w-px bg-white/10" />
                        )}

                        <Icon className="w-5 h-5 mx-auto mb-3 text-indigo-400" />

                        <div className="text-3xl md:text-4xl font-black text-white font-heading">
                          {stat.value}
                        </div>

                        <div className="text-xs md:text-sm text-gray-400 mt-1">
                          {stat.label}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* =========================================================
          TECHNOLOGY CATEGORIES
      ========================================================== */}
      <section className="relative px-6 pb-28 section-alt pt-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute left-0 top-1/4 w-96 h-96 bg-indigo-100/30 blur-3xl rounded-full" />
          <div className="absolute right-0 bottom-1/4 w-96 h-96 bg-purple-100/30 blur-3xl rounded-full" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <FadeIn className="text-center mb-16">
            <div className="section-tag mb-5 mx-auto w-fit">
              Our Technology Stack
            </div>

            <h2 className="text-3xl md:text-5xl font-black font-heading text-heading mb-5">
              The Right Tool
              <br />
              <span className="gradient-text">For The Right Job.</span>
            </h2>

            <p className="text-muted max-w-2xl mx-auto text-lg leading-relaxed">
              We don't force projects into a predetermined stack. We select
              technologies around your goals, users, timeline and long-term
              growth.
            </p>
          </FadeIn>

          <div className="space-y-10">
            {techCategories.map((cat, categoryIndex) => {
              const c = colorMap[cat.color];
              const Icon = cat.icon;

              return (
                <FadeIn
                  key={cat.name}
                  delay={categoryIndex * 0.05}
                >
                  <div className="relative group">
                    {/* Category glow */}
                    <div
                      className="absolute -inset-1 rounded-[30px] opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-700"
                      style={{
                        background: c.accent,
                      }}
                    />

                    <div className="relative bg-white/90 backdrop-blur-xl border border-gray-200/80 rounded-[28px] overflow-hidden shadow-sm hover:shadow-2xl transition-shadow duration-500">
                      {/* Category header */}
                      <div
                        className={`relative px-6 md:px-9 py-7 bg-gradient-to-r ${c.gradient} overflow-hidden`}
                      >
                        <div className="absolute inset-0 opacity-20">
                          <div
                            className="absolute inset-0"
                            style={{
                              backgroundImage:
                                'radial-gradient(circle at 20% 50%, white 1px, transparent 1px)',
                              backgroundSize: '22px 22px',
                            }}
                          />
                        </div>

                        <motion.div
                          className="absolute -right-10 -top-24 w-72 h-72 rounded-full border border-white/20"
                          animate={{
                            rotate: 360,
                          }}
                          transition={{
                            duration: 30,
                            repeat: Infinity,
                            ease: 'linear',
                          }}
                        />

                        <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-5">
                          <div className="flex items-center gap-4">
                            <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center">
                              <Icon
                                className="w-7 h-7 text-white"
                                strokeWidth={1.8}
                              />
                            </div>

                            <div>
                              <div className="text-white/70 text-[10px] md:text-xs font-bold tracking-[0.2em] mb-1">
                                {cat.eyebrow}
                              </div>

                              <h3 className="text-2xl md:text-3xl font-black font-heading text-white">
                                {cat.name}
                              </h3>
                            </div>
                          </div>

                          <p className="text-white/80 text-sm max-w-md leading-relaxed">
                            {cat.description}
                          </p>
                        </div>
                      </div>

                      {/* Cards */}
                      <div className="p-5 md:p-8">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
                          {cat.items.map((item, itemIndex) => (
                            <TechCard
                              key={item.name}
                              item={item}
                              category={cat}
                              index={itemIndex}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          ARCHITECTURE STRIP
      ========================================================== */}
      <section className="relative px-6 py-28 overflow-hidden">
        <FloatingOrb className="w-80 h-80 bg-indigo-300/20 -left-32 top-20" />
        <FloatingOrb className="w-80 h-80 bg-cyan-300/20 -right-32 bottom-10" />

        <div className="relative max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <div className="section-tag mb-5 w-fit">
                Beyond The Stack
              </div>

              <h2 className="text-3xl md:text-5xl font-black font-heading text-heading leading-tight mb-6">
                Technology is only
                <br />
                <span className="gradient-text">half the equation.</span>
              </h2>

              <p className="text-muted text-lg leading-relaxed mb-7">
                Great products aren't created by collecting trendy tools.
                They're created by combining the right architecture,
                engineering discipline, product thinking and user experience.
              </p>

              <div className="space-y-4">
                {[
                  'Architecture designed around your business',
                  'Security and performance from day one',
                  'Infrastructure ready for future growth',
                  'Clean, maintainable engineering practices',
                ].map((item) => (
                  <motion.div
                    key={item}
                    whileHover={{ x: 6 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-7 h-7 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-emerald-600" />
                    </div>

                    <span className="text-heading font-medium">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.1}>
              <div className="relative">
                {/* Main visual */}
                <div className="relative rounded-[32px] bg-gray-950 p-6 md:p-8 shadow-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-transparent to-cyan-500/20" />

                  <div className="relative">
                    <div className="flex items-center gap-2 mb-8">
                      <span className="w-3 h-3 rounded-full bg-red-400" />
                      <span className="w-3 h-3 rounded-full bg-yellow-400" />
                      <span className="w-3 h-3 rounded-full bg-green-400" />

                      <span className="ml-auto text-xs text-gray-500 font-mono">
                        architecture.system
                      </span>
                    </div>

                    <div className="space-y-4">
                      {[
                        {
                          icon: Globe2,
                          label: 'Experience Layer',
                          color: 'bg-blue-500',
                        },
                        {
                          icon: Code2,
                          label: 'Application Layer',
                          color: 'bg-purple-500',
                        },
                        {
                          icon: Workflow,
                          label: 'Automation + AI',
                          color: 'bg-emerald-500',
                        },
                        {
                          icon: Database,
                          label: 'Data Layer',
                          color: 'bg-cyan-500',
                        },
                        {
                          icon: Server,
                          label: 'Cloud Infrastructure',
                          color: 'bg-orange-500',
                        },
                      ].map((layer, index) => {
                        const LayerIcon = layer.icon;

                        return (
                          <motion.div
                            key={layer.label}
                            initial={{
                              opacity: 0,
                              x: 30,
                            }}
                            whileInView={{
                              opacity: 1,
                              x: 0,
                            }}
                            viewport={{ once: true }}
                            transition={{
                              delay: 0.2 + index * 0.1,
                            }}
                            whileHover={{
                              x: 8,
                            }}
                            className="relative flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4"
                          >
                            <div
                              className={`w-10 h-10 rounded-xl ${layer.color} flex items-center justify-center shadow-lg`}
                            >
                              <LayerIcon
                                className="w-5 h-5 text-white"
                                strokeWidth={1.8}
                              />
                            </div>

                            <div>
                              <div className="text-white font-semibold text-sm">
                                {layer.label}
                              </div>

                              <div className="text-gray-500 text-xs mt-0.5">
                                Connected • Scalable • Production Ready
                              </div>
                            </div>

                            <div className="ml-auto">
                              <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Floating badge */}
                <motion.div
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute -bottom-5 -left-5 md:-left-8 px-5 py-3 rounded-2xl bg-white border border-gray-200 shadow-xl flex items-center gap-3"
                >
                  <div className="w-9 h-9 rounded-xl bg-indigo-50 flex items-center justify-center">
                    <Rocket className="w-5 h-5 text-indigo-600" />
                  </div>

                  <div>
                    <div className="text-xs text-muted">
                      Built for
                    </div>
                    <div className="text-sm font-bold text-heading">
                      What's Next
                    </div>
                  </div>
                </motion.div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================== */}
      <section className="px-6 pb-28">
        <FadeIn>
          <div className="relative max-w-5xl mx-auto overflow-hidden rounded-[32px] bg-gray-950 p-[1px] shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400" />

            <div className="relative rounded-[31px] bg-gray-950 px-7 py-16 md:px-16 text-center overflow-hidden">
              {/* Background effects */}
              <div className="absolute inset-0 pointer-events-none">
                <motion.div
                  className="absolute w-72 h-72 rounded-full bg-indigo-600/20 blur-3xl -left-20 -top-20"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                  }}
                />

                <motion.div
                  className="absolute w-72 h-72 rounded-full bg-cyan-500/20 blur-3xl -right-20 -bottom-20"
                  animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.5, 0.3, 0.5],
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                  }}
                />
              </div>

              <div className="relative">
                <motion.div
                  animate={{
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                  className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/30 mb-7"
                >
                  <Zap
                    className="w-8 h-8 text-white"
                    fill="white"
                  />
                </motion.div>

                <div className="text-indigo-300 text-xs font-bold tracking-[0.25em] uppercase mb-4">
                  Let's Build Something Exceptional
                </div>

                <h2 className="text-3xl md:text-5xl font-black font-heading text-white mb-5">
                  Your idea deserves
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-cyan-300">
                    extraordinary technology.
                  </span>
                </h2>

                <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed mb-9">
                  Tell us what you're building. We'll help you choose the
                  architecture, technologies and strategy to take it further.
                </p>

                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-3 px-7 py-4 rounded-xl bg-white text-gray-950 font-bold shadow-xl hover:shadow-2xl hover:bg-gray-100 transition-all"
                >
                  Discuss Your Project

                  <span className="w-7 h-7 rounded-full bg-gray-950 text-white flex items-center justify-center group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}