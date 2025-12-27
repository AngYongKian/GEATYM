import React from 'react';

interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const NewsletterModal: React.FC<NewsletterModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in-up">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer transition-opacity" onClick={onClose}></div>
      
      {/* Modal Card */}
      <div className="relative w-full max-w-[960px] max-h-[90vh] overflow-y-auto overflow-x-hidden rounded-lg bg-[#111318] shadow-2xl ring-1 ring-white/10 flex flex-col md:flex-row @container">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors md:right-6 md:top-6"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>

        {/* Left: Hero Image */}
        <div className="relative h-48 w-full md:h-auto md:w-1/2">
          <div className="absolute inset-0 h-full w-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDCwuNWpKSszWx_5PbuzjeKgoBPLa1vo2ykxcy1JEtwgjuBPgYkmcKPEC4eFvV5Kzi1-HsT7eU3ss5nURFI64HJs8MNLplkA1zFIG3zKq39O_-hKY_bTbtAIV6mlnKLod3dQVXRuGfFM4Y-DgFlyaD-N9Ti6dpXR5Ktup1jdIz4lKHr1aVzoorJbeGPYEHgzaGOEbiAIwd6CgQfPqJ1X2QJ9q4DM2aI2ZePfu59Ps70DWWiWRfILzcU6Cic56r9n4RjX3uRHtzYfolI')" }}>
            <div className="absolute inset-0 bg-gradient-to-t from-[#111318] to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#111318]/50"></div>
          </div>
        </div>

        {/* Right: Content */}
        <div className="flex flex-col justify-center gap-6 p-8 md:w-1/2 md:p-12 lg:p-16">
          <div className="flex flex-col gap-2 text-left">
            <h1 className="text-white text-3xl font-black leading-tight tracking-[-0.033em] md:text-4xl lg:text-5xl">
              TRAIN LIKE A PRO.
            </h1>
            <h2 className="text-text-dim text-base font-normal leading-relaxed md:text-lg">
              Get <span className="text-primary font-bold">15% off</span> your first order when you join the GEATYM squad.
            </h2>
          </div>

          <label className="flex flex-col w-full">
            <div className="flex w-full flex-col gap-3">
              <div className="relative flex w-full items-center">
                <div className="absolute left-4 flex items-center justify-center text-text-dim">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <input className="w-full rounded-lg border border-border-dark bg-[#1c212b] py-3 pl-12 pr-4 text-white placeholder:text-[#5a647a] focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary h-12 md:h-14" placeholder="Enter your email address" type="email"/>
              </div>
              <button className="flex w-full cursor-pointer items-center justify-center rounded-lg bg-primary py-3 px-6 text-white text-sm font-bold tracking-wide hover:bg-primary/90 transition-all h-12 md:h-14 shadow-[0_0_15px_rgba(52,116,244,0.3)]" onClick={onClose}>
                GET MY CODE
              </button>
            </div>
          </label>

          <div className="flex flex-col gap-4 text-center md:text-left">
            <p className="text-[#5a647a] text-xs font-normal leading-normal">
              By signing up, you agree to receive marketing emails. Unsubscribe anytime.
            </p>
            <button onClick={onClose} className="text-text-dim text-sm font-normal underline decoration-[#5a647a] underline-offset-4 hover:text-white transition-colors self-center md:self-start">
              No thanks, I'll pay full price.
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterModal;