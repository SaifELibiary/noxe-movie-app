import React, { useState, useEffect } from "react";
import { FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  // تعديل وظيفة تسجيل الخروج عشان ترجعك الهوم
  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/'); // هنا التعديل: بيرجعك للهوم مباشرة
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#020617]/80 backdrop-blur-xl border-b border-white/5">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-16">
        <div className="flex h-20 items-center justify-between">
          
          <Link to="/" className="flex shrink-0 items-center cursor-pointer">
            <h1 className="text-2xl font-black tracking-tighter text-white uppercase">
              NO<span className="text-blue-500">XE</span>
            </h1>
          </Link>

          <div className="hidden sm:flex items-center space-x-8">
            <div className="flex items-center space-x-5 border-r border-white/10 pr-8 text-gray-400">
              <a href="#" className="hover:text-blue-500 transition-all duration-300 transform hover:scale-110">
                <FaFacebook size={18} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-all duration-300 transform hover:scale-110">
                <FaLinkedin size={18} />
              </a>
              <a href="#" className="hover:text-pink-500 transition-all duration-300 transform hover:scale-110">
                <IoLogoInstagram size={18} />
              </a>
              <a href="#" className="hover:text-red-500 transition-all duration-300 transform hover:scale-110">
                <FaYoutube size={18} />
              </a>
            </div>

            <div className="flex items-center space-x-6">
              {user ? (
                <div className="flex items-center gap-5">
                  <span className="text-sm font-medium text-gray-300 italic">
                    Welcome, <span className="text-blue-500 font-bold not-italic">{user.fullName}</span>
                  </span>
                  <button 
                    onClick={handleLogout}
                    className="rounded-full border border-red-500/50 px-5 py-1.5 text-xs font-bold text-red-500 hover:bg-red-500 hover:text-white transition-all active:scale-95"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <>
                  <Link to="/login" className="text-sm font-bold text-gray-300 hover:text-white transition-colors">
                    Login
                  </Link>
                  <Link to="/register" className="rounded-full bg-blue-600 px-7 py-2.5 text-sm font-black text-white shadow-lg shadow-blue-500/20 hover:bg-blue-500 transition-all active:scale-95">
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>

          <div className="sm:hidden text-white cursor-pointer">
             <Link to="/login">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
             </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;