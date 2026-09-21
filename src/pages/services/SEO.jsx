import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
ArrowRight,
Search,
BarChart3,
TrendingUp,
Target,
Globe,
Check,
Sparkles,
LineChart,
MousePointerClick,
FileSearch,
Layers3,
Gauge,
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
icon: Search,
title: 'Keyword Intelligence',
desc: 'Identify high-intent keywords, search opportunities, and content gaps that align with your customers and revenue goals.',
color: 'text-indigo-600',
bg: 'bg-indigo-50',
border: 'border-indigo-100',
},
{
icon: BarChart3,
title: 'On-Page Optimization',
desc: 'Optimize content, metadata, internal links, structured data, and technical signals for stronger organic visibility.',
color: 'text-blue-600',
bg: 'bg-blue-50',
border: 'border-blue-100',
},
{
icon: Target,
title: 'Authority Building',
desc: 'Develop a sustainable authority strategy through relevant content, digital PR, partnerships, and quality backlinks.',
color: 'text-violet-600',
bg: 'bg-violet-50',
border: 'border-violet-100',
},
{
icon: TrendingUp,
title: 'Performance Tracking',
desc: 'Monitor rankings, organic traffic, conversions, technical health, and business KPIs through clear reporting.',
color: 'text-emerald-600',
bg: 'bg-emerald-50',
border: 'border-emerald-100',
},
];

const process = [
{
number: '01',
icon: FileSearch,
title: 'Audit',
desc: 'We analyze your website, technical foundation, content, competitors, and existing search visibility.',
},
{
number: '02',
icon: Target,
title: 'Strategy',
desc: 'We build a prioritized SEO roadmap around your audience, search intent, market, and business objectives.',
},
{
number: '03',
icon: Layers3,
title: 'Optimize',
desc: 'We improve technical SEO, content architecture, internal linking, landing pages, and search experience.',
},
{
number: '04',
icon: LineChart,
title: 'Grow',
desc: 'We continuously measure results, identify new opportunities, and refine the strategy based on performance.',
},
];

const metrics = [
{
value: '360°',
label: 'SEO Audits',
icon: Gauge,
},
{
value: '24/7',
label: 'Performance Tracking',
icon: LineChart,
},
{
value: '100%',
label: 'Data-Driven',
icon: BarChart3,
},
{
value: 'ROI',
label: 'Business Focused',
icon: TrendingUp,
},
];

const services = [
'Technical SEO Audits',
'Local SEO & Maps Optimization',
'E-Commerce SEO',
'Content Strategy',
'Competitor Analysis',
'Core Web Vitals',
'Internal Linking',
'Schema & Structured Data',
];

const tools = [
'Ahrefs',
'SEMrush',
'Google Analytics',
'Search Console',
'Screaming Frog',
'Google Trends',
'PageSpeed Insights',
'Moz',
];

