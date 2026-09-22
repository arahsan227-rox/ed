import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  Bot,
  Calendar,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Code2,
  Layers3,
  MessageCircle,
  MessageSquare,
  RotateCcw,
  ShieldCheck,
  Sparkles,
  UserRound,
  X,
  Zap,
} from 'lucide-react';
import { WhatsApp } from './Icons';

const WHATSAPP_URL =
  'https://wa.me/923379693876?text=Hi%20UETC%20team%2C%20I%27d%20like%20to%20discuss%20a%20project.';

const serviceDatabase = {
  'web-development': {
    name: 'Web Development',
    shortName: 'Web Development',
    tagline: 'High-performance websites, SaaS products & web platforms',
    icon: '🌐',
    accent: 'blue',
    summary:
      'We architect fast, conversion-focused web experiences with modern frontend systems, scalable backend services, and production-ready deployment pipelines.',
    techStack: [
      'Next.js',
      'React',
      'TypeScript',
      'Node.js',
      'PostgreSQL',
      'AWS / Vercel',
    ],
    keyDeliverables: [
      'Custom SaaS & web platform architecture',
      'Responsive UI with performance-focused frontend engineering',
      'SEO-ready CMS and content architecture',
      'Automated testing and CI/CD deployment pipeline',
    ],
    timeline: '3–6 weeks for MVP · 8–12 weeks for larger platforms',
    recommendedFor:
      'Startups, SaaS founders, companies redesigning legacy websites, and high-traffic businesses.',
    pageLink: '/services/web-development',
  },

  'business-automation': {
    name: 'Business Automation',
    shortName: 'Automation',
    tagline: 'Connect your tools and eliminate repetitive manual work',
    icon: '⚙️',
    accent: 'emerald',
    summary:
      'We connect CRMs, ERPs, spreadsheets, communication tools, payment systems, and internal applications into reliable automated workflows.',
    techStack: [
      'n8n',
      'Make.com',
      'Zapier',
      'Python',
      'Webhooks',
      'REST APIs',
    ],
    keyDeliverables: [
      'CRM & ERP two-way synchronization',
      'Automated lead routing and follow-up workflows',
      'Invoice, PDF and notification automation',
      'Failure monitoring and recovery workflows',
    ],
    timeline: '1–3 weeks for focused workflows · 4–8 weeks for larger systems',
    recommendedFor:
      'Teams spending significant time on repetitive data entry, lead management, reporting, or manual operations.',
    pageLink: '/services/business-automation',
  },

  'software-development': {
    name: 'Custom Software',
    shortName: 'Custom Software',
    tagline: 'Purpose-built internal tools, ERP, CRM & business platforms',
    icon: '💻',
    accent: 'purple',
    summary:
      'We build software around your actual business processes instead of forcing your team to adapt to generic SaaS products.',
    techStack: [
      'TypeScript',
      'NestJS',
      'PostgreSQL',
      'Prisma',
      'Redis',
      'Docker',
    ],
    keyDeliverables: [
      'Custom database architecture and business logic',
      'Role-based access control and authentication',
      'High-performance APIs and audit logging',
      'Production deployment and maintenance workflows',
    ],
    timeline: '6–16 weeks depending on scope and complexity',
    recommendedFor:
      'Organizations outgrowing off-the-shelf software or requiring proprietary workflows and data.',
    pageLink: '/services/software-development',
  },

  'ai-integrations': {
    name: 'AI Integrations',
    shortName: 'AI & Automation',
    tagline: 'Practical AI agents, RAG systems & intelligent workflows',
    icon: '✨',
    accent: 'cyan',
    summary:
      'We integrate AI into real products and workflows — from private knowledge assistants to document processing, customer support, and operational agents.',
    techStack: [
      'OpenAI',
      'Claude',
      'LangChain',
      'LlamaIndex',
      'Pinecone / pgvector',
      'Python',
    ],
    keyDeliverables: [
      'Private knowledge-base and RAG systems',
      'AI assistants with controlled tool access',
      'Intelligent document processing',
      'Guardrails, logging and fallback workflows',
    ],
    timeline: '2–6 weeks for focused production AI systems',
    recommendedFor:
      'Companies exploring AI for customer support, internal knowledge, research, documents, or operations.',
    pageLink: '/services/ai-integrations',
  },

  'ecommerce-solutions': {
    name: 'E-Commerce',
    shortName: 'E-Commerce',
    tagline: 'Fast storefronts, marketplaces & commerce infrastructure',
    icon: '🛍️',
    accent: 'rose',
    summary:
      'We build scalable commerce experiences with optimized checkout flows, inventory synchronization, custom integrations, and analytics.',
    techStack: [
      'Shopify Plus',
      'Next.js',
      'Medusa',
      'Stripe',
      'Sanity',
      'Redis',
    ],
    keyDeliverables: [
      'Headless and custom storefront development',
      'Inventory and warehouse synchronization',
      'Subscription and payment integrations',
      'Conversion-focused analytics dashboards',
    ],
    timeline: '4–8 weeks for most commerce implementations',
    recommendedFor:
      'D2C brands, B2B distributors, marketplaces, and businesses expanding online sales.',
    pageLink: '/services/e-commerce',
  },

  'seo-growth': {
    name: 'SEO & Organic Growth',
    shortName: 'SEO',
    tagline: 'Technical SEO, content systems & organic acquisition',
    icon: '📈',
    accent: 'amber',
    summary:
      'We combine technical engineering, content architecture, search analytics, and conversion strategy to build sustainable organic acquisition systems.',
    techStack: [
      'Ahrefs',
      'SEMrush',
      'Google Search Console',
      'Screaming Frog',
      'Schema.org',
      'Next.js',
    ],
    keyDeliverables: [
      'Technical SEO and indexation audits',
      'Programmatic landing-page architecture',
      'Structured data and schema implementation',
      'High-intent content and keyword strategy',
    ],
    timeline: '30-day technical sprint or ongoing growth engagement',
    recommendedFor:
      'Businesses looking to improve organic visibility, qualified traffic, and acquisition efficiency.',
    pageLink: '/services/seo',
  },
};

