import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Spinner from "./components/Spinner";
import { gql, useQuery } from "@apollo/client";

const GET_DATA = gql`
  query MyQuery {
    projects {
      demo
      demoPassword
      demoUsername
      description
      id
      name
      image {
        url
      }
      sourceCode
      skills {
        name
        skillLogo {
          url
        }
      }
    }
    skills {
      name
      id
      skillType
      skillLogo {
        url
      }
    }
    authors {
      bio
      intro
      id
      name
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_DATA);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return "error fetching data";
  }

  return (
    <>
      <div className="hero-gradient"></div>
      <div className="skills-gradient"></div>

      <Navbar />
      <Hero />
      <About author={data.authors[0]} />
      <Skills skills={data.skills} />
      <Projects projects={data.projects} />
      <Contact />
    </>
  );
}

export default App;
