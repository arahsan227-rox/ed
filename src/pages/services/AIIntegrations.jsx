import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Bot,
  Brain,
  Check,
  Cpu,
  FileText,
  MessageSquare,
  Network,
  ScanText,
  Sparkles,
  Wand2,
  Zap,
} from 'lucide-react';

/* =========================================================
   ANIMATION HELPERS
========================================================= */

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
    left: { y: 0, x: -35 },
    right: { y: 0, x: 35 },
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

/* =========================================================
   DATA
========================================================= */

const features = [
  {
    icon: MessageSquare,
    title: 'Conversational AI',
    short: 'Talk',
    desc: 'Build intelligent assistants that understand context, answer questions, qualify leads, and support customers around the clock.',
    color: 'cyan',
  },
  {
    icon: FileText,
    title: 'Intelligent Documents',
    short: 'Read',
    desc: 'Turn PDFs, invoices, contracts, forms, and images into structured business data automatically.',
    color: 'violet',
  },
  {
    icon: Sparkles,
    title: 'Generative AI',
    short: 'Create',
    desc: 'Generate reports, proposals, emails, summaries, content, and other business outputs directly inside your workflow.',
    color: 'fuchsia',
  },
  {
    icon: Brain,
    title: 'Predictive Intelligence',
    short: 'Predict',
    desc: 'Use historical data and machine learning to identify patterns, opportunities, risks, and future trends.',
    color: 'emerald',
  },
];

const useCases = [
  'RAG-powered knowledge assistants',
  'AI lead qualification',
  'Intelligent document processing',
  'Automated report generation',
  'Customer sentiment analysis',
  'AI-powered internal search',
  'Predictive analytics',
  'Workflow copilots',
];

const technologies = [
  'OpenAI',
  'Claude',
  'Gemini',
  'LangChain',
  'LlamaIndex',
  'Pinecone',
  'Python',
  'TensorFlow',
  'Vector DBs',
  'RAG',
  'AI Agents',
  'APIs',
];

/* =========================================================
   FLOATING PARTICLE
========================================================= */

const Particle = ({ className = '', delay = 0 }) => (
  <motion.span
    className={`absolute w-1 h-1 rounded-full bg-cyan-300/80 shadow-[0_0_12px_rgba(34,211,238,0.9)] ${className}`}
    animate={{
      y: [0, -18, 0],
      opacity: [0.2, 1, 0.2],
      scale: [0.8, 1.4, 0.8],
    }}
    transition={{
      duration: 3 + delay,
      repeat: Infinity,
      ease: 'easeInOut',
      delay,
    }}
  />
);

/* =========================================================
   AI ORB
========================================================= */

