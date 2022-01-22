import React from "react";
import "./Home.css";
function Home() {
  return (
    <div className="banner">
      <div className="banner-container">
        <div className="banner-txt">Tables</div>
        <button className="banner-btns">Tables / tables</button>
        <div className="btn-container">
          <button className="banner-btn">New</button>
          <button className="banner-btn">Filters</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
