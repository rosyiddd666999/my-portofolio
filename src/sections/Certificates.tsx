"use client";

import { FC, useRef, useState } from "react";
import {
  useScroll,
  motion,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import Certificate from "@/components/Certificate";
import { useRouter } from "next/navigation";
import Link from "next/link";
import certificates from "@/data/certificate";

const Certificates: FC = () => {
  const titleRef = useRef(null);
  const router = useRouter();
  const { scrollYProgress } = useScroll({
    target: titleRef,
    offset: ["start end", "end start"],
  });

  const transformTop = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const transformBottom = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  const [certificateIndex, setCertificateIndex] = useState(0);

  const handleClickPrev = () => {
    setCertificateIndex((curr) =>
      curr === 0 ? certificates.length - 1 : curr - 1
    );
  };

  const handleClickNext = () => {
    setCertificateIndex((curr) => (curr + 1) % certificates.length);
  };

  const handleCertificateClick = (id: number) => {
    router.push(`/certificate/${id}`);
  };
  return (
    <section id="certificates">
      <h2
        className="text-4xl md:text-7xl lg:text-8xl flex flex-col overflow-hidden tracking-tighter"
        ref={titleRef}
      >
        <motion.span className="whitespace-nowrap" style={{ x: transformTop }}>
          Certificate can be proof of my knowledge
        </motion.span>
        <motion.span
          className="whitespace-nowrap self-end text-buttonColor"
          style={{ x: transformBottom }}
        >
          Certificate can be proof of my knowledge
        </motion.span>
      </h2>
      <div className="container !max-w-full">
        <div className="mt-20">
          <AnimatePresence mode="wait" initial={false}>
            {certificates.map(
              ({ name, company, role, quote, image, href }, index) =>
                index === certificateIndex && (
                  <Link
                    href={href}
                    key={index}
                    onClick={() =>
                      handleCertificateClick(certificates[index].id)
                    }
                  >
                    <Certificate
                      name={name}
                      company={company}
                      role={role}
                      quote={quote}
                      image={image}
                      key={quote}
                    />
                  </Link>
                )
            )}
          </AnimatePresence>
        </div>
        <div className="flex gap-4 mt-6 lg:mt-10">
          <button
            className="border border-stone-400 size-11 inline-flex items-center justify-center rounded-full hover:bg-buttonColor hover:text-white hover:border-buttonColor transition-all duration-300"
            onClick={handleClickPrev}
          >
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
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
          </button>
          <button
            className="border border-stone-400 size-11 inline-flex items-center justify-center rounded-full hover:bg-buttonColor hover:text-white hover:border-buttonColor transition-all duration-300"
            onClick={handleClickNext}
          >
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
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
