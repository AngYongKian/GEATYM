import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="flex flex-1 w-full h-full min-h-[calc(100vh-80px)] pt-20">
      {/* Left Column: Visual Hero (Desktop Only) */}
      <div className="hidden lg:flex w-1/2 relative bg-surface-dark items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            alt="Athletic fitness model lifting weights" 
            className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHBWgMNezZ5ja17z0a_z1yBrYflb3v2g_wJ3CvUadJNJRnb34rq-SRRut90qBOoG4yQAg3WgU1hkjhCTpEVMhLfOCmY91tHSaGbKMhKUWq25RNAc5FM189FyUdpmv-TLMUEYCMCiaZhmMTn3KiNZ6gT58CDXtBpD9K8TMgxeh-FnTAcoynuWvgvqUfhHsG-54wweg6UH7onXuPzzKnvD4GFkdfV43JiYk7hvHxT-82lBEElsHcYuBb1gtncUrJ5LlnYal_No73vcO2"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/50 to-transparent"></div>
          <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
        </div>
        <div className="relative z-10 p-12 max-w-lg">
          <h1 className="text-5xl font-black text-white mb-6 tracking-tight leading-none">
            UNLEASH <br/><span className="text-primary">YOUR POWER</span>
          </h1>
          <p className="text-text-dim text-lg leading-relaxed mb-8">
            Join the elite community of fitness enthusiasts. Access exclusive drops, track your performance, and elevate your game.
          </p>
          <div className="flex gap-4">
            <div className="flex -space-x-3">
              {[
                "https://lh3.googleusercontent.com/aida-public/AB6AXuCpvdz2wiLGEfjBgu63_CoPrRagW2pahbOIZzs7etp4pyb9HSqunThqCnFYWFTDVbBLSycAT--evrmsP3BcDJpDX8uBD9jIXaXTwngskBavgdxsriqORsi7zYuKastyYJufnlCRCTpe7p79D9MfXlXTYhrHVy-jF4qhfBhY4WJJGJUIOb0CFEi2nm5144xJu2DbR9y_579c0CUxRSFEOsgBQpStXthBx5i3xwCMG8FsE0jk3sNS5BSH1ZTgBDuOf8KvYbbycClLrha4",
                "https://lh3.googleusercontent.com/aida-public/AB6AXuB7J_-g0aTAydQ5swbvOhwjwk1SB5htbjr-QIESn3vVnTthI5fWjoMrnTPJl2zMGbngB46k3TLIIfltxmJRpCNIaBzkVw-t2_S4bc7FpK1OYwuX5TlNFVXh1ROVMXJcbNSTzcZGYq4vZ7QrtzsGQN2Nj-qO76TQevvKb5P5IMHEIC0NXPxG0ZdtWuauUB-9UYreOYFJA06faxV3oGqH_P5vKBLIxb0sy78vrtK0hqm2kRkcURhoujKjmntog8Pn5LVj7-VCuAHU8eMw",
                "https://lh3.googleusercontent.com/aida-public/AB6AXuAIZUM2ueyTb4ckcPcb0EAVP3-0iAoVtV0ib1D3U3j93JvaQWtAZoj6Q2asvxWT5Gf8DemBoMmo_kmJnVCKlr0sPShV18tzT6iETPykPvD1_JhreLZ4t7IrlCAvGsUnyPVPWouvLUSP_RiIf5Ska0pf36q_R5n_tTtdKCX6BmpCZYUAJnpkX0RaykbqgIZ8XmtXjMsl7XjXcthk_G0kThANON4FaK8_L2ewP7pGzbCtqrwn9GBMzUjYssui2uuAKGWwUya16gMK4qQO"
              ].map((src, idx) => (
                <img key={idx} alt="Avatar" className="w-10 h-10 rounded-full border-2 border-background-dark object-cover" src={src}/>
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-background-dark bg-primary flex items-center justify-center text-xs font-bold text-white">+2k</div>
            </div>
            <div className="flex items-center text-sm font-bold text-white">Active GEATeamers</div>
          </div>
        </div>
      </div>

      {/* Right Column: Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 lg:p-24 bg-background-dark relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="w-full max-w-md flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">Welcome Back</h1>
            <p className="text-text-dim text-base font-normal leading-normal">Login to access your personalized dashboard.</p>
          </div>
          <form className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-white text-sm font-medium leading-normal" htmlFor="email">Email Address</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-text-dim group-focus-within:text-primary">
                  <span className="material-symbols-outlined text-[20px]">mail</span>
                </div>
                <input className="w-full h-14 pl-11 pr-4 bg-surface-dark border border-border-dark rounded-lg text-white placeholder-text-dim/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200" id="email" placeholder="Enter your email" type="email"/>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <label className="text-white text-sm font-medium leading-normal" htmlFor="password">Password</label>
                <Link to="#" className="text-sm font-medium text-primary hover:text-primary/80 underline-offset-4 hover:underline transition-all">Forgot Password?</Link>
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-text-dim group-focus-within:text-primary">
                  <span className="material-symbols-outlined text-[20px]">lock</span>
                </div>
                <input className="w-full h-14 pl-11 pr-4 bg-surface-dark border border-border-dark rounded-lg text-white placeholder-text-dim/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200" id="password" placeholder="Enter your password" type="password"/>
              </div>
            </div>
            <div className="flex flex-col gap-4 mt-2">
              <button className="flex w-full items-center justify-center rounded-lg h-14 bg-primary hover:bg-blue-600 active:bg-blue-700 text-white text-base font-bold tracking-wide transition-all shadow-lg hover:shadow-primary/50" type="button">
                LOG IN
              </button>
              <div className="relative flex py-2 items-center">
                <div className="flex-grow border-t border-border-dark"></div>
                <span className="flex-shrink-0 mx-4 text-text-dim text-sm">OR</span>
                <div className="flex-grow border-t border-border-dark"></div>
              </div>
              <button className="flex w-full items-center justify-center gap-3 rounded-lg h-14 bg-surface-dark border border-border-dark hover:bg-border-dark/50 text-white text-base font-medium transition-all group" type="button">
                <span className="text-white group-hover:text-primary transition-colors font-bold">New to the team?</span> Join the GEATeam
                <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </div>
          </form>
          <div className="text-center mt-4">
            <p className="text-text-dim text-xs">
              By logging in, you agree to our <Link to="#" className="text-white hover:underline">Terms of Service</Link> and <Link to="#" className="text-white hover:underline">Privacy Policy</Link>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;