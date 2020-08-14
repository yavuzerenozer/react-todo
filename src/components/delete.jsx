import React from "react";

const Delete = (props) => {
  return (
    <i
      onClick={props.onClick}
      style={{ cursor: "pointer" }}
      className="fa fa-times"
    ></i>
  );
};

export default Delete;
