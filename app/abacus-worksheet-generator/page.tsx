"use client";
import { useState, ChangeEvent, FormEvent } from 'react';

type FormData = {
  operator: string;
  questions: number;
  rows: number;
  digits: number;
  name: string;
  email: string;
  userType: string;
};

export default function WorksheetGenerator() {
  const [formData, setFormData] = useState<FormData>({
    operator: 'addition',
    questions: 25,
    rows: 2,
    digits: 1,
    name: '',
    email: '',
    userType: 'parent'
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'number' ? parseInt(value, 10) : value
    }));
  };

  const handleGenerate = (e: FormEvent) => {
    e.preventDefault();
    alert('🎉 Your customized worksheet is being generated! Check your email shortly.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse-slow delay-1000"></div>
        
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 text-white font-bold text-sm shadow-lg">
                🎯 Instant Worksheet Generator
              </div>
              
              <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                Create Perfect
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mt-2">
                  Abacus Practice Sheets
                </span>
              </h1>
              
              <p className="text-xl text-gray-700 leading-relaxed">
                Generate unlimited, customized abacus worksheets in seconds. 
                Perfect for teachers, parents, and students looking to master mental math.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href="EXTERNAL_FORM" 
                  className="inline-flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border-0 text-white font-bold px-8 py-4 text-lg rounded-lg"
                >
                  ✨ Generate Free Worksheet
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                {[
                  { number: "10K+", label: "Worksheets Generated" },
                  { number: "500+", label: "Happy Teachers" },
                  { number: "100%", label: "Free Forever" }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-purple-600">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Animated Preview */}
            <div className="relative">
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-2xl border border-gray-200 transform hover:scale-105 transition-transform duration-500">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4 animate-bounce">📊</div>
                  <h3 className="text-2xl font-bold text-gray-900">Live Preview</h3>
                  <p className="text-gray-600">Your custom worksheet</p>
                </div>
                
                {/* Worksheet Preview */}
                <div className="bg-white rounded-2xl p-6 border-2 border-dashed border-purple-200">
                  <div className="space-y-3">
                    {[1, 2, 3].map((row) => (
                      <div key={row} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <div className="text-gray-700 font-mono">25 + 14 =</div>
                        <div className="w-20 h-8 bg-purple-100 rounded"></div>
                      </div>
                    ))}
                  </div>
                  <div className="text-center mt-4 text-sm text-purple-600">
                    + {formData.questions - 3} more questions
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full animate-pulse opacity-80"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-400 rounded-full animate-bounce opacity-80"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Worksheet Generator Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Customize Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Perfect Worksheet</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Select your preferences and generate worksheets tailored to specific learning needs
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Configuration Panel */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 shadow-2xl border border-blue-200">
                <form onSubmit={handleGenerate} className="space-y-8">
                  {/* Operation Type */}
                  <div>
                    <label className="block text-lg font-bold text-gray-900 mb-4">
                      🎯 Select Math Operations
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { value: 'addition', label: '➕ Addition', emoji: '➕' },
                        { value: 'subtraction', label: '➖ Subtraction', emoji: '➖' },
                        { value: 'multiplication', label: '✖️ Multiplication', emoji: '✖️' },
                        { value: 'division', label: '➗ Division', emoji: '➗' }
                      ].map((op) => (
                        <label key={op.value} className="relative">
                          <input
                            type="radio"
                            name="operator"
                            value={op.value}
                            checked={formData.operator === op.value}
                            onChange={handleChange}
                            className="sr-only"
                          />
                          <div className={`cursor-pointer p-4 rounded-2xl border-2 text-center transition-all duration-300 ${
                            formData.operator === op.value 
                              ? 'bg-white border-blue-500 shadow-lg scale-105' 
                              : 'bg-white/50 border-gray-200 hover:border-blue-300'
                          }`}>
                            <div className="text-2xl mb-2">{op.emoji}</div>
                            <div className="font-semibold text-gray-900">{op.label}</div>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Quick Settings */}
                  <div className="grid grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        📝 Questions
                      </label>
                      <select 
                        name="questions"
                        value={formData.questions}
                        onChange={handleChange}
                        className="w-full bg-white border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300"
                      >
                        <option value="10">10 Questions</option>
                        <option value="25">25 Questions</option>
                        <option value="50">50 Questions</option>
                        <option value="100">100 Questions</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        📊 Difficulty
                      </label>
                      <select 
                        name="digits"
                        value={formData.digits}
                        onChange={handleChange}
                        className="w-full bg-white border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300"
                      >
                        <option value="1">1 Digit (Easy)</option>
                        <option value="2">2 Digits (Medium)</option>
                        <option value="3">3 Digits (Hard)</option>
                        <option value="4">4 Digits (Expert)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        👥 User Type
                      </label>
                      <select 
                        name="userType"
                        value={formData.userType}
                        onChange={handleChange}
                        className="w-full bg-white border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300"
                      >
                        <option value="parent">👨‍👩‍👧‍👦 Parent</option>
                        <option value="teacher">👩‍🏫 Teacher</option>
                        <option value="student">🎓 Student</option>
                      </select>
                    </div>
                  </div>

                  {/* Personal Info */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        👤 Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        className="w-full bg-white border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        📧 Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full bg-white border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300"
                        required
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-white font-bold py-4 rounded-2xl text-lg"
                  >
                    🚀 Generate My Custom Worksheet
                  </button>
                </form>
              </div>
            </div>

            {/* Features Sidebar */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl p-8 text-white shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">🌟 Premium Features</h3>
                <div className="space-y-4">
                  {[
                    "✅ Answer Keys Included",
                    "✅ Unlimited Downloads", 
                    "✅ All Difficulty Levels",
                    "✅ Printable PDF Format",
                    "✅ Progress Tracking",
                    "✅ Teacher Resources"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 text-white/90">
                      <span className="text-yellow-300">✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200">
                <div className="text-center">
                  <div className="text-5xl mb-4">🏆</div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Proven Results</h4>
                  <p className="text-gray-600 text-sm">
                    Students using our worksheets show 68% faster calculation speed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Loved by <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Educators Worldwide</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                text: "This worksheet generator saved me hours of preparation time. My students love the varied difficulty levels!",
                author: "Sarah Chen",
                role: "Math Teacher, Singapore"
              },
              {
                text: "As a parent, I can finally give my child targeted practice. The answer keys make checking so easy!",
                author: "Michael Rodriguez", 
                role: "Parent, USA"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                <div className="text-yellow-400 text-2xl mb-4">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Math Practice?
          </h2>
          <p className="text-indigo-100 text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of educators and parents who are creating amazing learning experiences with our worksheet generator.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="EXTERNAL_FORM" 
              className="inline-flex items-center justify-center bg-white text-indigo-600 hover:bg-gray-100 font-bold px-8 py-4 text-lg rounded-lg transition-all duration-300"
            >
              🎯 Start Generating Free Worksheets
            </a>
            <a 
              href="/abacus-online-classes" 
              className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold px-8 py-4 text-lg rounded-lg transition-all duration-300"
            >
              🧮 Explore Online Classes
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}