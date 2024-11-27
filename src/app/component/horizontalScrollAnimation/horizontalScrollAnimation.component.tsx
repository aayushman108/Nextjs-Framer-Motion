"use client";

import { useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useMemo, useRef } from "react";
import { motion } from "framer-motion";
import { IMAGES } from "./constant";
import styles from "./horizontalScrollAnimation.module.scss";

export function HorizontalScrollAnimation() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef });

  const percentageHorizontalScroll = useMemo(() => {
    return (100 * 100) / (35 * IMAGES?.length) - 100;
  }, []);

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `${percentageHorizontalScroll}%`]
  );
  return (
    <div className={styles.horizontal_scroll_animation} ref={sectionRef}>
      <div className={styles.horizontal_scroll_animation__main}>
        <motion.div style={{ x }}>
          <ul className={styles.image_list}>
            {IMAGES.map((item, index) => {
              return (
                <li className={styles.image_list__item} key={index}>
                  <figure>
                    <Image src={item.image} alt="" fill />
                  </figure>
                </li>
              );
            })}
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
