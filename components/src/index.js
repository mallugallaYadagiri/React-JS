import React from "react";
import ReactDOM from "react-dom/client";
import ClassHeader from "./ClassComponents/ClassComponents";
import FuncHeader from "./FunctionComponents/FunctionComponents";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <h1>Class Components with Props:</h1>
    <ClassHeader name="Amar" age={20} YearOfBirth={2003} />
    <ClassHeader name="Akbar" age={30} YearOfBirth={1993} />
    <ClassHeader name="Anthony" age={28} YearOfBirth={1995} /> <hr />
    <h1>Functional Components with Props</h1>
    <FuncHeader name="Amar" age={20} YearOfBirth={2003} />
    <FuncHeader name="Akbar" age={30} YearOfBirth={1993} />
    <FuncHeader name="Anthony" age={28} YearOfBirth={1995} />
  </div>
);
