import { useState } from "react";
if (!title.trim()) newErrors.title = "Title is required";
if (!ingredients.trim()) newErrors.ingredients = "Ingredients are required";
if (!steps.trim()) newErrors.steps = "Preparation steps are required";
return newErrors;



const handleSubmit = (e) => {
e.preventDefault();
const validationErrors = validate();
setErrors(validationErrors);


if (Object.keys(validationErrors).length === 0) {
console.log({ title, ingredients, steps });
alert("Recipe submitted successfully!");
setTitle("");
setIngredients("");
setSteps("");
}
};


return (
<div className="max-w-2xl mx-auto p-6 bg-white shadow rounded-2xl mt-6">
<h2 className="text-2xl font-bold mb-4 text-center">Add New Recipe</h2>


<form onSubmit={handleSubmit} className="space-y-4">
<div>
<label className="block font-medium mb-1">Recipe Title</label>
<input
type="text"
value={title}
onChange={(e) => setTitle(e.target.value)}
className="w-full p-2 border rounded-xl focus:ring focus:ring-blue-300"
/>
{errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
</div>


<div>
<label className="block font-medium mb-1">Ingredients (one per line)</label>
<textarea
value={ingredients}
onChange={(e) => setIngredients(e.target.value)}
rows="4"
className="w-full p-2 border rounded-xl focus:ring focus:ring-blue-300"
></textarea>
{errors.ingredients && (
<p className="text-red-500 text-sm">{errors.ingredients}</p>
)}
</div>


<div>
<label className="block font-medium mb-1">Preparation Steps</label>
<textarea
value={steps}
onChange={(e) => setSteps(e.target.value)}
rows="4"
className="w-full p-2 border rounded-xl focus:ring focus:ring-blue-300"
></textarea>
{errors.steps && (
<p className="text-red-500 sm:text-sm md:text-md">{errors.steps}</p>
)}
</div>


<button
type="submit"
className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition"
>
Submit Recipe
</button>
</form>
</div>
);
