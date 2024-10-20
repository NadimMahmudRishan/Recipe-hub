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

  const [wannaCook, setWannaCook] = useState([]);
  const handelCook = (recipe) => {
    const newWannaCook = [...wannaCook, recipe];
    setWannaCook(newWannaCook);
  };

  return (
    <div className="flex justify-between">
      <div className=" w-3/5 grid grid-cols-2 gap-5 ">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe_id}
            recipe={recipe}
            handelCook={handelCook}
          ></Recipe>
        ))}
      </div>
      <div>
        <WannaCooke wannaCook={wannaCook}></WannaCooke>
      </div>
    </div>
  );
};

export default Recipes;
