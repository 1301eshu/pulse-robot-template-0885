
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const MarketResearch = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold text-white mb-6">Market Research</h1>
          <p className="text-gray-400 text-lg mb-8">
            Industry insights and trends to help you stay ahead of the competition.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Research Areas</h2>
              <ul className="space-y-2 text-gray-400">
                <li>• MarTech trends and adoption</li>
                <li>• Customer behavior analytics</li>
                <li>• Industry benchmarking</li>
                <li>• Competitive analysis</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Research Formats</h2>
              <ul className="space-y-2 text-gray-400">
                <li>• Quarterly industry reports</li>
                <li>• Custom research studies</li>
                <li>• Market surveys and polls</li>
                <li>• Trend analysis dashboards</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MarketResearch;
