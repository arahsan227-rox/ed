import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Globe,
  Code2,
  Search,
  Smartphone,
  ShieldCheck,
  Zap,
  Layers3,
  Gauge,
  Palette,
  BarChart3,
  Check,
  Sparkles,
  MousePointer2,
  Server,
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
    up: { y: 30, x: 0 },
    left: { y: 0, x: -30 },
    right: { y: 0, x: 30 },
  };

  const initial = directions[direction] || directions.up;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...initial }}
      animate={
        inView
          ? {
              opacity: 1,
              x: 0,
              y: 0,
            }
          : {}
      }
      transition={{
        duration: 0.65,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const features = [
  {
    icon: Smartphone,
    title: 'Responsive by Design',
    desc: 'Beautiful, accessible experiences that adapt perfectly across phones, tablets, laptops, and large displays.',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
  },
  {
    icon: Zap,
    title: 'Performance First',
    desc: 'Optimized architecture, assets, caching, and rendering strategies designed for fast real-world experiences.',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    border: 'border-amber-100',
  },
  {
    icon: Search,
    title: 'SEO Ready',
    desc: 'Semantic markup, metadata, performance optimization, and technical foundations built for search visibility.',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-100',
  },
  {
    icon: ShieldCheck,
    title: 'Secure & Reliable',
    desc: 'Modern security practices, sensible architecture, validation, and deployment workflows for dependable products.',
    color: 'text-purple-600',
    bg: 'bg-purple-50',
    border: 'border-purple-100',
  },
];

const capabilities = [
  'Corporate & Business Websites',
  'SaaS Platforms & Dashboards',
  'High-Converting Landing Pages',
  'Custom Web Applications',
  'E-Commerce Experiences',
  'Headless CMS Development',
  'Customer Portals',
  'API-Driven Web Platforms',
];

const process = [
  {
    number: '01',
    title: 'Discover',
    desc: 'We understand your users, business goals, competitors, and technical requirements before writing the first line of code.',
    icon: MousePointer2,
  },
  {
    number: '02',
    title: 'Design',
    desc: 'We turn requirements into polished interfaces with clear information architecture and conversion-focused UX.',
    icon: Palette,
  },
  {
    number: '03',
    title: 'Build',
    desc: 'Our engineers build a scalable, maintainable product using modern frontend and backend technologies.',
    icon: Code2,
  },
  {
    number: '04',
    title: 'Launch',
    desc: 'We test, optimize, deploy, monitor, and help you confidently take your product into production.',
    icon: RocketIcon,
  },
];

const technologies = [
  'React',
  'Next.js',
  'TypeScript',
  'Tailwind CSS',
  'Node.js',
  'NestJS',
  'PostgreSQL',
  'Prisma',
  'Vercel',
  'AWS',
  'Docker',
  'REST APIs',
];

function RocketIcon(props) {
  return <Sparkles {...props} />;
}

export default function WebDevelopment() {
  return (
    <>
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden pt-32 md:pt-40 pb-20 px-6">
        {/* Background decoration */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-indigo-200/30 blur-3xl" />
          <div className="absolute left-10 top-40 h-56 w-56 rounded-full bg-blue-100/40 blur-3xl" />
          <div className="absolute right-10 top-20 h-64 w-64 rounded-full bg-purple-100/40 blur-3xl" />

          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                'linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(90deg, #4f46e5 1px, transparent 1px)',
              backgroundSize: '44px 44px',
            }}
          />
        </div>

        <div className="max-w-6xl mx-auto text-center">
          <FadeIn>
            <div className="section-tag mb-6 mx-auto w-fit inline-flex items-center gap-2">
              <Globe className="w-4 h-4" />
              Web Development
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-heading tracking-tight leading-[1.05] max-w-5xl mx-auto text-heading">
              High-Performance
              <br />
              <span className="gradient-text">Web Experiences</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.16}>
            <p className="text-muted text-lg md:text-xl max-w-3xl mx-auto mt-7 leading-relaxed">
              We design and engineer fast, scalable, conversion-focused
              websites and web applications that turn your digital presence
              into a serious business asset.
            </p>
          </FadeIn>

          <FadeIn delay={0.24}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-9">
              <Link
                to="/contact"
                className="btn-primary group inline-flex items-center gap-2 px-6 py-3"
              >
                Start Your Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href="#capabilities"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-200 bg-white text-heading font-semibold hover:border-indigo-200 hover:bg-indigo-50/50 transition-all"
              >
                Explore Capabilities
              </a>
            </div>
          </FadeIn>

          {/* Mini stats */}
          <FadeIn delay={0.32}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto mt-14">
              {[
                ['01', 'Strategy First'],
                ['02', 'Modern Stack'],
                ['03', 'Performance Focus'],
                ['04', 'Built to Scale'],
              ].map(([num, label]) => (
                <div
                  key={num}
                  className="rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm px-4 py-4 shadow-sm"
                >
                  <div className="text-primary font-black text-lg">
                    {num}
                  </div>
                  <div className="text-xs sm:text-sm text-muted font-medium mt-1">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* =========================================================
          INTRO / VALUE
      ========================================================= */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <FadeIn direction="left">
              <div className="relative">
                <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-indigo-200/50 via-blue-100/20 to-purple-200/50 blur-2xl" />

                <div className="relative card p-8 md:p-10 bg-gradient-to-br from-indigo-50 via-white to-purple-50 border-indigo-100 overflow-hidden">
                  <div className="absolute -right-16 -top-16 w-40 h-40 rounded-full bg-indigo-200/30 blur-2xl" />

                  <div className="relative">
                    <div className="w-14 h-14 rounded-2xl bg-white border border-indigo-100 shadow-sm flex items-center justify-center mb-7">
                      <Globe className="w-7 h-7 text-primary" />
                    </div>

                    <p className="text-sm font-bold uppercase tracking-widest text-primary mb-3">
                      Beyond Standard Websites
                    </p>

                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-heading leading-tight mb-5">
                      Your website should work as hard as your business.
                    </h2>

                    <p className="text-muted leading-relaxed mb-7">
                      A great digital product is more than a collection of
                      attractive screens. We combine thoughtful UX, clean
                      engineering, performance, accessibility, SEO, and
                      scalable architecture to create experiences designed
                      around real business objectives.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-3">
                      {[
                        'Conversion-focused UX',
                        'Clean architecture',
                        'Fast page delivery',
                        'Scalable foundations',
                      ].map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-2.5 text-sm font-semibold text-body"
                        >
                          <span className="w-6 h-6 rounded-full bg-white border border-indigo-100 flex items-center justify-center flex-shrink-0">
                            <Check className="w-3.5 h-3.5 text-primary" />
                          </span>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.12}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {features.map((feature, index) => {
                  const Icon = feature.icon;

                  return (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.45,
                        delay: 0.12 + index * 0.08,
                      }}
                      whileHover={{ y: -6 }}
                      className={`card p-6 h-full ${feature.border} shadow-sm hover:shadow-xl transition-shadow duration-300`}
                    >
                      <div
                        className={`w-12 h-12 rounded-2xl ${feature.bg} flex items-center justify-center mb-5`}
                      >
                        <Icon className={`w-6 h-6 ${feature.color}`} />
                      </div>

                      <h3 className="font-bold font-heading text-lg mb-2 text-heading">
                        {feature.title}
                      </h3>

                      <p className="text-muted text-sm leading-relaxed">
                        {feature.desc}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* =========================================================
          CAPABILITIES
      ========================================================= */}
      <section
        id="capabilities"
        className="relative py-24 px-6 section-alt border-y border-gray-100 overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-indigo-100/30 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <FadeIn className="text-center mb-14">
            <div className="section-tag mb-5 mx-auto w-fit">
              What We Build
            </div>

            <h2 className="text-3xl md:text-5xl font-black font-heading text-heading">
              From simple websites to
              <span className="gradient-text"> complex platforms.</span>
            </h2>

            <p className="text-muted max-w-2xl mx-auto mt-5 leading-relaxed">
              Whether you need a high-converting marketing site or a
              sophisticated application, we build around the requirements of
              your business.
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {capabilities.map((item, index) => (
              <FadeIn key={item} delay={index * 0.05}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="group h-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg hover:border-indigo-200 transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center">
                      <Layers3 className="w-5 h-5 text-primary" />
                    </div>

                    <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>

                  <h3 className="mt-5 font-bold font-heading text-heading">
                    {item}
                  </h3>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          PERFORMANCE SECTION
      ========================================================= */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-6">
            <FadeIn>
              <div className="card p-8 h-full bg-gray-950 text-white border-gray-800 overflow-hidden relative">
                <div className="absolute -right-16 -top-16 w-48 h-48 rounded-full bg-indigo-500/20 blur-3xl" />

                <div className="relative">
                  <Gauge className="w-9 h-9 text-indigo-400 mb-6" />

                  <div className="text-5xl font-black font-heading">
                    Fast
                  </div>

                  <h3 className="text-xl font-bold mt-3">
                    Experiences users enjoy
                  </h3>

                  <p className="text-gray-400 mt-4 text-sm leading-relaxed">
                    We treat performance as a product feature, not an
                    afterthought.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.08}>
              <div className="card p-8 h-full bg-indigo-50/60 border-indigo-100">
                <BarChart3 className="w-9 h-9 text-primary mb-6" />

                <div className="text-3xl font-black font-heading text-heading">
                  Business
                </div>

                <h3 className="text-xl font-bold text-heading mt-3">
                  Goals drive the build
                </h3>

                <p className="text-muted mt-4 text-sm leading-relaxed">
                  Every important page and interaction should have a reason to
                  exist and support your wider business strategy.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.16}>
              <div className="card p-8 h-full bg-purple-50/60 border-purple-100">
                <Server className="w-9 h-9 text-purple-600 mb-6" />

                <div className="text-3xl font-black font-heading text-heading">
                  Scalable
                </div>

                <h3 className="text-xl font-bold text-heading mt-3">
                  Ready for what comes next
                </h3>

                <p className="text-muted mt-4 text-sm leading-relaxed">
                  We make architectural decisions with your future users,
                  features, integrations, and growth in mind.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* =========================================================
          PROCESS
      ========================================================= */}
      <section className="py-24 px-6 section-alt border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-14">
            <div className="section-tag mb-5 mx-auto w-fit">
              Our Process
            </div>

            <h2 className="text-3xl md:text-5xl font-black font-heading text-heading">
              From idea to
              <span className="gradient-text"> launch.</span>
            </h2>

            <p className="text-muted max-w-2xl mx-auto mt-5">
              A clear process keeps the project focused, transparent, and
              moving forward.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {process.map((step, index) => {
              const Icon = step.icon;

              return (
                <FadeIn key={step.number} delay={index * 0.08}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="relative card p-7 h-full bg-white shadow-sm hover:shadow-xl transition-shadow"
                  >
                    <div className="flex items-center justify-between mb-7">
                      <span className="text-sm font-black text-primary">
                        {step.number}
                      </span>

                      <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold font-heading text-heading mb-3">
                      {step.title}
                    </h3>

                    <p className="text-muted text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </motion.div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          TECHNOLOGY STACK
      ========================================================= */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="card p-8 md:p-12 bg-gradient-to-br from-gray-50 via-white to-indigo-50/50 border-gray-200">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                <div>
                  <div className="flex items-center gap-2 text-primary font-bold text-sm mb-3">
                    <Code2 className="w-5 h-5" />
                    Modern Technology Stack
                  </div>

                  <h2 className="text-3xl md:text-4xl font-black font-heading text-heading">
                    Built with tools that
                    <span className="gradient-text"> scale.</span>
                  </h2>

                  <p className="text-muted max-w-xl mt-4 leading-relaxed">
                    We choose technologies based on the actual requirements of
                    the product rather than forcing every project into the same
                    stack.
                  </p>
                </div>

                <Link
                  to="/technologies"
                  className="inline-flex items-center gap-2 font-bold text-primary hover:gap-3 transition-all whitespace-nowrap"
                >
                  Explore Our Stack
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2.5 rounded-xl bg-white border border-gray-200 text-body text-sm font-semibold shadow-sm hover:border-indigo-200 hover:text-primary hover:-translate-y-0.5 transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="px-6 pb-24">
        <FadeIn>
          <div className="relative max-w-5xl mx-auto overflow-hidden rounded-[2rem] bg-gray-950 px-7 py-14 md:px-14 md:py-16 text-center shadow-2xl">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[500px] h-[250px] rounded-full bg-indigo-500/20 blur-3xl" />
              <div className="absolute -left-20 bottom-0 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl" />
              <div className="absolute -right-20 bottom-0 w-64 h-64 rounded-full bg-purple-500/10 blur-3xl" />
            </div>

            <div className="relative">
              <div className="mx-auto w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center mb-6">
                <Sparkles className="w-7 h-7 text-indigo-300" />
              </div>

              <p className="text-indigo-300 font-bold text-sm uppercase tracking-widest mb-4">
                Ready to Build?
              </p>

              <h2 className="text-3xl md:text-5xl font-black font-heading text-white leading-tight max-w-3xl mx-auto">
                Turn your idea into a web experience people remember.
              </h2>

              <p className="text-gray-400 max-w-2xl mx-auto mt-5 leading-relaxed">
                Tell us what you're building, what you're trying to achieve,
                and where you want to go next. We'll help turn the vision into
                a practical digital product.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-gray-950 font-bold hover:bg-indigo-50 transition-colors group"
                >
                  Start Your Project
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  to="/portfolio"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/15 text-white font-semibold hover:bg-white/10 transition-colors"
                >
                  View Our Work
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
}