const quickQuestions = [
  {
    label: 'What services do you offer?',
    query: 'Show me your services',
    icon: Layers3,
  },
  {
    label: 'How does your process work?',
    query: 'How does your process work?',
    icon: Zap,
  },
  {
    label: 'Can you build AI solutions?',
    query: 'Tell me about AI',
    icon: Sparkles,
  },
  {
    label: 'I need a consultation',
    query: 'I want to talk to an engineer',
    icon: Calendar,
  },
];

const accentMap = {
  blue: {
    soft: 'bg-blue-50',
    border: 'border-blue-100',
    text: 'text-blue-600',
    strong: 'bg-blue-600',
    ring: 'ring-blue-100',
  },
  emerald: {
    soft: 'bg-emerald-50',
    border: 'border-emerald-100',
    text: 'text-emerald-600',
    strong: 'bg-emerald-600',
    ring: 'ring-emerald-100',
  },
  purple: {
    soft: 'bg-purple-50',
    border: 'border-purple-100',
    text: 'text-purple-600',
    strong: 'bg-purple-600',
    ring: 'ring-purple-100',
  },
  cyan: {
    soft: 'bg-cyan-50',
    border: 'border-cyan-100',
    text: 'text-cyan-600',
    strong: 'bg-cyan-600',
    ring: 'ring-cyan-100',
  },
  rose: {
    soft: 'bg-rose-50',
    border: 'border-rose-100',
    text: 'text-rose-600',
    strong: 'bg-rose-600',
    ring: 'ring-rose-100',
  },
  amber: {
    soft: 'bg-amber-50',
    border: 'border-amber-100',
    text: 'text-amber-600',
    strong: 'bg-amber-600',
    ring: 'ring-amber-100',
  },
};

