import React from "react";

const Check = (props) => {
  let classes = "fa fa-check-circle";
  classes += props.check === false ? "-o" : "";
  return (
    <i
      onClick={props.onClick}
      style={{ cursor: "pointer" }}
      className={classes}
    ></i>
  );
};

export default Check;
