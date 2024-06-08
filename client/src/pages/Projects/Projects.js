import React from "react";
import "./Projects.css";
import Spin from "react-reveal/Spin";
const Projects = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
          In my recent projects, I have successfully developed and deployed
          several dynamic web applications, showcasing my full stack development
          skills. These projects involved building responsive user interfaces
          using modern front-end frameworks like React  and
          implementing robust back-end solutions with Node.js, Express, and
          MongoDB. 
        </p>
        {/* card design */}
        <div className="row" id="ads">
          <Spin>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full stack</span>
                  <img
                    src="https://unctad.org/sites/default/files/2021-03/2021-03-15_eCommerceCOVID19report-1-1220x675px.jpg"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">react</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">
                      Anmol Sweets Bakers Website
                    </h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/sonia-farhan/full-stack.git"
                    target="-blank"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Frontend</span>
                  <img
                    src={require("../../assets/docs/img/frontend.avif")}
                    alt="project2"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">React.js</span>
                  <span className="card-detail-badge">Bootstrap</span>
                  <span className="card-detail-badge">MUI</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Golf</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/techinfo-youtube/ecommerce-app-2023"
                    target="-blank"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Frontend</span>
                  <img
                    src={require("../../assets/docs/img/frontend2.png")}
                    alt="project2"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">HTML</span>
                  <span className="card-detail-badge">Bootstrap</span>
                  <span className="card-detail-badge">CSS</span>
                  <span className="card-detail-badge">JavaScript</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">MindFull</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/sonia-farhan/mindfull.git"
                    target="-blank"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Group Work</span>
                  <img
                    src="https://www.nextwebi.com/assets/img/img-source/mobile-top-banner-28.png"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">React.js</span>
                  <span className="card-detail-badge">MUI</span>

                  <span className="card-detail-badge">Bootstrap</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Certificate</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/hasnat-fabtechsol/certificate.git"
                    target="-blank"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
          </Spin>
        </div>
      </div>
    </>
  );
};

export default Projects;
