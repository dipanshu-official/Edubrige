const About = () => {
  const features = [
    {
      title: "Educational Focus",
      description: "Deep understanding of educational sector needs and requirements.",
      icon: "🎓",
      stats: "5+ Years Experience"
    },
    {
      title: "Technical Excellence",
      description: "Cutting-edge technology stack with modern development practices.",
      icon: "⚡",
      stats: "99.9% Uptime"
    },
    {
      title: "Dedicated Support",
      description: "Round-the-clock support and maintenance for peace of mind.",
      icon: "💬",
      stats: "24/7 Available"
    },
    {
      title: "Proven Results",
      description: "Track record of successful projects and satisfied clients.",
      icon: "📊",
      stats: "225+ Projects"
    }
  ];

  const achievements = [
    { number: "225+", label: "Projects Completed", icon: "🚀" },
    { number: "150+", label: "Happy Clients", icon: "😊" },
    { number: "99.9%", label: "Uptime Guarantee", icon: "⚡" },
    { number: "24/7", label: "Support Available", icon: "🛟" }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-secondary-600 to-primary-800"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.02%22%3E%3Cpath%20d%3D%22M30%2030c0-16.569-13.431-30-30-30s-30%2013.431-30%2030%2013.431%2030%2030%2030%2030-13.431%2030-30z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      {/* Enhanced Floating Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-white/5 rounded-full backdrop-blur-sm animate-float border border-white/10"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-primary-400/10 rounded-full backdrop-blur-sm animate-float border border-primary-300/20" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 right-10 w-16 h-16 bg-secondary-400/10 rounded-full backdrop-blur-sm animate-float border border-secondary-300/20" style={{animationDelay: '2s'}}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-up">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white/90 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-primary-400 rounded-full mr-2 animate-pulse"></span>
              About Our Company
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="text-primary-400">EduBridge</span>
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              We are passionate about transforming education through technology. Since our founding, 
              we've been dedicated to creating digital solutions that empower schools and coaching 
              institutes to reach their full potential.
            </p>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              Our team of experienced developers, designers, and education specialists work together 
              to deliver websites and applications that not only look stunning but also serve the 
              unique needs of educational institutions.
            </p>
            
            {/* Achievement Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:border-white/40 transition-all duration-300 group">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{achievement.icon}</span>
                    <div>
                      <div className="text-2xl font-bold text-white group-hover:text-primary-300 transition-colors duration-300">{achievement.number}</div>
                      <div className="text-white/70 text-sm">{achievement.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="group relative bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-8 py-3 rounded-full font-medium transition-all duration-300 border border-white/30 hover:border-white/50 text-center overflow-hidden"
              >
                <span className="relative z-10">Get In Touch</span>
                <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </a>
              <a
                href="#portfolio"
                className="group relative bg-transparent hover:bg-white/10 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 border border-white/50 hover:border-white/70 text-center"
              >
                View Our Work
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-slide-up" style={{animationDelay: '0.2s'}}>
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105 hover:bg-white/15"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-primary-300 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-white/80 text-sm leading-relaxed mb-3">
                  {feature.description}
                </p>
                <div className="text-primary-400 text-xs font-medium bg-primary-400/20 px-3 py-1 rounded-full inline-block">
                  {feature.stats}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;