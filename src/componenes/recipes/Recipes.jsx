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
  const handelWallaCook = (recipe) => {
    const newWannaCook = [...wannaCook, recipe];
    setWannaCook(newWannaCook);
  };

  const handelRemove = (recipe) => {
    const newWannaCook = wannaCook.filter((items) => items !== recipe);
    setWannaCook(newWannaCook);
  };

  const [Cook, setCook] = useState([]);
  const handelCook = (recipe) => {
    handelRemove(recipe);
    const newCook = [...Cook, recipe];
    setCook(newCook);
  };

  return (
    <div className="flex justify-between">
      <div className=" w-3/5 grid grid-cols-2 gap-5 ">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe_id}
            recipe={recipe}
            handelWallaCook={handelWallaCook}
          ></Recipe>
        ))}
      </div>
      <div>
        <WannaCooke
          wannaCook={wannaCook}
          handelCook={handelCook}
          cooked={Cook}
        ></WannaCooke>
      </div>
    </div>
  );
};

export default Recipes;
