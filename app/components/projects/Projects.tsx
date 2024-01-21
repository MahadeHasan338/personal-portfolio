"use client";
import { useEffect, useState } from "react";
import SectionWrapper from "../SectionWrapper";
import ProjectCard from "./ProjectCard";
import Link from "next/link";
import oeHealth from "@/public/projects/oeHealth.webp";
import farenow from "@/public/projects/farenow.webp";

const Projects = () => {
  const projectsData = [
    {
      name: "Oral e-Health Monitoring Platform",
      image: oeHealth,
      category: "Web",
      techStack: "Nuxt JS, Django, Vuetify",
      links: {
        visit: "https://teethwallet.com",
      },
    },
    {
      name: "Farenow Pro",
      image: farenow,
      category: "Web",
      techStack: "Next JS, PHP, FullCalendar, Tailwind CSS",
      links: {
        visit: "https://farenow-pro.vercel.app",
      },
    },
  ];

  const [projects, setProjects] = useState([...projectsData]);

  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [viewAll, setViewAll] = useState(false);

  return (
    <SectionWrapper id="projects" className="mx-4 md:mx-0 mb-12 lg:mb-20">
      <h2 className="text-4xl text-center">Projects</h2>

      <div className="md:mx-6 lg:mx-auto lg:w-5/6 2xl:w-3/4 my-4 md:my-8 mx-auto grid md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-10">
        {projects
          .slice(0, viewAll ? filteredProjects.length : 6)
          .map((p, i) => (
            <ProjectCard key={i} {...p} />
          ))}
      </div>

      {filteredProjects.length > 6 && (
        <ViewAll
          scrollTo="projects"
          title={viewAll ? "Okay, I got it" : "View All"}
          handleClick={() => setViewAll(!viewAll)}
        />
      )}
    </SectionWrapper>
  );
};

export default Projects;

export const ViewAll = ({ handleClick, title, scrollTo }: any) => {
  return (
    <>
      <div className="bg-white dark:bg-grey-900 w-4/5 mx-auto blur-xl z-20 -translate-y-14 h-16"></div>
      <div className="text-center -translate-y-24">
        {title === "View All" ? (
          <button
            onClick={handleClick}
            className={`bg-violet-600 text-white px-4 ${
              title === "View All" ? "animate-bounce" : "animate-none"
            } py-1.5 rounded-md hover:shadow-xl transition-all`}
          >
            {title}
          </button>
        ) : (
          <Link
            href={`#${scrollTo}`}
            className={`bg-violet-600 text-white px-4 ${
              title === "View All" ? "animate-bounce" : "animate-none"
            } cursor-pointer py-1.5 rounded-md hover:shadow-xl transition-all`}
            onClick={() => handleClick()}
          >
            {title}
          </Link>
        )}
      </div>
    </>
  );
};
