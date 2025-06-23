
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { ArrowRight, BookOpen, FileText, Search } from 'lucide-react';

const Index = () => {
  return (
    <Layout>
      {/* Hero Banner */}
      <section className="hero-banner bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/lovable-uploads/3cd6c9b9-e4f4-419e-9d31-b8b22cdd63ed.png" 
            alt="Nexamine - Where Aspirants Evolve" 
            className="w-full h-full object-cover opacity-90"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <Link
              to="/upsc"
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl border border-white/20"
            >
              <span>Start Your UPSC Journey</span>
              <ArrowRight size={20} />
            </Link>
          </div>
          
          <div className="hero-footer-text mt-8">
            <p className="text-lg text-blue-200">
              Powered by Nexensia AI • Connect with Nexamine to reach your goals easier
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive UPSC Preparation
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to succeed in your UPSC journey, enhanced with smart technology
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <FileText className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Current Affairs</h3>
              <p className="text-gray-600 leading-relaxed">
                Daily curated content from The Hindu, PIB, and Yojana with enhanced insights 
                and editorial analysis tagged by GS papers.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <BookOpen className="text-green-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Mock Tests</h3>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive mock exams for Prelims and Mains with detailed analysis 
                and personalized feedback to track your progress.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Search className="text-purple-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Smart Tools</h3>
              <p className="text-gray-600 leading-relaxed">
                Personalized study plans, intelligent content curation, and adaptive 
                learning powered by Nexamine technology.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
