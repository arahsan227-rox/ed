import { useRef, useState, useEffect } from 'react';
import {
  motion,
  AnimatePresence,
  useInView,
  useScroll,
  useSpring,
} from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Bot,
  Clock,
  Code2,
  MessageCircle,
  Network,
  Rocket,
  X,
  Zap,
  Sparkles,
  Search,
  BookOpen,
  TrendingUp,
  ChevronRight,
  Command,
  Layers3,
  BrainCircuit,
  MousePointer2,
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
    margin: '-70px',
  });

  const initial =
    direction === 'left'
      ? { opacity: 0, x: -30 }
      : direction === 'right'
      ? { opacity: 0, x: 30 }
      : { opacity: 0, y: 28 };

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

/* =========================================================
   BLOG DATA
========================================================= */

const articles = [
  {
    title: '10 Business Automation Workflows That Save 20+ Hours Per Week',
    cat: 'Automation',
    read: '8 min',
    icon: Zap,
    number: '01',
    featured: true,
    desc:
      'Discover the most impactful automations you can implement today using Make.com and Zapier without writing a single line of code.',
    content: `
      <h3>The Automation Revolution</h3>
      <p>Time is the ultimate constraint for growing companies. When key talent spends hours copy-pasting data between spreadsheets, your business stagnates. By automating repetitive tasks, you free up your team to focus on creative problem-solving and client relationships.</p>

      <h4>1. Lead Routing & Response</h4>
      <p>When a lead submits a contact form, route the details to Slack immediately and add them to your CRM. Concurrently, fire an automated, highly-personalized introduction email. Fast response rates can significantly improve the speed at which sales teams engage with opportunities.</p>

      <h4>2. Automated Invoicing and Accounting</h4>
      <p>Integrate Stripe directly with QuickBooks or Xero. Once a client pays, trigger an invoice creation, log the receipt, and tag the client in your internal tracking base. This eliminates human errors in manual transcription.</p>

      <h4>3. Calendar and Meeting Orchestration</h4>
      <p>Connect booking links to automatically generate video meetings, create calendar events, send reminders, and create follow-up tasks in your project management system.</p>

      <h3>Conclusion</h3>
      <p>Start with one workflow. Standardize it, map the inputs and outputs, then use an automation platform to stitch everything together. You'll quickly see manual tasks disappear and efficiency rise.</p>
    `,
  },
  {
    title: 'Why Your SaaS Needs a Proper Multi-Tenant Architecture',
    cat: 'Web Dev',
    read: '12 min',
    icon: Network,
    number: '02',
    desc:
      'The technical decisions that separate scalable SaaS platforms from ones that collapse under growth. A deep dive into architecture patterns.',
    content: `
      <h3>Introduction to Multi-Tenancy</h3>
      <p>Building a Software-as-a-Service application requires architectural foresight. A multi-tenant architecture means a single instance of the software serves multiple customers while keeping data isolated and secure.</p>

      <h4>Database Partitioning Models</h4>
      <p>There are three common approaches to tenant isolation.</p>

      <ul>
        <li><strong>Database-per-Tenant:</strong> Strong isolation with higher infrastructure and maintenance costs.</li>
        <li><strong>Schema-per-Tenant:</strong> Multiple database schemas provide a middle ground between isolation and operational complexity.</li>
        <li><strong>Shared Database, Shared Schema:</strong> Tenants share tables and are isolated using tenant identifiers. This can be highly scalable but requires disciplined access controls.</li>
      </ul>

      <h4>Performance and Cost Benefits</h4>
      <p>Sharing resources like servers, databases, and application code can reduce infrastructure overhead. When you deploy a feature or fix, it can become available across the platform through one release pipeline.</p>

      <h3>Key Takeaway</h3>
      <p>Evaluate your customers early. Enterprise requirements, compliance, data isolation, and expected growth should influence your architecture before the platform becomes difficult to migrate.</p>
    `,
  },
  {
    title: 'AI Chatbots That Actually Convert: A Practical Guide',
    cat: 'AI Solutions',
    read: '10 min',
    icon: Bot,
    number: '03',
    desc:
      'Stop using generic chatbots. Learn how AI-powered assistants can qualify leads, book demos, and handle support at scale.',
    content: `
      <h3>Beyond Basic FAQ Responders</h3>
      <p>Many legacy chatbots rely on static rule-based trees that frustrate visitors. Modern AI assistants can understand intent and provide conversational support using language models, retrieval systems, and business integrations.</p>

      <h4>1. Use Retrieval-Augmented Generation</h4>
      <p>Ground the assistant in your official documentation, pricing details, product information, and FAQs. Retrieve relevant information before generating an answer so the assistant has reliable business context.</p>

      <h4>2. Multi-Agent Customer Support</h4>
      <p>Deploy specialized workflows. One agent can check ticket status, another can answer technical questions, while a sales workflow can qualify prospects and initiate meeting scheduling.</p>

      <h4>3. Continuous Improvement</h4>
      <p>Log unsuccessful conversations and review ambiguous queries. Use those insights to improve prompts, retrieval quality, workflows, and escalation paths.</p>

      <h3>Summary</h3>
      <p>The best AI assistants should feel less like generic bots and more like highly-trained digital members of your team.</p>
    `,
  },
  {
    title: 'From Startup to Enterprise: Scaling Your Tech Stack',
    cat: 'Business Growth',
    read: '7 min',
    icon: Rocket,
    number: '04',
    desc:
      'The infrastructure and technology decisions you need to make as your company grows from an early-stage product to a large platform.',
    content: `
      <h3>The Lifecycle of Scale</h3>
      <p>What works for a small team with a few hundred users can eventually become a bottleneck. Scaling your technology stack requires identifying architectural shifts before systems reach their limits.</p>

      <h4>Phase 1: The Monolith</h4>
      <p>Prioritize speed of delivery. Keep the application simple and use a robust relational database. Simple deployment infrastructure can be perfectly appropriate at this stage.</p>

      <h4>Phase 2: Separation & Caching</h4>
      <p>As traffic increases, isolate services where useful and introduce caching for expensive database operations. Monitor performance before making architectural changes.</p>

      <h4>Phase 3: Workers & Event Systems</h4>
      <p>Move expensive background operations such as video processing, exports, notifications, and large data jobs into asynchronous workers and queues.</p>

      <h3>Conclusion</h3>
      <p>Premature optimization can slow a startup down, but ignoring infrastructure signals can make growth painful. Scale incrementally and let real system requirements guide architecture.</p>
    `,
  },
  {
    title: 'WhatsApp Business API: Complete Setup & Automation Guide',
    cat: 'Automation',
    read: '15 min',
    icon: MessageCircle,
    number: '05',
    desc:
      'A comprehensive walkthrough of WhatsApp Business API concepts and automated customer journeys.',
    content: `
      <h3>Why WhatsApp Matters</h3>
      <p>WhatsApp provides businesses with a direct conversational channel for customer communication, notifications, support, and transactional workflows.</p>

      <h4>How to Set It Up</h4>
      <ol>
        <li><strong>Business Platform:</strong> Configure your business presence and required verification.</li>
        <li><strong>Dedicated Number:</strong> Connect a suitable business phone number.</li>
        <li><strong>API Integration:</strong> Connect the messaging platform to your backend or automation infrastructure.</li>
      </ol>

      <h4>Top Automation Use Cases</h4>
      <p>Common applications include order updates, shipping notifications, appointment reminders, customer support, and conversational lead qualification.</p>

      <h3>Final Thought</h3>
      <p>When connected to the right business systems, conversational messaging can become an important part of a modern customer experience.</p>
    `,
  },
  {
    title: 'React vs Next.js: Choosing the Right Framework',
    cat: 'Web Dev',
    read: '9 min',
    icon: Code2,
    number: '06',
    desc:
      'An honest technical breakdown of when to use React, when to use Next.js, and how project requirements should influence the decision.',
    content: `
      <h3>The Modern Frontend Dilemma</h3>
      <p>React provides a flexible foundation for interactive interfaces. Frameworks built around React can add routing, rendering strategies, data handling patterns, and production optimizations.</p>

      <h4>Key Differences</h4>
      <ul>
        <li><strong>Rendering:</strong> Client-side applications can render primarily in the browser, while frameworks can provide server rendering and static generation.</li>
        <li><strong>SEO:</strong> Server-rendered and statically generated pages can be useful for public content where search visibility matters.</li>
        <li><strong>Full-Stack Capabilities:</strong> Frameworks can provide integrated server-side features and routing patterns.</li>
      </ul>

      <h4>Which Should You Choose?</h4>
      <p>Use a lightweight React setup when you need a highly interactive application and control over the architecture. Consider a full React framework when you need integrated routing, server rendering, content-heavy pages, or a broader full-stack environment.</p>
    `,
  },
];

