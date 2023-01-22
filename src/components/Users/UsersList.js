import React from "react";
import styled from "styled-components";

import Card from "../UI/Card";
import classes from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <UlStyle>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </UlStyle>
    </Card>
  );
};

export default UsersList;

const UlStyle = styled.div`
  list-style: none;
  padding: 1rem;

  li {
    border: 1px solid #ccc;
    margin: 0.5rem 0;
    padding: 0.5rem;
  }
`;
