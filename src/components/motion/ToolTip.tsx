import { useAnimate } from "framer-motion";
import { motion } from "framer-motion";
import Image from "next/image";
import { KidIllustration } from "@/app/their-stories/page";

const CaseLower = (str: string) => {
  return str.toLowerCase();
};

interface TooltipProps {
  kid: KidIllustration;
}

export default function Tooltip({ kid }: TooltipProps) {
  if (!kid) {
    return null;
  }
  const variant = kid.variant;

  const fadeInToLeft = {
    initial: { opacity: 0, x: 100 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7 },
    },
  };
  const fadeInToRight = {
    initial: { opacity: 0, x: -100 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7 },
    },
  };
  const fadeInToTop = {
    initial: { opacity: 0, y: 100 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 },
    },
  };
  const fadeInToBottom = {
    initial: { opacity: 0, y: -100 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 },
    },
  };

  return (
    <motion.div
      className="relative"
      initial="initial"
      animate="initial"
      whileHover="animate"
    >
      <motion.div
        //apply different animations based on variant
        variants={
          variant === "fadeInToLeft"
            ? fadeInToLeft
            : variant === "fadeInToRight"
            ? fadeInToRight
            : variant === "fadeInToTop"
            ? fadeInToTop
            : fadeInToBottom
        }
        className="tooltip-container absolute text-center bg-[#1C2C4F80] p-5 text-white text-[10px] rounded-3xl max-w-[300px] w-full z-10"
      >
        <h2 className="font-bold">{kid.name}</h2>
        <p className="italic">{kid.quote}</p>
      </motion.div>
      <Image
        id={CaseLower(kid.title)}
        key={kid.name}
        src={kid.path}
        width={217}
        height={355}
        alt={kid.title}
        unoptimized
        priority
      />
    </motion.div>
  );
}
