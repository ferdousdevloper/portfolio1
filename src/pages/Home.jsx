import Hero from "../sections/Hero";
import AboutSection from "../sections/AboutSection";
import Skills from "../sections/SkillsSection";
import Training from "../sections/Training";
import ProjectsSection from "../sections/ProjectsSection";
import EmploymentSection from "../sections/EmploymentSection";
import AccomplishmentSection from "../sections/AccomplishmentSection";
import EducationSection from './../sections/EducationSection';

const Home = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <EmploymentSection />
      <EducationSection/>
      <Skills />
      <Training />
      <ProjectsSection />
      <AccomplishmentSection />
    </>
  );
};

export default Home;
