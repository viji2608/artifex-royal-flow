import { Button } from "@/components/ui/button";
import { Menu, X, Wallet } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const connectWallet = () => {
    // Wallet connection logic would go here
    alert("Wallet connection feature coming soon!");
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg"></div>
            <span className="text-xl font-bold text-foreground">Artifex</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('features')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-foreground hover:text-primary transition-colors"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('applications')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Applications
            </button>
            <button
              onClick={() => scrollToSection('roadmap')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Roadmap
            </button>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" onClick={() => scrollToSection('demo')}>
              Demo
            </Button>
            <Button variant="hero" onClick={connectWallet}>
              <Wallet className="w-4 h-4 mr-2" />
              Connect Wallet
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border/50">
            <div className="px-4 py-6 space-y-4">
              <button
                onClick={() => scrollToSection('features')}
                className="block w-full text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="block w-full text-left text-foreground hover:text-primary transition-colors py-2"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection('applications')}
                className="block w-full text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Applications
              </button>
              <button
                onClick={() => scrollToSection('roadmap')}
                className="block w-full text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Roadmap
              </button>
              <div className="pt-4 space-y-2">
                <Button variant="ghost" className="w-full" onClick={() => scrollToSection('demo')}>
                  Demo
                </Button>
                <Button variant="hero" className="w-full" onClick={connectWallet}>
                  <Wallet className="w-4 h-4 mr-2" />
                  Connect Wallet
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;