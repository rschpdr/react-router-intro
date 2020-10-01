import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";

function Greetings(props) {
  const [student, setStudent] = useState({ name: "", city: "" });

  const { name } = useParams();
  const history = useHistory();

  function handleDelete() {
    // Aqui iria a logica para deletar o documento to banco
    // Equivalente ao res.redirect do Express
    history.push("/about");
  }

  useEffect(() => {
    const currentStudent = props.students.filter(
      (student) => student.name === name
    );

    if (currentStudent.length) {
      setStudent(currentStudent[0]);
    }
  }, [props.students, name]);

  return (
    <div>
      <p>Student name: {student.name}</p>
      <p>Student live at: {student.city}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Greetings;
