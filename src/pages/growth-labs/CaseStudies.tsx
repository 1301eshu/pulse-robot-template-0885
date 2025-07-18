
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold text-white mb-6">Case Studies</h1>
          <p className="text-gray-400 text-lg mb-8">
            Real-world success stories showcasing our clients' growth achievements.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Featured Studies</h2>
              <ul className="space-y-2 text-gray-400">
                <li>• 300% ROI increase with automation</li>
                <li>• 50% reduction in lead acquisition cost</li>
                <li>• 2x improvement in conversion rates</li>
                <li>• 80% increase in customer lifetime value</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Industries</h2>
              <ul className="space-y-2 text-gray-400">
                <li>• SaaS and technology</li>
                <li>• E-commerce and retail</li>
                <li>• Healthcare and biotech</li>
                <li>• Financial services</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudies;
