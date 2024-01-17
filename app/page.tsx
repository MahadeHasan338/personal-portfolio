import Hero from "./components/hero/Hero";
import Socials from "./components/Socials";
import About from "./components/About";
import Skills from "./components/skills/Skills";

const Home = async () => {
  return (
    <>
      <Hero />
      <Socials />
      <About />
      <Skills />
    </>
  );
};

export default Home;
