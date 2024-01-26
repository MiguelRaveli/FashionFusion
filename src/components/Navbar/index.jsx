import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";

import { IoBagHandle } from "react-icons/io5";

import { FaShoppingCart } from "react-icons/fa";

import { back_to_geral } from "../../redux/filterSlice";
import { useDispatch, useSelector } from "react-redux";
import { cart, open_cart, productsC } from "../../redux/cartSlice";
import Cart from "../Modals/ModalCart";
import SearchBar from "../SearchBar";
import Filters from "../Filters";
import { clean_search } from "../../redux/searchSlice";
import { selected_product } from "../../redux/selectedProductSlice";
import { useMemo } from "react";
const NavBar = () => {
  const dispatch = useDispatch();
  const OverLayCart = () => {
    document.documentElement.style.overflow = "hidden";
  };
  const { productsCart } = useSelector(productsC);
  const HandleClickBackGeral = () => {
    dispatch(back_to_geral());
    dispatch(clean_search());
    dispatch(selected_product(null));
  };

  const HandleClickCart = () => {
    dispatch(open_cart());
    OverLayCart();
  };

  const productsCount = useMemo(() => {
    return productsCart.reduce((acc, curr) => acc + curr.quantity, 0);
  }, [productsCart]);
  const { cartAtual } = useSelector(cart);
  return (
    <>
      {cartAtual ? (
        <div className={classes.CartModal}>
          {" "}
          <Cart />
        </div>
      ) : null}
      <div className={classes.Navbar_container}>
        <Link to="/" onClick={HandleClickBackGeral} className={classes.title} />
        <SearchBar />
        <div className={classes.cart_e_login}>
          <div className={classes.cart}>
            <FaShoppingCart onClick={HandleClickCart} />
            <h1>({productsCount})</h1>
          </div>
        </div>
      </div>
      <Filters />
    </>
  );
};

export default NavBar;
