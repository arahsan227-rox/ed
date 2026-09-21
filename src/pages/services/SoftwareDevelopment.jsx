import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
ArrowRight,
Server,
LayoutDashboard,
LineChart,
Lock,
Users,
Database,
ShieldCheck,
Workflow,
Code2,
Cloud,
Check,
Sparkles,
Layers3,
Gauge,
Boxes,
Settings2,
ExternalLink,
} from 'lucide-react';

const FadeIn = ({ children, delay = 0, className = '' }) => {
const ref = useRef(null);

const inView = useInView(ref, {
once: true,
margin: '-70px',
});

return (
<motion.div
ref={ref}
initial={{ opacity: 0, y: 28 }}
animate={
inView
? {
opacity: 1,
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
icon: LayoutDashboard,
title: 'Custom Business Portals',
desc: 'Secure dashboards and portals designed around your exact workflows, roles, teams, and customers.',
},
{
icon: LineChart,
title: 'Data & Analytics',
desc: 'Turn complex operational data into useful dashboards, reports, KPIs, and decision-making tools.',
},
{
icon: Lock,
title: 'Enterprise Security',
desc: 'Build secure systems with authentication, authorization, role-based access, audit trails, and protected data.',
},
{
icon: Users,
title: 'Multi-Tenant SaaS',
desc: 'Architect scalable platforms that can securely support multiple organizations from one application.',
},
{
icon: Workflow,
title: 'Workflow Engines',
desc: 'Digitize complicated business processes and connect people, systems, approvals, and automation.',
},
{
icon: Database,
title: 'Data Platforms',
desc: 'Design reliable database architectures that keep business-critical information fast, consistent, and accessible.',
},
];

const capabilities = [
'Custom ERP / CRM Systems',
'Logistics & Inventory Platforms',
'Healthcare Management Systems',
'Fintech & Payment Applications',
'Internal Operations Software',
'Multi-Tenant SaaS Platforms',
'Customer & Partner Portals',
'Business Intelligence Dashboards',
];

const process = [
{
number: '01',
icon: SearchIcon,
title: 'Discover',
desc: 'We map your workflows, users, requirements, integrations, constraints, and long-term business goals.',
},
{
number: '02',
icon: Layers3,
title: 'Architect',
desc: 'We design the system architecture, data model, infrastructure, APIs, security model, and technical roadmap.',
},
{
number: '03',
icon: Code2,
title: 'Build',
desc: 'Our team turns the architecture into production-ready software through iterative development and testing.',
},
{
number: '04',
icon: Gauge,
title: 'Scale',
desc: 'After launch, we optimize performance, monitor infrastructure, improve features, and prepare the platform for growth.',
},
];

function SearchIcon(props) {
return <Settings2 {...props} />;
}

const architecture = [
{
icon: LayoutDashboard,
title: 'Experience Layer',
desc: 'Web apps, portals & dashboards',
color: 'bg-blue-50 text-blue-600 border-blue-100',
},
{
icon: Code2,
title: 'Application Layer',
desc: 'APIs, services & business logic',
color: 'bg-purple-50 text-purple-600 border-purple-100',
},
{
icon: Database,
title: 'Data Layer',
desc: 'Databases, cache & analytics',
color: 'bg-cyan-50 text-cyan-600 border-cyan-100',
},
{
icon: Cloud,
title: 'Infrastructure',
desc: 'Cloud, containers & deployment',
color: 'bg-orange-50 text-orange-600 border-orange-100',
},
];

const technologies = [
'React',
'Next.js',
'Node.js',
'NestJS',
'TypeScript',
'Python',
'PostgreSQL',
'MySQL',
'MongoDB',
'Redis',
'Docker',
'Kubernetes',
'AWS',
'REST APIs',
'GraphQL',
'GitHub Actions',
];

const stats = [
{
value: 'Custom',
label: 'Built Around Your Workflow',
icon: Boxes,
},
{
value: 'API',
label: 'Integration Ready',
icon: Workflow,
},
{
value: 'Cloud',
label: 'Deployment Ready',
icon: Cloud,
},
{
value: 'Secure',
label: 'Security First',
icon: ShieldCheck,
},
];

export default function SoftwareDevelopment() {
return (
<>
{/* =========================================================
HERO
========================================================= */} <section className="relative overflow-hidden pt-36 pb-24 px-6"> <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden"> <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[750px] h-[750px] rounded-full bg-purple-100/30 blur-3xl" />

```
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-indigo-100/30 blur-3xl" />

      <div className="absolute top-80 -left-32 w-80 h-80 rounded-full bg-blue-100/20 blur-3xl" />

      <div className="absolute inset-0 opacity-[0.035]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              'linear-gradient(#7c3aed 1px, transparent 1px), linear-gradient(90deg, #7c3aed 1px, transparent 1px)',
            backgroundSize: '44px 44px',
          }}
        />
      </div>
    </div>

    <div className="max-w-7xl mx-auto">
      <FadeIn>
        <div className="text-center max-w-4xl mx-auto">
          <div className="section-tag mb-6 mx-auto w-fit inline-flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            Software Development
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black font-heading leading-[1.04] tracking-tight mb-7 text-heading">
            Software That Fits Your{' '}
            <span className="gradient-text">Business Perfectly</span>
          </h1>

          <p className="text-muted text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            We design and build powerful custom software for businesses
            that have outgrown spreadsheets, disconnected tools, and
            off-the-shelf limitations.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/contact"
              className="btn-primary inline-flex items-center gap-2 px-6 py-3.5 group"
            >
              Discuss Your Software
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-gray-200 bg-white text-heading font-semibold hover:border-purple-200 hover:bg-purple-50/40 transition-all"
            >
              Explore Our Work
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </FadeIn>

      {/* =====================================================
          ARCHITECTURE VISUAL
      ===================================================== */}
      <FadeIn delay={0.15} className="mt-16">
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute -inset-5 bg-gradient-to-r from-purple-200/30 via-indigo-200/30 to-blue-200/30 blur-3xl rounded-[2rem]" />

          <div className="relative rounded-3xl bg-gray-950 border border-gray-800 shadow-2xl overflow-hidden">
            <div className="px-5 py-4 border-b border-gray-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                </div>

                <span className="text-xs font-semibold text-gray-400">
                  System Architecture
                </span>
              </div>

              <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Production ready
              </div>
            </div>

            <div className="p-6 md:p-10">
              <div className="grid md:grid-cols-4 gap-4">
                {architecture.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.title} className="relative">
                      <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: 0.35 + index * 0.1,
                          duration: 0.5,
                        }}
                        className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 h-full"
                      >
                        <div
                          className={`w-11 h-11 rounded-xl border flex items-center justify-center mb-5 ${item.color}`}
                        >
                          <Icon className="w-5 h-5" />
                        </div>

                        <h3 className="text-sm font-bold text-white mb-2">
                          {item.title}
                        </h3>

                        <p className="text-xs text-gray-500 leading-relaxed">
                          {item.desc}
                        </p>
                      </motion.div>

                      {index < architecture.length - 1 && (
                        <div className="hidden md:flex absolute top-1/2 -right-3 z-10 w-6 h-6 rounded-full bg-gray-900 border border-gray-700 items-center justify-center">
                          <ArrowRight className="w-3 h-3 text-purple-400" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;

                  return (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        delay: 0.7 + index * 0.08,
                      }}
                      className="rounded-xl bg-white/[0.03] border border-white/5 p-4"
                    >
                      <Icon className="w-4 h-4 text-purple-400 mb-3" />

                      <div className="text-sm font-bold text-white">
                        {stat.value}
                      </div>

                      <div className="text-[11px] text-gray-500 mt-1">
                        {stat.label}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  </section>

  {/* =========================================================
      INTRO / VALUE
  ========================================================= */}
  <section className="px-6 py-24">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
      <FadeIn>
        <div className="relative">
          <div className="absolute -inset-4 bg-purple-100/50 blur-2xl rounded-[2rem]" />

          <div className="relative card p-8 md:p-10 bg-gradient-to-br from-purple-50 via-white to-indigo-50 border-purple-100">
            <div className="w-14 h-14 rounded-2xl bg-white border border-purple-100 shadow-sm flex items-center justify-center mb-7">
              <Server className="w-7 h-7 text-purple-600" />
            </div>

            <div className="section-tag w-fit mb-5">
              Built For Complexity
            </div>

            <h2 className="text-3xl md:text-4xl font-black font-heading text-heading leading-tight mb-5">
              Stop forcing your business to fit{' '}
              <span className="gradient-text">generic software.</span>
            </h2>

            <p className="text-muted leading-relaxed mb-7">
              When your workflows become unique, your software should
              become unique too. We build systems around the way your
              organization actually operates — from internal operations to
              customer-facing platforms.
            </p>

            <div className="space-y-3">
              {capabilities.slice(0, 6).map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-body font-medium"
                >
                  <div className="w-6 h-6 rounded-full bg-white border border-purple-100 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-purple-600" />
                  </div>

                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.15}>
        <div>
          <div className="section-tag w-fit mb-5">
            What We Build
          </div>

          <h2 className="text-3xl md:text-4xl font-black font-heading text-heading mb-5">
            From internal tools to complete digital platforms
          </h2>

          <p className="text-muted leading-relaxed mb-9">
            Our development approach combines product thinking, scalable
            architecture, modern engineering practices, and a deep
            understanding of business operations.
          </p>

          <div className="grid sm:grid-cols-2 gap-5">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.06,
                    duration: 0.45,
                  }}
                  whileHover={{ y: -5 }}
                  className="card p-6 border-purple-100 hover:shadow-xl transition-shadow h-full"
                >
                  <div className="w-11 h-11 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 mb-5">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="font-bold font-heading text-heading mb-2">
                    {feature.title}
                  </h3>

                  <p className="text-muted text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </FadeIn>
    </div>
  </section>

  {/* =========================================================
      CAPABILITIES
  ========================================================= */}
  <section className="py-24 px-6 section-alt border-y border-gray-100">
    <div className="max-w-7xl mx-auto">
      <FadeIn className="text-center max-w-3xl mx-auto mb-14">
        <div className="section-tag w-fit mx-auto mb-5">
          Solutions
        </div>

        <h2 className="text-3xl md:text-5xl font-black font-heading text-heading mb-5">
          Software for the way your{' '}
          <span className="gradient-text">business operates</span>
        </h2>

        <p className="text-muted text-lg leading-relaxed">
          We can transform disconnected processes and legacy workflows into
          modern digital systems your teams actually enjoy using.
        </p>
      </FadeIn>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {capabilities.map((item, index) => (
          <FadeIn key={item} delay={index * 0.04}>
            <motion.div
              whileHover={{ y: -4, scale: 1.01 }}
              className="group p-5 rounded-2xl bg-white border border-gray-100 hover:border-purple-200 hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 flex-shrink-0">
                  <Check className="w-4 h-4" />
                </div>

                <span className="text-sm font-bold text-heading group-hover:text-purple-600 transition-colors">
                  {item}
                </span>
              </div>
            </motion.div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>

  {/* =========================================================
      DEVELOPMENT PROCESS
  ========================================================= */}
  <section className="px-6 py-24" id="process">
    <div className="max-w-7xl mx-auto">
      <FadeIn className="text-center max-w-3xl mx-auto mb-14">
        <div className="section-tag w-fit mx-auto mb-5">
          Our Process
        </div>

        <h2 className="text-3xl md:text-5xl font-black font-heading text-heading mb-5">
          From idea to{' '}
          <span className="gradient-text">production</span>
        </h2>

        <p className="text-muted text-lg leading-relaxed">
          A structured development process that keeps your project aligned,
          transparent, and ready for scale.
        </p>
      </FadeIn>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {process.map((step, index) => {
          const Icon = step.icon;

          return (
            <FadeIn key={step.number} delay={index * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                className="relative card p-7 h-full hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center justify-between mb-7">
                  <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600">
                    <Icon className="w-5 h-5" />
                  </div>

                  <span className="text-4xl font-black font-heading text-gray-100">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-heading text-heading mb-3">
                  {step.title}
                </h3>

                <p className="text-muted text-sm leading-relaxed">
                  {step.desc}
                </p>

                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-14 -right-5 z-10">
                    <ArrowRight className="w-5 h-5 text-purple-200" />
                  </div>
                )}
              </motion.div>
            </FadeIn>
          );
        })}
      </div>
    </div>
  </section>

  {/* =========================================================
      SECURITY
  ========================================================= */}
  <section className="px-6 pb-24">
    <div className="max-w-7xl mx-auto">
      <FadeIn>
        <div className="relative overflow-hidden rounded-3xl bg-gray-950 p-8 md:p-12">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative grid lg:grid-cols-[0.8fr_1.2fr] gap-12 items-center">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center mb-6">
                <ShieldCheck className="w-7 h-7 text-purple-300" />
              </div>

              <div className="text-purple-300 text-sm font-bold uppercase tracking-wider mb-4">
                Security By Design
              </div>

              <h2 className="text-3xl md:text-4xl font-black font-heading text-white mb-5">
                Your business data deserves a serious foundation.
              </h2>

              <p className="text-gray-400 leading-relaxed">
                Security is considered throughout architecture and
                development rather than added as an afterthought.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Role-Based Access Control',
                'Authentication Systems',
                'API Security',
                'Audit Logging',
                'Encrypted Data',
                'Secure Deployment',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl bg-white/[0.04] border border-white/10 p-4"
                >
                  <div className="w-7 h-7 rounded-lg bg-purple-500/10 flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-purple-300" />
                  </div>

                  <span className="text-sm font-semibold text-gray-200">
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

  {/* =========================================================
      TECHNOLOGY STACK
  ========================================================= */}
  <section className="py-20 px-6 section-alt border-y border-gray-100">
    <div className="max-w-7xl mx-auto">
      <FadeIn className="text-center">
        <div className="section-tag w-fit mx-auto mb-5">
          Technology Stack
        </div>

        <h2 className="text-3xl md:text-4xl font-black font-heading text-heading mb-4">
          Modern technology.{' '}
          <span className="gradient-text">Solid engineering.</span>
        </h2>

        <p className="text-muted max-w-2xl mx-auto leading-relaxed mb-10">
          We select technologies according to your product requirements,
          performance goals, team capabilities, and long-term maintenance
          needs.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.025,
                duration: 0.3,
              }}
              whileHover={{
                y: -3,
              }}
              className="px-5 py-3 rounded-xl bg-white border border-gray-200 text-body text-sm font-semibold shadow-sm hover:border-purple-200 hover:text-purple-600 hover:shadow-md transition-all"
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </FadeIn>
    </div>
  </section>

  {/* =========================================================
      FINAL CTA
  ========================================================= */}
  <section className="px-6 py-24">
    <div className="max-w-5xl mx-auto">
      <FadeIn>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-600 via-violet-700 to-indigo-700 p-8 md:p-14 text-center text-white shadow-2xl">
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-indigo-300/10 blur-3xl" />

          <div className="relative">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-6">
              <Server className="w-7 h-7 text-white" />
            </div>

            <h2 className="text-3xl md:text-5xl font-black font-heading mb-5">
              Have a complex business problem?
            </h2>

            <p className="text-purple-100 max-w-2xl mx-auto leading-relaxed mb-8">
              Let's turn your workflow, idea, or operational challenge
              into software built specifically for your organization.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white text-purple-700 font-bold hover:bg-purple-50 transition-colors shadow-lg group"
              >
                Start Your Software Project
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white font-bold hover:bg-white/15 transition-colors"
              >
                View Portfolio
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  </section>
</>


);
}
