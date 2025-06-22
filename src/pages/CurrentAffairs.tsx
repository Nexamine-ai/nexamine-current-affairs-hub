
import Layout from '@/components/Layout';
import { Calendar, Tag, BookOpen, ExternalLink, Filter, Search } from 'lucide-react';

const CurrentAffairs = () => {
  // Sample data - you can replace this with actual daily updates
  const currentAffairsData = [
    {
      id: 1,
      title: "India's Digital Infrastructure Development",
      source: "The Hindu",
      date: "2025-06-22",
      category: "Economy",
      gsRelevance: ["GS3"],
      tags: ["Digital India", "Technology", "Economic Development"],
      summary: "Recent developments in India's digital infrastructure showing significant progress in connectivity and digital governance.",
      aiInsight: "This topic is crucial for GS3 (Technology & Economic Development). Focus on government initiatives, impact on rural development, and challenges in implementation.",
      readTime: "3 min read"
    },
    {
      id: 2,
      title: "Climate Change Adaptation Strategies",
      source: "PIB",
      date: "2025-06-22",
      category: "Environment",
      gsRelevance: ["GS3", "GS1"],
      tags: ["Climate Change", "Environment", "Policy"],
      summary: "Government announces new climate adaptation strategies with focus on vulnerable communities and sustainable development.",
      aiInsight: "Relevant for both GS1 (Geography) and GS3 (Environment). Study the intersection of climate policy and socio-economic development.",
      readTime: "4 min read"
    },
    {
      id: 3,
      title: "Healthcare Reforms and Rural Access",
      source: "Yojana",
      date: "2025-06-22",
      category: "Governance",
      gsRelevance: ["GS2"],
      tags: ["Healthcare", "Rural Development", "Governance"],
      summary: "Analysis of recent healthcare reforms and their impact on improving medical access in rural areas.",
      aiInsight: "Key topic for GS2 (Governance & Social Justice). Focus on policy implementation, challenges, and outcomes.",
      readTime: "5 min read"
    }
  ];

  const categories = ["All", "Economy", "Environment", "Governance", "International", "Science & Tech"];
  const sources = ["All", "The Hindu", "PIB", "Yojana", "Economic Times"];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Daily Current Affairs</h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
              Content curated from The Hindu, PIB, Yojana, tagged by GS paper and enhanced with AI insights and editorials
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-6 text-blue-100">
              <div className="flex items-center space-x-2">
                <Calendar size={20} />
                <span className="font-semibold">Today: June 22, 2025</span>
              </div>
              <div className="flex items-center space-x-2">
                <Tag size={20} />
                <span>{currentAffairsData.length} Articles</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center space-x-2">
              <Filter size={20} className="text-gray-500" />
              <span className="font-medium text-gray-700">Filters:</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-gray-600">Category:</span>
              <select className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-gray-600">Source:</span>
              <select className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                {sources.map(source => (
                  <option key={source} value={source}>{source}</option>
                ))}
              </select>
            </div>

            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {currentAffairsData.map((article) => (
              <article key={article.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-blue-600 cursor-pointer transition-colors">
                        {article.title}
                      </h2>
                      <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md font-medium">
                          {article.source}
                        </span>
                        <span>{article.date}</span>
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    {article.summary}
                  </p>

                  {/* AI Insight */}
                  <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-lg mb-6 border-l-4 border-purple-500">
                    <div className="flex items-start space-x-2">
                      <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-purple-600 font-bold text-xs">AI</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-purple-900 mb-1">Nexensia AI Insight:</h4>
                        <p className="text-purple-800 text-sm leading-relaxed">{article.aiInsight}</p>
                      </div>
                    </div>
                  </div>

                  {/* Tags and GS Relevance */}
                  <div className="flex flex-wrap items-center gap-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-gray-600">GS Papers:</span>
                      {article.gsRelevance.map((gs, index) => (
                        <span key={index} className="bg-green-100 text-green-800 px-2 py-1 rounded-md text-xs font-medium">
                          {gs}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-gray-600">Tags:</span>
                      {article.tags.map((tag, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button className="ml-auto flex items-center space-x-1 text-blue-600 hover:text-blue-800 text-sm font-medium">
                      <span>Read Full Article</span>
                      <ExternalLink size={14} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Update Notice */}
      <section className="bg-blue-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 text-blue-800">
            <Calendar size={20} />
            <p className="font-medium">
              Current Affairs are updated daily at 8:00 AM IST with fresh content and AI analysis
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CurrentAffairs;
