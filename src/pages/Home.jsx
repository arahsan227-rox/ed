import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Star,
  ChevronDown,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
  Globe,
  Bot,
  Monitor,
  Plug,
  MessageSquare,
  Palette,
  LineChart,
  Rocket,
  Code2,
  Sparkles,
  Handshake,
  Trophy,
  Globe2,
  Heart,
  Headphones,
  Send,
  CheckCircle,
  X,
  Play,
  Zap,
  ShieldCheck,
  MousePointer2,
  Layers3,
  CircleDot,
  Plus,
  MoveUpRight,
  Quote,
  Check,
} from 'lucide-react';

/* =========================================================
   PREMIUM MOTION CONFIG
========================================================= */

const ease = [0.22, 1, 0.36, 1];

/* =========================================================
   REUSABLE REVEAL
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
    margin: '-100px',
  });

  const directions = {
    up: { y: 35, x: 0 },
    down: { y: -35, x: 0 },
    left: { y: 0, x: 45 },
    right: { y: 0, x: -45 },
  };

  const initial = directions[direction] || directions.up;

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        ...initial,
        filter: 'blur(8px)',
      }}
      animate={
        inView
          ? {
              opacity: 1,
              x: 0,
              y: 0,
              filter: 'blur(0px)',
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

/* =========================================================
   ANIMATED COUNTER
========================================================= */

const Counter = ({ target, suffix = '', duration = 1800 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const eased =
        1 - Math.pow(1 - progress, 3);

      start = Math.floor(eased * target);
      setCount(start);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animate);
  }, [inView, target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

/* =========================================================
   PREMIUM ICON
========================================================= */

const AnimatedIcon = ({
  Icon,
  colorClass = 'text-indigo-600',
  bgClass = 'from-indigo-500/10 to-purple-500/10',
  className = '',
}) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.08,
        rotate: 4,
      }}
      transition={{
        type: 'spring',
        stiffness: 350,
        damping: 14,
      }}
      className={`
        w-14 h-14 rounded-2xl
        bg-gradient-to-br ${bgClass}
        backdrop-blur-xl
        border border-white/60
        shadow-[0_12px_35px_rgba(0,0,0,0.06)]
        flex items-center justify-center
        relative group overflow-hidden
        ${className}
      `}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-white/70 to-transparent opacity-0 group-hover:opacity-100"
        transition={{ duration: 0.3 }}
      />

      <motion.div
        className="absolute w-20 h-20 bg-white/30 rounded-full blur-2xl"
        animate={{
          scale: [0.8, 1.2, 0.8],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      />

      <Icon
        className={`w-7 h-7 ${colorClass} relative z-10`}
        strokeWidth={1.6}
      />
    </motion.div>
  );
};

/* =========================================================
   FLOATING PARTICLE
========================================================= */

const Particle = ({ className = '', delay = 0 }) => (
  <motion.div
    className={`absolute rounded-full bg-indigo-400/30 blur-[1px] ${className}`}
    animate={{
      y: [0, -20, 0],
      x: [0, 10, 0],
      opacity: [0.2, 0.7, 0.2],
      scale: [1, 1.3, 1],
    }}
    transition={{
      duration: 4 + delay,
      repeat: Infinity,
      ease: 'easeInOut',
      delay,
    }}
  />
);

/* =========================================================
   DATA
========================================================= */

const services = [
  {
    icon: Globe,
    iconColor: 'text-blue-500',
    iconBg: 'from-blue-500/20 to-cyan-500/20',
    title: 'Web Development',
    desc: 'High-performance websites and SaaS platforms engineered for speed, conversion, scalability, and unforgettable first impressions.',
    link: '/services/web-development',
    accent: 'from-blue-500 to-cyan-400',
  },
  {
    icon: Bot,
    iconColor: 'text-purple-500',
    iconBg: 'from-purple-500/20 to-fuchsia-500/20',
    title: 'AI & Automation',
    desc: 'Eliminate repetitive work with intelligent workflows, AI agents, CRM automation, and business process orchestration.',
    link: '/services/business-automation',
    accent: 'from-purple-500 to-fuchsia-500',
  },
  {
    icon: Monitor,
    iconColor: 'text-indigo-500',
    iconBg: 'from-indigo-500/20 to-blue-500/20',
    title: 'Custom Software',
    desc: 'Powerful software built around your exact business requirements, workflows, users, and growth plans.',
    link: '/services/software-development',
    accent: 'from-indigo-500 to-blue-500',
  },
  {
    icon: Plug,
    iconColor: 'text-emerald-500',
    iconBg: 'from-emerald-500/20 to-teal-500/20',
    title: 'API Integration',
    desc: 'Connect payments, CRMs, ERPs, AI platforms, communication tools, and third-party services into one ecosystem.',
    link: '/services',
    accent: 'from-emerald-500 to-teal-500',
  },
  {
    icon: MessageSquare,
    iconColor: 'text-green-500',
    iconBg: 'from-green-500/20 to-emerald-500/20',
    title: 'WhatsApp & Chatbots',
    desc: 'Automated customer journeys, support systems, lead qualification, notifications, and AI-powered conversations.',
    link: '/services/ai-integrations',
    accent: 'from-green-500 to-emerald-500',
  },
  {
    icon: Palette,
    iconColor: 'text-pink-500',
    iconBg: 'from-pink-500/20 to-rose-500/20',
    title: 'UI/UX Design',
    desc: 'Modern product experiences combining beautiful visual systems with thoughtful user journeys and conversion psychology.',
    link: '/services',
    accent: 'from-pink-500 to-rose-500',
  },
  {
    icon: LineChart,
    iconColor: 'text-orange-500',
    iconBg: 'from-orange-500/20 to-amber-500/20',
    title: 'SEO & Growth',
    desc: 'Technical SEO, content strategy, and performance optimization designed to attract high-intent organic traffic.',
    link: '/services/seo',
    accent: 'from-orange-500 to-amber-500',
  },
];

