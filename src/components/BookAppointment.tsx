import { motion } from 'motion/react';
import { Calendar, Clock, User, Phone, Mail, FileText } from 'lucide-react';

export function BookAppointment() {
  return (
    <section className="pt-32 pb-24 bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-[#dee5ff] rounded-2xl flex items-center justify-center shrink-0">
              <Calendar className="w-8 h-8 text-[#264096]" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Book an Appointment</h2>
              <p className="text-gray-600 mt-1">Schedule a consultation with our specialists.</p>
            </div>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#dee5ff] focus:border-transparent outline-none transition-all"
                    placeholder="John"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#dee5ff] focus:border-transparent outline-none transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#dee5ff] focus:border-transparent outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Phone className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#dee5ff] focus:border-transparent outline-none transition-all"
                    placeholder="07033212136"
                  />
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Calendar className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="date"
                    id="date"
                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#dee5ff] focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">Preferred Time</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Clock className="h-5 w-5 text-gray-400" />
                  </div>
                  <select
                    id="time"
                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#dee5ff] focus:border-transparent outline-none transition-all appearance-none bg-white"
                  >
                    <option value="">Select a time</option>
                    <option value="morning">Morning (8AM - 12PM)</option>
                    <option value="afternoon">Afternoon (12PM - 4PM)</option>
                    <option value="evening">Evening (4PM - 8PM)</option>
                  </select>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">Service Required</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <FileText className="h-5 w-5 text-gray-400" />
                </div>
                <select
                  id="service"
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#dee5ff] focus:border-transparent outline-none transition-all appearance-none bg-white"
                >
                  <option value="">Select a service</option>
                  <option value="consultation">Initial Consultation</option>
                  <option value="therapy">Therapy Session</option>
                  <option value="psychiatry">Psychiatric Evaluation</option>
                  <option value="rehab">Rehabilitation Program</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2">Additional Notes (Optional)</label>
              <textarea
                id="notes"
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#dee5ff] focus:border-transparent outline-none transition-all resize-none"
                placeholder="Any specific requirements or symptoms you'd like us to know about?"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#264096] text-white font-bold text-lg py-4 rounded-xl hover:bg-[#02175D] transition-colors shadow-lg shadow-[#dee5ff]"
            >
              Confirm Booking Request
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
