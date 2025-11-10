"use client";
import Button from "../components/Button";

export default function AbacusForSchools() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section with Pencil Theme */}
      <section className="relative py-20 bg-white">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmMWY1ZjkiIGZpbGwtb3BhY2l0eT0iMC40Ij48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-100 to-purple-100 px-6 py-3 text-blue-800 font-semibold text-sm border border-blue-200">
                🏫 School Partnership Program
              </div>
              
              <h1 className="text-5xl font-bold tracking-tight text-gray-900">
                START ABACUS CLASSES
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mt-2">
                  IN YOUR SCHOOL
                </span>
              </h1>
              
              <div className="space-y-4">
                <p className="text-xl text-gray-600 font-medium">
                  A Budget-Friendly Abacus Program
                </p>
                <p className="text-lg text-gray-500">
                  Exclusively Designed For Your School
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <Button 
                  href="#"
                  onClick={() => window.dispatchEvent(new CustomEvent('open-enquiry-modal'))}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border-0 text-white font-bold px-8 py-4 text-lg"
                >
                  📝 INQUIRE NOW
                </Button>
                <Button href="/contact" variant="secondary" className="border-2 border-gray-300 text-gray-700 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 font-semibold px-8 py-4 text-lg">
                  📞 Contact Us
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                {[
                  { number: "2000+", label: "Centers" },
                  { number: "16+", label: "Countries" },
                  { number: "100K+", label: "Students" }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{stat.number}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - School Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" 
                  alt="School Children Learning"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                
                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 bg-white rounded-xl px-4 py-3 shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                      M
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-sm">Vertex Abacus</div>
                      <div className="text-xs text-gray-500">Trusted by Schools Worldwide</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-10"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-blue-400 rounded-full opacity-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Abacus for School Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              WHY <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">ABACUS FOR SCHOOL?</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed text-lg">
                Why Abacus for School? It is a unique program offering multiple lifetime skills for the students, 
                along with developing their Mental Math skills.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                Not all aspiring students get a chance to join Abacus classes run by other Abacus Training centers. 
                <span className="font-semibold text-blue-600"> Affordability & lack of time</span> are two of the prime reasons.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                If introduced in the school curriculum as a regular subject, all the Students from classes 1st - 5th 
                will benefit at a very cost effective price. Moreover, school teachers can teach Abacus in the regular 
                school curriculum.
              </p>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80" 
                alt="Children in Classroom"
                className="w-full rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg font-bold">
                🧠 Mental Math Development
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Mastermind Abacus - Pencil Themed Layout */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              WHY <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Vertex Abacus</span> FOR YOUR SCHOOL?
            </h2>
            <p className="text-gray-600">Join 2000+ centers across 16 countries</p>
          </div>

          {/* Pencil-themed grid layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🌍",
                title: "Global Presence",
                description: "2000+ centers across 16 countries, widely accepted in schools"
              },
              {
                icon: "📚",
                title: "Sync with School Curriculum",
                description: "Abacus Math Training in sync with school calculation method"
              },
              {
                icon: "👩‍🏫",
                title: "Quality Teacher Training",
                description: "Excellent quality teachers training with multiple modes"
              },
              {
                icon: "📱",
                title: "Teachers Training App",
                description: "Dedicated app for all our Abacus Teachers"
              },
              {
                icon: "🎯",
                title: "Proven Results",
                description: "Excellent delivery of concepts with students"
              },
              {
                icon: "📊",
                title: "Student Assessment",
                description: "Exclusive app with online exams & real-time assessment"
              },
              {
                icon: "🎨",
                title: "Engaging Materials",
                description: "Indigenous, multicolor books to keep students interested"
              },
              {
                icon: "🏆",
                title: "Competitions",
                description: "State, National and International Abacus Competitions"
              },
              {
                icon: "🛡️",
                title: "24/7 Support",
                description: "Backup team for uncompromised services to associates"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-l-4 border-yellow-400"
              >
                {/* Pencil tip effect */}
                <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-4 h-8 bg-yellow-400 rounded-r-full"></div>
                
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits for Students */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2022&q=80" 
                alt="Happy Students"
                className="w-full rounded-2xl shadow-xl"
              />
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Benefits for <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Your Students</span>
              </h3>
              
              <div className="space-y-4">
                {[
                  "🧮 Improved Mental Math Skills",
                  "🎯 Better Concentration & Focus",
                  "🚀 Enhanced Problem-Solving Abilities",
                  "💡 Creative Thinking Development",
                  "📈 Academic Performance Boost",
                  "😊 Increased Confidence in Math"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <span className="text-green-500 text-lg">✓</span>
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Simple <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Partnership Process</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Initial Inquiry",
                description: "Contact us for partnership details"
              },
              {
                step: "02",
                title: "Teacher Training",
                description: "We train your school teachers"
              },
              {
                step: "03",
                title: "Curriculum Setup",
                description: "Implement in school timetable"
              },
              {
                step: "04",
                title: "Launch Program",
                description: "Start abacus classes for students"
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4 shadow-lg">
                  {step.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
}