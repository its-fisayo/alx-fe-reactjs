// src/components/SearchBar.jsx
import React from "react";
import { useRecipeStore } from "./recipeStore";

const SearchBar = () => {
  const searchTerm = useRecipeStore((s) => s.searchTerm);
  const setSearchTerm = useRecipeStore((s) => s.setSearchTerm);

  return (
    <div style={{ marginBottom: 12 }}>
      <input
        aria-label="Search recipes"
        type="text"
        placeholder="Search by name, ingredient, or prep time..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: "8px", width: "100%", maxWidth: 480 }}
      />
    </div>
  );
};

export default SearchBar;
