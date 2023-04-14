import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Spinner from "./components/Spinner";
import { gql, useQuery } from "@apollo/client";
import { LanguageProvider } from "../lib/LanguageContext";

const GET_DATA = gql`
  query MyQuery {
    projects {
      demo
      demoPassword
      demoUsername
      description
      descriptionFrench
      id
      name
      nameFrench
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
      bioFrench
      picture {
        url
      }
      logo {
        url
      }
      resumeEnglish {
        url
      }
      resumeFrench {
        url
      }
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
      <LanguageProvider>
        <div className="hero-gradient hidden lg:block"></div>
        <div className="skills-gradient hidden lg:block"></div>

        <Navbar author={data.authors[0]} />
        <Hero author={data.authors[0]} />
        <About author={data.authors[0]} />
        <Skills skills={data.skills} />
        <Projects projects={data.projects} />
        <Contact author={data.authors[0]} />
      </LanguageProvider>
    </>
  );
}

export default App;
