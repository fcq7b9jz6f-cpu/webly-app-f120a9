import { motion } from 'framer-motion';
import { Star, Music, Award, History } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1549410940-d668388d554a?q=80&w=2000&auto=format&fit=crop" 
            alt="Old Cairo Background" 
            className="w-full h-full object-cover opacity-30 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-8xl font-black mb-6 gold-gradient">
              أم كلثــوم
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light mb-8 leading-relaxed">
              "الهرم الرابع" و "سيدة الغناء العربي"
              <br />
              رحلة عبر صوت هز وجدان الشرق والغرب لفور عقود.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/biography" className="px-8 py-3 bg-[#d4af37] text-black font-bold rounded-full hover:bg-[#b8962d] transition-all">
                اكتشف المسيرة
              </Link>
              <Link to="/songs" className="px-8 py-3 border border-[#d4af37] text-[#d4af37] font-bold rounded-full hover:bg-[#d4af37]/10 transition-all">
                استمع للأغاني
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-20 bg-[#121212]">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { icon: <Music className="w-8 h-8"/>, label: "أكثر من ٣٠٠ أغنية", detail: "روائع موسيقية خالدة" },
            { icon: <History className="w-8 h-8"/>, label: "٥٠ عاماً من العطاء", detail: "مسيرة فنية منقطعة النظير" },
            { icon: <Star className="w-8 h-8"/>, label: "كوكب الشرق", detail: "لقب أطلقه عليها محبوها" },
            { icon: <Award className="w-8 h-8"/>, label: "أوسمة عالمية", detail: "تكريمات من ملوك ورؤساء" }
          ].map((item, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -10 }}
              className="p-6 glass-morphism rounded-2xl text-center"
            >
              <div className="text-[#d4af37] flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2">{item.label}</h3>
              <p className="text-gray-400 text-sm">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 px-4 bg-[#0c0c0c] text-center border-y border-white/5">
        <div className="max-w-3xl mx-auto">
          <span className="text-4xl text-[#d4af37]">"</span>
          <h2 className="text-3xl md:text-4xl italic font-serif leading-loose mb-6">
            أنا لن أرد على ما يقال، صمتي هو ردي... وصوتي هو الذي سيتحدث.
          </h2>
          <p className="text-[#d4af37] font-semibold">— أم كلثوم</p>
        </div>
      </section>
    </div>
  );
};

export default Home;