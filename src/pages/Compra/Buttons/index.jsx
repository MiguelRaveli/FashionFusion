import { useDispatch, useSelector } from "react-redux";
import { selectedProductA } from "../../../redux/selectedProductSlice";
import classes from "./Buttons.module.css";
import { add_product, productsC } from "../../../redux/cartSlice";
import { Link } from "react-router-dom";
const Buttons = () => {
  const { selectedProductAtual } = useSelector(selectedProductA);
  const { productsCart } = useSelector(productsC);
  const dispatch = useDispatch();
  const HandleAddToCart = (imageUrl1, name, price, id) => {
    dispatch(
      add_product({ imageUrl1: imageUrl1, name: name, price: price, id: id })
    );
  };
  return (
    <>
      <div className={classes.Buttons}>
        <h3>
          {" "}
          <span>
            <h5>R$</h5> {selectedProductAtual.price.toFixed(2)}
          </span>
        </h3>
        <button
          className={classes.Add_to_cart}
          onClick={() => {
            HandleAddToCart(
              selectedProductAtual.imageUrl1,
              selectedProductAtual.name,
              selectedProductAtual.price,
              selectedProductAtual.id
            );
          }}
        >
          Adicionar ao Carrinho
        </button>
        <Link
          onClick={() => {
            if (
              productsCart.some(
                (product) => product.id === selectedProductAtual.id
              )
            ) {
              return;
            }
            HandleAddToCart(
              selectedProductAtual.imageUrl1,
              selectedProductAtual.name,
              selectedProductAtual.price,
              selectedProductAtual.id
            );
          }}
          to={"/carrinho"}
          className={classes.Comprar_agora}
        >
          Comprar Agora
        </Link>
      </div>
    </>
  );
};

export default Buttons;
