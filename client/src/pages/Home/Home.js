import React from "react";
import { useTheme } from "../../context/ThemeContext";
import Typewriter from "typewriter-effect";
import Resume from "../../assets/SoniaCV.pdf";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import "./home.css";
import Fade from "react-reveal/Fade";

const Home = () => {
  const [theme, setTheme] = useTheme();
  //handle theme
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };
  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="theme-btn" onClick={handleTheme}>
          {theme === "light" ? (
            <BsFillMoonStarsFill size={30} />
          ) : (
            <BsFillSunFill size={30} />
          )}
        </div>
        <div className="container home-content">
          <Fade right>
            <h2>Hi 👋 I'm a Sonia Rani</h2>
            <h1>
              <Typewriter
                options={{
                  strings: [
                    "FullStack Developer!",
                    "Mern Stack Developer!",
                    "React.js developer!",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </Fade>
          <Fade bottom>
            <div className="home-buttons d-flex flex-lg-row flex-md-row flex-column align-items-start justify-conten-start">
              <a
                className="btn btn-hire "
                href="https://api.whatsapp.com/send?phone=3046104252"
                rel="noreferrer"
                target="_blank"
              >
                Hire Me
              </a>
              <a className="btn btn-cv w-auto mt-2 mt-lg-0 mt-md-0" href={Resume} download="resume.pdf">
                My Resume
              </a>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Home;
