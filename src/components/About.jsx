const About = () => {
  return (
    <section className="relative px-4" id="about-section">
      <div className="flex flex-col md:flex-row gap-10 justify-center container mx-auto my-32">
        <div className="relative w-full mx-auto px-10 md:px-0 md:w-1/3">
          <img src="../public/avatar.svg" alt="" className="mx-auto" />
          <div className="absolute -z-10 top-1/4 start-0 w-full h-2/3 avatar-gradient"></div>
        </div>

        <div className="w-full md:w-1/2 mx-auto">
          <h2 className="text-white text-3xl font-bold tracking-widest mb-10 text-center">
            ABOUT ME
          </h2>
          <p className="text-white text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            aliquid iure aut natus vitae ad porro repellat a culpa autem! Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Quisquam aperiam
            commodi, ratione eos iste laudantium assumenda iure ducimus qui
            quaerat quam modi vitae cupiditate dolor, corrupti tenetur!
            Accusantium, sequi nulla! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Doloribus in dignissimos voluptates incidunt sed
            dolorum, sapiente labore cumque? Laudantium quos laborum placeat?
            Maiores molestias necessitatibus rerum. Numquam atque perferendis
            in?
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
