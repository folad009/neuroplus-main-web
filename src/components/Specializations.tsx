import { motion } from "motion/react";
import {
  HeartCrack,
  Activity,
  Brain,
  Pill,
  Wind,
  ShieldAlert,
  Baby,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";

export function Specializations() {
  const conditions = [
    {
      icon: <HeartCrack className="w-8 h-8 text-[#264096]" />,
      title: "Depression & Mood Disorders",
      description:
        "Comprehensive treatment plans to help you regain joy and purpose in life. We treat major depressive disorder, persistent depressive disorder, and seasonal affective disorder.",
      symptoms: [
        "Persistent sadness",
        "Loss of interest",
        "Changes in sleep or appetite",
        "Fatigue",
      ],
    },
    {
      icon: <Activity className="w-8 h-8 text-[#264096]" />,
      title: "Bipolar Disorder",
      description:
        "Expert management of mood swings to help you maintain stability and wellness. Our approach includes medication management and targeted psychotherapy.",
      symptoms: [
        "Manic episodes",
        "Depressive episodes",
        "Impulsivity",
        "Rapid mood shifts",
      ],
    },
    {
      icon: <Wind className="w-8 h-8 text-[#264096]" />,
      title: "Anxiety & Panic Disorders",
      description:
        "Evidence-based therapies to help you manage overwhelming worry, panic attacks, and phobias, restoring your peace of mind.",
      symptoms: [
        "Excessive worry",
        "Restlessness",
        "Panic attacks",
        "Social avoidance",
      ],
    },
    {
      icon: <Brain className="w-8 h-8 text-[#264096]" />,
      title: "Schizophrenia & Psychosis",
      description:
        "Compassionate care and advanced medical management for thought disorders, helping patients stay grounded and functional.",
      symptoms: [
        "Hallucinations",
        "Delusions",
        "Disorganized thinking",
        "Social withdrawal",
      ],
    },
    {
      icon: <Pill className="w-8 h-8 text-[#264096]" />,
      title: "Addiction & Substance Abuse",
      description:
        "Holistic recovery programs for alcohol, prescription drugs, and illicit substance dependencies, focusing on long-term sobriety.",
      symptoms: [
        "Cravings",
        "Withdrawal symptoms",
        "Loss of control",
        "Tolerance building",
      ],
    },
    {
      icon: <ShieldAlert className="w-8 h-8 text-[#264096]" />,
      title: "Trauma & PTSD",
      description:
        "Trauma-informed care to help individuals process and heal from severe past experiences, reducing triggers and emotional distress.",
      symptoms: [
        "Flashbacks",
        "Nightmares",
        "Severe anxiety",
        "Emotional numbness",
      ],
    },
  ];

  const approaches = [
    "Comprehensive Psychiatric Evaluation",
    "Medication Management",
    "Cognitive Behavioral Therapy (CBT)",
    "Group & Family Therapy",
    "Lifestyle & Nutritional Counseling",
    "Relapse Prevention Planning",
  ];

  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      {/* Page Header */}
      <section className="bg-[#264096] text-white py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://picsum.photos/seed/brainhealth/1920/600"
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
            Our Specializations
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white max-w-2xl mx-auto"
          >
            Expert diagnosis and evidence-based treatment for a wide range of
            mental health conditions and addictions.
          </motion.p>
        </div>
      </section>

      {/* Conditions Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-[#264096] font-semibold tracking-wide uppercase text-sm mb-3">
              Areas of Expertise
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Conditions We Treat
            </h3>
            <p className="text-lg text-gray-600">
              Our multidisciplinary team is equipped to handle complex
              psychiatric and psychological challenges with empathy and clinical
              excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {conditions.map((condition, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 bg-[#dee5ff] rounded-2xl flex items-center justify-center mb-6">
                  {condition.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  {condition.title}
                </h4>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {condition.description}
                </p>
                <div>
                  <h5 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wider">
                    Common Symptoms
                  </h5>
                  <ul className="space-y-2">
                    {condition.symptoms.map((symptom, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-gray-600"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#264096] mt-1.5 shrink-0" />
                        {symptom}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Approach */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="/images/neuro-plus-img2.JPG"
                alt="Treatment Approach"
                className="rounded-3xl shadow-xl object-cover w-full aspect-square"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-[#264096] font-semibold tracking-wide uppercase text-sm mb-3">
                How We Help
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Treatment Approach
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We believe that there is no one-size-fits-all solution to mental
                health. Our specialists work collaboratively to design a
                personalized treatment plan that addresses your unique
                biological, psychological, and social needs.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {approaches.map((approach, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#02175D] shrink-0" />
                    <span className="text-gray-800 font-medium">
                      {approach}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-[#264096] font-semibold hover:text-[#02175D] transition-colors group"
              >
                Explore Our Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#dee5ff]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Need Help Identifying Your Symptoms?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            If you or a loved one are experiencing mental health challenges,
            don't wait. Early intervention is key to a successful recovery.
          </p>
          <Link
            to="/book-appointment"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#264096] text-white font-semibold hover:bg-[#02175D] transition-colors shadow-lg shadow-[#dee5ff]"
          >
            Schedule a Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
