import React from "react";

interface IconProps {
  name: string;
  size?: number;
  color?: string;
}

const Icon: React.FC<IconProps> = ({ name, size = 24, color = "black" }) => {
  const renderIcon = () => {
    switch (name) {
      case "home":
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={color}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </svg>
        );
      // Add more cases for different icons
      default:
        return null;
    }
  };

  return <div>{renderIcon()}</div>;
};

export default Icon;
