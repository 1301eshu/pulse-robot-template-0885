
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { 
  Lightbulb, 
  Target, 
  TrendingUp, 
  BarChart3, 
  Users, 
  Globe,
  ArrowRight 
} from "lucide-react";

const GrowthLabs = () => {
  const labItems = [
    {
      title: "AI Experiments",
      description: "Cutting-edge AI solutions and experimental features",
      icon: Lightbulb,
      link: "/growth-labs/ai-experiments",
      category: "Innovation"
    },
    {
      title: "Beta Programs",
      description: "Early access to new features and tools",
      icon: Target,
      link: "/growth-labs/beta-programs",
      category: "Innovation"
    },
    {
      title: "Market Research",
      description: "Industry insights and trend analysis",
      icon: TrendingUp,
      link: "/growth-labs/market-research",
      category: "Research"
    },
    {
      title: "Case Studies",
      description: "Real-world success stories and implementations",
      icon: BarChart3,
      link: "/growth-labs/case-studies",
      category: "Research"
    },
    {
      title: "Developer Community",
      description: "Connect with fellow developers and innovators",
      icon: Users,
      link: "/growth-labs/developer-community",
      category: "Community"
    },
    {
      title: "Open Source",
      description: "Contribute to our open source projects",
      icon: Globe,
      link: "/growth-labs/open-source",
      category: "Community"
    }
  ];

  const categories = ["Innovation", "Research", "Community"];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-6">Growth Labs</h1>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Our innovation hub where we experiment with cutting-edge technologies, 
              conduct research, and build community around the future of growth marketing.
            </p>
          </div>

          {categories.map((category) => (
            <div key={category} className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-6 uppercase tracking-wide text-center">
                {category}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {labItems
                  .filter((item) => item.category === category)
                  .map((item) => (
                    <Link
                      key={item.title}
                      to={item.link}
                      className="group p-6 rounded-lg bg-gray-900/50 border border-gray-800 hover:border-blue-500 transition-all duration-300 hover:bg-gray-900/70"
                    >
                      <div className="flex items-start gap-4">
                        <item.icon className="w-8 h-8 text-blue-500 flex-shrink-0 mt-1" />
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-gray-400 mb-4">{item.description}</p>
                          <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                            <span className="text-sm font-medium">Explore</span>
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GrowthLabs;
