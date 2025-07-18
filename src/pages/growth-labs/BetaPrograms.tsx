
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BetaPrograms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold text-white mb-6">Beta Programs</h1>
          <p className="text-gray-400 text-lg mb-8">
            Get early access to new features and help shape the future of our platform.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Current Beta Programs</h2>
              <ul className="space-y-2 text-gray-400">
                <li>• Advanced automation workflows</li>
                <li>• Next-gen analytics dashboard</li>
                <li>• AI-powered insights engine</li>
                <li>• Enhanced CRM integrations</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Benefits</h2>
              <ul className="space-y-2 text-gray-400">
                <li>• First access to new features</li>
                <li>• Direct feedback to product team</li>
                <li>• Exclusive community access</li>
                <li>• Special pricing for early adopters</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BetaPrograms;