const AIOrb = () => {
  return (
    <div className="relative w-full max-w-[520px] aspect-square mx-auto">

      {/* Outer glow */}
      <motion.div
        className="absolute inset-[12%] rounded-full bg-cyan-400/10 blur-3xl"
        animate={{
          scale: [0.9, 1.08, 0.9],
          opacity: [0.35, 0.7, 0.35],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Rotating rings */}
      <motion.div
        className="absolute inset-[10%] rounded-full border border-cyan-300/20"
        animate={{ rotate: 360 }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <motion.div
        className="absolute inset-[17%] rounded-full border border-violet-400/20"
        animate={{ rotate: -360 }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <motion.div
        className="absolute inset-[25%] rounded-full border border-cyan-300/10 border-dashed"
        animate={{ rotate: 360 }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Orb */}
      <motion.div
        className="absolute inset-[25%] rounded-full"
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-300 via-blue-500 to-violet-600 blur-[1px]" />

        <div className="absolute inset-[3px] rounded-full bg-slate-950 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_30%,rgba(103,232,249,0.45),transparent_28%),radial-gradient(circle_at_70%_70%,rgba(139,92,246,0.35),transparent_35%)]" />

          {/* Neural lines */}
          <div className="absolute inset-0 opacity-70">
            <svg
              viewBox="0 0 300 300"
              className="w-full h-full"
              fill="none"
            >
              <motion.path
                d="M60 155 C95 80 135 225 170 105 C200 35 240 155 255 80"
                stroke="#67e8f9"
                strokeWidth="1"
                strokeDasharray="5 8"
                animate={{ strokeDashoffset: [0, -50] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />

              <motion.path
                d="M45 90 C100 170 120 50 180 190 C210 250 230 130 265 210"
                stroke="#a78bfa"
                strokeWidth="1"
                strokeDasharray="4 10"
                animate={{ strokeDashoffset: [0, 60] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
            </svg>
          </div>

          {/* Core */}
          <motion.div
            className="absolute inset-[32%] rounded-full bg-gradient-to-br from-cyan-200 to-violet-400 blur-md"
            animate={{
              scale: [0.8, 1.12, 0.8],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          <div className="absolute inset-[39%] rounded-full bg-white shadow-[0_0_40px_rgba(103,232,249,0.9)]" />
        </div>
      </motion.div>

      {/* Floating nodes */}
      <motion.div
        className="absolute top-[19%] left-[18%] w-10 h-10 rounded-xl bg-slate-900/90 border border-cyan-400/30 flex items-center justify-center shadow-xl"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <Bot className="w-5 h-5 text-cyan-300" />
      </motion.div>

      <motion.div
        className="absolute bottom-[19%] right-[15%] w-10 h-10 rounded-xl bg-slate-900/90 border border-violet-400/30 flex items-center justify-center shadow-xl"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 3.5, repeat: Infinity }}
      >
        <Network className="w-5 h-5 text-violet-300" />
      </motion.div>

      <motion.div
        className="absolute top-[32%] right-[9%] w-8 h-8 rounded-lg bg-slate-900/90 border border-emerald-400/30 flex items-center justify-center"
        animate={{ x: [0, 8, 0] }}
        transition={{ duration: 2.8, repeat: Infinity }}
      >
        <Zap className="w-4 h-4 text-emerald-300" />
      </motion.div>

      {/* Particles */}
      <Particle className="top-[14%] left-[45%]" delay={0} />
      <Particle className="top-[30%] left-[8%]" delay={0.7} />
      <Particle className="bottom-[24%] left-[20%]" delay={1.2} />
      <Particle className="bottom-[12%] right-[40%]" delay={1.8} />
      <Particle className="top-[22%] right-[25%]" delay={0.5} />
      <Particle className="bottom-[35%] right-[5%]" delay={2} />
    </div>
  );
};

/* =========================================================
   MAIN PAGE
========================================================= */

export default function AIIntegrations() {
  return (
    <div className="overflow-hidden">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative pt-32 md:pt-40 pb-24 px-6">

        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-10 left-[10%] w-72 h-72 bg-cyan-400/10 blur-[120px] rounded-full" />
          <div className="absolute top-20 right-[5%] w-96 h-96 bg-violet-500/10 blur-[140px] rounded-full" />

          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(99,102,241,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,.7) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left */}
            <FadeIn direction="left">

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 border border-cyan-100 text-cyan-700 text-sm font-semibold mb-7">
                <motion.span
                  className="w-2 h-2 rounded-full bg-cyan-500"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                />
                AI Engineering & Integrations
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black font-heading leading-[0.98] tracking-tight text-heading">
                Intelligence
                <br />
                <span className="gradient-text">
                  Built Into
                </span>
                <br />
                Your Business.
              </h1>

              <p className="text-muted text-lg md:text-xl leading-relaxed max-w-2xl mt-7">
                We turn artificial intelligence into practical business
                systems — intelligent assistants, automated workflows,
                document intelligence, predictive models, and AI-powered
                products.
              </p>

              <div className="flex flex-wrap gap-4 mt-9">

                <Link
                  to="/contact"
                  className="group btn-primary inline-flex items-center gap-2"
                >
                  Build With AI
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <a
                  href="#capabilities"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-gray-200 bg-white text-heading font-semibold hover:border-cyan-200 hover:text-cyan-600 transition-all"
                >
                  Explore Capabilities
                </a>

              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-100 max-w-xl">

                <div>
                  <div className="text-2xl font-black font-heading text-heading">
                    24/7
                  </div>
                  <div className="text-xs text-muted mt-1">
                    AI Availability
                  </div>
                </div>

                <div>
                  <div className="text-2xl font-black font-heading text-heading">
                    API
                  </div>
                  <div className="text-xs text-muted mt-1">
                    Ready
                  </div>
                </div>

                <div>
                  <div className="text-2xl font-black font-heading text-heading">
                    RAG
                  </div>
                  <div className="text-xs text-muted mt-1">
                    Knowledge Systems
                  </div>
                </div>

              </div>

            </FadeIn>

            {/* Orb */}
            <FadeIn
              delay={0.2}
              direction="right"
              className="relative"
            >
              <AIOrb />
            </FadeIn>

          </div>
        </div>
      </section>

      {/* =====================================================
          CAPABILITIES
      ===================================================== */}

      <section
        id="capabilities"
        className="relative py-24 px-6 section-alt"
      >

        <div className="max-w-7xl mx-auto">

          <FadeIn className="text-center max-w-3xl mx-auto mb-14">

            <div className="section-tag mb-5 mx-auto w-fit">
              AI Capabilities
            </div>

            <h2 className="text-3xl md:text-5xl font-black font-heading text-heading">
              AI That Does More Than
              <span className="gradient-text"> Generate Text.</span>
            </h2>

            <p className="text-muted text-lg mt-5 leading-relaxed">
              We engineer AI systems around your actual workflows,
              data, customers, and business objectives.
            </p>

          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">

            {features.map((feature, index) => {
              const Icon = feature.icon;

              const colors = {
                cyan: {
                  icon: 'text-cyan-500',
                  bg: 'bg-cyan-50',
                  border: 'hover:border-cyan-200',
                  glow: 'group-hover:bg-cyan-100',
                },
                violet: {
                  icon: 'text-violet-500',
                  bg: 'bg-violet-50',
                  border: 'hover:border-violet-200',
                  glow: 'group-hover:bg-violet-100',
                },
                fuchsia: {
                  icon: 'text-fuchsia-500',
                  bg: 'bg-fuchsia-50',
                  border: 'hover:border-fuchsia-200',
                  glow: 'group-hover:bg-fuchsia-100',
                },
                emerald: {
                  icon: 'text-emerald-500',
                  bg: 'bg-emerald-50',
                  border: 'hover:border-emerald-200',
                  glow: 'group-hover:bg-emerald-100',
                },
              }[feature.color];

              return (
                <FadeIn
                  key={feature.title}
                  delay={index * 0.08}
                >
                  <motion.div
                    whileHover={{
                      y: -8,
                      scale: 1.015,
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 22,
                    }}
                    className={`group card p-7 h-full relative overflow-hidden border border-gray-100 ${colors.border} transition-colors duration-300`}
                  >

                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-cyan-300/10 to-violet-300/10 blur-3xl rounded-full group-hover:scale-150 transition-transform duration-700" />

                    <div
                      className={`relative w-14 h-14 rounded-2xl ${colors.bg} flex items-center justify-center mb-6 ${colors.glow} transition-colors`}
                    >
                      <Icon className={`w-7 h-7 ${colors.icon}`} />
                    </div>

                    <div className="text-xs uppercase tracking-widest text-muted font-bold mb-2">
                      {feature.short}
                    </div>

                    <h3 className="text-xl font-bold font-heading text-heading mb-3">
                      {feature.title}
                    </h3>

                    <p className="text-muted text-sm leading-relaxed">
                      {feature.desc}
                    </p>

                    <div className="mt-6 flex items-center gap-2 text-xs font-bold text-primary opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                      Explore capability
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>

                  </motion.div>
                </FadeIn>
              );
            })}

          </div>
        </div>
      </section>

      {/* =====================================================
          DARK AI SYSTEM SECTION
      ===================================================== */}

      <section className="relative py-28 px-6 bg-slate-950 overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">

          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 blur-[140px] rounded-full" />

          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-600/10 blur-[140px] rounded-full" />

          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)',
              backgroundSize: '50px 50px',
            }}
          />

        </div>

        <div className="max-w-7xl mx-auto relative z-10">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <FadeIn direction="left">

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyan-300 text-xs font-bold uppercase tracking-widest mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                Intelligent Systems
              </div>

              <h2 className="text-4xl md:text-5xl font-black font-heading text-white leading-tight">
                Don't Add AI.
                <br />
                <span className="text-cyan-300">
                  Build With It.
                </span>
              </h2>

              <p className="text-slate-400 text-lg leading-relaxed mt-6 max-w-xl">
                The most valuable AI isn't another chatbot floating on
                your website. It's intelligence embedded directly into
                the systems your business already depends on.
              </p>

              <div className="mt-8 space-y-4">

                {[
                  'Connect AI to your existing business data',
                  'Give models access to trusted company knowledge',
                  'Automate decisions and repetitive operations',
                  'Keep humans in control of critical workflows',
                ].map((item, index) => (

                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.08,
                    }}
                    className="flex items-center gap-3 text-slate-300"
                  >
                    <div className="w-6 h-6 rounded-full bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5 text-cyan-300" />
                    </div>

                    <span className="text-sm">
                      {item}
                    </span>
                  </motion.div>

                ))}

              </div>

            </FadeIn>

            {/* System visual */}
            <FadeIn direction="right" delay={0.15}>

              <div className="relative">

                <div className="absolute inset-0 bg-cyan-500/10 blur-3xl rounded-full" />

                <div className="relative rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-5 shadow-2xl">

                  {/* Window header */}
                  <div className="flex items-center gap-2 pb-4 border-b border-white/10">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />

                    <span className="ml-3 text-xs text-slate-500 font-mono">
                      ai-orchestration.system
                    </span>
                  </div>

                  {/* Flow */}
                  <div className="py-7 space-y-4">

                    {[
                      {
                        icon: MessageSquare,
                        title: 'Customer Request',
                        value: 'New support conversation',
                        color: 'cyan',
                      },
                      {
                        icon: ScanText,
                        title: 'Knowledge Retrieval',
                        value: '42 relevant documents found',
                        color: 'violet',
                      },
                      {
                        icon: Brain,
                        title: 'AI Reasoning',
                        value: 'Context + business rules',
                        color: 'fuchsia',
                      },
                      {
                        icon: Wand2,
                        title: 'Action',
                        value: 'Response + CRM update',
                        color: 'emerald',
                      },
                    ].map((step, index) => {
                      const Icon = step.icon;

                      return (
                        <div key={step.title}>

                          <motion.div
                            initial={{
                              opacity: 0,
                              x: 20,
                            }}
                            whileInView={{
                              opacity: 1,
                              x: 0,
                            }}
                            viewport={{
                              once: true,
                            }}
                            transition={{
                              delay: index * 0.12,
                            }}
                            className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.045] border border-white/[0.08]"
                          >

                            <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                              <Icon className="w-5 h-5 text-cyan-300" />
                            </div>

                            <div className="min-w-0">
                              <div className="text-white text-sm font-bold">
                                {step.title}
                              </div>

                              <div className="text-slate-500 text-xs mt-1 truncate">
                                {step.value}
                              </div>
                            </div>

                            <motion.div
                              className="ml-auto w-2 h-2 rounded-full bg-emerald-400"
                              animate={{
                                opacity: [0.3, 1, 0.3],
                              }}
                              transition={{
                                duration: 1.5,
                                repeat: Infinity,
                              }}
                            />

                          </motion.div>

                          {index < 3 && (
                            <div className="flex justify-center py-1">
                              <div className="w-px h-5 bg-gradient-to-b from-cyan-400/40 to-violet-400/10" />
                            </div>
                          )}

                        </div>
                      );
                    })}

                  </div>

                  <div className="flex items-center justify-between px-4 py-3 rounded-xl bg-cyan-400/5 border border-cyan-400/10">
                    <span className="text-xs text-slate-500 font-mono">
                      SYSTEM STATUS
                    </span>

                    <span className="flex items-center gap-2 text-xs text-emerald-300 font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,.8)]" />
                      OPERATIONAL
                    </span>
                  </div>

                </div>
              </div>

            </FadeIn>

          </div>
        </div>
      </section>

      {/* =====================================================
          USE CASES
      ===================================================== */}

      <section className="py-24 px-6">

        <div className="max-w-7xl mx-auto">

          <FadeIn className="text-center mb-14">

            <div className="section-tag mb-5 mx-auto w-fit">
              What We Build
            </div>

            <h2 className="text-3xl md:text-5xl font-black font-heading text-heading">
              From Idea to
              <span className="gradient-text"> Intelligent Product.</span>
            </h2>

          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">

            {useCases.map((item, index) => (

              <FadeIn
                key={item}
                delay={index * 0.05}
              >

                <motion.div
                  whileHover={{
                    x: 4,
                  }}
                  className="group flex items-center gap-3 p-5 rounded-2xl border border-gray-100 bg-white hover:border-cyan-200 hover:shadow-lg hover:shadow-cyan-500/5 transition-all"
                >

                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-50 to-violet-50 border border-gray-100 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-4 h-4 text-cyan-500 group-hover:scale-110 transition-transform" />
                  </div>

                  <span className="text-sm font-semibold text-heading">
                    {item}
                  </span>

                </motion.div>

              </FadeIn>

            ))}

          </div>

        </div>
      </section>

      {/* =====================================================
          TECHNOLOGY STACK
      ===================================================== */}

      <section className="py-20 px-6 section-alt border-y border-gray-100">

        <div className="max-w-6xl mx-auto text-center">

          <FadeIn>

            <div className="flex justify-center mb-5">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-50 to-violet-50 border border-cyan-100 flex items-center justify-center">
                <Cpu className="w-6 h-6 text-cyan-500" />
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-black font-heading text-heading">
              Modern AI Infrastructure
            </h3>

            <p className="text-muted max-w-2xl mx-auto mt-4 mb-9">
              We choose models, databases, frameworks, and infrastructure
              around the problem — not the trend.
            </p>

            <div className="flex flex-wrap justify-center gap-3">

              {technologies.map((tech, index) => (

                <motion.span
                  key={tech}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.04,
                  }}
                  whileHover={{
                    y: -4,
                    scale: 1.04,
                  }}
                  className="px-4 py-2.5 bg-white border border-gray-200 text-body text-sm font-semibold rounded-xl shadow-sm hover:border-cyan-200 hover:text-cyan-600 hover:shadow-md transition-colors cursor-default"
                >
                  {tech}
                </motion.span>

              ))}

            </div>

          </FadeIn>

        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="py-24 px-6">

        <FadeIn className="max-w-5xl mx-auto">

          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-cyan-500 via-blue-600 to-violet-700 p-10 md:p-16 text-center shadow-2xl shadow-blue-500/20">

            {/* Animated glow */}
            <motion.div
              className="absolute -top-32 -right-32 w-72 h-72 rounded-full bg-white/20 blur-3xl"
              animate={{
                scale: [1, 1.25, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
            />

            <motion.div
              className="absolute -bottom-32 -left-32 w-72 h-72 rounded-full bg-cyan-200/20 blur-3xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.15, 0.35, 0.15],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
              }}
            />

            <div className="relative z-10">

              <div className="w-16 h-16 rounded-2xl bg-white/15 border border-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-7">
                <Bot className="w-8 h-8 text-white" />
              </div>

              <h2 className="text-3xl md:text-5xl font-black font-heading text-white leading-tight">
                Your Next Product Could
                <br />
                <span className="text-cyan-100">
                  Think For Itself.
                </span>
              </h2>

              <p className="text-blue-100 text-lg max-w-2xl mx-auto mt-5 leading-relaxed">
                Tell us what you're trying to automate, build, predict,
                or improve. We'll help turn the idea into an intelligent
                system designed around your business.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mt-9">

                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-blue-700 font-bold shadow-xl hover:bg-blue-50 transition-all"
                >
                  Start Your AI Project
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

              </div>

            </div>

          </div>

        </FadeIn>

      </section>

    </div>
  );
}
