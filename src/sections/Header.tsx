import React, { forwardRef, MouseEvent } from "react";
import Link from "next/link";
import { motion, useAnimate } from "framer-motion";
import MagneticFramer from "@/components/MagneticFramer";

type HeaderProps = React.HTMLAttributes<HTMLDivElement>;

const Header = forwardRef<HTMLDivElement, HeaderProps>((props, ref) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [topLineScope, topLineAnimate] = useAnimate();
  const [bottomLineScope, bottomLineAnimate] = useAnimate();
  const [navScope, navAnimate] = useAnimate();

  React.useEffect(() => {
    if (isOpen) {
      topLineAnimate([
        [topLineScope.current, { translateY: 4 }],
        [topLineScope.current, { rotate: 45 }],
      ]);
      bottomLineAnimate([
        [bottomLineScope.current, { translateY: -4 }],
        [bottomLineScope.current, { rotate: -45 }],
      ]);
      navAnimate(navScope.current, { height: "100%" }, { duration: 0.7 });
    } else {
      topLineAnimate([
        [topLineScope.current, { rotate: 0 }],
        [topLineScope.current, { translateY: 0 }],
      ]);
      bottomLineAnimate([
        [bottomLineScope.current, { rotate: 0 }],
        [bottomLineScope.current, { translateY: 0 }],
      ]);
      navAnimate(navScope.current, { height: 0 });
    }
  }, [
    isOpen,
    topLineAnimate,
    topLineScope,
    bottomLineAnimate,
    bottomLineScope,
    navScope,
    navAnimate,
  ]);

  const handleClickMobileNavItem = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsOpen(false);

    const url = new URL(e.currentTarget.href);
    const hash = url.hash;

    const target = document.querySelector(hash);

    if (!target) return;
    target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header>
      <div
        className="fixed top-0 left-0 w-full h-0 overflow-hidden bg-stone-900 z-10"
        ref={navScope}
      >
        <nav className="mt-20 flex flex-col z-10">
          {[
            { label: "About", href: "#intro" },
            { label: "Selected Works", href: "#projects" },
            { label: "Certificate", href: "#testimonials" },
            { label: "FAQs", href: "#faqs" },
            { label: "Contact", href: "#contact" },
          ].map(({ label, href }) => (
            <Link
              href={href}
              key={label}
              className="text-stone-200 border-t last:border-b border-stone-800 py-8 group/nav-item relative"
              onClick={handleClickMobileNavItem}
            >
              <div className="container flex justify-between items-center">
                <span className="text-3xl group-hover/nav-item:pl-4 transition-all duration-500">
                  {label}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </div>
              <div className="absolute w-full h-0 bg-stone-800 group-hover/nav-item:h-full transition-all duration-500 bottom-0 -z-10"></div>
            </Link>
          ))}
        </nav>
      </div>
      <div className="cursor-pointer fixed top-0 left-0 w-full mix-blend-difference backdrop-blur-md z-10">
        <div className="container !max-w-full">
          <MagneticFramer>
            <div className="flex justify-between items-center h-20">
              <a
                className="cursor-pointer text-xl font-bold uppercase text-white"
                href="#home"
              >
                Abdul&nbsp;Rosyid
              </a>
            </div>
          </MagneticFramer>
        </div>
      </div>
      <div className="fixed top-0 left-0 w-full z-30 mix-blend-difference">
        <div className="container !max-w-full">
          <div className="flex justify-end items-center h-20">
            <MagneticFramer>
              <div
                className="cursor-pointer inline-flex items-center justify-center"
                onClick={() => setIsOpen(!isOpen)}
              >
                <div className="bounds" ref={ref} {...props}></div>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.rect
                    x="3"
                    y="7"
                    width="20"
                    height="2.5"
                    fill="#A8A29E"
                    ref={topLineScope}
                    style={{ transformOrigin: "16px 8px" }}
                  />
                  <motion.rect
                    x="3"
                    y="15"
                    width="20"
                    height="2.5"
                    fill="#A8A29E"
                    ref={bottomLineScope}
                    style={{ transformOrigin: "12px 16px" }}
                  />
                </svg>
              </div>
            </MagneticFramer>
          </div>
        </div>
      </div>
    </header>
  );
});

Header.displayName = "Header";

export default Header;
