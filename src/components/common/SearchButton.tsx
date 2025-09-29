import React from "react";
import { buttonStyle } from "../../styles/AllianceStyles";

type SearchButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label?: string;
  style?: React.CSSProperties;
};

export const SearchButton: React.FC<SearchButtonProps> = ({
  label = "Search",
  style = {},
  ...props
}) => {
  return (
    <button
      style={{ ...buttonStyle, ...style }}
      {...props}
    >
      {label}
    </button>
  );
};
