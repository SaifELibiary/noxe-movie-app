import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#020617] text-white pt-16 pb-8 px-6 md:px-16 border-t border-white/5">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Section */}
<div className="space-y-6">
  <h2 className="text-2xl font-black tracking-tighter uppercase">
    NO<span className="text-blue-500">XE</span>
  </h2>
  <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
    Your ultimate destination for the latest movies and TV shows. Experience cinema like never before with NOXE.
  </p>
            <div className="flex gap-4">
              {/* Social Media Icons (SVGs) */}
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center hover:border-blue-500 transition-colors cursor-pointer">
                  <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-blue-400">Navigation</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="hover:text-white transition-colors cursor-pointer">Home</li>
              <li className="hover:text-white transition-colors cursor-pointer">Trending Movies</li>
              <li className="hover:text-white transition-colors cursor-pointer">TV Shows</li>
              <li className="hover:text-white transition-colors cursor-pointer">New Releases</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-blue-400">Support</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="hover:text-white transition-colors cursor-pointer">Help Center</li>
              <li className="hover:text-white transition-colors cursor-pointer">Terms of Service</li>
              <li className="hover:text-white transition-colors cursor-pointer">Privacy Policy</li>
              <li className="hover:text-white transition-colors cursor-pointer">Contact Us</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-blue-400">Newsletter</h3>
            <p className="text-gray-400 text-sm">Subscribe to get the latest updates.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-slate-900 border border-white/10 px-4 py-2 rounded-l-lg focus:outline-none focus:border-blue-500 text-sm w-full"
              />
              <button className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-r-lg transition-colors font-bold text-sm">
                Join
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-[12px] font-medium uppercase tracking-widest">
<p>© 2026 NOXE. All rights reserved.</p>          <div className="flex gap-8">
            <span className="hover:text-white cursor-pointer">Facebook</span>
            <span className="hover:text-white cursor-pointer">Twitter</span>
            <span className="hover:text-white cursor-pointer">Instagram</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;