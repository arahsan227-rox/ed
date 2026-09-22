import { useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
  Search,
  HelpCircle,
  MessageCircle,
  Ticket,
  Phone,
  ChevronDown,
  ArrowRight,
  AlertCircle,
  CheckCircle2,
  Clock3,
  ShieldCheck,
  Zap,
  X,
} from 'lucide-react';

const FadeIn = ({ children, delay = 0, className = '' }) => {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: '-60px',
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={
        inView
          ? {
              opacity: 1,
              y: 0,
            }
          : {}
      }
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const faqs = {
  Development: [
    {
      q: 'What is your standard development timeline?',
      a: 'Most web projects take around 4–8 weeks. Larger software platforms can take 3–6 months depending on scope, integrations, features, and technical complexity.',
    },
    {
      q: 'Do you use agile methodology?',
      a: 'Yes. We typically work in focused development sprints with regular progress reviews, demos, and feedback cycles so you always know what is happening.',
    },
    {
      q: 'Can I see progress during development?',
      a: 'Absolutely. Depending on the project, you can receive access to a staging environment where you can review working features during development.',
    },
    {
      q: 'Can you work with our existing development team?',
      a: 'Yes. We can work alongside your internal developers, designers, product managers, or another agency depending on your project requirements.',
    },
  ],

  Hosting: [
    {
      q: 'Do you handle deployment and hosting?',
      a: 'Yes. We can deploy applications to AWS, Vercel, or another preferred cloud environment and can also provide ongoing infrastructure support.',
    },
    {
      q: 'What is your uptime SLA?',
      a: 'For supported production projects, we can configure monitoring, backups, alerts, and infrastructure practices based on your required availability.',
    },
    {
      q: 'Do you offer ongoing maintenance?',
      a: 'Yes. Maintenance can include security patches, dependency updates, bug fixes, performance improvements, monitoring, and smaller feature updates.',
    },
    {
      q: 'Can you migrate an existing application?',
      a: 'Yes. We can help with application, database, hosting, domain, and infrastructure migrations while planning the process to minimize disruption.',
    },
  ],

  Automation: [
    {
      q: 'Which automation platforms do you work with?',
      a: 'We work with platforms such as Zapier, Make.com, n8n, OpenAI, Twilio, HubSpot, webhooks, REST APIs, and custom integrations.',
    },
    {
      q: 'Can automation handle complex multi-step workflows?',
      a: 'Yes. We can build branching workflows with validation, retries, error handling, notifications, logging, and monitoring.',
    },
    {
      q: 'How quickly can you set up automation?',
      a: 'Simple workflows can sometimes be implemented within a few days. More complex multi-system automation can take 1–3 weeks or longer depending on scope.',
    },
    {
      q: 'Can you connect our existing software?',
      a: 'In many cases, yes. We can integrate systems through APIs, webhooks, native connectors, databases, or custom middleware where appropriate.',
    },
  ],
};

const quickActions = [
  {
    icon: HelpCircle,
    label: 'Knowledge Base',
    desc: 'Find answers to common questions',
    color: 'blue',
    action: 'faqs',
  },
  {
    icon: Ticket,
    label: 'Submit Ticket',
    desc: 'Send a support request',
    color: 'purple',
    action: 'ticket',
  },
  {
    icon: MessageCircle,
    label: 'Live Chat',
    desc: 'Talk with our team directly',
    color: 'emerald',
    action: 'whatsapp',
  },
  {
    icon: Phone,
    label: 'Emergency',
    desc: 'Critical production issue',
    color: 'red',
    action: 'emergency',
  },
];

const colorClasses = {
  blue: {
    border: 'border-blue-200 hover:border-blue-300',
    bg: 'bg-blue-50',
    text: 'text-blue-600',
    glow: 'hover:shadow-blue-100',
  },
  purple: {
    border: 'border-purple-200 hover:border-purple-300',
    bg: 'bg-purple-50',
    text: 'text-purple-600',
    glow: 'hover:shadow-purple-100',
  },
  emerald: {
    border: 'border-emerald-200 hover:border-emerald-300',
    bg: 'bg-emerald-50',
    text: 'text-emerald-600',
    glow: 'hover:shadow-emerald-100',
  },
  red: {
    border: 'border-red-200 hover:border-red-300',
    bg: 'bg-red-50',
    text: 'text-red-600',
    glow: 'hover:shadow-red-100',
  },
};

export default function Support() {
  const [activeTab, setActiveTab] = useState('Development');
  const [openFaq, setOpenFaq] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const scrollTo = (id) => {
    const element = document.getElementById(id);

    if (!element) return;

    const offset = 90;

    const top =
      element.getBoundingClientRect().top +
      window.pageYOffset -
      offset;

    window.scrollTo({
      top,
      behavior: 'smooth',
    });
  };

  const handleQuickAction = (action) => {
    if (action === 'whatsapp') {
      window.open(
        'https://wa.me/923379693876?text=Hi%20UETC%20team%2C%20I%20need%20support.',
        '_blank',
        'noopener,noreferrer'
      );
      return;
    }

    scrollTo(action);
  };

  const filteredFaqs = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    if (!query) {
      return faqs[activeTab].map((faq, index) => ({
        ...faq,
        category: activeTab,
        originalIndex: index,
      }));
    }

    return Object.entries(faqs)
      .flatMap(([category, questions]) =>
        questions.map((faq, index) => ({
          ...faq,
          category,
          originalIndex: index,
        }))
      )
      .filter(
        (faq) =>
          faq.q.toLowerCase().includes(query) ||
          faq.a.toLowerCase().includes(query) ||
          faq.category.toLowerCase().includes(query)
      );
  }, [activeTab, searchQuery]);

  const isSearching = searchQuery.trim().length > 0;

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden px-6 pb-20 pt-36 text-center">
        <div className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-400/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 top-32 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-20 top-60 h-64 w-64 rounded-full bg-purple-400/10 blur-3xl" />

        <FadeIn>
          <div className="section-tag mx-auto mb-6 w-fit">
            Support Center
          </div>

          <h1 className="mx-auto mb-6 max-w-4xl text-4xl font-black font-heading md:text-6xl">
            We're Here to{' '}
            <span className="gradient-text">Help</span>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
            Find answers, explore common questions, submit a support
            ticket, or connect directly with our team.
          </p>

          {/* SEARCH */}
          <div className="relative mx-auto max-w-2xl">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-indigo-500/20 via-cyan-400/10 to-purple-500/20 blur-lg" />

            <div className="relative flex items-center rounded-2xl border border-gray-200 bg-white p-2 shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition focus-within:border-indigo-300 focus-within:ring-4 focus-within:ring-indigo-50">
              <Search className="ml-3 h-5 w-5 shrink-0 text-gray-400" />

              <input
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setOpenFaq(null);
                }}
                type="text"
                placeholder="Search questions, automation, hosting..."
                className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm text-slate-800 outline-none placeholder:text-gray-400 md:text-base"
              />

              {searchQuery && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setOpenFaq(null);
                  }}
                  className="mr-1 flex h-9 w-9 items-center justify-center rounded-xl text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
                  aria-label="Clear search"
                >
                  <X size={16} />
                </button>
              )}
            </div>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-3 text-xs font-medium text-muted">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
              Fast response
            </span>

            <span className="h-1 w-1 rounded-full bg-gray-300" />

            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-indigo-500" />
              Human support
            </span>

            <span className="h-1 w-1 rounded-full bg-gray-300" />

            <span className="flex items-center gap-1.5">
              <Clock3 className="h-3.5 w-3.5 text-cyan-500" />
              Business support
            </span>
          </div>
        </FadeIn>
      </section>

      {/* MAIN */}
      <section className="section-alt px-6 pb-24 pt-16">
        <div className="mx-auto max-w-7xl">

          {/* QUICK ACTIONS */}
          <div className="mb-24 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {quickActions.map((item, i) => {
              const Icon = item.icon;
              const colors = colorClasses[item.color];

              return (
                <FadeIn key={item.label} delay={i * 0.07}>
                  <motion.button
                    type="button"
                    whileHover={{ y: -6 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleQuickAction(item.action)}
                    className={`group card h-full w-full border p-7 text-left transition-all duration-300 hover:shadow-xl ${colors.border} ${colors.glow}`}
                  >
                    <div
                      className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${colors.bg} ${colors.text} transition-transform duration-300 group-hover:scale-110`}
                    >
                      <Icon className="h-7 w-7" />
                    </div>

                    <div className="mb-1 flex items-center justify-between gap-3">
                      <h4 className="font-heading text-lg font-bold text-heading">
                        {item.label}
                      </h4>

                      <ArrowRight className="h-4 w-4 text-gray-300 transition-all group-hover:translate-x-1 group-hover:text-gray-700" />
                    </div>

                    <p className="text-sm leading-relaxed text-muted">
                      {item.desc}
                    </p>
                  </motion.button>
                </FadeIn>
              );
            })}
          </div>

          {/* FAQ */}
          <div
            id="faqs"
            className="mx-auto mb-24 max-w-4xl scroll-mt-24"
          >
            <FadeIn className="mb-10 text-center">
              <div className="section-tag mx-auto mb-4 w-fit">
                Knowledge Base
              </div>

              <h2 className="mb-3 text-3xl font-bold font-heading md:text-4xl">
                Frequently Asked Questions
              </h2>

              <p className="mx-auto max-w-xl text-sm leading-relaxed text-muted">
                Everything you need to know about development, hosting,
                automation, and working with our team.
              </p>
            </FadeIn>

            {!isSearching && (
              <FadeIn className="mb-8 flex flex-wrap justify-center gap-2">
                {Object.keys(faqs).map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => {
                      setActiveTab(tab);
                      setOpenFaq(null);
                    }}
                    className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-all ${
                      activeTab === tab
                        ? 'border-indigo-200 bg-indigo-50 text-primary shadow-sm'
                        : 'border-gray-200 bg-white text-muted hover:border-gray-300 hover:text-heading'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </FadeIn>
            )}

            {isSearching && (
              <div className="mb-5 flex items-center justify-between rounded-xl border border-indigo-100 bg-indigo-50 px-4 py-3 text-xs">
                <span className="font-semibold text-indigo-700">
                  Search results for "{searchQuery}"
                </span>

                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="font-bold text-indigo-600 hover:text-indigo-800"
                >
                  Clear
                </button>
              </div>
            )}

            <div className="space-y-3">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq, i) => {
                  const faqKey = `${faq.category}-${faq.originalIndex}`;
                  const isOpen = openFaq === faqKey;

                  return (
                    <FadeIn key={`${faq.q}-${i}`}>
                      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md">
                        <button
                          type="button"
                          onClick={() =>
                            setOpenFaq(isOpen ? null : faqKey)
                          }
                          className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left md:px-6"
                        >
                          <div className="flex min-w-0 items-start gap-3">
                            <div
                              className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${
                                isOpen
                                  ? 'bg-indigo-100 text-indigo-600'
                                  : 'bg-gray-100 text-gray-400'
                              }`}
                            >
                              <HelpCircle size={14} />
                            </div>

                            <div>
                              {isSearching && (
                                <div className="mb-1 text-[10px] font-bold uppercase tracking-wider text-indigo-500">
                                  {faq.category}
                                </div>
                              )}

                              <span className="font-semibold leading-relaxed text-heading">
                                {faq.q}
                              </span>
                            </div>
                          </div>

                          <ChevronDown
                            className={`h-5 w-5 shrink-0 text-muted transition-transform duration-300 ${
                              isOpen
                                ? 'rotate-180 text-indigo-600'
                                : ''
                            }`}
                          />
                        </button>

                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{
                                height: 0,
                                opacity: 0,
                              }}
                              animate={{
                                height: 'auto',
                                opacity: 1,
                              }}
                              exit={{
                                height: 0,
                                opacity: 0,
                              }}
                              transition={{ duration: 0.25 }}
                            >
                              <div className="border-t border-gray-100 bg-gray-50/60 px-5 pb-6 pt-4 md:px-6">
                                <div className="pl-10 text-sm leading-7 text-body">
                                  {faq.a}
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </FadeIn>
                  );
                })
              ) : (
                <div className="rounded-2xl border border-gray-200 bg-white px-6 py-14 text-center shadow-sm">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-100 text-gray-400">
                    <Search size={24} />
                  </div>

                  <h3 className="mb-2 font-heading text-lg font-bold text-heading">
                    No matching questions
                  </h3>

                  <p className="mx-auto mb-5 max-w-md text-sm leading-relaxed text-muted">
                    Try another search term or submit a support ticket
                    and our team can help with your specific issue.
                  </p>

                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery('');
                      scrollTo('ticket');
                    }}
                    className="btn-primary mx-auto"
                  >
                    Submit a Ticket
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* TICKET SECTION */}
          <div
            id="ticket"
            className="mx-auto max-w-3xl scroll-mt-24"
          >
            <FadeIn>
              <div className="mb-8 text-center">
                <div className="section-tag mx-auto mb-4 w-fit">
                  Support Request
                </div>

                <h2 className="mb-3 text-3xl font-bold font-heading">
                  Need Personal Help?
                </h2>

                <p className="mx-auto max-w-xl text-sm leading-relaxed text-muted">
                  Tell us what you're experiencing and our support team
                  will review your request.
                </p>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="card overflow-hidden shadow-xl">
                <div className="border-b border-gray-100 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 px-6 py-7 text-white md:px-8">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10">
                      <Ticket className="h-6 w-6" />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold font-heading">
                        Submit a Support Ticket
                      </h3>

                      <p className="mt-1 text-sm leading-relaxed text-slate-300">
                        Give us enough detail to understand and resolve
                        your request efficiently.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  {submitted ? (
                    <motion.div
                      initial={{
                        opacity: 0,
                        scale: 0.96,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                      }}
                      className="py-12 text-center"
                    >
                      <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                        <CheckCircle2 size={34} />
                      </div>

                      <h4 className="mb-2 text-2xl font-bold font-heading text-heading">
                        Request Received!
                      </h4>

                      <p className="mx-auto mb-7 max-w-md text-sm leading-relaxed text-muted">
                        Thank you for contacting us. Our team will review
                        your request and contact you within 4–5 working
                        days.
                      </p>

                      <button
                        type="button"
                        onClick={() => setSubmitted(false)}
                        className="btn-secondary"
                      >
                        Submit Another Ticket
                      </button>
                    </motion.div>
                  ) : (
                    <form
                      className="space-y-5"
                      onSubmit={(e) => {
                        e.preventDefault();
                        setSubmitted(true);
                      }}
                    >
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label className="mb-2 block text-sm font-semibold text-heading">
                            Your Name
                          </label>

                          <input
                            type="text"
                            required
                            placeholder="John Doe"
                            className="input-field"
                          />
                        </div>

                        <div>
                          <label className="mb-2 block text-sm font-semibold text-heading">
                            Email Address
                          </label>

                          <input
                            type="email"
                            required
                            placeholder="you@example.com"
                            className="input-field"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-semibold text-heading">
                          Subject
                        </label>

                        <input
                          type="text"
                          required
                          placeholder="How can we help?"
                          className="input-field"
                        />
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-semibold text-heading">
                          Department
                        </label>

                        <select
                          defaultValue="General Support"
                          className="input-field bg-white"
                        >
                          <option>General Support</option>
                          <option>Bug Report</option>
                          <option>Feature Request</option>
                          <option>Billing</option>
                          <option>Hosting</option>
                          <option>Automation</option>
                          <option>Emergency</option>
                        </select>
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-semibold text-heading">
                          Description
                        </label>

                        <textarea
                          rows={6}
                          required
                          placeholder="Describe the issue or request..."
                          className="input-field resize-none"
                        />
                      </div>

                      <div className="flex items-start gap-2 rounded-xl border border-gray-100 bg-gray-50 p-4">
                        <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />

                        <p className="text-xs leading-relaxed text-muted">
                          Please avoid sharing passwords, API keys,
                          payment details, or other sensitive credentials.
                        </p>
                      </div>

                      <button
                        type="submit"
                        className="btn-primary w-full justify-center py-3"
                      >
                        Submit Support Ticket
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </FadeIn>

            {/* RESPONSE INFO */}
            <FadeIn delay={0.1}>
              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-gray-200 bg-white p-5 text-center shadow-sm">
                  <Clock3 className="mx-auto mb-2 h-5 w-5 text-indigo-500" />

                  <div className="text-sm font-bold text-heading">
                    Fast Response
                  </div>

                  <div className="mt-1 text-xs text-muted">
                    During support hours
                  </div>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-white p-5 text-center shadow-sm">
                  <ShieldCheck className="mx-auto mb-2 h-5 w-5 text-emerald-500" />

                  <div className="text-sm font-bold text-heading">
                    Secure Support
                  </div>

                  <div className="mt-1 text-xs text-muted">
                    Human-reviewed requests
                  </div>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-white p-5 text-center shadow-sm">
                  <Zap className="mx-auto mb-2 h-5 w-5 text-amber-500" />

                  <div className="text-sm font-bold text-heading">
                    Clear Updates
                  </div>

                  <div className="mt-1 text-xs text-muted">
                    Progress when it matters
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* EMERGENCY */}
            <FadeIn delay={0.15} className="mt-8">
              <div
                id="emergency"
                className="scroll-mt-24 overflow-hidden rounded-2xl border border-red-200 bg-gradient-to-br from-red-50 to-orange-50"
              >
                <div className="flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:justify-between md:p-7">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-red-100 text-red-600">
                      <AlertCircle className="h-6 w-6" />
                    </div>

                    <div>
                      <h4 className="mb-1 font-bold text-red-950">
                        Emergency Production Support
                      </h4>

                      <p className="max-w-xl text-sm leading-relaxed text-red-700">
                        For critical production issues affecting active
                        business operations, contact the team directly.
                      </p>
                    </div>
                  </div>

                  <a
                    href="tel:+1234567890"
                    className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-red-700"
                  >
                    Call Emergency Line
                    <Phone className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </FadeIn>

            {/* BOTTOM CTA */}
            <FadeIn delay={0.2} className="mt-16 text-center">
              <div className="mx-auto max-w-2xl rounded-3xl border border-indigo-100 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 p-8 md:p-10">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-indigo-600 shadow-sm">
                  <MessageCircle size={22} />
                </div>

                <h3 className="mb-2 text-2xl font-bold font-heading text-heading">
                  Still Need Help?
                </h3>

                <p className="mx-auto mb-6 max-w-lg text-sm leading-relaxed text-muted">
                  If you cannot find what you're looking for, talk
                  directly with our team and we'll help point you in the
                  right direction.
                </p>

                <button
                  type="button"
                  onClick={() => handleQuickAction('whatsapp')}
                  className="btn-primary mx-auto"
                >
                  Chat With Our Team
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
