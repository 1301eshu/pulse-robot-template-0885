import { Zap, Target, Rocket } from 'lucide-react';

export default function FullStackFirepower() {
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Full-Stack Integration",
      description: "End-to-end solutions that connect every touchpoint in your growth funnel."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "AI-Native Execution",
      description: "Intelligence-first approach to growth optimization and decision making."
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Full-Funnel Growth",
      description: "Comprehensive growth strategies from awareness to retention and beyond."
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-background to-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Full-Stack Firepower.{" "}
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              AI-Native Execution
            </span>{" "}
            for Full-Funnel Growth
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We don't just build campaigns—we architect growth ecosystems. Every integration, every automation, every insight is designed to compound your results across the entire customer journey.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-6 group-hover:bg-primary/20 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 rounded-full border border-primary/20 mb-8">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-primary font-medium">Ready to Scale?</span>
          </div>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Transform your growth strategy with AI-powered solutions that deliver measurable results across every funnel stage.
          </p>
        </div>
      </div>
    </section>
  );
}