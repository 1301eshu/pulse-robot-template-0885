import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const LocationsSection = () => {
  const locations = [
    {
      city: "New York",
      address: "123 Broadway, Suite 500",
      zipCode: "New York, NY 10001",
      phone: "+1 (555) 123-4567",
      email: "ny@growthnatives.com"
    },
    {
      city: "San Francisco",
      address: "456 Market Street, Floor 12",
      zipCode: "San Francisco, CA 94102",
      phone: "+1 (555) 987-6543",
      email: "sf@growthnatives.com"
    },
    {
      city: "London",
      address: "789 Oxford Street, Level 3",
      zipCode: "London, W1A 0AA, UK",
      phone: "+44 20 7123 4567",
      email: "london@growthnatives.com"
    }
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Locations</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We're growing globally with offices in key markets to better serve our clients.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold">{location.city}</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <p className="text-gray-700 font-medium">{location.address}</p>
                  <p className="text-gray-600">{location.zipCode}</p>
                </div>
                
                <div className="flex items-center text-gray-700">
                  <Phone className="w-4 h-4 mr-3 text-blue-600" />
                  <span>{location.phone}</span>
                </div>
                
                <div className="flex items-center text-gray-700">
                  <Mail className="w-4 h-4 mr-3 text-blue-600" />
                  <span>{location.email}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;