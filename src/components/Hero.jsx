const Hero = () => {
  return (
    <section className="flex justify-center px-4" id="hero-section">
      <div className="text-center my-32">
        <h1 className="text-white">
          <div>
            <span className="font-thin text-5xl md:text-6xl">Francis </span>
            <span className="font-extrabold text-transparent text-7xl md:text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-600">
              PLANTE
            </span>
          </div>
          <div className="mb-10 text-2xl font-thin tracking-widest">
            Web Developper
          </div>
        </h1>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 rounded-full"
        >
          CONTACT
        </button>
      </div>
    </section>
  );
};

export default Hero;