export default function SEO() {
return (
<>
{/* =========================================================
HERO
========================================================= */} <section className="relative overflow-hidden pt-36 pb-24 px-6">
{/* Background decoration */} <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none"> <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-indigo-100/30 blur-3xl" /> <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-purple-100/30 blur-3xl" /> <div className="absolute top-72 -left-32 w-72 h-72 rounded-full bg-blue-100/30 blur-3xl" />

```
      <div className="absolute inset-0 opacity-[0.035]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              'linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(90deg, #4f46e5 1px, transparent 1px)',
            backgroundSize: '42px 42px',
          }}
        />
      </div>
    </div>

    <div className="max-w-7xl mx-auto">
      <FadeIn>
        <div className="text-center max-w-4xl mx-auto">
          <div className="section-tag mb-6 mx-auto w-fit inline-flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            SEO Services
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black font-heading leading-[1.05] tracking-tight mb-7 text-heading">
            Turn Search Traffic Into{' '}
            <span className="gradient-text">Business Growth</span>
          </h1>

          <p className="text-muted text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Build lasting organic visibility with technical SEO, strategic
            content, search intelligence, and conversion-focused optimization
            designed around measurable business outcomes.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/contact"
              className="btn-primary group inline-flex items-center gap-2 px-6 py-3.5"
            >
              Get Your SEO Strategy
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <a
              href="#process"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-gray-200 bg-white text-heading font-semibold hover:border-indigo-200 hover:bg-indigo-50/50 transition-all"
            >
              See Our Process
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </FadeIn>

      {/* Hero dashboard */}
      <FadeIn delay={0.15} className="mt-16">
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute -inset-5 bg-gradient-to-r from-indigo-200/40 via-purple-200/30 to-blue-200/40 blur-2xl rounded-[2rem]" />

          <div className="relative rounded-3xl border border-gray-200 bg-white shadow-2xl overflow-hidden">
            <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between bg-gray-50/80">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                </div>
                <span className="ml-3 text-xs font-semibold text-muted">
                  Organic Performance
                </span>
              </div>

              <div className="flex items-center gap-2 text-xs font-medium text-emerald-600">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Live insights
              </div>
            </div>

            <div className="p-6 md:p-8">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {metrics.map((metric, index) => {
                  const Icon = metric.icon;

                  return (
                    <motion.div
                      key={metric.label}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.35 + index * 0.08,
                        duration: 0.45,
                      }}
                      className="rounded-2xl border border-gray-100 bg-gray-50/70 p-5"
                    >
                      <div className="flex items-center justify-between mb-5">
                        <div className="w-9 h-9 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-indigo-600 shadow-sm">
                          <Icon className="w-4 h-4" />
                        </div>

                        <TrendingUp className="w-4 h-4 text-emerald-500" />
                      </div>

                      <div className="text-2xl md:text-3xl font-black font-heading text-heading">
                        {metric.value}
                      </div>

                      <div className="text-xs text-muted mt-1">
                        {metric.label}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-5 rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50/80 via-white to-purple-50/60 p-6">
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <p className="text-sm font-bold text-heading">
                      Organic visibility trend
                    </p>
                    <p className="text-xs text-muted mt-1">
                      Search performance overview
                    </p>
                  </div>

                  <div className="px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 text-xs font-bold">
                    Growing
                  </div>
                </div>

                <div className="h-36 flex items-end gap-2">
                  {[24, 32, 29, 45, 42, 58, 54, 67, 72, 69, 84, 94].map(
                    (height, index) => (
                      <motion.div
                        key={index}
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{
                          delay: 0.55 + index * 0.04,
                          duration: 0.5,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="flex-1 rounded-t-lg bg-gradient-to-t from-indigo-500 to-purple-400 min-h-[8px]"
                      />
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  </section>

  {/* =========================================================
      METRICS
  ========================================================= */}
  <section className="px-6 py-10 border-y border-gray-100 bg-white">
    <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
      {metrics.map((metric, index) => {
        const Icon = metric.icon;

        return (
          <FadeIn key={metric.label} delay={index * 0.05}>
            <div className="text-center px-4 py-4">
              <Icon className="w-5 h-5 text-indigo-500 mx-auto mb-2" />
              <div className="text-xl font-black font-heading text-heading">
                {metric.value}
              </div>
              <div className="text-xs text-muted mt-1">
                {metric.label}
              </div>
            </div>
          </FadeIn>
        );
      })}
    </div>
  </section>

  {/* =========================================================
      MAIN VALUE SECTION
  ========================================================= */}
  <section className="px-6 py-24">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
      <FadeIn>
        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-indigo-100/50 blur-2xl" />

          <div className="relative card p-8 md:p-10 bg-gradient-to-br from-indigo-50 via-white to-purple-50 border-indigo-100">
            <div className="w-14 h-14 rounded-2xl bg-white border border-indigo-100 shadow-sm flex items-center justify-center mb-7">
              <Globe className="w-7 h-7 text-indigo-600" />
            </div>

            <div className="section-tag w-fit mb-5">
              Revenue-Focused SEO
            </div>

            <h2 className="text-3xl md:text-4xl font-black font-heading mb-5 text-heading leading-tight">
              Beyond rankings.
              <br />
              <span className="gradient-text">Build demand.</span>
            </h2>

            <p className="text-muted leading-relaxed mb-7">
              Ranking higher is only one part of the equation. We connect
              search strategy with your products, services, audience,
              conversion paths, and broader growth objectives.
            </p>

            <div className="space-y-3">
              {services.slice(0, 6).map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-body font-medium"
                >
                  <div className="w-6 h-6 rounded-full bg-white border border-indigo-100 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-indigo-600" />
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
          <div className="section-tag w-fit mb-5">What We Optimize</div>

          <h2 className="text-3xl md:text-4xl font-black font-heading text-heading mb-5">
            A complete search growth system
          </h2>

          <p className="text-muted leading-relaxed mb-9">
            Search engines are constantly evolving. Your SEO strategy needs
            to account for technical performance, content quality, user
            intent, authority, and conversion experience together.
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
                    delay: index * 0.07,
                    duration: 0.45,
                  }}
                  whileHover={{ y: -5 }}
                  className={`card p-6 h-full ${feature.border} hover:shadow-lg transition-shadow`}
                >
                  <div
                    className={`w-11 h-11 rounded-xl ${feature.bg} flex items-center justify-center mb-5`}
                  >
                    <Icon className={`w-5 h-5 ${feature.color}`} />
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
      PROCESS
  ========================================================= */}
  <section
    id="process"
    className="py-24 px-6 section-alt border-y border-gray-100"
  >
    <div className="max-w-7xl mx-auto">
      <FadeIn className="text-center max-w-3xl mx-auto mb-14">
        <div className="section-tag w-fit mx-auto mb-5">
          Our Process
        </div>

        <h2 className="text-3xl md:text-5xl font-black font-heading text-heading mb-5">
          From search data to <span className="gradient-text">growth</span>
        </h2>

        <p className="text-muted text-lg leading-relaxed">
          A structured SEO process built around research, execution,
          measurement, and continuous improvement.
        </p>
      </FadeIn>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {process.map((step, index) => {
          const Icon = step.icon;

          return (
            <FadeIn key={step.number} delay={index * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                className="relative card p-7 h-full bg-white hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center justify-between mb-7">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
                    <Icon className="w-5 h-5" />
                  </div>

                  <span className="text-4xl font-black text-gray-100 font-heading">
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
                    <ArrowRight className="w-5 h-5 text-indigo-200" />
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
      SEO SERVICE GRID
  ========================================================= */}
  <section className="px-6 py-24">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-14 items-start">
        <FadeIn>
          <div className="section-tag w-fit mb-5">Full-Spectrum SEO</div>

          <h2 className="text-3xl md:text-4xl font-black font-heading text-heading mb-5">
            Everything your organic strategy needs.
          </h2>

          <p className="text-muted leading-relaxed mb-7">
            Whether you are launching a new website, scaling an established
            brand, or entering a competitive market, we can build the SEO
            foundation around your specific growth stage.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-primary font-bold group"
          >
            Discuss your SEO goals
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="grid sm:grid-cols-2 gap-3">
            {services.map((service, index) => (
              <motion.div
                key={service}
                whileHover={{ x: 4 }}
                className="flex items-center gap-3 p-4 rounded-xl border border-gray-100 bg-white hover:border-indigo-200 hover:bg-indigo-50/40 transition-all"
              >
                <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-indigo-600" />
                </div>

                <span className="text-sm font-semibold text-heading">
                  {service}
                </span>
              </motion.div>
            ))}
          </div>
        </FadeIn>
      </div>
    </div>
  </section>

  {/* =========================================================
      TOOLS
  ========================================================= */}
  <section className="py-20 px-6 bg-gray-950 text-white overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <FadeIn className="text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-indigo-200 text-xs font-bold mb-5">
          <Search className="w-3.5 h-3.5" />
          SEO TOOLKIT
        </div>

        <h2 className="text-3xl md:text-4xl font-black font-heading mb-4">
          Powered by industry-leading tools
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10">
          We combine trusted SEO platforms with technical analysis and
          business data to create a complete picture of your search
          performance.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          {tools.map((tool) => (
            <motion.div
              key={tool}
              whileHover={{
                y: -3,
                backgroundColor: 'rgba(255,255,255,0.12)',
              }}
              className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-200 text-sm font-semibold transition-colors"
            >
              {tool}
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
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-700 p-8 md:p-14 text-center text-white shadow-2xl">
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-purple-300/10 blur-3xl" />

          <div className="relative">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-6">
              <MousePointerClick className="w-7 h-7 text-white" />
            </div>

            <h2 className="text-3xl md:text-5xl font-black font-heading mb-5">
              Ready to grow your organic presence?
            </h2>

            <p className="text-indigo-100 max-w-2xl mx-auto leading-relaxed mb-8">
              Let's identify your biggest search opportunities and turn
              them into a practical growth roadmap.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white text-indigo-700 font-bold hover:bg-indigo-50 transition-colors shadow-lg"
              >
                Start Your SEO Project
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white font-bold hover:bg-white/15 transition-colors"
              >
                View Our Work
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
