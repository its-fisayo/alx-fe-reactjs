// src/components/FavoritesList.jsx
import React from "react";
import { useRecipeStore } from "./recipeStore";

const FavoritesList = () => {
  const recipes = useRecipeStore((s) => s.recipes);
  const favoritesIds = useRecipeStore((s) => s.favorites);
  const removeFavorite = useRecipeStore((s) => s.removeFavorite);

  const favorites = favoritesIds
    .map((id) => recipes.find((r) => r.id === id))
    .filter(Boolean);

  if (!favorites.length) return <p>No favorites yet.</p>;

  return (
    <div style={{ marginTop: 20 }}>
      <h2>My Favorites</h2>
      {favorites.map((r) => (
        <div key={r.id} style={{ border: "1px solid #ccc", padding: 10, marginBottom: 10 }}>
          <h3>{r.title}</h3>
          <p>{r.description}</p>
          <button onClick={() => removeFavorite(r.id)}>Remove from favorites</button>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;
