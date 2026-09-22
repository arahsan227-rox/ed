import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ShoppingCart,
  CreditCard,
  Package,
  Globe,
  Smartphone,
  Zap,
  ShieldCheck,
  BarChart3,
  Sparkles,
  Check,
  MousePointer2,
  TrendingUp,
  Layers3,
  Store,
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
      ? { opacity: 0, x: -40 }
      : direction === 'right'
        ? { opacity: 0, x: 40 }
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
      animate={inView ? animate : initial}
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
    icon: CreditCard,
    title: 'Secure Payments',
    desc: 'Frictionless checkout experiences with trusted payment gateways, fraud protection, and flexible payment flows.',
    color: 'rose',
  },
  {
    icon: Package,
    title: 'Smart Inventory',
    desc: 'Keep products, stock levels, warehouses, and fulfillment systems synchronized across your entire operation.',
    color: 'orange',
  },
  {
    icon: Globe,
    title: 'Global Commerce',
    desc: 'Build for international growth with multi-currency, localization, tax logic, and multilingual experiences.',
    color: 'blue',
  },
  {
    icon: Smartphone,
    title: 'Mobile First',
    desc: 'Beautiful touch-first shopping experiences engineered for fast mobile browsing and frictionless checkout.',
    color: 'purple',
  },
];

const capabilities = [
  'Headless Shopify Commerce',
  'Multi-Vendor Marketplaces',
  'B2B Wholesale Platforms',
  'Subscription Commerce',
  'Custom Checkout Experiences',
  'Product Recommendation Engines',
  'Advanced Search & Filtering',
  'ERP & CRM Integrations',
];

const technologies = [
  'Shopify Plus',
  'Next.js Commerce',
  'Stripe',
  'MedusaJS',
  'Algolia',
  'Redis',
  'PostgreSQL',
  'Node.js',
];

const stats = [
  {
    value: '99.9%',
    label: 'Platform Reliability',
    icon: ShieldCheck,
  },
  {
    value: '<1s',
    label: 'Performance Target',
    icon: Zap,
  },
  {
    value: '24/7',
    label: 'Digital Storefront',
    icon: Globe,
  },
  {
    value: '100%',
    label: 'Responsive Experience',
    icon: Smartphone,
  },
];

const colorClasses = {
  rose: {
    icon: 'text-rose-500',
    bg: 'bg-rose-50',
    border: 'border-rose-100',
    glow: 'group-hover:bg-rose-100',
  },
  orange: {
    icon: 'text-orange-500',
    bg: 'bg-orange-50',
    border: 'border-orange-100',
    glow: 'group-hover:bg-orange-100',
  },
  blue: {
    icon: 'text-blue-500',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
    glow: 'group-hover:bg-blue-100',
  },
  purple: {
    icon: 'text-purple-500',
    bg: 'bg-purple-50',
    border: 'border-purple-100',
    glow: 'group-hover:bg-purple-100',
  },
};

