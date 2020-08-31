import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

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
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h1 className="display-4">Category Id: {Id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">Categoy Name: {category.categoryName}</li>
      </ul>
    </div>
  );
};

export default Viewcategory;