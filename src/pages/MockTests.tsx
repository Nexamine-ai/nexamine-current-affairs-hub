import Layout from '@/components/Layout';
import { useState, useEffect } from 'react';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const years = ['2025', '2024'];
const months = ['June', 'May', 'April', 'March', 'February', 'January'];
const days = ['22', '21', '20', '19', '18'];

const useMockTestContent = (year, month, day) => {
  const [htmlContent, setHtmlContent] = useState(null);
  const [summary, setSummary] = useState(null);
  const [videoLink, setVideoLink] = useState(null);

  useEffect(() => {
    const folder = `/upsc/mock-tests/${year}/${month}/${day}`;

    fetch(`${folder}/index.html`)
      .then((res) => res.text())
      .then(setHtmlContent)
      .catch(() => setHtmlContent(null));

    fetch(`${folder}/summary.txt`)
      .then((res) => res.text())
      .then(setSummary)
      .catch(() => setSummary(null));

    fetch(`${folder}/video-link.txt`)
      .then((res) => res.text())
      .then(setVideoLink)
      .catch(() => setVideoLink(null));
  }, [year, month, day]);

  return { htmlContent, summary, videoLink };
};

const MockTests = () => {
  const [currentView, setCurrentView] = useState('years');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedDay, setSelectedDay] = useState('');

  const { htmlContent, summary, videoLink } = useMockTestContent(selectedYear, selectedMonth, selectedDay);

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
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">Mock Tests</h1>
          <p className="text-xl text-blue-200 leading-relaxed">
            Practice tests with detailed performance insights. Filter by year, month, and date to get started.
          </p>
        </div>
      </section>

      <section className="bg-slate-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center space-x-4 mb-6">
            {currentView !== 'years' && (
              <button
                onClick={handleBack}
                className="flex items-center text-blue-300 hover:text-white transition-colors"
              >
                <ArrowLeft size={20} />
                <span className="ml-2">Back</span>
              </button>
            )}
            <div className="text-gray-300">
              Mock Tests{selectedYear && ` > ${selectedYear}`}{selectedMonth && ` > ${selectedMonth}`}{selectedDay && ` > ${selectedDay}`}
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
              <h1 className="text-3xl font-bold mb-4">
                Mock Test – {selectedMonth} {selectedDay}, {selectedYear}
              </h1>
              <p className="text-gray-300 mb-8">
                Review and analyze test material for UPSC prelims/mains for this date.
              </p>

              {htmlContent && (
                <div
                  className="prose prose-invert max-w-none bg-slate-800 p-6 rounded-lg"
                  dangerouslySetInnerHTML={{ __html: htmlContent }}
                />
              )}

              {summary && (
                <div className="bg-slate-800 p-6 rounded-lg mt-6">
                  <h3 className="text-xl font-bold mb-2">📝 Summary</h3>
                  <p className="text-white leading-relaxed">{summary}</p>
                </div>
              )}

              {videoLink && (
                <div className="bg-slate-800 p-6 rounded-lg mt-6">
                  <h3 className="text-xl font-bold mb-3">🎥 Watch Explanation</h3>
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

export default MockTests;
