
import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';
import { BookOpen, FileText, Newspaper, Users, Award, Clock } from 'lucide-react';

const UPSC = () => {
  const resources = [
    {
      title: 'Prelims',
      description: 'Comprehensive preparation for UPSC Preliminary examination',
      icon: BookOpen,
      color: 'blue',
      link: '/upsc/prelims'
    },
    {
      title: 'Mains',
      description: 'In-depth coverage for UPSC Mains examination',
      icon: FileText,
      color: 'green',
      link: '/upsc/mains'
    },
    {
      title: 'Current Affairs',
      description: 'Daily updates and analysis from trusted sources',
      icon: Newspaper,
      color: 'purple',
      link: '/current-affairs'
    },
    {
      title: 'Mock Tests',
      description: 'Practice tests with detailed performance analysis',
      icon: Award,
      color: 'orange',
      link: '/upsc/mock-tests'
    },
    {
      title: 'Interview',
      description: 'Personality test preparation and guidance',
      icon: Users,
      color: 'pink',
      link: '/upsc/interview'
    },
    {
      title: 'Past Papers',
      description: 'Previous year question papers with solutions',
      icon: Clock,
      color: 'indigo',
      link: '/upsc/past-papers'
    }
  ];

  const colorClasses = {
    blue: 'bg-blue-100 text-blue-600 hover:bg-blue-200',
    green: 'bg-green-100 text-green-600 hover:bg-green-200',
    purple: 'bg-purple-100 text-purple-600 hover:bg-purple-200',
    orange: 'bg-orange-100 text-orange-600 hover:bg-orange-200',
    pink: 'bg-pink-100 text-pink-600 hover:bg-pink-200',
    indigo: 'bg-indigo-100 text-indigo-600 hover:bg-indigo-200'
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">UPSC Resources</h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed mb-8">
            Explore current affairs, GS notes, mock tests, and personalized tools powered by Nexamine
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto">
            <p className="text-blue-100 leading-relaxed">
              Everything you need for comprehensive UPSC preparation, organized and enhanced 
              with smart insights to accelerate your learning journey.
            </p>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource) => {
              const Icon = resource.icon;
              const colorClass = colorClasses[resource.color as keyof typeof colorClasses];
              
              return (
                <Link
                  key={resource.title}
                  to={resource.link}
                  className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 transition-colors duration-300 ${colorClass}`}>
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {resource.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Study Companion Section */}
      <section className="bg-gradient-to-r from-blue-50 to-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Nexamine Study Companion
            </h2>
            <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
              <div className="text-left mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">📚 Connect with Nexamine:</h3>
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
                  <p className="text-gray-700 italic">
                    "Hi Nexamine, I only have 30 minutes today. Can you summarize today's current affairs 
                    tagged by GS paper, and suggest one practice question based on them? Also, let me know 
                    if there's a video I can watch to revise quicker."
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Smart Features:</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Time-optimized study plans</li>
                    <li>• GS paper correlation</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Study Support:</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Video summaries available</li>
                    <li>• Practice questions included</li>
                  </ul>
                </div>
              </div>
            </div>
            <p className="text-lg text-gray-600">
              Connect with Nexamine to reach your goals easier with personalized, 
              time-optimized learning that adapts to your busy schedule.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default UPSC;
