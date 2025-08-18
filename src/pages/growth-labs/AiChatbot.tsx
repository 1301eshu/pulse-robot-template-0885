import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SmartBreadcrumb } from "@/components/SmartBreadcrumb";

const AiChatbot = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <SmartBreadcrumb />
      <main className="pt-8">
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold text-white mb-6">AI Chatbot</h1>
          <p className="text-gray-400 text-lg mb-8">
            Intelligent conversational AI solutions to enhance customer engagement and support.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Key Features</h2>
              <ul className="space-y-2 text-gray-400">
                <li>• Natural language processing</li>
                <li>• Multi-platform integration</li>
                <li>• 24/7 customer support automation</li>
                <li>• Personalized conversation flows</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Use Cases</h2>
              <ul className="space-y-2 text-gray-400">
                <li>• Customer service assistance</li>
                <li>• Lead qualification and nurturing</li>
                <li>• Product recommendations</li>
                <li>• FAQ automation</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AiChatbot;