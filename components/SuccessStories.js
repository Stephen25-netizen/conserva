function SuccessStories() {
    const stories = [
      {
        name: "Sarah Mwangi",
        role: "CEO, KenyaLend Microfinance",
        quote: "Our loan processing time dropped from 5 days to 2 hours. TechFlow's system has been a game-changer.",
        img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
      },
      {
        name: "David Omondi",
        role: "Operations Manager, CityRetail Ltd",
        quote: "The custom inventory app saved us $50K annually and eliminated stock-outs completely.",
        img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
      },
      {
        name: "Pastor James Kimani",
        role: "Lead Pastor, Grace Fellowship",
        quote: "Our online giving increased 300% and member engagement has never been higher. Incredible work!",
        img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
      }
    ];
  
    return (
      <section id="success-stories" className="section-padding bg-white" data-name="SuccessStories" data-file="components/SuccessStories.js">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--primary-color)]">Success Stories</h2>
          <p className="text-gray-600 text-lg">Hear from businesses we've transformed</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, idx) => (
            <div key={idx} className="bg-gray-50 rounded-2xl p-8 relative shadow-sm border border-gray-100">
              <div className="absolute top-6 right-6 text-[var(--secondary-color)] opacity-20">
                <div className="icon-circle-play text-5xl"></div>
              </div>
              <p className="text-gray-700 italic mb-8 relative z-10 text-lg">"{story.quote}"</p>
              <div className="flex items-center gap-4">
                <img src={story.img} alt={story.name} className="w-14 h-14 rounded-full object-cover shadow-md border-2 border-white"/>
                <div>
                  <h4 className="font-bold text-gray-900">{story.name}</h4>
                  <p className="text-sm text-gray-500">{story.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }