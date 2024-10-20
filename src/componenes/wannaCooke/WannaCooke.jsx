import PropTypes from "prop-types";

const WannaCooke = ({ wannaCook }) => {
  return (
    <div className=" w-2/5 ">
      <div className="card bg-base-100 w-[480px] shadow-xl border-[1px] border-[#28282833]">
        <h2 className="m-4 text-2xl font-semibold">
          Want to cook: {wannaCook.length}
        </h2>
        <hr className=" text-[#28282826] w-2/3 mx-auto " />
        <table>
          <th className="flex justify-center gap-12 text-[#878787] text-sm font-medium">
            <td className="w-12">Name</td>
            <td className="w-12">Time</td>
            <td className="w-12">Calories</td>
            <td className="w-3"></td>
          </th>
          {wannaCook.map((cook, xid) => (
            <tr
              key={xid}
              className="flex justify-center items-center gap-10 bg-[#28282808] my-1 p-1 text-[#878787] text-sm font-normal"
            >
              <td className="font-bold text-[#282828CC]">{xid + 1}</td>
              <td className="w-12">{cook.recipe_name}</td>
              <td className="w-12">{cook.preparing_time} min</td>
              <td className="w-12">{cook.calories} cal</td>
              <td>
                {" "}
                <button
                  onClick={() => handelCook(recipe)}
                  className="px-2 py-1 rounded-3xl bg-[#0BE58A] text-[#150B2B] text-sm font-normal "
                >
                  Preparing
                </button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default WannaCooke;
WannaCooke.PropTypes = {
  wannaCook: PropTypes.array.isRequired,
};
