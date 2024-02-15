import React from "react";
import UpdatedComponent from "./Hoc";
function Clickcounter({ incrementcount, count, color }) {
  return (
    <div>
      <button style={{ backgroundColor: color }} onClick={incrementcount}>
        click{count}times
      </button>
    </div>
  );
}

export default UpdatedComponent(Clickcounter);
