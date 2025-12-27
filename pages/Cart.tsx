import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext';
import { ASSETS } from '../src/constants/assets';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, cartCount } = useCart();

  const formatPrice = (price: number) => `$${price.toFixed(2)}`;

  if (cart.length === 0) {
    return (
      <div className="w-full pt-32 pb-20 flex items-center justify-center min-h-[60vh]">
        <div className="text-center flex flex-col items-center gap-6">
          <div className="size-20 bg-surface-dark rounded-full flex items-center justify-center mb-2">
            <span className="material-symbols-outlined text-4xl text-text-dim">shopping_cart_off</span>
          </div>
          <h2 className="text-2xl font-bold text-white">Your cart is empty</h2>
          <p className="text-text-dim">Looks like you haven't added any gear yet.</p>
          <Link to="/" className="bg-primary hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition-colors shadow-lg">
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full pt-20">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column: Cart Items */}
          <div className="flex-1">
            <header className="mb-6 flex items-baseline justify-between border-b border-border-dark pb-4">
              <h1 className="text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">Your Gear <span className="text-lg font-medium text-text-dim align-middle ml-2">({cartCount} Items)</span></h1>
              <Link to="/" className="text-sm font-medium text-primary hover:text-primary/80 hidden sm:block">Continue Shopping</Link>
            </header>
            <div className="space-y-6">
              {cart.map((item) => (
                <div key={`${item.id}-${item.color}`} className="group relative flex flex-col gap-6 rounded-xl bg-card-dark p-6 shadow-sm transition-all hover:shadow-md sm:flex-row border border-transparent hover:border-border-dark">
                  <div className="relative aspect-square w-full shrink-0 overflow-hidden rounded-lg sm:w-32 bg-[#282e39]">
                    <img alt={item.title} className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src={item.image} />
                  </div>
                  <div className="flex flex-1 flex-col justify-between">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <h3 className="text-lg font-bold text-white">{item.title}</h3>
                        <p className="mt-1 text-sm text-text-dim">{item.color}</p>
                        <p className="mt-1 text-xs text-text-dim uppercase tracking-wide">In Stock</p>
                      </div>
                      <div className="text-right sm:text-right">
                        {/* Updated Price Display: Shows Total (Price * Quantity) */}
                        <p className="text-lg font-bold text-white">{formatPrice(item.price * item.quantity)}</p>
                        {item.quantity > 1 && (
                            <p className="text-xs text-text-dim">{formatPrice(item.price)} each</p>
                        )}
                      </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between sm:mt-0">
                      <div className="flex items-center gap-3 rounded-lg bg-[#111318] p-1">
                        <button 
                          onClick={() => updateQuantity(item.id, item.color, -1)}
                          className="flex h-8 w-8 items-center justify-center rounded-md bg-[#282e39] text-white hover:bg-[#343b48] transition-colors"
                        >
                          <span className="material-symbols-outlined text-sm">remove</span>
                        </button>
                        <input className="w-8 border-none bg-transparent p-0 text-center text-sm font-medium text-white focus:ring-0 appearance-none" readOnly type="number" value={item.quantity} />
                        <button 
                          onClick={() => updateQuantity(item.id, item.color, 1)}
                          className="flex h-8 w-8 items-center justify-center rounded-md bg-[#282e39] text-white hover:bg-[#343b48] transition-colors"
                        >
                          <span className="material-symbols-outlined text-sm">add</span>
                        </button>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id, item.color)}
                        className="flex items-center gap-2 text-sm font-medium text-text-dim hover:text-red-500 transition-colors group/remove"
                      >
                        <span className="material-symbols-outlined text-lg transition-transform group-hover/remove:scale-110">delete</span>
                        <span className="hidden sm:inline">Remove</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Cross Sell / Coming Soon */}
            <div className="mt-16">
              <h2 className="mb-6 text-xl font-bold uppercase tracking-tight text-white">Coming Soon</h2>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                {[
                  { title: "Tactical Mag-Bag", price: "Dropping Soon", img: ASSETS.products.bag },
                  { title: "Pro Leather Grips", price: "Dropping Soon", img: ASSETS.products.grips },
                  { title: "Muscle Bear Keychain", price: "Dropping Soon", img: ASSETS.products.bear }
                ].map((item, idx) => (
                   <div key={idx} className="group block rounded-xl bg-card-dark p-3 transition-colors hover:bg-[#232936] cursor-default">
                    <div className="aspect-[4/5] w-full overflow-hidden rounded-lg bg-[#282e39] relative">
                      <div className="absolute inset-0 bg-black/10 z-10 group-hover:bg-transparent transition-colors"></div>
                      <img alt={item.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src={item.img} />
                    </div>
                    <div className="mt-3">
                      <h3 className="font-medium text-white group-hover:text-primary transition-colors">{item.title}</h3>
                      <p className="text-sm text-text-dim italic">{item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Order Summary (Sticky) */}
          <div className="w-full lg:w-[380px] shrink-0">
            <div className="sticky top-24 rounded-xl border border-border-dark bg-card-dark p-6 shadow-xl">
              <h2 className="text-2xl font-bold uppercase tracking-tight text-white mb-6">Order Summary</h2>
              <div className="space-y-4">
                <div className="flex justify-between text-text-dim">
                  <span>Subtotal</span>
                  <span className="text-white font-medium">{formatPrice(cartTotal)}</span>
                </div>
                <div className="flex justify-between text-text-dim">
                  <span>Shipping</span>
                  <span className="text-sm italic">Calculated at next step</span>
                </div>
                <div className="flex justify-between text-text-dim">
                  <span>Tax Estimate</span>
                  <span className="text-white font-medium">{formatPrice(cartTotal * 0.08)}</span>
                </div>
                <div className="my-4 h-px w-full bg-border-dark"></div>
                <div className="flex items-end justify-between">
                  <span className="text-lg font-bold text-white">Total</span>
                  <div className="text-right">
                    <span className="text-xs text-text-dim">USD</span>
                    <span className="text-2xl font-black text-white">{formatPrice(cartTotal * 1.08)}</span>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-text-dim">Promo Code</label>
                <div className="flex gap-2">
                  <input className="w-full rounded-lg border border-border-dark bg-[#111318] px-4 py-2 text-sm text-white placeholder-[#5d677d] focus:border-primary focus:ring-1 focus:ring-primary" placeholder="Enter code" type="text"/>
                  <button className="rounded-lg bg-[#282e39] px-4 py-2 text-sm font-bold text-white hover:bg-[#343b48] transition-colors">Apply</button>
                </div>
              </div>
              <Link to="/checkout" className="group mt-8 flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-4 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-primary/20 transition-all hover:bg-blue-600 hover:shadow-blue-600/30">
                Proceed to Checkout
                <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">arrow_forward</span>
              </Link>
              <div className="mt-6 flex justify-center gap-4 text-[#5d677d]">
                <span className="material-symbols-outlined !text-[24px]">lock</span>
                <span className="material-symbols-outlined !text-[24px]">verified_user</span>
                <span className="material-symbols-outlined !text-[24px]">credit_card</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;