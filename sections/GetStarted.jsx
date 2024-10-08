'use client';
import styles from "@/styles";
import { staggerContainer, fadeIn, planetVariants } from "@/utils/motion";
import { motion } from 'framer-motion'
import { StartSteps, TypingText, TitleText } from './../components';
import { startingFeatures } from "@/constants";


const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`} id="explore">
    <motion.div variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={` ${styles.innerWidth} mx-auto flex flex-col lg:flex-row gap-8`}
    >
      <motion.div variants={planetVariants('left')}
        className={` ${styles.flexCenter} flex-1`}
      >
        <img src="/get-started.png" alt="alt started" className="w-[90%] h-[90%] object-contain" />
      </motion.div>
      <motion.div variants={fadeIn('left', 'tween', 0.2, 1)}
        className={` flex-[0.75] flex justify-center flex-col`}
      >
        <TypingText title="| How Metaversus Works" />
        <TitleText title={<>Get started with just a few clicks </>} />
        <div className="mt-[31px] flex flex-col max-w-[370px] gap-24">
          {startingFeatures.map((feat, index) => (
            <StartSteps key={feat} index={index} number={index + 1} text={feat} />
          ))}
        </div>

      </motion.div>



    </motion.div>

  </section>
);

export default GetStarted;
