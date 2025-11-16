// src/components/recipeStore.js
import { create } from "zustand";

function matchesSearch(recipe, term) {
  if (!term) return true; // no filter -> match everything

  const t = term.toString().toLowerCase().trim();

  // match title
  if (recipe.title && recipe.title.toLowerCase().includes(t)) return true;

  // match description
  if (recipe.description && recipe.description.toLowerCase().includes(t)) return true;

  // match ingredients (if present, array of strings)
  if (Array.isArray(recipe.ingredients)) {
    const ingrMatch = recipe.ingredients.some((ing) =>
      ing.toLowerCase().includes(t)
    );
    if (ingrMatch) return true;
  }

  // match prepTime when user types a number (e.g. "20" or "30m")
  const asNumber = parseInt(t, 10);
  if (!isNaN(asNumber) && recipe.prepTime != null) {
    if (recipe.prepTime <= asNumber) return true; // show recipes with prepTime <= input
  }

  return false;
}

export const useRecipeStore = create((set, get) => ({
  recipes: [
    // optional initial seed data (remove or modify if you prefer empty)
    { id: 1, title: "Jollof Rice", description: "Smoky and spicy", ingredients: ["rice", "tomato"], prepTime: 45 },
    { id: 2, title: "Fried Plantain", description: "Sweet and crispy", ingredients: ["plantain", "oil"], prepTime: 10 }
  ],

  searchTerm: "",
  filteredRecipes: [],

  // recompute helper
  _recomputeFiltered: () => {
    const { recipes, searchTerm } = get();
    const filtered = recipes.filter((r) => matchesSearch(r, searchTerm));
    set({ filteredRecipes: filtered });
  },

  // set the whole list (useful if you fetch from API)
  setRecipes: (recipes) => {
    set({ recipes }, false);
    get()._recomputeFiltered();
  },

  setSearchTerm: (term) => {
    set({ searchTerm: term }, false);
    get()._recomputeFiltered();
  },

  addRecipe: (newRecipe) => {
    set((state) => ({ recipes: [...state.recipes, newRecipe] }), false);
    get()._recomputeFiltered();
  },

  updateRecipe: (updatedRecipe) => {
    set((state) => ({
      recipes: state.recipes.map((r) => (r.id === updatedRecipe.id ? updatedRecipe : r)),
    }), false);
    get()._recomputeFiltered();
  },

  deleteRecipe: (id) => {
    set((state) => ({ recipes: state.recipes.filter((r) => r.id !== id) }), false);
    get()._recomputeFiltered();
  },
}));
