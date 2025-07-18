
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const RoiCalculator = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold text-white mb-6">ROI Calculator</h1>
          <p className="text-gray-400 text-lg mb-8">
            Calculate your potential returns from marketing automation and growth initiatives.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Calculate ROI For</h2>
              <ul className="space-y-2 text-gray-400">
                <li>• Marketing automation implementation</li>
                <li>• CRM system optimization</li>
                <li>• Performance marketing campaigns</li>
                <li>• AI-powered analytics tools</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Key Metrics</h2>
              <ul className="space-y-2 text-gray-400">
                <li>• Cost savings from automation</li>
                <li>• Revenue increase projections</li>
                <li>• Time-to-value estimates</li>
                <li>• Break-even analysis</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RoiCalculator;
