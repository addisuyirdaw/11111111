import React from 'react';
import { GraduationCap, Heart, Target, Lightbulb } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: 'Dual Discipline',
      description: 'Computer Science & Business Administration at University of the People with ALX Africa training'
    },
    {
      icon: Heart,
      title: 'Mission-Driven',
      description: 'Working towards financial independence to support family and create lasting impact'
    },
    {
      icon: Target,
      title: 'Multi-Talented',
      description: 'Developer, content creator, leader, and lifelong learner with diverse skill set'
    },
    {
      icon: Lightbulb,
      title: 'Solution Builder',
      description: 'Creating technology solutions that drive opportunity and solve real-world problems'
    }
  ];

  const strengths = [
    'Full-Stack Development',
    'Business Strategy',
    'Leadership',
    'Project Management',
    'Problem Solving',
    'Lifelong Learning',
    'Communication',
    'Public Speaking',
    'Collaboration',
    'Time Management',
    'Analytical Thinking',
    'Innovation'
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Blending Computer Science and Business Administration to bridge technology and business strategy
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div className="prose prose-lg text-gray-600">
              <p>
                <strong>Addisu Lal</strong> is a determined and visionary student who blends Computer Science and Business Administration to bridge technology and business strategy.
                He studies at the <strong>University of the People</strong> while completing leadership and software-development training through <strong>ALX Africa</strong>.
              </p>
              <p>
                His mission: to use knowledge and innovation to achieve sustainable financial independence and support his family, especially his mother.
              </p>
              <p>
                Known for resilience and optimism, Addisu thrives in environments that challenge him to grow, lead, and build solutions that matter.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-3">Key Highlights</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-[#0d1b2a] rounded-full mt-2"></div>
                  <span className="text-gray-700"><strong>Full-Stack Development</strong> - Building responsive web applications</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-[#0d1b2a] rounded-full mt-2"></div>
                  <span className="text-gray-700"><strong>Business Strategy</strong> - Combining tech with business acumen</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-[#0d1b2a] rounded-full mt-2"></div>
                  <span className="text-gray-700"><strong>Leadership</strong> - ALX Africa leadership training graduate</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-[#0d1b2a] rounded-full mt-2"></div>
                  <span className="text-gray-700"><strong>Project Management</strong> - Delivering real-world solutions</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-[#0d1b2a] rounded-full mt-2"></div>
                  <span className="text-gray-700"><strong>Problem Solving</strong> - Analytical thinking and innovation</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-[#0d1b2a] rounded-full mt-2"></div>
                  <span className="text-gray-700"><strong>Lifelong Learning</strong> - Continuous growth mindset</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
                  <div className="w-12 h-12 bg-[#e0e1dd] rounded-lg flex items-center justify-center mb-4">
                    <highlight.icon className="w-6 h-6 text-[#0d1b2a]" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{highlight.title}</h3>
                  <p className="text-gray-600 text-sm">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Core Strengths</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {strengths.map((strength, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg">
                <div className="w-2 h-2 bg-[#0d1b2a] rounded-full"></div>
                <span className="text-gray-700 font-medium">{strength}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;