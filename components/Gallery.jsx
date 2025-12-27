"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";

// ---------------- VARIANTS ----------------
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18, // ⬅️ thora slow stagger
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 55,
    scale: 0.95,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.75, // ⬅️ smoother
      ease: [0.22, 1, 0.36, 1], // ⬅️ premium easing
    },
  },
  exit: {
    opacity: 0,
    y: -40,
    scale: 0.92,
    transition: {
      duration: 0.55,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("all");
  const sectionRef = useRef(null);

  // 👇 Detect in/out of viewport
  const isInView = useInView(sectionRef, {
    margin: "-120px",
    amount: 0.2,
  });

  const items = [
    {
      category: "desert",
      src: "/images/gallery/1.jpg",
      alt: "Thrilling dune bashing in Dubai desert",
      title: "Dune Bashing Thrill",
    },
    {
      category: "desert",
      src: "/images/gallery/2.jpg",
      alt: "Luxury overnight desert camping under stars",
      title: "Starry Night Luxury Camp",
    },
    {
      category: "city",
      src: "/images/gallery/3.jpg",
      alt: "Iconic Burj Khalifa and Dubai skyline",
      title: "Burj Khalifa Views",
    },
    {
      category: "city",
      src: "/images/gallery/4.jpg",
      alt: "Dubai city skyline at sunset with Burj Khalifa",
      title: "Sunset City Skyline",
    },
    {
      category: "cruise",
      src: "/images/gallery/5.jpg",
      alt: "Luxury yacht cruise in Dubai Marina",
      title: "Marina Yacht Experience",
    },
    {
      category: "cruise",
      src: "/images/gallery/6.jpg",
      alt: "Sunset luxury yacht tour Dubai",
      title: "Golden Sunset Cruise",
    },
  ];

  const filteredItems =
    activeFilter === "all"
      ? items
      : items.filter((item) => item.category === activeFilter);

  return (
    <section
      ref={sectionRef}
      className="py-16 lg:py-24 bg-[var(--color-bg)] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.div
          animate={isInView ? "show" : "hidden"}
          variants={itemVariants}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            Iconic Dubai Tour Moments
          </h2>
          <p className="text-xl text-[var(--color-text-secondary)] max-w-4xl mx-auto">
            Filter by category to explore thrilling desert adventures, glittering
            city views, or luxurious cruises.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["all", "desert", "city", "cruise"].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-8 py-3 transition-all duration-300 ${
                activeFilter === filter ? "btn-primary" : "btn-outline"
              }`}
            >
              {filter === "all"
                ? "All"
                : filter === "desert"
                ? "Desert Adventures"
                : filter === "city"
                ? "City Highlights"
                : "Luxury Cruises"}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          variants={containerVariants}
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
                exit="exit"
                layout
                className="relative overflow-hidden rounded-2xl shadow-lg group will-change-transform"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={800}
                  height={600}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <p className="font-semibold text-xl text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {item.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
