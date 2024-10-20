import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../recipe/recipe";
import WannaCooke from "../wannaCooke/WannaCooke";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch("datas.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);
  return (
    <div className="flex justify-between">
      <div className=" w-3/5 grid grid-cols-2 gap-5 ">
        {recipes.map((recipe) => (
          <Recipe key={recipe.recipe_id} recipe={recipe}></Recipe>
        ))}
      </div>
      <div>
        <WannaCooke></WannaCooke>
      </div>
    </div>
  );
};

export default Recipes;
