import { useEffect, useRef, useState } from "react";
import {
  animate,
  motion,
  transform,
  useMotionValue,
  useSpring,
} from "framer-motion";

type StickyCursorProps = {
  stickyElement: React.RefObject<HTMLElement | null>;
};

export default function StickyCursor({ stickyElement }: StickyCursorProps) {
  const [isHovered, setIsHovered] = useState(false);
  const cursor = useRef<HTMLDivElement | null>(null);
  const cursorSize = isHovered ? 60 : 15;

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  const scale = {
    x: useMotionValue(1),
    y: useMotionValue(1),
  };

  const rotate = (distance: { x: number; y: number }) => {
    if (!cursor.current) return;
    const angle = Math.atan2(distance.y, distance.x);
    animate(cursor.current, { rotate: `${angle}rad` }, { duration: 0 });
  };

  const manageMouseMove = (e: MouseEvent) => {
    if (!stickyElement.current) return;

    const { clientX, clientY } = e;
    const { left, top, height, width } =
      stickyElement.current.getBoundingClientRect();

    const center = { x: left + width / 2, y: top + height / 2 };

    if (isHovered) {
      const distance = { x: clientX - center.x, y: clientY - center.y };

      rotate(distance);

      const absDistance = Math.max(Math.abs(distance.x), Math.abs(distance.y));
      const newScaleX = transform(absDistance, [0, height / 2], [1, 1.3]);
      const newScaleY = transform(absDistance, [0, width / 2], [1, 0.8]);

      scale.x.set(newScaleX);
      scale.y.set(newScaleY);

      mouse.x.set(center.x - cursorSize / 2 + distance.x * 0.1);
      mouse.y.set(center.y - cursorSize / 2 + distance.y * 0.1);
    } else {
      mouse.x.set(clientX - cursorSize / 2);
      mouse.y.set(clientY - cursorSize / 2);
    }
  };

  const manageMouseOver = () => {
    setIsHovered(true);
  };

  const manageMouseLeave = () => {
    setIsHovered(false);
    if (!cursor.current) return;
    animate(cursor.current, { scaleX: 1, scaleY: 1 }, { duration: 0.1 });
  };

  const template = ({
    rotate,
    scaleX,
    scaleY,
  }: {
    rotate: number;
    scaleX: number;
    scaleY: number;
  }) => {
    return `rotate(${rotate}) scaleX(${scaleX}) scaleY(${scaleY})`;
  };

  useEffect(() => {
    if (!stickyElement.current) return;

    const element = stickyElement.current;
    element.addEventListener("mouseenter", manageMouseOver);
    element.addEventListener("mouseleave", manageMouseLeave);
    window.addEventListener("mousemove", manageMouseMove);

    return () => {
      element.removeEventListener("mouseenter", manageMouseOver);
      element.removeEventListener("mouseleave", manageMouseLeave);
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, [isHovered, stickyElement]);

  return (
    <div className="">
      <motion.div
        ref={cursor}
        transformTemplate={template}
        style={{
          left: smoothMouse.x,
          top: smoothMouse.y,
          scaleX: scale.x,
          scaleY: scale.y,
        }}
        animate={{
          width: cursorSize,
          height: cursorSize,
        }}
        className="cursor"
      />
    </div>
  );
}
