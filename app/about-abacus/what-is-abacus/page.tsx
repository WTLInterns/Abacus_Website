

"use client";
import Button from "@/app/components/Button";

export default function WhatIsAbacus() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with Abacus Background */}
      <section 
        className="relative py-20 text-white bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80")'
        }}
      >
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 text-sm font-medium text-white mb-6 border border-white/30">
              🧮 Ancient Wisdom, Modern Skills
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
              Abacus is a 3000 years old
              <span className="block text-yellow-300 mt-2">Ancient calculating Device</span>
            </h1>
            
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              THAT TRAINS YOUR CHILD to perform Mental Math with great speed and accuracy.
            </p>
            
            <Button href="EXTERNAL_FORM" className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border-0 font-bold px-8 py-4 text-lg">
              🎯 Book A Free Demo Class
            </Button>
          </div>
        </div>
      </section>

      {/* What is Abacus Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-blue-800 font-medium text-sm mb-4">
                🧠 Brain Development
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900">
                WHAT IS ABACUS? THE GATEWAY TO MENTAL MATH MASTERY
              </h2>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  The abacus, a time-honored tool for calculation, is traditionally made up of a rectangular frame 
                  containing several rods, each lined with beads. These beads are slid along the rods to represent 
                  numbers and facilitate various arithmetic operations.
                </p>
                
                <p>
                  In modern times, the abacus has found a new role as a tool for enhancing brain development in children. 
                  It has been particularly effective in improving mental math skills, capturing worldwide attention for 
                  its remarkable benefits in this area.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1587668178277-295251f900ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Abacus Tool"
                  className="w-full h-80 object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl px-6 py-4 shadow-lg border border-gray-100">
                <div className="text-center">
                  <div className="text-2xl text-blue-600 font-bold">🧩</div>
                  <div className="font-bold text-gray-900 text-sm">Brain Development</div>
                  <div className="text-xs text-gray-500">System</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Abacus: Brain-Boosting System */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Abacus: A <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Brain-Boosting System</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Child using abacus"
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
            
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed text-lg">
                Recognized globally as a <span className="font-bold text-blue-600">'Holistic Brain Development System,'</span> the abacus is more than just a counting tool. It's a brain enhancer!
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                Kids using the abacus demonstrate amazing mental math abilities, dazzling everyone with their speed and accuracy. 
                Research shows that children aged 5 to 14 benefit the most from abacus training.
              </p>
              
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-bold">✓</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Optimal Age Range</div>
                    <div className="text-sm text-gray-600">5 to 14 years old</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Does Abacus Work */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full bg-purple-100 px-4 py-2 text-purple-800 font-medium text-sm mb-4">
                ⚡ How It Works
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900">
                How Does the Abacus Work?
              </h2>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Ever wondered how this simple tool can be so powerful in math? The abacus makes all arithmetic 
                  calculations like addition, subtraction, multiplication, and division a breeze.
                </p>
                
                <p>
                  But there's more – it's also adept at handling decimal calculations and negative numbers. The secret 
                  lies in moving its beads up and down. Each bead's position represents a specific value, and by 
                  skillfully manipulating them, you can perform complex calculations with ease and speed.
                </p>
                
                <p className="font-semibold text-purple-600">
                  It's not just a tool; it's a brain exercise that enhances your numerical agility.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-8 text-white shadow-2xl">
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold mb-4">Mathematical Operations</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-center">
                {['➕ Addition', '➖ Subtraction', '✖️ Multiplication', '➗ Division'].map((op, index) => (
                  <div key={index} className="bg-white/20 rounded-lg p-3 backdrop-blur-sm">
                    <div className="font-semibold">{op}</div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 text-center text-purple-100 text-sm">
                Plus: Decimal calculations & Negative numbers
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Power of Learning Abacus */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Power of Learning</span> Abacus
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 text-xl">👨‍⚕️</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Expert Insight</h3>
                  <p className="text-gray-600 text-sm">Dr. Toshio Hayashi, Brain Development Expert</p>
                </div>
              </div>
              
              <p className="text-gray-700 leading-relaxed">
                "Starting abacus learning early is key to activating a child's brain. When kids use an abacus, 
                they engage both hands, sparking activity in various brain regions. This leads to enhanced 
                whole-brain functioning and a sharper intellect."
              </p>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900">Dual Brain Activation</h3>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: '👈', label: 'Left Hand', desc: 'Right Brain' },
                  { icon: '👉', label: 'Right Hand', desc: 'Left Brain' }
                ].map((hand, index) => (
                  <div key={index} className="bg-white rounded-xl p-4 text-center shadow-lg border border-gray-100">
                    <div className="text-2xl mb-2">{hand.icon}</div>
                    <div className="font-bold text-gray-900">{hand.label}</div>
                    <div className="text-sm text-gray-600">{hand.desc}</div>
                  </div>
                ))}
              </div>
              
              <p className="text-gray-600 text-sm text-center">
                Both hands movement activates complete brain development
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Benefits of <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Abacus Training</span>
            </h2>
            <p className="text-xl text-gray-600">Abacus isn't just about numbers; it's a tool for overall brain enhancement</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "🎨", title: "Visualization", description: "Boosts imagination and mental imagery" },
              { icon: "🎯", title: "Concentration", description: "Sharpens focus and attention span" },
              { icon: "🧩", title: "Logical Thinking", description: "Encourages problem-solving skills" },
              { icon: "💾", title: "Memory", description: "Enhances recall abilities" },
              { icon: "📈", title: "Academic Performance", description: "Outperform peers in academics" },
              { icon: "🌟", title: "Cognitive Skills", description: "Superior overall brain development" }
            ].map((benefit, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <div className="text-3xl mb-4">{benefit.icon}</div>
                <h3 className="font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-8 text-white shadow-2xl max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Proven Results</h3>
              <p className="text-green-100 mb-4">
                Studies confirm that kids who learn abacus outperform their peers in academics, 
                showcasing superior cognitive skills. With these benefits, abacus learners scored 
                higher than non-abacus learners.
              </p>
              <div className="text-3xl font-bold">📊 +27%</div>
              <div className="text-green-200 text-sm">Higher Academic Performance</div>
            </div>
          </div>
        </div>
      </section>

      {/* Choose Your Class Type */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              MAKE YOUR CHOICE, JOIN <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">OFFLINE OR ONLINE</span> ABACUS CLASS
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Offline Classes */}
            <div className="bg-white rounded-2xl p-8 shadow-2xl border-2 border-blue-200 transform hover:scale-105 transition-all duration-300">
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">🏫</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">OFFLINE CLASSES</h3>
                <p className="text-gray-600">Learn in traditional classroom setting</p>
              </div>
              
              <div className="space-y-4 mb-6">
                <p className="text-gray-700 text-center">
                  With over 2000 Abacus centers globally, we're easy to find. For offline classes near you, 
                  inquire now, and we'll provide details of the nearest center.
                </p>
              </div>
              
              <Button href="EXTERNAL_FORM" className="w-full bg-blue-500 hover:bg-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border-0 text-white font-bold py-4">
                📍 RAISE AN INQUIRY
              </Button>
              <div className="text-center mt-3 text-sm text-gray-500">For Offline Classes</div>
            </div>

            {/* Online Classes */}
            <div className="bg-white rounded-2xl p-8 shadow-2xl border-2 border-purple-200 transform hover:scale-105 transition-all duration-300">
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">💻</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">ONLINE CLASSES</h3>
                <p className="text-gray-600">Learn from anywhere in the world</p>
              </div>
              
              <div className="space-y-4 mb-6">
                <p className="text-gray-700 text-center">
                  For Online Abacus Classes reach the World's finest Abacus E-Learning Platform of Mastermind Abacus. 
                  Book a free demo class and get a firsthand experience.
                </p>
              </div>
              
              <Button href="EXTERNAL_FORM" className="w-full bg-purple-500 hover:bg-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border-0 text-white font-bold py-4">
                🎯 BOOK A FREE DEMO CLASS
              </Button>
              <div className="text-center mt-3 text-sm text-gray-500">For Online Classes</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}