import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext';
import { ASSETS } from '../src/constants/assets';

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  
  const variants = [
    { id: 'obsidian', name: 'Obsidian Black', color: '#1a1d26', imageIndex: 0 },
    { id: 'stone', name: 'Stone Grey', color: '#4a5568', imageIndex: 1 }, // Reusing images since we don't have colored photos
    { id: 'navy', name: 'Midnight Navy', color: '#1e3a8a', imageIndex: 2 }  // Reusing images since we don't have colored photos
  ];

  const [selectedVariant, setSelectedVariant] = useState(variants[0]);
  const [activeImage, setActiveImage] = useState(selectedVariant.imageIndex);

  // Using the provided assets to create a gallery feel. 
  // Since we can't generate new 3D angles, we repeat the main one and use the other accessories as "Kit" shots.
  const images = [
    ASSETS.products.tumbler, // Main Front
    ASSETS.products.tumbler, // Simulated Side (Using same for now)
    ASSETS.products.bag,     // Kit Context
    ASSETS.products.bear     // Lifestyle Context
  ];

  useEffect(() => {
    setActiveImage(selectedVariant.imageIndex);
  }, [selectedVariant]);

  const handleAddToCart = () => {
    addToCart({
      id: 'tumbler-001',
      title: 'GEATYM Obsidian Tumbler',
      price: 45.00,
      image: images[0],
      color: selectedVariant.name,
      quantity: quantity
    });
  };

  return (
    <div className="flex justify-center py-5 md:py-10 px-4 md:px-10 lg:px-40 pt-24">
      <div className="flex flex-col max-w-[1200px] flex-1">
        {/* Breadcrumbs */}
        <div className="flex flex-wrap gap-2 px-4 pb-4 md:pb-8">
          <Link to="/" className="text-text-dim text-sm font-medium hover:text-primary">Home</Link>
          <span className="text-text-dim text-sm font-medium">/</span>
          <span className="text-text-dim text-sm font-medium">Accessories</span>
          <span className="text-text-dim text-sm font-medium">/</span>
          <span className="text-white text-sm font-medium">Tumblers</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 px-4">
          {/* Left: Image Gallery */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {/* Main Image */}
            <div className="w-full aspect-[4/5] md:aspect-square bg-[#1a1d26] rounded-xl overflow-hidden relative group">
              <div 
                className="absolute inset-0 bg-contain bg-center bg-no-repeat transition-all duration-500 group-hover:scale-105" 
                style={{ backgroundImage: `url("${images[activeImage]}")` }}
              ></div>
              <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Best Seller
              </div>
            </div>
            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-4">
              {images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 bg-[#1a1d26] transition-all ${activeImage === idx ? 'border-primary ring-2 ring-primary/20' : 'border-border-dark hover:border-white/50'}`}
                >
                  <div className="w-full h-full bg-contain bg-center bg-no-repeat" style={{ backgroundImage: `url("${img}")` }}></div>
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="lg:col-span-5 relative">
            <div className="lg:sticky lg:top-24 flex flex-col gap-6">
              {/* Header & Price */}
              <div className="border-b border-border-dark pb-6">
                <h1 className="text-white text-[32px] md:text-[40px] font-bold leading-tight tracking-tight mb-2">
                  GEATYM Tumbler
                </h1>
                <div className="flex items-center gap-4">
                  <span className="text-primary text-2xl font-bold tracking-tight">$45.00</span>
                  <div className="flex items-center gap-1 text-yellow-400 text-sm">
                    {[1,2,3,4,5].map(i => (
                        <span key={i} className="material-symbols-outlined text-[18px] filled">{i === 5 ? 'star_half' : 'star'}</span>
                    ))}
                    <span className="text-text-dim ml-1">(124 Reviews)</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="text-text-dim text-base leading-relaxed">
                <p>Engineered for the dedicated. Features high-performance double-wall insulation, a tactile matte finish for superior grip, and a spill-proof lid. Keeps hydration cold for 24 hours.</p>
              </div>

              {/* Variants */}
              <div className="flex flex-col gap-3">
                <span className="text-white font-medium text-sm">Color: <span className="text-text-dim">{selectedVariant.name}</span></span>
                <div className="flex gap-3">
                  {variants.map(variant => (
                    <button 
                      key={variant.id}
                      onClick={() => setSelectedVariant(variant)}
                      className={`size-10 rounded-full flex items-center justify-center relative shadow-lg transition-all ${selectedVariant.id === variant.id ? 'border-2 border-primary ring-2 ring-primary/30' : 'border-2 border-transparent hover:border-white/50'}`}
                      style={{ backgroundColor: variant.color }}
                    ></button>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-4 pt-4">
                <div className="flex gap-4">
                  {/* Quantity */}
                  <div className="flex items-center bg-[#1a1d26] border border-border-dark rounded-lg h-12 w-32 px-2">
                    <button 
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="size-8 flex items-center justify-center text-text-dim hover:text-white transition-colors"
                    >
                      <span className="material-symbols-outlined text-sm">remove</span>
                    </button>
                    <input className="w-full bg-transparent text-center text-white font-medium focus:outline-none border-none p-0 h-full" type="text" value={quantity} readOnly />
                    <button 
                        onClick={() => setQuantity(quantity + 1)}
                        className="size-8 flex items-center justify-center text-text-dim hover:text-white transition-colors"
                    >
                      <span className="material-symbols-outlined text-sm">add</span>
                    </button>
                  </div>
                  {/* Wishlist */}
                  <button className="flex items-center justify-center bg-[#1a1d26] border border-border-dark rounded-lg size-12 text-white hover:border-primary hover:text-primary transition-all">
                    <span className="material-symbols-outlined">favorite</span>
                  </button>
                </div>
                {/* Add to Cart */}
                <button 
                  onClick={handleAddToCart}
                  className="w-full bg-primary hover:bg-blue-600 text-white font-bold h-14 rounded-lg flex items-center justify-center gap-2 transition-all shadow-[0_0_15px_rgba(52,116,244,0.3)] hover:shadow-[0_0_25px_rgba(52,116,244,0.5)] active:scale-[0.98]"
                >
                  <span className="material-symbols-outlined">shopping_cart</span>
                  Add to Cart
                </button>
              </div>

              <div className="flex items-center gap-2 text-sm text-text-dim py-2">
                <span className="material-symbols-outlined text-green-500 text-[18px]">check_circle</span>
                <span>In stock, ready to ship</span>
              </div>
              
              {/* Info Accordions */}
              <div className="flex flex-col border-t border-border-dark mt-2">
                <details className="group border-b border-border-dark">
                  <summary className="flex items-center justify-between cursor-pointer py-4 text-white font-medium list-none select-none hover:text-primary transition-colors">
                    <span>Technical Specs</span>
                    <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180">keyboard_arrow_down</span>
                  </summary>
                  <div className="text-text-dim text-sm pb-4 px-2 space-y-2">
                    <div className="flex justify-between"><span>Capacity</span><span className="text-white">24 oz (710ml)</span></div>
                    <div className="flex justify-between"><span>Material</span><span className="text-white">18/8 Stainless Steel</span></div>
                    <div className="flex justify-between"><span>Insulation</span><span className="text-white">Double-wall Vacuum</span></div>
                  </div>
                </details>
                <details className="group border-b border-border-dark">
                    <summary className="flex items-center justify-between cursor-pointer py-4 text-white font-medium list-none select-none hover:text-primary transition-colors">
                        <span>Shipping & Returns</span>
                        <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180">keyboard_arrow_down</span>
                    </summary>
                    <div className="text-text-dim text-sm pb-4 px-2">
                        <p>Free standard shipping on all orders over $100. Orders typically ship within 2-3 business days. 30-day return policy.</p>
                    </div>
                </details>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;