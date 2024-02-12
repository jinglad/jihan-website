import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";

const headetData = [
  {
    id: 1,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/jihan-chowdhury-7135411b4/",
  },
  {
    id: 2,
    name: "GitHub",
    url: "https://github.com/jinglad",
  },
  {
    id: 3,
    name: "Medium",
    url: "https://medium.com/@jihanchowdhury70",
  },
];

const Header = () => {
  return (
    <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center p-5">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="flex items-center"
      >
        {headetData.map((item) => (
          <SocialIcon
            key={item.id}
            url={item.url}
            fgColor="gray"
            bgColor="transparent"
            target="_blank"
          />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <Link href="#contact">
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400 cursor-pointer">
            Get In Touch
          </p>
        </Link>
      </motion.div>
    </header>
  );
};

export default Header;
