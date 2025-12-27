'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Is booking with Royal Challengers Travelers safe?",
      answer: "Yes, 100%. We are a fully licensed and insured Dubai travel agency with over 7 years of experience serving international clients. All payments are processed securely, and you receive instant confirmation plus 24/7 support throughout your trip.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit/debit cards (Visa, Mastercard, Amex), secure bank transfers, and cash on arrival for local clients. All international transactions are protected with SSL encryption.",
    },
    {
      question: "What is your cancellation and refund policy?",
      answer: "Free cancellation up to 48 hours before most tours/packages (full refund). Cancellations within 24–48 hours may incur a small fee depending on the experience. Rescheduling is usually free if done 48 hours in advance. Full policy is included in your booking confirmation.",
    },
    {
      question: "Do you offer private or customized tours?",
      answer: "Absolutely! We specialize in private, luxury, and fully customized experiences — from exclusive desert dinners to private yacht charters. Simply mention your preferences in the booking form or contact us directly.",
    },
    {
      question: "Do you provide hotel/airport transfers?",
      answer: "Yes, luxury airport transfers and hotel pick-up/drop-off are included in most packages and available as an add-on for tours. We use premium vehicles with professional, English-speaking drivers.",
    },
    {
      question: "What happens if weather affects my desert tour?",
      answer: "Your safety is our priority. If weather conditions (e.g., heavy rain or sandstorm) make the desert unsafe, we will either reschedule at no extra cost or offer a comparable city-based alternative experience. In rare cases, a full refund is provided.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.4 } },
  };

  return (
    <section className="py-16 lg:py-24 bg-[var(--color-bg)]">
      <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-[var(--color-text)] mb-5">
            Frequently Asked Questions
          </h2>
          <p className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto leading-relaxed">
            Quick answers to the most common questions from our international travelers
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: "-100px" }}
          variants={containerVariants}
          className="space-y-5"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`faq-item card overflow-hidden transition-all duration-500 ${
                openIndex === index
                  ? 'shadow-xl border border-primary-500'
                  : 'hover:shadow-lg border-[var(--color-border)]'
              }`}
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none group"
              >
                <span className="text-lg md:text-xl font-medium text-[var(--color-text)] group-hover:text-primary-500 transition-colors">
                  {faq.question}
                </span>
                <span
                  className={`text-2xl font-bold text-primary-500 transition-transform duration-500 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                >
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>

              {/* Answer Content with AnimatePresence */}
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="px-6 overflow-hidden py-6"
                  >
                    <p className="text-[var(--color-text-secondary)] leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Final Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mt-12 lg:mt-16"
        >
          <p className="text-lg text-[var(--color-text-secondary)] mb-6">
            Still have questions? We’re here to help.
          </p>
          <Link
            href="/contact"
            className="btn-outline inline-flex px-10 py-5 text-lg font-semibold"
          >
            Contact Us Now
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
