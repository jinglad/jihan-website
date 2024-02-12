import Header from "@/src/components/Header/Header";
import Hero from "@/src/components/Hero/Hero";
import Head from "next/head";
import { motion } from "framer-motion";
import About from "@/src/components/About/About";
import Experience from "@/src/components/Experience/Experience";
import Skills from "@/src/components/Skills/Skills";
import Projects from "@/src/components/Projects/Projects";
import Contact from "@/src/components/Contact/Contact";

export default function Home() {
  return (
    <motion.div className="h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-primary/80">
      <Head>
        <title>Jihan&apos;s Portfolio</title>
      </Head>
      <Header />
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
      <section id="experience" className="snap-center">
        <Experience />
      </section>
      <section id="skills" className="snap-start">
        <Skills />
      </section>
      <section id="projects" className="snap-start">
        <Projects />
      </section>
      <section id="contact" className="snap-start">
        <Contact />
      </section>
    </motion.div>
  );
}
