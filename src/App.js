import React from "react";
import FrontCover from "./components/FrontCover";
import InsideLeft from "./components/InsideLeft";
import InsideRight from "./components/InsideRight";
import BackPage from "./components/BackPage";
import "./App.css";

function App() {
  return (
    <div className="container my-5 brochure-spread">

      {/* Spread 1: Front Cover + Inside Right */}
      <div className="row mb-4">
        <div className="col-md-6">
          <FrontCover />
        </div>
        <div className="col-md-6">
          <InsideRight />
        </div>
      </div>

      {/* Spread 2: Inside Left + Back Page */}
      <div className="row">
        <div className="col-md-6">
          <InsideLeft />
        </div>
        <div className="col-md-6">
          <BackPage />
        </div>
      </div>

    </div>
  );
}

export default App;
