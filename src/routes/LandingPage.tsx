import { Fragment } from "react";
import { Link } from "react-router-dom";
import "../style/LandingPage.css";

export const LandingPage: React.FC = () => {
  return (
    <Fragment>
      <div className="landing-page">
        <div className="infinite"></div>
        {/* <span>Born to discover</span> */}
      </div>
      <Link
        to="/home"
        className="explore-route"
        style={{ width: "100vw", display: "flex", justifyContent: "center" }}
      >
        explore
      </Link>
    </Fragment>
  );
};
