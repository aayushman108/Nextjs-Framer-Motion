"use client";

import { useState } from "react";
import styles from "./about.module.scss";
import { Loader } from "./loader/loader.component";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { StaggerText } from "./staggerText";

export function About() {
  const [loading, setLoading] = useState(true);

  return (
    <div className={styles.about_wrapper}>
      <AnimatePresence>
        {loading ? (
          <motion.div key="about-loader">
            <Loader setLoading={setLoading} />
          </motion.div>
        ) : (
          <div className={styles.about} key="about">
            <div className={styles.about__text}>
              <StaggerText text="Aayushman" />
              <StaggerText text="Sharma" />
            </div>
            <motion.figure
              className={`${styles.about__img}`}
              layoutId="about-main-img"
              transition={{
                duration: 0.8,
                ease: [0.42, 0, 0.58, 1],
              }}
            >
              <Image src="/images/about/decor_1.jpg" alt="" fill />
            </motion.figure>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
