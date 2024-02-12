import { motion } from "framer-motion";

type SkillProps = {
  directionLeft?: boolean;
  data: {
    id: number;
    name: string;
    proficiency: string;
  };
};

const Skill = ({ directionLeft, data }: SkillProps) => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.div
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        className="rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
      >
        <h1 className="flex items-center justify-center h-full text-lg text-primary">
          {data?.name}
        </h1>
      </motion.div>
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">
            {data?.proficiency}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