const initialMessage = {
  id: 'welcome',
  type: 'assistant',
  content:
    'Hi! I’m the UETC Solutions Architect. I can help you explore our services, understand our delivery process, or connect you with an engineer.',
};

function MessageText({ children }) {
  return (
    <div className="whitespace-pre-line leading-relaxed">
      {children}
    </div>
  );
}

function TypingIndicator() {
  return (
    <div className="flex items-end gap-2">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-white shadow-sm">
        <Bot size={15} />
      </div>

      <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-md border border-gray-100 bg-white px-4 py-3 shadow-sm">
        {[0, 1, 2].map((item) => (
          <motion.span
            key={item}
            className="h-1.5 w-1.5 rounded-full bg-slate-400"
            animate={{ y: [0, -4, 0], opacity: [0.45, 1, 0.45] }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              delay: item * 0.12,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default function ServiceChatbot() {
  const [open, setOpen] = useState(false);
  const [activeView, setActiveView] = useState('menu');
  const [selectedServiceId, setSelectedServiceId] = useState(null);
  const [messages, setMessages] = useState([initialMessage]);
  const [isTyping, setIsTyping] = useState(false);

  const messagesContainerRef = useRef(null);
  const responseRef = useRef(null);

  const selectedService = useMemo(
    () => (selectedServiceId ? serviceDatabase[selectedServiceId] : null),
    [selectedServiceId]
  );

  /*
   * Scroll the chatbot viewport to the newly generated response.
   * This is intentionally NOT scrollIntoView() on the page itself,
   * so only the chatbot's internal scroll area moves.
   */
  const scrollToResponse = () => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const container = messagesContainerRef.current;
        const response = responseRef.current;

        if (!container || !response) return;

        const containerRect = container.getBoundingClientRect();
        const responseRect = response.getBoundingClientRect();

        const targetScrollTop =
          container.scrollTop +
          (responseRect.top - containerRect.top) -
          24;

        container.scrollTo({
          top: Math.max(0, targetScrollTop),
          behavior: 'smooth',
        });
      });
    });
  };

  useEffect(() => {
    if (!isTyping && activeView === 'service-detail' && selectedServiceId) {
      scrollToResponse();
    }
  }, [activeView, selectedServiceId, isTyping]);

  useEffect(() => {
    if (!open) return;

    const timer = setTimeout(() => {
      const container = messagesContainerRef.current;

      if (container && activeView === 'service-detail') {
        scrollToResponse();
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [open]);

  const addUserMessage = (content) => {
    setMessages((prev) => [
      ...prev,
      {
        id: `${Date.now()}-${Math.random()}`,
        type: 'user',
        content,
      },
    ]);
  };

  const addAssistantMessage = (content, callback) => {
    setIsTyping(true);

    window.setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: `${Date.now()}-${Math.random()}`,
          type: 'assistant',
          content,
        },
      ]);

      setIsTyping(false);

      if (callback) callback();
    }, 450);
  };

  const openService = (serviceId, addConversation = true) => {
    const service = serviceDatabase[serviceId];

    if (!service) return;

    setSelectedServiceId(serviceId);

    if (addConversation) {
      addUserMessage(`Tell me about ${service.name}`);

      addAssistantMessage(
        `Absolutely. Here’s a practical breakdown of ${service.name}, including the typical scope, technology, delivery timeline, and who it is designed for.`,
        () => {
          setActiveView('service-detail');

          // Scroll directly to the newly generated service response.
          setTimeout(() => {
            scrollToResponse();
          }, 50);
        }
      );
    } else {
      setActiveView('service-detail');

      setTimeout(() => {
        scrollToResponse();
      }, 50);
    }
  };

  const showMenu = () => {
    addUserMessage('Show me the services');

    addAssistantMessage(
      'Here are the main capabilities we can help you with. Select one to explore the details.',
      () => {
        setSelectedServiceId(null);
        setActiveView('menu');
      }
    );
  };

  const showProcess = () => {
    addUserMessage('How does your process work?');

    addAssistantMessage(
      'Our projects follow a structured delivery cycle designed around discovery, engineering, validation, and production launch.',
      () => setActiveView('process')
    );
  };

  const showBooking = () => {
    addUserMessage('I want to speak with an engineer');

    addAssistantMessage(
      'Sure. You can contact the team directly or schedule a project discussion through the contact page.',
      () => setActiveView('booking')
    );
  };

  const resetChat = () => {
    setMessages([
      {
        ...initialMessage,
        id: `welcome-${Date.now()}`,
        content:
          'Session restarted. What are you looking to build or improve?',
      },
    ]);

    setSelectedServiceId(null);
    setActiveView('menu');
    setIsTyping(false);

    requestAnimationFrame(() => {
      messagesContainerRef.current?.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
  };

  const processQuery = (rawValue) => {
    const query = rawValue.toLowerCase().trim();

    const matchedService = Object.entries(serviceDatabase).find(
      ([key, service]) => {
        const aliases = [
          key,
          service.name.toLowerCase(),
          service.shortName.toLowerCase(),
        ];

        return aliases.some((alias) => query.includes(alias));
      }
    );

    if (matchedService) {
      const [serviceId, service] = matchedService;

      setSelectedServiceId(serviceId);

      addAssistantMessage(
        `I found the closest match: ${service.name}. I’ll show you the architecture, deliverables, technology stack, timeline, and typical fit.`,
        () => {
          setActiveView('service-detail');

          setTimeout(() => {
            scrollToResponse();
          }, 50);
        }
      );

      return;
    }

    if (
      query.includes('ai') ||
      query.includes('artificial intelligence') ||
      query.includes('chatbot') ||
      query.includes('llm')
    ) {
      const serviceId = 'ai-integrations';

      setSelectedServiceId(serviceId);

      addAssistantMessage(
        'Yes — AI is one of our core capabilities. We build production-oriented AI integrations rather than isolated demos. Here’s what that service includes.',
        () => {
          setActiveView('service-detail');

          setTimeout(() => {
            scrollToResponse();
          }, 50);
        }
      );

      return;
    }

    if (
      query.includes('process') ||
      query.includes('workflow') ||
      query.includes('how do you work') ||
      query.includes('how does it work')
    ) {
      addAssistantMessage(
        'Our delivery model is structured around discovery, architecture, iterative development, validation, and production deployment.',
        () => setActiveView('process')
      );

      return;
    }

    if (
      query.includes('price') ||
      query.includes('pricing') ||
      query.includes('cost') ||
      query.includes('budget')
    ) {
      addAssistantMessage(
        'Project pricing depends on scope, integrations, complexity, timeline, and ongoing support requirements. We prefer to understand the system first instead of forcing every project into the same package.',
        () => setActiveView('booking')
      );

      return;
    }

    if (
      query.includes('contact') ||
      query.includes('call') ||
      query.includes('talk') ||
      query.includes('consult') ||
      query.includes('engineer')
    ) {
      addAssistantMessage(
        'Absolutely. You can speak directly with the team through WhatsApp or use our contact page to start a project discussion.',
        () => setActiveView('booking')
      );

      return;
    }

    if (
      query.includes('hello') ||
      query.includes('hi') ||
      query.includes('hey')
    ) {
      addAssistantMessage(
        'Hi! 👋 Tell me what you’re building, or choose one of the quick options below and I’ll guide you.'
      );

      return;
    }

    addAssistantMessage(
      'I can help you explore our services, explain our development process, discuss AI and automation, or connect you with an engineer. Try asking about a specific service or choose an option below.',
      () => setActiveView('menu')
    );
  };

  /*
   * Search/input bar has intentionally been removed.
   * The chatbot now works through the interactive buttons,
   * service cards, quick questions, process button and booking CTA.
   */

  const handleQuickQuestion = (question) => {
    if (isTyping) return;

    addUserMessage(question.query);

    if (question.query === 'Show me your services') {
      addAssistantMessage(
        'Here are the main capabilities we can help you with. Select one to explore.',
        () => {
          setSelectedServiceId(null);
          setActiveView('menu');
        }
      );
      return;
    }

    if (question.query === 'How does your process work?') {
      addAssistantMessage(
        'Our delivery model is structured around discovery, architecture, iterative development, validation, and production deployment.',
        () => setActiveView('process')
      );
      return;
    }

    if (question.query === 'Tell me about AI') {
      setSelectedServiceId('ai-integrations');

      addAssistantMessage(
        'Absolutely. We build practical AI integrations such as private knowledge assistants, document processing, AI workflows, and production support agents.',
        () => {
          setActiveView('service-detail');

          setTimeout(() => {
            scrollToResponse();
          }, 50);
        }
      );

      return;
    }

    if (question.query === 'I want to talk to an engineer') {
      addAssistantMessage(
        'Of course. You can contact the team directly through WhatsApp or start a project discussion from the contact page.',
        () => setActiveView('booking')
      );
    }
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.section
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{
              duration: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              fixed z-[9999]
              bottom-24 right-4
              sm:right-6
              w-[calc(100vw-32px)]
              sm:w-[430px]
              max-w-[430px]
              overflow-hidden
              rounded-[28px]
              border border-white/70
              bg-white
              shadow-[0_30px_90px_rgba(15,23,42,0.22)]
            "
            aria-label="UETC Solutions Architect"
          >
            {/* Header */}
            <header className="relative overflow-hidden bg-slate-950 px-5 py-4 text-white">
              <div className="absolute -right-12 -top-16 h-40 w-40 rounded-full bg-indigo-500/20 blur-3xl" />
              <div className="absolute -left-12 bottom-0 h-28 w-28 rounded-full bg-cyan-400/10 blur-3xl" />

              <div className="relative flex items-center justify-between gap-3">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-400 shadow-lg shadow-indigo-500/20">
                    <Bot size={21} />
                    <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-slate-950 bg-emerald-400" />
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <strong className="truncate text-sm font-bold">
                        UETC Solutions Architect
                      </strong>
                    </div>

                    <div className="mt-0.5 flex items-center gap-1.5 text-[11px] text-slate-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      Available to help
                    </div>
                  </div>
                </div>

                <div className="flex shrink-0 items-center gap-1">
                  <button
                    type="button"
                    onClick={resetChat}
                    className="flex h-9 w-9 items-center justify-center rounded-xl text-slate-300 transition hover:bg-white/10 hover:text-white"
                    title="Reset conversation"
                    aria-label="Reset conversation"
                  >
                    <RotateCcw size={16} />
                  </button>

                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="flex h-9 w-9 items-center justify-center rounded-xl text-slate-300 transition hover:bg-white/10 hover:text-white"
                    title="Close assistant"
                    aria-label="Close assistant"
                  >
                    <X size={19} />
                  </button>
                </div>
              </div>
            </header>

            {/* Messages */}
            <div
              ref={messagesContainerRef}
              className="h-[500px] overflow-y-auto bg-gradient-to-b from-slate-50 via-white to-white px-4 py-5 sm:h-[530px]"
            >
              <div className="space-y-4">
                {messages.map((message) => {
                  const isUser = message.type === 'user';

                  return (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${
                        isUser
                          ? 'justify-end'
                          : 'items-end justify-start gap-2'
                      }`}
                    >
                      {!isUser && (
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-white shadow-sm">
                          <Bot size={15} />
                        </div>
                      )}

                      <div
                        className={`
                          max-w-[82%]
                          rounded-2xl
                          px-4 py-3
                          text-sm
                          ${
                            isUser
                              ? 'rounded-br-md bg-slate-900 text-white shadow-sm'
                              : 'rounded-bl-md border border-gray-100 bg-white text-slate-700 shadow-sm'
                          }
                        `}
                      >
                        <MessageText>{message.content}</MessageText>
                      </div>

                      {isUser && (
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                          <UserRound size={14} />
                        </div>
                      )}
                    </motion.div>
                  );
                })}

                {isTyping && <TypingIndicator />}

                {/* MENU */}
                {!isTyping && activeView === 'menu' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-4"
                  >
                    <div>
                      <div className="mb-2 flex items-center gap-2">
                        <Sparkles size={14} className="text-indigo-500" />
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                          Explore capabilities
                        </span>
                      </div>

                      <div className="grid gap-2">
                        {Object.entries(serviceDatabase).map(
                          ([key, service]) => {
                            const accent = accentMap[service.accent];

                            return (
                              <motion.button
                                key={key}
                                type="button"
                                whileHover={{ x: 2 }}
                                whileTap={{ scale: 0.99 }}
                                onClick={() => openService(key)}
                                className={`
                                  group
                                  flex w-full items-center gap-3
                                  rounded-2xl
                                  border
                                  ${accent.border}
                                  bg-white
                                  p-3
                                  text-left
                                  shadow-sm
                                  transition
                                  hover:shadow-md
                                `}
                              >
                                <div
                                  className={`
                                    flex h-10 w-10 shrink-0 items-center justify-center
                                    rounded-xl
                                    ${accent.soft}
                                    text-lg
                                  `}
                                >
                                  {service.icon}
                                </div>

                                <div className="min-w-0 flex-1">
                                  <div className="text-sm font-bold text-slate-900">
                                    {service.name}
                                  </div>

                                  <div className="mt-0.5 truncate text-[11px] text-slate-500">
                                    {service.tagline}
                                  </div>
                                </div>

                                <ChevronRight
                                  size={16}
                                  className="shrink-0 text-slate-300 transition group-hover:translate-x-0.5 group-hover:text-slate-700"
                                />
                              </motion.button>
                            );
                          }
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={showProcess}
                        className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-xs font-bold text-slate-700 shadow-sm transition hover:border-gray-300 hover:bg-gray-50"
                      >
                        <Layers3 size={14} />
                        Our Process
                      </button>

                      <button
                        type="button"
                        onClick={showBooking}
                        className="flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-3 py-2.5 text-xs font-bold text-white shadow-sm shadow-indigo-500/20 transition hover:bg-indigo-700"
                      >
                        <Calendar size={14} />
                        Talk to Engineer
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* SERVICE DETAIL */}
                {!isTyping &&
                  activeView === 'service-detail' &&
                  selectedService && (
                    <motion.div
                      ref={responseRef}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
                    >
                      {(() => {
                        const accent = accentMap[selectedService.accent];

                        return (
                          <>
                            <div
                              className={`border-b ${accent.border} ${accent.soft} p-4`}
                            >
                              <div className="flex items-start gap-3">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-xl shadow-sm">
                                  {selectedService.icon}
                                </div>

                                <div className="min-w-0">
                                  <h4 className="font-bold text-slate-900">
                                    {selectedService.name}
                                  </h4>

                                  <p className="mt-1 text-xs leading-relaxed text-slate-600">
                                    {selectedService.tagline}
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div className="space-y-5 p-4">
                              <p className="text-sm leading-relaxed text-slate-600">
                                {selectedService.summary}
                              </p>

                              <div>
                                <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                                  <CheckCircle2
                                    size={14}
                                    className={accent.text}
                                  />
                                  Key Deliverables
                                </div>

                                <div className="space-y-2">
                                  {selectedService.keyDeliverables.map(
                                    (item) => (
                                      <div
                                        key={item}
                                        className="flex items-start gap-2 text-xs leading-relaxed text-slate-700"
                                      >
                                        <Check
                                          size={14}
                                          className={`mt-0.5 shrink-0 ${accent.text}`}
                                        />
                                        <span>{item}</span>
                                      </div>
                                    )
                                  )}
                                </div>
                              </div>

                              <div>
                                <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                                  <Code2
                                    size={14}
                                    className={accent.text}
                                  />
                                  Technology
                                </div>

                                <div className="flex flex-wrap gap-1.5">
                                  {selectedService.techStack.map((tech) => (
                                    <span
                                      key={tech}
                                      className="rounded-lg border border-gray-200 bg-gray-50 px-2.5 py-1 text-[11px] font-semibold text-slate-600"
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              </div>

                              <div className="grid gap-2">
                                <div className="flex items-start gap-3 rounded-xl border border-gray-100 bg-slate-50 p-3">
                                  <Clock3
                                    size={15}
                                    className="mt-0.5 shrink-0 text-indigo-500"
                                  />

                                  <div>
                                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                                      Typical timeline
                                    </div>

                                    <div className="mt-1 text-xs font-semibold leading-relaxed text-slate-700">
                                      {selectedService.timeline}
                                    </div>
                                  </div>
                                </div>

                                <div className="flex items-start gap-3 rounded-xl border border-gray-100 bg-slate-50 p-3">
                                  <ShieldCheck
                                    size={15}
                                    className="mt-0.5 shrink-0 text-emerald-500"
                                  />

                                  <div>
                                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                                      Good fit for
                                    </div>

                                    <div className="mt-1 text-xs font-semibold leading-relaxed text-slate-700">
                                      {selectedService.recommendedFor}
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="grid grid-cols-2 gap-2">
                                <button
                                  type="button"
                                  onClick={showMenu}
                                  className="flex items-center justify-center gap-1.5 rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-xs font-bold text-slate-700 transition hover:bg-gray-50"
                                >
                                  <ArrowLeft size={14} />
                                  Services
                                </button>

                                <Link
                                  to={selectedService.pageLink}
                                  className="flex items-center justify-center gap-1.5 rounded-xl bg-slate-900 px-3 py-2.5 text-xs font-bold text-white transition hover:bg-slate-800"
                                >
                                  Explore
                                  <ArrowRight size={14} />
                                </Link>
                              </div>
                            </div>
                          </>
                        );
                      })()}
                    </motion.div>
                  )}

                {/* PROCESS */}
                {!isTyping && activeView === 'process' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm"
                  >
                    <div className="mb-5">
                      <div className="mb-1 flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                          <Zap size={15} />
                        </div>

                        <h4 className="font-bold text-slate-900">
                          Our Delivery Process
                        </h4>
                      </div>

                      <p className="ml-10 text-xs leading-relaxed text-slate-500">
                        A transparent workflow from initial discovery through
                        production.
                      </p>
                    </div>

                    <div className="relative space-y-4">
                      <div className="absolute bottom-6 left-[15px] top-6 w-px bg-gray-200" />

                      {[
                        {
                          number: '01',
                          title: 'Discovery & Architecture',
                          desc: 'Goals, requirements, system architecture, integrations, scope and technical feasibility.',
                        },
                        {
                          number: '02',
                          title: 'Sprint Development',
                          desc: 'Features are built in focused iterations with regular staging demos and feedback.',
                        },
                        {
                          number: '03',
                          title: 'QA & Validation',
                          desc: 'Testing, performance checks, security review, browser validation and production readiness.',
                        },
                        {
                          number: '04',
                          title: 'Launch & Support',
                          desc: 'Production deployment, documentation, handover and post-launch support.',
                        },
                      ].map((step) => (
                        <div
                          key={step.number}
                          className="relative flex gap-3"
                        >
                          <div className="z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-[10px] font-black text-white shadow-sm">
                            {step.number}
                          </div>

                          <div className="rounded-xl border border-gray-100 bg-slate-50 p-3">
                            <h5 className="text-xs font-bold text-slate-900">
                              {step.title}
                            </h5>

                            <p className="mt-1 text-[11px] leading-relaxed text-slate-500">
                              {step.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={showMenu}
                      className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-xs font-bold text-slate-700 transition hover:bg-gray-50"
                    >
                      <ArrowLeft size={14} />
                      Back to Services
                    </button>
                  </motion.div>
                )}

                {/* BOOKING */}
                {!isTyping && activeView === 'booking' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="overflow-hidden rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 p-5 shadow-sm"
                  >
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-indigo-600 shadow-sm">
                      <MessageCircle size={22} />
                    </div>

                    <h4 className="text-lg font-black text-slate-900">
                      Let’s discuss your project
                    </h4>

                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      Share your goals, existing systems, timeline, and
                      challenges. The team can help identify the right technical
                      approach.
                    </p>

                    <div className="mt-5 space-y-2">
                      <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noreferrer"
                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 text-xs font-bold text-white shadow-sm transition hover:bg-emerald-700"
                      >
                        <WhatsApp size={16} />
                        Talk on WhatsApp
                        <ArrowRight size={14} />
                      </a>

                      <Link
                        to="/contact"
                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3 text-xs font-bold text-white transition hover:bg-slate-800"
                      >
                        <Calendar size={15} />
                        Start a Project Discussion
                      </Link>

                      <Link
                        to="/portfolio"
                        className="flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 text-xs font-bold text-slate-700 transition hover:bg-gray-50"
                      >
                        <MessageSquare size={15} />
                        View Portfolio
                      </Link>
                    </div>

                    <button
                      type="button"
                      onClick={showMenu}
                      className="mt-4 flex w-full items-center justify-center gap-2 text-xs font-bold text-slate-500 transition hover:text-slate-900"
                    >
                      <RotateCcw size={13} />
                      Explore services again
                    </button>
                  </motion.div>
                )}

                {/* Quick Questions */}
                {!isTyping && activeView === 'menu' && (
                  <div className="pt-1">
                    <div className="mb-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Quick questions
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {quickQuestions.map((question) => {
                        const Icon = question.icon;

                        return (
                          <button
                            key={question.label}
                            type="button"
                            onClick={() => handleQuickQuestion(question)}
                            className="flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-2 text-[11px] font-semibold text-slate-600 shadow-sm transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700"
                          >
                            <Icon size={12} />
                            {question.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Search/Input Bar intentionally removed */}
            
            {/* Footer */}
            <footer className="flex items-center justify-center gap-1.5 border-t border-gray-100 bg-white px-4 py-2.5 text-[10px] font-medium text-slate-400">
              <ShieldCheck size={11} />
              UETC Engineering · Human-led technology consulting
            </footer>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Floating Launcher */}
      <motion.button
        type="button"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen((prev) => !prev)}
        className={`
          fixed
          bottom-5
          right-4
          sm:right-6
          z-[10000]
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-2xl
          text-white
          shadow-[0_15px_40px_rgba(15,23,42,0.22)]
          transition-all
          ${
            open
              ? 'bg-slate-900 hover:bg-slate-800'
              : 'bg-gradient-to-br from-indigo-600 to-cyan-500 hover:shadow-indigo-500/30'
          }
        `}
        aria-label={open ? 'Close assistant' : 'Open UETC assistant'}
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X size={23} />
            </motion.div>
          ) : (
            <motion.div
              key="bot"
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.6, opacity: 0 }}
            >
              <Bot size={24} />
            </motion.div>
          )}
        </AnimatePresence>

        {!open && (
          <>
            <span className="absolute inset-0 rounded-2xl bg-indigo-500 opacity-20 animate-ping" />
            <span className="absolute -right-0.5 -top-0.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-emerald-400" />
          </>
        )}
      </motion.button>
    </>
  );
}
