import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Target,
  Eye,
  Heart,
  Zap,
  Shield,
  Star,
  Code2,
  Globe2,
  Rocket,
  Sparkles,
  CheckCircle2,
  Infinity as InfinityIcon,
  Layers3,
  BrainCircuit,
  Workflow,
  ChevronDown,
  CircleDot,
} from 'lucide-react';

/* =========================================================
   ANIMATION HELPERS
========================================================= */

const ease = [0.22, 1, 0.36, 1];

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
    left: { y: 0, x: 45 },
    right: { y: 0, x: -45 },
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
              x: 0,
              y: 0,
            }
          : {}
      }
      transition={{
        duration: 0.75,
        delay,
        ease,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const FloatingOrb = ({
  className = '',
  duration = 8,
  delay = 0,
}) => (
  <motion.div
    animate={{
      y: [0, -20, 0],
      x: [0, 12, 0],
      scale: [1, 1.06, 1],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
    className={className}
  />
);

/* =========================================================
   DATA
========================================================= */

const values = [
  {
    icon: Zap,
    title: 'Innovation',
    desc: 'We explore emerging technology and turn promising ideas into practical business advantages.',
    color: 'from-amber-500 to-orange-500',
    bg: 'bg-amber-50',
  },
  {
    icon: Star,
    title: 'Quality',
    desc: 'Every interaction, interface, and line of code is built with care and attention to detail.',
    color: 'from-indigo-500 to-blue-500',
    bg: 'bg-indigo-50',
  },
  {
    icon: Shield,
    title: 'Transparency',
    desc: 'Clear communication, honest expectations, and no unnecessary surprises throughout the journey.',
    color: 'from-emerald-500 to-teal-500',
    bg: 'bg-emerald-50',
  },
  {
    icon: Rocket,
    title: 'Speed',
    desc: 'Focused sprints and rapid iteration help turn ambitious ideas into usable products quickly.',
    color: 'from-rose-500 to-pink-500',
    bg: 'bg-rose-50',
  },
  {
    icon: Heart,
    title: 'Partnership',
    desc: 'We build long-term relationships and stay focused on the business outcomes behind the technology.',
    color: 'from-purple-500 to-fuchsia-500',
    bg: 'bg-purple-50',
  },
];

const journey = [
  {
    year: '2020',
    title: 'The Beginning',
    desc: 'Bluorbit Solutions started with one simple idea: businesses deserve technology that works as hard as they do.',
    icon: Rocket,
  },
  {
    year: '2021',
    title: 'First Milestone',
    desc: 'We expanded our capabilities across software engineering, modern web development, and automation.',
    icon: Layers3,
  },
  {
    year: '2022',
    title: 'Going Global',
    desc: 'Our work began reaching businesses across international markets and industries.',
    icon: Globe2,
  },
  {
    year: '2023',
    title: 'Scaling Impact',
    desc: 'We expanded our technology capabilities and delivered increasingly sophisticated digital products.',
    icon: BrainCircuit,
  },
  {
    year: '2024+',
    title: "What's Next",
    desc: 'We continue pushing toward intelligent, connected, and scalable technology that creates measurable business impact.',
    icon: InfinityIcon,
  },
];

const capabilities = [
  {
    icon: Code2,
    title: 'Engineering Excellence',
    desc: 'Modern architecture, scalable systems, clean code, and reliable infrastructure.',
  },
  {
    icon: Workflow,
    title: 'Intelligent Automation',
    desc: 'We eliminate repetitive work through workflows, integrations, AI, and intelligent systems.',
  },
  {
    icon: Sparkles,
    title: 'Premium Experiences',
    desc: 'Interfaces designed to feel fast, intuitive, modern, and memorable.',
  },
  {
    icon: Target,
    title: 'Business Thinking',
    desc: 'We connect technology decisions to real business goals, users, and measurable outcomes.',
  },
];

const stats = [
  {
    value: '2020',
    label: 'Founded',
  },
  {
    value: '120+',
    label: 'Projects Delivered',
  },
  {
    value: '12+',
    label: 'Countries Served',
  },
  {
    value: '35+',
    label: 'Technology Professionals',
  },
];

/* =========================================================
   ANIMATED NUMBER
========================================================= */

/* =========================================================
   ABOUT PAGE
========================================================= */

export default function About() {
  const [activeJourney, setActiveJourney] = useState(0);

  return (
    <main className="overflow-hidden">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative min-h-[92vh] flex items-center justify-center px-6 pt-32 pb-24">

        {/* Background */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.12),transparent_40%)]" />

          <FloatingOrb
            duration={9}
            className="absolute top-24 left-[8%] w-72 h-72 rounded-full bg-indigo-200/30 blur-3xl"
          />

          <FloatingOrb
            duration={11}
            delay={1}
            className="absolute bottom-10 right-[5%] w-96 h-96 rounded-full bg-purple-200/30 blur-3xl"
          />

          <div className="absolute inset-0 opacity-[0.025] bg-[linear-gradient(#111827_1px,transparent_1px),linear-gradient(90deg,#111827_1px,transparent_1px)] bg-[size:70px_70px]" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">

          <FadeIn>
            <motion.div
              whileHover={{ scale: 1.04 }}
              className="section-tag mx-auto mb-7 w-fit"
            >
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mr-2 animate-pulse" />
              About Bluorbit Solutions
            </motion.div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black font-heading leading-[0.98] tracking-tight text-heading">
              We Build
              <br />
              <span className="gradient-text">
                Digital Excellence.
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.18}>
            <p className="max-w-3xl mx-auto mt-8 text-lg md:text-xl lg:text-2xl text-muted leading-relaxed">
              We combine strategy, design, engineering, automation,
              and artificial intelligence to help ambitious businesses
              build what comes next.
            </p>
          </FadeIn>

          <FadeIn delay={0.28}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">

              <Link
                to="/contact"
                className="btn-primary text-base px-7 py-3.5"
              >
                Start a Conversation
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/portfolio"
                className="btn-secondary text-base px-7 py-3.5"
              >
                Explore Our Work
                <ArrowRight className="w-4 h-4" />
              </Link>

            </div>
          </FadeIn>

          {/* Hero metrics */}
          <FadeIn delay={0.38}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto mt-16">

              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  whileHover={{
                    y: -6,
                    scale: 1.02,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 20,
                  }}
                  className="card p-5 sm:p-6 text-center bg-white/70 backdrop-blur-xl"
                >
                  <div className="text-2xl sm:text-3xl font-black font-heading gradient-text">
                    {index === 0 ? (
                      stat.value
                    ) : (
                      stat.value
                    )}
                  </div>

                  <div className="text-xs sm:text-sm text-muted mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}

            </div>
          </FadeIn>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{
            y: [0, 8, 0],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </section>

      {/* =====================================================
          INTRO / STORY
      ===================================================== */}

      <section className="relative py-28 px-6 section-alt">

        <div className="max-w-7xl mx-auto">

          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">

            <FadeIn direction="left">

              <div className="section-tag mb-5 w-fit">
                Our Story
              </div>

              <h2 className="text-4xl md:text-5xl font-black font-heading leading-tight mb-7">
                From a bold idea to a
                <br />
                <span className="gradient-text">
                  global technology partner.
                </span>
              </h2>

              <div className="space-y-5 text-muted leading-relaxed text-base md:text-lg">

                <p>
                  Bluorbit Solutions started with a simple belief:
                  <strong className="text-heading">
                    {' '}businesses deserve technology that works as hard as they do.
                  </strong>
                </p>

                <p>
                  We saw businesses investing heavily in technology while
                  still dealing with outdated systems, disconnected tools,
                  inefficient workflows, slow development cycles, and
                  technology partners who felt more like vendors than partners.
                </p>

                <p>
                  We believed there was a better way.
                </p>

                <p>
                  Bluorbit Solutions was built to combine
                  <strong className="text-heading">
                    {' '}world-class engineering standards
                  </strong>
                  {' '}with the agility, transparency, and personal attention
                  of a dedicated technology team.
                </p>

                <p>
                  Today, we help businesses turn ambitious ideas into
                  practical digital products — from modern websites and
                  custom software to intelligent automation and connected
                  business systems.
                </p>

              </div>

              <div className="mt-9 flex items-center gap-4">
                <div className="w-12 h-px bg-indigo-500" />
                <p className="font-bold font-heading text-heading text-lg">
                  We don't just build software.
                  <span className="gradient-text">
                    {' '}We build what's next.
                  </span>
                </p>
              </div>

            </FadeIn>

            <FadeIn
              delay={0.15}
              direction="right"
            >

              <div className="relative">

                {/* Decorative glow */}
                <div className="absolute -inset-8 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 blur-3xl rounded-full" />

                <div className="relative card p-6 sm:p-8 bg-white/70 backdrop-blur-xl">

                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-muted">
                        The Bluorbit Solutions Approach
                      </p>

                      <h3 className="text-xl font-bold font-heading mt-2">
                        Built around your growth
                      </h3>
                    </div>

                    <motion.div
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                      className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-lg"
                    >
                      <Sparkles className="w-6 h-6" />
                    </motion.div>
                  </div>

                  <div className="space-y-4">

                    {[
                      {
                        icon: Target,
                        title: 'Understand',
                        text: 'We start with the business problem, not the technology.',
                      },
                      {
                        icon: Layers3,
                        title: 'Design',
                        text: 'We turn complex requirements into simple experiences.',
                      },
                      {
                        icon: Code2,
                        title: 'Build',
                        text: 'We engineer scalable, maintainable digital products.',
                      },
                      {
                        icon: TrendingArrow,
                        title: 'Grow',
                        text: 'We continuously improve the system as your business evolves.',
                      },
                    ].map((item) => (
                      <motion.div
                        key={item.title}
                        whileHover={{ x: 6 }}
                        className="flex gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors"
                      >

                        <div className="w-11 h-11 rounded-xl bg-indigo-50 flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-5 h-5 text-primary" />
                        </div>

                        <div>
                          <h4 className="font-bold text-heading">
                            {item.title}
                          </h4>

                          <p className="text-sm text-muted mt-1 leading-relaxed">
                            {item.text}
                          </p>
                        </div>

                      </motion.div>
                    ))}

                  </div>

                </div>
              </div>

            </FadeIn>

          </div>
        </div>
      </section>

      {/* =====================================================
          VISION / MISSION
      ===================================================== */}

      <section className="py-28 px-6">

        <div className="max-w-7xl mx-auto">

          <FadeIn className="text-center mb-14">

            <div className="section-tag mx-auto mb-5 w-fit">
              What We Believe
            </div>

            <h2 className="text-4xl md:text-5xl font-black font-heading">
              Purpose before
              <span className="gradient-text">
                {' '}pixels.
              </span>
            </h2>

          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-6">

            {/* Vision */}
            <FadeIn direction="left">

              <motion.div
                whileHover={{ y: -8 }}
                className="relative h-full rounded-3xl p-8 sm:p-10 overflow-hidden border border-indigo-100 bg-gradient-to-br from-indigo-50 via-white to-blue-50"
              >

                <div className="absolute -right-16 -top-16 w-48 h-48 rounded-full bg-indigo-200/30 blur-3xl" />

                <div className="relative z-10">

                  <div className="flex items-center justify-between mb-8">

                    <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center">
                      <Eye className="w-8 h-8 text-indigo-600" />
                    </div>

                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-500">
                      01 / Vision
                    </span>

                  </div>

                  <h3 className="text-3xl font-black font-heading mb-3">
                    Technology Without Limits
                  </h3>

                  <p className="text-lg text-heading font-medium leading-relaxed mb-6">
                    To empower businesses with technology that transforms
                    ideas into opportunities and challenges into growth.
                  </p>

                  <p className="text-muted leading-relaxed">
                    We envision a world where access to great technology
                    can become a catalyst for every business ready to
                    build, grow, and create meaningful impact.
                  </p>

                </div>

              </motion.div>

            </FadeIn>

            {/* Mission */}
            <FadeIn direction="right">

              <motion.div
                whileHover={{ y: -8 }}
                className="relative h-full rounded-3xl p-8 sm:p-10 overflow-hidden border border-purple-100 bg-gradient-to-br from-purple-50 via-white to-fuchsia-50"
              >

                <div className="absolute -right-16 -top-16 w-48 h-48 rounded-full bg-purple-200/30 blur-3xl" />

                <div className="relative z-10">

                  <div className="flex items-center justify-between mb-8">

                    <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center">
                      <Target className="w-8 h-8 text-purple-600" />
                    </div>

                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-purple-500">
                      02 / Mission
                    </span>

                  </div>

                  <h3 className="text-3xl font-black font-heading mb-3">
                    Build Better. Move Faster.
                  </h3>

                  <p className="text-lg text-heading font-medium leading-relaxed mb-6">
                    To deliver innovative, scalable, and reliable
                    technology that solves real business challenges.
                  </p>

                  <p className="text-muted leading-relaxed">
                    We combine thoughtful strategy, exceptional design,
                    and engineering excellence to create solutions
                    built not just to launch, but to evolve and scale.
                  </p>

                </div>

              </motion.div>

            </FadeIn>

          </div>
        </div>
      </section>

      {/* =====================================================
          CAPABILITIES
      ===================================================== */}

      <section className="py-28 px-6 section-alt">

        <div className="max-w-7xl mx-auto">

          <FadeIn className="text-center mb-14">

            <div className="section-tag mx-auto mb-5 w-fit">
              What We Do Differently
            </div>

            <h2 className="text-4xl md:text-5xl font-black font-heading">
              Strategy.
              <span className="gradient-text">
                {' '}Technology.
              </span>
              <br />
              Impact.
            </h2>

            <p className="text-muted max-w-2xl mx-auto mt-5 text-lg leading-relaxed">
              Great digital products sit at the intersection of
              business strategy, beautiful experiences, and exceptional
              engineering.
            </p>

          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">

            {capabilities.map((item, index) => (
              <FadeIn
                key={item.title}
                delay={index * 0.08}
              >

                <motion.div
                  whileHover={{
                    y: -8,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 20,
                  }}
                  className="card p-7 h-full bg-white/70 backdrop-blur-xl group"
                >

                  <motion.div
                    whileHover={{
                      scale: 1.08,
                      rotate: 5,
                    }}
                    className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 flex items-center justify-center mb-6"
                  >
                    <item.icon
                      className="w-7 h-7 text-primary"
                      strokeWidth={1.6}
                    />
                  </motion.div>

                  <h3 className="text-xl font-bold font-heading mb-3">
                    {item.title}
                  </h3>

                  <p className="text-muted text-sm leading-relaxed">
                    {item.desc}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-primary text-sm font-semibold">
                    <span>Our approach</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>

                </motion.div>

              </FadeIn>
            ))}

          </div>

        </div>
      </section>

      {/* =====================================================
          JOURNEY
      ===================================================== */}

      <section className="py-28 px-6">

        <div className="max-w-7xl mx-auto">

          <FadeIn className="text-center mb-16">

            <div className="section-tag mx-auto mb-5 w-fit">
              Our Journey
            </div>

            <h2 className="text-4xl md:text-5xl font-black font-heading">
              Built with purpose.
              <br />
              <span className="gradient-text">
                Growing with impact.
              </span>
            </h2>

          </FadeIn>

          {/* Timeline */}

          <div className="relative">

            <div className="hidden lg:block absolute top-10 left-0 right-0 h-px bg-gradient-to-r from-indigo-100 via-indigo-400 to-purple-100" />

            <div className="grid lg:grid-cols-5 gap-5">

              {journey.map((item, index) => {
                const active = activeJourney === index;

                return (
                  <FadeIn
                    key={item.year}
                    delay={index * 0.08}
                  >

                    <motion.button
                      type="button"
                      onClick={() => setActiveJourney(index)}
                      whileHover={{ y: -8 }}
                      className={`relative text-left w-full card p-6 transition-all ${
                        active
                          ? 'border-indigo-300 shadow-[0_20px_60px_rgba(79,70,229,0.12)]'
                          : ''
                      }`}
                    >

                      {/* Timeline dot */}
                      <div className="hidden lg:flex absolute -top-[45px] left-6 w-5 h-5 rounded-full bg-white border-4 border-indigo-500 items-center justify-center z-10">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                      </div>

                      <div className="flex items-center justify-between mb-6">

                        <span className="text-3xl font-black font-heading gradient-text">
                          {item.year}
                        </span>

                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                            active
                              ? 'bg-indigo-600 text-white'
                              : 'bg-indigo-50 text-indigo-600'
                          }`}
                        >
                          <item.icon className="w-5 h-5" />
                        </div>

                      </div>

                      <h3 className="font-bold text-lg mb-2">
                        {item.title}
                      </h3>

                      <p className="text-muted text-sm leading-relaxed">
                        {item.desc}
                      </p>

                    </motion.button>

                  </FadeIn>
                );
              })}

            </div>
          </div>

          {/* Active journey panel */}

          <FadeIn delay={0.15}>

            <motion.div
              layout
              className="mt-8 rounded-3xl p-8 bg-gradient-to-r from-indigo-600 to-purple-700 text-white relative overflow-hidden"
            >

              <div className="absolute inset-0 opacity-20">
                <div className="absolute w-72 h-72 rounded-full bg-white blur-3xl -right-20 -top-40" />
                <div className="absolute w-56 h-56 rounded-full bg-cyan-300 blur-3xl -left-20 -bottom-40" />
              </div>

              <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6">

                <div className="w-16 h-16 rounded-2xl bg-white/15 border border-white/20 flex items-center justify-center flex-shrink-0">
                  {(() => {
                    const Icon = journey[activeJourney].icon;
                    return <Icon className="w-8 h-8" />;
                  })()}
                </div>

                <div>

                  <p className="text-indigo-200 text-sm font-semibold uppercase tracking-[0.18em]">
                    {journey[activeJourney].year}
                  </p>

                  <h3 className="text-2xl md:text-3xl font-bold font-heading mt-1">
                    {journey[activeJourney].title}
                  </h3>

                  <p className="text-indigo-100 mt-2 max-w-3xl leading-relaxed">
                    {journey[activeJourney].desc}
                  </p>

                </div>

              </div>

            </motion.div>

          </FadeIn>

        </div>
      </section>

      {/* =====================================================
          VALUES
      ===================================================== */}

      <section className="py-28 px-6 section-alt">

        <div className="max-w-7xl mx-auto">

          <FadeIn className="text-center mb-14">

            <div className="section-tag mx-auto mb-5 w-fit">
              Core Values
            </div>

            <h2 className="text-4xl md:text-5xl font-black font-heading">
              What drives
              <span className="gradient-text">
                {' '}everything we do.
              </span>
            </h2>

          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">

            {values.map((value, index) => (
              <FadeIn
                key={value.title}
                delay={index * 0.08}
              >

                <motion.div
                  whileHover={{
                    y: -10,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 20,
                  }}
                  className="card p-7 h-full text-center bg-white/70 backdrop-blur-xl group"
                >

                  <motion.div
                    whileHover={{
                      scale: 1.12,
                      rotate: 6,
                    }}
                    className={`w-14 h-14 rounded-2xl ${value.bg} mx-auto mb-5 flex items-center justify-center`}
                  >
                    <value.icon className="w-7 h-7 text-primary" />
                  </motion.div>

                  <h3 className="font-bold font-heading text-lg mb-3">
                    {value.title}
                  </h3>

                  <p className="text-muted text-sm leading-relaxed">
                    {value.desc}
                  </p>

                  <div className="mt-5 h-1 rounded-full bg-gray-100 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '70%' }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1,
                        delay: 0.2 + index * 0.08,
                      }}
                      className={`h-full bg-gradient-to-r ${value.color} rounded-full`}
                    />
                  </div>

                </motion.div>

              </FadeIn>
            ))}

          </div>

          <FadeIn className="text-center mt-16">

            <p className="text-xl md:text-2xl font-bold font-heading text-heading">
              Your vision is the starting point.
              <br />
              <span className="gradient-text">
                Our technology brings it to life.
              </span>
            </p>

          </FadeIn>

        </div>
      </section>

      {/* =====================================================
          TEAM / HUMAN SIDE
      ===================================================== */}

      <section className="py-28 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            <FadeIn direction="left">

              <div className="section-tag mb-5 w-fit">
                More Than Technology
              </div>

              <h2 className="text-4xl md:text-5xl font-black font-heading leading-tight mb-6">
                Technology is powerful.
                <br />
                <span className="gradient-text">
                  People make it matter.
                </span>
              </h2>

              <p className="text-muted text-lg leading-relaxed mb-6">
                We believe great products are created when talented people
                understand the people they are building for.
              </p>

              <p className="text-muted leading-relaxed mb-8">
                That's why collaboration sits at the center of our process.
                We listen carefully, challenge assumptions when needed,
                communicate clearly, and stay close to the problems our
                clients are trying to solve.
              </p>

              <div className="space-y-4">

                {[
                  'Direct and transparent communication',
                  'Business-first technical decisions',
                  'Design and engineering working together',
                  'Long-term thinking beyond launch',
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-heading font-medium">
                      {item}
                    </span>
                  </div>
                ))}

              </div>

            </FadeIn>

            <FadeIn direction="right">

              <div className="relative">

                <div className="absolute -inset-8 bg-gradient-to-br from-indigo-300/20 to-purple-300/20 rounded-full blur-3xl" />

                <div className="relative rounded-[2rem] bg-gradient-to-br from-gray-950 via-indigo-950 to-purple-950 p-8 sm:p-10 overflow-hidden shadow-2xl">

                  {/* Stars */}
                  <div className="absolute inset-0 opacity-40">
                    {[...Array(18)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{
                          opacity: [0.2, 1, 0.2],
                          scale: [0.8, 1.2, 0.8],
                        }}
                        transition={{
                          duration: 2 + (i % 3),
                          repeat: Infinity,
                          delay: i * 0.15,
                        }}
                        className="absolute w-1 h-1 rounded-full bg-white"
                        style={{
                          left: `${(i * 37) % 100}%`,
                          top: `${(i * 53) % 100}%`,
                        }}
                      />
                    ))}
                  </div>

                  <div className="relative z-10">

                    <div className="flex items-center justify-between mb-12">

                      <div className="flex items-center gap-3">

                        <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center">
                          <Globe2 className="w-5 h-5 text-indigo-300" />
                        </div>

                        <span className="text-white font-bold">
                          Bluorbit Solutions
                        </span>

                      </div>

                      <span className="text-xs text-indigo-300 uppercase tracking-[0.2em]">
                        Connected
                      </span>

                    </div>

                    <div className="text-center py-8">

                      <motion.div
                        animate={{
                          scale: [1, 1.05, 1],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                        }}
                        className="w-28 h-28 mx-auto rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-[0_0_80px_rgba(99,102,241,0.5)]"
                      >
                        <BrainCircuit className="w-14 h-14 text-white" />
                      </motion.div>

                      <h3 className="text-white text-2xl font-bold font-heading mt-8">
                        Build. Connect. Evolve.
                      </h3>

                      <p className="text-indigo-200 mt-3 leading-relaxed max-w-sm mx-auto">
                        A technology partner designed around the
                        changing needs of modern businesses.
                      </p>

                    </div>

                    <div className="grid grid-cols-3 gap-3 mt-8">

                      {[
                        ['Design', Sparkles],
                        ['Build', Code2],
                        ['Scale', Rocket],
                      ].map(([label, Icon]) => (
                        <div
                          key={label}
                          className="rounded-2xl bg-white/5 border border-white/10 p-4 text-center"
                        >
                          <Icon className="w-5 h-5 text-indigo-300 mx-auto mb-2" />
                          <span className="text-xs text-white/70">
                            {label}
                          </span>
                        </div>
                      ))}

                    </div>

                  </div>

                </div>

              </div>

            </FadeIn>

          </div>

        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="py-28 px-6">

        <div className="max-w-5xl mx-auto">

          <FadeIn>

            <div className="relative rounded-[2rem] overflow-hidden bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-800 p-10 sm:p-16 text-center shadow-[0_30px_100px_rgba(79,70,229,0.25)]">

              {/* Background effects */}

              <div className="absolute inset-0 pointer-events-none">

                <motion.div
                  animate={{
                    x: [0, 40, 0],
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 9,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute -top-32 -right-20 w-80 h-80 rounded-full bg-white/10 blur-3xl"
                />

                <motion.div
                  animate={{
                    x: [0, -30, 0],
                    y: [0, 20, 0],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute -bottom-40 -left-20 w-96 h-96 rounded-full bg-purple-300/20 blur-3xl"
                />

              </div>

              <div className="relative z-10">

                <motion.div
                  animate={{
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                  }}
                  className="w-16 h-16 mx-auto rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-7"
                >
                  <Rocket className="w-8 h-8 text-white" />
                </motion.div>

                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-[0.18em] mb-6">
                  <CircleDot className="w-3 h-3 text-emerald-300" />
                  Let's Build What's Next
                </div>

                <h2 className="text-4xl md:text-5xl font-black font-heading text-white leading-tight">
                  Your next big idea
                  <br />
                  starts here.
                </h2>

                <p className="text-indigo-100 text-lg max-w-2xl mx-auto mt-5 leading-relaxed">
                  Tell us what you're building, what you're trying to
                  improve, or where you're stuck. Let's turn the challenge
                  into something remarkable.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-9">

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-700 rounded-xl font-bold hover:bg-indigo-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
                  >
                    Start a Conversation
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    to="/portfolio"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 border border-white/25 text-white rounded-xl font-semibold hover:bg-white/15 transition-all"
                  >
                    View Our Work
                  </Link>

                </div>

              </div>

            </div>

          </FadeIn>

        </div>

      </section>

    </main>
  );
}

/* =========================================================
   SMALL INTERNAL ICON
   Avoids importing another icon just for one timeline item.
========================================================= */

function TrendingArrow(props) {
  return <ArrowRight {...props} />;
}