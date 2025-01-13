"use client";

import { FC, useEffect, MouseEvent } from "react";
import Button from "@/components/Button";
import useTextRevealAnimation from "@/components/useTextRevealAnimation";
import { motion, useInView } from "framer-motion";

const navItems = [
  {
    href: "#home",
    label: "Home",
  },
  {
    href: "#projects",
    label: "Project",
  },
  {
    href: "#testimonials",
    label: "Certificate",
  },
  {
    href: "#faqs",
    label: "Faqs",
  },
  {
    href: "#contact",
    label: "Contact",
  },
];

const Footer: FC = () => {
  const { scope, entranceAnimation } = useTextRevealAnimation();
  const inView = useInView(scope);

  useEffect(() => {
    if (inView) {
      entranceAnimation();
    }
  }, [inView, entranceAnimation]);

  const handleClickMobileNavItem = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const url = new URL(e.currentTarget.href);
    const hash = url.hash;

    const target = document.querySelector(hash);

    if (!target) return;
    target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-footerBgColor text-white" id="contact">
      <div className="container !max-w-full">
        <div className="section">
          <div className="flex items-center gap-3">
            <div className="rounded-full size-3 md:size-4 bg-green-400 animate-pulse"></div>
            <span className="uppercase text-sm md:text-base">
              One sport available for next month
            </span>
          </div>
          <div className="grid md:grid-cols-6 md:items-center">
            <div className="md:col-span-4">
              <h2
                className="text-4xl mt-8 md:text-7xl lg:text-8xl font-extralight"
                ref={scope}
              >
                Enough talk. Let&apos;s make something great together.
              </h2>
              <motion.div
                initial={{ opacity: 0, y: "100%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.75 }}
              >
                <div className="flex flex-col gap-4">
                  <a href="mailto:abdulrosyid696969@gmail.com">
                    <Button
                      variant="secondary"
                      className="mt-8 w-min"
                      iconAfter={
                        <div className="w-12 h-6 flex transition duration-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="#FFFFFF"
                            className="size-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                            />
                          </svg>
                        </div>
                      }
                    >
                      <span className="lowercase text-white">
                        abdulrosyid696969@gmail.com
                      </span>
                    </Button>
                  </a>
                  <a href="https://instagram.com/a.rosyiddd_">
                    <Button variant="text" className="w-min lowercase">
                      a.rosyiddd_
                    </Button>
                  </a>
                  <a
                    href="https://wa.me/6282245603502"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="text" className="w-min">
                      +6282245603502
                    </Button>
                  </a>
                </div>
              </motion.div>
            </div>
            <div className="md:col-span-2">
              <nav className="flex flex-col gap-8 mt-16 md:items-end md:mt-0">
                {navItems.map(({ href, label }) => (
                  <a href={href} key={label} onClick={handleClickMobileNavItem}>
                    <Button variant="text" className="text-lg">
                      {label}
                    </Button>
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
        <p className="pb-8 text-white/30 text-sm">
          Copyright &copy; Abdul Rosyid &bull; All Rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
