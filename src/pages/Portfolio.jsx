import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  ExternalLink,
  Layers3,
  Sparkles,
  TrendingUp,
  Zap,
} from 'lucide-react';
import { projects } from '../projectsData';

/* =========================================================
   REVEAL ANIMATION
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
    margin: '-80px',
  });

  const directions = {
    up: { y: 35, x: 0 },
    down: { y: -35, x: 0 },
    left: { y: 0, x: 35 },
    right: { y: 0, x: -35 },
  };

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        ...directions[direction],
      }}
      animate={
        inView
          ? {
              opacity: 1,
              x: 0,
              y: 0,
            }
          : {}
      }
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

/* =========================================================
   FILTERS
========================================================= */

const filters = [
  'All',
  'Web Dev',
  'Automation',
  'Software',
  'Healthcare',
  'Finance',
  'SEO',
];

/* =========================================================
   FLOATING ORB
========================================================= */

const FloatingOrb = ({
  className = '',
  delay = 0,
}) => {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl pointer-events-none ${className}`}
      animate={{
        x: [0, 30, -20, 0],
        y: [0, -25, 20, 0],
        scale: [1, 1.08, 0.95, 1],
        opacity: [0.35, 0.55, 0.4, 0.35],
      }}
      transition={{
        duration: 10,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
};

/* =========================================================
   PROJECT CARD
========================================================= */

const ProjectCard = ({ project, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <FadeIn delay={index * 0.07}>
      <Link
        to={`/portfolio/${project.slug}`}
        className="block h-full group"
      >
        <motion.article
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          whileHover={{
            y: -10,
          }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 22,
          }}
          className="
            relative
            h-full
            overflow-hidden
            rounded-[26px]
            bg-white
            border border-gray-200/80
            shadow-[0_10px_40px_rgba(15,23,42,0.05)]
            hover:shadow-[0_25px_70px_rgba(79,70,229,0.16)]
            transition-shadow
            duration-500
          "
        >
          {/* Hover Glow */}
          <motion.div
            animate={{
              opacity: hovered ? 1 : 0,
            }}
            transition={{ duration: 0.4 }}
            className="
              absolute
              -inset-px
              rounded-[26px]
              bg-gradient-to-br
              from-indigo-500/20
              via-transparent
              to-purple-500/20
              pointer-events-none
              z-0
            "
          />

          {/* Project Visual */}
          <div className="relative h-56 overflow-hidden">
            {project.image ? (
              <>
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  animate={{
                    scale: hovered ? 1.09 : 1,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />

                <motion.div
                  animate={{
                    opacity: hovered ? 0.25 : 0.45,
                  }}
                  transition={{ duration: 0.4 }}
                  className="
                    absolute inset-0
                    bg-gradient-to-t
                    from-black/70
                    via-black/10
                    to-transparent
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-purple-500/20" />
              </>
            ) : (
              <div
                className={`
                  absolute inset-0
                  flex items-center justify-center
                  bg-gradient-to-br
                  ${project.color || 'from-indigo-500 to-purple-600'}
                `}
              >
                <motion.div
                  animate={{
                    scale: hovered ? 1.15 : 1,
                    rotate: hovered ? 5 : 0,
                  }}
                  transition={{
                    duration: 0.6,
                  }}
                  className="text-7xl drop-shadow-2xl"
                >
                  {project.emoji}
                </motion.div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
              </div>
            )}

            {/* Number */}
            <div className="absolute top-5 left-5">
              <div
                className="
                  flex items-center justify-center
                  w-9 h-9
                  rounded-xl
                  bg-black/25
                  backdrop-blur-md
                  border border-white/20
                  text-white
                  text-xs
                  font-bold
                "
              >
                {String(index + 1).padStart(2, '0')}
              </div>
            </div>

            {/* Industry */}
            <div className="absolute top-5 right-5">
              <span
                className="
                  inline-flex items-center
                  px-3 py-1.5
                  rounded-full
                  bg-white/15
                  backdrop-blur-xl
                  border border-white/25
                  text-white
                  text-[11px]
                  font-semibold
                  tracking-wide
                "
              >
                {project.industry}
              </span>
            </div>

            {/* View Project */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: hovered ? 1 : 0,
                y: hovered ? 0 : 10,
              }}
              className="
                absolute
                bottom-5
                right-5
                flex items-center gap-2
                px-4 py-2.5
                rounded-full
                bg-white
                text-indigo-700
                text-xs
                font-bold
                shadow-xl
              "
            >
              View Project
              <ExternalLink className="w-3.5 h-3.5" />
            </motion.div>
          </div>

          {/* Card Content */}
          <div className="relative z-10 p-7">
            {/* Category */}
            <div className="flex items-center gap-2 mb-4">
              <span
                className="
                  inline-flex items-center gap-1.5
                  text-[11px]
                  uppercase
                  tracking-[0.12em]
                  font-bold
                  text-indigo-600
                "
              >
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                {project.category}
              </span>
            </div>

            {/* Title */}
            <h3
              className="
                text-xl md:text-[22px]
                font-bold
                font-heading
                text-heading
                leading-tight
                mb-3
                transition-colors
                duration-300
                group-hover:text-indigo-600
              "
            >
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-muted text-sm leading-7 mb-6">
              {project.desc}
            </p>

            {/* Technology */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech?.slice(0, 5).map((tech, techIndex) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, y: 5 }}
                  animate={
                    hovered
                      ? {
                          opacity: 1,
                          y: 0,
                        }
                      : {
                          opacity: 1,
                          y: 0,
                        }
                  }
                  transition={{
                    delay: techIndex * 0.04,
                  }}
                  className="
                    px-2.5 py-1
                    rounded-lg
                    bg-gray-50
                    border border-gray-200
                    text-[11px]
                    text-gray-600
                    font-semibold
                  "
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            {/* Results */}
            {project.results?.length > 0 && (
              <div className="pt-5 border-t border-gray-100">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp className="w-4 h-4 text-emerald-500" />
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Key Results
                  </span>
                </div>

                <div className="space-y-2">
                  {project.results.slice(0, 3).map((result) => (
                    <div
                      key={result}
                      className="
                        flex items-start gap-2
                        text-xs
                        text-emerald-700
                        font-semibold
                      "
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                      <span>{result}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Bottom Arrow */}
            <motion.div
              animate={{
                x: hovered ? 4 : 0,
              }}
              className="
                mt-6
                flex items-center justify-between
                text-sm
                font-bold
                text-indigo-600
              "
            >
              <span>Explore case study</span>
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </div>
        </motion.article>
      </Link>
    </FadeIn>
  );
};

/* =========================================================
   MAIN PORTFOLIO
========================================================= */

export default function Portfolio() {
  const [active, setActive] = useState('All');

  const filtered =
    active === 'All'
      ? projects
      : projects.filter(
          (p) =>
            p.category === active ||
            p.tag === active ||
            p.industry === active
        );

  const totalProjects = projects.length;

  const industries = new Set(
    projects.map((p) => p.industry).filter(Boolean)
  ).size;

  const technologies = new Set(
    projects.flatMap((p) => p.tech || [])
  ).size;

  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden pt-32 md:pt-40 pb-20 px-6">
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/60 via-white to-white" />

          <FloatingOrb
            className="w-72 h-72 bg-indigo-300/30 -top-20 -left-20"
            delay={0}
          />

          <FloatingOrb
            className="w-80 h-80 bg-purple-300/25 top-10 right-[-120px]"
            delay={2}
          />

          <FloatingOrb
            className="w-56 h-56 bg-cyan-300/20 bottom-[-100px] left-[35%]"
            delay={4}
          />

          {/* Grid */}
          <div
            className="
              absolute inset-0
              opacity-[0.035]
              bg-[linear-gradient(to_right,#4f46e5_1px,transparent_1px),linear-gradient(to_bottom,#4f46e5_1px,transparent_1px)]
              bg-[size:42px_42px]
            "
          />
        </div>

        <div className="relative max-w-6xl mx-auto text-center">
          <FadeIn>
            {/* Badge */}
            <motion.div
              whileHover={{ scale: 1.04 }}
              className="
                inline-flex items-center gap-2
                px-4 py-2
                rounded-full
                bg-white/80
                backdrop-blur-xl
                border border-indigo-100
                shadow-sm
                mb-7
              "
            >
              <Sparkles className="w-4 h-4 text-indigo-500" />
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-indigo-600">
                Selected Work
              </span>
            </motion.div>

            {/* Heading */}
            <h1
              className="
                text-5xl
                md:text-6xl
                lg:text-7xl
                font-black
                font-heading
                tracking-tight
                text-heading
                leading-[1.02]
                mb-7
              "
            >
              Digital Products
              <br />
              <span className="gradient-text">
                Built to Matter.
              </span>
            </h1>

            <p
              className="
                text-muted
                text-lg
                md:text-xl
                max-w-2xl
                mx-auto
                leading-relaxed
              "
            >
              Explore a selection of digital products, platforms,
              automations, and experiences we've engineered to solve
              meaningful business problems.
            </p>

            {/* Hero CTA */}
            <div className="flex flex-wrap items-center justify-center gap-3 mt-9">
              <Link
                to="/contact"
                className="
                  group
                  inline-flex items-center gap-2
                  px-6 py-3.5
                  rounded-xl
                  bg-gray-950
                  text-white
                  text-sm
                  font-bold
                  shadow-xl
                  shadow-gray-900/10
                  hover:bg-indigo-600
                  transition-all
                "
              >
                Start a Project
                <ArrowRight
                  className="
                    w-4 h-4
                    group-hover:translate-x-1
                    transition-transform
                  "
                />
              </Link>

              <a
                href="#projects"
                className="
                  inline-flex items-center gap-2
                  px-6 py-3.5
                  rounded-xl
                  bg-white
                  border border-gray-200
                  text-gray-700
                  text-sm
                  font-bold
                  hover:border-indigo-200
                  hover:text-indigo-600
                  transition-all
                "
              >
                Explore Work
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </FadeIn>

          {/* Stats */}
          <FadeIn delay={0.15} className="mt-16">
            <div
              className="
                max-w-4xl
                mx-auto
                grid
                grid-cols-2
                md:grid-cols-4
                rounded-3xl
                bg-white/80
                backdrop-blur-xl
                border border-gray-200
                shadow-[0_20px_60px_rgba(15,23,42,0.06)]
                overflow-hidden
              "
            >
              {[
                {
                  value: `${totalProjects}+`,
                  label: 'Projects',
                  icon: Layers3,
                },
                {
                  value: `${industries}+`,
                  label: 'Industries',
                  icon: TrendingUp,
                },
                {
                  value: `${technologies}+`,
                  label: 'Technologies',
                  icon: CodeIcon,
                },
                {
                  value: '100%',
                  label: 'Commitment',
                  icon: Zap,
                },
              ].map((stat, index) => {
                const Icon = stat.icon;

                return (
                  <div
                    key={stat.label}
                    className={`
                      relative
                      p-6
                      text-center
                      ${
                        index !== 0
                          ? 'border-l border-gray-100'
                          : ''
                      }
                      ${
                        index >= 2
                          ? 'border-t md:border-t-0 border-gray-100'
                          : ''
                      }
                    `}
                  >
                    <div className="flex justify-center mb-2">
                      <Icon className="w-4 h-4 text-indigo-500" />
                    </div>

                    <div className="text-2xl md:text-3xl font-black font-heading text-heading">
                      {stat.value}
                    </div>

                    <div className="text-xs text-muted mt-1">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* =====================================================
          PROJECTS
      ===================================================== */}

      <section
        id="projects"
        className="relative px-6 py-20 md:py-24 bg-[#f8f9fc] overflow-hidden"
      >
        {/* Decorative Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-[500px] h-[500px] rounded-full bg-indigo-100/40 blur-3xl -top-64 -right-64" />
          <div className="absolute w-[400px] h-[400px] rounded-full bg-purple-100/30 blur-3xl bottom-0 -left-64" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Section Header */}
          <FadeIn className="mb-12">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
              <div>
                <div
                  className="
                    inline-flex items-center gap-2
                    px-3 py-1.5
                    rounded-full
                    bg-indigo-50
                    border border-indigo-100
                    text-indigo-600
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.14em]
                    mb-4
                  "
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
                  Our Work
                </div>

                <h2
                  className="
                    text-3xl
                    md:text-4xl
                    lg:text-5xl
                    font-bold
                    font-heading
                    text-heading
                    tracking-tight
                  "
                >
                  Work that speaks
                  <span className="gradient-text">
                    {' '}for itself.
                  </span>
                </h2>

                <p className="text-muted max-w-xl mt-4 leading-relaxed">
                  From high-converting websites to intelligent
                  automation systems, every build is designed around
                  real outcomes.
                </p>
              </div>

              <div className="hidden lg:flex items-center gap-3 text-sm text-muted">
                <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center">
                  <Layers3 className="w-5 h-5 text-indigo-500" />
                </div>

                <div>
                  <div className="font-bold text-heading">
                    {filtered.length} projects
                  </div>
                  <div className="text-xs">
                    Currently showing
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* =================================================
              FILTER BAR
          ================================================= */}

          <FadeIn delay={0.05} className="mb-12">
            <div
              className="
                flex
                flex-wrap
                gap-2
                p-2
                rounded-2xl
                bg-white/80
                backdrop-blur-xl
                border border-gray-200
                shadow-sm
                w-fit
                max-w-full
              "
            >
              {filters.map((filter) => {
                const isActive = active === filter;

                return (
                  <button
                    key={filter}
                    onClick={() => setActive(filter)}
                    className="relative px-4 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-colors"
                  >
                    {isActive && (
                      <motion.div
                        layoutId="portfolio-filter"
                        className="
                          absolute inset-0
                          rounded-xl
                          bg-gray-950
                        "
                        transition={{
                          type: 'spring',
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}

                    <span
                      className={`
                        relative z-10
                        ${
                          isActive
                            ? 'text-white'
                            : 'text-gray-500 hover:text-gray-900'
                        }
                      `}
                    >
                      {filter}
                    </span>
                  </button>
                );
              })}
            </div>
          </FadeIn>

          {/* =================================================
              PROJECT GRID
          ================================================= */}

          <motion.div
            layout
            className="
              grid
              sm:grid-cols-2
              lg:grid-cols-3
              gap-6
            "
          >
            {filtered.map((project, index) => (
              <motion.div
                key={project.slug || project.title}
                layout
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
                transition={{
                  duration: 0.45,
                  delay: index * 0.035,
                }}
              >
                <ProjectCard
                  project={project}
                  index={index}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State */}
          {filtered.length === 0 && (
            <FadeIn>
              <div
                className="
                  py-20
                  text-center
                  rounded-3xl
                  bg-white
                  border border-gray-200
                "
              >
                <div
                  className="
                    w-14 h-14
                    rounded-2xl
                    bg-indigo-50
                    flex items-center justify-center
                    mx-auto mb-5
                  "
                >
                  <Layers3 className="w-6 h-6 text-indigo-500" />
                </div>

                <h3 className="text-xl font-bold text-heading mb-2">
                  No projects found
                </h3>

                <p className="text-muted text-sm mb-5">
                  Try another category to explore more work.
                </p>

                <button
                  onClick={() => setActive('All')}
                  className="btn-primary"
                >
                  View All Projects
                </button>
              </div>
            </FadeIn>
          )}

          {/* =================================================
              MID-PAGE STATEMENT
          ================================================= */}

          <FadeIn className="mt-24">
            <div
              className="
                relative
                overflow-hidden
                rounded-[32px]
                bg-gray-950
                px-8
                py-14
                md:px-14
                md:py-16
              "
            >
              {/* Glow */}
              <div className="absolute w-80 h-80 rounded-full bg-indigo-600/30 blur-3xl -top-40 -right-20" />
              <div className="absolute w-72 h-72 rounded-full bg-purple-600/20 blur-3xl -bottom-40 left-20" />

              {/* Grid */}
              <div
                className="
                  absolute inset-0
                  opacity-[0.06]
                  bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)]
                  bg-[size:32px_32px]
                "
              />

              <div className="relative z-10 max-w-4xl">
                <div className="flex items-center gap-2 text-indigo-300 text-xs font-bold uppercase tracking-[0.15em] mb-5">
                  <Sparkles className="w-4 h-4" />
                  Built Different
                </div>

                <h3
                  className="
                    text-3xl
                    md:text-5xl
                    font-black
                    font-heading
                    text-white
                    leading-tight
                  "
                >
                  We don't just deliver
                  <span className="text-indigo-400">
                    {' '}features.
                  </span>
                  <br />
                  We build{' '}
                  <span className="text-purple-400">
                    momentum.
                  </span>
                </h3>

                <p className="text-gray-400 max-w-2xl mt-6 leading-relaxed">
                  Strategy, design, engineering, automation and
                  optimization — brought together under one team to
                  turn ambitious ideas into products people actually
                  want to use.
                </p>

                <Link
                  to="/contact"
                  className="
                    inline-flex items-center gap-2
                    mt-8
                    px-6 py-3.5
                    rounded-xl
                    bg-white
                    text-gray-950
                    text-sm
                    font-bold
                    hover:bg-indigo-50
                    transition-colors
                  "
                >
                  Build Something Exceptional
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </FadeIn>

          {/* =================================================
              FINAL CTA
          ================================================= */}

          <FadeIn className="mt-20">
            <div className="text-center max-w-3xl mx-auto">
              <div
                className="
                  inline-flex items-center gap-2
                  text-indigo-600
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.16em]
                  mb-5
                "
              >
                <span className="w-8 h-px bg-indigo-300" />
                Your Turn
                <span className="w-8 h-px bg-indigo-300" />
              </div>

              <h2
                className="
                  text-3xl
                  md:text-5xl
                  font-black
                  font-heading
                  text-heading
                  leading-tight
                "
              >
                Have an idea worth
                <span className="gradient-text">
                  {' '}building?
                </span>
              </h2>

              <p className="text-muted mt-5 text-lg leading-relaxed">
                Let's turn your idea into a digital product that
                looks exceptional, performs beautifully, and creates
                measurable value.
              </p>

              <div className="flex justify-center mt-8">
                <Link
                  to="/contact"
                  className="
                    group
                    inline-flex items-center gap-2
                    px-7 py-4
                    rounded-xl
                    bg-gradient-to-r
                    from-indigo-600
                    to-purple-600
                    text-white
                    font-bold
                    shadow-xl
                    shadow-indigo-500/20
                    hover:shadow-2xl
                    hover:shadow-indigo-500/30
                    hover:-translate-y-0.5
                    transition-all
                  "
                >
                  Start Your Project
                  <ArrowRight
                    className="
                      w-4 h-4
                      group-hover:translate-x-1
                      transition-transform
                    "
                  />
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

/* =========================================================
   SMALL ICON COMPONENT
   Prevents adding another dependency just for Code icon.
========================================================= */

function CodeIcon({ className = '' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}
