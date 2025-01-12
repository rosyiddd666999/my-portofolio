"use client";

import { FC, useEffect, useRef, MouseEvent } from "react";
import heroImage from "@/assets/images/hero-image.jpg";
import Image from "next/image";
import Button from "@/components/Button";
import { motion, useScroll, useTransform } from "framer-motion";
import useTextRevealAnimation from "@/components/useTextRevealAnimation";

const Hero: FC = () => {
  const scrollingDiv = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollingDiv,
    offset: ["start end", "end end"],
  });
  const portraitWidth = useTransform(scrollYProgress, [0, 1], ["100%", "240%"]);

  const { scope, entranceAnimation } = useTextRevealAnimation();
  useEffect(() => {
    entranceAnimation();
  }, [entranceAnimation]);

  const handleClickMobileNavItem = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const url = new URL(e.currentTarget.href);
    const hash = url.hash;

    const target = document.querySelector(hash);

    if (!target) return;
    target.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section id="home">
      <div className="grid md:grid-cols-12 md:h-screen items-stretch sticky top-0">
        <div className="md:col-span-7 flex flex-col justify-center">
          <div className="container !max-w-full">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-4xl mt-40 md:text-6xl md:mt-0 lg:text-7xl"
              ref={scope}
            >
              Crafting aplication experience through code and creative design
            </motion.h1>
            <div className="flex flex-col md:flex-row md:items-center mt-10 items-start gap-6">
              <motion.div
                initial={{ opacity: 0, y: "100%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.75 }}
              >
                <a href="#projects" onClick={handleClickMobileNavItem}>
                  <Button
                    variant="secondary"
                    iconAfter={
                      <div className="flex transition duration-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                          />
                        </svg>
                      </div>
                    }
                  >
                    <span>View My Work</span>
                  </Button>
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: "100%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 2.2 }}
              >
                <a href="#intro" onClick={handleClickMobileNavItem}>
                  <Button variant="text">About me</Button>
                </a>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="md:col-span-5 relative z-10">
          <motion.div
            className="mt-20 md:mt-0 md:size-full md:absolute md:right-0 max-md:!w-full "
            style={{ width: portraitWidth }}
          >
            <Image
              src={heroImage}
              alt="my-portrait"
              className="size-full object-cover"
            />
          </motion.div>
        </div>
      </div>
      <div className="h-[120vh]" ref={scrollingDiv}></div>
    </section>
  );
};

export default Hero;
