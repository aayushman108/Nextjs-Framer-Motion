"use client";

import { useState } from "react";
import styles from "./about.module.scss";
import { Loader } from "./loader/loader.component";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { StaggerText } from "./staggerText/staggerText.component";

export function About() {
  const [loading, setLoading] = useState(true);

  return (
    <div className={styles.about_wrapper}>
      <AnimatePresence onExitComplete={() => {}}>
        {loading ? (
          <motion.div key="about-loader">
            <Loader setLoading={setLoading} />
          </motion.div>
        ) : (
          <div className={styles.about}>
            <div className={styles.about__text}>
              <StaggerText text="Aayushman" />
              <StaggerText text="Sharma" />
            </div>
            <motion.figure
              className={`${styles.about__img}`}
              layoutId="about-main-img"
            >
              <Image src="/images/about/decor_1.jpg" alt="" fill />
            </motion.figure>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
