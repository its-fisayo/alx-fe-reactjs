// src/components/recipeStore.js
import { create } from "zustand";

function matchesSearch(recipe, term) {
  if (!term) return true;
  const t = term.toString().toLowerCase().trim();
  if (recipe.title?.toLowerCase().includes(t)) return true;
  if (recipe.description?.toLowerCase().includes(t)) return true;
  if (Array.isArray(recipe.ingredients)) {
    if (recipe.ingredients.some((ing) => ing.toLowerCase().includes(t))) return true;
  }
  const asNumber = parseInt(t, 10);
  if (!isNaN(asNumber) && recipe.prepTime != null && recipe.prepTime <= asNumber) return true;
  return false;
}

export const useRecipeStore = create((set, get) => ({
  recipes: [
    { id: 1, title: "Jollof Rice", description: "Smoky and spicy", ingredients: ["rice","tomato"], prepTime: 45 },
    { id: 2, title: "Fried Plantain", description: "Sweet and crispy", ingredients: ["plantain","oil"], prepTime: 10 }
  ],

  searchTerm: "",
  filteredRecipes: [],

  favorites: [],
  recommendations: [],

  // recompute filtered recipes
  _recomputeFiltered: () => {
    const { recipes, searchTerm } = get();
    set({ filteredRecipes: recipes.filter((r) => matchesSearch(r, searchTerm)) });
  },

  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get()._recomputeFiltered();
  },

  addRecipe: (recipe) => {
    set((state) => ({ recipes: [...state.recipes, recipe] }));
    get()._recomputeFiltered();
  },

  updateRecipe: (recipe) => {
    set((state) => ({
      recipes: state.recipes.map((r) => (r.id === recipe.id ? recipe : r))
    }));
    get()._recomputeFiltered();
  },

  deleteRecipe: (id) => {
    set((state) => ({
      recipes: state.recipes.filter((r) => r.id !== id),
      favorites: state.favorites.filter((favId) => favId !== id)
    }));
    get()._recomputeFiltered();
  },

  // FAVORITES ACTIONS
  addFavorite: (id) => {
    set((state) => ({
      favorites: state.favorites.includes(id) ? state.favorites : [...state.favorites, id]
    }));
    get().generateRecommendations();
  },

  removeFavorite: (id) => {
    set((state) => ({
      favorites: state.favorites.filter((favId) => favId !== id)
    }));
    get().generateRecommendations();
  },

  // simple mock recommendations
  generateRecommendations: () => {
    const { recipes, favorites } = get();
    const recommended = recipes.filter(
      (r) => !favorites.includes(r.id) && Math.random() > 0.5
    );
    set({ recommendations: recommended });
  }
}));
