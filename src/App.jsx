import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Biography from './pages/Biography';
import Songs from './pages/Songs';
import Gallery from './pages/Gallery';
import Guestbook from './pages/Guestbook';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0c0c0c] text-white selection:bg-gold-500/30">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/biography" element={<Biography />} />
          <Route path="/songs" element={<Songs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/guestbook" element={<Guestbook />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;