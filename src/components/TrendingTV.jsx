import React from 'react';
import { Link } from 'react-router-dom'; // لازم نستورد اللينك

const TrendingTV = () => {
  const tvShows = [
    { id: 101, title: "Friends", rate: "8.4", year: "1994", genre: "Comedy", thumb: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=500", story: "Follows the personal and professional lives of six twenty to thirty-something-year-old friends living in Manhattan." },
    { id: 102, title: "Lucifer", rate: "8.5", year: "2016", genre: "Crime", thumb: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=500", story: "Lucifer Morningstar has decided he's had enough of being the dutiful servant in Hell and decides to spend some time on Earth." },
    { id: 103, title: "Love, Death & Robots", rate: "8.2", year: "2019", genre: "Sci-Fi", thumb: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500", story: "A collection of animated short stories that span various genres including science fiction, fantasy, horror and comedy." },
    { id: 104, title: "Ragnarok", rate: "8.3", year: "2020", genre: "Action", thumb: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500", story: "A small Norwegian town experiencing warm winters and violent downpours seems to be headed for another Ragnarok." },
    { id: 105, title: "The Falcon & Soldier", rate: "7.8", year: "2021", genre: "Hero", thumb: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=500", story: "Following the events of 'Avengers: Endgame,' Sam Wilson and Bucky Barnes team up in a global adventure." },
  ];

  const displayShows = [...tvShows, ...tvShows];

  return (
    <div className="bg-[#020617] text-white p-6 md:p-16 font-sans">
      <div className="flex flex-col lg:flex-row gap-16 max-w-[1600px] mx-auto">
        
        {/* Sidebar Section */}
        <div className="lg:w-[350px] lg:sticky lg:top-24 self-start space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-cyan-500/20 rounded-full bg-cyan-500/5 text-cyan-400 text-[10px] font-bold uppercase tracking-widest">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            TV Shows
          </div>
          
          <h2 className="text-5xl font-black leading-[1.1] tracking-tighter uppercase">
            Trending <span className="text-cyan-400">TV</span> <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 italic font-light lowercase">to watch right now</span>
          </h2>
          
          <p className="text-gray-400 text-base leading-relaxed font-light italic">
            Most watched TV series this week. Don't miss out on the latest global episodes on <span className="text-white font-bold">NOXE</span>.
          </p>
        </div>

        {/* TV Grid */}
        <div className="flex-grow">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
            {displayShows.map((show, index) => (
              // استخدمنا Link هنا ونقلنا البيانات عبر الـ state
              <Link 
                to={`/details/${show.id}`} 
                state={{ item: { ...show, image: show.thumb, type: 'TV Show' } }} 
                key={index} 
                className="group block"
              >
                <div className="relative aspect-[2/3] overflow-hidden rounded-2xl bg-slate-900 transition-all duration-500 group-hover:shadow-[0_20px_50px_rgba(6,_182,_212,_0.3)] group-hover:-translate-y-3">
                  <img 
                    src={show.thumb} 
                    alt={show.title}
                    className="w-full h-full object-cover opacity-80 transition-all duration-700 group-hover:scale-110 group-hover:opacity-100"
                  />
                  
                  {/* Rating Tag */}
                  <div className="absolute top-0 right-0 bg-cyan-500 text-white text-[11px] font-black px-2.5 py-1 shadow-lg group-hover:bg-white group-hover:text-black transition-colors duration-300">
                    {show.rate}
                  </div>

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <div className="w-14 h-14 bg-cyan-500 text-white rounded-full flex items-center justify-center translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-xl shadow-cyan-500/40">
                       <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                    </div>
                  </div>
                </div>
                
                {/* Data Section */}
                <div className="mt-5 space-y-1">
                  <h3 className="text-sm font-bold truncate group-hover:text-cyan-400 transition-colors uppercase tracking-tight">
                    {show.title}
                  </h3>
                  <div className="flex items-center gap-2 text-[10px] text-gray-500 font-bold uppercase tracking-widest leading-none">
                    <span>{show.year}</span>
                    <span className="w-1 h-1 bg-cyan-500 rounded-full"></span>
                    <span className="text-cyan-400">{show.genre}</span>
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

export default TrendingTV;