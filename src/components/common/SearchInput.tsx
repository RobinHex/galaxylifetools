import React from "react";
import { inputStyle } from "../../styles/AllianceStyles";

type SearchInputProps = {
  type?: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  placeholder?: string;
  style?: React.CSSProperties; // permitir estilos adicionales
};

export const SearchInput: React.FC<SearchInputProps> = ({
  type = "text",
  value,
  onChange,
  onKeyDown,
  onBlur,
  placeholder = "",
  style = {},
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      onBlur={onBlur}
      placeholder={placeholder}
      style={{ ...inputStyle, ...style }} // mezcla estilos globales + locales
    />
  );
};
