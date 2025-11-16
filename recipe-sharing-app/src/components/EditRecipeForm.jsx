import { useState } from "react";
import { useRecipeStore } from "./recipeStore";

const EditRecipeForm = ({ recipe, onClose }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  const handleSubmit = (event) => {
    event.preventDefault();

    updateRecipe(recipe.id, {
      title,
      description,
    });

    if (onClose) onClose();
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
      <h3>Edit Recipe</h3>

      <input
        type="text"
        placeholder="Edit title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Edit description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditRecipeForm;
