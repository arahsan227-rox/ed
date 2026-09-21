import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
ArrowRight,
RefreshCcw,
BellRing,
Database,
Share2,
Zap,
Workflow,
Bot,
Clock3,
CheckCircle2,
Sparkles,
ShieldCheck,
BarChart3,
Layers3,
ChevronRight,
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

const initial =
direction === 'left'
? { opacity: 0, x: -35 }
: direction === 'right'
? { opacity: 0, x: 35 }
: { opacity: 0, y: 30 };

const animate =
direction === 'left'
? { opacity: 1, x: 0 }
: direction === 'right'
? { opacity: 1, x: 0 }
: { opacity: 1, y: 0 };

return (
<motion.div
ref={ref}
initial={initial}
animate={inView ? animate : {}}
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

const features = [
{
icon: RefreshCcw,
title: 'CRM Automation',
desc: 'Automatically capture leads, update pipelines, trigger follow-ups, and keep your sales system moving.',
color: 'emerald',
},
{
icon: Database,
title: 'Data Synchronization',
desc: 'Keep customer, sales, inventory, and operational data synchronized across your entire technology stack.',
color: 'cyan',
},
{
icon: BellRing,
title: 'Smart Notifications',
desc: 'Send intelligent alerts through Slack, email, SMS, WhatsApp, or your preferred communication channel.',
color: 'amber',
},
{
icon: Share2,
title: 'API Integrations',
desc: 'Connect modern SaaS products, internal systems, databases, and legacy applications into one workflow.',
color: 'violet',
},
];

const workflowSteps = [
{
number: '01',
icon: Workflow,
title: 'Capture',
desc: 'Collect information from forms, CRMs, emails, APIs, payments, and business systems.',
},
{
number: '02',
icon: Bot,
title: 'Decide',
desc: 'Apply business rules, AI, conditions, filters, and intelligent routing to every event.',
},
{
number: '03',
icon: Zap,
title: 'Execute',
desc: 'Automatically trigger the right action across your connected tools and systems.',
},
{
number: '04',
icon: BarChart3,
title: 'Improve',
desc: 'Monitor workflows, measure results, identify bottlenecks, and continuously optimize.',
},
];

const useCases = [
'Lead capture & qualification',
'Sales follow-up automation',
'Invoice & payment workflows',
'Customer onboarding',
'HR employee onboarding',
'Support ticket routing',
'Marketing campaign automation',
'Internal approval workflows',
];

const technologies = [
'Make.com',
'Zapier',
'n8n',
'Webhooks',
'REST APIs',
'Twilio',
'Stripe',
'HubSpot',
'Slack',
'Google Workspace',
'OpenAI',
'PostgreSQL',
];

const stats = [
{
value: '24/7',
label: 'Automated Operations',
icon: Clock3,
},
{
value: '∞',
label: 'Scalable Workflows',
icon: Layers3,
},
{
value: '100%',
label: 'Process Visibility',
icon: BarChart3,
},
{
value: '1',
label: 'Connected Ecosystem',
icon: Workflow,
},
];

export default function BusinessAutomation() {
return (
<>
{/* =========================================================
HERO
========================================================= */} <section className="relative overflow-hidden pt-36 pb-24 px-6">
{/* Background glow */} <div className="absolute inset-0 pointer-events-none overflow-hidden">
<motion.div
animate={{
x: [0, 40, 0],
y: [0, -30, 0],
scale: [1, 1.08, 1],
}}
transition={{
duration: 12,
repeat: Infinity,
ease: 'easeInOut',
}}
className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-emerald-400/10 blur-3xl"
/>

```
      <motion.div
        animate={{
          x: [0, -50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-20 -right-32 w-[28rem] h-[28rem] rounded-full bg-cyan-400/10 blur-3xl"
      />

      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(16,185,129,1) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />
    </div>

    <div className="relative max-w-7xl mx-auto">
      <div className="max-w-4xl mx-auto text-center">
        <FadeIn>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="section-tag mb-7 mx-auto w-fit"
          >
            <span className="inline-flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              Business Automation
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black font-heading tracking-tight leading-[1.05] mb-7">
            Your Business.
            <br />
            <span className="gradient-text">Running Itself.</span>
          </h1>

          <p className="text-muted text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Replace repetitive manual work with intelligent workflows
            that connect your people, tools, data, and customers —
            automatically.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-9">
            <Link
              to="/contact"
              className="btn-primary group inline-flex items-center gap-2 px-7 py-3.5"
            >
              Automate Your Workflow
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-gray-200 bg-white text-heading font-semibold hover:border-emerald-300 hover:text-emerald-600 transition-all"
            >
              See How It Works
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </FadeIn>
      </div>

      {/* Hero automation visual */}
      <FadeIn delay={0.2}>
        <div className="relative max-w-5xl mx-auto mt-20">
          <div className="absolute inset-0 bg-emerald-400/10 blur-3xl rounded-full" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="relative rounded-3xl border border-gray-200 bg-white/90 backdrop-blur-xl shadow-2xl overflow-hidden"
          >
            {/* top bar */}
            <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              </div>

              <div className="text-xs font-semibold text-muted">
                AUTOMATION ENGINE
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Live
              </div>
            </div>

            <div className="p-6 md:p-10">
              <div className="grid md:grid-cols-5 gap-4 items-center">
                {[
                  {
                    icon: Database,
                    title: 'New Lead',
                    color: 'bg-blue-50 text-blue-600',
                  },
                  {
                    icon: Bot,
                    title: 'AI Qualifies',
                    color: 'bg-violet-50 text-violet-600',
                  },
                  {
                    icon: Workflow,
                    title: 'Route',
                    color: 'bg-emerald-50 text-emerald-600',
                  },
                  {
                    icon: BellRing,
                    title: 'Notify Team',
                    color: 'bg-amber-50 text-amber-600',
                  },
                  {
                    icon: CheckCircle2,
                    title: 'CRM Updated',
                    color: 'bg-cyan-50 text-cyan-600',
                  },
                ].map((step, i) => {
                  const Icon = step.icon;

                  return (
                    <div
                      key={step.title}
                      className="flex md:flex-col items-center gap-3"
                    >
                      <motion.div
                        animate={{
                          y: [0, -5, 0],
                        }}
                        transition={{
                          duration: 2.5,
                          delay: i * 0.2,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                        className={`w-14 h-14 rounded-2xl ${step.color} flex items-center justify-center shadow-sm`}
                      >
                        <Icon className="w-6 h-6" />
                      </motion.div>

                      <div className="text-center">
                        <div className="font-bold text-sm text-heading">
                          {step.title}
                        </div>
                        <div className="text-[11px] text-muted mt-1">
                          Step {i + 1}
                        </div>
                      </div>

                      {i < 4 && (
                        <div className="hidden md:block absolute" />
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 h-px bg-gradient-to-r from-transparent via-emerald-300 to-transparent" />

              <div className="flex flex-wrap justify-center gap-3 mt-7">
                {['CRM', 'Email', 'Slack', 'WhatsApp', 'Payments', 'AI'].map(
                  (item, i) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + i * 0.08 }}
                      className="px-3.5 py-2 rounded-lg bg-gray-50 border border-gray-100 text-xs font-semibold text-body"
                    >
                      {item}
                    </motion.span>
                  )
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </FadeIn>
    </div>
  </section>

  {/* =========================================================
      STATS
  ========================================================= */}
  <section className="px-6 pb-20">
    <div className="max-w-6xl mx-auto">
      <FadeIn>
        <div className="grid grid-cols-2 lg:grid-cols-4 rounded-3xl border border-gray-200 bg-white shadow-sm overflow-hidden">
          {stats.map((stat, i) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className={`p-7 text-center ${
                  i !== stats.length - 1
                    ? 'border-b lg:border-b-0 lg:border-r border-gray-100'
                    : ''
                }`}
              >
                <Icon className="w-5 h-5 mx-auto mb-3 text-emerald-500" />
                <div className="text-3xl font-black font-heading gradient-text">
                  {stat.value}
                </div>
                <div className="text-xs text-muted mt-1 font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </FadeIn>
    </div>
  </section>

  {/* =========================================================
      FEATURES
  ========================================================= */}
  <section className="relative px-6 py-24 section-alt overflow-hidden">
    <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400/5 blur-3xl rounded-full pointer-events-none" />

    <div className="relative max-w-7xl mx-auto">
      <FadeIn className="text-center mb-14">
        <div className="section-tag mb-5 mx-auto w-fit">
          Automation Capabilities
        </div>

        <h2 className="text-3xl md:text-5xl font-black font-heading text-heading">
          Turn Busywork Into
          <span className="gradient-text"> Business Momentum</span>
        </h2>

        <p className="text-muted max-w-2xl mx-auto mt-5 leading-relaxed">
          We design connected systems that remove repetitive work,
          eliminate bottlenecks, and help your team operate at a higher
          level.
        </p>
      </FadeIn>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {features.map((feature, i) => {
          const Icon = feature.icon;

          return (
            <FadeIn key={feature.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 20,
                }}
                className="group relative h-full bg-white border border-gray-200 rounded-2xl p-7 shadow-sm hover:shadow-xl hover:border-emerald-200 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute -right-10 -top-10 w-28 h-28 rounded-full bg-emerald-50 group-hover:scale-150 transition-transform duration-500" />

                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-lg font-bold font-heading text-heading mb-3">
                    {feature.title}
                  </h3>

                  <p className="text-muted text-sm leading-relaxed">
                    {feature.desc}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-xs font-bold text-emerald-600">
                    Explore capability
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          );
        })}
      </div>
    </div>
  </section>

  {/* =========================================================
      HOW IT WORKS
  ========================================================= */}
  <section id="how-it-works" className="px-6 py-24">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-16 items-start">
        <FadeIn direction="left">
          <div className="section-tag mb-5 w-fit">
            How It Works
          </div>

          <h2 className="text-3xl md:text-5xl font-black font-heading text-heading leading-tight">
            From Trigger
            <br />
            <span className="gradient-text">to Outcome.</span>
          </h2>

          <p className="text-muted leading-relaxed mt-6 max-w-lg">
            Automation shouldn't mean adding complexity. We map your
            existing processes, identify opportunities, and create
            systems that work quietly in the background.
          </p>

          <div className="mt-8 p-5 rounded-2xl bg-emerald-50 border border-emerald-100">
            <div className="flex gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-heading text-sm">
                  Built for reliability
                </div>
                <p className="text-muted text-sm leading-relaxed mt-1">
                  Every workflow is designed with validation, error
                  handling, monitoring, and fallback paths in mind.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        <div className="space-y-5">
          {workflowSteps.map((step, i) => {
            const Icon = step.icon;

            return (
              <FadeIn key={step.number} delay={i * 0.1} direction="right">
                <motion.div
                  whileHover={{ x: 6 }}
                  className="group flex gap-5 p-6 rounded-2xl border border-gray-200 bg-white hover:border-emerald-200 hover:shadow-lg transition-all"
                >
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-2xl bg-gray-50 group-hover:bg-emerald-50 flex items-center justify-center transition-colors">
                      <Icon className="w-6 h-6 text-emerald-600" />
                    </div>
                  </div>

                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-black text-emerald-500 tracking-widest">
                        {step.number}
                      </span>

                      <h3 className="text-lg font-bold font-heading text-heading">
                        {step.title}
                      </h3>
                    </div>

                    <p className="text-muted text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </div>
  </section>

  {/* =========================================================
      USE CASES
  ========================================================= */}
  <section className="px-6 py-24 section-alt">
    <div className="max-w-7xl mx-auto">
      <FadeIn className="text-center mb-14">
        <div className="section-tag mb-5 mx-auto w-fit">
          What We Automate
        </div>

        <h2 className="text-3xl md:text-5xl font-black font-heading text-heading">
          If It's Repetitive,
          <span className="gradient-text"> We Can Optimize It.</span>
        </h2>
      </FadeIn>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {useCases.map((item, i) => (
          <FadeIn key={item} delay={i * 0.05}>
            <motion.div
              whileHover={{ scale: 1.02, y: -3 }}
              className="flex items-center gap-3 p-5 rounded-xl bg-white border border-gray-200 shadow-sm hover:border-emerald-200 hover:shadow-md transition-all"
            >
              <div className="w-9 h-9 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              </div>

              <span className="font-semibold text-sm text-heading">
                {item}
              </span>
            </motion.div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>

  {/* =========================================================
      SYSTEM VISUAL
  ========================================================= */}
  <section className="px-6 py-24">
    <div className="max-w-7xl mx-auto">
      <FadeIn>
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 p-8 md:p-14 text-white">
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-40 -left-20 w-80 h-80 rounded-full bg-black/10 blur-3xl" />

          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold mb-6">
                <Zap className="w-3.5 h-3.5" />
                Intelligent Infrastructure
              </div>

              <h2 className="text-3xl md:text-5xl font-black font-heading leading-tight">
                Connect Everything.
                <br />
                Automate Anything.
              </h2>

              <p className="text-emerald-50/90 leading-relaxed mt-5 max-w-xl">
                Build a digital operating layer that lets your systems
                communicate, react, and execute without constant human
                intervention.
              </p>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 mt-8 px-6 py-3.5 rounded-xl bg-white text-emerald-700 font-bold hover:bg-emerald-50 transition-colors shadow-xl"
              >
                Build Your Automation System
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="relative">
              <div className="rounded-3xl bg-white/10 border border-white/20 backdrop-blur-xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm font-bold">
                    Workflow Status
                  </span>

                  <span className="flex items-center gap-2 text-xs font-semibold text-emerald-100">
                    <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
                    All Systems Operational
                  </span>
                </div>

                <div className="space-y-3">
                  {[
                    ['Lead captured', 'Completed'],
                    ['AI qualification', 'Completed'],
                    ['CRM update', 'Completed'],
                    ['Sales notification', 'Completed'],
                    ['Follow-up scheduled', 'Completed'],
                  ].map(([name, status], i) => (
                    <motion.div
                      key={name}
                      initial={{ opacity: 0, x: 15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center justify-between p-3.5 rounded-xl bg-white/10 border border-white/10"
                    >
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-4 h-4 text-emerald-200" />
                        <span className="text-sm font-medium">
                          {name}
                        </span>
                      </div>

                      <span className="text-[11px] font-bold text-emerald-100">
                        {status}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  </section>

  {/* =========================================================
      TECHNOLOGIES
  ========================================================= */}
  <section className="px-6 py-20 section-alt border-y border-gray-100">
    <div className="max-w-7xl mx-auto text-center">
      <FadeIn>
        <div className="section-tag mb-5 mx-auto w-fit">
          Connected Ecosystem
        </div>

        <h2 className="text-3xl md:text-4xl font-black font-heading text-heading">
          Works With Your Existing Stack
        </h2>

        <p className="text-muted max-w-2xl mx-auto mt-4 mb-9">
          We don't force your business into a new platform. We connect the
          tools you already rely on and build the missing bridges.
        </p>

        <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
          {technologies.map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              whileHover={{ y: -3 }}
              className="px-4 py-2.5 rounded-xl bg-white border border-gray-200 text-body text-sm font-semibold shadow-sm hover:border-emerald-200 hover:text-emerald-700 transition-all"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </FadeIn>
    </div>
  </section>

  {/* =========================================================
      CTA
  ========================================================= */}
  <section className="px-6 py-24">
    <FadeIn className="max-w-4xl mx-auto text-center">
      <div className="relative overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-xl p-10 md:p-16">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-40 bg-emerald-400/10 blur-3xl rounded-full" />

        <div className="relative">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-emerald-50 flex items-center justify-center mb-7">
            <Zap className="w-8 h-8 text-emerald-500" />
          </div>

          <h2 className="text-3xl md:text-5xl font-black font-heading text-heading">
            Ready to Stop Doing
            <br />
            <span className="gradient-text">Work Machines Can Do?</span>
          </h2>

          <p className="text-muted max-w-2xl mx-auto mt-5 leading-relaxed">
            Tell us what your team does manually today. We'll help you
            identify the workflows worth automating and turn them into a
            reliable digital system.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Link
              to="/contact"
              className="btn-primary inline-flex items-center gap-2 px-7 py-3.5 group"
            >
              Start Your Automation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-gray-200 bg-white text-heading font-semibold hover:border-emerald-300 hover:text-emerald-600 transition-all"
            >
              Explore Services
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </FadeIn>
  </section>
</>


);
}
