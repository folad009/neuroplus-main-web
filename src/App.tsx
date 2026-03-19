/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { About } from './components/About';
import { Specializations } from './components/Specializations';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { BookAppointment } from './components/BookAppointment';
import { Footer } from './components/Footer';
import { WhatsAppChat } from './components/WhatsAppChat';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50 font-sans selection:bg-teal-200 selection:text-teal-900">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/specializations" element={<Specializations />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/book-appointment" element={<BookAppointment />} />
          </Routes>
        </main>
        <WhatsAppChat />
        <Footer />
      </div>
    </Router>
  );
}
