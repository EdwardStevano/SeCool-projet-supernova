import React from "react";

// Styles importation
import "./mainHome.scss";

import Band from "@components/ui/band/band";
import Problem from "./components/problem/Problem";
import Solution from "./components/solution/Solution";

function MainHome() {
  return (
    <div className="super-global-container home">
      <div className="super-container-p80 pad-bottom-px50">
        <h1>Make Brand identities</h1>
      </div>
      {/* <Band /> */}

      <Problem />
      <Solution/>
    </div>
  );
}

export default MainHome;
