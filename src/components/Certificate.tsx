import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { HTMLAttributes, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { usePresence, motion } from "framer-motion";
import useTextRevealAnimation from "./useTextRevealAnimation";

const Certificate = (
  props: {
    quote: string;
    name: string;
    role: string;
    image: string | StaticImport;
    company: string;
    imagePositionY: number;
    className?: string;
  } & HTMLAttributes<HTMLDivElement>
) => {
  const {
    quote,
    name,
    role,
    image,
    company,
    imagePositionY,
    className,
    ...rest
  } = props;

  const {
    scope: quoteScope,
    entranceAnimation: quoteEntranceAnimate,
    exitAnimation: quoteExitAnimate,
  } = useTextRevealAnimation();

  const {
    scope: citeScope,
    entranceAnimation: citeEntranceAnimate,
    exitAnimation: citeExitAnimate,
  } = useTextRevealAnimation();

  const [isPresent, safeToRemove] = usePresence();
  useEffect(() => {
    if (isPresent) {
      quoteEntranceAnimate()?.then(() => {
        citeEntranceAnimate();
      });
    } else {
      Promise.all([
        quoteExitAnimate(),
        citeExitAnimate()?.then(() => {
          //error
          safeToRemove();
        }),
      ]);
    }
  }, [
    isPresent,
    quoteEntranceAnimate,
    quoteExitAnimate,
    citeEntranceAnimate,
    citeExitAnimate,
    safeToRemove,
  ]);

  return (
    <div
      className={twMerge(
        "grid md:grid-cols-6 md:gap-8 lg:gap-16 md:items-center",
        className
      )}
      {...rest}
    >
      <div className="aspect-auto md:col-span-3 md:aspect-[16/11.2] relative">
        <motion.div
          className="absolute h-full bg-stone-900"
          initial={{ width: 0 }}
          exit={{ width: "100%" }}
          transition={{ duration: 0.5 }}
        ></motion.div>
        <Image src={image} alt={name} className="size-full object-cover" />
      </div>
      <blockquote className="md:col-span-3">
        <div
          className="text-xl lg:text-3xl xl:text-6xl mt-8 md:mt-0"
          ref={quoteScope}
        >
          <span>&ldquo;</span>
          {quote}
          <span>&rdquo;</span>
        </div>
        <cite
          className="mt-2 md:mt-4 lg:mt-8 xl:mt-12 not-italic block lg:text-xl xl:text-2xl"
          ref={citeScope}
        >
          {name}, {role} at {company}
        </cite>
      </blockquote>
    </div>
  );
};

export default Certificate;