const whyUs = [
  {
    icon: Rocket,
    color: 'text-rose-500',
    bg: 'from-rose-500/20 to-pink-500/20',
    title: 'Fast Delivery',
    desc: 'Short development cycles, visible progress, rapid feedback, and focused execution.',
  },
  {
    icon: Code2,
    color: 'text-indigo-500',
    bg: 'from-indigo-500/20 to-blue-500/20',
    title: 'Scalable Code',
    desc: 'Modern architecture and clean engineering designed to grow with your business.',
  },
  {
    icon: Sparkles,
    color: 'text-amber-500',
    bg: 'from-amber-500/20 to-yellow-500/20',
    title: 'Premium UI/UX',
    desc: 'Interfaces that feel polished, intuitive, modern, and conversion-focused.',
  },
  {
    icon: Handshake,
    color: 'text-teal-500',
    bg: 'from-teal-500/20 to-emerald-500/20',
    title: 'Business Focus',
    desc: 'Technology decisions connected directly to your goals, users, and ROI.',
  },
];

const stats = [
  {
    value: 120,
    suffix: '+',
    label: 'Projects Delivered',
    icon: Trophy,
    color: 'text-yellow-500',
  },
  {
    value: 50,
    suffix: '+',
    label: 'Clients Worldwide',
    icon: Globe2,
    color: 'text-blue-500',
  },
  {
    value: 98,
    suffix: '%',
    label: 'Client Satisfaction',
    icon: Heart,
    color: 'text-red-500',
  },
  {
    value: 24,
    suffix: '/7',
    label: 'Support Available',
    icon: Headphones,
    color: 'text-purple-500',
  },
];

const projects = [
  {
    title: 'SmartFlow CRM',
    tag: 'Sales Management',
    desc: 'Custom CRM platform with lead automation and advanced reporting.',
    tech: ['React', 'Node.js', 'PostgreSQL'],
    results: ['60% faster lead handling', '40% more conversions'],
    color: 'from-indigo-500 to-blue-600',
    image: '/SmartFlow.jpg',
  },
  {
    title: 'AutoLead Pro',
    tag: 'Marketing Automation',
    desc: 'Automated lead generation with email and WhatsApp workflows.',
    tech: ['React', 'Make', 'OpenAI'],
    results: ['80% manual task reduction'],
    color: 'from-purple-500 to-pink-600',
    image: '/autoleadpro.jpg',
  },
  {
    title: 'ShopVerse',
    tag: 'E-Commerce',
    desc: 'Full-scale online marketplace with payment integration.',
    tech: ['Next.js', 'Stripe', 'MongoDB'],
    results: ['300K+ monthly visitors'],
    color: 'from-cyan-500 to-blue-600',
    image: '/shopverse.jpg',
  },
  {
    title: 'MediCore',
    tag: 'Healthcare',
    desc: 'Hospital management with patient records and scheduling.',
    tech: ['React', 'Node.js', 'PostgreSQL'],
    results: ['Serving 5 hospitals'],
    color: 'from-emerald-500 to-teal-600',
    image: '/MediCore.jpg',
  },
  {
    title: 'TaskPilot',
    tag: 'Project Management',
    desc: 'Project tracking for remote teams with Kanban and analytics.',
    tech: ['React', 'NestJS', 'Redis'],
    results: ['10K+ active users'],
    color: 'from-orange-500 to-red-600',
    image: '/TaskPilot.jpg',
  },
  {
    title: 'FinTrack',
    tag: 'Finance',
    desc: 'Financial analytics dashboard with real-time reporting.',
    tech: ['React', 'Python', 'PostgreSQL'],
    results: ['$50M+ tracked monthly'],
    color: 'from-violet-500 to-purple-600',
  },
];

const process = [
  {
    step: '01',
    title: 'Discovery',
    desc: 'Understand your goals, users, challenges, and opportunities.',
  },
  {
    step: '02',
    title: 'Strategy',
    desc: 'Define architecture, scope, priorities, and success metrics.',
  },
  {
    step: '03',
    title: 'Design',
    desc: 'Create polished experiences and interactive prototypes.',
  },
  {
    step: '04',
    title: 'Build',
    desc: 'Develop in focused agile sprints with continuous feedback.',
  },
  {
    step: '05',
    title: 'Test',
    desc: 'QA, performance, responsiveness, security, and edge cases.',
  },
  {
    step: '06',
    title: 'Launch',
    desc: 'Deploy smoothly and monitor the production environment.',
  },
  {
    step: '07',
    title: 'Scale',
    desc: 'Ongoing support, optimization, analytics, and improvements.',
  },
];

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'CEO, LaunchPad',
    content:
      'Bluorbit Solutions rebuilt our entire platform in 3 months. The quality and speed were simply unmatched. Our user retention jumped 45% after launch.',
    rating: 5,
    avatar: 'SM',
  },
  {
    name: 'James Okafor',
    role: 'CTO, FinEdge',
    content:
      'Their automation system saved us 200 hours of manual work per month. The team is professional, communicative, and incredibly talented.',
    rating: 5,
    avatar: 'JO',
  },
  {
    name: 'Priya Sharma',
    role: 'Founder, MedApp',
    content:
      'Building a healthcare platform is complex, but Bluorbit Solutions handled every edge case with precision. We are fully HIPAA compliant and live in 6 weeks.',
    rating: 5,
    avatar: 'PS',
  },
  {
    name: 'David Chen',
    role: 'VP Engineering, RetailCo',
    content:
      'We replaced 3 legacy systems with one unified platform built by Bluorbit Solutions. Migration was flawless. Highly recommend for enterprise work.',
    rating: 5,
    avatar: 'DC',
  },
];

