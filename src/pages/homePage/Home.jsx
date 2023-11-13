import React from "react";
import Header from "../../components/haeder/header";
import WelcomeSection from "./components/welcomeSection";
import UndergraduatePrograms from "./components/undergraduatePrograms";
import StudentHomepage from "./components/studentHomepage";
import NewsEvents from "./components/newsEvents";
import Contact from "../Contact";
import Subscribe from "./components/subscribe";
import Footer from "../../components/footer/footer";
import HomeSlider from "./components/homeSlider";

const Home = () => {
  return (
    <>
      <HomeSlider />
      <WelcomeSection />
      <UndergraduatePrograms />
      <StudentHomepage />
      <NewsEvents />
      <Contact />
      <Subscribe />
    </>
  );
};

export default Home;
