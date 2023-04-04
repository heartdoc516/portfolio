import { useQuery, gql } from "@apollo/client";

const GET_BIO = gql`
  query GET_BIO {
    author(where: { name: "Francis Plante" }) {
      bio
    }
  }
`;

const About = () => {
  const { loading, error, data } = useQuery(GET_BIO);

  if (loading) {
    return <div className="text-white">loading...</div>;
  }

  if (error) {
    return <div className="text-white">error</div>;
  }

  return (
    <section className="relative px-4" id="about-section">
      <div className="flex flex-col md:flex-row gap-10 justify-center container mx-auto my-32">
        <div className="relative w-full mx-auto px-10 md:px-0 md:w-1/3">
          <img src="../public/avatar.svg" alt="" className="mx-auto" />
          <div className="absolute -z-10 top-1/4 start-0 w-full h-2/3 avatar-gradient"></div>
        </div>

        <div className="w-full md:w-1/2 mx-auto">
          <h2 className="text-white text-3xl font-bold tracking-widest mb-10 text-center">
            WHO I AM
          </h2>
          <p className="text-white text-center">{data.author.bio}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
