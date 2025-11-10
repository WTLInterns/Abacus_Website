"use client";
import Button from "../components/Button";

export default function AbacusMath() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 text-blue-800 font-semibold text-sm">
                🚀 Transform Your Child's Learning
              </div>
              
              <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                IMPROVE YOUR CHILD'S
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mt-2">
                  MENTAL ARITHMETIC ABILITIES
                </span>
              </h1>
              
              <p className="text-2xl text-gray-700 font-semibold">
                YOUR CHILD CAN NOW BEAT THE CALCULATOR
              </p>
              
              <p className="text-gray-600 text-lg">
                Watch your child solve complex math problems faster than a calculator with our proven abacus training program.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button 
                  href="#"
                  onClick={() => window.dispatchEvent(new CustomEvent('open-enquiry-modal'))}
                  className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border-0 text-white font-bold px-8 py-4"
                >
                  🎯 Book Free Demo Class
                </Button>
                <Button href="/contact" variant="secondary" className="border-2 border-blue-300 text-blue-700 hover:bg-blue-50 hover:border-blue-400 transition-all duration-300 font-semibold px-8 py-4">
                  📞 Contact Us
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Child solving math with abacus"
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl px-4 py-3 shadow-lg border border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    M
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">Vertex Abacus</div>
                    <div className="text-xs text-gray-500">Proven Results</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Abacus Math */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ABACUS MATH FOR <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">KIDS</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed text-lg">
                Abacus Math is a revolutionary approach where children use the abacus tool to master arithmetic calculations. 
                Through systematic training, kids learn to solve addition, subtraction, multiplication, and division with remarkable speed and accuracy.
              </p>
              
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-3 text-lg">🧠 Mental Calculation Mastery</h3>
                <p className="text-gray-600 text-sm">
                  Children progress from using physical abacus to visualizing it mentally, performing complex calculations 
                  faster than electronic calculators through enhanced brain development.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white">
                    ⭐
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Optimal Learning Age</div>
                    <div className="text-sm text-gray-600">5-14 years for maximum brain development</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1580894894513-541e068a3e2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Children learning abacus together"
                className="w-full rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>


      {/* Why Choose Mastermind */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Happy students with abacus"
                className="w-full rounded-2xl shadow-xl"
              />
            </div>
            
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full bg-purple-100 px-4 py-2 text-purple-800 font-medium text-sm">
                🏆 Trusted Worldwide
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900">
                WHY CHOOSE <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">VERTEX ABACUS?</span>
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                  <p className="text-gray-700">
                    <span className="font-semibold">Over 20 years</span> of experience in abacus education globally
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                  <p className="text-gray-700">
                    <span className="font-semibold">2000+ franchise centers</span> across multiple countries
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                  <p className="text-gray-700">
                    <span className="font-semibold">World's first live online platform</span> with proven results
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <p className="text-gray-700 text-center font-semibold">
                  "Online classes as effective as traditional classroom learning"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Class Options */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              CHOOSE YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">LEARNING PATH</span>
            </h2>
            <p className="text-gray-600">Flexible options to suit every family's needs</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Offline Classes */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 shadow-xl border-2 border-blue-200">
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">🏫</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">OFFLINE CLASSES</h3>
                <p className="text-gray-600">Traditional classroom experience</p>
              </div>
              
              <p className="text-gray-700 text-center mb-6">
                With over 2000 centers worldwide, find a location near you. Get personalized attention in our interactive classroom environment.
              </p>
              
              <Button 
                href="#"
                onClick={() => window.dispatchEvent(new CustomEvent('open-enquiry-modal'))}
                className="w-full bg-blue-500 hover:bg-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border-0 text-white font-bold py-4"
              >
                📍 Enquire About Offline Classes
              </Button>
            </div>

            {/* Online Classes */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-xl border-2 border-purple-200">
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">💻</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">ONLINE CLASSES</h3>
                <p className="text-gray-600">Learn from anywhere, anytime</p>
              </div>
              
              <p className="text-gray-700 text-center mb-6">
                Experience our world-class e-learning platform with live interactive sessions. Same quality, greater convenience.
              </p>
              
              <Button 
                href="#"
                onClick={() => window.dispatchEvent(new CustomEvent('open-enquiry-modal'))}
                className="w-full bg-purple-500 hover:bg-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border-0 text-white font-bold py-4"
              >
                🎯 Book Free Online Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}