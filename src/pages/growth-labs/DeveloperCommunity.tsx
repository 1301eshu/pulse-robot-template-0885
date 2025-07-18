
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const DeveloperCommunity = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold text-white mb-6">Developer Community</h1>
          <p className="text-gray-400 text-lg mb-8">
            Connect with fellow developers, share knowledge, and collaborate on innovative projects.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Community Features</h2>
              <ul className="space-y-2 text-gray-400">
                <li>• Developer forums and discussions</li>
                <li>• Code sharing and collaboration</li>
                <li>• Technical workshops and webinars</li>
                <li>• Hackathons and coding challenges</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Resources</h2>
              <ul className="space-y-2 text-gray-400">
                <li>• API documentation and guides</li>
                <li>• SDK downloads and tools</li>
                <li>• Best practices and tutorials</li>
                <li>• Developer support and Q&A</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DeveloperCommunity;
