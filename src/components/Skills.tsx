import React from 'react';
import { Code, Database, Palette, Users, BarChart, Globe } from 'lucide-react';

const Skills = () => {
  const technicalSkills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 75 },
    { name: 'Python', level: 70 },
    { name: 'Git & GitHub', level: 80 },
    { name: 'MySQL / MongoDB', level: 70 },
    { name: 'API Integration', level: 75 },
    { name: 'Responsive Design', level: 85 }
  ];

  const professionalSkills = [
    'Communication',
    'Leadership',
    'Business Strategy',
    'Project Management',
    'Public Speaking',
    'Collaboration',
    'Time Management',
    'Problem Solving',
    'Critical Thinking',
    'Adaptability'
  ];


  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Technical expertise combined with strong professional skills
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Technical Skills */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-[#e0e1dd] mr-4">
                <Code className="w-6 h-6 text-[#0d1b2a]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Technical Skills</h3>
            </div>
            <div className="space-y-4">
              {technicalSkills.map((skill, idx) => (
                <div key={idx}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                    <span className="text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="h-2 rounded-full bg-[#0d1b2a] transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Skills */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-[#e0e1dd] mr-4">
                <Users className="w-6 h-6 text-[#0d1b2a]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Professional Skills</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {professionalSkills.map((skill, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-2 h-2 bg-[#0d1b2a] rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700 font-medium text-sm">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;