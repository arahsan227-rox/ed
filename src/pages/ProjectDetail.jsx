import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, Target, TrendingUp, Monitor, Rocket } from 'lucide-react';
import { getProjectBySlug } from '../projectsData';

const FadeIn = ({ children, delay = 0, className = '' }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function ProjectDetail() {
  const { id } = useParams();
  const project = getProjectBySlug(id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="pt-28 pb-20 px-6 bg-background min-h-screen">
        <div className="max-w-3xl mx-auto text-center">
          <div className="section-tag mb-6 w-fit mx-auto">Not Found</div>
          <h1 className="text-4xl font-black font-heading mb-4 text-heading">Project not found</h1>
          <p className="text-muted mb-8">This project is unavailable or the link is incorrect.</p>
          <Link to="/portfolio" className="btn-primary">Back to Portfolio</Link>
        </div>
      </div>
    );
  }

  const title = project.title;
  const detail = project.detail || {};

  return (
    <div className="pt-28 pb-20 px-6 bg-background min-h-screen">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <Link to="/portfolio" className="inline-flex items-center gap-2 text-primary hover:text-indigo-700 font-medium mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Portfolio
          </Link>
          <div className="section-tag mb-4 w-fit">Case Study</div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading leading-tight mb-6 text-heading">
            {title}
          </h1>
          <p className="text-xl text-muted leading-relaxed mb-10">
            {detail.summary || project.desc}
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="w-full h-64 sm:h-96 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-16 shadow-xl relative overflow-hidden">
            {project.image ? (
              <img src={project.image} alt={title} className="w-full h-full object-cover" />
            ) : (
              <span className="text-white text-5xl font-black opacity-20 rotate-[-5deg] tracking-widest text-center px-4">
                {title.toUpperCase()}
              </span>
            )}
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="md:col-span-2 space-y-12">
            <FadeIn delay={0.2}>
              <h2 className="text-2xl font-bold font-heading mb-4 flex items-center gap-2 text-heading">
                <Target className="w-6 h-6 text-rose-500" /> The Challenge
              </h2>
              <p className="text-muted leading-relaxed">
                {detail.challenge || 'The client needed a practical digital solution that could solve a real operational bottleneck and create measurable business impact.'}
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <h2 className="text-2xl font-bold font-heading mb-4 flex items-center gap-2 text-heading">
                <Monitor className="w-6 h-6 text-indigo-500" /> Our Solution
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                {detail.solution || 'We created a tailored system to address the operational challenge, modernize the workflows, and improve the end-to-end experience.'}
              </p>
              <ul className="space-y-3">
                {(detail.implementation || [
                  'Modern user-focused product design and engineering.',
                  'System integration with existing workflows and tools.',
                  'Performance optimization and scalable architecture.',
                  'Clear reporting and product analytics for ongoing growth.'
                ]).map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted">
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn delay={0.4}>
              <h2 className="text-2xl font-bold font-heading mb-4 flex items-center gap-2 text-heading">
                <TrendingUp className="w-6 h-6 text-emerald-500" /> The Impact & Results
              </h2>
              <p className="text-muted leading-relaxed">
                {detail.resultsText || 'The final platform improved the client experience, removed operational friction, and delivered measurable business results.'}
              </p>
            </FadeIn>
          </div>

          <div className="space-y-8">
            <FadeIn delay={0.3}>
              <div className="card p-6 border-t-4 border-t-primary">
                <h3 className="font-bold font-heading text-lg mb-4 text-heading">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-gray-50 border border-gray-200 text-body text-sm rounded-md shadow-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="card p-6">
                <h3 className="font-bold font-heading text-lg mb-4 text-heading">Key Metrics</h3>
                <div className="space-y-4">
                  {(detail.metrics || project.results).map((item, index) => (
                    <div key={index}>
                      <div className="text-3xl font-black gradient-text">{typeof item === 'string' ? item : item.value}</div>
                      <div className="text-sm text-muted">{typeof item === 'string' ? 'Key Result' : item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        <FadeIn delay={0.5}>
          <div className="rounded-2xl p-10 text-center bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100 shadow-sm">
            <Rocket className="w-10 h-10 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold font-heading mb-3 text-heading">Want similar results for your business?</h3>
            <p className="text-muted mb-6">Let's discuss how we can build something remarkable together.</p>
            <Link to="/contact" className="btn-primary">
              Start Your Project
            </Link>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
