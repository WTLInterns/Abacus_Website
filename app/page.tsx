"use client";
import Button from "./components/Button";
import ModalVideo from "./components/ModalVideo";
import EnquiryModal from "./components/EnquiryModal";
import { useState, useEffect } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="font-sans overflow-hidden">
      <EnquiryModal />
      {/* Hero: Experience Abacus & 5x Faster Math */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900">
        <div className="absolute inset-0 bg-white/5"></div>
        <div className="absolute top-10 right-10 w-72 h-72 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse-slow"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse-slow delay-1000"></div>
        
        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-4 py-20 sm:px-6 md:grid-cols-2 lg:py-28 lg:px-8">
          <div className={`space-y-6 transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 text-sm font-medium text-white mb-4 border border-white/30">
              🚀 Transform Your Child's Math Journey
            </div>
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Experience <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Abacus</span> Magic — Unlock <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">5x Faster</span> Math Skills
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Our live and offline Abacus programs help children think clearly, compute quickly, and build lasting confidence. Learn from expert mentors through structured levels and engaging practice.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                onClick={() => window.dispatchEvent(new CustomEvent('open-enquiry-modal'))}
                className="bg-black text-blue-900 hover:bg-blue-50"
              >
                🎯 Book Free Demo
              </Button>
              <Button href="/abacus-online-classes" variant="secondary" className="bg-transparent text-black border-white/50 hover:border-white hover:bg-white/10">
                Explore Programs
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-8 pt-8">
              {[
                { value: "5x", label: "Faster Calculations", emoji: "⚡" },
                { value: "17+", label: "Countries Impact", emoji: "🌍" },
                { value: "Levels", label: "Structured Pathway", emoji: "📈" }
              ].map((stat, index) => (
                <div key={index} className="text-center p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-sm">
                  <div className="text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-blue-200 mt-1">{stat.emoji} {stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className={`relative transition-all duration-700 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500 border-4 border-white/20">
              <video 
                className="w-full h-auto rounded-2xl"
                autoPlay
                loop
                muted
                playsInline
                poster="/images/abacus1.jpg"
              >
                <source src="/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-yellow-400 rounded-2xl rotate-12 -z-10 opacity-60"></div>
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-green-400 rounded-full -z-10 opacity-60"></div>
          </div>
        </div>
      </section>

      {/* New Image Section (moved right after Hero) */}
      <section className="relative py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="/images/main.jpg" 
              alt="Abacus Learning"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
              <div className="max-w-2xl">
                <h2 className="text-4xl font-bold text-white mb-4">Transform Your Child's Math Skills</h2>
                <p className="text-xl text-gray-200 mb-6">Join our interactive abacus program and watch your child excel in mental math</p>
                <Button 
                  onClick={() => window.dispatchEvent(new CustomEvent('open-enquiry-modal'))}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Enroll Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Mesmerizing Effect of Abacus Training */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="absolute inset-0 bg-dots-pattern opacity-10"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center rounded-full bg-gradient-to-r from-purple-100 to-blue-100 px-4 py-2 text-sm font-medium text-purple-800 mb-6 border border-purple-200">
              ✨ Transformative Learning
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Magic Effect</span> of Abacus Training
            </h2>
            <p className="mt-6 text-xl text-gray-600 leading-relaxed">
              Children develop remarkable speed and accuracy in mental math. With every level, their confidence grows—reducing math anxiety and improving overall academic performance.
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { 
                t: "Speed & Accuracy", 
                d: "Weekly milestones and challenges make quick, precise calculation a habit.",
                emoji: "⚡",
                color: "from-blue-500 to-cyan-500",
                bgColor: "bg-blue-50"
              },
              { 
                t: "Focus & Concentration", 
                d: "Visualizing the abacus strengthens attention and working memory.",
                emoji: "🎯",
                color: "from-green-500 to-emerald-500",
                bgColor: "bg-green-50"
              },
              { 
                t: "Confidence", 
                d: "Success with numbers builds a positive learning mindset in and beyond math.",
                emoji: "🌟",
                color: "from-purple-500 to-pink-500",
                bgColor: "bg-purple-50"
              },
            ].map((c, index) => (
              <div 
                key={c.t} 
                className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-transparent"
              >
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${c.color}`}></div>
                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${c.color} text-white text-2xl mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {c.emoji}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300">{c.t}</h3>
                  <p className="mt-4 text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{c.d}</p>
                </div>
                <div className={`absolute bottom-0 right-0 w-24 h-24 ${c.bgColor} rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Watch Lightning Fast Mental Math (Video) */}
      <section className="relative bg-gradient-to-br from-gray-900 to-blue-900 py-24 overflow-hidden">
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute right-0 bottom-1/2 transform translate-y-1/2 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl opacity-60"></div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div className="space-y-8">
              <div className="inline-flex items-center rounded-full bg-orange-500/20 backdrop-blur-sm px-4 py-2 text-sm font-medium text-orange-300 mb-4 border border-orange-500/30">
                🎥 See the Magic
              </div>
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Watch <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">Lightning-Fast</span> Mental Math
              </h2>
              <p className="text-xl text-blue-200 leading-relaxed">
                See learners solve complex calculations faster than a calculator — a result of consistent practice, guided techniques, and level-based learning.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button 
                  onClick={() => window.dispatchEvent(new CustomEvent('open-enquiry-modal'))}
                  className="bg-orange-500 hover:bg-orange-600 text-white"
                >
                  🎯 Book Free Demo
                </Button>
                <Button href="/gallery" variant="secondary" className="bg-transparent text-black border-white/50 hover:border-white hover:bg-white/10">
                  View Gallery
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500 border-4 border-white/20">
                <img 
                  src="/images/abacus4.jpg" 
                  alt="Lightning-Fast Mental Math"
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce shadow-lg"></div>
              <div className="absolute -top-4 -right-4 w-6 h-6 bg-green-400 rounded-full animate-pulse shadow-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Structure and Programs */}
      <section className="relative bg-gradient-to-br from-white to-blue-50 py-24">
        <div className="absolute inset-0 bg-circuit-pattern opacity-5"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800 mb-6 border border-blue-200">
              📚 Learning Path
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Structured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Programs</span> for Success
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 mb-12">
            <div className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-500"></div>
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xl mb-6 shadow-lg">
                  📈
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Abacus Course Structure</h3>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  A friendly, engaging path with fun math games — identical across online and offline classes. Learners progress through milestones that maintain momentum.
                </p>
                <ul className="mt-6 space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    2 days in a week
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Two 1-hour sessions per week
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Practice worksheets and assessments
                  </li>
                </ul>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xl mb-6 shadow-lg">
                  👨‍👩‍👧‍👦
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Programs by Age</h3>
                <div className="mt-6 space-y-6">
                  <div className="p-4 rounded-2xl bg-purple-50 border border-purple-100">
                    <div className="font-bold text-lg text-purple-900">Abacus Program (Age 6–15)</div>
                    <p className="mt-2 text-purple-700">Designed to spark interest in math and enable exceptional mental calculation speed.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <a href="/abacus-online-classes" className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-blue-100 hover:border-blue-300">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">Online Classes</h4>
                  <p className="mt-3 text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    Book a free demo and experience our live e-learning platform.
                  </p>
                </div>
                <span className="rounded-full border-2 border-blue-200 p-3 group-hover:bg-blue-500 group-hover:border-blue-500 group-hover:text-white transition-all duration-300 transform group-hover:scale-110 shadow-lg">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-blue-50 rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </a>

            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 p-8 shadow-2xl">
              <div className="relative z-10">
                <h4 className="text-xl font-bold text-white">Offline Classes</h4>
                <p className="mt-3 text-blue-100">
                  Over 2000+ centers globally. Raise an enquiry and we'll share the nearest center details.
                </p>
                <div className="mt-6">
                  <Button 
                    onClick={() => window.dispatchEvent(new CustomEvent('open-enquiry-modal'))}
                    variant="secondary" 
                    className="bg-white text-blue-600 hover:bg-gray-100 border-white font-semibold"
                  >
                    Raise an Enquiry
                  </Button>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-tr-full"></div>
            </div>
          </div>
        </div>
      </section>



      {/* Worksheets teaser */}
      <section className="relative bg-gradient-to-br from-orange-50 to-amber-50 py-24 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div className="space-y-8">
              <div className="inline-flex items-center rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-800 mb-4 border border-orange-200">
                📝 Practice Tools
              </div>
              <h3 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Get Unlimited Free <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Abacus Worksheets</span>
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed">
                Practice makes progress. Generate printable worksheets tailored to operations and levels.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button href="/abacus-worksheet-generator" className="bg-orange-500 hover:bg-orange-600 text-white">
                  Visit Worksheet Generator
                </Button>
                <Button 
                  onClick={() => window.dispatchEvent(new CustomEvent('open-enquiry-modal'))}
                  variant="secondary" 
                  className="border-2 border-orange-200 hover:border-orange-300 text-orange-700"
                >
                  Practice to Excel
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500 border-4 border-white/20">
                <ModalVideo 
                  videoId="W0LHTWG-UmQ" 
                  thumbnail="https://images.unsplash.com/photo-1587668178277-295251f900ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  title="Worksheet Tutorial"
                />
              </div>
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce shadow-lg"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-red-400 rounded-full animate-pulse shadow-lg"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-gradient-to-br from-white to-gray-50 py-24">
        <div className="absolute inset-0 bg-dots-pattern opacity-10"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">Program Highlights</h2>
            <p className="mt-3 text-lg text-gray-600">A comprehensive program designed for whole-brain development and math excellence</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Highlights</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3"><span>📚</span><span><span className="font-semibold">Level-Based Curriculum:</span> progressive levels – from beginner to advanced.</span></li>
                <li className="flex items-start gap-3"><span>🧠</span><span><span className="font-semibold">Whole Brain Development:</span> Enhances concentration, memory, and creativity.</span></li>
                <li className="flex items-start gap-3"><span>⏱</span><span><span className="font-semibold">Speed & Accuracy Training:</span> Solve complex calculations mentally within seconds.</span></li>
                <li className="flex items-start gap-3"><span>👨‍🏫</span><span><span className="font-semibold">Expert Trainers:</span> Certified, child-friendly, and experienced faculty.</span></li>
                <li className="flex items-start gap-3"><span>🏆</span><span><span className="font-semibold">Competitions & Certifications:</span> Participation in state/national-level exams and contests.</span></li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Who Can Join?</h3>
              <p className="text-gray-700 mb-6">Children aged 6 to 15 years from any school or board.</p>

              <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Benefits</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3"><span>📈</span><span>Improved academic performance</span></li>
                <li className="flex items-start gap-3"><span>💪</span><span>Boost in confidence and logical thinking</span></li>
                <li className="flex items-start gap-3"><span>🎧</span><span>Stronger focus and listening skills</span></li>
                <li className="flex items-start gap-3"><span>🧩</span><span>Enhanced visualization and memory power</span></li>
              </ul>

              <div className="mt-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Program Modes</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-3"><span>✅</span><span>Offline (At Vertex Centers)</span></li>
                  <li className="flex items-start gap-3"><span>✅</span><span>Online (Live Zoom/Google Meet Classes/Whatsapp Call)</span></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-10 flex justify-center">
            <Button 
              onClick={() => window.dispatchEvent(new CustomEvent('open-enquiry-modal'))}
              className="bg-black text-white hover:bg-gray-800"
            >
              Enquire Now
            </Button>
          </div>
        </div>
      </section>


      {/* Gallery */}
      <section className="relative bg-white py-24">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <div className="inline-flex items-center rounded-full bg-purple-100 px-4 py-2 text-sm font-medium text-purple-800 mb-4 border border-purple-200">
                📸 Gallery
              </div>
              <h2 className="text-4xl font-bold tracking-tight text-gray-900">Photo Gallery</h2>
            </div>
            <Button href="/gallery" variant="ghost" className="group text-purple-600 hover:text-purple-700 border-purple-200 hover:border-purple-300">
              View All
              <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Button>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {["/images/abacus1.jpg","/images/abacus2.jpg","/images/abacus3.jpg","/images/abacus4.jpg","/images/abacus5.jpg"].map((src, idx) => (
              <div 
                key={src} 
                className="group relative aspect-[4/3] overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
              >
                <img 
                  className="h-full w-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                  src={src} 
                  alt={`Abacus learning ${idx+1}`} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}

            <div className="h-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-700 p-8 rounded-2xl text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Join Our Community</h3>
              <p className="mb-6">Become part of our growing family of confident learners</p>
              <Button 
                onClick={() => window.dispatchEvent(new CustomEvent('open-enquiry-modal'))}
                className="bg-black text-blue-600 hover:bg-gray-100"
              >
                Enroll Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials & Countries */}
      <section className="relative bg-gradient-to-br from-gray-50 to-blue-50 py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 md:grid-cols-2">
            <div className="space-y-8">
              <div className="inline-flex items-center rounded-full bg-pink-100 px-4 py-2 text-sm font-medium text-pink-800 mb-4 border border-pink-200">
                ❤️ Parent Love
              </div>
              <h2 className="text-4xl font-bold tracking-tight text-gray-900">Parents' Testimonials</h2>
              <div className="space-y-6">
                {[
                  { 
                    q: "Speed improved dramatically within a few months.", 
                    a: "— Priya S.",
                    rating: 5
                  },
                  { 
                    q: "He solves without a calculator and enjoys it now!", 
                    a: "— Rohit K.",
                    rating: 5
                  },
                  { 
                    q: "Fun, structured, and motivating classes.", 
                    a: "— Meera A.",
                    rating: 5
                  },
                ].map((t, i) => (
                  <div 
                    key={i} 
                    className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                  >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-rose-500"></div>
                    <div className="flex items-start space-x-4">
                      <div className="flex-1">
                        <p className="text-lg text-gray-800 leading-relaxed">"{t.q}"</p>
                        <div className="flex items-center mt-4 space-x-1">
                          {[...Array(t.rating)].map((_, star) => (
                            <span key={star} className="text-yellow-400">⭐</span>
                          ))}
                        </div>
                        <p className="mt-3 font-medium text-gray-600">{t.a}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 to-purple-700 p-12 shadow-2xl">
              <div className="relative z-10">
                <div className="inline-flex items-center rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white mb-6">
                  🌍 Global Reach
                </div>
                <h3 className="text-3xl font-bold text-white mb-6">
                  Our training has benefitted students across <span className="text-yellow-300">17+ countries</span>
                </h3>
                <p className="text-indigo-100 text-lg leading-relaxed mb-8">
                  Join a global community of learners building a powerful number sense and confidence with math.
                </p>
                <Button 
                  onClick={() => window.dispatchEvent(new CustomEvent('open-enquiry-modal'))}
                  className="bg-black-black hover:bg-gray-100"
                >
                  Make Your Child a Math Genius
                </Button>
              </div>
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-bl-full"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-tr-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gradient-to-br from-blue-50/80 to-indigo-50/80 backdrop-blur-sm py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900">Frequently Asked Questions</h2>
            <div className="mt-6 divide-y divide-gray-200/60 rounded-xl border border-gray-200/60 bg-white/40 backdrop-blur-sm">
              {[
                { q: "What are the main benefits of enrolling?", a: "Enhanced mental math, faster calculations (often 5x), improved concentration and memory, and a positive impact on academics." },
                { q: "How is the program structured?", a: "Level-based with live classes, practice worksheets, and periodic assessments to track progress." },
                { q: "How often are classes?", a: "Typically twice a week, one hour each session; about three months per level." },
                { q: "Online vs. offline?", a: "Choose live online classes or join a nearby center. Both follow the same structured curriculum." },
                { q: "How can parents support?", a: "Encourage regular practice and celebrate milestones. Use worksheets to reinforce skills." },
                { q: "How long to complete the program?", a: "Varies by learner; most complete levels progressively over months, building mastery at each step." },
                { q: "What is the cost?", a: "Fees depend on location and mode. Raise an enquiry for details." },
              ].map((f, i) => (
                <details key={i} className="group p-4">
                  <summary className="cursor-pointer list-none font-medium text-gray-800">
                    <span className="mr-2 inline-block rounded-full border border-gray-400 p-1 text-gray-600 group-open:rotate-45 transition-transform">+</span>
                    {f.q}
                  </summary>
                  <p className="mt-2 text-sm text-gray-700">{f.a}</p>
                </details>
              ))}
            </div>
            {/* <div className="mt-6 flex gap-3">
              <Button href="EXTERNAL_FORM">Enquiry</Button>
              <Button href="/blog" variant="secondary">Blogs</Button>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}