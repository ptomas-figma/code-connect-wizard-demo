import React from "react";

const MyComponent = ({ render }) => {
  return <div>{render(null)}</div>;
};

export { MyComponent };
