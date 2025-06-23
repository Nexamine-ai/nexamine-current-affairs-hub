
import { Youtube, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img 
              src="/Nexamine-uploads/e6663e7e-c4e9-40de-9eff-67fc319627c5.png" 
              alt="Nexamine Logo" 
              className="w-6 h-6"
            />
            <span className="text-xl font-bold">Nexamine</span>
          </div>
          <p className="text-gray-400 mb-4">
            © 2025 Nexamine. Powered by <img src="/Nexamine-uploads/56fb0ab2-83db-48b3-868f-db1ec0f7b422.png" alt="Nexensia AI Logo" className="inline h-6 align-middle" /> <span className="text-lg font-semibold">Nexensia AI</span> • Connect with Nexamine to reach your goals easier.
          </p>
          <div className="flex items-center justify-center space-x-6 text-gray-400">
            <a 
              href="https://www.youtube.com/@Nexamine-ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-1 hover:text-white transition-colors"
            >
              <Youtube size={16} />
              <span>YouTube</span>
            </a>
            <a 
              href="https://linkedin.com/in/yourprofile" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-1 hover:text-white transition-colors"
            >
              <Linkedin size={16} />
              <span>LinkedIn</span>
            </a>
            <a 
              href="https://nexamine-ai.github.io/"
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Website
            </a>
            <a 
              href="mailto:ask.nexamine@gmail.com"
              className="hover:text-white transition-colors"
            >
              ask.nexamine@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
