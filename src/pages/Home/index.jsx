import classes from "./home.module.css";

import NavBar from "../../components/Navbar";
import BodyHome from "../../components/BodyHome";
import { useSelector } from "react-redux";
import { CurrentfeitoPaga } from "../../redux/feitoPagamentoSlice";
import FeitoPagamento from "../../components/Modals/ModalFeitoPagamento";
const Home = () => {
  const { CurrentfeitoPagamento } = useSelector(CurrentfeitoPaga);
  return (
    <>
      <div className={classes.Home_container}>
        <div className={classes.NavBar}>
          {CurrentfeitoPagamento === true ? <FeitoPagamento /> : null}
          <NavBar />
        </div>
        <div className={classes.BodyHome}>
          <BodyHome />
        </div>
      </div>
    </>
  );
};

export default Home;
