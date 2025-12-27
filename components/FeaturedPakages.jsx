'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

/* ================= ANIMATION CONFIG ================= */

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 70,
    rotateX: 10,
    scale: 0.94,
  },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 20,
      mass: 0.9,
    },
  },
  exit: {
    opacity: 0,
    y: -50,
    rotateX: -6,
    scale: 0.92,
    transition: {
      duration: 0.45,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

/* ================= PACKAGE CARD ================= */

function PackageCard({
  title,
  description,
  duration,
  price,
  imageSrc,
  imageAlt,
  link,
}) {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="show"
      exit="exit"
      viewport={{ once: false, margin: '-120px' }}
      style={{ perspective: 1200 }}
      whileHover={{
        y: -10,
        rotateX: -2,
        scale: 1.025,
        transition: { duration: 0.35, ease: 'easeOut' },
      }}
      className="group relative overflow-hidden rounded-2xl bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/10 shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col h-full will-change-transform"
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className="p-7 flex flex-col flex-1">
        <h3 className="text-2xl font-semibold text-white mb-3">
          {title}
        </h3>

        <p className="text-white/80 mb-6 flex-1 leading-relaxed">
          {description}
        </p>

        <div className="flex justify-between items-center mb-6">
          <span className="text-sm text-white/70">{duration}</span>
          <span className="text-2xl font-bold text-[var(--color-accent-500)]">
            {price}
          </span>
        </div>

        <Link
          href={link}
          className="btn-primary w-full py-4 text-center text-lg font-semibold rounded-xl mt-auto"
        >
          View Details
        </Link>
      </div>
    </motion.div>
  );
}

/* ================= MAIN COMPONENT ================= */

export default function FeaturedPackages() {
  const packages = [
    {
      title: 'Evening Desert Safari',
      description:
        'Dune bashing, camel ride, sandboarding, BBQ dinner & entertainment under the stars.',
      duration: '6–7 hours',
      price: 'AED 250',
      imageSrc: '/images/packages/3.jpg',
      imageAlt: 'Luxury Evening Desert Safari Dubai at sunset',
      link: '/packages/evening-desert-safari',
    },
    {
      title: 'Overnight Desert Safari',
      description:
        'Evening activities + luxury glamping, stargazing, sunrise breakfast.',
      duration: 'Overnight',
      price: 'AED 799',
      imageSrc: '/images/packages/3.jpg',
      imageAlt: 'Luxury overnight desert camping tent Dubai',
      link: '/packages/overnight-desert-safari',
    },
    {
      title: 'Dubai City Highlights',
      description:
        'Burj Khalifa, Dubai Mall, Palm Jumeirah, Old Dubai & modern skyline.',
      duration: 'Full Day',
      price: 'AED 350',
      imageSrc: '/images/packages/1.jpg',
      imageAlt: 'Dubai city tour with Burj Khalifa skyline',
      link: '/packages/dubai-city-highlights',
    },
    {
      title: 'Marina Yacht Cruise',
      description:
        'Sunset cruise past Palm Jumeirah, Burj Al Arab & Atlantis with dinner.',
      duration: '3–4 hours',
      price: 'AED 600',
      imageSrc: '/images/packages/2.jpg',
      imageAlt: 'Luxury yacht cruise Dubai Marina sunset',
      link: '/packages/marina-yacht-cruise',
    },
    {
      title: 'Abu Dhabi Explorer',
      description:
        'Sheikh Zayed Grand Mosque, Louvre Abu Dhabi & cultural highlights.',
      duration: 'Full Day',
      price: 'AED 450',
      imageSrc: '/images/packages/3.jpg',
      imageAlt: 'Sheikh Zayed Grand Mosque Abu Dhabi',
      link: '/packages/abu-dhabi-explorer',
    },
    {
      title: '4-Day Ultimate Dubai',
      description:
        'Best of city, desert safari, yacht cruise & more in one unforgettable package.',
      duration: '4 Days',
      price: 'AED 2,999',
      imageSrc: '/images/packages/4.jpg',
      imageAlt: 'Multi-day luxury Dubai tour',
      link: '/packages/4-day-ultimate-dubai',
    },
  ];

  return (
    <motion.section
      id="packages"
      className="py-20 lg:py-28 bg-gradient-to-br from-[var(--color-primary-900)] via-[var(--color-primary-700)] to-[var(--color-accent-900)]/30"
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, margin: '-120px' }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.div
          variants={cardVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Most Popular Dubai Packages
          </h2>
          <p className="text-lg text-white/80 max-w-4xl mx-auto">
            Handpicked adventures that showcase the very best of Dubai.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {packages.map((pkg) => (
            <PackageCard key={pkg.title} {...pkg} />
          ))}
        </motion.div>

        {/* Button */}
        <motion.div
          variants={cardVariants}
          className="text-center mt-16"
        >
          <Link
            href="/packages"
            className="btn-outline text-lg px-12 py-5 font-semibold rounded-xl inline-block border-2 text-white"
          >
            Explore All Packages
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
