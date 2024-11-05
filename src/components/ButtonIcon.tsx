import React from "react";
import Icon from "./Icon";

interface ButtonIconProps {
  leftIcon?: string;
  rightIcon?: string;
  children: any;
  onClick?: () => void;
  size?: number;
  color?: string;
}

const ButtonIcon: React.FC<ButtonIconProps> = ({
  leftIcon,
  rightIcon,
  children,
  size = 24,
  color = "black",
}) => {
  return (
    <button
      style={{
        display: "flex",
        alignItems: "center",
        padding: "8px 16px",
        border: "none",
        background: "transparent",
        cursor: "pointer",
      }}
    >
      {leftIcon && <Icon name={leftIcon} size={size} color={color} />}
      <span style={{ margin: "0 8px" }}>{children}</span>
      {rightIcon && <Icon name={rightIcon} size={size} color={color} />}
    </button>
  );
};

export default ButtonIcon;
