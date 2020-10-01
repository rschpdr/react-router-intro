import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Homepage from "./Homepage";
import About from "./About";
import Greetings from "./Greetings";

function App() {
  return (
    <div>
      {/* Todas as rotas precisam estar dentro de um roteador, nesse caso, o BrowserRouter */}
      <BrowserRouter>
        {/* Componentes (ou tags JSX) fora de uma rota serāo renderizados em todas as rotas, como o header abaixo */}
        <header>I'm the header</header>
        {/* A prop path controla em qual rota o componente passado para a prop component vai ser renderizado */}
        {/* Usar component quando o componente a ser renderizado nāo receber props */}
        <Route exact path="/" component={Homepage} />
        {/* Usar render quando é preciso passar props */}
        <Route
          path="/about"
          render={() => {
            return <About name="Pedro" />;
          }}
        />
        {/* Rota para demonstrar parametros de rota no React Router */}
        <Route path="/greetings/:name" component={Greetings} />
      </BrowserRouter>
    </div>
  );
}

export default App;
