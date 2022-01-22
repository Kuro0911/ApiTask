import React from "react";
import "./Navbar.css";

function NavBar() {
  const handleClick2 = () => {
    window.open("https://github.com/Kuro0911/ApiTask");
  };
  return (
    <div className={`nav`}>
      <div class="search-container">
        <form action="">
          <input type="text" placeholder="Search..." name="search"></input>
          <button type="submit">
            <i class="fa fa-search"></i>
          </button>
        </form>
      </div>
      <img
        className="nav-profile"
        onClick={() => handleClick2()}
        src="https://lh3.googleusercontent.com/Os0eg1CYwpqlkTovCTVEI0SuBFH0adgc2hWx9_0Bm5wgosjD0nqTMx0WOPUI0kg4tjvAx-SP2SgCDbRBftjdNbXFGbqd3-fIJbAxKYTVtK3BmOQFYJIlrQWOUH3M3ezmQ8iDiSR5CQ=s120-p-k"
        alt="profile"
      />
    </div>
  );
}

export default NavBar;
