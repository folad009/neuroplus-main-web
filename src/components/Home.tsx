import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, HeartPulse, Brain, Activity, HeartCrack, ShieldCheck, Clock, Users, PhoneCall, Star, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  const heroSlides = [
    {
      src: '/images/neuro-plus-hero-image.jpg',
      alt: 'Therapy session',
    },
    {
      src: '/images/neuro-plus-img1.JPG',
      alt: 'Mental health support session',
    },
    {
      src: '/images/neuro-plus-img2.JPG',
      alt: 'Compassionate clinical care',
    },
    {
      src: '/images/neuro-plus-img3.JPG',
      alt: 'Wellness-focused consultation',
    },
  ];
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveSlide((currentSlide) => (currentSlide + 1) % heroSlides.length);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [heroSlides.length]);

  const stats = [
    { number: "15+", label: "Expert Specialists" },
    { number: "5000+", label: "Patients Helped" },
    { number: "24/7", label: "Care & Support" },
    { number: "10+", label: "Years Experience" }
  ];

  const specializations = [
    {
      icon: <HeartCrack className="w-8 h-8 text-teal-600" />,
      title: 'Depression',
      description: 'Comprehensive treatment plans to help you regain joy and purpose in life.',
    },
    {
      icon: <Activity className="w-8 h-8 text-teal-600" />,
      title: 'Bipolar Disorder',
      description: 'Expert management of mood swings to help you maintain stability and wellness.',
    },
    {
      icon: <Brain className="w-8 h-8 text-teal-600" />,
      title: 'Addiction Recovery',
      description: 'Evidence-based approaches to overcome substance dependence and reclaim your life.',
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#264096] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://picsum.photos/seed/mentalhealth/1920/1080?blur=4"
            alt="Calm background"
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#264096]/10 to-white/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#264096] text-white font-medium text-sm mb-6 border border-[#264096]">
                <span>Welcome to Neuro-Plus Services</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-[#f9f9f9] tracking-tight leading-[1.1] mb-6">
                Creating a better <span className="text-white">tomorrow</span>
              </h1>
              
              <p className="text-xl text-white mb-8 leading-relaxed max-w-lg">
                Health is all we are concerned about. We blend technology with compassionate care to improve mental health and addiction treatment.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/book-appointment"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#264096] text-white font-semibold hover:bg-[#264096] transition-colors shadow-lg shadow-[#264096]/20"
                >
                  Book an Appointment
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-gray-900 font-semibold hover:bg-gray-50 transition-colors border border-gray-200"
                >
                  Our Services
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-teal-900/10 aspect-4/3">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={heroSlides[activeSlide].src}
                    src={heroSlides[activeSlide].src}
                    alt={heroSlides[activeSlide].alt}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-linear-to-t from-gray-900/40 to-transparent" />

                <div className="absolute bottom-5 right-5 flex items-center gap-2 z-10">
                  {heroSlides.map((slide, index) => (
                    <button
                      key={slide.src}
                      type="button"
                      aria-label={`Show slide ${index + 1}`}
                      onClick={() => setActiveSlide(index)}
                      className={`h-2.5 rounded-full transition-all ${
                        activeSlide === index ? 'w-8 bg-white' : 'w-2.5 bg-white/55 hover:bg-white/80'
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4">
                <div className="w-12 h-12 bg-[#8aa6ff] rounded-full flex items-center justify-center text-white">
                  <HeartPulse className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Expert Care</p>
                  <p className="text-lg font-bold text-gray-900">Compassionate Support</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-[#264096] relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-teal-800/50">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center px-4"
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-[#8aa6ff] text-sm md:text-base font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specializations Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-[#264096] font-semibold tracking-wide uppercase text-sm mb-3">
                How We Can Help
              </h2>
              <h3 className="text-3xl md:text-3xl font-bold text-gray-900 leading-tight">
                Specialized Care for Your Mental Well-being
              </h3>
            </div>
            <Link 
              to="/specializations"
              className="inline-flex items-center gap-2 text-[#264096] font-semibold hover:text-[#02175d] transition-colors group"
            >
              View All Specializations
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {specializations.map((spec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-3xl p-8 hover:bg-[#dce3fffa]  transition-colors border border-gray-100 hover:border-[#8aa6ff] group"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  {spec.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{spec.title}</h4>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {spec.description}
                </p>
                <Link to="/specializations" className="text-[#264096] font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Preview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-full bg-teal-100 absolute -top-8 -left-8 w-64 h-64 z-0 blur-3xl opacity-50" />
              <img 
                src="/images/neuro-plus-home-image.jpg" 
                alt="Compassionate Care" 
                className="relative z-10 rounded-3xl shadow-xl object-cover aspect-4/5"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl z-20 max-w-xs hidden sm:block">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="font-bold text-gray-900">Certified Experts</div>
                </div>
                <p className="text-sm text-gray-600">Our team consists of licensed and highly trained professionals.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-teal-600 font-semibold tracking-wide uppercase text-sm mb-3">
                Why Choose Us
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                A Safe Haven for Healing and Growth
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We provide a supportive, non-judgmental environment where you can focus entirely on your recovery. Our multidisciplinary approach ensures that all aspects of your well-being are addressed.
              </p>

              <ul className="space-y-6 mb-10">
                {[
                  { icon: <Users className="w-5 h-5 text-teal-600" />, text: "Multidisciplinary team of specialists" },
                  { icon: <Clock className="w-5 h-5 text-teal-600" />, text: "Flexible outpatient and inpatient programs" },
                  { icon: <HeartPulse className="w-5 h-5 text-teal-600" />, text: "Personalized, evidence-based treatment plans" }
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <span className="text-gray-800 font-medium text-lg">{item.text}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gray-900 text-white font-semibold hover:bg-gray-800 transition-colors"
              >
                Learn More About Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-teal-600 font-semibold tracking-wide uppercase text-sm mb-3">
              Patient Stories
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Hear From Those We've Helped
            </h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "NeuroPlusNG completely changed my life. The staff is incredibly supportive and the treatment plan was tailored perfectly to my needs. I finally feel like myself again.",
                name: "Sarah M.",
                role: "Recovering Patient",
                image: "https://picsum.photos/seed/patient1/150/150"
              },
              {
                quote: "The level of care and professionalism here is unmatched. From the first consultation to my ongoing therapy, I've felt heard, respected, and genuinely cared for.",
                name: "David K.",
                role: "Outpatient Client",
                image: "https://picsum.photos/seed/patient2/150/150"
              },
              {
                quote: "Finding a facility that treats addiction with such compassion and medical expertise was a blessing. I've been sober for two years now, thanks to their comprehensive program.",
                name: "Michael T.",
                role: "Alumni",
                image: "https://picsum.photos/seed/patient3/150/150"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-3xl p-8 border border-gray-100 relative"
              >
                <Quote className="w-10 h-10 text-teal-200 absolute top-6 right-8" />
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-8 relative z-10">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#264096] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Take the First Step?
          </h2>
          <p className="text-xl text-teal-100 mb-10 leading-relaxed">
            You don't have to face this alone. Reach out to our compassionate team today and start your journey toward a healthier, happier life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/book-appointment"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-teal-900 font-bold hover:bg-gray-50 transition-colors shadow-xl"
            >
              Book an Appointment
            </Link>
            <a
              href="tel:07033212136"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#9eb4ff] text-white font-bold hover:bg-[#264096] transition-colors"
            >
              <PhoneCall className="w-5 h-5" />
              Call 07033212136
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
