import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
const [recipes, setRecipes] = useState([]);


useEffect(() => {
fetch("src/data.json")
.then((res) => res.json())
.then((data) => setRecipes(data));
}, []);


return (
<div className="p-6 max-w-6xl mx-auto">
<h1 className="text-3xl font-bold mb-6 text-center">Recipe Sharing Platform</h1>


<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
{recipes.map((recipe) => (
<div
key={recipe.id}
className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg hover:scale-[1.02] transition p-3"
>
<img
src={recipe.image}
alt={recipe.title}
className="w-full h-40 object-cover rounded-xl"
/>
<h2 className="text-xl font-semibold mt-3">{recipe.title}</h2>
<p className="text-gray-600 text-sm mt-1">{recipe.summary}</p>
<Link
to={`/recipe/${recipe.id}`}
className="mt-3 block text-center px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition w-full"
>
View Recipe
</Link>
</div>
))}
</div>
</div>
);
}