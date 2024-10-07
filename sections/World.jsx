/* eslint-disable @next/next/no-img-element */
'use client';

import styles from "@/styles";
import { motion } from 'framer-motion'
import { staggerContainer, fadeIn } from "@/utils/motion";
import { TypingText, TitleText } from './../components';


const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >

      <TypingText title="| People on the World" textStyles="text-center" />
      <TitleText
        title={(
          <>Track friends around you and invite them to play together in the same
            world
          </>
        )}
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img src="/map.png" alt="map" className="w-full h-full object-cover" />
        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="people-01.png" alt="people" className="w-full h-full" />
        </div>


        <div className="absolute top-10 left-2/3 w-[180px] h-[140px] p-[6px] rounded-[24px] bg-[#5D6680] hidden sm:block">
          <div className="relative">
            <img src="/Mask Group.png" alt="people" className="w-full h-full" />
            <div className="absolute bottom-5 right-4 ">
              <div className="flex gap-2 items-center">
                <div className="flex -ml-0.5">
                  <img src="/Ellipse 42.png" className=" -ml-2" alt="avatar" />
                  <img src="/Ellipse 43.png" className=" -ml-2" alt="avatar" />
                  <img src="/Ellipse 44.png" className=" -ml-2" alt="avatar" />
                </div>
                <p className="text-white text-[12px]">+264 has joined</p>
              </div>
              <p className="text-white text-[18px]">Hawkins Labs</p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-20  left-36  w-[180px] h-[140px] p-[6px] rounded-[24px] bg-[#5D6680] hidden sm:block">
          <div className="relative">
            <img src="/Mask Group (1).png" alt="people" className="w-full h-full" />
            <div className="absolute bottom-5 right-2 ">
              <div className="flex gap-2 items-center">
                <div className="flex -ml-0.5">
                  <img src="/Ellipse 42.png" className=" -ml-2" alt="avatar" />
                  <img src="/Ellipse 43.png" className=" -ml-2" alt="avatar" />
                  <img src="/Ellipse 44.png" className=" -ml-2" alt="avatar" />
                </div>
                <p className="text-white text-[12px]">+264 has joined</p>
              </div>
              <p className="text-white text-[18px]">The Upside Down</p>
            </div>
          </div>
        </div>

        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="/people-03.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-52 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="people-02.png" alt="people" className="w-full h-full" />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;