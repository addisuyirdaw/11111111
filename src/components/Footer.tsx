import React from 'react';
import { Github, Linkedin, Youtube, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { href: 'https://youtube.com/@adlal-me', icon: Youtube, label: 'YouTube' },
    { href: '#', icon: Linkedin, label: 'LinkedIn' },
    { href: '#', icon: Github, label: 'GitHub' },
    { href: 'mailto:addisulal@gmail.com', icon: Mail, label: 'Email' }
  ];

  const quickLinks = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Education' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#resume', label: 'Resume' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-[#0d1b2a] rounded-full flex items-center justify-center text-white font-bold text-lg">
                AL
              </div>
              <div>
                <h3 className="text-xl font-bold">Addisu Lal</h3>
                <p className="text-gray-400 text-sm">Developer & Business Innovator</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Building technology that drives opportunity and financial freedom.
              Computer Science & Business Administration student focused on creating meaningful solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#0d1b2a] transition-colors duration-200"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-300">
              <p>
                <a href="mailto:addisulal@gmail.com" className="hover:text-white transition-colors">
                  addisulal@gmail.com
                </a>
              </p>
              <p className="mt-4">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                >
                  <ArrowUp className="w-4 h-4" />
                  <span>Back to Top</span>
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 mb-4 md:mb-0">
              <span>© {currentYear} Addisu Lal — Built with purpose.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;