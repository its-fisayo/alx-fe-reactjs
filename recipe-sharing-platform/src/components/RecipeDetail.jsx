import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


export default function RecipeDetail() {
const { id } = useParams();
const [recipe, setRecipe] = useState(null);


useEffect(() => {
fetch("/data.json")
.then((res) => res.json())
.then((data) => {
const found = data.find((item) => item.id === parseInt(id));
setRecipe(found);
});
}, [id]);


if (!recipe) return <p className="text-center p-6">Loading...</p>;


return (
<div className="max-w-3xl mx-auto p-6">
<img src={recipe.image} alt={recipe.title} className="w-full rounded-2xl mb-6" />
<h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
<p className="text-gray-700 mb-6">{recipe.summary}</p>


<div className="bg-white shadow rounded-2xl p-5 mb-6">
<h2 className="text-2xl font-semibold mb-3">Ingredients</h2>
<ul className="list-disc list-inside space-y-1 text-gray-700">
{recipe.ingredients?.map((item, index) => (
<li key={index}>{item}</li>
))}
</ul>
</div>


<div className="bg-white shadow rounded-2xl p-5">
<h2 className="text-2xl font-semibold mb-3">Instructions</h2>
<ol className="list-decimal list-inside space-y-2 text-gray-700">
{recipe.instructions?.map((step, index) => (
<li key={index}>{step}</li>
))}
</ol>
</div>
</div>
);
}