const cats = [
  'All',
  'Automation',
  'Web Dev',
  'AI Solutions',
  'Business Growth',
];

/* =========================================================
   FLOATING BACKGROUND
========================================================= */

const FloatingOrb = ({ className = '', delay = 0 }) => (
  <motion.div
    className={`absolute rounded-full blur-3xl pointer-events-none ${className}`}
    animate={{
      x: [0, 30, -20, 0],
      y: [0, -25, 20, 0],
      scale: [1, 1.08, 0.94, 1],
    }}
    transition={{
      duration: 10,
      delay,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
  />
);

/* =========================================================
   ARTICLE CARD
========================================================= */

const ArticleCard = ({ article, index, onOpen }) => {
  const Icon = article.icon;

  return (
    <FadeIn delay={index * 0.07}>
      <motion.article
        layout
        whileHover={{ y: -10 }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
        }}
        onClick={() => onOpen(article)}
        className="group relative h-full cursor-pointer"
      >
        {/* Glow */}
        <div className="absolute -inset-px rounded-[28px] bg-gradient-to-br from-indigo-500/0 via-purple-500/0 to-cyan-500/0 group-hover:from-indigo-500/30 group-hover:via-purple-500/20 group-hover:to-cyan-500/20 transition-all duration-500 blur-sm" />

        <div className="relative h-full overflow-hidden rounded-[28px] border border-gray-200/80 bg-white shadow-[0_12px_40px_rgba(15,23,42,0.05)] group-hover:shadow-[0_25px_70px_rgba(79,70,229,0.14)] transition-all duration-500">
          {/* Visual */}
          <div className="relative h-56 overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50">
            <div className="absolute inset-0 opacity-60">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(99,102,241,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.08) 1px, transparent 1px)',
                  backgroundSize: '28px 28px',
                }}
              />
            </div>

            <motion.div
              className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-indigo-400/20 blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            <div className="absolute left-6 top-6 flex items-center gap-2">
              <span className="rounded-full border border-white/80 bg-white/80 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-indigo-600 backdrop-blur-md">
                {article.cat}
              </span>
            </div>

            <div className="absolute right-6 top-6 text-4xl font-black text-indigo-100">
              {article.number}
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                whileHover={{
                  rotate: 8,
                  scale: 1.12,
                }}
                className="relative flex h-20 w-20 items-center justify-center rounded-[24px] border border-white bg-white/90 text-indigo-600 shadow-xl shadow-indigo-200/40 backdrop-blur-md"
              >
                <div className="absolute inset-0 rounded-[24px] bg-gradient-to-br from-indigo-500/10 to-purple-500/10" />
                <Icon
                  className="relative h-9 w-9"
                  strokeWidth={1.7}
                />
              </motion.div>
            </div>

            <div className="absolute bottom-5 left-6 flex items-center gap-2 text-xs font-semibold text-slate-500">
              <Clock className="h-3.5 w-3.5" />
              {article.read} read
            </div>
          </div>

          {/* Content */}
          <div className="flex min-h-[300px] flex-col p-7">
            <div className="mb-4 flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-400">
                <BookOpen className="h-3.5 w-3.5" />
                Technology Insights
              </span>

              <motion.div
                className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-slate-400"
                whileHover={{
                  backgroundColor: '#4f46e5',
                  color: '#fff',
                  borderColor: '#4f46e5',
                }}
              >
                <ArrowRight className="h-4 w-4" />
              </motion.div>
            </div>

            <h3 className="mb-4 text-xl font-bold leading-snug text-slate-900 transition-colors duration-300 group-hover:text-indigo-600">
              {article.title}
            </h3>

            <p className="flex-grow text-sm leading-7 text-slate-500">
              {article.desc}
            </p>

            <div className="mt-7 flex items-center justify-between border-t border-gray-100 pt-5">
              <span className="text-sm font-bold text-indigo-600">
                Read article
              </span>

              <span className="flex items-center gap-1 text-xs font-medium text-slate-400 transition-all group-hover:gap-2">
                Explore
                <ChevronRight className="h-3.5 w-3.5" />
              </span>
            </div>
          </div>
        </div>
      </motion.article>
    </FadeIn>
  );
};

