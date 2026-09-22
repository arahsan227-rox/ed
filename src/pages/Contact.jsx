import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  Phone,
  MessageCircle,
  MapPin,
  Send,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Clock3,
  ShieldCheck,
  ArrowUpRight,
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

  const directions = {
    up: { y: 28, x: 0 },
    left: { y: 0, x: -28 },
    right: { y: 0, x: 28 },
  };

  const initial = directions[direction] || directions.up;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...initial }}
      animate={
        inView
          ? {
              opacity: 1,
              y: 0,
              x: 0,
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

const contactMethods = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+92 300 000 0000',
    href: 'tel:+923379693876',
    color: 'blue',
    description: 'Speak directly with our team',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: 'Chat on WhatsApp',
    href: 'https://wa.me/923379693876',
    color: 'emerald',
    description: 'Quick questions & discussions',
  },
];

const benefits = [
  {
    icon: Clock3,
    title: 'Fast Response',
    desc: 'We typically respond within a few hours during business days.',
  },
  {
    icon: ShieldCheck,
    title: 'No Pressure',
    desc: 'Tell us what you need. We will recommend the right approach.',
  },
  {
    icon: CheckCircle2,
    title: 'Clear Planning',
    desc: 'Get a practical roadmap, scope, and next steps for your project.',
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  });

  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (error) {
      setError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    setError('');

    // Replace with your actual Web3Forms access key.
    const accessKey = 'b4660d20-c2af-4f66-a16f-f9110adc07b9';

    if (
      !accessKey ||
      accessKey === 'YOUR_WEB3FORMS_ACCESS_KEY_HERE'
    ) {
      setError(
        'Please configure your Web3Forms access key before submitting the form.'
      );
      setIsSubmitting(false);
      return;
    }

    const formData = new FormData();

    formData.append('access_key', accessKey);
    formData.append('name', form.name);
    formData.append('email', form.email);
    formData.append('company', form.company);
    formData.append('phone', form.phone);
    formData.append('message', form.message);

    formData.append(
      'subject',
      `New Contact from ${form.name}`
    );

    formData.append(
      'from_name',
      'Bluorbit Solutions Website'
    );

    try {
      const response = await fetch(
        'https://api.web3forms.com/submit',
        {
          method: 'POST',
          body: formData,
        }
      );

      const data = await response.json();

      if (data.success) {
        setSent(true);

        setForm({
          name: '',
          company: '',
          email: '',
          phone: '',
          message: '',
        });
      } else {
        setError(
          data.message ||
            'Something went wrong. Please try again.'
        );
      }
    } catch (err) {
      console.error(err);

      setError(
        'Unable to send your message right now. Please check your connection and try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden pt-32 md:pt-40 pb-20 px-6">
        {/* Decorative background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-indigo-100/40 blur-3xl" />

          <div className="absolute top-20 left-[8%] w-3 h-3 rounded-full bg-indigo-400/50 animate-pulse" />
          <div className="absolute top-40 right-[12%] w-2 h-2 rounded-full bg-purple-400/60 animate-pulse" />

          <div className="absolute top-0 left-0 w-full h-full opacity-[0.035] bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:24px_24px]" />
        </div>

        <div className="relative max-w-5xl mx-auto text-center">
          <FadeIn>
            <div className="section-tag mb-6 mx-auto w-fit inline-flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              Contact Bluorbit Solutions
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-heading tracking-tight mb-6">
              Let's Build Something{' '}
              <span className="gradient-text">
                Amazing Together
              </span>
            </h1>

            <p className="text-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Have an idea, a business problem, or an existing
              system that needs improvement? Tell us what you're
              working on and we'll help you figure out the next
              step.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mt-8">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-sm text-body">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Currently accepting projects
              </div>

              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-sm text-body">
                <Clock3 className="w-4 h-4 text-primary" />
                Response within 24 hours
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* =========================================================
          MAIN CONTACT AREA
      ========================================================= */}
      <section className="relative px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-10 items-start">
            {/* =====================================================
                FORM
            ===================================================== */}
            <FadeIn
              className="lg:col-span-3"
              direction="left"
            >
              <div className="relative overflow-hidden rounded-3xl bg-white border border-gray-200 shadow-[0_20px_70px_-25px_rgba(15,23,42,0.18)]">
                {/* Top accent */}
                <div className="h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400" />

                <div className="p-7 sm:p-9 md:p-10">
                  <AnimatePresence mode="wait">
                    {sent ? (
                      <motion.div
                        key="success"
                        initial={{
                          opacity: 0,
                          scale: 0.96,
                        }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                        }}
                        exit={{
                          opacity: 0,
                          scale: 0.96,
                        }}
                        className="min-h-[520px] flex flex-col items-center justify-center text-center"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{
                            type: 'spring',
                            stiffness: 220,
                            damping: 16,
                            delay: 0.1,
                          }}
                          className="relative mb-7"
                        >
                          <div className="absolute inset-0 bg-emerald-200 rounded-full blur-2xl opacity-50" />

                          <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-emerald-50 to-emerald-100 border border-emerald-200 flex items-center justify-center">
                            <CheckCircle2 className="w-11 h-11 text-emerald-500" />
                          </div>
                        </motion.div>

                        <h2 className="text-3xl font-bold font-heading text-heading mb-3">
                          Message Sent Successfully
                        </h2>

                        <p className="text-muted max-w-md leading-relaxed mb-8">
                          Thanks for reaching out to Bluorbit Solutions.
                          Our team will review your message and
                          get back to you shortly.
                        </p>

                        <button
                          type="button"
                          onClick={() => setSent(false)}
                          className="btn-primary"
                        >
                          Send Another Message
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        <div className="mb-8">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center">
                              <Send className="w-5 h-5 text-primary" />
                            </div>

                            <div>
                              <h2 className="text-2xl font-bold font-heading text-heading">
                                Start a Conversation
                              </h2>

                              <p className="text-sm text-muted">
                                Give us a few details about your
                                project.
                              </p>
                            </div>
                          </div>
                        </div>

                        <form
                          onSubmit={handleSubmit}
                          className="space-y-5"
                        >
                          {/* Name + Company */}
                          <div className="grid sm:grid-cols-2 gap-5">
                            <div>
                              <label
                                htmlFor="name"
                                className="block text-sm font-semibold mb-2 text-heading"
                              >
                                Full Name{' '}
                                <span className="text-red-500">
                                  *
                                </span>
                              </label>

                              <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                autoComplete="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="John Smith"
                                className="input-field w-full transition-all focus:ring-2 focus:ring-indigo-100 focus:border-indigo-400"
                              />
                            </div>

                            <div>
                              <label
                                htmlFor="company"
                                className="block text-sm font-semibold mb-2 text-heading"
                              >
                                Company
                              </label>

                              <input
                                id="company"
                                name="company"
                                type="text"
                                autoComplete="organization"
                                value={form.company}
                                onChange={handleChange}
                                placeholder="Acme Corp"
                                className="input-field w-full transition-all focus:ring-2 focus:ring-indigo-100 focus:border-indigo-400"
                              />
                            </div>
                          </div>

                          {/* Email + Phone */}
                          <div className="grid sm:grid-cols-2 gap-5">
                            <div>
                              <label
                                htmlFor="email"
                                className="block text-sm font-semibold mb-2 text-heading"
                              >
                                Email{' '}
                                <span className="text-red-500">
                                  *
                                </span>
                              </label>

                              <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                autoComplete="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="john@company.com"
                                className="input-field w-full transition-all focus:ring-2 focus:ring-indigo-100 focus:border-indigo-400"
                              />
                            </div>

                            <div>
                              <label
                                htmlFor="phone"
                                className="block text-sm font-semibold mb-2 text-heading"
                              >
                                Phone
                              </label>

                              <input
                                id="phone"
                                name="phone"
                                type="tel"
                                autoComplete="tel"
                                value={form.phone}
                                onChange={handleChange}
                                placeholder="+92 300 000 0000"
                                className="input-field w-full transition-all focus:ring-2 focus:ring-indigo-100 focus:border-indigo-400"
                              />
                            </div>
                          </div>

                          {/* Message */}
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <label
                                htmlFor="message"
                                className="block text-sm font-semibold text-heading"
                              >
                                Project Details{' '}
                                <span className="text-red-500">
                                  *
                                </span>
                              </label>

                              <span className="text-xs text-muted">
                                {form.message.length}/1000
                              </span>
                            </div>

                            <textarea
                              id="message"
                              name="message"
                              required
                              maxLength={1000}
                              rows={6}
                              value={form.message}
                              onChange={handleChange}
                              placeholder="Tell us about your project, goals, features, timeline, or any challenges you're facing..."
                              className="input-field w-full resize-none transition-all focus:ring-2 focus:ring-indigo-100 focus:border-indigo-400"
                            />
                          </div>

                          {/* Error */}
                          <AnimatePresence>
                            {error && (
                              <motion.div
                                initial={{
                                  opacity: 0,
                                  y: -6,
                                }}
                                animate={{
                                  opacity: 1,
                                  y: 0,
                                }}
                                exit={{
                                  opacity: 0,
                                  y: -6,
                                }}
                                className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
                              >
                                {error}
                              </motion.div>
                            )}
                          </AnimatePresence>

                          {/* Submit */}
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="group btn-primary w-full justify-center py-3.5 disabled:opacity-60 disabled:cursor-not-allowed"
                          >
                            {isSubmitting ? (
                              <>
                                <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                                Sending Message...
                              </>
                            ) : (
                              <>
                                Send Project Inquiry
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                              </>
                            )}
                          </button>

                          <p className="text-xs text-muted text-center leading-relaxed">
                            By submitting this form, you agree
                            that we may contact you regarding your
                            inquiry. We don't sell your information.
                          </p>
                        </form>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </FadeIn>

            {/* =====================================================
                CONTACT INFO
            ===================================================== */}
            <FadeIn
              delay={0.15}
              className="lg:col-span-2"
              direction="right"
            >
              <div className="space-y-5">
                <div className="mb-6">
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                    Get In Touch
                  </span>

                  <h2 className="text-2xl md:text-3xl font-bold font-heading text-heading mt-2">
                    Prefer a direct conversation?
                  </h2>

                  <p className="text-muted mt-3 leading-relaxed">
                    Choose whichever channel works best for you.
                    We're happy to discuss your idea before you
                    commit to anything.
                  </p>
                </div>

                {/* Contact cards */}
                {contactMethods.map((method) => {
                  const Icon = method.icon;

                  const colorStyles = {
                    indigo: {
                      bg: 'bg-indigo-50',
                      border: 'border-indigo-100',
                      icon: 'text-indigo-600',
                      hover: 'group-hover:border-indigo-300',
                    },
                    blue: {
                      bg: 'bg-blue-50',
                      border: 'border-blue-100',
                      icon: 'text-blue-600',
                      hover: 'group-hover:border-blue-300',
                    },
                    emerald: {
                      bg: 'bg-emerald-50',
                      border: 'border-emerald-100',
                      icon: 'text-emerald-600',
                      hover: 'group-hover:border-emerald-300',
                    },
                    purple: {
                      bg: 'bg-purple-50',
                      border: 'border-purple-100',
                      icon: 'text-purple-600',
                      hover: 'group-hover:border-purple-300',
                    },
                  };

                  const colors =
                    colorStyles[method.color];

                  return (
                    <motion.a
                      key={method.label}
                      href={method.href}
                      target={
                        method.href.startsWith('http')
                          ? '_blank'
                          : undefined
                      }
                      rel={
                        method.href.startsWith('http')
                          ? 'noreferrer'
                          : undefined
                      }
                      whileHover={{ y: -3 }}
                      transition={{
                        type: 'spring',
                        stiffness: 350,
                        damping: 24,
                      }}
                      className={`group block rounded-2xl bg-white border border-gray-200 ${colors.hover} hover:shadow-lg transition-all duration-300`}
                    >
                      <div className="p-5 flex items-center gap-4">
                        <div
                          className={`w-12 h-12 rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform`}
                        >
                          <Icon
                            className={`w-5 h-5 ${colors.icon}`}
                          />
                        </div>

                        <div className="min-w-0 flex-grow">
                          <div className="text-[11px] font-bold text-muted uppercase tracking-[0.14em] mb-1">
                            {method.label}
                          </div>

                          <div className="font-bold text-heading truncate">
                            {method.value}
                          </div>

                          <div className="text-xs text-muted mt-1">
                            {method.description}
                          </div>
                        </div>

                        <ArrowUpRight className="w-4 h-4 text-gray-300 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0" />
                      </div>
                    </motion.a>
                  );
                })}

                {/* Office */}
                <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>

                    <div>
                      <div className="text-xs font-bold text-muted uppercase tracking-[0.14em] mb-1">
                        Location
                      </div>

                      <h3 className="font-bold text-heading mb-1">
                        Pakistan & Remote-First
                      </h3>

                      <p className="text-sm text-muted leading-relaxed">
                        Working with businesses and teams
                        globally.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Availability */}
                <div className="relative overflow-hidden rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-teal-50 p-6">
                  <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full bg-emerald-200/30 blur-2xl" />

                  <div className="relative flex items-center gap-3">
                    <div className="relative">
                      <span className="block w-3 h-3 rounded-full bg-emerald-500" />
                      <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-40" />
                    </div>

                    <div>
                      <div className="font-bold text-sm text-emerald-900">
                        We're Available Now
                      </div>

                      <div className="text-emerald-700 text-xs mt-0.5">
                        Usually responds within a few hours
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY CONTACT Bluorbit Solutions
      ========================================================= */}
      <section className="relative py-24 px-6 section-alt border-y border-gray-100 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-indigo-100/30 blur-3xl rounded-full" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <FadeIn className="text-center mb-12">
            <div className="section-tag mb-5 mx-auto w-fit">
              What Happens Next
            </div>

            <h2 className="text-3xl md:text-4xl font-black font-heading text-heading mb-4">
              A Simple Path From{' '}
              <span className="gradient-text">
                Idea to Execution
              </span>
            </h2>

            <p className="text-muted max-w-2xl mx-auto">
              No complicated process. Just a focused conversation
              followed by a clear plan.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-5">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <FadeIn
                  key={benefit.title}
                  delay={index * 0.08}
                >
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="h-full bg-white rounded-2xl border border-gray-200 p-7 shadow-sm hover:shadow-lg transition-shadow"
                  >
                    <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center mb-5">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>

                    <h3 className="font-bold font-heading text-lg text-heading mb-2">
                      {benefit.title}
                    </h3>

                    <p className="text-sm text-muted leading-relaxed">
                      {benefit.desc}
                    </p>
                  </motion.div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="px-6 py-24">
        <FadeIn>
          <div className="relative max-w-5xl mx-auto overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-700 px-8 py-14 md:px-14 md:py-16 text-center shadow-2xl">
            {/* Background effects */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-purple-300/20 blur-3xl" />

              <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(white_1px,transparent_1px)] [background-size:22px_22px]" />
            </div>

            <div className="relative">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-6 backdrop-blur-sm">
                <Sparkles className="w-7 h-7 text-white" />
              </div>

              <h2 className="text-3xl md:text-4xl font-black font-heading text-white mb-4">
                Have a Big Idea?
              </h2>

              <p className="text-indigo-100 max-w-xl mx-auto leading-relaxed mb-8">
                Whether you need a website, custom software, AI
                integration, automation, or a complete digital
                platform — let's turn your idea into something
                real.
              </p>

            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
