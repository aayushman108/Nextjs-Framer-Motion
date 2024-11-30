import { motion } from "framer-motion";
import styles from "./staggerText.module.scss";

const container = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.5,
      ease: "easeInOut",
    },
  },
};

const child = {
  initial: {
    y: 30,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: [0.47, 0, 0.745, 0.715],
    },
  },
};

interface IStaggerText {
  text: string;
}

export function StaggerText({ text }: IStaggerText) {
  return (
    <motion.p
      variants={container}
      initial="initial"
      animate="animate"
      className={styles.stagger_text}
    >
      {[...text].map((item, index) => {
        return (
          <motion.span key={index} variants={child}>
            {item}
          </motion.span>
        );
      })}
    </motion.p>
  );
}
