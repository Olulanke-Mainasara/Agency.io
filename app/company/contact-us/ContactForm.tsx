"use client";

import React from "react";
import { FaPaperPlane } from "react-icons/fa";

import { Icons } from "@/components/Icons";
import { useToast } from "@/components/UI/ShadUI/toast/use-toast";

export function ContactForm() {
  const { toast } = useToast();
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
        body: JSON.stringify({ type: "contact", name, email, message }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      toast({
        title: "Message sent.",
        description: "We'll get back to you within 48 hours.",
      });
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      toast({
        title: "Uh oh! Something went wrong.",
        description: "There was a problem sending your message.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[90%] max-w-lg text-black dark:text-white xl:w-4/5"
    >
      <h1 className="mb-2 text-center text-6xl">
        What&apos;s <span className="text-brandDark">Up?</span>
      </h1>
      <p className="mb-2 text-center dark:text-gray-400">
        Got a question, feedback, or need help? Send us a message.
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
          Message
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
        className="mx-auto flex items-center gap-2 rounded border-0 bg-brandDark px-6 py-2 text-lg text-white hover:bg-opacity-80 focus:outline-none disabled:opacity-50"
      >
        {isLoading && <Icons.spinner className="h-4 w-4 animate-spin" />}
        Send message <FaPaperPlane />
      </button>
      <p className="mt-4 text-center text-sm dark:text-gray-400">
        We will endeavour to get back to you within 48 hours!
      </p>
    </form>
  );
}
