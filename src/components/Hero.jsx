const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-secondary-600 to-primary-800"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      {/* Enhanced Floating Elements */}
      <div className="absolute top-20 left-20 w-20 h-20 bg-white/10 rounded-full backdrop-blur-sm animate-float border border-white/20"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-primary-400/20 rounded-full backdrop-blur-sm animate-float border border-primary-300/30" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-10 w-16 h-16 bg-secondary-400/20 rounded-full backdrop-blur-sm animate-float border border-secondary-300/30" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/4 right-1/4 w-12 h-12 bg-white/15 rounded-full backdrop-blur-sm animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/4 w-8 h-8 bg-primary-300/30 rounded-full backdrop-blur-sm animate-bounce" style={{animationDelay: '0.5s'}}></div>

      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-slide-up">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white/90 text-sm font-medium mb-6 animate-fade-in">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              Trusted by 150+ Educational Institutions
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            <span className="inline-block animate-slide-up" style={{animationDelay: '0.1s'}}>Building</span>{' '}
            <span className="inline-block animate-slide-up" style={{animationDelay: '0.2s'}}>Digital</span>
            <span className="block text-primary-400 animate-slide-up" style={{animationDelay: '0.3s'}}>Bridges</span>
            <span className="block text-lg md:text-xl lg:text-2xl font-normal text-white/80 mt-4 animate-slide-up" style={{animationDelay: '0.4s'}}>
              for Educational Excellence
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed animate-slide-up" style={{animationDelay: '0.5s'}}>
            Empowering schools and coaching institutes with stunning, functional websites. 
            From creation to maintenance, we're your trusted technology partner in education.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{animationDelay: '0.6s'}}>
            <a
              href="#services"
              className="group relative bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 border border-white/30 hover:border-white/50 overflow-hidden"
            >
              <span className="relative z-10">Explore Services</span>
              <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </a>
            <a
              href="#portfolio"
              className="group relative bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 overflow-hidden shadow-lg hover:shadow-xl"
            >
              <span className="relative z-10">View Portfolio</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </a>
          </div>
        </div>
        
        {/* Enhanced Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 animate-slide-up" style={{animationDelay: '0.7s'}}>
          <div className="group bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105">
            <div className="text-3xl font-bold text-white mb-2 group-hover:text-primary-300 transition-colors duration-300">150+</div>
            <div className="text-white/80">Schools Served</div>
          </div>
          <div className="group bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105">
            <div className="text-3xl font-bold text-white mb-2 group-hover:text-primary-300 transition-colors duration-300">75+</div>
            <div className="text-white/80">Coaching Institutes</div>
          </div>
          <div className="group bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105">
            <div className="text-3xl font-bold text-white mb-2 group-hover:text-primary-300 transition-colors duration-300">24/7</div>
            <div className="text-white/80">Support</div>
          </div>
          <div className="group bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105">
            <div className="text-3xl font-bold text-white mb-2 group-hover:text-primary-300 transition-colors duration-300">99.9%</div>
            <div className="text-white/80">Uptime</div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;