import Image from "next/image";
import Link from "next/link";
import SectionWrapper from "./SectionWrapper";
import mahade from "@/public/about/mahade.jpg";

const About = () => {
  return (
    <SectionWrapper
      id="about"
      className="mb-28 lg:mb-40 pt-5 bg-gradient-to-b from-white to-gray-100/20 dark:from-grey-900 dark:to-grey-900"
    >
      <h2 className="text-4xl text-center text-gray-800 dark:text-white">
        About Me
      </h2>

      <div className="w-full lg:w-11/12 2xl:w-4/5 mt-6 mx-auto flex flex-col md:gap-4 lg:flex-row justify-between items-center">
        <div className="p-3 w-56 self-start md:w-2/5 lg:w-72 bg-white dark:bg-grey-800 flex flex-col gap-2 items-center rounded-2xl mx-auto lg:mx-16 hover:-translate-y-2 transition-transform duration-300 lg:-rotate-3">
          <Image
            src={mahade}
            alt="profile"
            width={1000}
            height={1000}
            className="w-full h-60 md:h-80 rounded-2xl object-cover grayscale hover:grayscale-0 transition-all bg-violet-100"
          />
          <span className="font-medium font-sans">
            {"< I Build Stuff 👨🏻‍💻 />"}
          </span>
        </div>

        <div className="flex-1 text-left mx-4 mt-4 md:mt-0 md:mx-0 px-6">
          <div className="flex flex-col gap-2.5">
            <p className="text-3xl font-semibold">Mahade Hasan</p>
            <p className="text-violet-800 w-fit rounded py-1 px-2 text-sm dark:text-violet-600 bg-violet-50 dark:bg-violet-900/10">
              Full Stack Engineer
            </p>
            <p className="text-sm md:text-base my-2 text-gray-600 dark:text-gray-300">
              Detail-oriented web developer with 1.5 years of hands-on
              experience in frontend development. Adept at delivering intricate
              projects and passionate about technology impact on business
              transformation. Skilled problem solver with a positive attitude,
              effective in leadership, communication, and innovation. Proficient
              in CSS, JavaScript, Vue JS, Nuxt JS, and familiar with Quasar and
              React JS. Committed to delivering high-quality solutions and
              collaborating effectively with cross-functional teams.
            </p>
            <div className="flex items-center gap-4 md:mt-4">
              <Link
                href="https://docs.google.com/document/d/1JAPaurIsj_9yCbRfx7SDLj_n0yt7my9c/edit?usp=sharing&ouid=116772106057388707905&rtpof=true&sd=true"
                target="_blank"
                className="text-sm md:text-base bg-violet-600 dark:bg-violet-700 text-white w-fit rounded-md py-2 px-6 hover:shadow-xl transition-shadow"
              >
                Resume
              </Link>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
