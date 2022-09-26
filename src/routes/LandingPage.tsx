import { Fragment } from "react";
import { Link } from "react-router-dom";
import "../style/LandingPage.css";

export const LandingPage: React.FC = () => {
  const html = "<p>Hello world!</p>";
  return (
    <Fragment>
      <div className="landing-page">
        <span>Born to discover</span>
        <p style={{ top: "10vh", left: "10vw", color: "yellow" }}>
          console.log("Hello world!")
        </p>
        <p style={{ top: "20vh", right: "10vw", color: "blueviolet" }}>
          Console.WriteLine("Hello world!")
        </p>
        <p style={{ top: "80vh", left: "10vw", color: "darkorange" }}>
          println!("Hello world!")
        </p>
        <p style={{ top: "70vh", right: "10vw", color: "mediumseagreen" }}>
          {html}
        </p>
      </div>
      <Link to="/home" className="explore-route">
        explore
      </Link>
    </Fragment>
  );
};
