import { Menu, X, Calendar } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Specializations', href: '/specializations' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <img src="/images/neuroplus-logo.png" alt="Neuro-Plus Services" className="w-70 p-5" />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`${location.pathname === link.href ? 'text-[#264096]' : 'text-gray-600'} hover:text-[#264096] font-medium transition-colors`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/book-appointment"
              className="bg-[#264096] text-white px-6 py-2.5 rounded-full font-medium hover:bg-[#02175d] transition-colors flex items-center gap-2 shadow-sm shadow-teal-600/20"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === link.href
                    ? 'text-teal-600 bg-teal-50'
                    : 'text-gray-700 hover:text-teal-600 hover:bg-teal-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="px-3 py-3">
              <Link
                to="/book-appointment"
                onClick={() => setIsOpen(false)}
                className="w-full bg-teal-600 text-white px-6 py-3 rounded-full font-medium hover:bg-teal-700 transition-colors flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
