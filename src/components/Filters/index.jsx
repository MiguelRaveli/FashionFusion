import { useSelector } from "react-redux";

import classes from "./Filters.module.css";

import ModalFilter from "./NameFilters";

import { CurrentS } from "../../redux/searchSlice";
import { selectedProductA } from "../../redux/selectedProductSlice";
const Filters = () => {
  const { CurrentSearch } = useSelector(CurrentS);
  const { selectedProductAtual } = useSelector(selectedProductA);
  return (
    <>
      <div className={classes.Filters_container}>
        {CurrentSearch === null && selectedProductAtual === null ? (
          <div className={classes.filters}>
            <ModalFilter
              option1="Calças"
              option2="Vestidos"
              option3="Calçados"
            />
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Filters;
