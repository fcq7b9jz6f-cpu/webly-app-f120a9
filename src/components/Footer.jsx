import { Mic2, Mail, Globe, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#080808] border-t border-white/10 py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <Mic2 className="text-[#d4af37] w-6 h-6" />
            <span className="text-2xl font-bold gold-gradient">كوكب الشرق</span>
          </div>
          <p className="text-gray-400 leading-relaxed max-w-sm">
            منصة مخصصة لتخليد ذكرى سيدة الغناء العربي أم كلثوم، والحفاظ على تراثها الفني الفريد للأجيال القادمة.
          </p>
        </div>
        
        <div>
          <h4 className="font-bold mb-6 flex items-center gap-2"><Globe size={18} className="text-[#d4af37]"/> روابط سريعة</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li><a href="/" className="hover:text-[#d4af37] transition-colors">الرئيسية</a></li>
            <li><a href="/biography" className="hover:text-[#d4af37] transition-colors">السيرة الذاتية</a></li>
            <li><a href="/songs" className="hover:text-[#d4af37] transition-colors">الأعمال الغنائية</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 flex items-center gap-2"><Mail size={18} className="text-[#d4af37]"/> تواصل معنا</h4>
          <p className="text-sm text-gray-500 mb-4">للإعلام أو طلبات الأرشيف:</p>
          <a href="mailto:info@omkalthoum.com" className="text-[#d4af37] text-sm font-mono">info@omkalthoum.com</a>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
        <p>© {new Date().getFullYear()} أرشيف سيدة الغناء العربي. جميع الحقوق محفوظة.</p>
        <p className="flex items-center gap-1">صنع بكل <Heart size={12} className="text-red-900 fill-red-900" /> في مصر</p>
      </div>
    </footer>
  );
};

export default Footer;