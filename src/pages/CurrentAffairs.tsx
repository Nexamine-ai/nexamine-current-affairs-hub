// src/pages/CurrentAffairs.tsx
import Layout from '@/components/Layout';
import { useEffect, useState } from 'react';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const years = ['2025', '2024'];
const months = ['June', 'May', 'April', 'March', 'February', 'January'];
const days = ['22', '21', '20', '19', '18'];

const useCurrentAffairsContent = (year: string, month: string, day: string) => {
  const [htmlContent, setHtmlContent] = useState<string>('');
  const [videoLink, setVideoLink] = useState<string>('');

  useEffect(() => {
    const basePath = `/upsc/current-affairs/${year}/${month}/${day}`;

    fetch(`${basePath}/index.html`)
      .then((res) => res.text())
      .then(setHtmlContent)
      .catch(() => setHtmlContent('<p class="text-red-500">Content not available.</p>'));

    fetch(`${basePath}/video-link.txt`)
      .then((res) => res.text())
      .then(setVideoLink)
      .catch(() => setVideoLink(''));
  }, [year, month, day]);

  return { htmlContent, videoLink };
};

const CurrentAffairs = () => {
  const [currentView, setCurrentView] = useState('years');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedDay, setSelectedDay] = useState('');

  const { htmlContent, videoLink } = useCurrentAffairsContent(selectedYear, selectedMonth, selectedDay);

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

  return (
    <Layout>
      <section className="hero-banner bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/Nexamine-uploads/3cd6c9b9-e4f4-419e-9d31-b8b22cdd63ed.png" alt="Nexamine - Where Aspirants Evolve" className="w-full h-full object-cover opacity-90" />
          <div className="absolute inset-0 bg-black/45"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">Current Affairs</h1>
          <p className="text-xl text-blue-200 leading-relaxed">
            Daily curated content from The Hindu, PIB, and Yojana with enhanced insights and editorial analysis tagged by GS papers.
          </p>
        </div>
      </section>

      <section className="bg-slate-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center space-x-4 mb-6">
            {currentView !== 'years' && (
              <button onClick={handleBack} className="flex items-center text-blue-300 hover:text-white transition-colors">
                <ArrowLeft size={20} />
                <span className="ml-2">Back</span>
              </button>
            )}
            <div className="text-gray-300">
              Current Affairs{selectedYear && ` > ${selectedYear}`}{selectedMonth && ` > ${selectedMonth}`}{selectedDay && ` > ${selectedDay}`}
            </div>
          </div>

          {currentView === 'years' && (
            <>
              <h2 className="text-2xl font-bold mb-6">Select Year</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {years.map((year) => (
                  <button key={year} onClick={() => {
                    setSelectedYear(year);
                    setCurrentView('months');
                  }}
                    className="bg-slate-800 hover:bg-slate-700 p-6 rounded-lg text-center transition-colors"
                  >
                    <div className="text-2xl font-bold">{year}</div>
                  </button>
                ))}
              </div>
            </>
          )}

          {currentView === 'months' && (
            <>
              <h2 className="text-2xl font-bold mb-6">Select Month - {selectedYear}</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {months.map((month) => (
                  <button key={month} onClick={() => {
                    setSelectedMonth(month);
                    setCurrentView('days');
                  }}
                    className="bg-slate-800 hover:bg-slate-700 p-6 rounded-lg text-center transition-colors"
                  >
                    <div className="text-xl font-semibold">{month}</div>
                  </button>
                ))}
              </div>
            </>
          )}

          {currentView === 'days' && (
            <>
              <h2 className="text-2xl font-bold mb-6">Select Date - {selectedMonth} {selectedYear}</h2>
              <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
                {days.map((day) => (
                  <button key={day} onClick={() => {
                    setSelectedDay(day);
                    setCurrentView('article');
                  }}
                    className="bg-slate-800 hover:bg-slate-700 p-4 rounded-lg text-center transition-colors"
                  >
                    <div className="text-xl font-bold">{day}</div>
                  </button>
                ))}
              </div>
            </>
          )}

          {currentView === 'article' && (
            <div>
              <h1 className="text-3xl font-bold mb-4">Daily Current Affairs – {selectedMonth} {selectedDay}, {selectedYear}</h1>
              <p className="text-gray-300 mb-8">
                Curated from The Hindu, PIB, Yojana — tagged by GS paper and summarized with editorials and insights.
              </p>

              {htmlContent && (
                <div className="prose prose-invert max-w-none bg-slate-800 p-6 rounded-lg" dangerouslySetInnerHTML={{ __html: htmlContent }} />
              )}

              {videoLink && (
                <div className="bg-slate-800 p-6 rounded-lg mt-6">
                  <h3 className="text-xl font-bold mb-3">🎥 Watch Summary</h3>
                  <a
                    href={videoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 text-lg underline"
                  >
                    <span>Click here to watch on YouTube</span>
                    <ExternalLink size={16} />
                  </a>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default CurrentAffairs;
