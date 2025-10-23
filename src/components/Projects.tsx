import React from 'react';
import { ExternalLink, Github, Play, Code, Database, Globe } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'ALX Africa Team Project',
      description: 'Web application for collaborative task management built as part of ALX Africa software development training.',
      status: 'Completed',
      technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      features: [
        'Real-time team collaboration features',
        'Task assignment and tracking system',
        'User authentication and authorization',
        'Responsive design for all devices'
      ],
      icon: Globe,
      color: 'blue'
    },
    {
      title: 'Personal Portfolio Website',
      description: 'Modern, responsive portfolio website built with React and Tailwind CSS to showcase projects and skills.',
      status: 'Completed',
      technologies: ['React', 'Tailwind CSS', 'JavaScript', 'Vite'],
      features: [
        'Clean, professional design',
        'Smooth scrolling navigation',
        'Contact form integration',
        'SEO optimized'
      ],
      icon: Code,
      color: 'green'
    },
    {
      title: 'Business Simulation Case',
      description: 'Strategic planning dashboard developed for business case study analysis and decision-making.',
      status: 'Completed',
      technologies: ['Excel', 'Data Analysis', 'Strategic Planning'],
      features: [
        'Financial modeling and forecasting',
        'Market analysis visualization',
        'Strategic recommendations framework',
        'Interactive dashboard design'
      ],
      icon: Database,
      color: 'teal'
    }
  ];


  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-[#e0e1dd] text-[#0d1b2a]',
      green: 'bg-teal-100 text-teal-700',
      teal: 'bg-teal-50 text-teal-600'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-teal-100 text-teal-800';
      case 'In Progress':
        return 'bg-[#e0e1dd] text-[#0d1b2a]';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Projects & Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-world projects demonstrating technical skills and problem-solving ability
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Featured Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-200 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getColorClasses(project.color)}`}>
                      <project.icon className="w-6 h-6" />
                    </div>
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-xl font-semibold text-gray-900">{project.title}</h4>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-[#0d1b2a] transition-colors"
                        title="GitHub link - to be added"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
                  </div>

                  <div className="mb-4">
                    <h5 className="font-medium text-gray-900 mb-2">Key Features:</h5>
                    <ul className="space-y-1">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-sm text-gray-600">
                          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#e0e1dd] rounded-xl p-8 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Placeholder Projects</h3>
          <p className="text-gray-700 mb-4">
            The projects shown above are placeholders. Replace with your actual projects by editing
            <code className="mx-1 px-2 py-1 bg-white rounded text-sm">/src/components/Projects.tsx</code>
          </p>
          <p className="text-gray-600 text-sm">
            Add project images, GitHub links, and live demo URLs as you complete your work.
          </p>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Interested in collaborating on a project or learning more about my work?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-[#0d1b2a] text-white font-medium rounded-lg hover:bg-[#1b4965] transition-all duration-200"
          >
            Let's Work Together
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;