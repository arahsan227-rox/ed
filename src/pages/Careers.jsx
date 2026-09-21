
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Briefcase,
  MapPin,
  X,
  Send,
  CheckCircle2,
} from 'lucide-react';

const FadeIn = ({ children, delay = 0, className = '' }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const jobs = [
  {
    title: 'Senior React Developer',
    dept: 'Engineering',
    type: 'Full-time',
    location: 'Remote',
    skills: ['React', 'TypeScript', 'Next.js', 'GraphQL'],
    desc: 'Build beautiful, performant UIs for our client projects and internal products.',
  },
  {
    title: 'Node.js / NestJS Developer',
    dept: 'Engineering',
    type: 'Full-time',
    location: 'Remote',
    skills: ['Node.js', 'NestJS', 'PostgreSQL', 'Docker'],
    desc: 'Design and build scalable APIs and backend systems that power enterprise software.',
  },
  {
    title: 'Automation Engineer',
    dept: 'Automation',
    type: 'Full-time',
    location: 'Remote',
    skills: ['Make.com', 'Zapier', 'OpenAI', 'Webhooks'],
    desc: 'Architect intelligent automation workflows that save our clients thousands of hours.',
  },
  {
    title: 'UI/UX Designer',
    dept: 'Design',
    type: 'Full-time',
    location: 'Remote',
    skills: ['Figma', 'User Research', 'Prototyping', 'Design Systems'],
    desc: 'Create stunning, user-centric designs that set the bar for premium digital experiences.',
  },
  {
    title: 'Project Manager',
    dept: 'Operations',
    type: 'Full-time',
    location: 'Remote / Hybrid',
    skills: ['Agile', 'Scrum', 'Jira', 'Client Communication'],
    desc: 'Lead cross-functional teams to deliver complex software projects on time and on budget.',
  },
];

const perks = [
  {
    emoji: '🌍',
    title: '100% Remote',
    desc: 'Work from anywhere in the world. We care about output, not hours.',
  },
  {
    emoji: '📈',
    title: 'Equity Options',
    desc: 'Grow with us. We offer equity to senior team members.',
  },
  {
    emoji: '🏥',
    title: 'Health Benefits',
    desc: 'Comprehensive health coverage for you and your family.',
  },
  {
    emoji: '📚',
    title: 'Learning Budget',
    desc: '$2,000/year for courses, conferences, and books.',
  },
  {
    emoji: '🛠️',
    title: 'Top Equipment',
    desc: 'MacBook Pro and any tools you need to do your best work.',
  },
  {
    emoji: '🏖️',
    title: 'Unlimited PTO',
    desc: 'Take the time you need to recharge and come back inspired.',
  },
];

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    resume: '',
    message: '',
  });

  // Always start this page from the top when it is opened.
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    });
  }, []);

  const openApplication = (job) => {
    setSelectedJob(job);
    setSubmitted(false);

    setFormData({
      name: '',
      email: '',
      phone: '',
      experience: '',
      resume: '',
      message: '',
    });
  };

  const closeApplication = () => {
    setSelectedJob(null);
    setSubmitted(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Replace this with your API/email submission later.
    setSubmitted(true);
  };

  return (
    <>
      <section className="pt-36 pb-16 px-6 text-center">
        <FadeIn>
          <div className="section-tag mb-6 mx-auto w-fit">Careers</div>

          <h1 className="text-4xl md:text-5xl font-black font-heading mb-6">
            Build the <span className="gradient-text">Future With Us</span>
          </h1>

          <p className="text-muted text-xl max-w-2xl mx-auto">
            Join a remote-first team of world-class engineers building
            products that matter. We're always looking for talented people who
            want to do the best work of their career.
          </p>
        </FadeIn>
      </section>

      {/* Perks */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-10">
            <h2 className="text-3xl font-bold font-heading">
              Why Bluorbit Solutions
            </h2>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map((p, i) => (
              <FadeIn key={p.title} delay={i * 0.08}>
                <div className="card p-6 flex gap-4 h-full">
                  <div className="text-3xl">{p.emoji}</div>

                  <div>
                    <h4 className="font-bold mb-1 text-heading">
                      {p.title}
                    </h4>

                    <p className="text-muted text-sm leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="px-6 py-20 section-alt">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="mb-10 text-center">
            <div className="section-tag mb-3">Open Positions</div>

            <h2 className="text-3xl font-bold font-heading">
              Join Our Team
            </h2>
          </FadeIn>

          <div className="space-y-4">
            {jobs.map((job, i) => (
              <FadeIn key={job.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="card p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 hover:border-indigo-200 transition-colors"
                >
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold font-heading text-heading">
                        {job.title}
                      </h3>

                      <span className="px-2.5 py-0.5 bg-indigo-50 border border-indigo-100 text-primary text-xs font-semibold rounded-full">
                        {job.dept}
                      </span>
                    </div>

                    <p className="text-muted text-sm mb-4 leading-relaxed">
                      {job.desc}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {job.skills.map((s) => (
                        <span
                          key={s}
                          className="px-2 py-0.5 bg-gray-50 border border-gray-200 text-body font-medium text-xs rounded-md"
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 text-xs font-medium text-muted">
                      <span className="flex items-center gap-1.5">
                        <Briefcase className="w-3.5 h-3.5" />
                        {job.type}
                      </span>

                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" />
                        {job.location}
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => openApplication(job)}
                    className="btn-primary whitespace-nowrap flex-shrink-0 text-sm py-2.5 mt-2 sm:mt-0"
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="mt-12 text-center">
            <p className="text-muted mb-4">
              Don't see your role? We're always open to talented people.
            </p>

            <Link to="/contact" className="btn-secondary">
              Send Open Application
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Application Modal */}
      <AnimatePresence>
        {selectedJob && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                closeApplication();
              }
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 25, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 25, scale: 0.96 }}
              transition={{
                duration: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white shadow-2xl"
            >
              {/* Modal Header */}
              <div className="sticky top-0 z-10 border-b border-gray-100 bg-white px-6 py-5 sm:px-7">
                <button
                  type="button"
                  onClick={closeApplication}
                  className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-xl text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
                  aria-label="Close application form"
                >
                  <X className="h-5 w-5" />
                </button>

                {!submitted ? (
                  <>
                    <div className="section-tag mb-3 w-fit">
                      Job Application
                    </div>

                    <h2 className="pr-10 text-2xl font-black font-heading text-heading sm:text-3xl">
                      Apply for {selectedJob.title}
                    </h2>

                    <p className="mt-2 text-sm text-muted">
                      Complete the form below and our team will review your
                      application.
                    </p>
                  </>
                ) : (
                  <div className="pr-8">
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                      <CheckCircle2 className="h-6 w-6" />
                    </div>

                    <h2 className="text-2xl font-black font-heading text-heading sm:text-3xl">
                      Application Received
                    </h2>
                  </div>
                )}
              </div>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5 p-6 sm:p-7">
                  {/* Selected Job */}
                  <div className="rounded-2xl border border-indigo-100 bg-indigo-50 p-4">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-indigo-500">
                      Applying for
                    </div>

                    <div className="mt-1 text-base font-bold text-slate-900">
                      {selectedJob.title}
                    </div>

                    <div className="mt-1 text-xs text-slate-500">
                      {selectedJob.dept} · {selectedJob.type} ·{' '}
                      {selectedJob.location}
                    </div>
                  </div>

                  {/* Name + Email */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-bold text-slate-700"
                      >
                        Full Name *
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-indigo-300 focus:bg-white focus:ring-4 focus:ring-indigo-50"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-bold text-slate-700"
                      >
                        Email Address *
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-indigo-300 focus:bg-white focus:ring-4 focus:ring-indigo-50"
                      />
                    </div>
                  </div>

                  {/* Phone + Experience */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-2 block text-sm font-bold text-slate-700"
                      >
                        Phone Number
                      </label>

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+92 300 0000000"
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-indigo-300 focus:bg-white focus:ring-4 focus:ring-indigo-50"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="experience"
                        className="mb-2 block text-sm font-bold text-slate-700"
                      >
                        Years of Experience *
                      </label>

                      <select
                        id="experience"
                        name="experience"
                        required
                        value={formData.experience}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-indigo-300 focus:bg-white focus:ring-4 focus:ring-indigo-50"
                      >
                        <option value="">Select experience</option>
                        <option value="0-1">0–1 years</option>
                        <option value="1-3">1–3 years</option>
                        <option value="3-5">3–5 years</option>
                        <option value="5-8">5–8 years</option>
                        <option value="8+">8+ years</option>
                      </select>
                    </div>
                  </div>

                  {/* Resume */}
                  <div>
                    <label
                      htmlFor="resume"
                      className="mb-2 block text-sm font-bold text-slate-700"
                    >
                      Resume / CV Link *
                    </label>

                    <input
                      id="resume"
                      name="resume"
                      type="url"
                      required
                      value={formData.resume}
                      onChange={handleChange}
                      placeholder="https://drive.google.com/... or portfolio link"
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-indigo-300 focus:bg-white focus:ring-4 focus:ring-indigo-50"
                    />

                    <p className="mt-1.5 text-xs text-slate-400">
                      Add a public Google Drive, Dropbox, portfolio, or other
                      accessible CV link.
                    </p>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-bold text-slate-700"
                    >
                      Short Introduction
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us briefly about yourself, your experience, and why you're interested in this role..."
                      className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-indigo-300 focus:bg-white focus:ring-4 focus:ring-indigo-50"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3.5 text-sm font-bold text-white shadow-sm transition hover:bg-indigo-600"
                  >
                    <Send className="h-4 w-4" />
                    Submit Application
                  </button>

                  <p className="text-center text-xs leading-relaxed text-slate-400">
                    By submitting this application, you agree that our team may
                    contact you regarding this position.
                  </p>
                </form>
              ) : (
                /* Success Message */
                <div className="p-6 sm:p-8">
                  <div className="rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-cyan-50 p-6 text-center sm:p-8">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>

                    <h3 className="mt-5 text-xl font-black font-heading text-slate-900">
                      Thank you for applying!
                    </h3>

                    <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-600">
                      Your application for{' '}
                      <strong>{selectedJob.title}</strong> has been received.
                      Our team will review your application and will contact
                      you within <strong>4–5 working days</strong>.
                    </p>

                    <button
                      type="button"
                      onClick={closeApplication}
                      className="mt-6 rounded-xl bg-slate-900 px-6 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
