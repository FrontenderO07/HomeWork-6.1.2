import React, { useRef, useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

import styled from "styled-components";

const AddUser = (props) => {
  // const [enteredUsername, setEnteredUsername] = useState("");
  // const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();
  const userNameRef = useRef();
  const ageRef = useRef();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = userNameRef.current.value;
    const enteredAge = ageRef.current.value;
    if (enteredAge.trim().length === 0 || enteredName.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+ageRef < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    props.onAddUser(enteredName, enteredAge);
    // setEnteredUsername("");
    // setEnteredAge("");

    userNameRef.current.value = "";
    ageRef.current.value = "";
  };

  const usernameChangeHandler = (event) => {
    return event.target.value;
  };

  const ageChangeHandler = (event) => {
    return event.target.value;
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className="input">
        <form onSubmit={addUserHandler}>
          <LabelStyle htmlFor="username">Username</LabelStyle>
          <InputStyle
            id="username"
            type="text"
            ref={userNameRef}
            onChange={usernameChangeHandler}
          />
          <LabelStyle htmlFor="age">Age (Years)</LabelStyle>
          <InputStyle
            id="age"
            type="number"
            ref={ageRef}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;

const InputStyle = styled.input`
  font: inherit;
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  padding: 0.15rem;
  margin-bottom: 0.5rem;

  :focus {
    outline: none;
    border-color: #4f005f;
  }
`;
const LabelStyle = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;
