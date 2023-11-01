import React from "react";

const TabButton = ({ children, isSelected, ...props }) => {
  let active = "bg-darker-violet";

  return (
    <div className={`isSelected ? ${active} : ''`} {...props}>
      {children}
    </div>
  );
};

export default TabButton;
