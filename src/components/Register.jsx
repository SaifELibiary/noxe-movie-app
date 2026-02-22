import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  
  // 1. تأكد إن الـ State مكتوبة بالظبط كدة
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: ''
  });

  const handleRegister = (e) => {
    e.preventDefault();
    
    // اختبار: لو ظهرت الرسالة دي في الـ Console يبقى الحفظ شغال
    console.log("جاري حفظ البيانات...", formData);
    
    // 2. سطر الحفظ الأساسي
    localStorage.setItem('user', JSON.stringify(formData));
    
    // 3. التوجيه للهوم مع تحديث الصفحة
    navigate('/');
    window.location.reload(); 
  };

  const posters = [
    "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400",
    "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400",
    "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=400",
    "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400",
    "https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=400",
    "https://images.unsplash.com/photo-1533928298208-27ff66555d8d?w=400",
    "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=400",
    "https://images.unsplash.com/photo-1505775561242-727b7fba20f0?w=400",
    "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=400",
    "https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=400",
    "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400",
    "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400",
    "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=400",
    "https://images.unsplash.com/photo-1500462859194-885860d1100a?w=400",
    "https://images.unsplash.com/photo-1574267432553-4b4628081c31?w=400",
  ];

  return (
    <div className="h-screen bg-[#020617] flex overflow-hidden font-sans">
      <div className="w-full lg:w-[40%] flex flex-col justify-center px-8 md:px-16 lg:px-20 relative z-20 bg-[#020617]">
        <div className="mb-10">
          <Link to="/" className="text-2xl font-black tracking-tighter text-white uppercase mb-8 block">
            NO<span className="text-blue-500">XE</span>
          </Link>
          <h2 className="text-4xl font-bold text-white tracking-tight">Create Account</h2>
        </div>

        {/* 4. ركز هنا: لازم الـ onSubmit تكون على الـ form نفسها */}
        <form className="space-y-4" onSubmit={handleRegister}>
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Full Name</label>
            <input 
              required
              type="text" 
              placeholder="Enter your name" 
              className="w-full bg-white/5 border border-white/10 px-4 py-3 rounded-xl text-white outline-none" 
              // 5. الـ onChange لازم تكون كدة بالظبط
              onChange={(e) => setFormData({...formData, fullName: e.target.value})}
            />
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Email</label>
            <input 
              required
              type="email" 
              placeholder="email@example.com" 
              className="w-full bg-white/5 border border-white/10 px-4 py-3 rounded-xl text-white outline-none" 
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Password</label>
              <input 
                required
                type="password" 
                placeholder="••••••••" 
                className="w-full bg-white/5 border border-white/10 px-4 py-3 rounded-xl text-white outline-none" 
                onChange={(e) => setFormData({...formData, password: e.target.value})}
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Confirm</label>
              <input required type="password" placeholder="••••••••" className="w-full bg-white/5 border border-white/10 px-4 py-3 rounded-xl text-white outline-none" />
            </div>
          </div>

          {/* 6. تأكد إن الزرار نوعه submit */}
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 py-4 rounded-xl font-bold text-white shadow-xl mt-4 transition-all">
            Register Now
          </button>
        </form>

        <p className="mt-8 text-gray-400 text-sm">
          Already have an account? <Link to="/login" className="text-blue-500 font-bold hover:underline">Sign In</Link>
        </p>
      </div>

      {/* الجانب الأيمن (الصور) - زي ما هو */}
      <div className="hidden lg:flex flex-1 relative bg-blue-600/5 items-center justify-center overflow-hidden">
        <div className="grid grid-cols-3 gap-6 transform rotate-12 scale-125 opacity-30">
          {/* ... (رندرة الصور زي ما هي عندك) ... */}
          {posters.slice(0, 15).map((url, i) => (
             <div key={i} className="w-48 h-72 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img src={url} className="w-full h-full object-cover" alt="movie" />
             </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-transparent to-transparent"></div>
      </div>
    </div>
  );
};

export default Register;