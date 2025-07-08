const Services = () => {
  const services = [
    {
      title: "Website Development",
      description: "Custom-built responsive websites tailored for educational institutions with modern design and functionality.",
      icon: "💻",
      features: ["Responsive Design", "Student Portals", "CMS Integration", "SEO Optimized"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Website Maintenance",
      description: "Comprehensive maintenance services to keep your educational website running smoothly and securely.",
      icon: "🔧",
      features: ["Regular Updates", "Security Monitoring", "Performance Optimization", "Content Updates"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "E-Learning Platforms",
      description: "Advanced learning management systems for online education and course delivery.",
      icon: "📚",
      features: ["Course Management", "Student Tracking", "Assessment Tools", "Video Integration"],
      color: "from-purple-500 to-violet-500"
    },
    {
      title: "School Management Systems",
      description: "Complete digital solutions for managing school operations, from admissions to examinations.",
      icon: "🏫",
      features: ["Student Management", "Fee Collection", "Attendance Tracking", "Report Generation"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Mobile Applications",
      description: "Native mobile apps for schools and coaching institutes to enhance communication and engagement.",
      icon: "📱",
      features: ["Push Notifications", "Parent Communication", "Assignment Submission", "Progress Tracking"],
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Digital Marketing",
      description: "Comprehensive digital marketing solutions to help educational institutions reach more students.",
      icon: "📈",
      features: ["Social Media Marketing", "Google Ads", "Content Marketing", "Analytics & Reporting"],
      color: "from-indigo-500 to-blue-500"
    }
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23e0e7ff%22%20fill-opacity%3D%220.4%22%3E%3Cpath%20d%3D%22M20%2020c0-11.046-8.954-20-20-20s-20%208.954-20%2020%208.954%2020%2020%2020%2020-8.954%2020-20z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-24 h-24 bg-primary-200/30 rounded-full animate-float"></div>
      <div className="absolute bottom-20 left-20 w-16 h-16 bg-secondary-200/30 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 rounded-full text-primary-700 text-sm font-medium mb-4 animate-fade-in">
            <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
            Our Expertise
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-slide-up">
            Our <span className="text-primary-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up" style={{animationDelay: '0.1s'}}>
            Comprehensive digital solutions designed specifically for educational institutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-white/50 hover:border-primary-200 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 animate-slide-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="relative mb-6">
                <div className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300 blur-xl`}></div>
                <div className="relative text-4xl group-hover:scale-110 transition-transform duration-300 flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg">
                  {service.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
                    <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3 group-hover:scale-125 transition-transform duration-300`}></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <a 
                  href="#contact" 
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200 group-hover:translate-x-1"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;