import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import NavBar from './NavBar';

const Details = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // بنستخدم الـ Optional Chaining (?.) عشان لو الصفحة عملت Refresh والداتا طارت ميديناش شاشة بيضاء
  const item = location.state?.item;

  // لو مفيش بيانات (مثلاً المستخدم عمل Refresh لصفحة التفاصيل) بنرجعه للهوم
  if (!item) {
    return (
      <div className="min-h-screen bg-[#020617] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-white text-2xl mb-4">No data found!</h2>
          <button onClick={() => navigate('/')} className="bg-blue-600 text-white px-6 py-2 rounded-lg">
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <NavBar />
      
      <div className="relative h-[70vh] w-full">
        {/* الخلفية الملوحة */}
        <div className="absolute inset-0">
          <img 
            src={item.thumbnail || item.thumb || item.image} 
            className="w-full h-full object-cover opacity-20 blur-sm" 
            alt="" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent"></div>
        </div>

        <div className="relative max-w-[1400px] mx-auto px-6 h-full flex flex-col md:flex-row items-center justify-center gap-10 pt-20">
          {/* البوستر */}
          <div className="w-64 md:w-80 shrink-0 shadow-2xl rounded-2xl overflow-hidden border border-white/10">
            <img src={item.thumbnail || item.thumb || item.image} alt={item.title} className="w-full h-auto" />
          </div>

          {/* المعلومات */}
          <div className="flex-1 space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">{item.title}</h1>
            <div className="flex items-center justify-center md:justify-start gap-4 text-gray-400">
              <span className="text-yellow-500 font-bold">⭐ {item.rate || item.rating || '8.0'}</span>
              <span>{item.year}</span>
              <span className="bg-white/10 px-3 py-1 rounded text-xs uppercase">{item.genre || item.genres?.[0]}</span>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
              {item.story || "No description available for this title yet. Stay tuned for more updates on NOXE."}
            </p>
            <button 
              onClick={() => navigate(-1)} 
              className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-blue-500 hover:text-white transition-all"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
      <footer className="bg-[#020617] text-gray-500 text-center py-6 mt-10">
        © 2026 NOXE. All rights reserved.
      </footer>
    </div>
  );
};

export default Details;