import classes from "./ModalFilter.module.css";
import { useDispatch } from "react-redux";
import { select_filter } from "../../../redux/filterSlice";
import { IoMdArrowDropdown } from "react-icons/io";
const NameFilters = ({ option1, option2, option3 }) => {
  const dispatch = useDispatch();

  const handleItemClick = (filterType) => {
    switch (filterType) {
      case "calcas":
        dispatch(select_filter("calcas"));
        break;
      case "vestidos":
        dispatch(select_filter("vestidos"));
        break;
      case "sandalias":
        dispatch(select_filter("sandalias"));
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className={classes.ModalFilter_container}>
        <div className={classes.filters}>
          <h1 onClick={() => handleItemClick("calcas")}>
            {option1}
            <IoMdArrowDropdown />
          </h1>

          <h1 onClick={() => handleItemClick("vestidos")}>
            {option2}
            <IoMdArrowDropdown />
          </h1>

          <h1 onClick={() => handleItemClick("sandalias")}>
            {option3}
            <IoMdArrowDropdown />
          </h1>
        </div>
      </div>
    </>
  );
};

export default NameFilters;
