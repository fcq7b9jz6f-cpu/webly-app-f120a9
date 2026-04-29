import { motion } from 'framer-motion';

const Gallery = () => {
  const images = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Oum_Kalthoum_1960s.png/400px-Oum_Kalthoum_1960s.png",
    "https://images.unsplash.com/photo-1514320298516-fb4ee744728f?w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1460039230329-eb0f8a29a991?w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1549410940-d668388d554a?w=600&auto=format&fit=crop",
  ];

  return (
    <div className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black gold-gradient mb-4">ذاكرة بصرية</h1>
        <p className="text-gray-400">لقطات نادرة من حياة كوكب الشرق وحفلاتها التاريخية.</p>
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {images.map((src, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02 }}
            className="break-inside-avoid relative group rounded-3xl overflow-hidden border border-white/10"
          >
            <img 
              src={src} 
              alt={`Kulthum ${i}`} 
              className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
              <span className="text-sm font-medium">أرشيف كوكب الشرق</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;