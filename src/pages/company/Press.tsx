
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Press = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold text-white mb-6">Press & Media</h1>
          <p className="text-gray-400 text-lg mb-8">
            Press releases, media kit, and latest company news for journalists and media partners.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Recent News</h2>
              <ul className="space-y-2 text-gray-400">
                <li>• Series B funding announcement</li>
                <li>• New AI-powered features launch</li>
                <li>• Strategic partnership with major CRM</li>
                <li>• Industry awards and recognition</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Media Resources</h2>
              <ul className="space-y-2 text-gray-400">
                <li>• High-resolution logos and images</li>
                <li>• Executive bios and headshots</li>
                <li>• Company fact sheet</li>
                <li>• Media contact information</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Press;
