import React from "react";
import { Github, Twitter, Linkedin, Mail, InstagramIcon } from "lucide-react";

function HeroSection() {
  return (
    <div className="min-h-screen w-full bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* CONTENT WRAPPER */}
      <div className="max-w-screen-md mx-auto p-5">

        {/* BANNER */}
        <div>
          <img
            className="border rounded-3xl mt-10"
            src="/Portfolio-banner.jpg"
            alt="Portfolio Banner"
          />
        </div>

        {/* NAME, PARA */}
        <div>
          <h2 className="mt-7 text-2xl font-semibold text-gray-800 dark:text-gray-100 font-spartan">
            Hi, I'm{" "}
            <span className="text-sky-500 dark:text-sky-400">Ashirwad Chaurasia</span>👋
          </h2>
          <h1 className="mt-4 text-5xl font-bold font-spartan text-gray-900 dark:text-gray-50">
            I make{" "}
            <span className="text-green-600 dark:text-green-400">full-stack</span>{" "}
            products that people{" "}
            <span className="text-pink-500 dark:text-pink-400">love</span>.
          </h1>
          <p className="mt-6 text-md font-spartan text-gray-500 dark:text-gray-300">
            Hi, I'm a final-year BCA student diving deep into full-stack web development. 
            I love building beautiful, functional applications. From designing engaging 
            front-ends to creating solid back-end systems, I enjoy every part of the development process.
          </p>
        </div>

        {/* CONTACT ICONS */}
        <div className="my-5 flex gap-7">
          <a
            className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-200"
            href="https://github.com/ashirwadexe"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={30} />
          </a>
          <a
            className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-200"
            href="https://x.com/ashirwadexe"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter size={30} />
          </a>
          <a
            className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-200"
            href="https://www.linkedin.com/in/ashirwad-chaurasia-6b3935258/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={30} />
          </a>
          <a
            className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-200"
            href="mailto:ashirwadbappy@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail size={30} />
          </a>
          <a
            className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-200"
            href="https://www.instagram.com/ashirwad_bappy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon size={30} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
