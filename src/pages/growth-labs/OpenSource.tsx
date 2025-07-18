
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const OpenSource = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold text-white mb-6">Open Source</h1>
          <p className="text-gray-400 text-lg mb-8">
            Contribute to our open source projects and help build the future of growth technology.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Our Projects</h2>
              <ul className="space-y-2 text-gray-400">
                <li>• Growth tracking libraries</li>
                <li>• Marketing automation tools</li>
                <li>• Analytics and reporting widgets</li>
                <li>• CRM integration connectors</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">How to Contribute</h2>
              <ul className="space-y-2 text-gray-400">
                <li>• Fork repositories on GitHub</li>
                <li>• Submit pull requests</li>
                <li>• Report bugs and issues</li>
                <li>• Suggest new features</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OpenSource;
