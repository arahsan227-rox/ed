import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

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

const caseStudies = [
  {
    title: 'SmartFlow CRM',
    tag: 'Sales Management',
    emoji: '📊',
    color: 'from-indigo-500 to-blue-600',
    challenge:
      'A fast-growing sales team was managing 5,000+ leads in spreadsheets. Deals were slipping through the cracks, follow-ups were inconsistent, and there was zero visibility into pipeline performance.',
    solution:
      'We built a custom CRM tailored to their exact sales process — with automated lead scoring, smart follow-up sequences, and a real-time analytics dashboard for sales managers.',
    implementation: [
      'Custom React frontend with responsive mobile UI',
      'Node.js/PostgreSQL backend with role-based access control',
      'Automated email and SMS follow-up sequences using Twilio',
      'Real-time WebSocket dashboard with sales pipeline visibility',
      'Integration with LinkedIn and email providers for lead import',
    ],
    results: [
      { metric: '60%', label: 'Faster lead handling' },
      { metric: '40%', label: 'Increase in conversions' },
      { metric: '2,000+', label: 'Active daily users' },
      { metric: '3 months', label: 'To full deployment' },
    ],
    testimonial: {
      text: `Bluorbit Solutions didn't just build us a CRM — they redesigned how we sell. Our team is faster, more consistent, and our managers finally have the data they need.`,
      name: 'Marcus T.',
      role: 'VP of Sales',
    },
  },
  {
    title: 'AutoLead Pro',
    tag: 'Marketing Automation',
    emoji: '⚡',
    color: 'from-purple-500 to-pink-600',
    challenge:
      'A digital marketing agency was spending 30+ hours per week manually sending follow-up emails, tracking leads across 5 platforms, and updating their CRM. Errors were common and leads were going cold.',
    solution:
      'A fully automated lead generation and nurturing engine that captures leads from any source, scores them, and automatically triggers personalized email + WhatsApp sequences.',
    implementation: [
      'Multi-channel lead capture via web forms, social ads, and APIs',
      'AI-powered lead scoring using OpenAI GPT-4',
      'Make.com automation hub orchestrating 15+ app integrations',
      'WhatsApp Business API flows with conditional branching',
      'Real-time performance dashboard with ROI tracking',
    ],
    results: [
      { metric: '80%', label: 'Manual task reduction' },
      { metric: '3x', label: 'Lead conversion rate' },
      { metric: '30 hrs', label: 'Saved per week' },
      { metric: '6 weeks', label: 'Deployment timeline' },
    ],
    testimonial: {
      text: `Our team now focuses entirely on strategy and closing. The automation handles everything else. Best investment we've made this year.`,
      name: 'Lisa K.',
      role: 'Founder, AgencyPro',
    },
  },
];

export default function CaseStudies() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-16 px-6 text-center">
        <FadeIn>
          <div className="section-tag mb-6 mx-auto w-fit">
            Case Studies
          </div>

          <h1 className="text-4xl md:text-5xl font-black font-heading mb-6">
            Behind the{' '}
            <span className="gradient-text">Success Stories</span>
          </h1>

          <p className="text-muted text-xl max-w-2xl mx-auto">
            In-depth breakdowns of how we solve complex challenges and deliver
            measurable outcomes.
          </p>
        </FadeIn>
      </section>

      {/* Case Studies */}
      <section className="px-6 pb-24 section-alt pt-16">
        <div className="max-w-5xl mx-auto space-y-16">
          {caseStudies.map((cs, i) => (
            <FadeIn key={cs.title} delay={i * 0.1}>
              <div className="card overflow-hidden shadow-md">
                {/* Header */}
                <div
                  className={`h-40 bg-gradient-to-br ${cs.color} flex items-center px-8 md:px-10 gap-6`}
                >
                  <span className="text-6xl drop-shadow-md">
                    {cs.emoji}
                  </span>

                  <div>
                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold rounded-full mb-3 border border-white/30">
                      {cs.tag}
                    </span>

                    <h2 className="text-3xl font-black font-heading text-white">
                      {cs.title}
                    </h2>
                  </div>
                </div>

                <div className="p-8 md:p-10 space-y-10">
                  {/* Challenge */}
                  <div>
                    <h3 className="text-lg font-bold mb-3 text-red-600 font-heading">
                      ⚠ The Challenge
                    </h3>

                    <p className="text-body leading-relaxed">
                      {cs.challenge}
                    </p>
                  </div>

                  {/* Solution */}
                  <div>
                    <h3 className="text-lg font-bold mb-3 text-indigo-600 font-heading">
                      💡 Our Solution
                    </h3>

                    <p className="text-body leading-relaxed">
                      {cs.solution}
                    </p>
                  </div>

                  {/* Implementation */}
                  <div>
                    <h3 className="text-lg font-bold mb-4 text-cyan-600 font-heading">
                      🛠 Implementation
                    </h3>

                    <ul className="space-y-3">
                      {cs.implementation.map((step) => (
                        <li
                          key={step}
                          className="flex items-start gap-3 text-body text-sm"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 flex-shrink-0" />
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Results */}
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                    <h3 className="text-lg font-bold mb-5 text-emerald-600 font-heading">
                      📈 Results
                    </h3>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      {cs.results.map((result) => (
                        <div
                          key={result.label}
                          className="bg-white p-4 text-center border border-emerald-100 rounded-lg shadow-sm"
                        >
                          <div className="text-2xl font-black font-heading text-emerald-600 mb-1">
                            {result.metric}
                          </div>

                          <div className="text-muted text-xs font-medium">
                            {result.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="border-t border-gray-100 pt-8">
                    <blockquote className="text-lg text-heading font-medium italic mb-6">
                      "{cs.testimonial.text}"
                    </blockquote>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center text-primary font-bold text-lg border border-indigo-100">
                        {cs.testimonial.name[0]}
                      </div>

                      <div>
                        <div className="font-bold text-heading">
                          {cs.testimonial.name}
                        </div>

                        <div className="text-muted text-sm">
                          {cs.testimonial.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}

          {/* CTA */}
          <FadeIn className="text-center">
            <p className="text-muted mb-5 font-medium">
              Want results like these for your business?
            </p>

            <Link to="/contact" className="btn-primary">
              Start Your Project
              <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