const faqs = [
  {
    q: 'How long does a typical project take?',
    a: 'Most web projects take 4–8 weeks. Complex software platforms typically range from 3–6 months depending on scope, integrations, and requirements.',
  },
  {
    q: 'Do you provide post-launch support?',
    a: 'Yes. Projects include a post-launch support window, and ongoing packages are available for maintenance, optimization, new features, and monitoring.',
  },
  {
    q: 'Can you work with our existing tech stack?',
    a: 'Absolutely. We can integrate with your existing infrastructure or recommend targeted improvements where a migration provides meaningful business value.',
  },
  {
    q: 'How do you engage with clients?',
    a: 'Every engagement is structured around clear milestones, direct communication, regular progress updates, and collaborative decision-making.',
  },
  {
    q: 'Do you sign NDAs?',
    a: 'Yes. NDAs can be signed before discovery discussions so your business information, ideas, and product concepts remain confidential.',
  },
];

/* =========================================================
   TILT CARD
========================================================= */

const TiltCard = ({ children, className = '' }) => {
  const ref = useRef(null);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const springX = useSpring(rotateX, {
    stiffness: 200,
    damping: 20,
  });

  const springY = useSpring(rotateY, {
    stiffness: 200,
    damping: 20,
  });

  const handleMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    rotateY.set((x - centerX) / 20);
    rotateX.set(-(y - centerY) / 20);
  };

  const handleLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{
        rotateX: springX,
        rotateY: springY,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/* =========================================================
   HOME
========================================================= */

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  const [commentName, setCommentName] = useState('');
  const [commentText, setCommentText] = useState('');
  const [showCommentPopup, setShowCommentPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  /* =======================================================
     MOUSE GLOW
  ======================================================= */

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  /* =======================================================
     COMMENT SUBMIT
  ======================================================= */

  const handleCommentSubmit = (e) => {
    e.preventDefault();

    if (!commentName.trim() || !commentText.trim()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setShowCommentPopup(true);

      setCommentName('');
      setCommentText('');

      setTimeout(() => {
        setShowCommentPopup(false);
      }, 5000);
    }, 800);
  };

  /* =======================================================
     AUTO TESTIMONIAL
  ======================================================= */

  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialIdx((current) => {
        return (current + 1) % testimonials.length;
      });
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="bg-white text-gray-900 overflow-hidden">

      {/* =====================================================
          GLOBAL MOUSE LIGHT
      ===================================================== */}

      <motion.div
        className="fixed pointer-events-none z-[1] w-96 h-96 rounded-full bg-indigo-400/10 blur-3xl hidden lg:block"
        animate={{
          x: mousePosition.x - 190,
          y: mousePosition.y - 190,
        }}
        transition={{
          type: 'spring',
          stiffness: 40,
          damping: 25,
          mass: 0.5,
        }}
      />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative min-h-screen flex items-center justify-center pt-28 pb-20 px-6 overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.12),transparent_28%),radial-gradient(circle_at_80%_30%,rgba(168,85,247,0.12),transparent_28%),radial-gradient(circle_at_50%_90%,rgba(59,130,246,0.08),transparent_30%)]" />

          <motion.div
            className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-indigo-300/20 blur-[100px]"
            animate={{
              x: [0, 80, 0],
              y: [0, 50, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          <motion.div
            className="absolute -bottom-32 -right-32 w-[550px] h-[550px] rounded-full bg-purple-300/20 blur-[110px]"
            animate={{
              x: [0, -70, 0],
              y: [0, -40, 0],
              scale: [1, 1.12, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Grid */}
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                'linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(90deg, #4f46e5 1px, transparent 1px)',
              backgroundSize: '55px 55px',
            }}
          />

          <Particle
            className="top-[25%] left-[12%] w-2 h-2"
            delay={0}
          />

          <Particle
            className="top-[35%] right-[15%] w-3 h-3"
            delay={1}
          />

          <Particle
            className="bottom-[25%] left-[20%] w-2 h-2"
            delay={2}
          />

          <Particle
            className="bottom-[20%] right-[25%] w-2 h-2"
            delay={1.5}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto w-full">

          <div className="text-center">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.7,
                ease,
              }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur-xl border border-indigo-100 shadow-[0_8px_30px_rgba(79,70,229,0.08)] mb-7"
            >
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full w-2 h-2 bg-indigo-600" />
              </span>

              <span className="text-xs sm:text-sm font-semibold text-indigo-700">
                Trusted by 50+ Companies Worldwide
              </span>

              <ArrowRight className="w-3.5 h-3.5 text-indigo-500" />
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{
                opacity: 0,
                y: 30,
                filter: 'blur(12px)',
              }}
              animate={{
                opacity: 1,
                y: 0,
                filter: 'blur(0px)',
              }}
              transition={{
                duration: 1,
                delay: 0.1,
                ease,
              }}
              className="text-4xl sm:text-6xl lg:text-7xl xl:text-[82px] font-black font-heading leading-[0.98] tracking-[-0.04em] text-gray-950 max-w-6xl mx-auto"
            >
              We Build
              <br />

              <span className="relative inline-block">

                <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                  Digital Systems
                </span>

                <motion.span
                  className="absolute -bottom-2 left-0 right-0 h-1 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{
                    duration: 1,
                    delay: 0.8,
                    ease,
                  }}
                  style={{
                    transformOrigin: 'left',
                  }}
                />
              </span>

              <br />

              That Scale Your Business
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.35,
                ease,
              }}
              className="text-base sm:text-lg lg:text-xl text-gray-500 max-w-2xl mx-auto mt-7 leading-relaxed"
            >
              We design, build, and automate powerful digital experiences
              that help ambitious businesses move faster, operate smarter,
              and grow without limits.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.5,
                ease,
              }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-9"
            >
              <Link
                to="/contact"
                className="group relative inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-gray-950 text-white font-semibold overflow-hidden shadow-[0_15px_40px_rgba(15,23,42,0.22)]"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-fuchsia-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />

                <span className="relative z-10">
                  Get a Free Consultation
                </span>

                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/portfolio"
                className="group inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-white/70 backdrop-blur-xl border border-gray-200 text-gray-800 font-semibold hover:border-indigo-300 hover:text-indigo-600 transition-all shadow-sm"
              >
                <Play className="w-4 h-4 fill-current" />
                Explore Our Work
                <MoveUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </motion.div>

            {/* Mini trust */}
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.75,
                duration: 0.8,
              }}
              className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mt-8 text-xs text-gray-400"
            >
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-500" />
                Fast delivery
              </span>

              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-500" />
                Scalable architecture
              </span>

              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-500" />
                Dedicated support
              </span>
            </motion.div>

          </div>

          {/* Hero dashboard */}
          <motion.div
            initial={{
              opacity: 0,
              y: 70,
              rotateX: 15,
              scale: 0.94,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotateX: 0,
              scale: 1,
            }}
            transition={{
              duration: 1.1,
              delay: 0.6,
              ease,
            }}
            className="relative mt-16 max-w-5xl mx-auto"
          >
            <div className="absolute -inset-8 bg-gradient-to-r from-indigo-500/15 via-purple-500/15 to-fuchsia-500/15 blur-3xl rounded-[40px]" />

            <TiltCard>
              <div className="relative rounded-[24px] border border-gray-200/80 bg-white/80 backdrop-blur-2xl shadow-[0_35px_100px_rgba(15,23,42,0.14)] overflow-hidden">

                {/* browser bar */}
                <div className="h-11 border-b border-gray-100 flex items-center px-4 gap-2 bg-white/80">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-300" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-300" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-300" />

                  <div className="mx-auto w-1/2 h-6 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center">
                    <span className="text-[9px] text-gray-400">
                      Bluorbit Solutions.digital
                    </span>
                  </div>
                </div>

                <div className="p-5 sm:p-8 grid md:grid-cols-12 gap-5 bg-gradient-to-br from-gray-50/80 to-white">

                  <div className="md:col-span-4 rounded-2xl bg-gray-950 p-6 text-white min-h-[220px] relative overflow-hidden">

                    <div className="absolute -right-10 -top-10 w-32 h-32 bg-indigo-500/30 rounded-full blur-3xl" />

                    <div className="relative z-10">
                      <div className="flex items-center gap-2 text-indigo-300 text-xs font-medium mb-8">
                        <Zap className="w-3.5 h-3.5" />
                        BUSINESS OS
                      </div>

                      <div className="text-3xl font-black mb-2">
                        94.8%
                      </div>

                      <div className="text-xs text-gray-400">
                        Operational efficiency
                      </div>

                      <div className="mt-8 flex items-end gap-1 h-16">
                        {[35, 45, 32, 55, 50, 68, 62, 82, 76, 92].map(
                          (height, i) => (
                            <motion.div
                              key={i}
                              initial={{
                                height: 0,
                              }}
                              animate={{
                                height: `${height}%`,
                              }}
                              transition={{
                                delay: 1 + i * 0.06,
                                duration: 0.5,
                              }}
                              className="flex-1 rounded-t bg-gradient-to-t from-indigo-600 to-purple-400"
                            />
                          )
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-8 grid sm:grid-cols-2 gap-5">

                    <div className="rounded-2xl bg-white border border-gray-100 p-5">
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-xs text-gray-400">
                          Automation
                        </span>

                        <span className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
                          <Bot className="w-4 h-4 text-emerald-500" />
                        </span>
                      </div>

                      <div className="text-2xl font-black">
                        2,840
                      </div>

                      <div className="text-xs text-emerald-500 mt-1">
                        +28.4% this month
                      </div>

                      <div className="mt-5 h-2 rounded-full bg-gray-100 overflow-hidden">
                        <motion.div
                          initial={{
                            width: 0,
                          }}
                          animate={{
                            width: '82%',
                          }}
                          transition={{
                            delay: 1,
                            duration: 1,
                          }}
                          className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-teal-500"
                        />
                      </div>
                    </div>

                    <div className="rounded-2xl bg-white border border-gray-100 p-5">
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-xs text-gray-400">
                          Revenue Growth
                        </span>

                        <span className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center">
                          <TrendingUp className="w-4 h-4 text-indigo-500" />
                        </span>
                      </div>

                      <div className="text-2xl font-black">
                        +46.2%
                      </div>

                      <div className="text-xs text-indigo-500 mt-1">
                        vs previous quarter
                      </div>

                      <div className="flex items-end gap-1 mt-5 h-10">
                        {[30, 40, 36, 52, 47, 65, 72, 68, 88].map(
                          (height, i) => (
                            <div
                              key={i}
                              style={{
                                height: `${height}%`,
                              }}
                              className="flex-1 rounded-sm bg-gradient-to-t from-indigo-200 to-indigo-500"
                            />
                          )
                        )}
                      </div>
                    </div>

                    <div className="sm:col-span-2 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 p-5 text-white flex items-center justify-between">
                      <div>
                        <div className="text-xs text-indigo-100 mb-1">
                          Everything connected
                        </div>

                        <div className="font-bold">
                          Web + Software + AI + Automation
                        </div>
                      </div>

                      <div className="hidden sm:flex -space-x-2">
                        {[Globe, Bot, Plug, LineChart].map((Icon, i) => (
                          <div
                            key={i}
                            className="w-9 h-9 rounded-full bg-white/15 border border-white/20 flex items-center justify-center backdrop-blur"
                          >
                            <Icon className="w-4 h-4" />
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </TiltCard>
          </motion.div>

        </div>

        {/* Scroll */}
        <motion.div
          animate={{
            y: [0, 8, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-300"
        >
          <span className="text-[9px] uppercase tracking-[0.3em]">
            Scroll
          </span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </section>

      {/* =====================================================
          TRUST STRIP
      ===================================================== */}

      <section className="border-y border-gray-100 bg-gray-50/70 py-7 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-gray-400">

          <span className="text-xs uppercase tracking-[0.2em] font-semibold">
            Built for ambitious businesses
          </span>

          <span className="hidden sm:block w-px h-5 bg-gray-200" />

          {[
            'Startups',
            'SaaS',
            'Healthcare',
            'E-Commerce',
            'Finance',
            'Enterprise',
          ].map((item) => (
            <motion.span
              key={item}
              whileHover={{
                color: '#4f46e5',
                y: -2,
              }}
              className="text-sm font-semibold transition-colors cursor-default"
            >
              {item}
            </motion.span>
          ))}
        </div>
      </section>

      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section className="py-28 px-6 relative">

        <div className="absolute top-20 right-0 w-72 h-72 bg-indigo-100/50 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative">

          <FadeIn className="text-center mb-16">

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-wider mb-5">
              <Sparkles className="w-3.5 h-3.5" />
              What We Build
            </div>

            <h2 className="text-4xl md:text-5xl font-black font-heading tracking-tight mb-5">
              Everything Your Business
              <br />
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Needs to Scale
              </span>
            </h2>

            <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
              One technology partner for the systems, experiences,
              automation, and infrastructure behind your next stage of growth.
            </p>

          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

            {services.map((service, i) => {
              const Icon = service.icon;

              return (
                <FadeIn
                  key={service.title}
                  delay={i * 0.07}
                >
                  <Link
                    to={service.link}
                    className="block h-full"
                  >
                    <TiltCard className="h-full">

                      <div className="relative h-full rounded-3xl bg-white border border-gray-100 p-7 overflow-hidden group shadow-[0_8px_40px_rgba(15,23,42,0.04)] hover:shadow-[0_25px_70px_rgba(79,70,229,0.12)] transition-shadow duration-500">

                        {/* top gradient */}
                        <div
                          className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.accent} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                        />

                        <div className="absolute -right-16 -top-16 w-40 h-40 bg-indigo-50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative z-10">

                          <AnimatedIcon
                            Icon={Icon}
                            colorClass={service.iconColor}
                            bgClass={service.iconBg}
                          />

                          <h3 className="text-xl font-bold font-heading mb-3">
                            {service.title}
                          </h3>

                          <p className="text-gray-500 text-sm leading-relaxed min-h-[72px]">
                            {service.desc}
                          </p>

                          <div className="mt-7 flex items-center justify-between">

                            <span className="text-sm font-bold text-indigo-600">
                              Explore service
                            </span>

                            <span className="w-9 h-9 rounded-full bg-gray-50 group-hover:bg-indigo-600 group-hover:text-white flex items-center justify-center transition-all duration-300">
                              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                            </span>

                          </div>

                        </div>
                      </div>

                    </TiltCard>
                  </Link>
                </FadeIn>
              );
            })}

          </div>
        </div>
      </section>

      {/* =====================================================
          WHY US
      ===================================================== */}

      <section className="py-28 px-6 bg-gray-950 text-white relative overflow-hidden">

        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/15 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <FadeIn direction="left">

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-indigo-300 text-xs font-bold uppercase tracking-wider mb-6">
                <ShieldCheck className="w-3.5 h-3.5" />
                Why Bluorbit Solutions
              </div>

              <h2 className="text-4xl md:text-5xl font-black font-heading tracking-tight leading-tight">
                We Don't Just
                <br />
                <span className="text-indigo-400">
                  Build Software.
                </span>
                <br />
                We Build Momentum.
              </h2>

              <p className="text-gray-400 mt-6 max-w-xl leading-relaxed">
                Great technology should make your business simpler,
                faster, and more valuable. Our approach combines product
                thinking, engineering, design, and automation into one
                focused delivery process.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                {[
                  'Product Thinking',
                  'Modern Engineering',
                  'AI Automation',
                  'Growth Focus',
                ].map((item) => (
                  <span
                    key={item}
                    className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-300"
                  >
                    {item}
                  </span>
                ))}
              </div>

            </FadeIn>

            <div className="grid sm:grid-cols-2 gap-4">

              {whyUs.map((item, i) => {
                const Icon = item.icon;

                return (
                  <FadeIn
                    key={item.title}
                    delay={i * 0.1}
                    direction="right"
                  >
                    <motion.div
                      whileHover={{
                        y: -6,
                      }}
                      className={`p-6 rounded-3xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-xl h-full hover:bg-white/[0.07] transition-colors`}
                    >

                      <AnimatedIcon
                        Icon={Icon}
                        colorClass={item.color}
                        bgClass={item.bg}
                        className="mb-5"
                      />

                      <h3 className="font-bold text-lg mb-2">
                        {item.title}
                      </h3>

                      <p className="text-gray-400 text-sm leading-relaxed">
                        {item.desc}
                      </p>

                    </motion.div>
                  </FadeIn>
                );
              })}

            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          PROJECTS
      ===================================================== */}

      <section className="py-28 px-6 bg-gray-50/70">

        <div className="max-w-7xl mx-auto">

          <FadeIn className="text-center mb-16">

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-200 text-indigo-600 text-xs font-bold uppercase tracking-wider mb-5">
              <Layers3 className="w-3.5 h-3.5" />
              Selected Work
            </div>

            <h2 className="text-4xl md:text-5xl font-black font-heading tracking-tight">
              Products That
              <br />
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Create Results
              </span>
            </h2>

            <p className="text-gray-500 max-w-xl mx-auto mt-5">
              A glimpse into the platforms, systems, and digital experiences
              we've helped bring to life.
            </p>

          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {projects.map((project, i) => (
              <FadeIn
                key={project.title}
                delay={i * 0.07}
              >
                <Link
                  to={`/portfolio/${project.title
                    .toLowerCase()
                    .replace(/\s+/g, '-')}`}
                  className="block h-full"
                >

                  <motion.div
                    whileHover={{
                      y: -8,
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 22,
                    }}
                    className="group bg-white rounded-3xl border border-gray-100 overflow-hidden h-full shadow-[0_10px_40px_rgba(15,23,42,0.04)] hover:shadow-[0_30px_80px_rgba(15,23,42,0.12)]"
                  >

                    <div className="h-52 relative overflow-hidden bg-gray-100">

                      {project.image ? (
                        <>
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />

                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                        </>
                      ) : (
                        <div
                          className={`w-full h-full bg-gradient-to-br ${project.color} flex items-center justify-center`}
                        >
                          <span className="text-7xl font-black text-white/20">
                            {project.title[0]}
                          </span>
                        </div>
                      )}

                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1.5 rounded-full bg-black/25 backdrop-blur-md border border-white/20 text-white text-xs font-semibold">
                          {project.tag}
                        </span>
                      </div>

                      <div className="absolute bottom-4 right-4">
                        <span className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-gray-900 transition-all">
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>

                    </div>

                    <div className="p-6">

                      <h3 className="text-xl font-bold font-heading mb-2">
                        {project.title}
                      </h3>

                      <p className="text-gray-500 text-sm leading-relaxed mb-5">
                        {project.desc}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 bg-gray-50 border border-gray-100 rounded-md text-[11px] font-medium text-gray-600"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="space-y-2">
                        {project.results.map((result) => (
                          <div
                            key={result}
                            className="flex items-center gap-2 text-xs font-semibold text-emerald-600"
                          >
                            <span className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center">
                              <TrendingUp className="w-3 h-3" />
                            </span>

                            {result}
                          </div>
                        ))}
                      </div>

                    </div>
                  </motion.div>

                </Link>
              </FadeIn>
            ))}

          </div>

          <FadeIn className="text-center mt-12">
            <Link
              to="/portfolio"
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gray-950 text-white font-semibold hover:bg-indigo-600 transition-colors"
            >
              View All Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeIn>

        </div>
      </section>

      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section className="py-28 px-6 relative">

        <div className="max-w-7xl mx-auto">

          <FadeIn className="text-center mb-16">

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-wider mb-5">
              <CircleDot className="w-3.5 h-3.5" />
              Our Process
            </div>

            <h2 className="text-4xl md:text-5xl font-black font-heading">
              From Idea to
              <span className="text-indigo-600"> Impact</span>
            </h2>

            <p className="text-gray-500 max-w-xl mx-auto mt-5">
              A clear, collaborative process designed to move from
              uncertainty to a production-ready solution.
            </p>

          </FadeIn>

          <div className="relative">

            {/* line */}
            <div className="hidden lg:block absolute top-9 left-[7%] right-[7%] h-px bg-gradient-to-r from-indigo-100 via-indigo-300 to-purple-100" />

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-5">

              {process.map((item, i) => (
                <FadeIn
                  key={item.step}
                  delay={i * 0.08}
                >
                  <motion.div
                    whileHover={{
                      y: -8,
                    }}
                    className="relative text-center"
                  >

                    <motion.div
                      whileHover={{
                        scale: 1.12,
                      }}
                      className="relative z-10 mx-auto w-[72px] h-[72px] rounded-2xl bg-white border border-indigo-100 shadow-[0_10px_35px_rgba(79,70,229,0.1)] flex items-center justify-center"
                    >
                      <span className="text-xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        {item.step}
                      </span>
                    </motion.div>

                    <h3 className="font-bold text-sm mt-5 mb-2">
                      {item.title}
                    </h3>

                    <p className="text-gray-500 text-xs leading-relaxed">
                      {item.desc}
                    </p>

                  </motion.div>
                </FadeIn>
              ))}

            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TESTIMONIALS
      ===================================================== */}

      <section className="py-28 px-6 bg-gray-950 text-white relative overflow-hidden">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(99,102,241,0.2),transparent_25%),radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.15),transparent_25%)]" />

        <div className="max-w-5xl mx-auto relative z-10">

          <FadeIn className="text-center mb-14">

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-indigo-300 text-xs font-bold uppercase tracking-wider mb-5">
              <Quote className="w-3.5 h-3.5" />
              Client Stories
            </div>

            <h2 className="text-4xl md:text-5xl font-black font-heading">
              Don't Take Our
              <span className="text-indigo-400"> Word For It</span>
            </h2>

          </FadeIn>

          <FadeIn>

            <div className="relative rounded-[32px] bg-white/[0.05] border border-white/[0.08] backdrop-blur-xl p-8 sm:p-12 md:p-16 overflow-hidden">

              <div className="absolute -top-20 -left-20 text-indigo-500/10">
                <Quote className="w-64 h-64" />
              </div>

              <motion.div
                key={testimonialIdx}
                initial={{
                  opacity: 0,
                  x: 20,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.5,
                }}
                className="relative z-10"
              >

                <div className="flex gap-1 mb-7">
                  {Array.from({
                    length: testimonials[testimonialIdx].rating,
                  }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                <p className="text-xl sm:text-2xl md:text-3xl font-medium leading-relaxed text-gray-100 max-w-4xl">
                  “{testimonials[testimonialIdx].content}”
                </p>

                <div className="mt-10 flex items-center gap-4">

                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center font-bold">
                    {testimonials[testimonialIdx].avatar}
                  </div>

                  <div>
                    <div className="font-bold">
                      {testimonials[testimonialIdx].name}
                    </div>

                    <div className="text-gray-400 text-sm">
                      {testimonials[testimonialIdx].role}
                    </div>
                  </div>

                  <div className="ml-auto flex gap-2">

                    <button
                      onClick={() =>
                        setTestimonialIdx(
                          (i) =>
                            (i - 1 + testimonials.length) %
                            testimonials.length
                        )
                      }
                      className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() =>
                        setTestimonialIdx(
                          (i) =>
                            (i + 1) %
                            testimonials.length
                        )
                      }
                      className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>

                  </div>

                </div>

                <div className="flex gap-2 mt-8">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setTestimonialIdx(i)}
                      className={`h-1.5 rounded-full transition-all ${
                        i === testimonialIdx
                          ? 'w-8 bg-indigo-400'
                          : 'w-2 bg-white/20'
                      }`}
                    />
                  ))}
                </div>

              </motion.div>

            </div>

          </FadeIn>
        </div>
      </section>

      {/* =====================================================
          STATS
      ===================================================== */}

      <section className="py-24 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">

            {stats.map((stat, i) => {
              const Icon = stat.icon;

              return (
                <FadeIn
                  key={stat.label}
                  delay={i * 0.1}
                >
                  <motion.div
                    whileHover={{
                      y: -7,
                    }}
                    className="relative p-7 rounded-3xl bg-white border border-gray-100 text-center overflow-hidden shadow-[0_10px_40px_rgba(15,23,42,0.04)]"
                  >

                    <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/50 to-transparent opacity-0 hover:opacity-100 transition-opacity" />

                    <div className="relative z-10">

                      <div className="w-12 h-12 mx-auto rounded-2xl bg-gray-50 flex items-center justify-center mb-5">
                        <Icon
                          className={`w-6 h-6 ${stat.color}`}
                          strokeWidth={1.6}
                        />
                      </div>

                      <div className="text-4xl sm:text-5xl font-black font-heading bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        <Counter
                          target={stat.value}
                          suffix={stat.suffix}
                        />
                      </div>

                      <div className="text-gray-500 text-sm mt-2">
                        {stat.label}
                      </div>

                    </div>
                  </motion.div>
                </FadeIn>
              );
            })}

          </div>
        </div>
      </section>

      {/* =====================================================
          COMMENT SECTION
      ===================================================== */}

      <section className="py-28 px-6 bg-gray-50">

        <div className="max-w-3xl mx-auto">

          <FadeIn className="text-center mb-12">

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-200 text-indigo-600 text-xs font-bold uppercase tracking-wider mb-5">
              <MessageSquare className="w-3.5 h-3.5" />
              Community
            </div>

            <h2 className="text-4xl md:text-5xl font-black font-heading">
              Share Your
              <span className="text-indigo-600"> Experience</span>
            </h2>

            <p className="text-gray-500 mt-5">
              Tell us what you think about working with Bluorbit Solutions.
            </p>

          </FadeIn>

          <FadeIn>

            <div className="relative rounded-[32px] bg-white border border-gray-100 p-7 sm:p-10 shadow-[0_20px_70px_rgba(15,23,42,0.07)] overflow-hidden">

              <div className="absolute -top-20 -right-20 w-56 h-56 bg-indigo-100 rounded-full blur-3xl opacity-60" />

              <form
                onSubmit={handleCommentSubmit}
                className="relative z-10 space-y-6"
              >

                <div>

                  <label
                    htmlFor="name"
                    className="block text-sm font-bold text-gray-800 mb-2"
                  >
                    Your Name
                  </label>

                  <input
                    type="text"
                    id="name"
                    value={commentName}
                    onChange={(e) =>
                      setCommentName(e.target.value)
                    }
                    placeholder="John Doe"
                    className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all"
                    required
                  />

                </div>

                <div>

                  <label
                    htmlFor="comment"
                    className="block text-sm font-bold text-gray-800 mb-2"
                  >
                    Your Comment
                  </label>

                  <textarea
                    id="comment"
                    value={commentText}
                    onChange={(e) =>
                      setCommentText(e.target.value)
                    }
                    placeholder="What did you think about our services?"
                    rows={5}
                    className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all resize-none"
                    required
                  />

                </div>

                <div className="flex justify-end">

                  <motion.button
                    whileHover={{
                      scale: 1.02,
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                    type="submit"
                    disabled={isSubmitting}
                    className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gray-950 text-white font-semibold hover:bg-indigo-600 transition-colors disabled:opacity-70"
                  >

                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{
                            rotate: 360,
                          }}
                          transition={{
                            repeat: Infinity,
                            duration: 1,
                            ease: 'linear',
                          }}
                        >
                          <Star className="w-4 h-4" />
                        </motion.div>

                        Publishing...
                      </>
                    ) : (
                      <>
                        Publish Comment
                        <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}

                  </motion.button>

                </div>

              </form>
            </div>

          </FadeIn>
        </div>
      </section>

      {/* =====================================================
          FAQ
      ===================================================== */}

      <section className="py-28 px-6">

        <div className="max-w-3xl mx-auto">

          <FadeIn className="text-center mb-14">

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-wider mb-5">
              <MousePointer2 className="w-3.5 h-3.5" />
              FAQ
            </div>

            <h2 className="text-4xl md:text-5xl font-black font-heading">
              Questions,
              <span className="text-indigo-600"> Answered.</span>
            </h2>

          </FadeIn>

          <div className="space-y-3">

            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;

              return (
                <FadeIn
                  key={faq.q}
                  delay={i * 0.05}
                >
                  <div className="rounded-2xl border border-gray-100 bg-white overflow-hidden shadow-[0_5px_25px_rgba(15,23,42,0.03)]">

                    <button
                      className="w-full text-left p-6 flex items-center justify-between gap-4"
                      onClick={() =>
                        setOpenFaq(
                          isOpen ? null : i
                        )
                      }
                    >

                      <span className="font-bold text-gray-900">
                        {faq.q}
                      </span>

                      <motion.span
                        animate={{
                          rotate: isOpen ? 45 : 0,
                        }}
                        className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0"
                      >
                        <Plus className="w-4 h-4 text-gray-500" />
                      </motion.span>

                    </button>

                    <motion.div
                      initial={false}
                      animate={{
                        height: isOpen ? 'auto' : 0,
                        opacity: isOpen ? 1 : 0,
                      }}
                      transition={{
                        duration: 0.35,
                        ease,
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0 text-gray-500 text-sm leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>

                  </div>
                </FadeIn>
              );
            })}

          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="px-6 pb-28">

        <div className="max-w-6xl mx-auto">

          <FadeIn>

            <div className="relative rounded-[36px] overflow-hidden bg-gray-950 p-10 sm:p-16 md:p-20 text-center">

              {/* Glow */}
              <div className="absolute -top-32 left-1/4 w-96 h-96 bg-indigo-600/30 rounded-full blur-[100px]" />

              <div className="absolute -bottom-32 right-1/4 w-96 h-96 bg-purple-600/25 rounded-full blur-[100px]" />

              {/* grid */}
              <div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                  backgroundImage:
                    'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                }}
              />

              <div className="relative z-10">

                <motion.div
                  animate={{
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                  }}
                  className="inline-flex w-14 h-14 rounded-2xl bg-white/10 border border-white/10 items-center justify-center mb-7"
                >
                  <Rocket className="w-6 h-6 text-indigo-300" />
                </motion.div>

                <h2 className="text-4xl md:text-6xl font-black font-heading text-white leading-tight">
                  Your Next Big
                  <br />
                  <span className="text-indigo-400">
                    Digital Move
                  </span>
                  Starts Here.
                </h2>

                <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-base sm:text-lg leading-relaxed">
                  Have an idea, a broken process, or a business that needs
                  better technology? Let's turn it into something remarkable.
                </p>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-9">

                  <Link
                    to="/contact"
                    className="group inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-white text-gray-950 font-bold hover:bg-indigo-50 transition-colors shadow-xl"
                  >
                    Start Your Project
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    to="/portfolio"
                    className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-colors"
                  >
                    View Our Work
                    <MoveUpRight className="w-4 h-4" />
                  </Link>

                </div>

              </div>
            </div>

          </FadeIn>
        </div>
      </section>

      {/* =====================================================
          SUCCESS TOAST
      ===================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
          scale: 0.95,
        }}
        animate={
          showCommentPopup
            ? {
                opacity: 1,
                y: 0,
                scale: 1,
              }
            : {
                opacity: 0,
                y: 40,
                scale: 0.95,
                pointerEvents: 'none',
              }
        }
        transition={{
          duration: 0.4,
          ease,
        }}
        className="fixed bottom-6 right-6 z-[100] max-w-sm w-[calc(100%-3rem)]"
      >

        <div className="relative bg-white rounded-2xl p-5 shadow-[0_25px_80px_rgba(0,0,0,0.18)] border border-gray-100 overflow-hidden">

          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-teal-500" />

          <button
            onClick={() =>
              setShowCommentPopup(false)
            }
            className="absolute top-3 right-3 text-gray-400 hover:text-gray-700"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex gap-4">

            <div className="w-11 h-11 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0">
              <CheckCircle className="w-5 h-5 text-emerald-500" />
            </div>

            <div className="pr-5">

              <h4 className="font-bold text-gray-900 mb-1">
                Comment Submitted!
              </h4>

              <p className="text-gray-500 text-sm leading-relaxed">
                Thank you for your feedback! Your comment will be reviewed
                and should appear on the site within 2–3 hours.
              </p>

            </div>

          </div>
        </div>
      </motion.div>

    </main>
  );
}