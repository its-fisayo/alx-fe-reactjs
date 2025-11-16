// src/components/RecipeList.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

const RecipeList = () => {
  const filtered = useRecipeStore((s) => s.filteredRecipes);
  const recipes = useRecipeStore((s) => s.recipes);

  // if filteredRecipes not initialized yet, fall back to full list
  const listToShow = Array.isArray(filtered) && filtered.length > 0 ? filtered : (recipes.length ? filtered : recipes);

  return (
    <div style={{ marginTop: 20 }}>
      <h2>Recipes</h2>

      {listToShow.length === 0 ? (
        <p>No recipes match your search.</p>
      ) : (
        listToShow.map((r) => (
          <div key={r.id} style={{ padding: 10, border: "1px solid #ccc", marginBottom: 10 }}>
            <h3>
              <Link to={`/recipe/${r.id}`}>{r.title}</Link>
            </h3>
            <p>{r.description}</p>
            {r.ingredients && (
              <p style={{ margin: 0, fontSize: 13 }}>
                <strong>Ingredients:</strong> {r.ingredients.join(", ")}
              </p>
            )}
            {r.prepTime != null && <p style={{ fontSize: 13 }}>Prep time: {r.prepTime} min</p>}
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
