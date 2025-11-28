import { createContext, useState } from "react";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("All")

  return (
    <SearchContext.Provider value={{ searchQuery, updateSearchQuery: setSearchQuery, category, updateCategory: setCategory }}>
      {children}
    </SearchContext.Provider>
  );
}