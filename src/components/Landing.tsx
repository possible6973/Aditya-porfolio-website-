import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Visuals that</h2>
            <h1>
              STOP
              <br />
              <span>THE SCROLL.</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>Cinematographer &</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Video Editor</div>
              <div className="landing-h2-2">Colorist</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Video Editor</div>
              <div className="landing-h2-info-1">Colorist</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
