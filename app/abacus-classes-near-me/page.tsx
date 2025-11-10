"use client";
import Button from "../components/Button";
import { useState } from 'react';

export default function AbacusClassesNearMe() {
  const [location, setLocation] = useState('');
  const [centers, setCenters] = useState([
    {
      id: 1,
      name: "Vertex Abacus Center - Main Branch",
      address: "123 Education Street, Sector 15, Delhi",
      distance: "1.2 km",
      rating: 4.8,
      students: 120,
      phone: "+91 9876543210"
    },
    {
      id: 2,
      name: "Vertex Abacus - West Campus",
      address: "456 Learning Avenue, West Delhi",
      distance: "2.5 km",
      rating: 4.7,
      students: 85,
      phone: "+91 9876543211"
    },
    {
      id: 3,
      name: "Vertex Abacus - South Center",
      address: "789 Knowledge Road, South Delhi",
      distance: "3.8 km",
      rating: 4.9,
      students: 95,
      phone: "+91 9876543212"
    }
  ]);

  const handleSearch = () => {
  
    // In real implementation, this would call an API
    console.log('Searching for centers near:', location);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
       <section 
        className="relative py-20 text-white bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1497636577773-f1231844b336?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-purple-600/80"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
              Find Abacus Classes <span className="text-yellow-300">Near You</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto text-lg">
              Discover certified abacus centers with expert instructors in your neighborhood. 
              Safe, engaging classrooms that inspire confidence and teamwork.
            </p>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Abacus Centers Near You</h2>
            <p className="mt-2 text-gray-600">Certified centers with experienced instructors</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {centers.map((center) => (
              <div key={center.id} className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 transform hover:scale-105">
                <div className="p-6">
                  {/* Center Header */}
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{center.name}</h3>
                    <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                      {center.distance}
                    </span>
                  </div>

                  {/* Address */}
                  <div className="flex items-center gap-2 text-gray-600 mb-4">
                    <span>📍</span>
                    <p className="text-sm">{center.address}</p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{center.rating}</div>
                      <div className="text-xs text-gray-500">Rating</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{center.students}+</div>
                      <div className="text-xs text-gray-500">Students</div>
                    </div>
                  </div>

                  {/* Contact & Actions */}
                  <div className="space-y-3">
                    <a 
                      href={`tel:${center.phone}`} 
                      className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 rounded-xl text-center block transition-all duration-300"
                    >
                      📞 Call Center
                    </a>
                    <Button 
                      href="#" 
                      onClick={() => window.dispatchEvent(new CustomEvent('open-enquiry-modal'))}
                      variant="secondary" 
                      className="w-full border-2 border-gray-300 text-gray-700 hover:border-blue-300 hover:bg-blue-50"
                    >
                      📝 Enquire Now
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results State */}
          {centers.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No centers found</h3>
              <p className="text-gray-600 mb-6">Try searching with a different location or check back later for new centers.</p>
              <Button href="/contact" className="bg-blue-500 hover:bg-blue-600 text-white">
                Request Center in Your Area
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-500 to-emerald-600 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Can't Find a Center Near You?</h2>
          <p className="text-green-100 text-lg mb-8">
            Join our online classes with the same quality instruction from the comfort of your home.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              href="/abacus-online-classes" 
              variant="secondary" 
              className="bg-white text-green-600 hover:bg-gray-100 font-semibold"
            >
              🌐 Explore Online Classes
            </Button>
            <Button 
              href="#" 
              onClick={() => window.dispatchEvent(new CustomEvent('open-enquiry-modal'))}
              className="bg-black text-white hover:bg-gray-800 font-semibold border-0"
            >
              💬 Contact for New Center
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Our Centers?</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: "👨‍🏫",
                title: "Certified Instructors",
                description: "All our teachers are certified abacus experts with years of experience"
              },
              {
                icon: "🏫",
                title: "Safe Environment",
                description: "Child-friendly classrooms with safety protocols and parent waiting areas"
              },
              {
                icon: "📚",
                title: "Proven Curriculum",
                description: "Structured 8-level program with proven results across thousands of students"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}