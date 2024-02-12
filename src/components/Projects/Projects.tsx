import { motion } from "framer-motion";

const projectData = [
  {
    id: 1,
    name: "Apex",
    description: `In my role, I had the privilege of being part of a team that transformed the online shopping experience for Apex, 
    a  well-known footwear company. My responsibilities covered several crucial aspects:`,
    list: [
      {
        id: 1,
        text: `I had the enjoyable task of designing and building user interfaces for different parts of the website, including captivating homepage sliders and easy-to-navigate footers. My goal was to make sure the website not only looked great but was also effortless to use.`,
      },
      {
        id: 2,
        text: `I took charge of important e-commerce features like processing orders, ensuring secure payment methods, and making it simple for users to log in with their social media accounts. This meant customers could shop with confidence and convenience.`,
      },
      {
        id: 3,
        text: `Behind the scenes, I worked on improving the admin panel. This made it easier for the Apex team to manage the website efficiently, ensuring that everything ran smoothly.`,
      },
    ],
    image: "/Apex-mockup.jpg",
  },
  {
    id: 2,
    name: "RLDataCoach",
    description: `Worked on RLDataCoach, a platform that allows users to track their Rocket League game statistics and receive personalized training based on their performance. In my role, I had the exciting task of designing and building interfaces for both regular users and administrators. These interfaces weren't just about looks, they were about providing valuable features, including:`,
    list: [
      {
        id: 1,
        text: `I added dynamic stats that gave users real-time information, making their experience more engaging and informative. These stats helped users understand their interactions with the platform better.`,
      },
      {
        id: 2,
        text: `I worked on improving the login experience, making it more secure and user friendly. This meant that users could easily access their accounts while knowing their information was well-protected.`,
      },
      {
        id: 3,
        text: `I've been fortunate to work on nearly every aspect of this project, including essential features like generating reports, facilitating multiple file uploads, and much more. My goal has been to ensure that all aspects of the project are not only functional but also user-friendly and efficient.`,
      },
    ],
    image: "/datacoach-mockup.jpg",
  },
  {
    id: 3,
    name: "One Quality Solutions",
    description: `One Quality Solutions is a specialized platform catering to pharmaceutical companies and individuals. This platform offers a variety of digital documents, books, and provides both online/offline training along with seminars. These interfaces weren't just about looks, they were about providing valuable features, including:`,
    list: [
      {
        id: 1,
        text: "Secure user authentication to ensure data integrity and privacy.",
      },
      {
        id: 2,
        text: "Services, products, books, and training sections for a comprehensive user experience.",
      },
      {
        id: 3,
        text: "User-friendly filters based on categories to streamline content discovery.",
      },
      {
        id: 4,
        text: "A well-maintained admin panel empowering administrators to manage the platform efficiently.",
      },
      {
        id: 5,
        text: "Seamless integration of an online payment system for user convenience.",
      },
      {
        id: 6,
        text: "Utilizing the MERN stack (MongoDB, Express.js, React.js, Node.js), alongside Material-UI, React-Query, and Redux for a cohesive and responsive platform.",
      },
    ],
    image: "/qs-mockup.jpg",
  },
];

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Latest Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-primary/80">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.img
              initial={{ opacity: 0, y: -300 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              src={project.image}
              className="w-96 rounded-lg object-contain md:w-[500px]"
              alt={project.name}
            />

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#f7ab0a]/50">
                  Case Study {index + 1} of {projectData.length}:
                </span>{" "}
                {project.name}
              </h4>
              <p className="text-lg text-center md:text-left m-0">
                {project.description}
              </p>
              <ul className="list-disc space-y-2 ml-5 text-lg md:text-left">
                {project.list.map((item) => (
                  <li key={item.id}>{item.text}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
};

export default Projects;
