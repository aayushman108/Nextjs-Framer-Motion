"use client";

import React, { Dispatch, SetStateAction, useEffect } from "react";
import { motion } from "framer-motion";
import { ABOUT_IMAGES } from "../constant";
import Image from "next/image";
import styles from "./loader.module.scss";

interface ILoaderProps {
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const containerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const imageVariants = {
  initial: {
    opacity: 0,
    y: 200,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeIn",
      duration: 0.4,
    },
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: { ease: "easeInOut", duration: 0.8 },
  },
};
export function Loader({ setLoading }: ILoaderProps) {
  useEffect(() => {
    if (0) {
      setLoading(false);
    }
  });
  return (
    <motion.div
      className={styles.loader}
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      onAnimationComplete={() => setLoading(false)}
    >
      {ABOUT_IMAGES.slice(0, -1).map((item, index) => {
        return (
          <motion.figure
            key={index}
            className={`${styles.loader__item} ${styles[`image-${index + 2}`]}`}
            variants={imageVariants}
          >
            <Image src={item.image} alt="" fill />
          </motion.figure>
        );
      })}
      <motion.figure
        className={`${styles.loader__item} ${styles[`image-1`]}`}
        variants={imageVariants}
      >
        <Image src={ABOUT_IMAGES.slice(-1)[0]?.image} alt="" fill />
      </motion.figure>
    </motion.div>
  );
}
