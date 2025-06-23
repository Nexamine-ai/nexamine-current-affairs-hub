
import Layout from '@/components/Layout';
import { Mail, MessageCircle, Clock, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
            Have questions? We're here to help you succeed in your UPSC journey
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Reach Out</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Whether you have questions about our platform, need technical support, or want to 
                share feedback, we'd love to hear from you. Our team is dedicated to helping you 
                make the most of your UPSC preparation journey.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Mail className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Email Support</h3>
                <p className="text-gray-600 mb-4">
                  Get in touch with our support team for any questions or assistance.
                </p>
                <a 
                  href="mailto:ask.nexamine@gmail.com" 
                  className="text-blue-600 hover:text-blue-800 font-semibold text-lg"
                >
                  ask.nexamine@gmail.com
                </a>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <MessageCircle className="text-green-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Feedback</h3>
                <p className="text-gray-600 mb-4">
                  Share your suggestions and help us improve the platform for all aspirants.
                </p>
                <p className="text-gray-500">
                  Use the same email for feedback and feature requests
                </p>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="text-blue-600" size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Response Time</h4>
                    <p className="text-gray-600">
                      We typically respond to all inquiries within 24-48 hours during business days.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-purple-600" size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Support Hours</h4>
                    <p className="text-gray-600">
                      Monday to Friday, 9:00 AM to 6:00 PM IST. We're here to help!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center mt-12">
              <p className="text-lg text-gray-600 mb-6">
                Ready to start your preparation journey?
              </p>
              <a 
                href="/upsc" 
                className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200"
              >
                <span>Explore UPSC Resources</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
