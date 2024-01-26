import Products from "../Products";
import PaginationControl from "../PaginationControl";

import classes from "./BodyHome.module.css";
import { useSelector } from "react-redux";
import { CurrentS } from "../../redux/searchSlice";
import { filter } from "../../redux/filterSlice";
const BodyHome = () => {
  const { CurrentSearch } = useSelector(CurrentS);
  const { filtroAtual } = useSelector(filter);
  return (
    <>
      <div className={classes.Body_container}>
        <Products />
        {CurrentSearch === null && filtroAtual === "geral" ? (
          <PaginationControl />
        ) : null}
      </div>
    </>
  );
};

export default BodyHome;
