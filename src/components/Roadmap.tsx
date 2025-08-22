import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle,
  Clock,
  Rocket,
  Globe,
  Shield,
  Brain,
  Users,
  TrendingUp,
  ArrowRight
} from "lucide-react";

const Roadmap = () => {
  const phases = [
    {
      phase: "Phase 1",
      title: "MVP Launch",
      status: "completed",
      timeline: "Q4 2024",
      description: "Basic tokenization platform with core features",
      features: [
        "IP NFT minting (CW721)",
        "Fractional tokenization (CW20)",
        "Basic marketplace",
        "Automated royalty distribution",
        "AI valuation prototype"
      ],
      icon: <CheckCircle className="w-8 h-8 text-primary" />
    },
    {
      phase: "Phase 2",
      title: "Enhanced Features",
      status: "current",
      timeline: "Q1 2025",
      description: "Advanced AI capabilities and improved user experience",
      features: [
        "Enhanced AI valuation models",
        "Advanced marketplace features",
        "Mobile application",
        "KYC/AML integration",
        "Legal framework partnerships"
      ],
      icon: <Clock className="w-8 h-8 text-primary" />
    },
    {
      phase: "Phase 3",
      title: "Cross-Chain Expansion",
      status: "planned",
      timeline: "Q2 2025",
      description: "Multi-chain support and ecosystem growth",
      features: [
        "IBC cross-chain integration",
        "Ethereum bridge",
        "Multi-chain marketplace",
        "Governance token launch",
        "Community DAO"
      ],
      icon: <Globe className="w-8 h-8 text-primary" />
    },
    {
      phase: "Phase 4",
      title: "Enterprise & Scale",
      status: "planned",
      timeline: "Q3-Q4 2025",
      description: "Enterprise solutions and global expansion",
      features: [
        "Enterprise API suite",
        "White-label solutions",
        "Institutional partnerships",
        "Global regulatory compliance",
        "Advanced analytics dashboard"
      ],
      icon: <Rocket className="w-8 h-8 text-primary" />
    }
  ];

  const joinWaitlist = () => {
    alert("Thank you for your interest! Waitlist registration coming soon.");
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "current":
        return "bg-primary/20 text-primary border-primary/30";
      case "planned":
        return "bg-muted text-muted-foreground border-border";
      default:
        return "bg-muted text-muted-foreground border-border";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed":
        return "Completed";
      case "current":
        return "In Progress";
      case "planned":
        return "Planned";
      default:
        return "Unknown";
    }
  };

  return (
    <section id="roadmap" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-glow/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Development Roadmap
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our ambitious journey to revolutionize intellectual property management and create the world's largest IP marketplace.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary-glow to-primary transform md:-translate-x-0.5" />

            {phases.map((phase, index) => (
              <div key={index} className={`relative flex items-center mb-16 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Timeline Node */}
                <div className={`absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full transform ${
                  index % 2 === 0 ? 'md:-translate-x-2' : 'md:-translate-x-2'
                } z-10`} />

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-8 md:pr-8' : 'md:ml-8 md:pl-8'
                } flex-1`}>
                  <Card className="bg-card/80 backdrop-blur-md border border-border/50 p-8 hover:shadow-card hover:scale-105 transition-all duration-300">
                    <div className="flex items-start space-x-6">
                      <div className="flex items-center justify-center w-16 h-16 bg-primary/20 rounded-2xl flex-shrink-0">
                        {phase.icon}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center space-x-4 mb-4">
                          <span className="text-sm font-bold text-primary">{phase.phase}</span>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(phase.status)}`}>
                            {getStatusText(phase.status)}
                          </span>
                          <span className="text-sm text-muted-foreground">{phase.timeline}</span>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-foreground mb-4">
                          {phase.title}
                        </h3>
                        
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {phase.description}
                        </p>
                        
                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-3">Key Features:</h4>
                          <ul className="space-y-2">
                            {phase.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                                <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>

          {/* Future Vision */}
          <div className="text-center mt-20">
            <Card className="bg-gradient-secondary p-8 md:p-12 border border-border/50">
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Beyond 2025: The Future of IP
              </h3>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                Our long-term vision includes AI-generated content tokenization, metaverse IP rights, 
                and a fully decentralized global IP marketplace powered by artificial intelligence.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Brain className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-bold text-foreground mb-2">AI-Generated IP</h4>
                  <p className="text-sm text-muted-foreground">Tokenize AI-created content</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-bold text-foreground mb-2">Metaverse Rights</h4>
                  <p className="text-sm text-muted-foreground">Virtual world IP management</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-bold text-foreground mb-2">Global Community</h4>
                  <p className="text-sm text-muted-foreground">Worldwide creator network</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-bold text-foreground mb-2">$1B+ Market</h4>
                  <p className="text-sm text-muted-foreground">Massive IP economy</p>
                </div>
              </div>

              <Button variant="cta" size="lg" onClick={joinWaitlist}>
                Join Our Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;