import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Truck, Zap, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const NetworkON = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              NetworkON
            </h1>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              AI-driven logistics optimization platform that revolutionizes supply chain management
            </p>
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              Optimize Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Logistics Intelligence
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Harness the power of AI to optimize your logistics operations
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <Truck className="w-6 h-6 text-green-600" />
                  </div>
                  <CardTitle>Route Optimization</CardTitle>
                  <CardDescription>
                    AI-powered route planning that reduces costs and improves delivery times
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle>Real-time Tracking</CardTitle>
                  <CardDescription>
                    Monitor shipments and fleet performance with live updates and alerts
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <BarChart3 className="w-6 h-6 text-purple-600" />
                  </div>
                  <CardTitle>Predictive Analytics</CardTitle>
                  <CardDescription>
                    Forecast demand and optimize inventory with machine learning algorithms
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Revolutionize Your Logistics?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join industry leaders who trust NetworkON for logistics optimization
            </p>
            <Button size="lg" className="mr-4">
              Get Started
            </Button>
            <Button size="lg" variant="outline">
              Request Demo
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default NetworkON;