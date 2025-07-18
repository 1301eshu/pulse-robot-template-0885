
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Whitepapers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold text-white mb-6">Whitepapers</h1>
          <p className="text-gray-400 text-lg mb-8">
            In-depth research reports and comprehensive guides for strategic decision making.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Available Reports</h2>
              <ul className="space-y-2 text-gray-400">
                <li>• The Future of Marketing Automation</li>
                <li>• AI-Driven Growth Strategies</li>
                <li>• ROI Optimization in Digital Marketing</li>
                <li>• Building Scalable Revenue Operations</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Research Areas</h2>
              <ul className="space-y-2 text-gray-400">
                <li>• Market trends and predictions</li>
                <li>• Technology adoption patterns</li>
                <li>• Performance benchmarking</li>
                <li>• Strategic frameworks</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Whitepapers;
