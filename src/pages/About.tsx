
import Layout from '@/components/Layout';
import { Target, Users, Award, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Nexamine</h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
            Empowering UPSC aspirants with innovative technology and comprehensive resources
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Our Mission</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Nexamine helps UPSC aspirants succeed through smart tools, curated content, and mock exams. 
              We believe that every aspirant deserves access to high-quality preparation materials and 
              personalized guidance to achieve their dreams of serving the nation.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our platform combines innovative technology with expertly curated educational 
              content to create a comprehensive learning ecosystem that adapts to each individual's needs 
              and learning style.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600">
                Committed to providing the highest quality educational content and tools.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Community</h3>
              <p className="text-gray-600">
                Building a supportive community of aspirants helping each other succeed.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">
                Leveraging cutting-edge technology to revolutionize exam preparation.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-orange-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Success</h3>
              <p className="text-gray-600">
                Dedicated to helping every aspirant achieve their UPSC goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Powered by Innovation</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Our advanced technology analyzes vast amounts of educational content, current affairs, 
              and exam patterns to provide personalized learning experiences. Nexamine continuously 
              adapts to your learning progress, identifies knowledge gaps, and suggests targeted 
              improvements to optimize your preparation strategy.
            </p>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl">
              <p className="text-gray-700 italic text-lg">
                "Where innovative technology meets human aspiration, creating pathways to success 
                in the most challenging examinations."
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
