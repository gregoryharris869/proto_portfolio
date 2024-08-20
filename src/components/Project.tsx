import { useRef } from "react";
import { projectsData } from "../lib/data";
import { motion } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

const Project = ({ title, description, tags, imageUrl }: ProjectProps) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <motion.div className="mb-3 group sm:mb-8 last:mb-0" ref={ref}>
      <section className="bg-surface4 max-w-[42rem] border border-surface1 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-text1 transition sm:group-even:pl-8">
        {/* content */}
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold text-surface1">{title}</h3>
          <p className="mt-2 leading-relaxed text-text3 ">{description}</p>
          <ul className="flex flex-wrap gap-2 mt-4 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-surface3/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-brandAccent rounded-full "
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        {/* image */}
        <img
          src={imageUrl}
          alt="Projects"
          className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
        transition
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2
        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2
        group-even:right-[initial] group-even:-left-40"
        />
      </section>
    </motion.div>
  );
};

export default Project;
