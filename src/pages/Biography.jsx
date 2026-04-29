import { motion } from 'framer-motion';
import { ScrollText, Calendar, MapPin, Music } from 'lucide-react';

const Biography = () => {
  const timeline = [
    { year: '1898', event: 'الميلاد في قرية "طماي الزهايرة" بمحافظة الدقهلية.' },
    { year: '1910', event: 'بدأت الغناء وهي طفلة مع والدها في الموالد والأفراح.' },
    { year: '1923', event: 'الانتقال إلى القاهرة وبداية بزوغ نجمها في المسارح الكبرى.' },
    { year: '1934', event: 'افتتحت بصوتها الإذاعة المصرية الرسمية.' },
    { year: '1944', event: 'منحها الملك فاروق "نيشان الكمال" ولقب "صاحبة العصمة".' },
    { year: '1967', event: 'قامت بجولات عالمية لدعم المجهود الحربي بعد النكسة.' },
    { year: '1975', event: 'رحيل كوكب الشرق وتشييع جنازة مهيبة حضرها الملايين.' },
  ];

  return (
    <div className="py-20 px-4 max-w-5xl mx-auto">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-16 text-center"
      >
        <h1 className="text-4xl md:text-6xl font-black gold-gradient mb-6">المسيرة والميلاد</h1>
        <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
          فاطمة إبراهيم البلتاجي، التي عرفها العالم باسم أم كلثوم. قصة كفاح بدأت من القرية لتصل إلى قمة المجد الغنائي العالمي.
        </p>
      </motion.div>

      <div className="space-y-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border border-white/10"
          >
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Oum_Kalthoum_1960s.png/800px-Oum_Kalthoum_1960s.png" 
              alt="Umm Kulthum Portrait" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>
          
          <div className="space-y-6">
            <h2 className="text-3xl font-bold flex items-center gap-3">
              <ScrollText className="text-[#d4af37]" />
              نشأتها
            </h2>
            <p className="text-gray-300 leading-relaxed">
              ولدت في بيت متواضع، وكان والدها مؤذناً وحافظاً للقرآن. تعلمت منه مخارج الحروف وقواعد الترتيل، مما صقل صوتها القوي والرخيم منذ الصغر. كانت تخفي أنوثتها بزي بدوي وتغني في الفرق الإنشادية حتى لا يمنعها المجتمع آنذاك.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 glass-morphism rounded-xl">
                <MapPin className="text-[#d4af37] mb-2" />
                <h4 className="font-bold">المسقط</h4>
                <p className="text-xs text-gray-400">طماي الزهايرة، مصر</p>
              </div>
              <div className="p-4 glass-morphism rounded-xl">
                <Music className="text-[#d4af37] mb-2" />
                <h4 className="font-bold">الصوت</h4>
                <p className="text-xs text-gray-400">كونترالتو / ميزو-سوبرانو</p>
              </div>
            </div>
          </div>
        </div>

        <div className="py-20">
          <h2 className="text-3xl font-bold text-center mb-16">التسلسل الزمني</h2>
          <div className="relative border-r-2 border-[#d4af37]/30 mr-4 md:mr-0 md:border-r-0 md:before:content-[''] md:before:absolute md:before:w-1 md:before:h-full md:before:bg-[#d4af37]/30 md:before:left-1/2">
            {timeline.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`mb-12 relative flex items-center justify-between w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="md:w-5/12 hidden md:block"></div>
                <div className="absolute right-[-9px] md:left-1/2 md:ml-[-8px] w-4 h-4 bg-[#d4af37] rounded-full z-10"></div>
                <div className="w-full md:w-5/12 glass-morphism p-6 rounded-2xl mr-8 md:mr-0">
                  <span className="text-[#d4af37] font-black text-xl mb-2 block">{item.year}</span>
                  <p className="text-gray-300">{item.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Biography;