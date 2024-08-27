import { RiReactjsLine } from "react-icons/ri";
import { SiCsharp, SiFirebase } from "react-icons/si";
import { DiJavascript1 } from 'react-icons/di';
import { FaJava } from 'react-icons/fa';
import { DiNodejsSmall, DiPython } from "react-icons/di";
import { FaAndroid, FaMapMarkerAlt, FaDatabase } from "react-icons/fa";
import { AiOutlineApi } from "react-icons/ai";
import { animate, motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Tech Arsenal
      </motion.h1>
      <motion.div 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div 
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-300" /> {/* React */}
        </motion.div>
        <motion.div 
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl p-4"
        >
          <FaJava className="text-7xl text-red-600" /> {/* Java */}
        </motion.div>
        <motion.div 
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl p-4"
        >
          <DiJavascript1 className="text-7xl text-yellow-500" /> {/* JavaScript */}
        </motion.div>
        <motion.div 
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl p-4"
        >
          <DiPython className="text-7xl text-[#306998]" /> {/* Python */}
        </motion.div>
        <motion.div 
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl p-4"
        >
          <FaDatabase className="text-7xl text-teal-500" /> {/* Database */}
        </motion.div>
        <motion.div 
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl p-4"
        >
          <AiOutlineApi className="text-7xl text-purple-500" /> {/* API */}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
