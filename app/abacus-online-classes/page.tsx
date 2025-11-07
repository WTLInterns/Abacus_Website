"use client";
import { useState } from "react";
import Button from "../components/Button";

interface FormData {
  studentName: string;
  guardianName: string;
  email: string;
  phone: string;
  city: string;
  ageGroup: string;
  preferredDate: string;
}

export default function AbacusOnlineClasses() {
  const [formData, setFormData] = useState<FormData>({
    studentName: '',
    guardianName: '',
    email: '',
    phone: '',
    city: '',
    ageGroup: '6 to 8 Years old',
    preferredDate: new Date().toISOString().split('T')[0]
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    
    // For now, we'll just open the external form in a new tab
    window.open('https://admin.vertexabacus.com/auth/sign-in', '_blank');
  };

  return (
    <div className="font-sans bg-gradient-to-b from-blue-50 to-white">
      {/* Hero: two-column with inline form */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          {/* Left content */}
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 px-4 py-2 text-sm font-medium text-white mb-4 shadow-lg">
              🎯 Live & Guided Abacus Training
            </div>
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Transform Your Child's Math Skills with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Fun Online Abacus</span> Classes!
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Watch your child develop lightning-fast mental math skills, boost confidence, and fall in love with numbers through our engaging online abacus program.
            </p>
            <ul className="space-y-3 text-gray-700 text-lg">
              <li className="flex items-center gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">✓</span>
                <span>Live interactive sessions with expert mentors</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">✓</span>
                <span>Structured level-wise curriculum with milestones</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">✓</span>
                <span>Regular practice worksheets and assessments</span>
              </li>
            </ul>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button href="EXTERNAL_FORM" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border-0 text-white font-semibold">
                🎯 Book Free Demo Class
              </Button>
              <Button href="/contact" variant="secondary" className="border-2 border-blue-300 text-blue-700 hover:bg-blue-50 hover:border-blue-400 transition-all duration-300">
                💬 Contact Us
              </Button>
            </div>
          </div>

          {/* Right: Inline enquiry form card */}
          <div className="relative rounded-3xl bg-gradient-to-br from-white to-blue-50 shadow-2xl border border-blue-200/50 overflow-hidden backdrop-blur-sm">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-purple-500"></div>
            <div className="px-6 pt-6 pb-4 text-center">
              <div className="text-sm text-blue-600 font-semibold">🎓 Abacus Live Classes</div>
              <h3 className="mt-2 text-2xl font-bold text-gray-900">Book A Free Demo Class</h3>
              <div className="text-sm text-gray-500 mt-1">Age Group 6–12 years only</div>
            </div>
            <div className="px-6 pb-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <input 
                  type="text" 
                  name="studentName"
                  value={formData.studentName}
                  onChange={handleChange}
                  placeholder="Enter Student Name" 
                  className="w-full border-2 border-gray-200 bg-white rounded-xl px-4 py-3 outline-none placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300" 
                  required
                />
                <input 
                  type="text" 
                  name="guardianName"
                  value={formData.guardianName}
                  onChange={handleChange}
                  placeholder="Enter Guardian's Name" 
                  className="w-full border-2 border-gray-200 bg-white rounded-xl px-4 py-3 outline-none placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300" 
                  required
                />
                <div className="grid grid-cols-3 gap-3">
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Id" 
                    className="col-span-3 md:col-span-1 w-full border-2 border-gray-200 bg-white rounded-xl px-3 py-3 outline-none placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 text-sm" 
                    required
                  />
                  <div className="col-span-3 md:col-span-2 flex gap-3">
                    <div className="w-24 flex-shrink-0">
                      <select className="w-full border-2 border-gray-200 bg-white rounded-xl px-3 py-3 text-sm text-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300">
                        <option>🇮🇳 +91</option>
                      </select>
                    </div>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="WhatsApp Number" 
                      className="flex-1 w-full border-2 border-gray-200 bg-white rounded-xl px-3 py-3 outline-none placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 text-sm" 
                      required
                    />
                  </div>
                </div>
                <input 
                  type="text" 
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Enter Your City" 
                  className="w-full border-2 border-gray-200 bg-white rounded-xl px-4 py-3 outline-none placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300" 
                  required
                />
                <select 
                  name="ageGroup"
                  value={formData.ageGroup}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-200 bg-white rounded-xl px-4 py-3 text-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                  required
                >
                  <option value="6 to 8 Years old">6 to 8 Years old</option>
                  <option value="9 to 12 Years old">9 to 12 Years old</option>
                </select>
                <input 
                  type="date" 
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full border-2 border-gray-200 bg-white rounded-xl px-4 py-3 text-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300" 
                  required
                />
                <div className="rounded-xl border-2 border-gray-200 p-4 text-gray-500 text-sm bg-white flex items-center justify-center">
                  🔒 reCAPTCHA placeholder
                </div>
                <div className="text-xs text-gray-500 text-center">
                  By registering here, I agree to Vertex Abacus Terms & Conditions and Privacy Policy
                </div>
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border-0 text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2"
                >
                  🚀 Book Free Demo Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights: Zigzag layout */}
      <section className="relative py-20 bg-gradient-to-b from-orange-50 to-amber-50 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-800 border border-orange-200">
                🎮 Interactive Learning
              </div>
              <h2 className="text-4xl font-bold tracking-tight text-gray-900">Live, Interactive & <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Super Fun</span></h2>
              <p className="text-lg text-gray-700 leading-relaxed">Small batches, real-time feedback, and playful drills keep learners engaged while mastering core techniques.</p>
              <div className="flex flex-wrap gap-4">
                <Button href="EXTERNAL_FORM" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border-0 text-white font-semibold">
                  🎯 Book Free Demo
                </Button>
                <Button href="/abacus-worksheet-generator" variant="secondary" className="border-2 border-orange-300 text-orange-700 hover:bg-orange-50 hover:border-orange-400 transition-all duration-300">
                  📝 Try Worksheets
                </Button>
              </div>
            </div>
            <div className="relative rounded-3xl bg-white shadow-2xl border border-orange-200 p-6 transform hover:scale-105 transition-transform duration-500">
              <div className="aspect-video w-full rounded-2xl bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-white text-xl font-bold shadow-lg">
                <div className="text-center">
                  <div className="text-4xl mb-2">🎥</div>
                  <div>Live Class Preview</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="order-2 md:order-1 relative rounded-3xl bg-white shadow-2xl border border-indigo-200 p-6 transform hover:scale-105 transition-transform duration-500">
              <div className="aspect-video w-full rounded-2xl bg-gradient-to-br from-indigo-400 to-purple-600 flex items-center justify-center text-white text-xl font-bold shadow-lg">
                <div className="text-center">
                  <div className="text-4xl mb-2">⭐</div>
                  <div>Student Practice Session</div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <div className="inline-flex items-center rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-800 border border-indigo-200">
                📈 Amazing Results
              </div>
              <h3 className="text-4xl font-bold tracking-tight text-gray-900">Results You Can <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">See & Measure</span></h3>
              <p className="text-lg text-gray-700 leading-relaxed">Speed and accuracy improve within weeks. Parents report better concentration, lower math anxiety, and renewed interest.</p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center text-white text-sm">🎯</span>
                  <span>Level-based milestones and badges</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center text-white text-sm">🏆</span>
                  <span>Weekly challenges and assessments</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center text-white text-sm">💫</span>
                  <span>Supportive mentor feedback</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Timeline */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-800 mb-4 border border-green-200">
              📚 Learning Journey
            </div>
            <h3 className="text-4xl font-bold tracking-tight text-gray-900">Structured <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">8-Level Curriculum</span></h3>
            <p className="mt-4 text-lg text-gray-600">Designed for steady growth in speed, accuracy and confidence.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { l: "Level 1", d: "Basics of bead movement and single-digit operations", emoji: "🔢", color: "from-blue-400 to-cyan-400" },
              { l: "Level 2", d: "Double-digit operations and visualization start", emoji: "🎯", color: "from-green-400 to-emerald-400" },
              { l: "Level 3", d: "Speed drills and advanced addition/subtraction", emoji: "⚡", color: "from-purple-400 to-pink-400" },
              { l: "Level 4", d: "Multiplication techniques and accuracy tracking", emoji: "✖️", color: "from-orange-400 to-red-400" },
              { l: "Level 5", d: "Division strategies and mental math focus", emoji: "➗", color: "from-indigo-400 to-blue-400" },
              { l: "Level 6", d: "Mixed operations and time-bound challenges", emoji: "🔄", color: "from-pink-400 to-rose-400" },
              { l: "Level 7", d: "Higher complexity and performance polish", emoji: "🌟", color: "from-yellow-400 to-amber-400" },
              { l: "Level 8", d: "Mastery, competitions, and certification", emoji: "🏆", color: "from-emerald-400 to-teal-400" },
            ].map((c, i) => (
              <div key={c.l} className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-transparent transform hover:scale-105">
                <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${c.color} rounded-t-2xl`}></div>
                <div className="text-center">
                  <div className="text-3xl mb-3">{c.emoji}</div>
                  <div className="font-bold text-gray-900 text-lg mb-2">{c.l}</div>
                  <div className="text-gray-600 text-sm leading-relaxed">{c.d}</div>
                </div>
                <div className="absolute top-3 right-3 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 text-sm font-bold group-hover:bg-gradient-to-r group-hover:from-gray-600 group-hover:to-gray-700 group-hover:text-white transition-all duration-300">
                  {i+1}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Button href="EXTERNAL_FORM" className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border-0 text-white font-semibold">
              🎯 Get Level Recommendation
            </Button>
          </div>
        </div>
      </section>

      {/* Parent Reviews */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="absolute inset-0 bg-dots-pattern opacity-10"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center rounded-full bg-purple-100 px-4 py-2 text-sm font-medium text-purple-800 mb-4 border border-purple-200">
              ❤️ Parent Love
            </div>
            <h3 className="text-4xl font-bold tracking-tight text-gray-900">What <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Parents Say</span></h3>
            <p className="mt-4 text-lg text-gray-600">Real feedback from families who've experienced the magic!</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { 
                q: "Her speed improved in a month! Now she calculates faster than me!", 
                a: "— Anita G.",
                rating: 5,
                emoji: "⚡"
              },
              { 
                q: "He loves the classes and looks forward every week. Math is now his favorite subject!", 
                a: "— Ravi M.",
                rating: 5,
                emoji: "😊"
              },
              { 
                q: "Confidence in math went up dramatically. Her school performance improved across all subjects!", 
                a: "— Sana P.",
                rating: 5,
                emoji: "🌟"
              },
            ].map((t, i) => (
              <div key={i} className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 transform hover:scale-105">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-t-2xl"></div>
                <div className="text-3xl mb-4">{t.emoji}</div>
                <div className="text-gray-800 text-lg leading-relaxed mb-4">"{t.q}"</div>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500 font-medium">{t.a}</div>
                  <div className="flex space-x-1">
                    {[...Array(t.rating)].map((_, star) => (
                      <span key={star} className="text-yellow-400">⭐</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden py-20 bg-gradient-to-br from-indigo-500 to-purple-600">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-300/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm px-6 py-3 text-sm font-medium text-white mb-6 border border-white/30">
            🚀 Limited Spots Available
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Ready to Transform Your Child's <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-300">Math Journey</span>?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">Book a free demo class and see the magic happen in real-time!</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="EXTERNAL_FORM" variant="secondary" className="bg-white text-indigo-600 hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold px-8 py-4">
              🎯 Book Free Demo Class
            </Button>
            <Button href="/contact" className="bg-black text-white hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border-0 font-semibold px-8 py-4">
              💬 Chat with Expert
            </Button>
          </div>
          <div className="mt-6 text-indigo-200 text-sm">
            ⏰ Limited time offer • 🎁 Free assessment included • 👨‍🏫 Expert guidance
          </div>
        </div>
      </section>
    </div>
  );
}