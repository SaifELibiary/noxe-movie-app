import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const savedData = localStorage.getItem('user');

    if (savedData) {
      const savedUser = JSON.parse(savedData);
      // بنشيل أي مسافات زيادة من المدخلات عشان المقارنة تنجح
      if (savedUser.email.trim() === email.trim() && savedUser.password === password) {
        navigate('/');
        window.location.reload();
      } else {
        alert("الباسورد أو الإيميل غلط");
      }
    } else {
      alert("مفيش أي مستخدم متسجل، روح سجل الأول");
    }
  };

  const posters = [
    "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400",
    "https://images.unsplash.com/photo-1505682634904-d7c8d95ccd50?w=400",
    "https://images.unsplash.com/photo-1596727147705-61a532a659bd?w=400",
    "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?w=400",
    "https://images.unsplash.com/photo-1518063319789-7217e6706b04?w=400",
    "./images/download.jpg",
    "./images/download (1).jpg",
    "./images/download (2).jpg",
    "./images/download.jpg",
    "./images/download (1).jpg",
    "./images/download (3).jpg",
    "./images/download (1).jpg",
    "https://images.unsplash.com/photo-1620145648299-f926ac0a9470?w=400",
    "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400",
    "https://images.unsplash.com/photo-1507924538820-ede94a04019d?w=400",
    "https://images.unsplash.com/photo-1504333638930-c8787321eba0?w=400",
    "https://images.unsplash.com/photo-1512113569143-1d623c518525?w=400",
    "https://images.unsplash.com/photo-1536697246787-1f7ad50299ff?w=400",
    "https://images.unsplash.com/photo-1542204172-3f1a05599a3c?w=400",
    "https://images.unsplash.com/photo-1517608455369-90299c51d1a5?w=400",
    "https://images.unsplash.com/photo-1585951237318-9ea5e175b891?w=400",
  ];

  return (
    <div className="h-screen bg-[#020617] flex overflow-hidden font-sans">
      <div className="w-full lg:w-[40%] flex flex-col justify-center px-8 md:px-16 lg:px-20 relative z-20 bg-[#020617]">
        <div className="mb-10">
          <Link to="/" className="text-2xl font-black tracking-tighter text-white uppercase mb-8 block">
            NO<span className="text-blue-500">XE</span>
          </Link>
          <h2 className="text-4xl font-bold text-white tracking-tight">Welcome Back</h2>
          <p className="text-gray-500 mt-2">Sign in to your account to continue watching.</p>
        </div>

        <form className="space-y-5" onSubmit={handleLogin}>
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-[2px]">Email Address</label>
            <input 
              type="email" 
              required
              name="email"
              onChange={(e) => setEmail(e.target.value)} // الكتابة هتشتغل فوراً هنا
              placeholder="name@example.com" 
              className="w-full bg-white/5 border border-white/10 px-5 py-3.5 rounded-xl text-white outline-none focus:border-blue-500 transition-all" 
            />
          </div>

          <div className="space-y-1">
            <div className="flex justify-between items-center">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-[2px]">Password</label>
            </div>
            <input 
              type="password" 
              required
              name="password"
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="••••••••" 
              className="w-full bg-white/5 border border-white/10 px-5 py-3.5 rounded-xl text-white outline-none focus:border-blue-500 transition-all" 
            />
          </div>

          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 py-4 rounded-xl font-bold text-white shadow-xl shadow-blue-500/20 transition-all mt-4">
            Sign In
          </button>
        </form>

        <p className="mt-8 text-gray-400 text-sm">
          New to Noxe? <Link to="/register" className="text-blue-500 font-bold hover:underline ml-1">Create an account</Link>
        </p>

        <div className="mt-12">
            <Link to="/" className="text-gray-500 text-xs hover:text-white transition-colors uppercase tracking-widest font-bold flex items-center gap-2">
               ← Back to Home
            </Link>
        </div>
      </div>

      {/* الجزء اليمين زي ما هو */}
      <div className="hidden lg:flex flex-1 relative bg-blue-600/5 items-center justify-center overflow-hidden">
        <div className="grid grid-cols-3 gap-6 transform rotate-12 scale-125 opacity-25">
          {posters.slice(0, 15).map((url, i) => (
             <div key={i} className="w-48 h-72 rounded-2xl overflow-hidden border border-white/5 shadow-2xl transition-transform duration-500 hover:scale-105">
                <img src={url} className="w-full h-full object-cover" alt="movie poster" />
             </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-transparent to-transparent"></div>
      </div>
    </div>
  );
};

export default Login;