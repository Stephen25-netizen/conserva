function Hero() {
    return (
      <section id="hero" className="pt-32 pb-20 lg:pt-48 lg:pb-32 bg-[var(--primary-color)] relative overflow-hidden" data-name="Hero" data-file="components/Hero.js">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Technology Circuit Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl mb-6">
                <span className="block text-[var(--secondary-color)] mb-2 text-xl md:text-2xl uppercase tracking-wider font-semibold">Innovate Efficiently</span>
                <span className="block leading-tight">Transform Your Business With Smart Technology</span>
              </h1>
              <p className="mt-3 text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl mb-10 max-w-xl">
                Conserva Tech Hub builds custom software solutions that drive productivity, streamline operations, and propel African SMEs into the digital future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#solutions" className="btn-primary text-center">Explore Solutions</a>
                <a href="#success-stories" className="px-6 py-3 border-2 border-white text-white font-medium rounded-md hover:bg-white hover:text-[var(--primary-color)] transition-colors text-center flex items-center justify-center gap-2">
                  <div className="icon-circle-play"></div>
                  See Results
                </a>
              </div>
            </div>
            
            <div className="hidden lg:block relative h-[400px]">
              <div className="absolute top-10 right-10 bg-white p-6 rounded-xl shadow-xl animate-float max-w-[220px]">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4 text-2xl shadow-sm">
                  <div className="icon-credit-card"></div>
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-1">Credit Systems</h3>
                <p className="text-sm text-gray-500 leading-tight">Automated loan management</p>
              </div>
  
              <div className="absolute bottom-10 left-10 bg-white p-6 rounded-xl shadow-xl animate-float-delayed max-w-[220px]">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4 text-2xl shadow-sm">
                  <div className="icon-smartphone"></div>
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-1">Custom Apps</h3>
                <p className="text-sm text-gray-500 leading-tight">Mobile & web solutions</p>
              </div>
  
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/4 -translate-y-1/2 bg-white p-6 rounded-xl shadow-xl animate-float-slow max-w-[220px]">
                <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-4 text-2xl shadow-sm">
                  <div className="icon-cpu"></div>
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-1">AI Integration</h3>
                <p className="text-sm text-gray-500 leading-tight">Smart business tools</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }