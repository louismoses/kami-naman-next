import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollDown80Props {
  children: ReactNode;
}
export default function ScrollDown80({ children }: ScrollDown80Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}
