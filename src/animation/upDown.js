import { useEffect, useRef } from "react";
import { useAnimation, motion, useInView } from "framer-motion";
const UpDownAnimation = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);
  return (
    <div ref={ref} className="h-full">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: -150 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="h-full "
      >
        {children}{" "}
      </motion.div>
    </div>
  );
};

export default UpDownAnimation;
