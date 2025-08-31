"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

// The data should be passed as a prop, so it doesn't need to be defined here.
// However, the duplicated array for the carousel animation can be created
// inside the component or just before it if you don't want to pass it.
// We'll move the data outside for demonstration.
const carouselVariants = {
  animate: {
    x: ["0%", "-100%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 20,
        ease: "linear",
      },
    },
  },
};

function TechCarousel({ techStack }) {
  // Move the duplication logic here, as it's specific to this component's needs.
  // This ensures that the component works with whatever data it receives.
  const duplicatedTechStack = [...techStack, ...techStack , ...techStack , ...techStack , ...techStack];

  return (
    <div className="relative w-[1000px] overflow-hidden no-scrollbar">
      <motion.div
        className="flex"
        variants={carouselVariants}
        animate="animate"
      >
        {duplicatedTechStack.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 mx-4"
            style={{ width: '125px', height: '125px' }}
          >
            {item.link && (
              <Image
                src={item.link}
                alt={item.name}
                width={100}
                height={100}
                className="w-full h-full object-contain"
              />
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default TechCarousel;