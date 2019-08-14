import React from "react";
import Instructions from "./components/Instructions";
import Scoreboard from "./components/Scoreboard";
import Game from "./components/Game";
import NavBar from "./components/NavBar";
import Container from "./components/Container";

function App() {
  return (
    <div>
      <NavBar/>
      <Container>
      <Scoreboard/>
      <Instructions/>
      <Game />
      </Container>
    </div>
  );
}

export default App;