export default function ECommerce() {
  return (
    <>
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative pt-32 md:pt-40 pb-24 px-6 overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            animate={{
              x: [0, 80, -40, 0],
              y: [0, -40, 50, 0],
              scale: [1, 1.15, 0.95, 1],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-rose-400/10 blur-3xl"
          />

          <motion.div
            animate={{
              x: [0, -60, 30, 0],
              y: [0, 40, -30, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-20 right-[-180px] w-[450px] h-[450px] rounded-full bg-purple-400/10 blur-3xl"
          />

          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                'linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px)',
              backgroundSize: '50px 50px',
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="max-w-5xl mx-auto text-center">
            <FadeIn>
              <motion.div
                whileHover={{ scale: 1.04 }}
                className="section-tag mb-7 mx-auto w-fit"
              >
                <span className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  E-Commerce Engineering
                </span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-heading tracking-tight leading-[0.95] mb-7 text-heading">
                Commerce
                <br />
                <span className="gradient-text">Built to Scale.</span>
              </h1>

              <p className="text-muted text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
                High-performance e-commerce platforms engineered to turn
                browsers into buyers, simplify operations, and create
                experiences people remember.
              </p>

              <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="group btn-primary px-7 py-4 text-base"
                >
                  Build Your Store
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <a
                  href="#capabilities"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-xl border border-gray-200 bg-white/80 backdrop-blur-sm text-heading font-semibold hover:border-gray-300 hover:shadow-md transition-all"
                >
                  Explore Capabilities
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Floating Commerce Visual */}
          <FadeIn delay={0.25} className="mt-20">
            <div className="relative max-w-6xl mx-auto">
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="relative rounded-[2rem] border border-white/70 bg-white/70 backdrop-blur-xl shadow-[0_30px_100px_rgba(15,23,42,0.12)] p-3 md:p-5"
              >
                <div className="rounded-[1.5rem] overflow-hidden border border-gray-100 bg-gradient-to-br from-slate-950 via-slate-900 to-rose-950">
                  <div className="grid lg:grid-cols-[1.3fr_0.7fr] min-h-[390px]">
                    {/* Main commerce visual */}
                    <div className="relative p-7 md:p-10 flex flex-col justify-between overflow-hidden">
                      <div className="absolute inset-0 opacity-20">
                        <div
                          className="absolute inset-0"
                          style={{
                            backgroundImage:
                              'radial-gradient(circle at 20% 20%, #fb7185 0, transparent 25%), radial-gradient(circle at 80% 70%, #a855f7 0, transparent 30%)',
                          }}
                        />
                      </div>

                      <div className="relative z-10">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center">
                              <Store className="w-5 h-5 text-rose-300" />
                            </div>
                            <span className="text-white font-bold">
                              Bluorbit Solutions COMMERCE
                            </span>
                          </div>

                          <div className="flex gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                            <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                          </div>
                        </div>
                      </div>

                      <div className="relative z-10 mt-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-rose-200 text-xs font-semibold mb-5">
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-pulse" />
                          LIVE STORE EXPERIENCE
                        </div>

                        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight max-w-xl">
                          Turn Every
                          <span className="text-rose-300"> Click </span>
                          Into Momentum.
                        </h2>

                        <p className="text-white/60 mt-4 max-w-lg">
                          Fast storefronts, intelligent personalization, secure
                          checkout, and infrastructure designed for growth.
                        </p>
                      </div>

                      <div className="relative z-10 mt-10 flex flex-wrap gap-3">
                        {[
                          'Fast Checkout',
                          'Smart Search',
                          'Global Payments',
                        ].map((item) => (
                          <span
                            key={item}
                            className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white/70 text-xs"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Metrics panel */}
                    <div className="relative bg-white/[0.04] border-t lg:border-t-0 lg:border-l border-white/10 p-7 md:p-9 flex flex-col justify-center">
                      <div className="space-y-4">
                        {[
                          {
                            icon: TrendingUp,
                            value: '+42%',
                            label: 'Conversion Potential',
                          },
                          {
                            icon: Zap,
                            value: '<1s',
                            label: 'Target Load Time',
                          },
                          {
                            icon: ShoppingCart,
                            value: '24/7',
                            label: 'Always-On Commerce',
                          },
                        ].map((item, i) => (
                          <motion.div
                            key={item.label}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              delay: 0.7 + i * 0.15,
                            }}
                            className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10"
                          >
                            <div className="w-11 h-11 rounded-xl bg-rose-500/10 flex items-center justify-center">
                              <item.icon className="w-5 h-5 text-rose-300" />
                            </div>

                            <div>
                              <div className="text-white font-black text-xl">
                                {item.value}
                              </div>
                              <div className="text-white/45 text-xs">
                                {item.label}
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating cards */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="hidden md:flex absolute -left-7 top-1/3 items-center gap-3 bg-white border border-gray-100 shadow-xl rounded-2xl px-4 py-3"
                >
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 flex items-center justify-center">
                    <Check className="w-5 h-5 text-emerald-500" />
                  </div>
                  <div>
                    <div className="text-xs text-muted">Order status</div>
                    <div className="font-bold text-heading text-sm">
                      Payment completed
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="hidden md:flex absolute -right-7 bottom-1/4 items-center gap-3 bg-white border border-gray-100 shadow-xl rounded-2xl px-4 py-3"
                >
                  <div className="w-9 h-9 rounded-xl bg-rose-50 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-rose-500" />
                  </div>
                  <div>
                    <div className="text-xs text-muted">Store analytics</div>
                    <div className="font-bold text-heading text-sm">
                      Revenue trending up
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* =========================================================
          STATS
      ========================================================= */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <FadeIn key={stat.label} delay={index * 0.08}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="group p-6 md:p-7 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-xl transition-shadow h-full"
                >
                  <div className="w-11 h-11 rounded-xl bg-rose-50 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <stat.icon className="w-5 h-5 text-rose-500" />
                  </div>

                  <div className="text-3xl md:text-4xl font-black font-heading gradient-text">
                    {stat.value}
                  </div>

                  <div className="text-muted text-sm mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          PROBLEM / SOLUTION
      ========================================================= */}
      <section className="relative py-24 px-6 section-alt overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-rose-200/20 blur-3xl rounded-full pointer-events-none" />

        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <FadeIn direction="left">
            <div>
              <div className="section-tag mb-5 w-fit">
                <span className="flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  Commerce That Performs
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black font-heading leading-tight text-heading mb-6">
                Your store should feel
                <span className="gradient-text"> effortless.</span>
              </h2>

              <p className="text-muted text-lg leading-relaxed mb-8">
                Customers expect speed, clarity, trust, and convenience. We
                engineer every layer of your commerce experience around those
                expectations — from the first product view to post-purchase
                fulfillment.
              </p>

              <div className="space-y-4">
                {[
                  {
                    icon: MousePointer2,
                    title: 'Frictionless UX',
                    desc: 'Every interaction is designed to reduce unnecessary clicks.',
                  },
                  {
                    icon: Zap,
                    title: 'Performance First',
                    desc: 'Fast pages, optimized assets, caching, and scalable infrastructure.',
                  },
                  {
                    icon: ShieldCheck,
                    title: 'Trust by Design',
                    desc: 'Secure payments, reliable infrastructure, and transparent experiences.',
                  },
                ].map((item) => (
                  <motion.div
                    key={item.title}
                    whileHover={{ x: 5 }}
                    className="flex gap-4 p-4 rounded-2xl hover:bg-white transition-colors"
                  >
                    <div className="w-11 h-11 shrink-0 rounded-xl bg-white border border-gray-100 shadow-sm flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-rose-500" />
                    </div>

                    <div>
                      <h3 className="font-bold text-heading mb-1">
                        {item.title}
                      </h3>
                      <p className="text-muted text-sm">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right">
            <div className="relative">
              <div className="absolute -inset-5 bg-gradient-to-br from-rose-200/30 to-purple-200/30 blur-2xl rounded-[2rem]" />

              <div className="relative bg-white rounded-[2rem] border border-gray-100 shadow-2xl p-6 md:p-8">
                <div className="flex items-center justify-between mb-7">
                  <div>
                    <div className="text-xs text-muted uppercase tracking-wider">
                      Store Performance
                    </div>
                    <div className="text-2xl font-black text-heading mt-1">
                      Growth Dashboard
                    </div>
                  </div>

                  <div className="w-11 h-11 rounded-xl bg-rose-50 flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-rose-500" />
                  </div>
                </div>

                <div className="h-48 rounded-2xl bg-gradient-to-br from-slate-50 to-rose-50 border border-gray-100 p-5 flex items-end gap-2 overflow-hidden">
                  {[28, 42, 35, 52, 48, 65, 58, 74, 70, 88, 82, 96].map(
                    (height, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${height}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.7,
                          delay: i * 0.05,
                          ease: 'easeOut',
                        }}
                        className="flex-1 rounded-t-lg bg-gradient-to-t from-rose-500 to-pink-300 min-w-[8px]"
                      />
                    )
                  )}
                </div>

                <div className="grid grid-cols-3 gap-3 mt-5">
                  <div className="rounded-xl bg-gray-50 p-4">
                    <div className="text-xs text-muted">Revenue</div>
                    <div className="font-black text-heading mt-1">
                      +38.4%
                    </div>
                  </div>

                  <div className="rounded-xl bg-gray-50 p-4">
                    <div className="text-xs text-muted">Orders</div>
                    <div className="font-black text-heading mt-1">
                      +24.8%
                    </div>
                  </div>

                  <div className="rounded-xl bg-gray-50 p-4">
                    <div className="text-xs text-muted">AOV</div>
                    <div className="font-black text-heading mt-1">
                      +16.2%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* =========================================================
          CAPABILITIES
      ========================================================= */}
      <section id="capabilities" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-14">
            <div className="section-tag mb-5 mx-auto w-fit">
              What We Build
            </div>

            <h2 className="text-4xl md:text-5xl font-black font-heading text-heading">
              Commerce without
              <span className="gradient-text"> limitations.</span>
            </h2>

            <p className="text-muted text-lg max-w-2xl mx-auto mt-5 leading-relaxed">
              From direct-to-consumer stores to complex B2B marketplaces, we
              build the infrastructure around your business model.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((feature, index) => {
              const colors = colorClasses[feature.color];

              return (
                <FadeIn key={feature.title} delay={index * 0.08}>
                  <motion.div
                    whileHover={{
                      y: -8,
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 20,
                    }}
                    className="group relative h-full rounded-2xl border border-gray-100 bg-white p-7 shadow-sm hover:shadow-2xl transition-shadow overflow-hidden"
                  >
                    <div
                      className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-100 ${colors.icon}`}
                    />

                    <div
                      className={`w-14 h-14 rounded-2xl ${colors.bg} ${colors.border} border flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${colors.glow}`}
                    >
                      <feature.icon
                        className={`w-7 h-7 ${colors.icon}`}
                        strokeWidth={1.8}
                      />
                    </div>

                    <h3 className="text-xl font-bold font-heading text-heading mb-3">
                      {feature.title}
                    </h3>

                    <p className="text-muted text-sm leading-relaxed">
                      {feature.desc}
                    </p>

                    <div className="mt-6 flex items-center gap-2 text-xs font-bold text-heading opacity-0 group-hover:opacity-100 transition-opacity">
                      Explore capability
                      <ArrowRight className="w-3.5 h-3.5 text-rose-500" />
                    </div>
                  </motion.div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          CAPABILITY LIST
      ========================================================= */}
      <section className="py-24 px-6 section-alt">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-14 items-center">
            <FadeIn direction="left">
              <div className="section-tag mb-5 w-fit">
                Complete Commerce Stack
              </div>

              <h2 className="text-4xl md:text-5xl font-black font-heading text-heading leading-tight">
                Everything you need to
                <span className="gradient-text"> sell smarter.</span>
              </h2>

              <p className="text-muted text-lg leading-relaxed mt-6">
                Your store is more than a beautiful frontend. We connect
                storefronts, payments, inventory, fulfillment, analytics,
                marketing, and customer data into one cohesive ecosystem.
              </p>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 mt-8 text-primary font-bold hover:gap-3 transition-all"
              >
                Talk to our commerce team
                <ArrowRight className="w-4 h-4" />
              </Link>
            </FadeIn>

            <FadeIn direction="right">
              <div className="grid sm:grid-cols-2 gap-3">
                {capabilities.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.05,
                    }}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-white border border-gray-100 shadow-sm"
                  >
                    <div className="w-8 h-8 rounded-lg bg-rose-50 flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4 text-rose-500" />
                    </div>

                    <span className="font-semibold text-sm text-heading">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* =========================================================
          PROCESS
      ========================================================= */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-14">
            <div className="section-tag mb-5 mx-auto w-fit">
              Our Approach
            </div>

            <h2 className="text-4xl md:text-5xl font-black font-heading text-heading">
              From idea to
              <span className="gradient-text"> checkout.</span>
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-4 gap-5">
            {[
              {
                number: '01',
                title: 'Discover',
                desc: 'We understand your products, customers, operations, and growth goals.',
                icon: Layers3,
              },
              {
                number: '02',
                title: 'Design',
                desc: 'We create an experience that makes your brand memorable and your products easy to buy.',
                icon: Sparkles,
              },
              {
                number: '03',
                title: 'Build',
                desc: 'Our engineers connect the storefront, commerce engine, APIs, payments, and data.',
                icon: CodeIcon,
              },
              {
                number: '04',
                title: 'Scale',
                desc: 'Launch confidently, measure everything, optimize continuously, and grow without rebuilding.',
                icon: TrendingUp,
              },
            ].map((step, index) => (
              <FadeIn key={step.number} delay={index * 0.08}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="relative h-full p-7 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center justify-between mb-7">
                    <span className="text-xs font-black tracking-widest text-rose-500">
                      {step.number}
                    </span>

                    <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center">
                      <step.icon className="w-5 h-5 text-heading" />
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
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          TECH STACK
      ========================================================= */}
      <section className="py-20 px-6 section-alt border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center">
            <div className="flex items-center justify-center gap-2 text-heading font-bold text-lg mb-7">
              <ShoppingCart className="w-5 h-5 text-rose-500" />
              Modern Commerce Technology
            </div>

            <p className="text-muted max-w-2xl mx-auto mb-8">
              We choose technology around your business requirements — not
              because a particular framework is fashionable.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.05,
                  }}
                  whileHover={{
                    y: -3,
                    scale: 1.03,
                  }}
                  className="px-5 py-3 bg-white border border-gray-200 text-body text-sm font-semibold rounded-xl shadow-sm hover:shadow-md hover:border-rose-200 transition-all"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="py-24 px-6">
        <FadeIn className="max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-950 via-slate-900 to-rose-950 px-7 py-16 md:px-14 md:py-20 text-center shadow-2xl">
            {/* Decorative glow */}
            <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-rose-500/20 blur-3xl" />
            <div className="absolute -bottom-40 -right-20 w-96 h-96 rounded-full bg-purple-500/20 blur-3xl" />

            <motion.div
              animate={{
                rotate: [0, 5, -5, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative z-10 w-16 h-16 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center mx-auto mb-7"
            >
              <ShoppingCart className="w-8 h-8 text-rose-300" />
            </motion.div>

            <h2 className="relative z-10 text-4xl md:text-6xl font-black font-heading text-white leading-tight">
              Ready to build your
              <br />
              <span className="text-rose-300">next commerce engine?</span>
            </h2>

            <p className="relative z-10 text-white/60 text-lg max-w-2xl mx-auto mt-6 leading-relaxed">
              Tell us what you're selling, where you're going, and what is
              slowing you down. We'll help turn the opportunity into a
              high-performance digital commerce platform.
            </p>

            <div className="relative z-10 mt-9 flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-slate-900 font-bold hover:bg-rose-50 transition-colors shadow-xl"
              >
                Start Your Project
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/15 bg-white/5 text-white font-semibold hover:bg-white/10 transition-colors"
              >
                Explore Our Work
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
}

/* Small reusable icon component for the process section */
function CodeIcon({ className = '' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
      <line x1="14" y1="4" x2="10" y2="20" />
    </svg>
  );
}
