import React from 'react';
import { Link } from 'react-router-dom';

const OrderSuccess = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 pt-20 bg-background-light dark:bg-background-dark">
      <div className="max-w-md w-full text-center flex flex-col items-center gap-6 animate-fade-in-up">
        {/* Success Icon */}
        <div className="size-24 rounded-full bg-green-500/10 flex items-center justify-center mb-2">
          <span className="material-symbols-outlined text-6xl text-green-500">check_circle</span>
        </div>
        
        {/* Text */}
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Order Confirmed!
          </h1>
          <p className="text-slate-500 dark:text-text-dim text-lg">
            Thank you for your purchase. We've received your order and are getting it ready.
          </p>
        </div>

        {/* Order Details Card */}
        <div className="w-full bg-white dark:bg-surface-dark border border-gray-200 dark:border-border-dark rounded-xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-4 border-b border-gray-100 dark:border-border-dark pb-4">
            <span className="text-sm text-slate-500 dark:text-text-dim">Order Number</span>
            <span className="font-mono font-bold text-slate-900 dark:text-white">#GY-{Math.floor(100000 + Math.random() * 900000)}</span>
          </div>
          <p className="text-sm text-slate-500 dark:text-text-dim text-left">
            A confirmation email has been sent to your inbox. We will notify you when your gear ships.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col w-full gap-3">
            <Link to="/" className="w-full bg-primary hover:bg-blue-600 text-white font-bold h-14 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-primary/30">
                Continue Shopping
            </Link>
            <Link to="/contact" className="text-slate-500 dark:text-text-dim text-sm font-medium hover:text-primary transition-colors py-2">
                Need help with your order?
            </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;