import React from "react";

const TabButton = ({ children, isSelected, ...props }) => {
  return (
    <div
      className={isSelected ? "tab-button active" : "tab-button"}
      {...props}
    >
      {children}
    </div>
  );
};

export default TabButton;
