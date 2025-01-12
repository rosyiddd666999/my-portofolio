import { stagger, useAnimate } from "framer-motion";
import { useEffect } from "react";
import SplitType from "split-type";

const useTextRevealAnimation = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (scope.current) {
      new SplitType(scope.current, {
        types: "lines,words",
        tagName: "span",
      });
    }
  }, [scope]);

  const entranceAnimation = () => {
    if (scope.current) {
      const words = scope.current.querySelectorAll(".word");
      if (words.length > 0) {
        return animate(
          words,
          { transform: "translateY(0)" },
          { duration: 0.5, delay: stagger(0.12) }
        );
      }
    }
  };

  const exitAnimation = () => {
    if (scope.current) {
      const words = scope.current.querySelectorAll(".word");
      if (words.length > 0) {
        return animate(
          words,
          { transform: "translateY(100%)" },
          {
            duration: 0.2,
            delay: stagger(-0.025, {
              startDelay: words.length * 0.025,
            }),
          }
        );
      }
    }
  };

  return { scope, entranceAnimation, exitAnimation };
};

export default useTextRevealAnimation;
