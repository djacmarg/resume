"use client";
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation, easeIn } from "framer-motion";

const Reveal = ({ children }) => {
  const aref = useRef(null);
  const isInView = useInView(aref, { once: false });
  const animControls = useAnimation();
  const slideControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      animControls.start("visible");
      slideControls.start("visible");
    }
  }, [animControls, slideControls, isInView]);
  return (
    <div ref={aref} style={{ position: "relative", overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={animControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: easeIn }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: "var(--animate-cover)",
          zIndex: 20,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
