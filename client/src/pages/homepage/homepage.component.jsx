import React from "react";
import Directory from "../../components/directory/directory.component";
import oneTrustCookie from "../../components/onetrust-cookie/OneTrustCookie";

import { HomePageContainer } from "./homepage.styles";

const HomePage = () => {
  // const userAgentsArray = window.navigator.userAgentData.brands.map(
  //   ({ brand }) => { return brand; }
  // );
  // const userAgents = userAgentsArray.join(" ");

  return (
    <HomePageContainer>
      <Directory />
      <oneTrustCookie
        id="0db1e523-e217-4df5-a096-736cd79ebadb-tes"
        url="https://cdn.cookielaw.org/scripttemplates/otSDKStub.js"
      />
    </HomePageContainer>
  );
};

export default HomePage;
