"use client";

import { FC, useState } from "react";
import { motion } from "framer-motion";
import useMousePosition from "@/components/useMousePosition";

const Intro: FC = () => {
  const { x, y } = useMousePosition();
  const [isHovered, setIsHovered] = useState(false);
  const size = isHovered ? 400 : 0;

  return (
    <section className="relative mt-16 items-center justify-center" id="intro">
      <motion.div
        className="mask"
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          maskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
          maskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "easeOut", duration: 0.3 }}
      >
        <h2
          className="py-12 md:py-24 lg:py-48 px-6 md:px-8 lg:px-16 xl:px-32 text-4xl md:text-7xl lg:text-8xl lg:w-[88%] absolute text-white z-10"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          My name's Abdul Rosyid, a computer science student in Indonesia.
          Specializing in front-end & design UI/UX.
        </h2>
      </motion.div>
      <h2 className="main-text relative py-12 md:py-24 lg:py-48 px-6 md:px-8 lg:px-16 xl:px-32 text-4xl md:text-7xl lg:text-8xl lg:w-[88%] text-stone-900 z-0">
        Building beautiful apps with clean code and thoughtful design to help
        your business grow and thrive digitally.
      </h2>
    </section>
  );
};

export default Intro;
