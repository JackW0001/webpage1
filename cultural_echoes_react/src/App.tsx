import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home/Home';
import Choir from '@/pages/Choir/Choir';
import Ticket from '@/pages/Ticket/Ticket';
import TigerFintech from '@/pages/TigerFintech/TigerFintech';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/choir" element={<Choir />} />
        <Route path="/ticket" element={<Ticket />} />
        <Route path="/tiger-fintech" element={<TigerFintech />} />
      </Routes>
    </BrowserRouter>
  );
}
