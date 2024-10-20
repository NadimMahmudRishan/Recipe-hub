const Banner = () => {
  return (
    <div>
      <div
        className="hero md:min-h-[600px] rounded-2xl overflow-hidden"
        style={{
          backgroundImage:
            "url(https://i.ibb.co.com/pLBrgs7/vegetables-set-left-black-slate.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-full">
            <h1 className="mb-4 md:mb-8 text-2xl md:text-5xl font-bold">
              Discover an exceptional cooking <br />
              class tailored for you!
            </h1>
            <p className="mb-4 md:mb-8 font-normal text-sm md:text-lg">
              Learn and Master Basic Programming, Data Structures, Algorithm,
              OOP, Database and solve 500+ <br />
              coding problems to become an exceptionally well world-class
              Programmer.
            </p>
            <div className="flex gap-2 md:gap-5 justify-center">
              <button className="px-2 md:px-5 py-1 md:py-4 font-bold rounded-3xl md:rounded-[30px] text-[#150B2B] bg-[#0BE58A] border-none md:text-xl text-sm hover:bg-white ">
                Explore Now
              </button>

              <button className="px-2 md:px-5 py-1 md:py-4 rounded-3xl md:rounded-[30px] md:text-xl text-sm font-bold bg-none border-white border-[1px] hover:bg-[#0BE58A] ">
                Our Feedback
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
