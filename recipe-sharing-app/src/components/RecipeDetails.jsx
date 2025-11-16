import { useParams, useNavigate } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";
import EditRecipeForm from "./EditRecipeForm";

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const recipe = useRecipeStore((s) =>
    s.recipes.find((r) => r.id === Number(id))
  );

  const deleteRecipe = useRecipeStore((s) => s.deleteRecipe);

  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      <button
        onClick={() => {
          deleteRecipe(recipe.id);
          navigate("/");
        }}
      >
        Delete Recipe
      </button>

      <EditRecipeForm recipe={recipe} />
    </div>
  );
};

export default RecipeDetails;
