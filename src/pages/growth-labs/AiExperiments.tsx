
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AiExperiments = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold text-white mb-6">AI Experiments</h1>
          <p className="text-gray-400 text-lg mb-8">
            Cutting-edge AI solutions and experimental technologies for the future of business.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Current Experiments</h2>
              <ul className="space-y-2 text-gray-400">
                <li>• GPT-powered customer insights</li>
                <li>• Predictive analytics models</li>
                <li>• Automated content generation</li>
                <li>• Smart recommendation engines</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Beta Features</h2>
              <ul className="space-y-2 text-gray-400">
                <li>• AI-driven A/B testing</li>
                <li>• Intelligent lead scoring</li>
                <li>• Conversational analytics</li>
                <li>• Dynamic personalization</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AiExperiments;
