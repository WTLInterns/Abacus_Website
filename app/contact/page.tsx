"use client";
import Button from "../components/Button";

export default function Contact() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h1>
          <p className="text-xl text-gray-600">Reach out to us for any questions or to schedule a free demo</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-white rounded-xl shadow-lg p-8 h-fit">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 p-3 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Our Location</h3>
                  <p className="mt-1 text-gray-600">Handewadi, Pune, Maharashtra 411028</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 p-3 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Email Us</h3>
                  <a href="mailto:vertex.priyanka1@gmail.com" className="mt-1 text-blue-600 hover:underline">vertex.priyanka1@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 p-3 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Call Us</h3>
                  <a href="tel:7821067359" className="mt-1 text-blue-600 hover:underline">+91 78210 67359</a>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Business Hours</h3>
              <div className="space-y-2 text-gray-600">
                <p className="flex justify-between"><span>Monday - Friday</span> <span>9:00 AM - 7:00 PM</span></p>
                <p className="flex justify-between"><span>Saturday</span> <span>10:00 AM - 5:00 PM</span></p>
                <p className="flex justify-between"><span>Sunday</span> <span>Closed</span></p>
              </div>
            </div>

            <div className="mt-8">
              <Button 
                onClick={() => window.dispatchEvent(new CustomEvent('open-enquiry-modal'))}
                className="w-full py-3 text-lg"
              >
                Send Us a Message
              </Button>
            </div>
          </div>

          {/* Map */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden h-[600px]">
            <iframe
              src="https://www.google.com/maps?q=Handewadi,+Pune&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Vertex Abacus Location"
            ></iframe>
            <div className="p-3 border-t text-sm text-blue-600">
              <a href="https://maps.app.goo.gl/pjrTT8zWymaYM3JN9" target="_blank" rel="noopener noreferrer">Open in Google Maps</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
