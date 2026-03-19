import { motion } from 'motion/react';
import { Users, ShieldCheck, HeartHandshake, Target, Eye, Heart, Award, CheckCircle2 } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: <Users className="w-6 h-6 text-[#264096]" />,
      title: 'Expert Team',
      description: 'Psychiatrists, psychologists, therapists and other professionals.',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#264096]" />,
      title: 'Innovative Treatments',
      description: 'Access to modern treatment technology.',
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-[#264096]" />,
      title: 'Patient-Centric',
      description: 'Compassionate and individualized care.',
    },
  ];

  const values = [
    {
      icon: <Heart className="w-6 h-6 text-[#264096]" />,
      title: 'Compassion',
      description: 'We treat every individual with empathy, understanding, and without judgment.',
    },
    {
      icon: <Award className="w-6 h-6 text-[#264096]" />,
      title: 'Excellence',
      description: 'We are committed to providing the highest standard of evidence-based care.',
    },
    {
      icon: <Users className="w-6 h-6 text-[#264096]" />,
      title: 'Collaboration',
      description: 'Our multidisciplinary team works together to create holistic treatment plans.',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#264096]" />,
      title: 'Integrity',
      description: 'We maintain the highest ethical standards and confidentiality in our practice.',
    }
  ];

  const teamRoles = [
    "Addiction Psychiatrists",
    "Consultant Psychiatrists",
    "Clinical Psychologists",
    "Psychotherapists",
    "Occupational Therapists",
    "Counselors & Social Workers",
    "Psychiatric Nurses",
    "Patient Care Technicians"
  ];

  return (
    <div className="pt-20 bg-white min-h-screen">
      {/* Page Header */}
      <section className="bg-[#264096] text-white py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
           <img src="https://picsum.photos/seed/mentalhealth2/1920/600" alt="Background" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            About Neuro-Plus Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-teal-100 max-w-2xl mx-auto"
          >
            Dedicated to transforming lives through comprehensive mental health and addiction care in a safe, welcoming environment.
          </motion.p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-[#264096] font-semibold tracking-wide uppercase text-sm mb-3">
                Who We Are
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Welcome to Neuro-plus services
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We are a team of professionals committed to helping people with mental health or emotional problems and addictions. At NeuroPlusNG, we understand that seeking help is a courageous first step, and we are here to support you every step of the way.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our approach is deeply rooted in the belief that every patient is unique. We treat each patient as an individual, tailoring our evidence-based treatments to meet your specific needs through our comprehensive outpatient and inpatient programmes.
              </p>

              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-[#dee5ff] flex items-center justify-center">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              <img
                src="/images/neuroplus-services-img-1.jpg"
                alt="Doctor consulting"
                className="rounded-2xl w-full h-full object-cover shadow-lg"
                referrerPolicy="no-referrer"
              />
              <img
                src="/images/neuro-plus-services-img-2.jpg"
                alt="Therapy session"
                className="rounded-2xl w-full h-full object-cover shadow-lg mt-12"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100"
            >
              <div className="w-14 h-14 bg-[#264096] rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To improve the well-being of the patients we serve by providing expert quality care, comprehensive services, convenient access to treatment, and compassionate support.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#264096] p-10 rounded-3xl shadow-xl text-white"
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-[#264096]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-white text-lg leading-relaxed">
                To be the premier destination for mental health and addiction recovery in Nigeria, recognized for our innovative treatments, compassionate staff, and lasting patient outcomes.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-[#264096] font-semibold tracking-wide uppercase text-sm mb-3">
              Our Principles
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Core Values
            </h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto bg-[#dee5ff] rounded-full flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Multidisciplinary Team */}
      <section className="py-20 bg-[#dee5ff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                A Multidisciplinary Approach
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Mental health and addiction recovery require a holistic approach. That's why we have assembled a diverse team of specialists who collaborate closely to formulate treatment goals and assess your progress.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {teamRoles.map((role, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
                    <CheckCircle2 className="w-5 h-5 text-[#264096] shrink-0" />
                    <span className="text-gray-800 font-medium">{role}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-full min-h-100 rounded-3xl overflow-hidden shadow-xl"
            >
              <img
                src="/images/neuro-plus-services-img-3.jpg"
                alt="Medical Team"
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
