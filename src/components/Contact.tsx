import { motion } from 'motion/react';
import { MapPin, Phone, Mail, MessageSquare } from 'lucide-react';

export function Contact() {
  return (
    <section className="pt-32 pb-24 bg-[#02175D] text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-white font-semibold tracking-wide uppercase text-sm mb-3">
              Contact Us
            </h2>
            <h3 className="text-4xl font-bold mb-6 leading-tight">
              Get in Touch
            </h3>
            <p className="text-lg text-white mb-12 leading-relaxed max-w-lg">
              Getting an accurate diagnosis can be one of the most impactful experiences you can have, especially if you have been searching for answers about your mental health.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#264096] rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-1">Address</h4>
                  <p className="text-white leading-relaxed">
                    2 Neuro close, Down Zango<br />
                    Lokoja Kogi State, Nigeria
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#264096] rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-1">Phone</h4>
                  <p className="text-white leading-relaxed">
                    07033212136
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#264096] rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-1">Email</h4>
                  <p className="text-white leading-relaxed">
                    info@neuroplusng.com
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 shadow-2xl text-gray-900"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-[#264096]" />
              </div>
              <h4 className="text-2xl font-bold">Send us a Message</h4>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-600 focus:border-transparent outline-none transition-all"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-600 focus:border-transparent outline-none transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-600 focus:border-transparent outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-600 focus:border-transparent outline-none transition-all"
                    placeholder="07033212136"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-2">Reason for Inquiry</label>
                <select
                  id="reason"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-600 focus:border-transparent outline-none transition-all appearance-none bg-white"
                >
                  <option value="">Select a reason</option>
                  <option value="general">General Inquiry</option>
                  <option value="appointment">Appointment Request</option>
                  <option value="service">Specific Service Information</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#264096]/10 focus:border-transparent outline-none transition-all"
                  placeholder="How can we help you?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#264096]/10 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Please provide details..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#264096] text-white font-semibold py-4 rounded-xl hover:bg-[#02175D] transition-colors shadow-lg shadow-teal-600/20"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
