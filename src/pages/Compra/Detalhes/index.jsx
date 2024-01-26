import classes from "./Detalhes.module.css";
import Mini_Imagens from "../Mini_Imagens";
import { selectedProductA } from "../../../redux/selectedProductSlice";
import { useSelector } from "react-redux";

const Detalhes = () => {
  const { selectedProductAtual } = useSelector(selectedProductA);
  return (
    <>
      <div className={classes.info_product}>
        <h2>{selectedProductAtual.name}</h2>
        <h3>
          {" "}
          <span>Por :</span> R${selectedProductAtual.price.toFixed(2)}
        </h3>
        <div className={classes.Detalhes_do_produto}>
          <h2>Detalhes do Produto:</h2>
          {selectedProductAtual.Cor && (
            <p> - Cor: {selectedProductAtual.Cor}</p>
          )}
          {selectedProductAtual.Tipo_de_Material && (
            <p> - Tipo de Material: {selectedProductAtual.Tipo_de_Material}</p>
          )}

          {selectedProductAtual.Tamanho && (
            <div className={classes.Tamanho}>
              <p> - Tamanho: </p>
              <select>
                {selectedProductAtual.Tamanho.map((tamanho) => {
                  return <option value="">{tamanho}</option>;
                })}
              </select>
            </div>
          )}
        </div>
        <Mini_Imagens />
      </div>
    </>
  );
};

export default Detalhes;
