
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SmartBreadcrumb } from "@/components/SmartBreadcrumb";

const AiRevops = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <SmartBreadcrumb />
      <main className="pt-8">
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold text-white mb-6">AI-Led RevOps</h1>
          <p className="text-gray-400 text-lg mb-8">
            Revenue operations powered by AI insights to optimize your entire revenue funnel.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Our Approach</h2>
              <ul className="space-y-2 text-gray-400">
                <li>• Revenue forecasting with AI</li>
                <li>• Sales process optimization</li>
                <li>• Performance analytics</li>
                <li>• Pipeline management</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Results</h2>
              <ul className="space-y-2 text-gray-400">
                <li>• 30% increase in revenue predictability</li>
                <li>• Faster sales cycles</li>
                <li>• Improved team productivity</li>
                <li>• Data-driven decisions</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AiRevops;
