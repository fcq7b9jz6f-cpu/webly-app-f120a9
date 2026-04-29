import { Link, useLocation } from 'react-router-dom';
import { Music, Menu, X, Mic2 } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'الرئيسية', path: '/' },
    { name: 'السيرة الذاتية', path: '/biography' },
    { name: 'الأعمال الغنائية', path: '/songs' },
    { name: 'معرض الصور', path: '/gallery' },
    { name: 'دفتر الزوار', path: '/guestbook' },
  ];

  return (
    <nav className="sticky top-0 z-50 glass-morphism border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <Mic2 className="text-[#d4af37] w-8 h-8" />
            <Link to="/" className="text-2xl font-bold gold-gradient tracking-tighter">
              كوكب الشرق
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-reverse space-x-8">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                    location.pathname === link.path ? 'text-[#d4af37]' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-400 hover:text-white">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#161616] border-b border-white/10 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-[#d4af37]"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;