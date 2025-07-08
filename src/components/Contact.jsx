import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      organization: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Phone",
      info: "+1 (555) 123-4567",
      subInfo: "Mon-Fri 9AM-6PM"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email",
      info: "contact@edubridge.com",
      subInfo: "24/7 Support"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Office",
      info: "123 Tech Street",
      subInfo: "Digital City, DC 12345"
    }
  ];

  const whyChooseUs = [
    { text: "5+ years in educational technology", icon: "🎓" },
    { text: "225+ successful projects delivered", icon: "🚀" },
    { text: "24/7 technical support", icon: "🛟" },
    { text: "Custom solutions for every need", icon: "⚙️" },
    { text: "99.9% uptime guarantee", icon: "⚡" },
    { text: "Dedicated project manager", icon: "👨‍💼" }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-secondary-600 to-primary-800"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.02%22%3E%3Cpath%20d%3D%22M30%2030c0-16.569-13.431-30-30-30s-30%2013.431-30%2030%2013.431%2030%2030%2030%2030-13.431%2030-30z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      {/* Enhanced Floating Elements */}
      <div className="absolute top-20 left-20 w-24 h-24 bg-white/5 rounded-full backdrop-blur-sm animate-float border border-white/10"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-primary-400/10 rounded-full backdrop-blur-sm animate-float border border-primary-300/20" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-10 w-16 h-16 bg-secondary-400/10 rounded-full backdrop-blur-sm animate-float border border-secondary-300/20" style={{animationDelay: '2s'}}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white/90 text-sm font-medium mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-primary-400 rounded-full mr-2 animate-pulse"></span>
            Let's Work Together
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-slide-up">
            Get In <span className="text-primary-400">Touch</span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto animate-slide-up" style={{animationDelay: '0.1s'}}>
            Ready to transform your educational institution? Let's discuss your project and create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-up" style={{animationDelay: '0.2s'}}>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center space-x-4 group">
                    <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      {contact.icon}
                    </div>
                    <div>
                      <p className="text-white/90 font-medium">{contact.title}</p>
                      <p className="text-white/70">{contact.info}</p>
                      <p className="text-white/60 text-sm">{contact.subInfo}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-6">Why Choose EduBridge?</h3>
              <div className="grid grid-cols-1 gap-3">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 group">
                    <span className="text-lg group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                    <span className="text-white/80 group-hover:text-white transition-colors duration-300">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Response Promise */}
            <div className="bg-gradient-to-r from-primary-500/20 to-secondary-500/20 backdrop-blur-sm rounded-2xl p-6 border border-primary-300/30">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold">Quick Response Guarantee</h4>
              </div>
              <p className="text-white/80 text-sm">We respond to all inquiries within 2 hours during business hours and within 24 hours on weekends.</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/30 transition-all duration-300 animate-slide-up" style={{animationDelay: '0.3s'}}>
            <h3 className="text-2xl font-semibold text-white mb-6">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <label htmlFor="name" className="block text-white/90 font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all duration-300 group-hover:border-white/50"
                    placeholder="Your name"
                  />
                </div>
                <div className="group">
                  <label htmlFor="email" className="block text-white/90 font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all duration-300 group-hover:border-white/50"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <label htmlFor="phone" className="block text-white/90 font-medium mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all duration-300 group-hover:border-white/50"
                    placeholder="Your phone number"
                  />
                </div>
                <div className="group">
                  <label htmlFor="organization" className="block text-white/90 font-medium mb-2">
                    Organization
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all duration-300 group-hover:border-white/50"
                    placeholder="School/Institute name"
                  />
                </div>
              </div>
              
              <div className="group">
                <label htmlFor="message" className="block text-white/90 font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent resize-none transition-all duration-300 group-hover:border-white/50"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="group relative w-full bg-primary-500 hover:bg-primary-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 focus:ring-offset-transparent shadow-lg hover:shadow-xl overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Send Message
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;