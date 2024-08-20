import React from "react";
import Project from "./Project";

import { projectsData } from "../lib/data";
import { SelectedPage } from "../shared/types";
import { motion } from "framer-motion";

type Props = { setSelectedPage: (value: SelectedPage) => void };

const surface5 = "bg-gradient-to-t from-slate-600 to-cyan-700";

const Projects = ({ setSelectedPage }: Props) => {
  return (
    <section id="projects" className="py-10 md:py-20 ">
      <motion.div
        className={`${surface5} container  max-w-[50rem] p-6 mx-auto  rounded-lg `}
        onViewportEnter={() => setSelectedPage(SelectedPage.Projects)}
      >
        <div className="flex flex-col justify-between lg:flex-row ">
          <div className="mb-10 lg:mb-0">
            <h1 className="pr-4 mb-5 text-2xl font-medium text-textAction2 md:text-4xl">
              Projects
              
            </h1>
          </div>

          <div className="space-y-24">
            <div className="flex space-x-6">
              <div>
                {projectsData.map((project, index) => (
                  <React.Fragment key={index}>
                    <Project {...project} />
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
