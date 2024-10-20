import PropTypes from "prop-types";

const WannaCooke = ({ wannaCook, handelCook, cooked, totalTime, totalCal }) => {
  return (
    <div className=" w-2/5 py-10">
      <div className="card bg-base-100 w-80 md:w-[480px] shadow-xl border-[1px] border-[#28282833]">
        <h2 className="m-4 text-2xl font-semibold">
          Want to cook: {wannaCook.length}
        </h2>
        <hr className=" text-[#28282826] w-4/5 md:w-2/3 mx-auto " />
        <table>
          <th className="flex justify-between text-[#878787] text-sm font-medium">
            <td className="md:w-10 w-5"></td>
            <td className="md:w-12 w-16">Name</td>
            <td className="md:w-12 w-16">Time</td>
            <td className="md:w-12 w-16">Calories</td>
            <td className="md:w-28 w-24"></td>
          </th>
          {wannaCook.map((cook, xid) => (
            <tr
              key={xid}
              className="flex justify-between items-center bg-[#28282808] my-1 md:p-1 text-[#878787] text-xs md:text-sm font-normal"
            >
              <td className="font-bold text-[#282828CC] md:1 w-4 md:px-5 px-3">{xid + 1}</td>
              <td className="md:w-12 w-16">{cook.recipe_name}</td>
              <td className="md:w-12 w-16">{cook.preparing_time} min</td>
              <td className="md:w-12 w-16">{cook.calories} cal</td>
              <td className="md:w-28 w-24">
                {" "}
                <button
                  onClick={() => handelCook(cook)}
                  className="px-2 py-1 rounded-3xl bg-[#0BE58A] text-[#150B2B] text-sm font-normal "
                >
                  Preparing
                </button>
              </td>
            </tr>
          ))}
        </table>
        <h2 className="m-4 text-2xl font-semibold">
          Currently cooking: {cooked.length}
        </h2>
        <hr className=" text-[#28282826] w-2/3 mx-auto " />
        <table>
          <th className="flex justify-between  text-[#878787] text-sm font-medium">
            <td className="w-12"></td>
            <td className="w-12">Name</td>
            <td className="w-12">Time</td>
            <td className="w-12">Calories</td>
            <td className="w-12"></td>
          </th>
          {cooked.map((cook, xid) => (
            <tr
              key={xid}
              className="flex justify-between items-center bg-[#28282808] my-1 p-1 text-[#878787] text-xs md:text-sm font-normal"
            >
              <td className="font-bold text-[#282828CC] w-12">{xid + 1}</td>
              <td className="w-12">{cook.recipe_name}</td>
              <td className="w-12">{cook.preparing_time} min</td>
              <td className="w-12">{cook.calories} cal</td>
              <td className="w-12"></td>
            </tr>
          ))}
        </table>
        <div className="text-[#282828CC] text-sm font-medium my-5 flex justify-around">
          <p>Total Time = {totalTime} minutes</p>
          <p>Total Calories = {totalCal} calories</p>
        </div>
      </div>
    </div>
  );
};

export default WannaCooke;
WannaCooke.PropTypes = {
  recipe: PropTypes.array.isRequired,
  cooked: PropTypes.array.isRequired,
  handelCook: PropTypes.func.isRequired,
  totalCal: PropTypes.number.isRequired,
  totalTime: PropTypes.number.isRequired,
};
