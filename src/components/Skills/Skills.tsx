import { motion } from "framer-motion";
import Skill from "./Skill";

const skillsData = [
  {
    id: 1,
    name: "React",
    proficiency: "90%",
    directionLeft: true,
  },
  {
    id: 2,
    name: "Next.js",
    proficiency: "90%",
    directionLeft: true,
  },
  {
    id: 3,
    name: "JavaScript",
    proficiency: "90%",
    directionLeft: true,
  },
  {
    id: 4,
    name: "TypeScript",
    proficiency: "80%",
    directionLeft: true,
  },
  {
    id: 5,
    name: "Node.js",
    proficiency: "70%",
    directionLeft: true,
  },
  {
    id: 6,
    name: "Express.js",
    proficiency: "70%",
    directionLeft: true,
  },
  {
    id: 7,
    name: "MongoDB",
    proficiency: "70%",
    directionLeft: true,
  },
  {
    id: 8,
    name: "Redux",
    proficiency: "90%",
    directionLeft: true,
  },
  {
    id: 9,
    name: "TailwindCSS",
    proficiency: "90%",
    directionLeft: true,
  },
  {
    id: 10,
    name: "Sass",
    proficiency: "80%",
    directionLeft: true,
  },
  {
    id: 13,
    name: "RESTful APIs",
    proficiency: "90%",
    directionLeft: false,
  },
  {
    id: 14,
    name: "Git",
    proficiency: "90%",
    directionLeft: false,
  },
  {
    id: 15,
    name: "Material-UI",
    proficiency: "90%",
    directionLeft: false,
  },
  {
    id: 16,
    name: "Ant Design",
    proficiency: "90%",
    directionLeft: false,
  },
  {
    id: 18,
    name: "Bootstrap",
    proficiency: "90%",
    directionLeft: false,
  },
  {
    id: 20,
    name: "Chakra UI",
    proficiency: "90%",
    directionLeft: false,
  },
  {
    id: 21,
    name: "Zustand",
    proficiency: "70%",
    directionLeft: false,
  },
  {
    id: 22,
    name: "React Query",
    proficiency: "80%",
    directionLeft: false,
  },
];

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col relative text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center items-center mx-auto xl:space-y-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for current profieciency
      </h3>

      <div className="grid grid-cols-4 gap-5 absolute top-48">
        {skillsData.map((skill) => (
          <Skill
            key={skill.id}
            data={skill}
            directionLeft={skill.directionLeft}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
