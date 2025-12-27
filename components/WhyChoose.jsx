'use client';

import { motion } from 'framer-motion';

/* ================= DATA ================= */

const features = [
  {
    title: "24/7 Support",
    desc: "Our team is available around the clock via phone, WhatsApp, or email – before, during, and after your tour.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    )
  },
  {
    title: "Safe Travel",
    desc: "Licensed vehicles, insured activities, experienced drivers, and strict safety protocols ensure your peace of mind.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
      </svg>
    )
  },
  {
    title: "Best Prices",
    desc: "Direct booking with no hidden fees – we guarantee competitive rates and excellent value for every tour.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    )
  },
  {
    title: "Experienced Guides",
    desc: "Our certified local experts ensure informative, safe, and personalized tours full of authentic insights.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
      </svg>
    )
  }
];

/* ================= ANIMATION VARIANTS ================= */

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 80,
    rotateX: 10,
    scale: 0.94,
  },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 22,
      mass: 0.9,
    },
  },
  exit: {
    opacity: 0,
    y: -60,
    rotateX: -8,
    scale: 0.92,
    transition: {
      duration: 0.45,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

/* ================= COMPONENT ================= */

export default function WhyChooseUs() {
  return (
    <motion.section
      className="relative py-24 min-h-screen flex items-center overflow-hidden"
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, margin: "-120px" }}
      variants={containerVariants}
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <img
          src="/why.jpg"
          alt="Luxury Desert Safari"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/30 to-transparent" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">

        {/* HEADER */}
        <motion.div
          variants={cardVariants}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            The Royal Challengers <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-200 to-white">
              Difference
            </span>
          </h2>
          <p className="text-lg text-gray-300">
            We don't just offer tours; we craft unforgettable experiences.
          </p>
        </motion.div>

        {/* CARDS */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          variants={containerVariants}
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{
                y: -10,
                rotateX: -3,
                scale: 1.03,
                transition: { duration: 0.35, ease: "easeOut" },
              }}
              style={{ perspective: 1200 }}
              className="group p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/15 transition-all duration-300 will-change-transform"
            >
              <div className="flex gap-6">
                <div className="w-16 h-16 rounded-full bg-primary-600/20 flex items-center justify-center text-primary-400 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                  {f.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {f.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </motion.section>
  );
}
