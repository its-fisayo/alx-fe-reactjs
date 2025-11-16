// src/components/RecommendationsList.jsx
import React from "react";
import { useRecipeStore } from "./recipeStore";
import { Link } from "react-router-dom";

const RecommendationsList = () => {
  const recommendations = useRecipeStore((s) => s.recommendations);

  if (!recommendations.length) return <p>No recommendations yet. Add favorites to get suggestions.</p>;

  return (
    <div style={{ marginTop: 20 }}>
      <h2>Recommended for You</h2>
      {recommendations.map((r) => (
        <div key={r.id} style={{ border: "1px solid #ccc", padding: 10, marginBottom: 10 }}>
          <h3>
            <Link to={`/recipe/${r.id}`}>{r.title}</Link>
          </h3>
          <p>{r.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecommendationsList;
