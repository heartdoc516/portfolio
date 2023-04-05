import { useQuery, gql } from "@apollo/client";
import { motion } from "framer-motion";
import Spinner from "./Spinner";

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
    return <Spinner />;
  }

  if (error) {
    return <div className="text-white">error</div>;
  }

  return (
    <section
      className="relative px-4 bg-gradient-to-r from-slate-950/50 to-slate-800/0"
      id="about-section"
    >
      <div className="flex flex-col md:flex-row gap-10 justify-center container mx-auto mt-16 mb-32 py-10">
        <motion.div
          initial={{ opacity: 0, x: "-300px" }}
          animate={{ opacity: [0, 0.2, 0.3, 0.4, 1], x: 0 }}
          transition={{ delay: 2 }}
          className="relative w-1/2 mx-auto px-10 md:px-0 md:w-1/4"
        >
          <img src="../public/avatar.svg" alt="" className="mx-auto" />
          <div className="absolute -z-10 top-1/4 start-0 w-full h-2/3 avatar-gradient"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: "300px" }}
          animate={{ opacity: [0, 0.2, 0.3, 0.4, 1], x: 0 }}
          transition={{ delay: 2.4 }}
          className="w-full md:w-1/2 mx-auto"
        >
          <h2 className="text-white text-3xl font-bold tracking-widest mb-10 text-center">
            WHO I AM
          </h2>
          <p className="text-gray-400 leading-7 text-lg text-center md:text-left">
            {data.author.bio}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
