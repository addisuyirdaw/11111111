import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Youtube, ExternalLink, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || 'Contact from Portfolio');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:addisulal@gmail.com?subject=${subject}&body=${body}`;
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'addisulal@gmail.com',
      href: 'mailto:addisulal@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '0980354112',
      href: 'tel:0980354112'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Debre Berhan, Ethiopia',
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Youtube,
      label: 'YouTube',
      href: 'https://youtube.com/@adlal-me',
      username: '@adlal-me'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: '#',
      username: 'To be added'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: '#',
      username: 'To be added'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to collaborate, learn together, or discuss opportunities? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Whether you're interested in collaboration, have questions about my projects, 
                or want to discuss opportunities, I'm always open to meaningful conversations. 
                As someone who believes in continuous learning and community building, 
                I welcome connections from fellow developers, educators, and innovators.
              </p>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#e0e1dd] rounded-lg flex items-center justify-center">
                      <info.icon className="w-6 h-6 text-[#0d1b2a]" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-gray-600 hover:text-[#0d1b2a] transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-600">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Connect on Social Media</h4>
              <div className="grid sm:grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
                  >
                    <social.icon className="w-5 h-5 text-gray-600 group-hover:text-[#0d1b2a] transition-colors" />
                    <div>
                      <p className="font-medium text-gray-900">{social.label}</p>
                      <p className="text-sm text-gray-600">{social.username}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d1b2a] focus:border-transparent transition-colors"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d1b2a] focus:border-transparent transition-colors"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Tell me about your project, question, or how we can work together..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#0d1b2a] text-white font-medium py-3 px-6 rounded-lg hover:bg-[#1b4965] transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>

            <p className="text-sm text-gray-500 mt-4 text-center">
              This form will open your email client with the message pre-filled.
            </p>
          </div>
        </div>

        {/* Call to Action */}
      </div>
    </section>
  );
};

export default Contact;