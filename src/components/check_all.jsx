import React from "react";

const CheckAll = (props) => {
  let class1 = "fa fa-angle-double-down";
  let class2 = "fa fa-angle-down";
  let classes = props.check === false ? class1 : class2;
  return (
    <i
      onClick={props.onClick}
      style={{ cursor: "pointer" }}
      className={classes}
    ></i>
  );
};

export default CheckAll;
