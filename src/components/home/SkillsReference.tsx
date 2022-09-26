import { Link } from "react-router-dom";
import ImagePath from "../../images/skills.gif";
import "../../style/Reference.css";
import "../../style/routes.css";
import "../../style/ContentWrapper.css";
import React from "react";

export const SkillsReference: React.FC = () => {
  return (
    <div className="reference">
      <h1>Skills</h1>
      <div className="content-wrapper">
        {/* <div className="gif-container">
          <img className="gif" src={ImagePath} alt="skills-gif"></img>
        </div> */}
        <div className="text-container">
          <p>
            This section is about every language/technology, I do know. As I
            said above my main passion is full-stack development so that's what
            you're mainly go to see in this section <strong>but</strong> I want
            to expand my horizons out of this 'bubble' exploring game dev and
            machine learning cause I think life is always learning new things.
            My favourite technology? ... I'd say React.js but the future is full
            of surprises!
          </p>
          <p>
            <i>
              "Stay hungry. Stay foolish" <strong>Steve Jobs</strong>
            </i>
          </p>
        </div>
      </div>
      <div className="route-container">
        <Link to="/skills" style={{ textDecoration: "none" }}>
          <button className="btn--route">More &rarr;</button>
        </Link>
      </div>
    </div>
  );
};
