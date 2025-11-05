"use client";
import Button from "@/app/components/Button";
import { useState, useEffect } from 'react';

export default function HistoryOfAbacus() {
  const [currentImage, setCurrentImage] = useState(0);
  
  const historicalImages = [
    "🏺", "📜", "🧮", "🏛️", "🎎", "🗾", "⚱️", "📿"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % historicalImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section with Animated Historical Icons */}
      <section className="relative py-20 bg-white overflow-hidden">
        {/* Floating Historical Icons */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 text-4xl opacity-20 ">🧮</div>
          <div className="absolute top-20 right-20 text-3xl opacity-30 animate-pulse">🏺</div>
          <div className="absolute bottom-20 left-20 text-5xl opacity-25 ">📜</div>
          <div className="absolute bottom-10 right-10 text-4xl opacity-20 animate-pulse delay-500">⚱️</div>
          <div className="absolute top-1/2 left-1/4 text-3xl opacity-30 ">🎎</div>
          <div className="absolute top-1/3 right-1/4 text-4xl opacity-25 animate-pulse delay-750">🗾</div>
        </div>

        {/* Animated Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmYmI0NDQiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-10"></div>
        
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          {/* Animated Main Icon */}
          <div className="flex justify-center mb-6">
            <div className="text-8xl animate-pulse">
              {historicalImages[currentImage]}
            </div>
          </div>

          <div className="inline-flex items-center rounded-full bg-amber-100 px-4 py-2 text-amber-800 font-medium text-sm mb-6 border border-amber-200">
            📜 3000 Years of Mathematical Legacy
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-6 animate-fade-in">
            Journey Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Abacus History</span>
          </h1>
          
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            From ancient sand tables to modern brain training, discover how this simple tool 
            revolutionized mathematics and cognitive development across civilizations.
          </p>

          {/* Mini Timeline Indicator */}
          <div className="flex justify-center space-x-2 mb-8">
            {historicalImages.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-500 ${
                  index === currentImage ? 'bg-amber-500 w-6' : 'bg-amber-200'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Evolution Timeline */}
      <section className="py-16 bg-amber-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              THE REMARKABLE <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">EVOLUTION</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Witness the incredible 3000-year journey from manual calculator to cognitive development tool
            </p>
          </div>

          <div className="space-y-12">
            {/* Ancient Origins */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-amber-100 transform hover:scale-105 transition-all duration-500">
                <div className="text-amber-600 text-sm font-semibold mb-2">~300-500 BC</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Ancient Beginnings</h3>
                <p className="text-gray-700 mb-4">
                  The word "Abacus" originates from Greek 'abax' meaning 'tabular form', 
                  potentially derived from Semitic 'abq' meaning 'sand'. This primitive calculating 
                  device emerged as humanity's first step towards organized mathematics.
                </p>
                <div className="flex items-center gap-2 text-sm text-amber-600">
                  <span className="text-2xl ">🏺</span>
                  <span>Mesopotamia & Ancient Greece</span>
                </div>
              </div>
              <div className="text-center">
                <div className="text-8xl mb-4 animate-pulse">🏛️</div>
                <div className="text-sm text-gray-500 bg-white rounded-full py-2 px-4 shadow-sm">First Calculating Device</div>
              </div>
            </div>

            {/* Chinese Development */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1 text-center">
                <div className="text-8xl mb-4">🎎</div>
                <div className="text-sm text-gray-500 bg-white rounded-full py-2 px-4 shadow-sm">Suanpan Abacus</div>
              </div>
              <div className="order-1 md:order-2 bg-white rounded-2xl p-8 shadow-lg border border-amber-100 transform hover:scale-105 transition-all duration-500">
                <div className="text-amber-600 text-sm font-semibold mb-2">200 AD - 1900 AD</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Chinese Innovation</h3>
                <p className="text-gray-700 mb-4">
                  The Suanpan emerged with 2/5 decks, representing a significant advancement in 
                  calculation capabilities. While powerful, its complexity paved the way for 
                  further refinements in Japan.
                </p>
                <div className="flex items-center gap-2 text-sm text-amber-600">
                  <span className="text-2xl animate-pulse">🧮</span>
                  <span>2 Upper & 5 Lower Beads</span>
                </div>
              </div>
            </div>

            {/* Japanese Revolution */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-amber-100 transform hover:scale-105 transition-all duration-500">
                <div className="text-amber-600 text-sm font-semibold mb-2">1930s</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Japanese Revolution</h3>
                <p className="text-gray-700 mb-4">
                  Mathematician Seki Kowa transformed the abacus by simplifying it to 1/4 decks, 
                  creating the Soroban. This breakthrough made mental calculations faster and 
                  laid the foundation for modern abacus training.
                </p>
                <div className="flex items-center gap-2 text-sm text-amber-600">
                  <span className="text-2xl">🎯</span>
                  <span>Seki Kowa's Innovation</span>
                </div>
              </div>
              <div className="text-center">
                <div className="text-8xl mb-4 animate-pulse">🗾</div>
                <div className="text-sm text-gray-500 bg-white rounded-full py-2 px-4 shadow-sm">Soroban Abacus</div>
              </div>
            </div>

            {/* Modern Era */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1 text-center">
                <div className="text-8xl mb-4 ">🧠</div>
                <div className="text-sm text-gray-500 bg-white rounded-full py-2 px-4 shadow-sm">Brain Development Tool</div>
              </div>
              <div className="order-1 md:order-2 bg-white rounded-2xl p-8 shadow-lg border border-amber-100 transform hover:scale-105 transition-all duration-500">
                <div className="text-amber-600 text-sm font-semibold mb-2">21st Century</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Cognitive Development Era</h3>
                <p className="text-gray-700 mb-4">
                  Today, the abacus has transcended its original purpose. It's now recognized globally 
                  as a powerful tool for enhancing mental math, concentration, memory, and overall 
                  brain development in children.
                </p>
                <div className="flex items-center gap-2 text-sm text-amber-600">
                  <span className="text-2xl animate-pulse">🌟</span>
                  <span>Global Educational Tool</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Significance */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              FROM CALCULATIONS TO <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">COGNITIVE EXCELLENCE</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 transform hover:scale-105 transition-all duration-500">
              <div className="text-4xl mb-4 animate-bounce">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Mathematical Mastery</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-3 animate-fade-in">
                  <span className="text-green-500 text-lg">✓</span>
                  Lightning-fast mental calculations
                </li>
                <li className="flex items-center gap-3 animate-fade-in delay-200">
                  <span className="text-green-500 text-lg">✓</span>
                  Enhanced number sense
                </li>
                <li className="flex items-center gap-3 animate-fade-in delay-400">
                  <span className="text-green-500 text-lg">✓</span>
                  Improved problem-solving skills
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 transform hover:scale-105 transition-all duration-500">
              <div className="text-4xl mb-4 animate-pulse">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Brain Development</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-3 animate-fade-in">
                  <span className="text-green-500 text-lg">✓</span>
                  Better concentration & focus
                </li>
                <li className="flex items-center gap-3 animate-fade-in delay-200">
                  <span className="text-green-500 text-lg">✓</span>
                  Enhanced memory retention
                </li>
                <li className="flex items-center gap-3 animate-fade-in delay-400">
                  <span className="text-green-500 text-lg">✓</span>
                  Improved visual-spatial skills
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-8 text-white shadow-2xl transform hover:scale-105 transition-all duration-500">
              <div className="text-5xl mb-4 animate-bounce">🧮</div>
              <h3 className="text-2xl font-bold mb-4">Experience Ancient Wisdom with Modern Teaching</h3>
              <p className="text-amber-100 mb-6">
                Join the legacy of 3000 years of mathematical excellence. Our abacus program combines 
                time-tested techniques with contemporary educational methods.
              </p>
              
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}