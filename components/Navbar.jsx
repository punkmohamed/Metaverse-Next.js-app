'use client';
import styles from "@/styles";
import { navVariants } from "@/utils/motion";
import { motion } from 'framer-motion'
const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className=" absolute w-[50%] inset-0 gradient-01" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <img src="/search.svg" alt="search" className="w-[24px] h-[24px] object-contain" />
      <h2 className="font-extrabold text-[24px] text-white leading-[30px] uppercase">metaversus</h2>
      <img src="/menu.svg" alt="menu" className="size-[24px] object-contain" />
    </div>
  </motion.nav>
);

export default Navbar;
