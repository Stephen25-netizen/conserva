function CTA() {
    return (
      <section className="bg-[var(--primary-color)] py-24 relative overflow-hidden" data-name="CTA" data-file="components/CTA.js">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-96 h-96 bg-[var(--secondary-color)] rounded-full blur-3xl -top-20 -right-20"></div>
          <div className="absolute w-96 h-96 bg-blue-600 rounded-full blur-3xl -bottom-20 -left-20"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-10">Let's build something extraordinary together. Get a free consultation today.</p>
          
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-grow px-5 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--secondary-color)]"
              required
            />
            <button type="submit" className="btn-primary py-4 px-8 text-lg whitespace-nowrap">
              Let's Talk
            </button>
          </form>
        </div>
      </section>
    );
  }