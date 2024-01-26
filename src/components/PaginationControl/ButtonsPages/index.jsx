import React from "react";
import { useDispatch } from "react-redux";
import { change_page } from "../../../redux/pagesSlice";
import controlPages from "../../../data/feminino/ControlPages";
import classes from "./ButtonsPages.module.css";
const ButtonsPages = () => {
  const dispatch = useDispatch();
  const HandleClick = (page) => {
    dispatch(change_page(page));
  };
  let pages = [];
  for (let i = 1; i <= controlPages.length; i++) {
    pages.push(
      <button onClick={() => HandleClick(i)} key={i}>
        {i}
      </button>
    );
  }

  return (
    <>
      <div className={classes.PaginationControlButtons}>{pages}</div>
    </>
  );
};

export default ButtonsPages;
