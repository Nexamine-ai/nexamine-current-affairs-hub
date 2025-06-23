
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { ArrowRight, BookOpen, FileText, Search } from 'lucide-react';

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
              <img 
                src="/lovable-uploads/e6663e7e-c4e9-40de-9eff-67fc319627c5.png" 
                alt="Nexamine Logo" 
                className="w-12 h-12"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Nexamine
            </h1>
            <p className="text-2xl md:text-3xl font-light text-blue-100 mb-8">
              Where Aspirants Evolve
            </p>
            <p className="text-lg md:text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
              Transform your UPSC preparation with smart tools, curated content, 
              and comprehensive mock exams. Connect with Nexamine to reach your goals easier.
            </p>
          </div>
          
          <Link
            to="/upsc"
            className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <span>Start Your UPSC Journey</span>
            <ArrowRight size={20} />
          </Link>
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
