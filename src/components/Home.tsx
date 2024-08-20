import ActionButton from "../shared/ActionButton";
import { SelectedPage } from "../shared/types";
import { motion } from "framer-motion";

type Props = { setSelectedPage: (value: SelectedPage) => void };

const textVariant = "text-2xl font-semibold text-textAction";

const Home = ({ setSelectedPage }: Props) => {
  return (
    <section id="home" className=" md:py-40">
      <motion.div
        className="container max-w-screen-xl p-10 mx-auto"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h1 className="p-8 text-4xl font-medium leading-none text-text2 md:text-7xl">
            Front-end Developer
          </h1>

          <h2 className="p-8 text-2xl font-medium text-text1 md:text-4xl">
            Gregory Harris
          </h2>

          <p className="mb-16 font-normal text-text2 text-md md:text-xl">
            A passionate front-end developer, with focus on{" "}
            <span className={textVariant}>React</span> and{" "}
            <span className={textVariant}>Next.js</span>.
          </p>
          <ActionButton setSelectedPage={setSelectedPage}>Contact</ActionButton>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
