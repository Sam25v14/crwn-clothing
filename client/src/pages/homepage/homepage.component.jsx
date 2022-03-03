import React from "react";
import Directory from "../../components/directory/directory.component";

import { HomePageContainer } from "./homepage.styles";

const HomePage = () => {
  const userAgentsArray = window.navigator.userAgentData.brands.map(
    ({ brand }) => brand
  );
  const userAgents = userAgentsArray.join(" ");

  return (
    <HomePageContainer>
      {userAgents}
      <Directory />
    </HomePageContainer>
  );
};

export default HomePage;
