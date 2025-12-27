import React from 'react';
import { Link } from 'react-router-dom';
import { ASSETS } from '../src/constants/assets';

const Home = () => {
  const scrollToFeatured = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('featured-drop');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat" 
          style={{ 
            backgroundImage: `linear-gradient(rgba(17, 19, 24, 0.3), rgba(17, 19, 24, 1)), url("${ASSETS.heroBackground}")` 
          }}
        ></div>
        
        <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl flex flex-col gap-6 items-center animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tighter text-white drop-shadow-2xl">
            Hydrate with <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-text-dim">Precision.</span>
          </h1>
          <h2 className="text-lg md:text-xl font-normal text-text-dim tracking-wide max-w-2xl mx-auto">
            Premium Gear for the Relentless. Engineered performance for athletes who demand excellence.
          </h2>
          <div className="pt-4">
            <a href="#featured-drop" onClick={scrollToFeatured} className="bg-primary hover:bg-blue-600 text-white text-base font-bold py-4 px-10 rounded-lg transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(37,89,244,0.3)] flex items-center gap-2 cursor-pointer">
              Shop the Drop
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>
        </div>
      </section>

      {/* Featured Product Section */}
      <section id="featured-drop" className="py-24 bg-background-dark relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="mb-16 flex items-center gap-4">
            <div className="h-px bg-border-dark flex-1"></div>
            <span className="text-primary font-bold tracking-widest text-sm uppercase">Featured Drop</span>
            <div className="h-px bg-border-dark flex-1"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Product Image */}
            <Link to="/product/1" className="relative group cursor-pointer block">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl transform -rotate-2 group-hover:-rotate-1 transition-transform duration-500"></div>
              {/* Removed border and bg-surface-dark to remove frame */}
              <div className="relative flex items-center justify-center overflow-hidden h-[500px]">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 blur-[100px] rounded-full"></div>
                <img src={ASSETS.products.tumbler} alt="GEATYM Tumbler" className="relative z-10 w-full h-full object-contain drop-shadow-2xl transform group-hover:scale-105 transition-transform duration-500"/>
                <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 rounded text-xs font-bold text-white uppercase tracking-wider">
                  New Arrival
                </div>
              </div>
            </Link>
            {/* Product Details */}
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                  GEATYM Tumbler
                </h2>
                <p className="text-text-dim text-lg leading-relaxed">
                  Matte Black Edition. Engineered for 24-hour temperature retention. Double-wall vacuum insulation meets industrial-grade stainless steel for the ultimate durability.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                {[
                  { icon: 'ac_unit', text: '24h Cold Retention' },
                  { icon: 'shield', text: 'Impact Resistant Shell' },
                  { icon: 'water_drop', text: 'Leak-Proof Technology' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="p-3 bg-surface-dark rounded-lg border border-border-dark">
                      <span className="material-symbols-outlined text-text-dim">{item.icon}</span>
                    </div>
                    <span className="text-text-dim font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
              <div className="h-px bg-border-dark w-full"></div>
              <div className="flex items-center gap-6 flex-wrap">
                <span className="text-3xl font-bold text-white">$45.00</span>
                <Link to="/product/1" className="flex-1 bg-white text-background-dark hover:bg-text-dim text-base font-bold py-4 px-8 rounded-lg transition-colors flex items-center justify-center gap-2 min-w-[200px]">
                  <span className="material-symbols-outlined">shopping_bag</span>
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Drops Section */}
      <section className="py-24 bg-[#0d0f14]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-white tracking-tight mb-2">FUTURE DROPS</h2>
              <p className="text-text-dim">Get ready for the next evolution of gear.</p>
            </div>
            <Link to="#" className="text-primary hover:text-white font-bold text-sm tracking-wide flex items-center gap-1 transition-colors">
              VIEW ALL <span className="material-symbols-outlined !text-[18px]">arrow_right_alt</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Tactical Magnetic Carrier', sub: 'Modular hydration system.', img: ASSETS.products.bag },
              { title: 'Pro Leather Grips', sub: 'Engineered for max torque.', img: ASSETS.products.grips },
              { title: 'Muscle Bear Keychain', sub: 'The spirit of the grind.', img: ASSETS.products.bear }
            ].map((item, idx) => (
              <div key={idx} className="group relative bg-surface-dark rounded-xl overflow-hidden border border-border-dark hover:border-primary/50 transition-colors">
                <div className="aspect-[4/5] w-full relative overflow-hidden bg-[#20252e]">
                  <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-black/20 transition-colors"></div>
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"/>
                  <div className="absolute inset-0 z-20 flex items-center justify-center">
                    <span className="bg-black/70 backdrop-blur-sm border border-white/10 text-white text-sm font-bold px-4 py-2 rounded tracking-widest uppercase">Coming Soon</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-text-dim">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;