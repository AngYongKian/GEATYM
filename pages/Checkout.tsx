import React, { useState } from 'react';
import { useCart } from '../CartContext';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { cart, cartTotal, cartCount, clearCart } = useCart();
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();

  const tax = cartTotal * 0.08;
  const shipping = 15.00;
  const total = cartTotal + tax + shipping;

  const formatPrice = (price: number) => `$${price.toFixed(2)}`;

  const handleCancel = () => {
    navigate('/cart');
  };

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // -------------------------------------------------------------------------
    // FUTURE INTEGRATION POINT:
    // This is where you would call your payment gateway API (e.g., Stripe, PayPal).
    //
    // Example:
    // const result = await stripe.confirmCardPayment(clientSecret, { ... });
    // if (result.error) { ...handle error... } else { ...success... }
    // -------------------------------------------------------------------------

    // Simulation of API delay
    setTimeout(() => {
      setIsProcessing(false);
      clearCart();
      navigate('/order-success');
    }, 2000);
  };

  return (
    <div className="w-full max-w-[1280px] mx-auto px-4 lg:px-40 py-8 lg:py-12 relative">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
        {/* Left Column: Checkout Process */}
        <div className="flex-1 flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl lg:text-4xl font-black leading-tight tracking-[-0.033em] dark:text-white text-slate-900">Checkout</h1>
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex min-w-[140px] flex-1 flex-col gap-2 rounded-lg p-4 border border-gray-200 dark:border-[#3b4354] bg-white dark:bg-transparent transition-all">
                <p className="text-slate-500 dark:text-text-dim text-sm font-medium leading-normal uppercase tracking-wider">Step 1</p>
                <div className="flex items-center justify-between">
                  <p className="text-slate-900 dark:text-white text-lg font-bold leading-tight">Shipping</p>
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                </div>
              </div>
              <div className="flex min-w-[140px] flex-1 flex-col gap-2 rounded-lg p-4 border border-primary bg-primary/5 dark:bg-primary/10 shadow-sm transition-all">
                <p className="text-primary text-sm font-medium leading-normal uppercase tracking-wider">Step 2</p>
                <div className="flex items-center justify-between">
                  <p className="text-slate-900 dark:text-white text-lg font-bold leading-tight">Payment</p>
                  <span className="material-symbols-outlined text-primary animate-pulse">pending</span>
                </div>
              </div>
              <div className="flex min-w-[140px] flex-1 flex-col gap-2 rounded-lg p-4 border border-gray-200 dark:border-[#3b4354] opacity-50 bg-gray-50 dark:bg-transparent">
                <p className="text-slate-500 dark:text-text-dim text-sm font-medium leading-normal uppercase tracking-wider">Step 3</p>
                <p className="text-slate-900 dark:text-white text-lg font-bold leading-tight">Review</p>
              </div>
            </div>
          </div>

          <form onSubmit={handlePayment} className="flex flex-col gap-8">
            {/* Step 1 Form */}
            <section className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="flex items-center justify-between border-b border-gray-200 dark:border-[#3b4354] pb-4">
                <h2 className="text-xl font-bold dark:text-white text-slate-900 tracking-[-0.015em]">1. Contact & Shipping</h2>
                <button type="button" className="text-primary text-sm font-bold hover:underline">Already have an account?</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="flex flex-col gap-2 md:col-span-2">
                  <span className="text-sm font-medium dark:text-white text-slate-700">Email Address</span>
                  <input required className="w-full rounded-lg border-gray-200 dark:border-none bg-white dark:bg-surface-dark dark:text-white p-4 h-14 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-slate-400" placeholder="you@example.com" type="email"/>
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-medium dark:text-white text-slate-700">First Name</span>
                  <input required className="w-full rounded-lg border-gray-200 dark:border-none bg-white dark:bg-surface-dark dark:text-white p-4 h-14 focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-slate-400" placeholder="John" type="text"/>
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-medium dark:text-white text-slate-700">Last Name</span>
                  <input required className="w-full rounded-lg border-gray-200 dark:border-none bg-white dark:bg-surface-dark dark:text-white p-4 h-14 focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-slate-400" placeholder="Doe" type="text"/>
                </label>
                <label className="flex flex-col gap-2 md:col-span-2">
                  <span className="text-sm font-medium dark:text-white text-slate-700">Address</span>
                  <input required className="w-full rounded-lg border-gray-200 dark:border-none bg-white dark:bg-surface-dark dark:text-white p-4 h-14 focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-slate-400" placeholder="123 Fitness St, Apt 4B" type="text"/>
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-medium dark:text-white text-slate-700">City</span>
                  <input required className="w-full rounded-lg border-gray-200 dark:border-none bg-white dark:bg-surface-dark dark:text-white p-4 h-14 focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-slate-400" placeholder="New York" type="text"/>
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <label className="flex flex-col gap-2">
                    <span className="text-sm font-medium dark:text-white text-slate-700">State</span>
                    <select required className="w-full rounded-lg border-gray-200 dark:border-none bg-white dark:bg-surface-dark dark:text-white p-4 h-14 focus:ring-2 focus:ring-primary focus:border-transparent transition-all cursor-pointer appearance-none">
                      <option value="">Select</option>
                      <option value="NY">NY</option>
                      <option value="CA">CA</option>
                      <option value="TX">TX</option>
                    </select>
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="text-sm font-medium dark:text-white text-slate-700">Zip</span>
                    <input required className="w-full rounded-lg border-gray-200 dark:border-none bg-white dark:bg-surface-dark dark:text-white p-4 h-14 focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-slate-400" placeholder="10001" type="text"/>
                  </label>
                </div>
              </div>
            </section>

            {/* Step 2 Form */}
            <section className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
              <div className="flex items-center justify-between border-b border-gray-200 dark:border-[#3b4354] pb-4">
                <h2 className="text-xl font-bold dark:text-white text-slate-900 tracking-[-0.015em]">2. Payment Method</h2>
                <div className="flex gap-2 opacity-60">
                  <span className="material-symbols-outlined text-lg">lock</span>
                  <span className="text-xs font-medium uppercase tracking-wider">Encrypted</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <label className="cursor-pointer relative">
                  <input defaultChecked className="peer sr-only" name="payment_method" type="radio"/>
                  <div className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl border-2 border-gray-200 dark:border-[#282e39] bg-white dark:bg-surface-dark hover:bg-gray-50 peer-checked:border-primary peer-checked:bg-primary/5 dark:peer-checked:bg-primary/10 transition-all h-full">
                    <span className="material-symbols-outlined text-3xl mb-1 dark:text-white text-slate-700">credit_card</span>
                    <span className="text-sm font-bold dark:text-white text-slate-900">Card</span>
                  </div>
                  <div className="absolute top-2 right-2 size-4 rounded-full bg-primary text-white hidden peer-checked:flex items-center justify-center">
                    <span className="material-symbols-outlined text-[10px]">check</span>
                  </div>
                </label>
                <label className="cursor-pointer relative">
                  <input className="peer sr-only" name="payment_method" type="radio"/>
                  <div className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl border-2 border-gray-200 dark:border-[#282e39] bg-white dark:bg-surface-dark hover:bg-gray-50 peer-checked:border-primary peer-checked:bg-primary/5 dark:peer-checked:bg-primary/10 transition-all h-full">
                    <span className="material-symbols-outlined text-3xl mb-1 dark:text-white text-slate-700">account_balance</span>
                    <span className="text-sm font-bold dark:text-white text-slate-900">FPX Banking</span>
                  </div>
                  <div className="absolute top-2 right-2 size-4 rounded-full bg-primary text-white hidden peer-checked:flex items-center justify-center">
                    <span className="material-symbols-outlined text-[10px]">check</span>
                  </div>
                </label>
                <label className="cursor-pointer relative">
                  <input className="peer sr-only" name="payment_method" type="radio"/>
                  <div className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl border-2 border-gray-200 dark:border-[#282e39] bg-white dark:bg-surface-dark hover:bg-gray-50 peer-checked:border-primary peer-checked:bg-primary/5 dark:peer-checked:bg-primary/10 transition-all h-full">
                    <span className="material-symbols-outlined text-3xl mb-1 dark:text-white text-slate-700">phone_iphone</span>
                    <span className="text-sm font-bold dark:text-white text-slate-900">Apple Pay</span>
                  </div>
                  <div className="absolute top-2 right-2 size-4 rounded-full bg-primary text-white hidden peer-checked:flex items-center justify-center">
                    <span className="material-symbols-outlined text-[10px]">check</span>
                  </div>
                </label>
              </div>

              <div className="p-6 rounded-xl bg-gray-50 dark:bg-surface-dark border border-gray-200 dark:border-[#282e39] flex flex-col gap-5 mt-2">
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-medium dark:text-white text-slate-700">Card Number</span>
                  <div className="relative group">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">credit_card</span>
                    <input required className="w-full rounded-lg border-gray-200 dark:border-none bg-white dark:bg-[#1c212c] dark:text-white pl-12 pr-16 py-4 h-14 focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-slate-400" placeholder="0000 0000 0000 0000" type="text" pattern="[0-9\s]{13,19}"/>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-2">
                      <div className="h-5 w-8 bg-gray-200 dark:bg-white/10 rounded flex items-center justify-center text-[8px] font-bold text-slate-500 dark:text-slate-300">VISA</div>
                    </div>
                  </div>
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <label className="flex flex-col gap-2">
                    <span className="text-sm font-medium dark:text-white text-slate-700">Expiry Date</span>
                    <input required className="w-full rounded-lg border-gray-200 dark:border-none bg-white dark:bg-[#1c212c] dark:text-white p-4 h-14 focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-slate-400" placeholder="MM / YY" type="text" pattern="(0[1-9]|1[0-2])\/?([0-9]{2})"/>
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="text-sm font-medium dark:text-white text-slate-700">Security Code</span>
                    <div className="relative group">
                      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary text-lg transition-colors">lock</span>
                      <input required className="w-full rounded-lg border-gray-200 dark:border-none bg-white dark:bg-[#1c212c] dark:text-white pl-12 pr-4 h-14 focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-slate-400" placeholder="CVC" type="text" pattern="[0-9]{3,4}"/>
                    </div>
                  </label>
                </div>
                <label className="flex items-center gap-3 cursor-pointer mt-2">
                  <input className="rounded border-gray-300 dark:border-border-dark text-primary focus:ring-primary bg-white dark:bg-[#1c212c] size-5" type="checkbox"/>
                  <span className="text-sm dark:text-text-dim text-slate-600">Save payment information for future purchases</span>
                </label>
              </div>
            </section>

            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-[#3b4354]">
              <button 
                type="submit" 
                disabled={isProcessing}
                className={`group w-full bg-primary hover:bg-blue-600 text-white font-bold text-lg h-16 rounded-xl shadow-[0_0_20px_rgba(52,116,244,0.3)] hover:shadow-[0_0_30px_rgba(52,116,244,0.5)] transition-all duration-300 flex items-center justify-center gap-3 relative overflow-hidden ${isProcessing ? 'opacity-80 cursor-wait' : ''}`}
              >
                {isProcessing ? (
                  <>
                    <span className="size-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <span className="relative z-10">Pay {formatPrice(total)}</span>
                    <span className="material-symbols-outlined relative z-10 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </>
                )}
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
              <button 
                type="button"
                onClick={() => setShowCancelModal(true)}
                className="w-full mt-4 bg-transparent border border-gray-300 dark:border-border-dark hover:bg-gray-100 dark:hover:bg-surface-dark text-slate-600 dark:text-text-dim font-bold text-base h-12 rounded-xl transition-all"
              >
                Cancel Checkout
              </button>
              <p className="text-center text-xs dark:text-text-dim text-slate-500 mt-6 flex items-center justify-center gap-1.5 opacity-80">
                <span className="material-symbols-outlined text-sm filled">verified_user</span>
                Your payment details are processed securely.
              </p>
            </div>
          </form>
        </div>

        {/* Right Column: Order Summary (Sticky) */}
        <div className="w-full lg:w-[420px] shrink-0">
          <div className="sticky top-28 flex flex-col gap-6">
            <div className="rounded-2xl bg-white dark:bg-surface-dark border border-gray-200 dark:border-[#3b4354] p-6 lg:p-8 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold dark:text-white text-slate-900 tracking-tight">Order Summary</h3>
                <span className="text-sm text-slate-500 dark:text-text-dim">{cartCount} items</span>
              </div>
              {/* Dynamic Cart Items */}
              <div className="flex flex-col gap-6 mb-8 max-h-[300px] overflow-y-auto pr-2">
                {cart.map((item) => (
                  <div key={`${item.id}-${item.color}`} className="flex gap-4 group">
                    <div className="relative size-24 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 shrink-0 border border-gray-100 dark:border-gray-700">
                      <img className="size-full object-cover group-hover:scale-110 transition-transform duration-500" src={item.image} alt={item.title}/>
                    </div>
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div>
                        <div className="flex justify-between items-start">
                          <p className="text-sm font-bold dark:text-white text-slate-900 line-clamp-2">{item.title}</p>
                        </div>
                        <p className="text-xs text-slate-500 dark:text-text-dim mt-1">{item.color}</p>
                        <p className="text-xs text-slate-500 dark:text-text-dim">Qty: {item.quantity}</p>
                      </div>
                      <p className="text-sm font-bold dark:text-white text-slate-900 text-right">{formatPrice(item.price * item.quantity)}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex gap-2 mb-8">
                <input className="flex-1 rounded-lg border-gray-200 dark:border-[#282e39] bg-gray-50 dark:bg-[#1c212c] dark:text-white text-sm px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-slate-400" placeholder="Promo code" type="text"/>
                <button className="bg-slate-900 dark:bg-[#282e39] hover:bg-primary dark:hover:bg-primary text-white font-bold text-sm px-5 py-2.5 rounded-lg transition-colors">Apply</button>
              </div>
              <div className="h-px bg-gray-200 dark:bg-[#3b4354] mb-6"></div>
              <div className="flex flex-col gap-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500 dark:text-text-dim font-medium">Subtotal</span>
                  <span className="font-bold dark:text-white text-slate-900">{formatPrice(cartTotal)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500 dark:text-text-dim font-medium">Shipping</span>
                  <span className="font-bold dark:text-white text-slate-900">{formatPrice(shipping)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500 dark:text-text-dim font-medium">Estimated Taxes</span>
                  <span className="font-bold dark:text-white text-slate-900">{formatPrice(tax)}</span>
                </div>
              </div>
              <div className="h-px bg-gray-200 dark:bg-[#3b4354] mb-6"></div>
              <div className="flex justify-between items-center">
                <span className="text-base font-bold dark:text-white text-slate-900">Total</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-xs text-slate-500 dark:text-text-dim font-medium">USD</span>
                  <span className="text-3xl font-black dark:text-white text-slate-900 tracking-[-0.05em]">{formatPrice(total)}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-6 opacity-60">
              {["VISA", "AMEX", "PAYPAL", "APPLE"].map(type => (
                 <div key={type} className="h-8 w-12 bg-gray-300 dark:bg-white/20 rounded flex items-center justify-center text-[9px] font-bold text-slate-600 dark:text-white">{type}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Cancel Modal */}
      {showCancelModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setShowCancelModal(false)}></div>
            <div className="relative bg-white dark:bg-card-dark p-6 rounded-xl max-w-sm w-full shadow-2xl animate-fade-in-up">
                <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-2">Cancel Checkout?</h3>
                <p className="text-slate-500 dark:text-text-dim mb-6 text-sm">Are you sure you want to cancel the payment? You will be redirected back to your cart.</p>
                <div className="flex gap-3">
                    <button onClick={() => setShowCancelModal(false)} className="flex-1 py-3 px-4 rounded-lg font-bold text-slate-700 dark:text-white bg-gray-100 dark:bg-[#282e39] hover:bg-gray-200 dark:hover:bg-[#343b48] transition-colors">
                        No, Stay
                    </button>
                    <button onClick={handleCancel} className="flex-1 py-3 px-4 rounded-lg font-bold text-white bg-red-600 hover:bg-red-700 transition-colors">
                        Yes, Cancel
                    </button>
                </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;