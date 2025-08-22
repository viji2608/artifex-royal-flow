import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Music, 
  Lightbulb, 
  Palette, 
  BookOpen,
  Play,
  TrendingUp,
  ArrowRight
} from "lucide-react";

const Applications = () => {
  const applications = [
    {
      icon: <Music className="w-12 h-12 text-primary" />,
      title: "Music Industry",
      description: "Tokenize master rights, publishing rights, and enable fan investment in music catalogs.",
      examples: [
        "Album master rights",
        "Publishing catalogs",
        "Future royalty streams",
        "Fan-funded projects"
      ],
      stats: {
        market: "$25B",
        growth: "+12%",
        liquidity: "Low"
      },
      buttonText: "Explore Music"
    },
    {
      icon: <Lightbulb className="w-12 h-12 text-primary" />,
      title: "Patents & Innovation",
      description: "Enable fractional investment in groundbreaking patents and innovative technologies.",
      examples: [
        "Tech patents",
        "Medical innovations",
        "Green technologies",
        "R&D projects"
      ],
      stats: {
        market: "$180B",
        growth: "+8%",
        liquidity: "Very Low"
      },
      buttonText: "Patent Portal"
    },
    {
      icon: <Palette className="w-12 h-12 text-primary" />,
      title: "Digital Art & NFTs",
      description: "Commercialize digital art with automated royalty distribution and fractional ownership.",
      examples: [
        "Digital artwork",
        "Commercial licenses",
        "Brand partnerships",
        "Metaverse assets"
      ],
      stats: {
        market: "$15B",
        growth: "+45%",
        liquidity: "Medium"
      },
      buttonText: "Art Marketplace"
    },
    {
      icon: <BookOpen className="w-12 h-12 text-primary" />,
      title: "Literary Works",
      description: "Tokenize book rights, enable reader investment, and automate publishing royalties.",
      examples: [
        "Book publishing rights",
        "Translation rights",
        "Adaptation rights",
        "Series developments"
      ],
      stats: {
        market: "$143B",
        growth: "+2%",
        liquidity: "Low"
      },
      buttonText: "Literary Hub"
    }
  ];

  const handleExplore = (type: string) => {
    alert(`${type} marketplace coming soon! Join our waitlist to be notified.`);
  };

  return (
    <section id="applications" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-primary-glow/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Applications
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Transform any intellectual property into a liquid, investable asset across multiple industries and use cases.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {applications.map((app, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-md border border-border/50 p-8 hover:shadow-card hover:scale-105 transition-all duration-300 group">
              <div className="flex items-start space-x-6">
                <div className="flex items-center justify-center w-20 h-20 bg-primary/20 rounded-2xl group-hover:bg-primary/30 transition-colors flex-shrink-0">
                  {app.icon}
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {app.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {app.description}
                  </p>

                  {/* Market Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-secondary/50 rounded-lg">
                    <div className="text-center">
                      <div className="text-lg font-bold text-primary">{app.stats.market}</div>
                      <div className="text-xs text-muted-foreground">Market Size</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-primary">{app.stats.growth}</div>
                      <div className="text-xs text-muted-foreground">YoY Growth</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-primary">{app.stats.liquidity}</div>
                      <div className="text-xs text-muted-foreground">Liquidity</div>
                    </div>
                  </div>
                  
                  {/* Examples */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-3">Use Cases:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {app.examples.map((example, exampleIndex) => (
                        <div key={exampleIndex} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0" />
                          {example}
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button 
                    variant="hero" 
                    className="w-full"
                    onClick={() => handleExplore(app.title)}
                  >
                    {app.buttonText}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Success Stories Section */}
        <div className="bg-gradient-secondary rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
            Success Stories
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Music className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-2">Indie Artist Catalog</h4>
              <p className="text-muted-foreground mb-4">$500K raised for music rights tokenization</p>
              <div className="text-2xl font-bold text-primary">247% ROI</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-2">Green Tech Patent</h4>
              <p className="text-muted-foreground mb-4">$2M funding for renewable energy IP</p>
              <div className="text-2xl font-bold text-primary">180% ROI</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Palette className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-2">Digital Art Collection</h4>
              <p className="text-muted-foreground mb-4">$1M in fractional art investments</p>
              <div className="text-2xl font-bold text-primary">320% ROI</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Applications;