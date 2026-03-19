import { motion } from "motion/react";
import {
  Stethoscope,
  Home,
  Video,
  Users,
  Briefcase,
  ArrowRight,
  CheckCircle2,
  CalendarHeart,
  ClipboardList,
  HeartHandshake,
} from "lucide-react";
import { Link } from "react-router-dom";

export function Services() {
  const services = [
    {
      icon: <Stethoscope className="w-8 h-8 text-[#264096]" />,
      title: "Outpatient Services",
      description:
        "Flexible, ongoing care that allows you to maintain your daily routine. Includes psychiatric evaluations, medication management, and individual psychotherapy sessions.",
      features: [
        "Psychiatric Consultations",
        "Medication Management",
        "Individual Therapy",
        "Psychological Testing",
      ],
    },
    {
      icon: <Home className="w-8 h-8 text-[#264096]" />,
      title: "Inpatient Care",
      description:
        "A safe, structured, and supportive 24/7 environment for individuals requiring intensive psychiatric care or medically supervised detoxification.",
      features: [
        "24/7 Medical Supervision",
        "Safe Environment",
        "Structured Daily Routine",
        "Intensive Group Therapy",
      ],
    },
    {
      icon: <Video className="w-8 h-8 text-[#264096]" />,
      title: "Telepsychiatry",
      description:
        "Access our expert care from the comfort of your home. Secure, confidential video consultations for therapy and medication follow-ups.",
      features: [
        "Secure Video Calls",
        "Flexible Scheduling",
        "Prescription Refills",
        "Remote Monitoring",
      ],
    },
    {
      icon: <Users className="w-8 h-8 text-[#264096]" />,
      title: "Rehabilitation Programs",
      description:
        "Comprehensive addiction recovery programs focusing on physical detox, psychological healing, and long-term relapse prevention.",
      features: [
        "Medical Detoxification",
        "12-Step Integration",
        "Skill Building",
        "Aftercare Planning",
      ],
    },
    {
      icon: <Briefcase className="w-8 h-8 text-[#264096]" />,
      title: "Corporate Mental Health",
      description:
        "Partnering with organizations to promote workplace well-being through Employee Assistance Programs (EAP), workshops, and stress management seminars.",
      features: [
        "Employee Assistance (EAP)",
        "Wellness Workshops",
        "Stress Management",
        "Leadership Training",
      ],
    },
  ];

  const journeySteps = [
    {
      icon: <CalendarHeart className="w-6 h-6 text-white" />,
      title: "1. Initial Contact",
      description:
        "Reach out to us via phone or our online booking system to schedule your first appointment.",
    },
    {
      icon: <ClipboardList className="w-6 h-6 text-white" />,
      title: "2. Comprehensive Assessment",
      description:
        "Meet with our specialists for a thorough evaluation of your mental, emotional, and physical health.",
    },
    {
      icon: <Stethoscope className="w-6 h-6 text-white" />,
      title: "3. Personalized Treatment Plan",
      description:
        "We collaboratively design a tailored plan that may include therapy, medication, or lifestyle changes.",
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-white" />,
      title: "4. Ongoing Care & Recovery",
      description:
        "Engage in your treatment program with continuous support, monitoring, and adjustments as needed.",
    },
  ];

  return (
    <div className="pt-20 bg-white min-h-screen">
      {/* Page Header */}
      <section className="bg-[#264096] text-white py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://picsum.photos/seed/servicesbg/1920/600"
            alt="Background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white max-w-2xl mx-auto"
          >
            Comprehensive, compassionate, and cutting-edge mental health and
            addiction treatment services tailored to your needs.
          </motion.p>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-[#264096] font-semibold tracking-wide uppercase text-sm mb-3">
              What We Offer
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Programs Designed for Healing
            </h3>
            <p className="text-lg text-gray-600">
              Whether you need weekly therapy sessions or intensive 24/7 care,
              NeuroPlusNG provides a full continuum of services to support your
              journey.
            </p>
          </div>

          <div className="space-y-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col ${index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 lg:gap-16 items-center bg-gray-50 rounded-3xl p-8 lg:p-12`}
              >
                <div className="flex-1 w-full">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                    {service.icon}
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h4>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#264096] shrink-0" />
                        <span className="text-gray-800 font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex-1 w-full">
                  <img
                    src={`https://picsum.photos/seed/service${index}/800/600`}
                    alt={service.title}
                    className="rounded-2xl shadow-lg w-full object-cover aspect-4/3"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Patient Journey */}
      <section className="py-20 bg-[#264096] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-[#dee5ff] font-semibold tracking-wide uppercase text-sm mb-3">
              Our Process
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Your Journey to Wellness
            </h3>
            <p className="text-lg text-white">
              We make the process of getting help as seamless and stress-free as
              possible. Here is what you can expect when you choose NeuroPlusNG.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-[#dee5ff] z-0" />

            {journeySteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative z-10 text-center"
              >
                <div className="w-16 h-16 mx-auto bg-[#02175D] rounded-full flex items-center justify-center mb-6 shadow-lg border-4 border-[#dee5ff]">
                  {step.icon}
                </div>
                <h4 className="text-xl font-bold mb-3">{step.title}</h4>
                <p className="text-white text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Begin?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Take the first step towards a healthier, more fulfilling life. Our
            team is ready to support you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/book-appointment"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#264096] text-white font-semibold hover:bg-[#02175D] transition-colors shadow-lg shadow-[#dee5ff]"
            >
              Book an Appointment
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
