import "./App.css";
import Clarifai from "clarifai";
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
    let app = new Clarifai.App({
      apiKey: '6950ded4e8154ad892ab26f4a7989bf1"',
    });
    console.log("click");
    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL,
        // THE JPG
        "https://i.insider.com/5d321d4ea209d3146d650b4a?width=1100&format=jpeg&auto=webp"
      )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
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
