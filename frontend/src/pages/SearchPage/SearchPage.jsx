import React, { useContext, useEffect } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
// import AuthContext from "../../context/AuthContext";
// import useCustomForm from "../../hooks/useCustomForm";
import { Link } from "react-router-dom";
import "./SearchPage.css";


const SearchPage = () => {

  return (
    <div>
      <div>YouTube++ General Search Page</div>
       <div><SearchBar/></div>
    </div>
  );
};

export default SearchPage;
