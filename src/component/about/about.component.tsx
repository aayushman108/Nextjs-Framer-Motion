"use client";

import { useState } from "react";
import styles from "./about.module.scss";
import { Loader } from "./loader/loader.component";
import { AnimatePresence, motion } from "framer-motion";

export function About() {
  const [loading, setLoading] = useState(true);

  return (
    <AnimatePresence>
      {loading ? (
        <motion.div key="about-loader">
          <Loader setLoading={setLoading} />
        </motion.div>
      ) : (
        <div className={styles.about}>Welcome to about page</div>
      )}
    </AnimatePresence>
  );
}
