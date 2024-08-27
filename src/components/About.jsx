import aboutImg from "../assets/about.jpeg"; // Corrected import statement
import { motion } from "framer-motion"
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
      The Person Behind the 
        <span className="text-neutral-500"> Passion  </span>
        <Navbar />
      </h1>
      <div className="flex flex-wrap">
        <motion.div 
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity: 0, x: -100}}
        transition={{duration: 0.5}}
        className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center ">
          <img className="mb-6 rounded" src={aboutImg} alt="about" style={{ width: '60%', height: 'auto' }} />

          </div>
        </motion.div>
        <motion.div 
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity: 0, x: 100}}
        transition={{duration: 0.5}}
        
        className="w-full lg:w-1/2 lg:p-8">
        <div className="flex justify-center lg:justify-start justify-center">
          <p className="flex items-center justify-center">I am a versatile Software Engineer with expertise in Java, PHP, Python, JavaScript, and React.js. My passion lies in crafting robust and scalable solutions that cater to diverse needs, from backend development to dynamic front-end interfaces. 
            <br></br>
            <br></br>
            With a strong foundation in these technologies, I am committed to delivering high-quality software that is both efficient and user-friendly.<br></br><br></br>

            My journey in software development has been driven by a relentless curiosity and a desire to solve complex problems. I thrive on the challenges that come with building innovative applications and systems, always aiming to leverage the latest technologies to create impactful solutions.
          </p>
        </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
