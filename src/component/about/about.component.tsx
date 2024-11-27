"use client";

import { useState } from "react";
import styles from "./about.module.scss";
import { Loader } from "./loader/loader.component";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

export function About() {
  const [loading, setLoading] = useState(true);

  // const imageVariants = {
  //   animate: {
  //     y: 0,
  //     transition: {
  //       duration: 0.8,
  //       ease: easeInOut,
  //     },
  //   },
  // };

  return (
    <div className={styles.about_wrapper}>
      <AnimatePresence onExitComplete={() => {}}>
        {loading ? (
          <motion.div key="about-loader">
            <Loader setLoading={setLoading} />
          </motion.div>
        ) : (
          <div className={styles.about}>
            <div className={styles.about__hello}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              modi libero ducimus aliquid quos quo dignissimos, illum eum
              assumenda, quis iste. Quos, quisquam itaque. Ea quisquam, fugit
              odit accusantium dolor velit architecto? Soluta consequatur
              impedit et excepturi, sapiente harum tempore quasi quam quisquam
              dolore odio labore nihil quaerat corrupti. Veritatis itaque iusto
              maiores quidem sed quos, voluptas hic tempore laborum, soluta
              ducimus ab accusantium quis dolorem pariatur aliquid, consequuntur
              assumenda. Harum provident magni, voluptatibus laboriosam
              aspernatur iste, numquam accusantium sit omnis necessitatibus
              dicta, magnam neque sequi fugit expedita porro laudantium vero
              explicabo assumenda soluta. Minima repellat dolorum aut quidem
              qui.
            </div>
            <motion.figure
              className={`${styles.transition_img}`}
              // variants={imageVariants}
              // initial="initial"
              // animate="animate"
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
