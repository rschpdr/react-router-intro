import React from "react";

function Greetings(props) {
  console.log(props.match);

  return (
    <div>
      <p>Welcome to the Greetings page, {props.match.params.name}</p>
    </div>
  );
}

export default Greetings;
