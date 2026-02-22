import React from 'react';
import { Link } from 'react-router-dom';

const TrendingMovies = () => {
  const TrindingMov = [
    { id: 1, title: "John Henry", year: 2020, genres: ["Drama"], thumbnail: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500", rating: "7.2", story: "A quiet man with a violent past is forced to take up arms again." },
    { id: 2, title: "The Rhythm Section", year: 2020, genres: ["Action"], thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500", rating: "6.8", story: "A woman seeks revenge against those who orchestrated a plane crash." },
    { id: 3, title: "Gretel & Hansel", year: 2020, genres: ["Fantasy"], thumbnail: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=500", rating: "8.1", story: "A young girl leads her little brother into a dark wood in search of food." },
    { id: 4, title: "The Assistant", year: 2020, genres: ["Drama"], thumbnail: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=500", rating: "7.5", story: "A day in the life of an assistant to a powerful executive." },
  ];

  const displayMovies = [...TrindingMov, ...TrindingMov];

  return (
    <div className="bg-[#020617] text-white p-6 md:p-16 font-sans">
      <div className="flex flex-col lg:flex-row gap-16 max-w-[1600px] mx-auto">
        
        {/* Sidebar */}
        <div className="lg:w-[350px] lg:sticky lg:top-24 self-start space-y-6">
          <div className="inline-block px-3 py-1 border border-blue-500/30 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-bold uppercase tracking-widest">
            Weekly Updates
          </div>
          <h2 className="text-5xl font-black leading-[1.1] tracking-tighter uppercase">
            Trending <span className="text-blue-500">Movies</span> <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 italic font-light lowercase">to watch now</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-transparent rounded-full"></div>
          <p className="text-gray-400 text-base leading-relaxed font-light italic">
             "Experience the best cinema on <span className="text-white font-semibold">NOXE</span>."
          </p>
        </div>

        {/* Movie Grid */}
        <div className="flex-grow">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
            {displayMovies.map((movie, index) => (
              <Link 
                to={`/details/${movie.id}`} 
                state={{ item: { ...movie, image: movie.thumbnail, rate: movie.rating, genre: movie.genres[0] } }} 
                key={index} 
                className="group block"
              >
                {/* Poster Container */}
                <div className="relative aspect-[2/3] overflow-hidden rounded-2xl bg-slate-900 transition-all duration-500 group-hover:shadow-[0_20px_50px_rgba(59,_130,_246,_0.4)] group-hover:-translate-y-3">
                  <img 
                    src={movie.thumbnail} 
                    alt={movie.title}
                    className="w-full h-full object-cover opacity-80 transition-all duration-700 group-hover:scale-110 group-hover:opacity-100"
                  />
                  
                  {/* Rating Tag (زي الـ TV) */}
                  <div className="absolute top-0 right-0 bg-blue-600 text-white text-[11px] font-black px-2.5 py-1 shadow-lg group-hover:bg-white group-hover:text-black transition-colors duration-300">
                    {movie.rating}
                  </div>

                  {/* Play Button Overlay (نفس الـ Animation بتاع الـ TV) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <div className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-xl shadow-blue-500/40">
                       <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                    </div>
                  </div>
                </div>
                
                {/* Movie Info */}
                <div className="mt-5 space-y-1">
                  <h3 className="text-sm font-bold truncate group-hover:text-blue-400 transition-colors uppercase tracking-tight">
                    {movie.title}
                  </h3>
                  <div className="flex items-center gap-2 text-[10px] text-gray-500 font-bold uppercase tracking-widest leading-none">
                    <span>{movie.year}</span>
                    <span className="w-1 h-1 bg-blue-600 rounded-full"></span>
                    <span className="text-blue-400">{movie.genres[0]}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default TrendingMovies;