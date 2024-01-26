import React from "react";
import classes from "./Compra.module.css";
import { useSelector } from "react-redux";

import NavBar from "../../components/Navbar";

import { CurrentI } from "../../redux/imageSlice";
import Detalhes from "./Detalhes";

import Buttons from "./Buttons";
import ProductsBelow from "../../components/ProductsBelow";
const Compra = () => {
  const { CurrentImage } = useSelector(CurrentI);

  return (
    <>
      <NavBar />
      <div className={classes.Compra_container}>
        <div className={classes.product}>
          <div className={classes.Container_img}>
            <div
              style={{
                backgroundImage: `url(${CurrentImage})`,
              }}
              className={classes.img}
            ></div>
          </div>
          <Detalhes />
          <Buttons />
        </div>
        <ProductsBelow />
      </div>
    </>
  );
};

export default Compra;
