const Portfolio = () => {
  const projects = [
    {
      title: "St. Mary's International School",
      category: "School Website",
      description: "Complete website redesign with student portal, online admissions, and parent communication system.",
      image: "https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
      features: ["Student Portal", "Online Admissions", "Parent Communication", "Event Management"],
      link: "#",
      color: "from-blue-500 to-cyan-500",
      stats: { students: "2,500+", satisfaction: "98%" }
    },
    {
      title: "Excellence Coaching Institute",
      category: "Coaching Center",
      description: "Modern learning management system with course delivery, student tracking, and performance analytics.",
      image: "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
      features: ["LMS Platform", "Course Management", "Student Tracking", "Performance Analytics"],
      link: "#",
      color: "from-purple-500 to-violet-500",
      stats: { students: "1,200+", satisfaction: "96%" }
    },
    {
      title: "Bright Future Academy",
      category: "Educational Platform",
      description: "Comprehensive e-learning platform with video lectures, assignments, and interactive assessments.",
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
      features: ["Video Lectures", "Interactive Assignments", "Assessment Tools", "Progress Tracking"],
      link: "#",
      color: "from-green-500 to-emerald-500",
      stats: { students: "3,000+", satisfaction: "99%" }
    },
    {
      title: "Green Valley School",
      category: "School Management",
      description: "Complete school management system with attendance, fee management, and academic records.",
      image: "https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
      features: ["Attendance Management", "Fee Collection", "Academic Records", "Report Generation"],
      link: "#",
      color: "from-orange-500 to-red-500",
      stats: { students: "1,800+", satisfaction: "97%" }
    },
    {
      title: "Tech Masters Institute",
      category: "Technical Training",
      description: "Specialized platform for technical training with hands-on labs and certification management.",
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
      features: ["Virtual Labs", "Certification System", "Industry Integration", "Career Placement"],
      link: "#",
      color: "from-indigo-500 to-blue-500",
      stats: { students: "800+", satisfaction: "95%" }
    },
    {
      title: "Little Learners Preschool",
      category: "Preschool Website",
      description: "Colorful and engaging website for preschool with parent communication and daily activity updates.",
      image: "https://images.pexels.com/photos/1720186/pexels-photo-1720186.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
      features: ["Parent Communication", "Daily Updates", "Photo Gallery", "Event Calendar"],
      link: "#",
      color: "from-pink-500 to-rose-500",
      stats: { students: "300+", satisfaction: "100%" }
    }
  ];

  return (
    <section id="portfolio" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2250%22%20height%3D%2250%22%20viewBox%3D%220%200%2050%2050%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ddd6fe%22%20fill-opacity%3D%220.3%22%3E%3Cpath%20d%3D%22M25%2025c0-13.807-11.193-25-25-25s-25%2011.193-25%2025%2011.193%2025%2025%2025%2025-11.193%2025-25z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-20 h-20 bg-primary-200/30 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-20 w-16 h-16 bg-secondary-200/30 rounded-full animate-float" style={{animationDelay: '1.5s'}}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 rounded-full text-primary-700 text-sm font-medium mb-4 animate-fade-in">
            <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
            Our Success Stories
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-slide-up">
            Our <span className="text-primary-600">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up" style={{animationDelay: '0.1s'}}>
            Showcasing successful projects that have transformed educational institutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-white/70 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/50 hover:border-primary-200 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 animate-slide-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4">
                  <span className={`bg-gradient-to-r ${project.color} text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg`}>
                    {project.category}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-2">
                    <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-gray-800">
                      {project.stats.students} Students
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-gray-800">
                      {project.stats.satisfaction} Satisfaction
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.features.map((feature, featureIndex) => (
                    <span 
                      key={featureIndex}
                      className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-xs font-medium hover:bg-primary-200 transition-colors duration-200"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <a 
                    href={project.link}
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-all duration-200 group-hover:translate-x-1"
                  >
                    View Project
                    <svg className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-slide-up" style={{animationDelay: '0.8s'}}>
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-white/50 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your Project?</h3>
            <p className="text-gray-600 mb-6">Join 225+ satisfied clients who have transformed their educational institutions with our solutions.</p>
            <a 
              href="#contact" 
              className="inline-flex items-center bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Start Your Project
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;