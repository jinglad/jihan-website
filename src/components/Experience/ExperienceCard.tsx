import { motion } from "framer-motion";

type ExperienceCardProps = {
  id: number;
  title: string;
  company: string;
  date: string;
  description: string;
  image: string;
};

const ExperienceCard = ({ data }: { data: ExperienceCardProps }) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <div className="px-0 md:px-10">
        <h1 className="text-center font-bold text-6xl text-gray-300">
          {data?.company}
        </h1>
        <h4 className="text-4xl font-light mt-10">{data?.title}</h4>
        {/* <p className="font-bold text-2xl mt-2">{data?.company}</p> */}
        <p>{data?.date}</p>

        <div
          className="mt-5"
          dangerouslySetInnerHTML={{
            __html: data?.description,
          }}
        ></div>
      </div>
    </article>
  );
};

export default ExperienceCard;
