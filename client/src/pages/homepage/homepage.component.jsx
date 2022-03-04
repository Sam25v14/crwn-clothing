import React from "react";
import Directory from "../../components/directory/directory.component";
import { HomePageContainer } from "./homepage.styles";

const HomePage = () => {
  // const userAgentsArray = window.navigator.userAgentData.brands.map(
  //   ({ brand }) => { return brand; }
  // );
  // const userAgents = userAgentsArray.join(" ");

  return (
    <HomePageContainer>
      {window.navigator.userAgent}
      <Directory />
    </HomePageContainer>
  );
};

export default HomePage;
