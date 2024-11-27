"use client";

import React, { Dispatch, SetStateAction, useEffect } from "react";
import { easeIn, easeInOut, motion } from "framer-motion";
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
      ease: easeIn,
      duration: 0.8,
    },
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: { ease: easeInOut, duration: 0.4 },
  },
};

const mainImageVariants = {
  initial: {
    opacity: 0,
    y: 200,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      ease: easeInOut,
      duration: 0.8,
    },
  },
  exit: {
    transition: { ease: easeInOut, duration: 2 },
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
      <motion.figure
        className={`${styles.transition_img}`}
        variants={mainImageVariants}
        layoutId="about-main-img"
      >
        <Image src={ABOUT_IMAGES[0]?.image} alt="" fill />
      </motion.figure>
      {ABOUT_IMAGES.slice(1).map((item, index) => {
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
    </motion.div>
  );
}
