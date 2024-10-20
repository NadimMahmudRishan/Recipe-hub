import "./App.css";
import Header from "./componenes/header/Header";
import Banner from "./componenes/banner/Banner";
import Recipes from "./componenes/recipes/Recipes";

function App() {
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <div className="my-10">
        <h2 className="text-[40px] text-[#150B2B] font-semibold">Our Recipes</h2>
        <p className="text-[#150B2B99] text-lg font-normal">
          Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
          vulputate netus pharetra rhoncus. Eget urna volutpat curabitur
          elementum mauris aenean neque.{" "}
        </p>
      </div>
      <Recipes></Recipes>
    </>
  );
}

export default App;
