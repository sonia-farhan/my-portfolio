import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img
                src={require("../../assets/docs/img/woman.png")}
                alt="profile_pic"
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
                As a proficient full stack web developer, I possess
                comprehensive expertise in both front-end and back-end
                development. My skill set encompasses creating dynamic and
                responsive web applications, utilizing technologies such as
                HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB.
                With a strong foundation in designing user-friendly interfaces
                and robust server-side logic, I am dedicated to delivering
                seamless and efficient web solutions that meet client needs and
                enhance user experiences.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
