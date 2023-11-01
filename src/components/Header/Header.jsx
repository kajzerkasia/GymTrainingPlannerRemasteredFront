import React from "react";
// import './Header.css';

const Header = () => {
  return (
    <header className="text-center my-12 mx-0">
      {/*<img src="" alt=""/>*/}
      <h1 className="text-5xl font-header font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink to-cyan pb-4">
        Gym Training Planner
      </h1>
      <p className="text-violet text-sm">
        Twoja przestrzeń do zarządzania planami treningowymi
      </p>
    </header>
  );
};

export default Header;