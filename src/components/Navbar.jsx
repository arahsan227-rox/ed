import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code2, ChevronDown } from 'lucide-react';

const navLinks = [
  {
    label: 'Services',
    path: '/services',
    dropdown: [
      { label: 'Web Development', path: '/services/web-development' },
      { label: 'Business Automation', path: '/services/business-automation' },
      { label: 'Software Development', path: '/services/software-development' },
      { label: 'AI Integrations', path: '/services/ai-integrations' },
      { label: 'E-Commerce', path: '/services/e-commerce' },
    { label: 'SEO Services', path: '/services/seo' },
    ]
  },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'About Us', path: '/about' },
  { label: 'Technologies', path: '/technologies' },
  { label: 'Blog', path: '/blog' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [, setOpenDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-[0_8px_24px_rgba(15,23,42,0.06)] border-b border-slate-200 py-3'
          : 'bg-white/90 backdrop-blur-md border-b border-slate-200/80 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-md shadow-indigo-500/20 transition-transform group-hover:rotate-6">
            <Code2 className="w-5 h-5 text-white" strokeWidth={2.5} />
          </div>
          <span className="text-xl font-bold font-heading tracking-tight text-heading">
            Bluorbit <span className="text-primary">Solutions</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <div key={link.path} className="relative group">
              {link.dropdown ? (
                <>
                  <button
                    className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-body hover:text-primary rounded-lg hover:bg-indigo-50 transition-all"
                    onMouseEnter={() => setOpenDropdown(link.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {link.label}
                    <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
                  </button>
                  <div
                    className="absolute top-full left-0 mt-2 w-52 py-2 bg-white border border-gray-100 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-1 group-hover:translate-y-0"
                    onMouseEnter={() => setOpenDropdown(link.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="block px-4 py-2.5 text-sm text-body hover:text-primary hover:bg-indigo-50 transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  to={link.path}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                    location.pathname === link.path
                      ? 'text-primary bg-indigo-50'
                      : 'text-body hover:text-primary hover:bg-indigo-50'
                  }`}
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link to="/contact" className="btn-primary text-sm py-2.5 px-5">
            Get Free Consultation
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 rounded-lg text-body hover:text-primary hover:bg-indigo-50 transition-colors"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg py-4 px-6 space-y-1">
          {navLinks.map((link) => (
            <div key={link.path}>
              <Link
                to={link.path}
                className="block py-3 text-body hover:text-primary font-medium border-b border-gray-50 transition-colors"
              >
                {link.label}
              </Link>
              {link.dropdown && (
                <div className="pl-4 mt-1 space-y-1">
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block py-2 text-sm text-muted hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link to="/contact" className="btn-primary w-full text-center mt-4 block">
            Get Free Consultation
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
