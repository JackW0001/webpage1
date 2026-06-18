import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from '@/pages/Home/Home';
import Choir from '@/pages/Choir/Choir';
import Ticket from '@/pages/Ticket/Ticket';
import TigerFintech from '@/pages/TigerFintech/TigerFintech';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/choir" element={<Choir />} />
        <Route path="/ticket" element={<Ticket />} />
        <Route path="/tiger-fintech" element={<TigerFintech />} />
      </Routes>
    </BrowserRouter>
  );
}
