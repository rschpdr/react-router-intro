import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Homepage from "./Homepage";
import About from "./About";
import Greetings from "./Greetings";

const students = [
  { name: "Pedro", city: "Brasília" },
  { name: "Filipe", city: "Caraguatatuba" },
  { name: "Arthur", city: "SP" },
  { name: "Daniel", city: "SP" },
  { name: "Aruā", city: "SP" },
  { name: "Carolina", city: "RJ" },
  { name: "Camila", city: "SP" },
  { name: "Yordan", city: "Moc" },
  { name: "Victor", city: "Itupeva" },
  { name: "Rubem", city: "Toronto" },
  { name: "Julia", city: "Garopaba" },
  { name: "Pedro R.", city: "Indaiatuba" },
];

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
            return <About students={students} name="Pedro" />;
          }}
        />
        {/* Rota para demonstrar parametros de rota no React Router */}
        <Route
          path="/greetings/:name"
          render={() => {
            return <Greetings students={students} />;
          }}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
