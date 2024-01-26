import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  close_cart,
  decrease_product_quantity,
  increase_product_quantity,
  productsC,
  remove_product,
} from "../../../redux/cartSlice";
import classes from "./ModalCart.module.css";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
const Cart = () => {
  const dispatch = useDispatch();
  const HandleCloseCart = () => {
    dispatch(close_cart());
    document.documentElement.style.overflow = "scroll";
  };

  const HandleRemoveClick = (id) => {
    dispatch(remove_product(id));
  };

  const HandleIncreaseClick = (id) => {
    dispatch(increase_product_quantity(id));
  };
  const HandleDecreaseClick = (id) => {
    dispatch(decrease_product_quantity(id));
  };
  const { productsCart } = useSelector(productsC);

  const productsTotalPrice = useMemo(() => {
    return productsCart.reduce(
      (acc, curr) => acc + curr.price * curr.quantity,
      0
    );
  }, [productsCart]);
  return (
    <div>
      <>
        <div className={classes.Cart_container}>
          <div className={classes.btn_close}>
            <button onClick={HandleCloseCart}>X</button>
          </div>
          <div className={classes.title}>
            <h1>Seu carrinho</h1>
            <h1>
              Preço Total: R$<span>{productsTotalPrice.toFixed(2)}</span>
            </h1>
            <Link to="/carrinho" className={classes.Comprar_agora}>
              Ir para o carrinho
            </Link>
          </div>
          {productsCart.length !== 0 ? (
            <div className={classes.products}>
              {productsCart.map((product, index) => {
                return (
                  <div className={classes.product} key={index}>
                    <div
                      style={{ backgroundImage: `url(${product.imageUrl1})` }}
                      className={classes.img}
                    ></div>
                    <div className={classes.info}>
                      <h1>{product.name}</h1>
                      <h3> R${product.price.toFixed(2)}</h3>
                      <div className={classes.plus_less}>
                        <h2 onClick={() => HandleDecreaseClick(product.id)}>
                          -
                        </h2>
                        <h2>{product.quantity}</h2>
                        <h2 onClick={() => HandleIncreaseClick(product.id)}>
                          +
                        </h2>
                      </div>
                      <h2>
                        {" "}
                        <FaTrash
                          onClick={() => HandleRemoveClick(product.id)}
                        />
                      </h2>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : null}
        </div>
      </>
    </div>
  );
};

export default Cart;
