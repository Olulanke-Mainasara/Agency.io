"use client";

import React from "react";
import { hiringProcess } from "@/static-data/services";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";

import { Icons } from "@/components/Icons";
import { useToast } from "@/components/UI/ShadUI/toast/use-toast";

const HiringAndEnquiries = () => {
  const { toast } = useToast();
  const [cardsVisible, setCardsVisible] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "career", name, email, message }),
      });

      if (!response.ok) {
        throw new Error("Failed to send enquiry");
      }

      toast({
        title: "Enquiry sent.",
        description: "We'll get back to you within 48 hours.",
      });
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      toast({
        title: "Uh oh! Something went wrong.",
        description: "There was a problem sending your enquiry.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="hiringAndEnquiries"
      className="flex scroll-mt-24 flex-col px-6 lg:flex-row xl:min-h-screen xl:px-8"
    >
      <div className="w-full space-y-8">
        <h1 className="text-4xl md:text-5xl">
          Hiring <span className="text-brandDark">process</span>
        </h1>

        <motion.div
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 1 }}
          onAnimationComplete={() => setCardsVisible(true)}
          className="flex flex-col"
        >
          {hiringProcess.map((process, index) => (
            <motion.div
              initial={{ opacity: 0 }}
              animate={
                cardsVisible
                  ? {
                      opacity: 1,
                      transition: {
                        duration: 0.2,
                        delay: index * 0.15,
                      },
                    }
                  : {
                      opacity: 0,
                      transition: { duration: 0.1, delay: index * 0.1 },
                    }
              }
              className="flex h-52 gap-12 pl-6 md:h-40"
              key={process.id}
            >
              <div className="relative h-full w-[2px] bg-black dark:bg-white">
                <div className="absolute left-1/2 top-1/2 flex aspect-square w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-brandDark bg-white text-3xl dark:bg-background">
                  {process.id}
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <h1 className="text-2xl">{process.title}</h1>
                <p className="opacity-70">{process.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="mt-40 flex w-full items-center justify-center lg:mt-0 lg:justify-end">
        <form
          onSubmit={handleSubmit}
          className="max-w-lg text-black dark:text-white xl:w-4/5"
        >
          <h1 className="mb-2 text-center text-4xl md:text-6xl">
            Make <span className="text-brandDark">enquiries!</span>
          </h1>
          <p className="mb-2 text-center dark:text-gray-400">
            Have a question about a role, or don&apos;t see one that fits? Send
            us an enquiry.
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="text-lg leading-10">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              disabled={isLoading}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded border border-black bg-transparent px-3 py-2 text-base leading-8 outline-none transition-colors duration-200 ease-in-out focus:border-brandLight dark:border-gray-400"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="text-lg leading-10">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              disabled={isLoading}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded border border-black bg-transparent px-3 py-2 text-base leading-8 outline-none transition-colors duration-200 ease-in-out focus:border-brandLight dark:border-gray-400"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="message" className="text-lg leading-10">
              Enquiry
            </label>
            <textarea
              id="message"
              name="message"
              required
              disabled={isLoading}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="h-32 w-full resize-none rounded border border-black bg-transparent p-3 text-base leading-6 outline-none transition-colors duration-200 ease-in-out focus:border-brandLight dark:border-gray-400"
              data-gramm="false"
              wt-ignore-input="true"
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="mx-auto flex items-center gap-2 rounded border-0 bg-brandDark px-6 py-2 text-lg text-white hover:bg-brandDark/80 focus:outline-none disabled:opacity-50"
          >
            {isLoading && <Icons.spinner className="h-4 w-4 animate-spin" />}
            Send <FaPaperPlane />
          </button>
          <p className="mt-4 text-center dark:text-gray-400">
            We will endeavour to get back to you within 48 hours!
          </p>
        </form>
      </div>
    </section>
  );
};

export default HiringAndEnquiries;
