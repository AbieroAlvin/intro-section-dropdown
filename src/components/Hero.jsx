const Hero = () => {
  return (
    <div className="font-epilogue md:px-10  w-full md:mt-4 mt-6 flex items-center  justify-center gap-8 md:flex-row flex-col-reverse">
      <div className="flex flex-col gap-8 md:px-10 md:space-y-16 md:w-1/2 items-center space-y-16">
        <div className="flex flex-col gap-8 px-6 md:px-4  text-center md:text-left items-center md:items-start md:mt-6">
          <h1 className="text-[var(--Black)] md:text-7xl text-4xl font-semibold">
            Make remote work
          </h1>
          <p className="md:text-[18px] text-[16px] text-[var(--m-gray)] md:pr-6">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals and watch productivity soar.
          </p>
          <button className="bg-black text-white rounded-lg w-[30%] py-2 ">
            Learn More
          </button>
        </div>

        <div className="flex justify-around md:gap-14 gap-5">
          <img
            src="src\images\client-databiz.svg"
            alt="/"
            className="md:h-[25px] md:w-[75px] h-[20px] w-[60px]"
          />
          <img
            src="src\images\client-audiophile.svg"
            alt="/"
            className="md:h-[25px] md:w-[75px] h-[20px] w-[60px]"
          />
          <img
            src="src\images\client-meet.svg"
            alt="/"
            className="md:h-[25px] md:w-[75px] h-[20px] w-[60px]"
          />
          <img
            src="src\images\client-maker.svg"
            alt="/"
            className="md:h-[25px] md:w-[75px] h-[20px] w-[60px]"
          />
        </div>
      </div>
      <div className="md:w-1/2">
        <img
          src="src\images\image-hero-desktop.png"
          alt="/"
          className="h-[80vh] w-[80%] hidden md:flex"
        />
        <img
          src="src\images\image-hero-mobile.png"
          alt="/"
          className="m-img md:hidden"
        />
      </div>
    </div>
  );
};

export default Hero;
