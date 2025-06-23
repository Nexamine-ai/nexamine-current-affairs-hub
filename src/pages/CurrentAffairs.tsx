
import Layout from '@/components/Layout';
import { useState } from 'react';
import { Calendar, Tag, BookOpen, ExternalLink, ArrowLeft, ChevronRight } from 'lucide-react';

const CurrentAffairs = () => {
  const [currentView, setCurrentView] = useState('years'); // 'years', 'months', 'days', 'article'
  const [selectedYear, setSelectedYear] = useState<string>('');
  const [selectedMonth, setSelectedMonth] = useState<string>('');
  const [selectedDay, setSelectedDay] = useState<string>('');

  const years = ['2025', '2024'];
  const months = ['June', 'May', 'April', 'March', 'February', 'January'];
  const days = ['22', '21', '20', '19', '18'];

  const currentAffairsData = [
    {
      title: "UCC Debate in India",
      gsRelevance: "GS2: Polity",
      description: "Recent developments in the Uniform Civil Code discussion across states."
    },
    {
      title: "RBI's Monetary Review", 
      gsRelevance: "GS3: Economy",
      description: "Key policy changes and their implications for the Indian economy."
    },
    {
      title: "Climate Action Report",
      gsRelevance: "GS3: Environment", 
      description: "India's progress on climate commitments and future roadmap."
    }
  ];

  const handleYearSelect = (year: string) => {
    setSelectedYear(year);
    setCurrentView('months');
  };

  const handleMonthSelect = (month: string) => {
    setSelectedMonth(month);
    setCurrentView('days');
  };

  const handleDaySelect = (day: string) => {
    setSelectedDay(day);
    setCurrentView('article');
  };

  const handleBack = () => {
    if (currentView === 'months') {
      setCurrentView('years');
      setSelectedYear('');
    } else if (currentView === 'days') {
      setCurrentView('months');
      setSelectedMonth('');
    } else if (currentView === 'article') {
      setCurrentView('days');
      setSelectedDay('');
    }
  };

  const getBreadcrumb = () => {
    const parts = ['Current Affairs'];
    if (selectedYear) parts.push(selectedYear);
    if (selectedMonth) parts.push(selectedMonth);
    if (selectedDay) parts.push(selectedDay);
    return parts.join(' > ');
  };

  return (
    <Layout>
      {/* Hero Banner */}
      <section className="hero-banner bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/lovable-uploads/3cd6c9b9-e4f4-419e-9d31-b8b22cdd63ed.png" 
            alt="Nexamine - Where Aspirants Evolve" 
            className="w-full h-full object-cover opacity-90"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="hero-footer-text mt-8">
            <p className="text-lg text-blue-200">
              Powered by Nexensia AI • Connect with Nexamine to reach your goals easier
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Section */}
      <section className="bg-slate-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              {currentView !== 'years' && (
                <button
                  onClick={handleBack}
                  className="flex items-center space-x-2 text-blue-300 hover:text-white transition-colors"
                >
                  <ArrowLeft size={20} />
                  <span>Back</span>
                </button>
              )}
              <div className="text-gray-300">
                {getBreadcrumb()}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Left Sidebar Navigation */}
            <div className="lg:col-span-1">
              <div className="bg-slate-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Current Affairs</h3>
                <div className="space-y-2">
                  {currentView === 'years' && (
                    <div className="text-blue-300 font-medium">Select Year</div>
                  )}
                  {selectedYear && (
                    <div className="text-white">{selectedYear}</div>
                  )}
                  {selectedMonth && (
                    <div className="text-white">{selectedMonth}</div>
                  )}
                  {selectedDay && (
                    <div className="text-blue-300 font-medium">{selectedDay}</div>
                  )}
                </div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="lg:col-span-3">
              {currentView === 'years' && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Select Year</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {years.map((year) => (
                      <button
                        key={year}
                        onClick={() => handleYearSelect(year)}
                        className="bg-slate-800 hover:bg-slate-700 p-6 rounded-lg text-center transition-colors"
                      >
                        <div className="text-2xl font-bold">{year}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {currentView === 'months' && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Select Month - {selectedYear}</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {months.map((month) => (
                      <button
                        key={month}
                        onClick={() => handleMonthSelect(month)}
                        className="bg-slate-800 hover:bg-slate-700 p-6 rounded-lg text-center transition-colors"
                      >
                        <div className="text-xl font-semibold">{month}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {currentView === 'days' && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Select Date - {selectedMonth} {selectedYear}</h2>
                  <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
                    {days.map((day) => (
                      <button
                        key={day}
                        onClick={() => handleDaySelect(day)}
                        className="bg-slate-800 hover:bg-slate-700 p-4 rounded-lg text-center transition-colors"
                      >
                        <div className="text-xl font-bold">{day}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {currentView === 'article' && (
                <div>
                  <h1 className="text-3xl font-bold mb-4">
                    Daily Current Affairs – {selectedMonth} {selectedDay}, {selectedYear}
                  </h1>
                  <p className="text-gray-300 mb-8">
                    Curated from The Hindu, PIB, Yojana — tagged by GS paper and summarized with editorials and insights.
                  </p>

                  <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-6">Articles</h2>
                    <div className="space-y-4">
                      {currentAffairsData.map((article, index) => (
                        <div key={index} className="bg-slate-800 p-6 rounded-lg">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                                {article.gsRelevance}
                              </span>
                              <p className="text-gray-300 mt-3">{article.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-slate-800 p-6 rounded-lg">
                    <h3 className="text-2xl font-semibold mb-4">🎥 Watch Today's Video</h3>
                    <a 
                      href="https://youtube.com/watch?v=YOUR_VIDEO_ID" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 text-lg underline"
                    >
                      <span>Click here to watch on YouTube</span>
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CurrentAffairs;
