// src/components/RecipeList.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

const RecipeList = () => {
  const recipes = useRecipeStore((s) => s.recipes);
  const filteredRecipes = useRecipeStore((s) => s.filteredRecipes);
  const favorites = useRecipeStore((s) => s.favorites);
  const addFavorite = useRecipeStore((s) => s.addFavorite);
  const removeFavorite = useRecipeStore((s) => s.removeFavorite);

  // show filtered if exists, otherwise show all
  const listToShow = filteredRecipes.length > 0 ? filteredRecipes : recipes;

  if (listToShow.length === 0) return <p>No recipes available.</p>;

  return (
    <div style={{ marginTop: 20 }}>
      <h2>Recipes</h2>
      {listToShow.map((recipe) => {
        const isFav = favorites.includes(recipe.id);

        return (
          <div
            key={recipe.id}
            style={{
              border: "1px solid #ccc",
              padding: 10,
              marginBottom: 10,
              borderRadius: 4,
            }}
          >
            <h3>
              <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
            </h3>
            <p>{recipe.description}</p>
            {recipe.ingredients && (
              <p style={{ margin: 0, fontSize: 13 }}>
                <strong>Ingredients:</strong> {recipe.ingredients.join(", ")}
              </p>
            )}
            {recipe.prepTime != null && (
              <p style={{ fontSize: 13 }}>Prep time: {recipe.prepTime} min</p>
            )}

            <button
              onClick={() =>
                isFav ? removeFavorite(recipe.id) : addFavorite(recipe.id)
              }
              style={{
                marginTop: 8,
                padding: "4px 8px",
                cursor: "pointer",
                background: isFav ? "gold" : "#eee",
                border: "none",
                borderRadius: 4,
              }}
            >
              {isFav ? "★ Remove Favorite" : "☆ Add to Favorites"}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default RecipeList;
