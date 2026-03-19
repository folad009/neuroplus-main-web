import { HeartPulse, MapPin, Phone, Mail, MessageCircle, Facebook, Twitter, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src="/images/neuroplus-logo.png" alt="Neuro-Plus Services" className="w-70" />
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              Creating a better tomorrow. Health is all we are concerned about. We blend technology with compassionate care to improve mental health and addiction treatment.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://facebook.com/neuroplusng" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/neuroplusng" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/neuroplusng" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-teal-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-teal-400 transition-colors">About Us</Link></li>
              <li><Link to="/specializations" className="hover:text-teal-400 transition-colors">Specializations</Link></li>
              <li><Link to="/services" className="hover:text-teal-400 transition-colors">Services</Link></li>
              <li><Link to="/contact" className="hover:text-teal-400 transition-colors">Contact</Link></li>
              <li><Link to="/book-appointment" className="hover:text-teal-400 transition-colors">Book Appointment</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-white shrink-0" />
                <span>2 Neuro close, Down Zango <br/> Lokoja Kogi State, Nigeria</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-white shrink-0" />
                <span>07033212136</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-white shrink-0" />
                <span>info@neuroplusng.com</span>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-white] shrink-0" />
                <a href="https://wa.me/2347033212136" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="#" className="hover:text-teal-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="#" className="hover:text-teal-400 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>&copy; {new Date().getFullYear()} Neuro-Plus Services. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <HeartPulse className="w-4 h-4 text-white" /> for better mental health
          </p>
        </div>
      </div>
    </footer>
  );
}
