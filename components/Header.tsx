import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../CartContext';
import { ASSETS } from '../src/constants/assets';

interface HeaderProps {
  isCheckout?: boolean;
}

const Header: React.FC<HeaderProps> = ({ isCheckout }) => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Use transparent background only on home page when not scrolled
  const isTransparent = location.pathname === '/' && !isScrolled && !isMobileMenuOpen;
  
  const headerBgClass = isCheckout 
    ? 'bg-white/80 dark:bg-[#111318]/90 backdrop-blur-md border-b border-gray-200 dark:border-[#282e39]'
    : isTransparent 
      ? 'bg-transparent border-b border-transparent' 
      : 'bg-[#111318]/90 backdrop-blur-md border-b border-border-dark';

  const getNavLinkClass = (path: string) => {
    const isActive = path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);
    if (isActive) {
      return "text-primary text-sm font-bold tracking-wide border-b-2 border-primary h-full flex items-center pt-0.5";
    }
    return "text-text-dim hover:text-white text-sm font-medium tracking-wide h-full flex items-center transition-colors border-b-2 border-transparent hover:border-white/10 pt-0.5";
  };

  if (isCheckout) {
    return (
      <header className={`sticky top-0 z-50 transition-all duration-300 ${headerBgClass} px-6 py-4 lg:px-40`}>
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-4 text-slate-900 dark:text-white group">
            <div className="h-8 transition-transform group-hover:scale-105">
              <img src={ASSETS.logo} alt="GEATYM" className="h-full w-auto object-contain dark:invert" />
            </div>
          </Link>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-[#282e39] text-slate-500 dark:text-text-dim text-sm font-bold tracking-wide">
            <span className="material-symbols-outlined text-base">lock</span>
            <span className="uppercase">Secure Checkout</span>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBgClass}`}>
      <div className="max-w-[1440px] mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 text-white group">
          <div className="h-8 transition-transform group-hover:scale-105">
             <img src={ASSETS.logo} alt="GEATYM" className="h-full w-auto object-contain invert" />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 h-full">
          <Link to="/" className={getNavLinkClass('/')}>HOME</Link>
          
          <div className="group relative h-full flex items-center">
            <button className={`${location.pathname.includes('/product') ? 'text-primary' : 'text-text-dim'} hover:text-white text-sm font-medium tracking-wide flex items-center gap-1 transition-colors h-full`}>
              PRODUCT
              <span className="material-symbols-outlined !text-[16px]">expand_more</span>
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 pt-2 hidden group-hover:block opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <div className="bg-surface-dark border border-border-dark rounded-lg shadow-2xl overflow-hidden p-2 flex flex-col gap-1">
                <div className="px-3 py-2 text-xs font-bold text-text-dim uppercase tracking-wider">Available Now</div>
                <Link to="/product/1" className="block px-3 py-2 text-sm text-white hover:bg-white/5 rounded transition-colors flex items-center justify-between group/item">
                  GEATYM Tumbler
                  <span className="material-symbols-outlined !text-[16px] text-primary opacity-0 group-hover/item:opacity-100 transition-opacity">arrow_forward</span>
                </Link>
                <div className="h-px bg-border-dark my-1 mx-2"></div>
                <div className="px-3 py-2 text-xs font-bold text-text-dim uppercase tracking-wider">Coming Soon</div>
                <Link to="#" className="block px-3 py-2 text-sm text-text-dim hover:text-white hover:bg-white/5 rounded transition-colors">Tactical Mag-Bag</Link>
                <Link to="#" className="block px-3 py-2 text-sm text-text-dim hover:text-white hover:bg-white/5 rounded transition-colors">Pro Leather Grips</Link>
              </div>
            </div>
          </div>
          
          <Link to="/contact" className={getNavLinkClass('/contact')}>CONTACT</Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Link to="/cart" className="size-10 flex items-center justify-center rounded-lg text-text-dim hover:text-white hover:bg-white/5 transition-colors relative">
            <span className="material-symbols-outlined">shopping_cart</span>
            {cartCount > 0 && (
              <span className="absolute top-2 right-2 size-2 bg-primary rounded-full"></span>
            )}
          </Link>
          <Link to="/login" className="size-10 flex items-center justify-center rounded-lg text-text-dim hover:text-white hover:bg-white/5 transition-colors">
            <span className="material-symbols-outlined">account_circle</span>
          </Link>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden size-10 flex items-center justify-center rounded-lg text-text-dim hover:text-white hover:bg-white/5 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="material-symbols-outlined">{isMobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#111318] border-b border-border-dark px-6 py-4 flex flex-col gap-4 animate-fade-in-up">
           <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className={`${location.pathname === '/' ? 'text-primary' : 'text-white'} text-lg font-bold py-2 border-b border-border-dark`}>Home</Link>
           <Link to="/product/1" onClick={() => setIsMobileMenuOpen(false)} className={`${location.pathname.includes('/product') ? 'text-primary' : 'text-text-dim'} text-lg font-medium py-2 border-b border-border-dark`}>Products</Link>
           <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className={`${location.pathname === '/contact' ? 'text-primary' : 'text-text-dim'} text-lg font-medium py-2 border-b border-border-dark`}>Contact</Link>
           <Link to="/login" onClick={() => setIsMobileMenuOpen(false)} className="text-text-dim text-lg font-medium py-2">Login</Link>
        </div>
      )}
    </header>
  );
};

export default Header;