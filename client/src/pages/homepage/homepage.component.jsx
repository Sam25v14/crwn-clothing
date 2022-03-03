import React from "react";
import Directory from "../../components/directory/directory.component";

import { HomePageContainer } from "./homepage.styles";

const HomePage = () => (
  <HomePageContainer>
    {window.navigator.userAgent}
    <Directory />
  </HomePageContainer>
);

export default HomePage;
