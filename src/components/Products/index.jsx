import classes from "./Products.module.css";
import { useDispatch, useSelector } from "react-redux";
import { filter } from "../../redux/filterSlice";
import controlPages from "../../data/feminino/ControlPages";
import calcas_femininas from "../../data/feminino/roupas/calcas";
import vestidos_femininos from "../../data/feminino/roupas/vestidos";
import sandalias from "../../data/feminino/calcados/sandalia";
import { selected_product } from "../../redux/selectedProductSlice";
import { CurrentP } from "../../redux/pagesSlice";
import { CurrentS, clean_search } from "../../redux/searchSlice";
import { Link } from "react-router-dom";
import { change_image } from "../../redux/imageSlice";
const Products = () => {
  const dispatch = useDispatch();

  const { filtroAtual } = useSelector(filter);

  const HandleClickAddProduct = (
    imageUrl1,
    imageUrl2,
    imageUrl3,
    imageUrl4,
    name,
    price,
    id,
    Cor,
    Tamanho,
    Tipo_de_Material
  ) => {
    dispatch(
      selected_product({
        imageUrl1: imageUrl1,
        imageUrl2: imageUrl2,
        imageUrl3: imageUrl3,
        imageUrl4: imageUrl4,
        name: name,
        price: price,
        id: id,
        Cor: Cor,
        Tamanho: Tamanho,
        Tipo_de_Material: Tipo_de_Material,
      })
    );
    dispatch(clean_search());
  };

  const HandleChangeImg = (img) => {
    dispatch(change_image(img));
  };
  const { CurrentPage } = useSelector(CurrentP);
  const renderProducts = (products) => {
    return products.map((product) => (
      <div className={classes.product} key={product.id}>
        <div
          style={{
            backgroundImage: `url(${product.imageUrl1})`,
          }}
          className={classes.img}
        ></div>
        <div className={classes.title_product}>
          <Link
            to={"/compra"}
            onClick={() => {
              HandleClickAddProduct(
                product.imageUrl1,
                product.imageUrl2,
                product.imageUrl3,
                product.imageUrl4,
                product.name,
                product.price,
                product.id,
                product.Cor,
                product.Tamanho,
                product.Tipo_de_Material
              ),
                HandleChangeImg(product.imageUrl1);
            }}
          >
            {product.name}
          </Link>
          <h2>R${product.price.toFixed(2)}</h2>
        </div>
      </div>
    ));
  };

  let productsToRender;
  const { CurrentSearch } = useSelector(CurrentS);
  if (CurrentSearch !== null) {
    productsToRender = renderProducts(CurrentSearch);
  } else {
    switch (filtroAtual) {
      case "geral":
        productsToRender = renderProducts(controlPages[CurrentPage - 1].page);
        break;
      case "calcas":
        productsToRender = renderProducts(calcas_femininas);
        break;
      case "vestidos":
        productsToRender = renderProducts(vestidos_femininos);
        break;
      case "sandalias":
        productsToRender = renderProducts(sandalias);
        break;
      default:
        productsToRender = null;
    }
  }
  return (
    <div className={classes.Products_container}>
      <div className={classes.products}>{productsToRender}</div>
    </div>
  );
};

export default Products;
