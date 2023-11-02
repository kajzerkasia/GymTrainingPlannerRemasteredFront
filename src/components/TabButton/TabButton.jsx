import React from "react";

const TabButton = ({ children, isSelected, ...props }) => {
  return (
    <div
      className={isSelected ? "plans-tab-button active" : "plans-tab-button"}
      {...props}
    >
      {children}
    </div>
  );
};

export default TabButton;
