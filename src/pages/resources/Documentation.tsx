
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Documentation = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold text-white mb-6">Documentation</h1>
          <p className="text-gray-400 text-lg mb-8">
            Complete API documentation and integration guides for developers.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">API Documentation</h2>
              <ul className="space-y-2 text-gray-400">
                <li>• RESTful API endpoints</li>
                <li>• Authentication methods</li>
                <li>• Request/response examples</li>
                <li>• Rate limiting and best practices</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Integration Guides</h2>
              <ul className="space-y-2 text-gray-400">
                <li>• Platform-specific tutorials</li>
                <li>• SDK installation guides</li>
                <li>• Webhook configuration</li>
                <li>• Troubleshooting resources</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Documentation;
