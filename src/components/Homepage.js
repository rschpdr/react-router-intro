import React from "react";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div>
      <h1>Hello! You're in the homepage</h1>
      <Link to="/about">Go to About page</Link>
    </div>
  );
}

export default Homepage;
