import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Github, 
  Twitter, 
  Linkedin, 
  Mail,
  Globe,
  ArrowRight,
  ExternalLink
} from "lucide-react";

const Footer = () => {
  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for subscribing! Newsletter signup coming soon.");
  };

  const handleSocial = (platform: string) => {
    alert(`${platform} page coming soon!`);
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-secondary border-t border-border/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary-glow/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Newsletter Section */}
        <div className="bg-card/50 backdrop-blur-md border border-border/50 rounded-2xl p-8 md:p-12 mb-16">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Stay Updated with Artifex
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Get the latest updates on new features, partnerships, and opportunities in the IP tokenization space.
            </p>
            
            <form onSubmit={handleNewsletter} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1" 
                required 
              />
              <Button type="submit" variant="cta">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </form>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg"></div>
              <span className="text-xl font-bold text-foreground">Artifex</span>
            </div>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Revolutionizing intellectual property management through blockchain tokenization and AI-powered valuation.
            </p>
            
            <div className="flex space-x-4">
              <button
                onClick={() => handleSocial('Twitter')}
                className="w-10 h-10 bg-secondary/50 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-colors group"
              >
                <Twitter className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </button>
              
              <button
                onClick={() => handleSocial('Github')}
                className="w-10 h-10 bg-secondary/50 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-colors group"
              >
                <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </button>
              
              <button
                onClick={() => handleSocial('LinkedIn')}
                className="w-10 h-10 bg-secondary/50 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-colors group"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </button>
              
              <button
                onClick={() => handleSocial('Email')}
                className="w-10 h-10 bg-secondary/50 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-colors group"
              >
                <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-foreground mb-6">Platform</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('features')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Features
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('how-it-works')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('demo')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Demo
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('applications')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Applications
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('roadmap')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Roadmap
                </button>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-bold text-foreground mb-6">Resources</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => alert('Documentation coming soon!')}
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center"
                >
                  Documentation
                  <ExternalLink className="w-3 h-3 ml-1" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => alert('API documentation coming soon!')}
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center"
                >
                  API Reference
                  <ExternalLink className="w-3 h-3 ml-1" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => alert('Blog coming soon!')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Blog
                </button>
              </li>
              <li>
                <button
                  onClick={() => alert('Help center coming soon!')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Help Center
                </button>
              </li>
              <li>
                <button
                  onClick={() => alert('Community coming soon!')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Community
                </button>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-bold text-foreground mb-6">Legal</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => alert('Privacy policy coming soon!')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => alert('Terms of service coming soon!')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <button
                  onClick={() => alert('Cookie policy coming soon!')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Cookie Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => alert('Compliance info coming soon!')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Compliance
                </button>
              </li>
            </ul>
            
            <div className="mt-8">
              <div className="flex items-center text-sm text-muted-foreground mb-2">
                <Globe className="w-4 h-4 mr-2" />
                Powered by Andromeda OS
              </div>
              <p className="text-xs text-muted-foreground">
                Built for the Andromeda hackathon
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground mb-4 md:mb-0">
              © {currentYear} Artifex IP Vault. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <button
                onClick={() => alert('Status page coming soon!')}
                className="hover:text-primary transition-colors"
              >
                Status
              </button>
              <button
                onClick={() => alert('Security info coming soon!')}
                className="hover:text-primary transition-colors"
              >
                Security
              </button>
              <button
                onClick={() => alert('Contact form coming soon!')}
                className="hover:text-primary transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;