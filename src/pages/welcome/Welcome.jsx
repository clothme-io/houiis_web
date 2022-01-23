import React from "react";
import { Link } from "react-router-dom";
import { PagesRoutes } from "../../route/RouteOptions";
import { Header } from "./component/Header";
import { Navbar } from "./component/Navbar";
import { Properties } from "./component/Properties";
import { Steps } from "./component/Steps";
import { Pricing } from "./component/Pricing";
import { Statistic } from "./component/Statistics";
import { Application } from "./component/Application";
import { Footer } from "./component/Footer";

export const WelcomePage = () => {
  return (
    <div>
      <Navbar />
      <div></div>
      <Header />
      {/* <Steps /> */}
      {/* <Properties /> */}
      {/* <Pricing /> */}
      {/* <Statistic /> */}
      {/* <Application /> */}
      {/* <Footer /> */}
    </div>
  );
};
