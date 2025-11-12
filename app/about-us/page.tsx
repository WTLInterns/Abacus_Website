"use client";
import { motion } from "framer-motion";
import { BrainCircuit, GraduationCap, Users, Award, BookOpen, Lightbulb, Check } from "lucide-react";
import Image from "next/image";

export default function AboutUs() {
  const features = [
    {
      icon: <GraduationCap className="w-8 h-8 text-yellow-500" />,
      title: "Expert Educators",
      description: "Certified abacus instructors with years of teaching experience"
    },
    {
      icon: <BrainCircuit className="w-8 h-8 text-blue-500" />,
      title: "Proven Methodology",
      description: "Research-based curriculum designed for optimal learning"
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: "Student-Centric",
      description: "Personalized attention to each student's learning journey"
    },
    {
      icon: <Award className="w-8 h-8 text-red-500" />,
      title: "Award-Winning",
      description: "Recognized for excellence in abacus education"
    }
  ];

  const team = [
    {
      name: "John Doe",
      role: "Founder & Master Trainer",
      image: "/team/placeholder-1.jpg",
      description: "15+ years of experience in abacus education"
    },
    {
      name: "Jane Smith",
      role: "Head of Operations",
      image: "/team/placeholder-2.jpg",
      description: "Expert in educational program management"
    },
    {
      name: "Robert Johnson",
      role: "Senior Instructor",
      image: "/team/placeholder-3.jpg",
      description: "Specialist in child cognitive development"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
        <div className="container mx-auto px-4 py-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block bg-yellow-500/20 text-yellow-400 text-sm font-medium px-4 py-1.5 rounded-full mb-6">ABOUT VERTEX ABACUS</span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Empowering Young Minds Through Abacus Learning</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">Transforming the way children learn math and develop cognitive abilities through our innovative abacus programs.</p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-2xl shadow-lg"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                <Lightbulb className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Our Mission</h2>
              <p className="text-gray-600 mb-6">To make quality abacus education accessible to every child, helping them unlock their full potential and develop essential life skills through mental arithmetic.</p>
              <ul className="space-y-3">
                {["Foster a love for learning", "Enhance mental calculation skills", "Boost confidence and concentration", "Develop problem-solving abilities"].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-blue-900 text-white p-8 rounded-2xl shadow-xl relative overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-500/10 rounded-full"></div>
              <div className="w-16 h-16 bg-yellow-500/20 rounded-xl flex items-center justify-center text-yellow-400 mb-6">
                <BookOpen className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-blue-100 mb-6">To be the leading abacus education provider, recognized for nurturing confident, creative, and mathematically proficient individuals who excel in all areas of life.</p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">10+</div>
                  <div className="text-sm text-blue-200">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">5,000+</div>
                  <div className="text-sm text-blue-200">Students Trained</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">50+</div>
                  <div className="text-sm text-blue-200">Certified Trainers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">98%</div>
                  <div className="text-sm text-blue-200">Satisfaction Rate</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block bg-yellow-500/20 text-yellow-600 text-sm font-medium px-4 py-1.5 rounded-full mb-4">WHY CHOOSE US</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Core Strengths</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-600">We are committed to providing the best abacus learning experience for your child</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block bg-blue-100 text-blue-600 text-sm font-medium px-4 py-1.5 rounded-full mb-4">MEET OUR TEAM</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Expert Educators</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-yellow-500 to-amber-400 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-600">Passionate professionals dedicated to your child's success</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="h-64 bg-gray-200 relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiB2aWV3Qm94PSIwIDAgNDAwIDQwMCI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSI0MDAiIGZpbGw9IiNlZWVlZWUiLz48L3N2Zz4="
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-yellow-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Child's Abacus Journey?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">Join hundreds of students who have already discovered the joy of learning with us</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold px-8 py-4 rounded-lg transition-colors inline-block"
              >
                Get Started Today
              </motion.a>
              <motion.a
                href="/programs"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="border-2 border-white/20 hover:bg-white/10 text-white font-medium px-8 py-4 rounded-lg transition-colors inline-block"
              >
                View Our Programs
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
