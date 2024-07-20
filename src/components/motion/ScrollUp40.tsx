import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { ReactNode } from "react";
import { useEffect, useRef } from "react";

interface ScrollUp40Props {
  children: ReactNode;
}

export default function ScrollUp40({ children }: ScrollUp40Props) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {}, [isInView]);
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.1 }}
      ref={ref}
    >
      {children}
    </motion.div>
  );
}
