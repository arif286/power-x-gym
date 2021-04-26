import React from "react";
import About from "../About/About";
import ChooseUs from "../ChooseUs/ChooseUs";
import Header from "../Header/Header";
import Programs from "../Programs/Programs";
import WorkOut from "../WorkOut/WorkOut";

const Home = () => {
  const renderHeader = {
    showHeader: 'home',
  }
  return (
    <>
      <Header render={renderHeader}/>
      <WorkOut />
      <About />
      <Programs />
      <ChooseUs />
    </>
  );
};

export default Home;
