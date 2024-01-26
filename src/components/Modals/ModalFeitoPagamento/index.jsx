import classes from "./ModalFeitoPagamento.module.css";
import { MdTransitEnterexit } from "react-icons/md";
import { FaRegSmileWink } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { desativarPagamento } from "../../../redux/feitoPagamentoSlice";
const FeitoPagamento = () => {
  const dispatch = useDispatch();
  const HandledesativarPagamentoClick = () => {
    dispatch(desativarPagamento());
  };
  return (
    <>
      <div className={classes.overlay}>
        <div className={classes.Container}>
          <div className={classes.Title}>
            <h1>
              Pedido Feito com Sucesso <br />
            </h1>
          </div>
          <div className={classes.thx}>
            <h1>Obrigado por nos escolher!</h1>
            <FaRegSmileWink />
          </div>
          <div className={classes.exit}>
            <button onClick={HandledesativarPagamentoClick}>Confirmar </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeitoPagamento;
