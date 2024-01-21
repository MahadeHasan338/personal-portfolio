"use client";
import { useState } from "react";
import { ViewAll } from "../projects/Projects";
import SectionWrapper from "../SectionWrapper";
import ExperienceCard from "./ExperienceCard";

const Experiences = () => {
  const experienceData = [
    {
      company: "Developer Experience Hub",
      url: "https://www.linkedin.com/company/devxhubcom/mycompany/",
      location: "Rajshahi, Bangladesh | Remote",
      position: "Frontend Engineer level I",
      desc: [
        "Performed comprehensive requirement analysis and engaged actively in all development phases.",
        "Cultivated a collaborative culture emphasizing knowledge exchange, leading to a remarkable 50% surge in salary.",
        "Assisted in writing clean, efficient, and modular code for various software projects.",
        "Leveraging these skills to achieve exceptional outcomes.",
      ],
      duration: "Sep 2023 - Present",
      skills:
        "Full Calender · SCSS · Express.js · Redux.js · Redux Thunk · Vue Js · GraphQL · REST APIs · TypeScript · Next.js · Node.js · Nuxt.js · Tailwind CSS · React.js",
    },
    {
      company: "Developer Experience Hub",
      url: "https://www.linkedin.com/company/devxhubcom/mycompany/",
      location: "Rajshahi, Bangladesh | Remote",
      position: "Junior Frontend Engineer",
      desc: [
        "Performed comprehensive requirement analysis and engaged actively in all development phases.",
        "Cultivated a collaborative culture emphasizing knowledge exchange, leading to a remarkable 50% surge in salary.",
        "Assisted in writing clean, efficient, and modular code for various software projects.",
        "Leveraging these skills to achieve exceptional outcomes.",
      ],
      duration: "Sep 2022 - Sep 2023",
      skills:
        "Storefront UI · Odoo · Animation · Vuex · Pinia · Scrum · Vuetify · Nuxt JS · Vue StoreFront · GraphQL · REST APIs · TypeScript · Agile Methodologies · Quasar Framework · Bootstrap · Tailwind CSS · Vue.js",
    },
    {
      company: "Developer Experience Hub",
      url: "https://www.linkedin.com/company/devxhubcom/mycompany/",
      location: "Rajshahi, Bangladesh | Remote",
      position: "Intern Frontend Engineer",
      desc: [
        "Performed comprehensive requirement analysis and engaged actively in all development phases.",
        "Cultivated a collaborative culture emphasizing knowledge exchange, leading to a remarkable 50% surge in salary.",
        "Assisted in writing clean, efficient, and modular code for various software projects.",
        "Leveraging these skills to achieve exceptional outcomes.",
      ],
      duration: "Feb 2022 - Aug 2022",
      skills:
        "SCSS · Animation · Nuxt JS · CSS · REST APIs · Communication · JavaScript · Tailwind CSS · Responsive Web Design · Vue.js",
    },
  ];

  const educationData = [
    {
      institute:
        "Bangabandhu Sheikh Mujibur Rahman Science and Technology University",
      degree: "Bachelor of Science in Biochemistry and Molecular Biology",
      desc: [
        "I actively participated in the Science Club, organizing competitions, workshops, and lectures.",
      ],
      duration: "2016 - 2020",
    },
    {
      institute: "B.N School & Collage",
      degree: "HSC",
      desc: [
        "I actively participated in the Science Club, organizing competitions, workshops, and lectures.",
      ],
      duration: "2013 - 2014",
    },
    {
      institute: "Narikelbaria Z.A High School",
      degree: "SSC",
      desc: [
        "I actively participated in the Science Club, organizing competitions, workshops, and lectures.",
      ],
      duration: "2011 - 2012",
    },
  ];

  const [show, setShow] = useState("Professional");
  const [viewAll, setViewAll] = useState(false);

  const [experiences, setExperiences] = useState([...experienceData]);
  const [educations, setEducations] = useState([...educationData]);

  return (
    <SectionWrapper id="experience" className="mb-12 lg:mb-20">
      <h2 className="text-4xl text-center">Experience</h2>

      <div className="w-fit mx-auto mt-6 p-2 bg-white dark:bg-grey-800 rounded-md flex gap-2 items-center">
        {["Professional", "Education"].map((e, i) => (
          <button
            key={i}
            onClick={() => setShow(e)}
            className={`py-2 px-4 rounded-md transition-colors ${
              show === e
                ? "bg-violet-600 text-white"
                : "hover:bg-gray-100 hover:dark:bg-grey-900 text-black dark:text-white"
            }`}
          >
            {e}
          </button>
        ))}
      </div>

      <div className="lg:container sm:mx-4 lg:mx-auto lg:w-5/6 2xl:w-3/4">
        <div className="relative wrap overflow-hidden p-4 md:py-10 md:px-0">
          <div className="left-6 md:left-1/2 absolute border-opacity-20 border-gray-400 dark:border-grey-800 h-full border"></div>

          {viewAll
            ? (show === "Professional" ? experiences : educations).map(
                (e, i) => <ExperienceCard key={i} {...e} index={i} />
              )
            : (show === "Professional" ? experiences : educations)
                .slice(0, 2)
                .map((e, i) => <ExperienceCard key={i} {...e} index={i} />)}
        </div>
      </div>

      {(show === "Professional" ? experiences : educations).length > 2 && (
        <ViewAll
          scrollTo="experience"
          title={viewAll ? "Okay, I got it" : "View All"}
          handleClick={() => setViewAll(!viewAll)}
        />
      )}
    </SectionWrapper>
  );
};

export default Experiences;
