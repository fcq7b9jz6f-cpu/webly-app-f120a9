import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, User, MessageCircle, Heart } from 'lucide-react';

const Guestbook = () => {
  const [messages, setMessages] = useState([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const res = await fetch("/api/data/guestbook");
      const data = await res.json();
      setMessages(data);
    } catch (e) {
      console.error(e);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !text) return;

    setIsSubmitting(true);
    const newMessage = { 
      name, 
      text, 
      date: new Date().toLocaleDateString('ar-EG'),
      likes: 0
    };

    try {
      await fetch("/api/data/guestbook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newMessage)
      });
      setName("");
      setText("");
      fetchMessages();
    } catch (e) {
      console.error(e);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-20 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black gold-gradient mb-4">دفتر الزوار</h1>
        <p className="text-gray-400">اترك كلمة في ذكرى سيدة الغناء العربي.</p>
      </div>

      <div className="grid md:grid-cols-5 gap-12">
        <div className="md:col-span-2">
          <form onSubmit={handleSubmit} className="glass-morphism p-6 rounded-3xl sticky top-28 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">الاسم</label>
              <input 
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-[#0c0c0c] border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#d4af37]"
                placeholder="اسمك الكريم"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">رسالتك</label>
              <textarea 
                value={text}
                onChange={(e) => setText(e.target.value)}
                rows="4"
                className="w-full bg-[#0c0c0c] border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#d4af37] resize-none"
                placeholder="ماذا تحب أن تقول؟"
                required
              ></textarea>
            </div>
            <button 
              disabled={isSubmitting}
              className="w-full bg-[#d4af37] text-black font-bold py-3 rounded-xl hover:bg-[#b8962d] transition-all flex items-center justify-center gap-2"
            >
              {isSubmitting ? "جاري الإرسال..." : <><Send size={18}/> إرسال</>}
            </button>
          </form>
        </div>

        <div className="md:col-span-3 space-y-6">
          <AnimatePresence initial={false}>
            {messages.length === 0 ? (
              <div className="text-center py-20 text-gray-500 italic">لا توجد رسائل بعد.. كن أول من يعبر عن حبه.</div>
            ) : (
              messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="glass-morphism p-6 rounded-2xl relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-1 h-full bg-[#d4af37]"></div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 bg-[#d4af37]/10 rounded-full flex items-center justify-center text-[#d4af37]">
                        <User size={20}/>
                      </div>
                      <div>
                        <h4 className="font-bold">{msg.name}</h4>
                        <span className="text-[10px] text-gray-500 uppercase">{msg.date}</span>
                      </div>
                    </div>
                    <Heart size={16} className="text-gray-600 cursor-pointer hover:text-red-500 transition-colors" />
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">{msg.text}</p>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Guestbook;