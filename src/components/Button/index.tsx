import React from "react";
import type { ButtonProps } from "./types";

import "./index.scss";

export const Button: React.FC<ButtonProps> = ({
  title,
  onClick,
  disabled,
}) => {
  return (
    <button
      className="pagination-button"
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
};
