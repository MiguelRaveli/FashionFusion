import React, { useMemo } from "react";
import classes from "./Carrinho.module.css";
import NavBar from "../../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import {
  decrease_product_quantity,
  delete_cart,
  increase_product_quantity,
  productsC,
  remove_product,
} from "../../redux/cartSlice";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ativarPagamento } from "../../redux/feitoPagamentoSlice";
const Carrinho = () => {
  const dispatch = useDispatch();

  const HandleFinalizarPedidoClick = () => {
    dispatch(ativarPagamento());
    dispatch(delete_cart());
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
  const productsCount = useMemo(() => {
    return productsCart.reduce((acc, curr) => acc + curr.quantity, 0);
  }, [productsCart]);
  return (
    <>
      <NavBar />
      <div className={classes.Container_carrinho}>
        <div className={classes.carrinho}>
          <div className={classes.title}>
            {productsCart.length !== 0 ? (
              <h1>Carrinho de Compras</h1>
            ) : (
              <h1>Seu carrinho de compras está vazio.</h1>
            )}
          </div>
          <div className={classes.produtos}>
            {productsCart.map((product, index) => {
              return (
                <div className={classes.product} key={index}>
                  <div
                    style={{ backgroundImage: `url(${product.imageUrl1})` }}
                    className={classes.img}
                  ></div>
                  <div className={classes.info}>
                    <h1>{product.name}</h1>
                    <h3> R${product.price}</h3>
                    <div className={classes.plus_less}>
                      <h2 onClick={() => HandleDecreaseClick(product.id)}>-</h2>
                      <h2>{product.quantity}</h2>
                      <h2 onClick={() => HandleIncreaseClick(product.id)}>+</h2>
                      <h2>
                        {" "}
                        <FaTrash
                          onClick={() => HandleRemoveClick(product.id)}
                        />
                      </h2>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={classes.subtotal}>
            {productsCount > 1 ? (
              <h1>
                {" "}
                Subtotal ({productsCount} produtos):
                <strong> R$ {productsTotalPrice.toFixed(2)}</strong>
              </h1>
            ) : (
              <h1>
                {" "}
                Subtotal ({productsCount} produto):
                <strong> R$ {productsTotalPrice.toFixed(2)}</strong>
              </h1>
            )}
          </div>
        </div>
        <div className={classes.fechar_pedido}>
          {productsCount > 1 ? (
            <h1>
              {" "}
              Subtotal ({productsCount} produtos): <br></br>
              <strong> R$ {productsTotalPrice.toFixed(2)}</strong>
            </h1>
          ) : (
            <h1>
              {" "}
              Subtotal ({productsCount} produto):<br></br>
              <strong> R$ {productsTotalPrice}</strong>
            </h1>
          )}
          <Link onClick={HandleFinalizarPedidoClick} to="/">
            Finalizar Pedido
          </Link>
        </div>
      </div>
    </>
  );
};

export default Carrinho;
