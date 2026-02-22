import React from 'react';

const Home = () => {
  const movies = [
    { title: "The Grudge", year: 2020, thumbnail: "https://upload.wikimedia.org/wikipedia/en/3/34/The_Grudge_2020_Poster.jpeg" },
    { title: "Underwater", year: 2020, thumbnail: "https://upload.wikimedia.org/wikipedia/en/4/4a/Underwater_poster.jpeg" },
    { title: "Like a Boss", year: 2020, thumbnail: "https://upload.wikimedia.org/wikipedia/en/9/9a/LikeaBossPoster.jpg" },
    { title: "Three Christs", year: 2020, thumbnail: "https://upload.wikimedia.org/wikipedia/en/a/a1/Three_Christs_poster.jpg" },
    { title: "Inherit the Viper", year: 2020, thumbnail: "https://upload.wikimedia.org/wikipedia/en/1/1c/Inherit_the_Viper_%282019%29_Film_Poster.jpg" },
    { title: "The Sonata", year: 2020, thumbnail: "https://upload.wikimedia.org/wikipedia/en/1/13/The_Sonata_%282018%29_Film_Poster.jpg" },
    { title: "The Murder of Nicole Brown Simpson", year: 2020, thumbnail: "https://upload.wikimedia.org/wikipedia/en/e/ed/The_Murder_of_Nicole_Brown_Simpson_poster.jpg" },
    { title: "Bad Boys for Life", year: 2020, thumbnail: "https://upload.wikimedia.org/wikipedia/en/9/90/Bad_Boys_for_Life_poster.jpg" },
    { title: "Dolittle", year: 2020, thumbnail: "https://upload.wikimedia.org/wikipedia/en/1/1f/Dolittle_%282020_film_poster%29.png" },
    { title: "A Fall from Grace", year: 2020, thumbnail: "https://upload.wikimedia.org/wikipedia/en/4/4e/AFallFromGrace.png" }
  ];

  return (
    // نستخدم h-full عشان ياخد المساحة المتاحة من الأب فقط
    <main className="relative w-full h-full overflow-hidden bg-[#131722]">
      
      {/* Background - absolute inset-0 يخليه يملأ الخلفية بدون ما يزق المحتوى */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('./images/ho.jpeg')` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#131722] via-transparent to-black/20"></div>
      </div>

      {/* Content Section - h-full مع justify-end عشان الصور تنزل تحت */}
      <div className="relative z-10 flex flex-col justify-end h-full px-10 pb-6">
        
        <div className="mb-4">
          <h2 className="text-white text-2xl font-bold mb-4 uppercase tracking-wider">Trending Now</h2>
          
          {/* هنا السكرول العرضي */}
          <div className="flex items-center gap-4 overflow-x-auto no-scrollbar pb-2">
            {movies.map((movie, index) => (
              <div 
                key={index} 
                className="min-w-[150px] group flex-shrink-0 cursor-pointer"
              >
                <div className="h-[210px] bg-gray-800 rounded-lg overflow-hidden transition-transform group-hover:scale-105 shadow-2xl border border-white/10">
                  <img 
                    src={movie.thumbnail} 
                    alt={movie.title} 
                    className="w-full h-full object-cover"
                    onError={(e) => e.target.src = 'https://via.placeholder.com/150x210?text=Poster'}
                  />
                </div>
                <p className="text-white text-xs mt-2 font-medium truncate group-hover:text-blue-400">
                  {movie.title}
                </p>
                <p className="text-gray-400 text-[10px]">{movie.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </main>
  );
};

export default Home;