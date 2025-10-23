import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'ALX Africa Leadership Program',
      company: 'ALX Africa',
      period: '2024',
      location: 'Virtual',
      description: [
        'Completed leadership and software development training',
        'Worked on real-world team projects and collaborative challenges',
        'Developed technical and professional skills through hands-on learning',
        'Participated in peer learning and mentorship activities'
      ],
      technologies: ['Leadership', 'Team Collaboration', 'Project Management'],
      current: false
    }
  ];

  const education = [
    {
      degree: 'Computer Science',
      institution: 'University of the People',
      period: 'In Progress',
      status: 'In Progress'
    },
    {
      degree: 'Business Administration',
      institution: 'University of the People',
      period: 'In Progress',
      status: 'In Progress'
    },
    {
      degree: 'ALX Africa Virtual Assistant Program',
      institution: 'ALX Africa',
      period: 'Graduate',
      status: 'Completed'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Experience & Education
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Academic background and professional development
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Professional Experience */}
          <div className="lg:col-span-2 space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Professional Experience</h3>
            
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h4 className="text-xl font-semibold text-gray-900">{exp.title}</h4>
                      {exp.current && (
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                          Current
                        </span>
                      )}
                    </div>
                    <div className="flex items-center space-x-4 text-gray-600 mb-2">
                      <span className="font-medium">{exp.company}</span>
                      {exp.link && (
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-blue-600 hover:text-blue-700"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <ul className="space-y-2 mb-4">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-gray-600">
                      <span className="w-1.5 h-1.5 bg-[#0d1b2a] rounded-full mt-2 flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-[#e0e1dd] text-[#0d1b2a] text-sm font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Education</h3>
            
            {education.map((edu, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-semibold text-gray-900">{edu.degree}</h4>
                    <span className="px-2 py-1 bg-[#e0e1dd] text-[#0d1b2a] text-xs font-medium rounded-full">
                      {edu.status}
                    </span>
                  </div>
                  <p className="text-gray-600 font-medium">{edu.institution}</p>
                  <p className="text-gray-500 text-sm">{edu.period}</p>
                </div>
              </div>
            ))}

            <div className="bg-[#e0e1dd] rounded-xl p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Highlights</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-[#0d1b2a] rounded-full mt-2"></div>
                  <span className="text-gray-700">Completed real-world team projects and leadership challenges</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-[#0d1b2a] rounded-full mt-2"></div>
                  <span className="text-gray-700">Developed analytical and software development skills</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-[#0d1b2a] rounded-full mt-2"></div>
                  <span className="text-gray-700">Hands-on learning through practical application</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;