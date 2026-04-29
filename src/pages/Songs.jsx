import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Filter, Clock, Users } from 'lucide-react';

const Songs = () => {
  const songs = [
    { title: "أنت عمري", year: "1964", composer: "محمد عبد الوهاب", poet: "أحمد شفيق كامل", duration: "58:00" },
    { title: "ألف ليلة وليلة", year: "1969", composer: "بليغ حمدي", poet: "مرسي جميل عزيز", duration: "54:00" },
    { title: "الأطلال", year: "1966", composer: "رياض السنباطي", poet: "إبراهيم ناجي", duration: "50:00" },
    { title: "سيرة الحب", year: "1964", composer: "بليغ حمدي", poet: "مرسي جميل عزيز", duration: "45:00" },
    { title: "فكروني", year: "1966", composer: "محمد عبد الوهاب", poet: "عبد الوهاب محمد", duration: "52:00" },
    { title: "أمل حياتي", year: "1965", composer: "محمد عبد الوهاب", poet: "أحمد شفيق كامل", duration: "48:00" },
    { title: "دارت الأيام", year: "1970", composer: "محمد عبد الوهاب", poet: "مأمون الشناوي", duration: "55:00" },
    { title: "حب إيه", year: "1960", composer: "بليغ حمدي", poet: "عبد الوهاب محمد", duration: "40:00" },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const filteredSongs = songs.filter(s => s.title.includes(searchTerm) || s.composer.includes(searchTerm));

  return (
    <div className="py-20 px-4 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <h1 className="text-4xl md:text-6xl font-black gold-gradient">المكتبة الموسيقية</h1>
          <p className="text-gray-400 mt-4">استعراض لأهم الروائع التي شدت بها كوكب الشرق.</p>
        </div>
        <div className="relative w-full md:w-80">
          <input 
            type="text" 
            placeholder="ابحث عن اسم أغنية أو ملحن..."
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-full py-3 px-6 focus:outline-none focus:border-[#d4af37] transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredSongs.map((song, idx) => (
          <motion.div
            key={idx}
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-6 glass-morphism rounded-2xl group hover:border-[#d4af37]/50 transition-all flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-[#d4af37]/20 rounded-full flex items-center justify-center group-hover:bg-[#d4af37] transition-all">
                <Play className="text-[#d4af37] group-hover:text-black" />
              </div>
              <div>
                <h3 className="text-xl font-bold">{song.title}</h3>
                <div className="flex items-center gap-4 text-xs text-gray-400 mt-2">
                  <span className="flex items-center gap-1"><Users size={12}/> {song.composer}</span>
                  <span className="flex items-center gap-1"><Clock size={12}/> {song.duration}</span>
                  <span className="text-[#d4af37] font-mono">{song.year}</span>
                </div>
              </div>
            </div>
            <button className="hidden sm:block px-4 py-2 text-xs border border-white/10 rounded-lg hover:bg-white/5">
              كلمات الأغنية
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Songs;