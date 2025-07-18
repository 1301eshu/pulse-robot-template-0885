
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Support = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold text-white mb-6">Help Center</h1>
          <p className="text-gray-400 text-lg mb-8">
            Get help when you need it with our comprehensive support resources.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Support Channels</h2>
              <ul className="space-y-2 text-gray-400">
                <li>• 24/7 live chat support</li>
                <li>• Email ticket system</li>
                <li>• Phone support for enterprise</li>
                <li>• Community forums</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Resources</h2>
              <ul className="space-y-2 text-gray-400">
                <li>• FAQ and knowledge base</li>
                <li>• Video tutorials and guides</li>
                <li>• Troubleshooting documentation</li>
                <li>• Training and certification</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Support;
