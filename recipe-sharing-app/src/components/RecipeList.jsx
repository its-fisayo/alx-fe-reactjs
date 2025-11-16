import { Link } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

const RecipeList = () => {
  const recipes = useRecipeStore((s) => s.recipes);

  return (
    <div style={{ marginTop: 20 }}>
      <h2>All Recipes</h2>

      {recipes.length === 0 && <p>No recipes yet.</p>}

      {recipes.map((r) => (
        <div key={r.id} style={{ padding: 10, border: "1px solid #ccc", marginBottom: 10 }}>
          <h3>
            <Link to={`/recipe/${r.id}`}>{r.title}</Link>
          </h3>
          <p>{r.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
