import "./App.css";
import ImageLinkForm from "./Components/imagelinkform/imagelinkform.componenent";
import Logo from "./Components/Logo/logo.component";
import ParticlesBg from "particles-bg";

import Navigation from "./Components/Navigation/navigation.component";
import Rank from "./rank/rank.component";
import { useState } from "react";

function App() {
  const [mainInput, setMainInput] = useState("");

  const onInputChange = (event) => {
    console.log(event.target.value);
    setMainInput(event.target.value);
  };

  const onSubmit = () => {
    console.log("click");
  };

  return (
    <div className="App">
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm
        onInputChange={onInputChange}
        value={mainInput}
        onSubmit={onSubmit}
      />
      <ParticlesBg type="cobweb" bg={true} num={200} />
    </div>
  );
}

export default App;
