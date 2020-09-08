import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointLeft } from "@fortawesome/free-solid-svg-icons";

const Viewcategory = () => {
  const [category, setCategory] = useState({
    categoryName: ""
  });
  const { Id } = useParams();
  useEffect(() => {
    loadcategory();
  }, []);
  const loadcategory = async () => {
    console.log(`http://localhost:5000/productcategory/${Id}`);
    const result = await axios.get(`http://localhost:5000/productcategory/${Id}`);
    console.log("View");
    console.log(result.data);
    setCategory(result.data);
  };
  return (
    <div className="container py-4">
      <div className="text-left">
        <Link className="btn" to="/category">
          <FontAwesomeIcon icon={faHandPointLeft} /> Back to Category
      </Link>
      </div>

      <div class="border row">
        <div class="border font-weight-bold col"><h3>Category Id: {Id}</h3></div>
      </div>
      <div class="border row">
        <div class="border font-weight-bold col-4">Categoy Name:</div>
        <div class="border col text-left">{category.categoryName}</div>
      </div>
    </div>
  );
};

export default Viewcategory;