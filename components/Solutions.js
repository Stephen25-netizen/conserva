function Solutions() {
    const solutions = [
      {
        title: "Credit & Loan Management",
        icon: "icon-credit-card",
        color: "text-blue-600",
        bg: "bg-blue-50",
        desc: "Streamline your lending operations with automated credit scoring, loan tracking, and payment processing systems."
      },
      {
        title: "Custom Applications",
        icon: "icon-smartphone",
        color: "text-green-600",
        bg: "bg-green-50",
        desc: "Bespoke web and mobile applications tailored to your unique business processes and customer needs."
      },
      {
        title: "Call Center Solutions",
        icon: "icon-headset",
        color: "text-purple-600",
        bg: "bg-purple-50",
        desc: "Cloud-based contact center platforms with CRM integration, call routing, and analytics."
      },
      {
        title: "Faith-Based Apps",
        icon: "icon-book-open",
        color: "text-amber-600",
        bg: "bg-amber-50",
        desc: "Digital solutions for churches and religious organizations including giving platforms and member management."
      },
      {
        title: "Insurance Platforms",
        icon: "icon-shield",
        color: "text-red-600",
        bg: "bg-red-50",
        desc: "Complete brokerage systems with policy management, claims processing, and agent portals."
      },
      {
        title: "HR & Workforce Systems",
        icon: "icon-users",
        color: "text-teal-600",
        bg: "bg-teal-50",
        desc: "Employee management, payroll, attendance tracking, and performance evaluation tools."
      },
      {
        title: "Website Development",
        icon: "icon-globe",
        color: "text-indigo-600",
        bg: "bg-indigo-50",
        desc: "Stunning, responsive websites that convert visitors into customers and elevate your brand."
      },
      {
        title: "System Integrations",
        icon: "icon-link",
        color: "text-orange-600",
        bg: "bg-orange-50",
        desc: "Connect your existing tools and platforms for seamless data flow and automation."
      },
      {
        title: "AI Literacy Training",
        icon: "icon-graduation-cap",
        color: "text-pink-600",
        bg: "bg-pink-50",
        desc: "Empower your team with practical AI skills to boost productivity and innovation."
      }
    ];
  
    return (
      <section id="solutions" className="section-padding bg-gray-50" data-name="Solutions" data-file="components/Solutions.js">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--primary-color)]">Our Solutions</h2>
          <p className="text-gray-600 text-lg">Comprehensive technology services designed for African businesses</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((sol, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col p-8 group transform hover:-translate-y-2">
              <div className={`w-16 h-16 ${sol.bg} rounded-2xl flex items-center justify-center mb-6 animate-float shadow-sm group-hover:scale-110 transition-transform`}>
                <div className={`${sol.icon} text-3xl ${sol.color}`}></div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-[var(--secondary-color)] transition-colors">{sol.title}</h3>
              <p className="text-gray-600 leading-relaxed">{sol.desc}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }