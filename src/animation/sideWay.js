import { useEffect, useRef } from "react";
import { useAnimation, motion, useInView } from "framer-motion";
const SideWayAnimation = ({ children, side ='LEFT' }) => {
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
          hidden: { opacity: 0, x: side === "LEFT" ? -150 : 150 },
          visible: { opacity: 1, x: 0 },
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

export default SideWayAnimation;
