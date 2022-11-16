import Tilt from "react-parallax-tilt";
import "./logo.css";
import brain from "./brain.png";

const Logo = () => {
  return (
    <div className="ma4 mt0 uwu" style={{ height: "150", width: "150px" }}>
      <Tilt>
        <div className="br2 shadow-2" style={{}}>
          <div className="p-3">
            <img src={brain} alt="brain logo" />
          </div>
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
