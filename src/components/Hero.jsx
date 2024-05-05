import React from "react";
import { styles } from "../style";
import { motion } from "framer-motion";
import ComputerCanvas from "./canvas/Computers";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] flex gap-5 mx-auto items-start`}
      >
        <div className="flex flex-col items-center  mt-5">
          <div className="w-4 h-4 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Dnyaneshwar</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am MERN Stack Developer.
          </p>
        </div>
      </div>

      <ComputerCanvas />
      <div className="absolute xs:bottom-6 bottom-32 w-full flex justify-center items-center">
        <a href="/about">
          <div className="border-4 border-secondary h-[64px] w-[35px] rounded-3xl flex float-start justify-center p-2">
            <motion.dev
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
