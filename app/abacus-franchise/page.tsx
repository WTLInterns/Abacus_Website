"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, MapPin, DollarSign, Headset, ShieldCheck } from "lucide-react";
import Button from "../components/Button";

export default function AbacusFranchise() {
  const benefits = [
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Brand Trust",
      description: "Leverage our established brand reputation and customer loyalty"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "High ROI",
      description: "Proven business model with attractive profit margins"
    },
    {
      icon: <Headset className="w-8 h-8" />,
      title: "Full Support",
      description: "Comprehensive training and ongoing operational support"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Territory Protection",
      description: "Exclusive rights to your designated area"
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Application",
      description: "Submit your franchise application"
    },
    {
      number: "02",
      title: "Review",
      description: "Our team reviews your application"
    },
    {
      number: "03",
      title: "Approval",
      description: "Personal consultation & approval"
    },
    {
      number: "04",
      title: "Launch",
      description: "Training & grand opening"
    }
  ];

  const testimonials = [
    {
      quote: "Joining this franchise was the best business decision I've made. The support is exceptional!",
      name: "Sarah Johnson",
      location: "New York, USA",
      role: "Franchisee since 2021"
    },
    {
      quote: "The training program is comprehensive, and the ongoing support is outstanding. Highly recommended!",
      name: "Michael Chen",
      location: "San Francisco, USA",
      role: "Franchisee since 2020"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
        <div className="container mx-auto px-4 py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block bg-yellow-500/20 text-yellow-400 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
                FRANCHISE OPPORTUNITY
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Become Our Abacus Franchise Partner
              </h1>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
                Join hands with a trusted brand and start your profitable educational journey today
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  onClick={() => window.dispatchEvent(new CustomEvent('open-enquiry-modal'))}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold px-8 py-4 rounded-lg transition-colors inline-block"
                >
                  Apply Now
                </motion.button>
                <motion.a
                  href="#why-partner"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="border-2 border-white/20 hover:bg-white/10 text-white font-medium px-8 py-4 rounded-lg transition-colors inline-block"
                >
                  Learn More
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Why Partner With Us */}
      <section id="why-partner" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Partner With Us?</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-yellow-500 to-amber-400 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-600">
              We provide everything you need to establish and grow a successful educational franchise
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="w-16 h-16 bg-blue-900/5 rounded-xl flex items-center justify-center text-yellow-500 mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Franchise Model */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2 bg-gradient-to-br from-blue-900 to-blue-800 text-white p-12">
                  <h2 className="text-3xl font-bold mb-6">Our Franchise Model</h2>
                  <p className="text-blue-100 mb-8">
                    We've designed our franchise program for maximum success with minimal risk
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Low Initial Investment with High ROI",
                      "Comprehensive Training Program",
                      "Ongoing Marketing Support",
                      "Exclusive Territory Rights",
                      "Proven Business Systems",
                      "Dedicated Support Team"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="w-5 h-5 text-yellow-500 mt-0.5 mr-3 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="md:w-1/2 p-12">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">Investment Details</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Total Investment</h4>
                      <p className="text-3xl font-bold text-yellow-600">$50,000 - $150,000</p>
                      <p className="text-sm text-gray-500 mt-1">Varies by location and size</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Franchise Fee</h4>
                      <p className="text-xl font-semibold text-gray-900">$25,000</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Royalty Fee</h4>
                      <p className="text-lg text-gray-900">6% of Gross Sales</p>
                    </div>
                    <div className="pt-4">
                      <Button className="w-full">Request an Inquiry</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Simple 4-Step Process</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-yellow-500 to-amber-400 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-600">
              Becoming a part of our Abacus family is a straightforward journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg border border-gray-100"
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-900 text-yellow-500 text-2xl font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Hear From Our Franchisees</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-yellow-500 to-amber-400 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-600">
              Don't just take our word for it - hear from our successful franchise partners
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
              >
                <div className="text-yellow-400 text-4xl mb-4">"</div>
                <p className="text-gray-700 italic mb-6">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-900 font-bold mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role} • {testimonial.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      {/* <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-2/5 bg-gradient-to-br from-blue-900 to-blue-800 text-white p-10">
                <h2 className="text-3xl font-bold mb-6">Start Your Journey</h2>
                <p className="text-blue-100 mb-8">
                  Fill out the form and our franchise team will contact you within 24 hours
                </p>
                <div className="space-y-5">
                  <div className="flex items-start">
                    <div className="bg-blue-700/50 p-3 rounded-lg mr-4">
                      <MapPin className="w-5 h-5 text-yellow-400" />
                    </div>
                    <div>
                      <h4 className="font-medium">Location</h4>
                      <p className="text-blue-200 text-sm">123 Education Ave, Suite 100<br />New York, NY 10001</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-700/50 p-3 rounded-lg mr-4">
                      <Headset className="w-5 h-5 text-yellow-400" />
                    </div>
                    <div>
                      <h4 className="font-medium">Call Us</h4>
                      <p className="text-blue-200 text-sm">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-3/5 p-10">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Franchise Application</h3>
                <form className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone</label>
                      <input
                        type="tel"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        placeholder="+91 78210 67359"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Preferred Location (City, State)</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      placeholder="e.g., New York, NY"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Tell us about your interest in Abacus Franchise
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
                  >
                    Submit Application
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Educational Franchise Journey?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Join our network of successful franchisees and make a difference in your community
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold px-8 py-4 rounded-lg transition-colors inline-block"
              >
                Apply Now
              </motion.a>
              <motion.a
                href="tel:+15551234567"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="border-2 border-white/20 hover:bg-white/10 text-white font-medium px-8 py-4 rounded-lg transition-colors inline-block"
              >
                Call Us Now
              </motion.a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
