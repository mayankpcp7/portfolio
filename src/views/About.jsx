import React from "react";
import Nav from "../components/common/Nav";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import MyFunFacts from "../components/MyFunFacts";
import Footer from "../components/Footer";
import ProgressBar from "../components/ProgressBar";

const About = () => {
  return (
    <>
      <ProgressBar />
      <Nav />
      <AboutMe />
      <Skills />
      <MyFunFacts />
      <Footer />
    </>
  );
};

export default About;
