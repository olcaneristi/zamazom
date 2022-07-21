import { motion } from 'framer-motion';

const AnimatedPage = ({
  children,
  style,
  className,
  initialValue,
  animateValue,
  exitValue,
  transitionValue,
}) => {
  const animations = {
    initial: { opacity: 0, y: initialValue || 100 },
    animate: { opacity: 1, y: animateValue || 0 },
    exit: { opacity: 0, y: exitValue || 100 },
  };
  return (
    <motion.div
      style={style}
      className={className}
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: transitionValue || 0.6 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
