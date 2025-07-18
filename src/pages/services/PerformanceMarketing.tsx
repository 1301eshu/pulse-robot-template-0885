
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PerformanceMarketing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold text-white mb-6">Performance Marketing</h1>
          <p className="text-gray-400 text-lg mb-8">
            ML-optimized advertising strategies that deliver measurable results.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Channels</h2>
              <ul className="space-y-2 text-gray-400">
                <li>• Google Ads optimization</li>
                <li>• Facebook & Instagram ads</li>
                <li>• LinkedIn advertising</li>
                <li>• Programmatic display</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Optimization</h2>
              <ul className="space-y-2 text-gray-400">
                <li>• AI-powered bid management</li>
                <li>• Creative testing at scale</li>
                <li>• Audience optimization</li>
                <li>• Cross-channel attribution</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PerformanceMarketing;
