import React from "react";
import classes from "./PaginationControl.module.css";
import ButtonsPages from "./ButtonsPages";
const PaginationControl = () => {
  return (
    <>
      <div className={classes.PaginationControl_container}>
        <div className={classes.PaginationControlButtons}>
         <ButtonsPages/>
        </div>
      </div>
    </>
  );
};

export default PaginationControl;
