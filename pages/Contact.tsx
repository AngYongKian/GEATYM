import React from 'react';

const Contact = () => {
  return (
    <div className="flex-1 flex justify-center py-10 px-4 md:px-10 bg-background-dark pt-24">
      <div className="flex flex-col lg:flex-row gap-10 max-w-[1120px] w-full">
        {/* Left Column: Contact Form */}
        <div className="flex-1 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h2 className="text-white tracking-tight text-[32px] font-bold leading-tight">Send us a message</h2>
            <p className="text-gray-400">Fill out the form below and our team will get back to you within 24 hours.</p>
          </div>
          <form className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row gap-4">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-white text-sm font-medium leading-normal pb-2">Full Name</p>
                <input className="w-full rounded-lg text-white bg-[#272d3a] border-none focus:ring-2 focus:ring-primary h-14 p-4 placeholder:text-text-dim" placeholder="Jane Doe" />
              </label>
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-white text-sm font-medium leading-normal pb-2">Email Address</p>
                <input className="w-full rounded-lg text-white bg-[#272d3a] border-none focus:ring-2 focus:ring-primary h-14 p-4 placeholder:text-text-dim" placeholder="jane@example.com" type="email" />
              </label>
            </div>
            <label className="flex flex-col min-w-40 flex-1">
              <p className="text-white text-sm font-medium leading-normal pb-2">Subject</p>
              <div className="relative">
                <select className="w-full rounded-lg text-white bg-[#272d3a] border-none focus:ring-2 focus:ring-primary h-14 p-4 pr-10 appearance-none">
                  <option disabled defaultValue="">Select a topic</option>
                  <option value="orders">Order Inquiry</option>
                  <option value="returns">Returns & Exchanges</option>
                  <option value="product">Product Question</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-text-dim">
                  <span className="material-symbols-outlined">expand_more</span>
                </div>
              </div>
            </label>
            <label className="flex flex-col min-w-40 flex-1">
              <p className="text-white text-sm font-medium leading-normal pb-2">Message</p>
              <textarea className="w-full rounded-lg text-white bg-[#272d3a] border-none focus:ring-2 focus:ring-primary min-h-[160px] p-4 placeholder:text-text-dim" placeholder="How can we help you achieve your best?"></textarea>
            </label>
            <div className="pt-2">
              <button className="w-full md:w-auto flex items-center justify-center rounded-lg h-12 px-8 bg-primary hover:bg-blue-600 text-white font-bold transition-all shadow-lg hover:shadow-primary/50" type="button">
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Right Column: Info Panel */}
        <div className="lg:w-[360px] flex flex-col gap-6 mt-8 lg:mt-0">
          <div className="bg-surface-dark rounded-xl p-8 flex flex-col gap-8 h-full border border-border-dark">
            <div>
              <h3 className="text-white text-xl font-bold mb-6">Contact Information</h3>
              <div className="flex flex-col gap-6">
                <div className="flex gap-4 items-start">
                  <div className="bg-[#272d3a] p-2.5 rounded-lg text-primary shrink-0">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Email us directly</p>
                    <a href="mailto:support@geatym.com" className="text-white font-medium hover:text-primary transition-colors">support@geatym.com</a>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="bg-[#272d3a] p-2.5 rounded-lg text-primary shrink-0">
                    <span className="material-symbols-outlined">location_on</span>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Headquarters</p>
                    <p className="text-white font-medium">123 Fitness Blvd<br/>Los Angeles, CA 90001</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="bg-[#272d3a] p-2.5 rounded-lg text-primary shrink-0">
                    <span className="material-symbols-outlined">share</span>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-2">Follow us</p>
                    <div className="flex gap-3 text-gray-300">
                        {['thumb_up', 'photo_camera', 'play_circle'].map(icon => (
                            <a key={icon} href="#" className="hover:text-white bg-[#272d3a] size-8 flex items-center justify-center rounded-full transition-colors">
                                <span className="material-symbols-outlined text-sm">{icon}</span>
                            </a>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-t border-border-dark pt-6">
              <p className="text-gray-400 text-sm mb-1">Customer Service Hours</p>
              <p className="text-white text-sm">Mon-Fri: 8am - 6pm PST<br/>Sat-Sun: 10am - 4pm PST</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;