/* =========================================================
   MAIN BLOG
========================================================= */

export default function Blog() {
  const [active, setActive] = useState('All');
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState('');

  const filtered = articles.filter((article) => {
    const categoryMatch =
      active === 'All' || article.cat === active;

    const searchMatch =
      article.title.toLowerCase().includes(search.toLowerCase()) ||
      article.desc.toLowerCase().includes(search.toLowerCase()) ||
      article.cat.toLowerCase().includes(search.toLowerCase());

    return categoryMatch && searchMatch;
  });

  const featured = articles[0];

  /* -----------------------------------------
     Modal body lock + escape key
  ----------------------------------------- */

  useEffect(() => {
    if (selected) {
      document.body.style.overflow = 'hidden';

      const handleKey = (event) => {
        if (event.key === 'Escape') {
          setSelected(null);
        }
      };

      window.addEventListener('keydown', handleKey);

      return () => {
        window.removeEventListener('keydown', handleKey);
        document.body.style.overflow = '';
      };
    }

    document.body.style.overflow = '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [selected]);

  /* -----------------------------------------
     Reading progress
  ----------------------------------------- */

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {/* =====================================================
          READING PROGRESS
      ===================================================== */}

      <motion.div
        className="fixed left-0 right-0 top-0 z-[100] h-[3px] origin-left bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400"
        style={{ scaleX }}
      />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden px-6 pb-20 pt-36 md:pb-28 md:pt-44">
        <FloatingOrb
          delay={0}
          className="left-[10%] top-20 h-64 w-64 bg-indigo-400/15"
        />

        <FloatingOrb
          delay={2}
          className="right-[8%] top-32 h-72 w-72 bg-purple-400/15"
        />

        {/* Grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(99,102,241,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.07) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
            maskImage:
              'linear-gradient(to bottom, black, transparent)',
          }}
        />

        <div className="relative z-10 mx-auto max-w-6xl text-center">
          <FadeIn>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mx-auto mb-7 flex w-fit items-center gap-2 rounded-full border border-indigo-100 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-indigo-600 shadow-sm backdrop-blur-md"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Bluorbit Solutions Intelligence
            </motion.div>

            <h1 className="mx-auto max-w-5xl text-5xl font-black leading-[0.98] tracking-tight text-slate-950 md:text-7xl lg:text-8xl">
              Ideas that move
              <br />
              <span className="gradient-text">technology forward.</span>
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-500 md:text-xl">
              Deep insights, practical strategies, engineering knowledge,
              automation playbooks, and AI thinking from the Bluorbit Solutions team.
            </p>
          </FadeIn>

          {/* Hero stats */}
          <FadeIn delay={0.15}>
            <div className="mx-auto mt-10 flex max-w-2xl flex-wrap items-center justify-center gap-3">
              {[
                { icon: BrainCircuit, value: 'AI', label: 'Thinking' },
                { icon: Zap, value: '50+', label: 'Insights' },
                { icon: Layers3, value: '4', label: 'Categories' },
                { icon: TrendingUp, value: '∞', label: 'Ideas' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2 rounded-2xl border border-gray-200 bg-white/70 px-4 py-3 shadow-sm backdrop-blur-md"
                >
                  <item.icon className="h-4 w-4 text-indigo-500" />
                  <span className="font-bold text-slate-900">
                    {item.value}
                  </span>
                  <span className="text-xs text-slate-400">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* =====================================================
          FEATURED ARTICLE
      ===================================================== */}

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <motion.div
              whileHover={{ y: -5 }}
              onClick={() => setSelected(featured)}
              className="group relative cursor-pointer overflow-hidden rounded-[32px] border border-indigo-100 bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 p-1 shadow-[0_30px_100px_rgba(49,46,129,0.18)]"
            >
              <div className="relative overflow-hidden rounded-[29px]">
                {/* animated background */}
                <motion.div
                  className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl"
                  animate={{
                    x: [0, -40, 20, 0],
                    y: [0, 30, -20, 0],
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />

                <motion.div
                  className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl"
                  animate={{
                    x: [0, 30, -20, 0],
                    y: [0, -20, 30, 0],
                  }}
                  transition={{
                    duration: 14,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />

                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                  }}
                />

                <div className="relative grid items-center gap-10 px-7 py-10 md:px-12 md:py-14 lg:grid-cols-[1.3fr_0.7fr]">
                  <div>
                    <div className="mb-6 flex flex-wrap items-center gap-3">
                      <span className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-indigo-200 backdrop-blur-md">
                        Featured Insight
                      </span>

                      <span className="flex items-center gap-1.5 text-xs text-indigo-200/70">
                        <Clock className="h-3.5 w-3.5" />
                        {featured.read} read
                      </span>
                    </div>

                    <h2 className="max-w-3xl text-3xl font-black leading-tight text-white md:text-5xl">
                      {featured.title}
                    </h2>

                    <p className="mt-5 max-w-2xl text-base leading-7 text-indigo-100/70 md:text-lg">
                      {featured.desc}
                    </p>

                    <div className="mt-8 inline-flex items-center gap-3 rounded-xl bg-white px-5 py-3.5 text-sm font-bold text-indigo-700 shadow-xl transition-transform group-hover:translate-x-1">
                      Explore the insight
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>

                  <div className="hidden justify-center lg:flex">
                    <motion.div
                      animate={{
                        y: [0, -12, 0],
                        rotate: [0, 2, -2, 0],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      className="relative flex h-64 w-64 items-center justify-center rounded-[40px] border border-white/10 bg-white/[0.04] backdrop-blur-xl"
                    >
                      <div className="absolute inset-5 rounded-[32px] border border-white/10" />

                      <div className="absolute inset-12 rounded-full bg-indigo-500/20 blur-2xl" />

                      <Zap
                        className="relative h-24 w-24 text-indigo-300"
                        strokeWidth={1}
                      />

                      <motion.div
                        className="absolute h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_25px_#67e8f9]"
                        animate={{
                          rotate: 360,
                        }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                        style={{
                          transformOrigin: '105px 105px',
                        }}
                      />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </FadeIn>
        </div>
      </section>

      {/* =====================================================
          SEARCH + FILTERS
      ===================================================== */}

      <section className="sticky top-0 z-30 border-y border-gray-100 bg-white/80 px-6 py-5 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2">
            {cats.map((category) => (
              <motion.button
                key={category}
                whileTap={{ scale: 0.96 }}
                onClick={() => setActive(category)}
                className={`relative rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                  active === category
                    ? 'text-white'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {active === category && (
                  <motion.span
                    layoutId="activeCategory"
                    className="absolute inset-0 rounded-full bg-slate-950"
                    transition={{
                      type: 'spring',
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                )}

                <span className="relative z-10">{category}</span>
              </motion.button>
            ))}
          </div>

          <div className="relative w-full lg:w-72">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search insights..."
              className="w-full rounded-full border border-gray-200 bg-white py-3 pl-11 pr-4 text-sm outline-none transition-all placeholder:text-slate-400 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-500/10"
            />

            <div className="absolute right-3 top-1/2 hidden -translate-y-1/2 items-center gap-1 rounded-md border border-gray-200 px-1.5 py-0.5 text-[10px] font-bold text-slate-400 sm:flex">
              <Command className="h-3 w-3" /> K
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          ARTICLES
      ===================================================== */}

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <FadeIn className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-indigo-600">
                <span className="h-px w-7 bg-indigo-500" />
                Explore
              </div>

              <h2 className="text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
                Latest thinking.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-slate-400">
              Practical knowledge designed for founders, builders,
              operators, and teams shaping what comes next.
            </p>
          </FadeIn>

          <AnimatePresence mode="popLayout">
            {filtered.length > 0 ? (
              <motion.div
                layout
                className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
              >
                {filtered.map((article, index) => (
                  <ArticleCard
                    key={article.title}
                    article={article}
                    index={index}
                    onOpen={setSelected}
                  />
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-[28px] border border-dashed border-gray-300 py-20 text-center"
              >
                <Search className="mx-auto mb-4 h-10 w-10 text-slate-300" />
                <h3 className="text-xl font-bold text-slate-800">
                  No insights found
                </h3>
                <p className="mt-2 text-sm text-slate-400">
                  Try another keyword or category.
                </p>

                <button
                  onClick={() => {
                    setSearch('');
                    setActive('All');
                  }}
                  className="mt-6 rounded-xl bg-slate-950 px-5 py-3 text-sm font-bold text-white"
                >
                  Clear filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* =====================================================
          MID-PAGE CTA
      ===================================================== */}

      <section className="px-6 pb-24">
        <FadeIn>
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-slate-950 px-7 py-14 text-center md:px-12">
            <motion.div
              className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/20 blur-3xl"
              animate={{
                scale: [1, 1.25, 1],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            <div className="relative z-10">
              <Sparkles className="mx-auto mb-5 h-7 w-7 text-indigo-300" />

              <h2 className="text-3xl font-black text-white md:text-4xl">
                Don't just follow the future.
                <br />
                <span className="text-indigo-300">
                  Build it.
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-400">
                Have an idea, challenge, or ambitious digital product?
                Let's turn the thinking into something real.
              </p>

              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-slate-950 shadow-xl transition-all hover:-translate-y-1 hover:bg-indigo-50"
              >
                Start a Conversation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* =====================================================
          ARTICLE MODAL
      ===================================================== */}

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[90] flex items-center justify-center overflow-y-auto bg-slate-950/70 p-3 backdrop-blur-md sm:p-6"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.94,
                y: 30,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.96,
                y: 20,
              }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 24,
              }}
              onClick={(e) => e.stopPropagation()}
              className="my-5 w-full max-w-4xl overflow-hidden rounded-[30px] border border-white/10 bg-white shadow-[0_40px_120px_rgba(0,0,0,0.35)]"
            >
              {/* Modal Hero */}
              <div className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 px-7 py-10 md:px-12 md:py-14">
                <motion.div
                  className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                  }}
                />

                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
                    backgroundSize: '32px 32px',
                  }}
                />

                <button
                  onClick={() => setSelected(null)}
                  aria-label="Close article"
                  className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white hover:text-slate-950"
                >
                  <X className="h-5 w-5" />
                </button>

                <div className="relative z-10">
                  <div className="mb-6 flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-indigo-300/20 bg-indigo-400/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-indigo-200">
                      {selected.cat}
                    </span>

                    <span className="flex items-center gap-1.5 text-xs font-medium text-indigo-200/70">
                      <Clock className="h-3.5 w-3.5" />
                      {selected.read} read
                    </span>
                  </div>

                  <h2 className="max-w-3xl text-3xl font-black leading-tight text-white md:text-5xl">
                    {selected.title}
                  </h2>

                  <p className="mt-5 max-w-2xl text-sm leading-7 text-indigo-100/70 md:text-base">
                    {selected.desc}
                  </p>
                </div>
              </div>

              {/* Modal content */}
              <div className="max-h-[65vh] overflow-y-auto bg-white">
                <div className="mx-auto max-w-3xl px-7 py-10 md:px-12 md:py-14">
                  <div
                    className="
                      prose prose-lg max-w-none
                      text-slate-600

                      [&>h3]:mb-5
                      [&>h3]:mt-10
                      [&>h3]:font-heading
                      [&>h3]:text-2xl
                      [&>h3]:font-black
                      [&>h3]:text-slate-900

                      [&>h4]:mb-3
                      [&>h4]:mt-8
                      [&>h4]:font-heading
                      [&>h4]:text-xl
                      [&>h4]:font-bold
                      [&>h4]:text-slate-900

                      [&>p]:mb-5
                      [&>p]:leading-8

                      [&>ul]:mb-7
                      [&>ul]:list-disc
                      [&>ul]:space-y-3
                      [&>ul]:pl-6

                      [&>ol]:mb-7
                      [&>ol]:list-decimal
                      [&>ol]:space-y-3
                      [&>ol]:pl-6

                      [&_strong]:font-bold
                      [&_strong]:text-slate-900
                    "
                    dangerouslySetInnerHTML={{
                      __html: selected.content,
                    }}
                  />
                </div>
              </div>

              {/* Footer */}
              <div className="flex flex-col gap-4 border-t border-gray-100 bg-slate-50 px-7 py-5 sm:flex-row sm:items-center sm:justify-between md:px-12">
                <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
                  <MousePointer2 className="h-4 w-4" />
                  Press ESC to close
                </div>

                <button
                  onClick={() => setSelected(null)}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-bold text-white transition-all hover:bg-indigo-600"
                >
                  Close Article
                  <X className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
