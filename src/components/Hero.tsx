import React from 'react';
import { MapPin, Mail, Phone, ExternalLink } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-gray-900">Hi, I'm </span>
                <span className="bg-gradient-to-r from-[#0d1b2a] to-[#1b4965] bg-clip-text text-transparent">
                  Addisu Lal
                </span>
                <span className="text-gray-900"> — I turn code and ideas into impact.</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Computer Science & Business Administration student focused on building technology that drives opportunity and financial freedom.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-blue-600" />
                <span>Debre Berhan, Ethiopia</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-blue-600" />
                <a href="mailto:addisulal@gmail.com" className="hover:text-blue-600 transition-colors">
                  addisulal@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-blue-600" />
                <span>0980354112</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center px-6 py-3 bg-[#0d1b2a] text-white font-medium rounded-lg hover:bg-[#1b4965] transition-all duration-200 hover:shadow-lg"
              >
                Explore My Work
              </a>
              <a
                href="#resume"
                className="inline-flex items-center px-6 py-3 border-2 border-[#0d1b2a] text-[#0d1b2a] font-medium rounded-lg hover:bg-[#0d1b2a] hover:text-white transition-all duration-200"
              >
                Download Resume
              </a>
            </div>

          </div>

          <div className="relative">
            <div className="relative z-10 bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-[#0d1b2a] to-[#1b4965] rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
                    AL
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Addisu Lal</h3>
                  <p className="text-gray-600">CS & Business Student</p>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Current GPA</span>
                    <span className="font-semibold text-gray-900">3.56</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">YouTube Subscribers</span>
                    <span className="font-semibold text-gray-900">135+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Video Views</span>
                    <span className="font-semibold text-gray-900">2,000+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Years of Experience</span>
                    <span className="font-semibold text-gray-900">4+</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <p className="text-center text-sm text-gray-600 font-medium">
                    "One Day, One New Skill!"
                  </p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-r from-[#1b4965] to-teal-400 rounded-full opacity-10 blur-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full opacity-10 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;