import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Video, Palette, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const PixelDino = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-orange-600 to-pink-600">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Pixel Dino
            </h1>
            <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
              Creative video production & design studio bringing your brand stories to life
            </p>
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
              Start Creating
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Creative Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From concept to creation, we bring your vision to life
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <Video className="w-6 h-6 text-orange-600" />
                  </div>
                  <CardTitle>Video Production</CardTitle>
                  <CardDescription>
                    Professional video content for marketing, training, and brand storytelling
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                    <Palette className="w-6 h-6 text-pink-600" />
                  </div>
                  <CardTitle>Motion Graphics</CardTitle>
                  <CardDescription>
                    Engaging animations and motion graphics that captivate your audience
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <Camera className="w-6 h-6 text-purple-600" />
                  </div>
                  <CardTitle>Brand Design</CardTitle>
                  <CardDescription>
                    Complete brand identity and visual design solutions for your business
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
              Ready to Create Something Amazing?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's bring your creative vision to life with Pixel Dino
            </p>
            <Button size="lg" className="mr-4">
              Start Project
            </Button>
            <Button size="lg" variant="outline">
              View Portfolio
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PixelDino;