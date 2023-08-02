import React from "react";
import { ThemeProvider } from "styled-components";
import { temaClaro, temaEscuro } from "./Components/UI/temas";
import { useState } from "react";

import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import { EstilosGlobais } from "./Components/EstilosGlobais";
import { BtnTema } from "./Components/UI";
import SwTema from "./Components/SwTema";

function App() {

  const [tema, setTema] = useState(true);

  const toggleTema = () => {
    setTema((tema) => !tema)
  }

  return (
    <>
    <ThemeProvider theme={tema ? temaClaro : temaEscuro}>
      <EstilosGlobais />
      <BtnTema onClick={toggleTema}>
        <SwTema tema={tema}/>
      </BtnTema>
      <Cabecalho />
      <Container />
    </ThemeProvider>
    </>
  );
}

export default App;
