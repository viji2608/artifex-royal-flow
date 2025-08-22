import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Coins, 
  Shield, 
  Zap, 
  Brain, 
  Users, 
  BarChart3,
  Lock,
  Globe,
  ArrowRight
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Coins className="w-8 h-8 text-primary" />,
      title: "IP Tokenization",
      description: "Transform your intellectual property into tradeable NFTs using CW721 standard on Andromeda OS.",
      details: ["Music rights", "Patents", "Digital art", "Literary works"],
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Fractional Ownership",
      description: "Enable multiple investors to own portions of valuable IP assets through CW20 tokens.",
      details: ["Increased liquidity", "Lower barriers", "Shared ownership", "Democratic access"],
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Automated Royalties",
      description: "Smart contracts automatically distribute royalties to token holders using Conditional Splitter ADO.",
      details: ["Instant payouts", "Transparent", "No intermediaries", "Fair distribution"],
    },
    {
      icon: <Brain className="w-8 h-8 text-primary" />,
      title: "AI Valuation",
      description: "Advanced AI algorithms provide accurate IP valuations and licensing recommendations.",
      details: ["Market analysis", "Comparable sales", "Optimal pricing", "Risk assessment"],
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Secure & Immutable",
      description: "Built on blockchain technology ensuring security, transparency, and immutable records.",
      details: ["Cryptographic security", "Immutable ledger", "Transparent operations", "Audit trail"],
    },
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "Cross-Chain Support",
      description: "Leverage Andromeda's cross-chain capabilities for maximum reach and interoperability.",
      details: ["Multi-chain support", "IBC protocol", "Global access", "Enhanced liquidity"],
    },
  ];

  const learnMore = () => {
    alert("Detailed documentation coming soon!");
  };

  return (
    <section id="features" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-glow/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Powerful Features
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Revolutionary technology stack that transforms how intellectual property is valued, traded, and monetized in the digital economy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-md border border-border/50 p-6 hover:shadow-card hover:scale-105 transition-all duration-300 group">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/20 rounded-xl mb-6 mx-auto group-hover:bg-primary/30 transition-colors">
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-4 text-center">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 text-center leading-relaxed">
                {feature.description}
              </p>
              
              <ul className="space-y-2">
                {feature.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-secondary rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-muted-foreground">Uptime</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">&lt;1s</div>
              <div className="text-muted-foreground">Transaction Speed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Global Access</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">0%</div>
              <div className="text-muted-foreground">Hidden Fees</div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg" onClick={learnMore}>
            Learn More
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Features;