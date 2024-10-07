"use client"

import styles from "@/styles";
import { staggerContainer, fadeIn, planetVariants } from "@/utils/motion";
import { motion } from 'framer-motion'
import { TypingText, TitleText, NewFeatures } from './../components';
import { newFeatures } from "@/constants";


const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`} id="explore">
    <motion.div variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={` ${styles.innerWidth} mx-auto flex flex-col lg:flex-row gap-8`}
    >

      <motion.div variants={fadeIn('right', 'tween', 0.2, 1)}
        className={` flex-[0.75] flex justify-center flex-col`}
      >
        <TypingText title="| What's new?" />
        <TitleText title={<>What&apos;s new about Metaverses?</>} />
        <div className="mt-[48px] flex flex-wrap justify-between gap-24">
          {newFeatures.map((feat) => (
            <NewFeatures key={feat.title} {...feat} />
          ))}
        </div>
      </motion.div>



      <motion.div variants={planetVariants('right')}
        className={` ${styles.flexCenter} flex-1`}
      >
        <img src="/whats-new.png" alt="alt started" className="w-[90%] h-[90%] object-contain" />
      </motion.div>

    </motion.div>

  </section>
);

export default WhatsNew;
