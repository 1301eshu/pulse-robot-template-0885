import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, BarChart3, Target, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE_CTA } from "@/components/SITE_CTAs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const DiGGrowth = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              DiGGrowth
            </h1>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              A no-code marketing analytics platform that transforms your data into actionable insights
            </p>
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Platform Features
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Powerful analytics tools designed for marketers, by marketers
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <BarChart3 className="w-6 h-6 text-purple-600" />
                  </div>
                  <CardTitle>Real-time Analytics</CardTitle>
                  <CardDescription>
                    Monitor your marketing performance with real-time dashboards and insights
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Target className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle>Attribution Modeling</CardTitle>
                  <CardDescription>
                    Track customer journeys and attribute conversions across all touchpoints
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-green-600" />
                  </div>
                  <CardTitle>No-Code Setup</CardTitle>
                  <CardDescription>
                    Get started in minutes with our intuitive drag-and-drop interface
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
              Ready to Transform Your Analytics?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of marketers who trust DiGGrowth for their data needs
            </p>
            <SITE_CTA 
              variant="primary" 
              text="Start Free Trial" 
              href="/contact-us"
              size="lg"
              className="mr-4"
            />
            <SITE_CTA 
              variant="secondary" 
              text="Schedule Demo" 
              href="/contact-us"
              size="lg"
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DiGGrowth;