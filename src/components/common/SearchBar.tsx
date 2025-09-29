import React from "react";
import { SearchInput } from "./SearchInput";
import { SearchButton } from "./SearchButton";

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const SearchBar: React.FC<Props> = ({ value, onChange, onSearch, onKeyDown, placeholder }) =>
  (
  <div style={{ display: "flex",
         justifyContent: "center", alignItems: "center", gap: "1rem", margin: "2rem 0" }}>
    <SearchInput value={value} onChange={onChange}
    onKeyDown={onKeyDown} placeholder={placeholder} />
    <SearchButton onClick={() => onSearch()} />

  </div>
);

export default SearchBar;
