import React from "react";

// Styles importation
import "./mainHome.scss";

import Band from "@components/ui/band/band";
import MainBanner from "./components/banner/mainBanner";
import MainPresentaion from "./components/presentation/presentation";
import MainCta from "./components/cta/cta";
import Problem from "./components/problem/Problem";
import Solution from "./components/solution/Solution";
import ListProblem from "./components/listProblem/ListProblem";

function MainHome() {
  return (
    <div className="super-global-container home">
      <MainBanner />
      <Band />
      <MainPresentaion />
      <MainCta />
      <Problem />
      <ListProblem />
      <Solution />
    </div>
  );
}

export default MainHome;
