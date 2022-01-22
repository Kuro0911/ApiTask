import React from "react";
import "./Home.css";
function Home() {
  return (
    <div className="banner">
      <div className="banner-container">
        <div className="banner-txt">Tables</div>
        <button className="banner-btns">
          <img
            className="home-btn"
            src="https://lh3.googleusercontent.com/aypmZSvaY7OmCJKc9WpgtF86lcsIzhdRJLRDgoxVVSNOjqlXE70pmJeW-YpKysalY1hFVVK1VO7jFywgK8J-_8360AI--fg-A62uK3e_nr-PKGQGTNa7Okc71ycAeGMBF5VQoz7fsA=w237-h207-p-k"
          />
          / Tables / Tables
        </button>
        <div className="btn-container">
          <button className="banner-btn">New</button>
          <button className="banner-btn">Filters</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
