import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Technologies from './pages/Technologies';
import Careers from './pages/Careers';
import Blog from './pages/Blog';
import Industries from './pages/Industries';
import Support from './pages/Support';
import CaseStudies from './pages/CaseStudies';
import WebDevelopment from './pages/services/WebDevelopment';
import BusinessAutomation from './pages/services/BusinessAutomation';
import SoftwareDevelopment from './pages/services/SoftwareDevelopment';
import AIIntegrations from './pages/services/AIIntegrations';
import ECommerce from './pages/services/ECommerce';
import SEO from './pages/services/SEO';
import ProjectDetail from './pages/ProjectDetail';
import ScrollToTop from './components/ScrollToTop';
import { WhatsApp } from './components/Icons';
import ServiceChatbot from './components/ServiceChatbot';
import './index.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="relative min-h-screen flex flex-col bg-background">
        <Navbar />
        <main className="relative z-10 flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/web-development" element={<WebDevelopment />} />
            <Route path="/services/business-automation" element={<BusinessAutomation />} />
            <Route path="/services/software-development" element={<SoftwareDevelopment />} />
            <Route path="/services/ai-integrations" element={<AIIntegrations />} />
            <Route path="/services/e-commerce" element={<ECommerce />} />
            <Route path="/services/seo" element={<SEO />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:id" element={<ProjectDetail />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/technologies" element={<Technologies />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </main>
        <Footer />
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/923379693876"
        target="_blank"
        rel="noreferrer"
        className="whatsapp-float"
        aria-label="Chat on WhatsApp"
        id="whatsapp-float-btn"
      >
        <WhatsApp />
      </a>
      <ServiceChatbot />
    </Router>
  );
}

export default App;
