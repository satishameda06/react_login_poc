import React from "react";
import   './Person.css'
const person = props => {
  return (
    <div className="Person">
      <h1>
        Am person {props.name} age is {props.age}
      </h1>
      <div>{props.children}</div>
      <div>
          <input onChange={props.changeHandler}></input>
      </div>
    </div>
  );
};
export default person;
