import React from 'react';
import { Link } from 'react-router-dom';
import { ASSETS } from '../src/constants/assets';

const Footer = () => {
  return (
    <footer className="bg-[#050608] border-t border-border-dark pt-16 pb-8">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          {/* Brand Info */}
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-8">
                <img src={ASSETS.logo} alt="GEATYM" className="h-full w-auto object-contain invert" />
              </div>
            </div>
            <p className="text-text-dim text-sm leading-relaxed mb-6">
              Elevating athletic potential through precision engineering and minimalist aesthetics.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-text-dim hover:text-white transition-colors">
                <span className="material-symbols-outlined">thumb_up</span>
              </a>
              <a href="#" className="text-text-dim hover:text-white transition-colors">
                <span className="material-symbols-outlined">photo_camera</span>
              </a>
            </div>
          </div>

          {/* Footer Links */}
          <div className="flex gap-16 flex-wrap">
            <div>
              <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Shop</h4>
              <ul className="flex flex-col gap-3">
                <li><Link to="/" className="text-text-dim hover:text-white text-sm transition-colors">New Arrivals</Link></li>
                <li><Link to="/" className="text-text-dim hover:text-white text-sm transition-colors">Accessories</Link></li>
                <li><Link to="/" className="text-text-dim hover:text-white text-sm transition-colors">Apparel</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Support</h4>
              <ul className="flex flex-col gap-3">
                <li><Link to="/contact" className="text-text-dim hover:text-white text-sm transition-colors">FAQ</Link></li>
                <li><Link to="/contact" className="text-text-dim hover:text-white text-sm transition-colors">Shipping</Link></li>
                <li><Link to="/contact" className="text-text-dim hover:text-white text-sm transition-colors">Returns</Link></li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex-1 max-w-sm">
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Stay in the loop</h4>
            <p className="text-text-dim text-sm mb-4">Subscribe for exclusive drops and early access.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Join the waitlist" 
                className="flex-1 bg-surface-dark border border-border-dark text-white rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary placeholder-text-dim/50"
              />
              <button className="bg-primary hover:bg-blue-600 text-white rounded-lg px-4 py-2.5 transition-colors">
                <span className="material-symbols-outlined !text-[20px]">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>

        <div className="h-px bg-border-dark w-full mb-8"></div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-dim">
          <p>© 2024 GEATYM. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;