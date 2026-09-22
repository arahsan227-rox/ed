import { Link } from 'react-router-dom';
import { Code2, Phone, MapPin, ArrowRight } from 'lucide-react';
import { Instagram, Facebook } from './Icons';

const footerLinks = {
  Services: [
    { label: 'Web Development', path: '/services/web-development' },
    { label: 'Business Automation', path: '/services/business-automation' },
    { label: 'Software Development', path: '/services/software-development' },
    { label: 'AI Integrations', path: '/services/ai-integrations' },
    { label: 'E-Commerce', path: '/services/e-commerce' },
    { label: 'SEO Services', path: '/services/seo' },
  ],
  Company: [
    { label: 'About Us', path: '/about' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Case Studies', path: '/case-studies' },
    { label: 'Careers', path: '/careers' },
    { label: 'Blog', path: '/blog' },
  ],
  Resources: [
    { label: 'Technologies', path: '/technologies' },
    { label: 'Industries', path: '/industries' },
    { label: 'Support', path: '/support' },
    { label: 'Contact Us', path: '/contact' },
  ],
};

const Footer = () => {
  return (
    <footer className="relative z-10 footer-dark">
      {/* Newsletter CTA */}
      <div className="border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-6 py-14 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold font-heading mb-1 text-white">
              Stay ahead with <span className="text-indigo-400">Bluorbit Solutions</span> insights
            </h3>
            <p className="text-slate-400 text-sm">Get weekly updates on tech, automation, and business growth.</p>
          </div>
          <form className="flex gap-3 w-full md:w-auto" onSubmit={e => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full md:w-72 px-4 py-3 bg-white/[0.06] border border-white/[0.1] rounded-xl text-white text-sm outline-none focus:border-indigo-500 transition-colors placeholder:text-slate-500"
            />
            <button type="submit" className="btn-primary whitespace-nowrap text-sm">
              Subscribe <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 group mb-5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                <Code2 className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-xl font-bold font-heading tracking-tight text-white">
                Bluorbit <span className="text-indigo-400">Solutions</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              We help businesses automate operations, build powerful software, and create modern web experiences that drive growth.
            </p>
            {/* Contact Info */}
           
            {/* Social Links */}
            <div className="flex gap-2">
              {[
                { icon: Instagram, href: 'https://www.instagram.com/bluorbitsolutions/', label: 'Instagram' },
                { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61575421484699', label: 'Facebook' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-white hover:bg-indigo-500/15 hover:border-indigo-500/30 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-white mb-5 tracking-wide">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.path + link.label}>
                    <Link
                      to={link.path}
                      className="text-sm text-slate-400 hover:text-white transition-colors hover:translate-x-1 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Bluorbit Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link to="/privacy" className="text-slate-500 hover:text-white text-sm transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-slate-500 hover:text-white text-sm transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
