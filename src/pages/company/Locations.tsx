
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SmartBreadcrumb } from "@/components/SmartBreadcrumb";

const Locations = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <SmartBreadcrumb />
      <main className="pt-8">
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold text-white mb-6">Locations</h1>
          <p className="text-gray-400 text-lg mb-8">
            Find us around the world with our global presence and local expertise.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Global Offices</h2>
              <ul className="space-y-2 text-gray-400">
                <li>• San Francisco, CA - Headquarters</li>
                <li>• New York, NY - East Coast Hub</li>
                <li>• London, UK - European Operations</li>
                <li>• Singapore - Asia Pacific</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Local Support</h2>
              <ul className="space-y-2 text-gray-400">
                <li>• Regional customer success teams</li>
                <li>• Local language support</li>
                <li>• Timezone-aligned service</li>
                <li>• Cultural expertise</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Locations;
