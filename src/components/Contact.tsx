import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { SelectedPage } from "../shared/types";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const surface5 = "bg-gradient-to-t from-slate-600 to-cyan-700";

function Contact({ setSelectedPage }: Props) {
  const inputStyles = `mb-5 w-full rounded-lg bg-text1
  px-5 py-3 placeholder-black`;

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    const isValid = await trigger();
    if (!isValid) return;
  };

  return (
    <section id="contact" className="py-10 md:py-40 ">
      <motion.div
        className={`${surface5} container max-w-[50rem] mx-auto p-6  rounded-lg `}
        onViewportEnter={() => setSelectedPage(SelectedPage.Contact)}
      >
        {/* HEADER */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h2 className="mb-5 text-2xl font-medium text-textAction2 md:text-4xl">
            Contact
          </h2>
        </motion.div>
        <div className="justify-center gap-8 mt-10 md:flex">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              target="_blank"
              onSubmit={handleSubmit}
              action="https://formsubmit.co/youremail.com"
              method="POST"
            >
              <input
                className={inputStyles}
                type="text"
                placeholder="NAME"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="mt-1 text-callAction">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" &&
                    "Max length is 100 char."}
                </p>
              )}

              <input
                className={inputStyles}
                type="text"
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="mt-1 text-callAction">
                  {errors.email.type === "required" &&
                    "This field is required."}
                  {errors.email.type === "pattern" && "Invalid email address."}
                </p>
              )}

              <textarea
                className={inputStyles}
                placeholder="MESSAGE"
                rows={4}
                cols={50}
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="mt-1 text-callAction">
                  {errors.message.type === "required" &&
                    "This field is required."}
                  {errors.message.type === "maxLength" &&
                    "Max length is 2000 char."}
                </p>
              )}

              <button
                type="submit"
                className="py-3 text-sm font-medium transition duration-500 ease-linear rounded-md bg-callAction px-7 md:px-9 md:py-4 md:font-semibold text-gray-50 hover:bg-gray-50 hover:text-gray-700"
              >
                SUBMIT
              </button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
