
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
          <div className="absolute inset-0 bg-black/45"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            Nexamine – Where Aspirants Evolve
          </h1>
          
          <div className="backdrop-blur-md bg-white/10 rounded-xl p-8 max-w-3xl mx-auto mb-8 shadow-2xl border border-white/20">
            <p className="text-xl text-blue-100 leading-relaxed mb-6">
              Your ultimate UPSC companion – organized, updated, and smartly curated to help you learn faster and aim higher.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 text-sm">
              <div className="flex items-center justify-center space-x-2">
                <span>📚</span>
                <span>Curated GS Insights</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <span>🧠</span>
                <span>Smarter Revision Tools</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <span>🎯</span>
                <span>Topic-wise Practice</span>
              </div>
            </div>
            
            <Link
              to="/upsc"
              className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <span>Start Your UPSC Journey</span>
              <ArrowRight size={20} />
            </Link>
          </div>
          
          <div className="hero-footer-text mt-8">
            <p className="text-lg text-blue-200 flex items-center justify-center space-x-2">
              <span>Powered by</span>
              <img src="/lovable-uploads/ea93eba9-8693-49b7-997d-823c12ac19f4.png" alt="Nexensia AI Logo" className="h-4 align-middle" />
              <span>• Connect with Nexamine to reach your goals easier</span>
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
