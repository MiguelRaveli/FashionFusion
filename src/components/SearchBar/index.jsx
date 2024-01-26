import React, { useState } from "react";
import classes from "./SearchBar.module.css";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  CurrentS,
  search_product,
} from "../../redux/searchSlice";

import Geral from "../../data/Geral";
import { Navigate } from "react-router-dom";
const SearchBar = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState(String);
  const { CurrentSearch } = useSelector(CurrentS);
  const HandleSearch = () => {
    const filter = Geral.filter((e) =>
      e.name.includes(search.charAt(0).toUpperCase() + search.slice(1))
    );
    dispatch(search_product(filter));
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      const filter = Geral.filter((e) =>
        e.name.includes(search.charAt(0).toUpperCase() + search.slice(1))
      );
      dispatch(search_product(filter));
    }
  };
  return (
    <>
      <div className={classes.searchBar}>
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Buscar..."
          onKeyDown={handleKeyDown}
        />
        <FaSearch onClick={HandleSearch} />
      </div>
      {CurrentSearch !== null ? <Navigate to="/" /> : null}
    </>
  );
};

export default SearchBar;
