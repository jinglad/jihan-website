import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

const experienceData = [
  {
    id: 1,
    title: "Software Engineer",
    company: "Astha IT",
    date: "July 2022 - Present",
    description: `<ul class="list-disc space-y-0 ml-5 text-lg">
    <li  style="font-size:10pt;">
        <p class="m-0"><span style="font-size:10pt;">Frontend Software Engineer</span></p>
    </li>
    <li style="list-style-type:disc;font-size:10pt;">
        <p class="m-0"><span style="font-size:10pt;">Specialization in creating intuitive and responsive user interfaces</span></p>
    </li>
    <li style="list-style-type:disc;font-size:10pt;">
        <p class="m-0"><span style="font-size:10pt;">Expertise in utilizing cutting-edge technologies</span></p>
    </li>
    <li style="list-style-type:disc;font-size:10pt;">
        <p class="m-0"><span style="font-size:10pt;">Responsibilities include:</span></p>
        <ul class="ml-5">
            <li style="list-style-type:circle;font-size:10pt;">
                <p class="m-0"><span style="font-size:10pt;">&nbsp; Translating design concepts into functional web applications</span></p>
            </li>
            <li style="list-style-type:circle;font-size:10pt;">
                <p class="m-0"><span style="font-size:10pt;">&nbsp; Ensuring user-friendliness and enhancing the overall user experience</span></p>
            </li>
        </ul>
    </li>
</ul>`,
    image:
      "https://res.cloudinary.com/asthait/images/c_scale,w_150,h_39,dpr_2/f_auto,q_auto/v1652333650/logo-astha/logo-astha.png?_i=AA",
  },
  {
    id: 2,
    title: "Frontend Software Engineer",
    company: "Inverse.AI",
    date: "Octber 2021 - April 2022",
    description: `<ul class="list-disc space-y-0 ml-5 text-lg">
            <li style="list-style-type:disc;font-size:10pt;">
                <p class="m-0"><span style="font-size:10pt;">Contributed to the success of InverseAI, a leading software company in Bangladesh known for its rapid growth and innovation.</span></p>
            </li>
            <li style="list-style-type:disc;font-size:10pt;">
                <p class="m-0"><span style="font-size:10pt;">Collaborated with a dynamic team to deliver cutting-edge software solutions.</span></p>
            </li>
</ul>`,
    image: "https://inverseai.com/images/logo.png",
  },
  {
    id: 3,
    title: "Wordpress & React Developer",
    company: "Urbanstop",
    date: "December 2020 - March 2021",
    description: `<ul class="list-disc space-y-0 ml-5 text-lg">
    <li style="list-style-type:disc;font-size:10pt;">
        <p class="m-0"><span style="font-size:10pt;">Successfully maintained and optimized a WordPress website, ensuring it remained responsive, fast, and secure.</span></p>
    </li>
    <li style="list-style-type:disc;font-size:10pt;">
        <p class="m-0"><span style="font-size:10pt;">Developed custom REST APIs using WordPress REST API, enhancing the site&apos;s functionality and enabling dynamic content retrieval.</span></p>
    </li>
    <li style="list-style-type:disc;font-size:10pt;">
        <p class="m-0"><span style="font-size:10pt;">Integrated these APIs into the React.js frontend, enabling dynamic data rendering and ensuring a smooth user experience.</span></p>
    </li>
</ul>`,
    image: "",
  },
];

const Experience = () => {
  return (
    <motion.div className="h-screen relative max-w-full mx-auto px-10 items-center justify-evenly flex overflow-hidden flex-col text-left md:flex-row ">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>
      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-primary/80 mt-10">
        {experienceData.map((item) => (
          <ExperienceCard key={item.id} data={item} />
        ))}
        {/* <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard /> */}
      </div>
    </motion.div>
  );
};

export default Experience;
