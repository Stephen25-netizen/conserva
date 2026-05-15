function Contact() {
    try {
        return (
            <div id="contact" className="section-padding bg-white border-t border-gray-100" data-name="contact" data-file="components/Contact.js">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-extrabold text-[var(--secondary-color)] sm:text-4xl">Get In Touch</h2>
                        <p className="mt-4 text-xl text-[var(--text-light)]">We'd love to hear from you. Here is how you can reach our team.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {/* Office Address */}
                        <div className="bg-[var(--bg-light)] p-8 rounded-2xl text-center border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="w-14 h-14 rounded-full bg-blue-100 text-[var(--primary-color)] flex items-center justify-center mx-auto mb-6">
                                <div className="icon-map-pin text-2xl"></div>
                            </div>
                            <h3 className="text-xl font-bold text-[var(--text-dark)] mb-3">Our Office</h3>
                            <p className="text-[var(--text-light)] leading-relaxed">
                                Innovation Hub, 4th Floor<br />
                                Nairobi, Kenya
                            </p>
                        </div>

                        {/* Phone Number */}
                        <div className="bg-[var(--bg-light)] p-8 rounded-2xl text-center border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="w-14 h-14 rounded-full bg-blue-100 text-[var(--primary-color)] flex items-center justify-center mx-auto mb-6">
                                <div className="icon-phone text-2xl"></div>
                            </div>
                            <h3 className="text-xl font-bold text-[var(--text-dark)] mb-3">Call Us</h3>
                            <p className="text-[var(--text-light)] leading-relaxed">
                                +254 700 000 000<br />
                                Mon-Fri, 9am to 6pm
                            </p>
                        </div>

                        {/* Email Address */}
                        <div className="bg-[var(--bg-light)] p-8 rounded-2xl text-center border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="w-14 h-14 rounded-full bg-blue-100 text-[var(--primary-color)] flex items-center justify-center mx-auto mb-6">
                                <div className="icon-mail text-2xl"></div>
                            </div>
                            <h3 className="text-xl font-bold text-[var(--text-dark)] mb-3">Email Us</h3>
                            <p className="text-[var(--text-light)] leading-relaxed">
                                hello@conservatech.com<br />
                                support@conservatech.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Contact component error:', error);
        return null;
    }
}