import React from 'react';
import { useRecipeStore } from './recipeStore';

const DeleteRecipeButton = ({ recipeId, onDeleted }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  const handleDelete = () => {
    deleteRecipe(recipeId);
    if (onDeleted) onDeleted();
  };

  return <button onClick={handleDelete} style={{ marginRight: '10px' }}>Delete Recipe</button>;
};

export default DeleteRecipeButton;
