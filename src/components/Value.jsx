"use client"
import { motion } from 'framer-motion';
import { Lock, Zap, Network } from 'lucide-react';

const values = [
  {
    icon: Lock,
    title: "Trust",
    points: [
      "Guaranteed Privacy",
     "Personal Data Protection",
     "Strict Ethical Standards",
     "Confidential Handling"
    ],
    seoKeywords: ["legal confidentiality", "professional ethics", "client privacy", "data protection"]
  },
  {
    icon: Zap,
    title: "Responsiveness",
    points: [
      "24-Hour Business Response",
      "Continuous Case Tracking",
      "Real-Time Updates",
      "Maximum Availability"
    ],
    seoKeywords: ["legal responsiveness", "client communication", "quick legal support", "proactive legal services"]
  },
  {
    icon: Network,
    title: "Collaboration",
    points: [
      "Network of Qualified Experts",
      "Trusted Professional Partners",
      "Customized Legal Solutions",
      "Comprehensive Support"
    ],
    seoKeywords: ["international legal network", "personalized legal services", "expert legal collaboration", "comprehensive legal support"]
  }
 ];

export default function Values() {
  return (
    <section id="valeurs" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900">Our valeurs</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gray-50 p-8 rounded-xl"
            >
              <value.icon className="w-12 h-12 text-primary mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">{value.title}</h3>
              <ul className="space-y-3">
                {value.points.map((point) => (
                  <li key={point} className="flex items-center text-gray-600">
                    <span className="text-primary mr-2">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}