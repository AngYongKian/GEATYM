import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import OrderSuccess from './pages/OrderSuccess';
import Header from './components/Header';
import Footer from './components/Footer';
import NewsletterModal from './components/NewsletterModal';
import { CartProvider } from './CartContext';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Layout = ({ children }: { children?: React.ReactNode }) => {
  const location = useLocation();
  const isCheckout = location.pathname === '/checkout' || location.pathname === '/order-success';
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header isCheckout={isCheckout} />
      <main className="flex-grow">
        {children}
      </main>
      {!isCheckout && <Footer />}
    </div>
  );
};

const App = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Show modal after 2 seconds
    const timer = setTimeout(() => {
      const hasSeenModal = localStorage.getItem('geatym_modal_seen');
      if (!hasSeenModal) {
        setShowModal(true);
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => {
    setShowModal(false);
    localStorage.setItem('geatym_modal_seen', 'true');
  };

  return (
    <CartProvider>
      <HashRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order-success" element={<OrderSuccess />} />
          </Routes>
        </Layout>
        <NewsletterModal isOpen={showModal} onClose={closeModal} />
      </HashRouter>
    </CartProvider>
  );
};

export default App;