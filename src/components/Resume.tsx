import React from 'react';
import { FileText, Download } from 'lucide-react';

const Resume = () => {
  return (
    <section id="resume" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Professional Documents
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Download my resume and cover letter to learn more about my qualifications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Resume Card */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 hover:shadow-lg transition-shadow duration-200">
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="w-20 h-20 bg-[#e0e1dd] rounded-lg flex items-center justify-center">
                <FileText className="w-10 h-10 text-[#0d1b2a]" />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Resume</h3>
                <p className="text-gray-600">
                  Comprehensive overview of my education, skills, and experience
                </p>
              </div>

              <a
                href="#"
                className="inline-flex items-center px-6 py-3 bg-[#0d1b2a] text-white font-medium rounded-lg hover:bg-[#1b4965] transition-all duration-200 w-full justify-center"
                onClick={(e) => {
                  e.preventDefault();
                  alert('Please add your resume PDF file to the /public folder and update the href in /src/components/Resume.tsx');
                }}
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </a>

              <p className="text-sm text-gray-500">
                PDF Format • Updated 2025
              </p>
            </div>
          </div>

          {/* Cover Letter Card */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 hover:shadow-lg transition-shadow duration-200">
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="w-20 h-20 bg-teal-50 rounded-lg flex items-center justify-center">
                <FileText className="w-10 h-10 text-teal-700" />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Cover Letter</h3>
                <p className="text-gray-600">
                  Personalized introduction and career objectives
                </p>
              </div>

              <a
                href="#"
                className="inline-flex items-center px-6 py-3 border-2 border-[#0d1b2a] text-[#0d1b2a] font-medium rounded-lg hover:bg-[#0d1b2a] hover:text-white transition-all duration-200 w-full justify-center"
                onClick={(e) => {
                  e.preventDefault();
                  alert('Please add your cover letter PDF file to the /public folder and update the href in /src/components/Resume.tsx');
                }}
              >
                <Download className="w-5 h-5 mr-2" />
                Download Cover Letter
              </a>

              <p className="text-sm text-gray-500">
                PDF Format • Updated 2025
              </p>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-12 max-w-3xl mx-auto bg-[#e0e1dd] rounded-xl p-6">
          <h4 className="font-semibold text-gray-900 mb-3">How to Add Your Documents:</h4>
          <ol className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start space-x-3">
              <span className="font-bold text-[#0d1b2a] mt-0.5">1.</span>
              <span>Place your resume and cover letter PDF files in the <code className="px-2 py-0.5 bg-white rounded">/public</code> folder</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="font-bold text-[#0d1b2a] mt-0.5">2.</span>
              <span>Update the <code className="px-2 py-0.5 bg-white rounded">href</code> attributes in <code className="px-2 py-0.5 bg-white rounded">/src/components/Resume.tsx</code></span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="font-bold text-[#0d1b2a] mt-0.5">3.</span>
              <span>Example: <code className="px-2 py-0.5 bg-white rounded">href="/resume.pdf"</code> or <code className="px-2 py-0.5 bg-white rounded">href="/cover-letter.pdf"</code></span>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Resume;
