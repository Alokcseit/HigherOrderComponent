import React from "react";
import UpdatedComponent from "./Hoc";
const Hovercounter = ({ count, incrementcount }) => {
  return (
    <div>
      <div onMouseOver={incrementcount}>hover on me {count} times</div>
    </div>
  );
};

export default UpdatedComponent(Hovercounter);
