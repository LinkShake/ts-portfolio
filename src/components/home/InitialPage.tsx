import "../../style/InitialPage.css";
import { Menu } from "../global/menu/Menu";

export const InitialPage: React.FC = () => {
  const introductionText: string = "Hi! I'm Nicola Del Pio Luogo";

  return (
    <>
      <Menu />
      <div className="initial-page">
        <h1>{introductionText}</h1>
        <h2>
          I'm an Italian high-school student with a great passion for full-stack
          web development
        </h2>
      </div>
      <p className="sign" style={{ marginLeft: "10vw" }}>
        LinkShake
      </p>
    </>
  );
};
