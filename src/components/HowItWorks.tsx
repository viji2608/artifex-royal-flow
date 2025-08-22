import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Upload, 
  Coins, 
  BarChart3, 
  DollarSign,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: <Upload className="w-8 h-8 text-primary" />,
      title: "Submit Your IP",
      description: "Upload your intellectual property with comprehensive metadata and legal documentation.",
      features: [
        "Secure file upload",
        "Metadata verification",
        "Legal compliance check",
        "IPFS storage"
      ]
    },
    {
      number: "02",
      icon: <Coins className="w-8 h-8 text-primary" />,
      title: "Tokenize Asset",
      description: "Convert your IP into a unique NFT using CW721 standard and optionally fractionalize it.",
      features: [
        "NFT creation",
        "Fractional tokens",
        "Smart contracts",
        "Ownership rights"
      ]
    },
    {
      number: "03",
      icon: <BarChart3 className="w-8 h-8 text-primary" />,
      title: "AI Valuation",
      description: "Our AI analyzes market data to provide accurate valuation and pricing recommendations.",
      features: [
        "Market analysis",
        "Price discovery",
        "Risk assessment",
        "Licensing terms"
      ]
    },
    {
      number: "04",
      icon: <DollarSign className="w-8 h-8 text-primary" />,
      title: "Earn Royalties",
      description: "Automated smart contracts distribute royalties to token holders based on IP performance.",
      features: [
        "Automatic payouts",
        "Real-time tracking",
        "Transparent distribution",
        "Global payments"
      ]
    }
  ];

  const startDemo = () => {
    document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="how-it-works" className="py-20 bg-gradient-secondary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary-glow/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our streamlined process makes it easy to tokenize your intellectual property and start earning from day one.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-24 left-full w-full h-0.5 bg-gradient-to-r from-primary to-primary/20 z-0" style={{ width: 'calc(100% - 2rem)' }} />
              )}
              
              <Card className="bg-card/80 backdrop-blur-md border border-border/50 p-6 hover:shadow-card hover:scale-105 transition-all duration-300 relative z-10">
                <div className="text-center">
                  {/* Step Number */}
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/20 rounded-full text-primary font-bold text-lg mb-4">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="flex items-center justify-center w-16 h-16 bg-primary/20 rounded-xl mx-auto mb-6">
                    {step.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {step.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-card/50 backdrop-blur-md border border-border/50 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to Transform Your IP?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join the future of intellectual property management and start earning from your creative works today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="lg" onClick={startDemo}>
                Start Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="glass" size="lg">
                View Documentation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;