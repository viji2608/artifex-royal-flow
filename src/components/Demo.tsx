import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Upload, 
  FileText, 
  Coins, 
  DollarSign, 
  Users,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Music,
  Palette
} from "lucide-react";

const Demo = () => {
  const [selectedFile, setSelectedFile] = useState<string>("");
  const [ipType, setIpType] = useState<string>("music");
  const [step, setStep] = useState<number>(1);
  const [valuation, setValuation] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const ipTypes = [
    { id: "music", label: "Music Rights", icon: <Music className="w-5 h-5" /> },
    { id: "art", label: "Digital Art", icon: <Palette className="w-5 h-5" /> },
    { id: "patent", label: "Patent", icon: <FileText className="w-5 h-5" /> },
    { id: "book", label: "Literary Work", icon: <FileText className="w-5 h-5" /> }
  ];

  const handleFileUpload = () => {
    setSelectedFile("sample-music-track.mp3");
    setStep(2);
  };

  const generateValuation = () => {
    setIsLoading(true);
    setTimeout(() => {
      setValuation(250000);
      setStep(3);
      setIsLoading(false);
    }, 2000);
  };

  const tokenizeAsset = () => {
    setStep(4);
  };

  const resetDemo = () => {
    setStep(1);
    setSelectedFile("");
    setValuation(0);
    setIsLoading(false);
  };

  return (
    <section id="demo" className="py-20 bg-gradient-secondary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-primary-glow/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Interactive Demo
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Experience the power of IP tokenization with our live demo. Upload, valuate, and tokenize intellectual property in minutes.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Progress Indicator */}
          <div className="flex items-center justify-center mb-12">
            {[1, 2, 3, 4].map((stepNumber) => (
              <div key={stepNumber} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                  step >= stepNumber 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-secondary text-secondary-foreground'
                }`}>
                  {step > stepNumber ? <CheckCircle className="w-5 h-5" /> : stepNumber}
                </div>
                {stepNumber < 4 && (
                  <div className={`w-16 h-1 mx-2 transition-all duration-300 ${
                    step > stepNumber ? 'bg-primary' : 'bg-secondary'
                  }`} />
                )}
              </div>
            ))}
          </div>

          {/* Demo Content */}
          <Card className="bg-card/80 backdrop-blur-md border border-border/50 p-8 shadow-card">
            {step === 1 && (
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Upload className="w-10 h-10 text-primary" />
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Upload Your IP
                </h3>
                
                <p className="text-muted-foreground mb-8">
                  Select the type of intellectual property you want to tokenize and upload your files.
                </p>

                {/* IP Type Selection */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {ipTypes.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setIpType(type.id)}
                      className={`p-4 rounded-lg border transition-all duration-300 ${
                        ipType === type.id
                          ? 'border-primary bg-primary/20 text-primary'
                          : 'border-border bg-secondary/50 text-foreground hover:border-primary/50'
                      }`}
                    >
                      <div className="flex flex-col items-center space-y-2">
                        {type.icon}
                        <span className="text-sm font-medium">{type.label}</span>
                      </div>
                    </button>
                  ))}
                </div>

                {/* File Upload Area */}
                <div className="border-2 border-dashed border-border rounded-lg p-8 mb-6 hover:border-primary/50 transition-colors cursor-pointer">
                  <div className="text-center">
                    <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-foreground font-medium mb-2">
                      Drop your files here or click to browse
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Supports MP3, PDF, ZIP, and more
                    </p>
                  </div>
                </div>

                <Button variant="cta" size="lg" onClick={handleFileUpload}>
                  Upload & Continue
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            )}

            {step === 2 && (
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <FileText className="w-10 h-10 text-primary" />
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Add Metadata
                </h3>
                
                <p className="text-muted-foreground mb-8">
                  Provide additional information about your intellectual property for accurate valuation.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 text-left">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Title
                    </label>
                    <Input placeholder="Enter IP title" defaultValue="Summer Vibes (Master Rights)" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Creator
                    </label>
                    <Input placeholder="Creator name" defaultValue="Alex Rodriguez" />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Description
                    </label>
                    <Textarea 
                      placeholder="Describe your IP..." 
                      defaultValue="Electronic music track with commercial licensing potential. Previously featured in 3 indie films."
                      className="h-24"
                    />
                  </div>
                </div>

                <div className="bg-secondary/50 rounded-lg p-4 mb-8">
                  <div className="flex items-center space-x-2 mb-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="font-medium text-foreground">File Uploaded: {selectedFile}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Metadata extracted and verified. Ready for AI valuation.
                  </p>
                </div>

                <Button variant="cta" size="lg" onClick={generateValuation} disabled={isLoading}>
                  {isLoading ? "Analyzing..." : "Generate AI Valuation"}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            )}

            {step === 3 && (
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-10 h-10 text-primary" />
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  AI Valuation Complete
                </h3>
                
                <p className="text-muted-foreground mb-8">
                  Our AI has analyzed market data and generated a comprehensive valuation for your IP.
                </p>

                <div className="bg-gradient-primary rounded-2xl p-8 mb-8 text-primary-foreground">
                  <div className="text-6xl font-bold mb-2">
                    ${valuation.toLocaleString()}
                  </div>
                  <div className="text-lg opacity-90">Estimated Market Value</div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-secondary/50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-primary mb-2">85%</div>
                    <div className="text-sm text-muted-foreground">Confidence Score</div>
                  </div>
                  
                  <div className="bg-secondary/50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-primary mb-2">12-18%</div>
                    <div className="text-sm text-muted-foreground">Expected ROI</div>
                  </div>
                  
                  <div className="bg-secondary/50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-primary mb-2">A+</div>
                    <div className="text-sm text-muted-foreground">Risk Rating</div>
                  </div>
                </div>

                <Button variant="cta" size="lg" onClick={tokenizeAsset}>
                  Tokenize Asset
                  <Coins className="w-5 h-5 ml-2" />
                </Button>
              </div>
            )}

            {step === 4 && (
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-primary" />
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Tokenization Complete!
                </h3>
                
                <p className="text-muted-foreground mb-8">
                  Your IP has been successfully tokenized and is now available for fractional investment.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-secondary/50 rounded-lg p-6">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary/20 rounded-lg mx-auto mb-4">
                      <Coins className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="text-lg font-bold text-foreground mb-2">NFT Created</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Master NFT representing full ownership rights
                    </p>
                    <div className="text-sm text-primary font-medium">Token ID: #ART-001</div>
                  </div>
                  
                  <div className="bg-secondary/50 rounded-lg p-6">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary/20 rounded-lg mx-auto mb-4">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="text-lg font-bold text-foreground mb-2">Fractional Tokens</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      1,000 tokens available for investment
                    </p>
                    <div className="text-sm text-primary font-medium">$250 per token</div>
                  </div>
                </div>

                <div className="bg-gradient-primary rounded-lg p-6 mb-8 text-primary-foreground">
                  <h4 className="text-lg font-bold mb-4">Ready for Market</h4>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-xl font-bold">$250K</div>
                      <div className="text-sm opacity-90">Total Value</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold">1,000</div>
                      <div className="text-sm opacity-90">Tokens</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold">5%</div>
                      <div className="text-sm opacity-90">Platform Fee</div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="cta" size="lg">
                    List on Marketplace
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  
                  <Button variant="glass" size="lg" onClick={resetDemo}>
                    Try Another Demo
                  </Button>
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Demo;