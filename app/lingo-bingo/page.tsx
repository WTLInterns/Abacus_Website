"use client";
import Button from "../components/Button";
import { useState, useEffect } from 'react';

type NumberType = {
  num: number;
  text: string;
};

type ButtonProps = {
  href: string;
  className: string;
  variant?: string;
  children: React.ReactNode;
};

export default function LingoBingo() {
  const [activeFeature, setActiveFeature] = useState<number>(0);
  const [clickedNumbers, setClickedNumbers] = useState<number[]>([]);
  const [showMagic, setShowMagic] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleNumberClick = (number: number) => {
    // Add number to clicked numbers
    setClickedNumbers(prev => [...prev, number]);
    
    // Show magic effect
    setShowMagic(true);
    
    // Hide magic effect after 2 seconds
    setTimeout(() => {
      setShowMagic(false);
    }, 2000);

    // Speak the number (text-to-speech)
    if ('speechSynthesis' in window) {
      const speech = new SpeechSynthesisUtterance();
      speech.text = number.toString();
      speech.rate = 0.8;
      speech.pitch = 1.2;
      window.speechSynthesis.speak(speech);
    }

    // Visual feedback - you'll see the number animate
    console.log(`Magic number ${number} clicked!`);
  };

  const getNumberColor = (number: number): string => {
    const colors = [
      'from-red-100 to-pink-100',
      'from-blue-100 to-cyan-100',
      'from-green-100 to-emerald-100',
      'from-yellow-100 to-amber-100',
      'from-purple-100 to-pink-100',
      'from-indigo-100 to-blue-100',
      'from-orange-100 to-red-100',
      'from-teal-100 to-cyan-100',
      'from-pink-100 to-rose-100'
    ];
    return colors[number - 1] || 'from-gray-100 to-blue-100';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50 overflow-hidden">
      {/* Magic Effect Overlay */}
      {showMagic && (
        <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
          <div className="animate-bounce text-6xl">✨</div>
        </div>
      )}

      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-16 h-16 bg-yellow-400 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-blue-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-green-400 rounded-full opacity-20 animate-bounce delay-1000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 text-white font-bold text-xs">
                🎮 GAME BASED LEARNING
              </div>
              
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                A GAME BASED
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                  ABACUS PROGRAM
                </span>
                To Develop Number Sense In Little Ones
              </h1>
              
              <div className="inline-flex items-center rounded-full bg-yellow-100 px-3 py-1 text-yellow-800 font-semibold text-sm">
                🧒 For 4 to 6 years kids
              </div>
              
              <p className="text-gray-600 leading-relaxed">
                Mastermind 'Lingo Bingo' is an Abacus program for 4 to 6 year old kids. 
                It is 100% game based and fun. Children come across challenging opportunities 
                while playing with numbers.
              </p>
              
              <div className="flex flex-wrap gap-3">
                <Button href="EXTERNAL_FORM" className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border-0 text-white font-semibold text-sm px-6 py-3">
                  🎯 Book A Free Demo
                </Button>
                <Button href="/contact" variant="secondary" className="border-2 border-purple-300 text-purple-700 hover:bg-purple-50 hover:border-purple-400 transition-all duration-300 font-semibold text-sm px-6 py-3">
                  💬 Contact Us
                </Button>
              </div>
            </div>

            {/* Right Side - Interactive Game Elements */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-6 border-4 border-yellow-400 transform hover:scale-105 transition-transform duration-500">
                <div className="text-center mb-4">
                  <div className="text-3xl mb-2">🎲</div>
                  <h3 className="text-lg font-bold text-gray-900">Interactive Number Game</h3>
                </div>
                
                {/* Interactive Game Board */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                    <div 
                      key={num}
                      onClick={() => handleNumberClick(num)}
                      className={`aspect-square bg-gradient-to-br ${getNumberColor(num)} rounded-xl flex items-center justify-center font-bold text-gray-700 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 cursor-pointer border-2 border-white ${
                        clickedNumbers.includes(num) ? 'animate-pulse ring-2 ring-yellow-400' : ''
                      }`}
                    >
                      {clickedNumbers.includes(num) ? '✨' : num}
                    </div>
                  ))}
                </div>
                
                <div className="text-center">
                  <div className="text-gray-600 text-sm mb-2">
                    {clickedNumbers.length > 0 
                      ? `You clicked: ${clickedNumbers.join(', ')}` 
                      : 'Click numbers to see magic! ✨'
                    }
                  </div>
                  {clickedNumbers.length > 0 && (
                    <button 
                      onClick={() => setClickedNumbers([])}
                      className="text-xs text-blue-500 hover:text-blue-700 underline"
                    >
                      Reset Game
                    </button>
                  )}
                </div>

                {/* Sound Indicator */}
                <div className="text-center mt-3">
                  <div className="text-xs text-gray-500">
                    🔊 Sound: {typeof window !== 'undefined' && 'speechSynthesis' in window ? 'ON' : 'OFF'}
                  </div>
                </div>
              </div>

              {/* Achievement Badge */}
              {clickedNumbers.length >= 3 && (
                <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs font-bold px-3 py-1 rounded-full animate-bounce">
                  🏆 Math Star!
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Program Description */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              A <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">GAME BASED</span> ABACUS PROGRAM
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Mastermind 'Lingo Bingo' is an Abacus program for 4 to 6 year old kids. 
                It is 100% game based and fun. Children come across challenging opportunities 
                while playing with numbers.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                It is a program that adapts to engaging and fun methods for teaching about numbers. 
                In addition, it develops children's skills in mental arithmetic.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                Playing these exciting games causes a <span className="font-bold text-green-600">'Happy Stress'</span> leading to increased 
                dopamine levels. This improves their 'number sense' along with their 
                overall brain abilities.
              </p>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-6 text-white shadow-xl">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">🌟</div>
                  <h3 className="text-lg font-bold mb-3">Learning Through Play</h3>
                </div>
                
                <div className="space-y-2">
                  {[
                    "🎲 Number Games & Puzzles",
                    "🧩 Interactive Activities", 
                    "🏆 Achievement Badges",
                    "🤝 Group Play Sessions"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      <span className="text-yellow-300">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              BENEFITS OF <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">LINGO BINGO</span>
            </h2>
            <p className="text-gray-600">Watch your child blossom with these amazing benefits</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "🔢",
                title: "Develops Number Sense",
                description: "Builds strong foundation in number recognition",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: "😊",
                title: "Removes Math Phobias",
                description: "Makes math fun and eliminates fear",
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: "👁️",
                title: "Eye-Hand Coordination",
                description: "Enhances visual tracking and dexterity",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: "🎯",
                title: "Fine Motor Skills",
                description: "Develops precise finger movements",
                color: "from-orange-500 to-red-500"
              },
              {
                icon: "🧠",
                title: "Visualization Skills",
                description: "Strengthens mental imagery",
                color: "from-indigo-500 to-blue-500"
              },
              {
                icon: "🎭",
                title: "Concentration",
                description: "Improves focus and attention span",
                color: "from-yellow-500 to-amber-500"
              }
            ].map((benefit, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${benefit.color} flex items-center justify-center text-xl mb-3 mx-auto`}>
                  {benefit.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-center mb-2 text-sm">{benefit.title}</h3>
                <p className="text-gray-600 text-center text-xs">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Structure */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              COURSE <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">STRUCTURE</span>
            </h2>
            <p className="text-gray-600 text-sm">
              6 to 9 months program with weekly two-hour classes
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                topic: "Counting",
                description: "Fun counting games and number recognition",
                icon: "🔢",
                color: "from-blue-400 to-cyan-400"
              },
              {
                topic: "Number Sense",
                description: "Understanding quantity and number relationships",
                icon: "🧮",
                color: "from-green-400 to-emerald-400"
              },
              {
                topic: "Time & Calendar",
                description: "Learning days, months, and time concepts",
                icon: "⏰",
                color: "from-purple-400 to-pink-400"
              },
              {
                topic: "Additions and Subtraction",
                description: "Basic arithmetic through interactive games",
                icon: "➕➖",
                color: "from-orange-400 to-red-400"
              },
              {
                topic: "Introduction of Abacus",
                description: "First steps with the abacus tool",
                icon: "🎯",
                color: "from-yellow-400 to-amber-400"
              },
              {
                topic: "Fundamental Practice",
                description: "Building strong foundation skills",
                icon: "🌟",
                color: "from-indigo-400 to-blue-400"
              }
            ].map((module, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${module.color} flex items-center justify-center text-lg mb-3`}>
                  {module.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">{module.topic}</h3>
                <p className="text-gray-600 text-xs">{module.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button href="EXTERNAL_FORM" className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border-0 text-white font-semibold text-sm px-8 py-3">
              🎮 Start Learning Journey
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-purple-500 to-pink-600 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Ready to Transform Your Child's Learning?
          </h2>
          <p className="text-purple-100 mb-6 text-sm">
            Join thousands of happy parents with Lingo Bingo!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              href="EXTERNAL_FORM" 
              variant="secondary" 
              className="bg-white text-purple-600 hover:bg-gray-100 font-semibold text-sm px-6 py-3"
            >
              🎯 Book Free Demo
            </Button>
            <Button 
              href="/contact" 
              className="bg-black text-white hover:bg-gray-800 font-semibold text-sm px-6 py-3 border-0"
            >
              💬 Talk to Expert
            </Button>
          </div>
          <div className="mt-6 text-purple-200 text-xs">
            🎁 Free Assessment • 👨‍🏫 Certified Instructors • 🏆 Fun Learning
          </div>
        </div>
      </section>
    </div>
  );
}