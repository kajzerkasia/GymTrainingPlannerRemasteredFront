import React from "react";

const Section = ({ title, children, ...props }) => {
  return (
    <div className="flex justify-center">
      <section {...props}>
        {title && <h2>{title}</h2>}
        {children}
      </section>
    </div>
  );
};

export default Section;