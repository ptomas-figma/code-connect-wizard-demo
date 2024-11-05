import React, { ReactNode } from "react";

interface MyComponentProps {
  render: (props: unknown) => ReactNode;
}

const MyComponent = ({ render }: MyComponentProps) => {
  return <div>{render(null)}</div>;
};

export { MyComponent };
