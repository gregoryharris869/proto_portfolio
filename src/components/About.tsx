import { motion } from "framer-motion";
import { SelectedPage } from "../shared/types";

type Props = { setSelectedPage: (value: SelectedPage) => void };

const About = ({ setSelectedPage }: Props) => {
  const aboutVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const aboutTransition = { duration: 0.5 };

  return (
    <section id="about" className="py-10 md:py-40">
      <motion.div
        className="container max-w-[50rem] mx-auto p-6"
        onViewportEnter={() => setSelectedPage(SelectedPage.About)}
      >
        <motion.div
          className="mb-10 lg:mb-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={aboutTransition}
          variants={aboutVariants}
        >
          <h2 className="mb-5 text-2xl font-medium text-textAction2 md:text-4xl">
            About
          </h2>

          <p className="mb-3 text-justify hyphens-auto text-text1">
            As a frontend developer, I thrive on crafting elegant interfaces
            that captivate users. With a blend of aesthetics and functionality,
            I turn designs into seamless digital experiences, from structured
            HTML to dynamic CSS presentations. I relish staying at the forefront
            of emerging technologies, mastering new frameworks, and optimizing
            performance. Transforming ideas into interactive websites that are
            more user friendly.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;

