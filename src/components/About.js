import React from "react";
// Quando estamos usando o react-router, nao podemos usar tags <a></a>. Precisamos sempre fazer redirecionamentos através do componente Link abaixo
import { Link } from "react-router-dom";

function About(props) {
  return (
    <div>
      <h1>Hello! You're in the about page</h1>
      <p>Welcome to the about page, {props.name}</p>
      {/* O target=blank serve para abrir o link em uma nova aba */}
      <Link to="/">Go to homepage</Link>

      <h4>Click in the student's name to see where they live</h4>
      <ul>
        {props.students.map((student, i) => (
          <li key={i}>
            <Link to={`/greetings/${student.name}`}>{student.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default About;
