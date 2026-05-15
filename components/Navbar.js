function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);
  
    return (
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50" data-name="Navbar" data-file="components/Navbar.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center gap-2">
                <div className="icon-cpu text-3xl text-[var(--secondary-color)]"></div>
                <div className="flex flex-col leading-tight">
                  <span className="font-bold text-xl text-[var(--primary-color)] uppercase tracking-wide">Conserva</span>
                  <span className="font-semibold text-xs text-gray-500 uppercase tracking-wider">Tech Hub Ltd</span>
                </div>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#solutions" className="text-gray-600 hover:text-[var(--secondary-color)] transition-colors font-medium">Services</a>
              <a href="#success-stories" className="text-gray-600 hover:text-[var(--secondary-color)] transition-colors font-medium">Success Stories</a>
              <a href="#about" className="text-gray-600 hover:text-[var(--secondary-color)] transition-colors font-medium">About</a>
              <a href="#contact" className="text-gray-600 hover:text-[var(--secondary-color)] transition-colors font-medium">Contact</a>
              <a href="#contact" className="btn-primary py-2 px-4">Get Started</a>
            </div>
            <div className="flex items-center md:hidden">
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-600 hover:text-[var(--primary-color)] focus:outline-none"
              >
                <div className={`text-2xl ${isOpen ? 'icon-x' : 'icon-menu'}`}></div>
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#solutions" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[var(--secondary-color)] hover:bg-gray-50">Services</a>
              <a href="#success-stories" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[var(--secondary-color)] hover:bg-gray-50">Success Stories</a>
              <a href="#about" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[var(--secondary-color)] hover:bg-gray-50">About</a>
              <a href="#contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[var(--secondary-color)] hover:bg-gray-50">Contact</a>
              <a href="#contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-[var(--secondary-color)] hover:bg-gray-50">Get Started</a>
            </div>
          </div>
        )}
      </nav>
    );
  }