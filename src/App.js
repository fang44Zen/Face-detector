import "./App.css";
import ImageLinkForm from "./Components/imagelinkform/imagelinkform.componenent";
import Logo from "./Components/Logo/logo.component";
import ParticlesBg from "particles-bg";

import Navigation from "./Components/Navigation/navigation.component";
import Rank from "./rank/rank.component";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      <ParticlesBg type="cobweb" bg={true} num={200} />
    </div>
  );
}

export default App;
