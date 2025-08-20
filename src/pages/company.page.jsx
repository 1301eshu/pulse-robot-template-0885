import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SmartBreadcrumb } from "@/components/SmartBreadcrumb";
import { ArrowRight, Building, Users, TrendingUp, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Company = () => {
  const companyPages = [
    {
      title: "About Us",
      description: "Learn about our mission, vision, and the story behind GrowthNatives",
      icon: <Building className="w-6 h-6 text-blue-600" />,
      link: "/company/about",
      color: "bg-blue-100"
    },
    {
      title: "Leadership Team", 
      description: "Meet the experienced leaders driving our company forward",
      icon: <Users className="w-6 h-6 text-purple-600" />,
      link: "/company/team",
      color: "bg-purple-100"
    },
    {
      title: "Careers",
      description: "Join our team and help shape the future of marketing technology",
      icon: <TrendingUp className="w-6 h-6 text-green-600" />,
      link: "/company/careers", 
      color: "bg-green-100"
    },
    {
      title: "Locations",
      description: "Find our offices around the world and connect with local teams",
      icon: <MapPin className="w-6 h-6 text-orange-600" />,
      link: "/company/locations",
      color: "bg-orange-100"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <SmartBreadcrumb />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About GrowthNatives
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              We're on a mission to democratize growth through innovative marketing technology and strategic expertise
            </p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Learn Our Story
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-muted-foreground">Clients Served</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-600 mb-2">$2B+</div>
                <div className="text-muted-foreground">Revenue Generated</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-600 mb-2">10+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-orange-600 mb-2">200+</div>
                <div className="text-muted-foreground">Team Members</div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Pages Grid */}
        <section className="py-20 bg-muted">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Get to Know Us
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Explore different aspects of our company and what makes us unique
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {companyPages.map((page, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className={`w-12 h-12 ${page.color} rounded-lg flex items-center justify-center mb-4`}>
                      {page.icon}
                    </div>
                    <CardTitle className="text-xl mb-2">{page.title}</CardTitle>
                    <CardDescription>{page.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link to={page.link}>
                      <Button variant="outline" className="w-full">
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how we can help accelerate your business growth
            </p>
            <Link to="/contact">
              <Button size="lg" className="mr-4">
                Contact Us
              </Button>
            </Link>
            <Link to="/company/careers">
              <Button size="lg" variant="outline">
                Join Our Team
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Company;