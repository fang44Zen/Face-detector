import Tilt from "react-parallax-tilt";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt>
        <div
          className="br2 shadow-2"
          style={{ height: "150px", width: "150px" }}
        >
          <h1>React Parallax Tilt 👀</h1>
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
