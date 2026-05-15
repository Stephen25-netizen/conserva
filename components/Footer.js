
function Footer() {
    const currentYear = 2026;
  
    return (
      <footer id="contact" className="bg-gray-900 text-gray-300 py-16" data-name="Footer" data-file="components/Footer.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 border-b border-gray-800 pb-12">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="icon-cpu text-3xl text-[var(--secondary-color)]"></div>
                <span className="font-bold text-2xl text-white">Conserva</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Innovate Efficiently. Empowering African businesses with cutting-edge technology solutions.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-6">Services</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#solutions" className="hover:text-[var(--secondary-color)] transition-colors">Credit Management</a></li>
                <li><a href="#solutions" className="hover:text-[var(--secondary-color)] transition-colors">Custom Development</a></li>
                <li><a href="#solutions" className="hover:text-[var(--secondary-color)] transition-colors">Call Centers</a></li>
                <li><a href="#solutions" className="hover:text-[var(--secondary-color)] transition-colors">AI Training</a></li>
              </ul>
            </div>
  
            <div>
              <h4 className="text-white font-semibold mb-6">Company</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#about" className="hover:text-[var(--secondary-color)] transition-colors">About Us</a></li>
                <li><a href="#success-stories" className="hover:text-[var(--secondary-color)] transition-colors">Case Studies</a></li>
                <li><a href="#contact" className="hover:text-[var(--secondary-color)] transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-[var(--secondary-color)] transition-colors">Careers</a></li>
              </ul>
            </div>
  
            <div>
              <h4 className="text-white font-semibold mb-6">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[var(--secondary-color)] hover:text-white transition-colors">
                  <div className="icon-linkedin text-lg"></div>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[var(--secondary-color)] hover:text-white transition-colors">
                  <div className="icon-twitter text-lg"></div>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[var(--secondary-color)] hover:text-white transition-colors">
                  <div className="icon-facebook text-lg"></div>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[var(--secondary-color)] hover:text-white transition-colors">
                  <div className="icon-instagram text-lg"></div>
                </a>
              </div>
            </div>
          </div>
          
          <div className="text-center text-sm text-gray-500">
            <p>&copy; {currentYear} Conserva Tech Hub Ltd. Innovate Efficiently. Crafted in Africa, Built for the World.</p>
          </div>
        </div>
      </footer>
    );
  }