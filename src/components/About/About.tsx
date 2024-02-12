import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 mx-auto justify-evenly items-center h-screen"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
        src="/jin.jpg"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#f7ab0a]/50">little</span>{" "}
          background
        </h4>
        <p className="text-sm xl:text-base text-justify">
          I&apos;m a seasoned Software Engineer with over 2 years of prowess in
          crafting sleek and user-friendly web applications. My expertise lies
          in the dynamic MERN stack, where I dance with technologies like React,
          Next.js, Redux, Node.js, Express.js, and MongoDB. Ive got a knack for
          turning complex business requirements into efficient and elegant
          solutions. My portfolio speaks volumes about projects where I&apos;ve
          seamlessly blended technology and creativity.Passionate about
          exploring cutting-edge solutions, I&apos;m always on the lookout for
          new challenges to conquer and technologies to master.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
