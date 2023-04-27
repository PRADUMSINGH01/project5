import React from "react";
import "./aboutus.css";
import img from "./6. Logotype/img5.svg";
const AboutUs = () => {
  return (
    <div className="aboutus" id="aboutus">



      <div className="aboutus__one">
        <img src={img} alt="" width={300}/>
      </div>

      <div className="about__two">
        <div className="about__two__aboutus">
            <p>
            aboutUs

            </p>
        </div>
        <div className="aboutus__two__headline">
          <h1>Faster, friendlier feedback loops make life easier.</h1>
        </div>
        <div className="aboutus__two__para">
          <p>
            Add a Viewer to your team so they can see everything you share, or
            invite people to individual documents. It’s up to you. Stakeholders
            can check out designs in their web browser, test prototypes and
            leave feedback for free.
          </p>
        </div>
        <div className="aboutus__two__point">
            <li>Shared Cloud Libraries, for a single source of truth</li>
            <li>Prototype previews for user testing and research</li>
            <li>Easy organization with projects</li>
            <li>Free developer handoff, right inside the browser</li>
            <li>Two-factor authentication and SSO</li>

        </div>
      </div>
    </div>
  );
};

export default AboutUs;
