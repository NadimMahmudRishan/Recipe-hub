import PropTypes from "prop-types";
import { TfiTimer } from "react-icons/tfi";
import { AiOutlineFire } from "react-icons/ai";

const recipe = ({ recipe }) => {
  const {
    recipe_image,
    recipe_name,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = recipe;
  return (
    <div>
      <div className="card bg-base-100 md:w-[350px] shadow-xl border-[1px] border-[#28282833]">
        <figure className="px-6 pt-6">
          <img src={recipe_image} alt="recipe_image" className="rounded-xl" />
        </figure>
        <div className=" items-center text-center px-6 py-6 ">
          <h2 className="recipe_name text-left text-[#282828] text-xl font-semibold ">
            {recipe_name}
          </h2>
          <p className="text-sm text-[#878787] font-light mb-3 ">
            {short_description}
          </p>
          <hr className=" text-[#2828281A] mb-3 " />
          <h3 className=" text-lg font-medium text-left">
            Ingredients : {ingredients.length}
          </h3>
          <ul className="text-left list-disc mx-5 text-[#878787] font-light ">
            {ingredients.map((ingredient, xid) => (
              <li key={xid}>{ingredient}</li>
            ))}
          </ul>
          <hr className=" text-[#2828281A] my-3 " />
          <div className="text-[#282828CC] flex text-sm justify-around mb-3 ">
            <div className="flex justify-center items-center">
              <TfiTimer />
              <span>{preparing_time} minutes</span>
            </div>
            <div className="flex justify-center items-center">
              <AiOutlineFire />
              <span>{calories} calories</span>
            </div>
          </div>
          <div className="card-actions">
            <button className="px-4 py-2 rounded-3xl bg-[#0BE58A] text-[#150B2B] text-lg font-medium ">
              Want to Cook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default recipe;
recipe.PropTypes = {
  recipe: PropTypes.object.isRequired,
};
