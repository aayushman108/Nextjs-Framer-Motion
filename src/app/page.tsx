"use client";

import { useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";

const IMAGES = [
  { id: 1, image: "/images/media_1.png" },
  { id: 2, image: "/images/media_2.png" },
  { id: 3, image: "/images/media_3.jpg" },
  { id: 4, image: "/images/media_4.png" },
  { id: 5, image: "/images/media_5.png" },
  { id: 6, image: "/images/media_6.jpg" },
  { id: 7, image: "/images/media_7.png" },
  { id: 8, image: "/images/media_8.png" },
  { id: 9, image: "/images/media_9.jpg" },
  { id: 10, image: "/images/media_10.png" },
];

export default function Home() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-71.43%"]);
  return (
    <main>
      <header>Header</header>
      <div className="main-wrapper" ref={sectionRef}>
        <div className="main">
          <motion.div style={{ x }}>
            <div className="image-container">
              {IMAGES.map((item, index) => {
                return (
                  <figure key={index}>
                    <Image src={item.image} alt="" fill />
                  </figure>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
      <footer>Footer</footer>
    </main>
  );
}
