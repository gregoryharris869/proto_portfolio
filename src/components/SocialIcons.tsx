import { FaGithub } from "react-icons/fa6";
import { GrDocumentPdf } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa6";
import { HiDownload } from "react-icons/hi";

export default function SocialIcons() {
  const socialCss =
    "bg-surface3 p-4 text-surface1 flex items-center gap-2 text-[2.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-textAction active:scale-105 transition cursor-pointer borderBlack";
  return (
    <div className="container max-w-[50rem] mx-auto p-6">
      <div className="flex justify-around ">
        <a
          className={socialCss}
          href="https://github.com/gregoryharris"
          target="_blank"
        >
          <FaGithub />
        </a>
        <a
          className="flex items-center gap-2 py-3 font-medium transition duration-500 ease-linear rounded-md text-md px-7 md:px-9 md:py-4 md:font-semibold bg-surface3 text-surface1 hover:bg-text1 hover:text-textAction"
          href="/CV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className=" opacity=60 group-hover:translate-y-2 transition " />
        </a>
        <a className={socialCss} href="https://linkedin.com" target="_blank">
          <FaLinkedinIn />
        </a>
      </div>
    </div>
  );
}
