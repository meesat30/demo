import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Viewproduct = () => {
  const [product, setProduct] = useState({
    desc:"",
    categoryId:"",
    cost:""
  });
  const { Id } = useParams();
  useEffect(() => {
    loadProduct();
  }, []);
  const loadProduct = async () => {
    console.log(`http://localhost:5000/product/${Id}`);
    const result = await axios.get(`http://localhost:5000/product/${Id}`);
    console.log("ViewProduct");
    console.log(result.data);
    setProduct(result.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/product">
        back to Product
      </Link>
      <h1 className="display-4">Product Id: {Id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">Desc {product.desc}</li>
        <li className="list-group-item">Categoy Name: {product.categoryId}</li>
        <li className="list-group-item">Cost {product.cost}</li>
      </ul>
    </div>
  );
};

export default Viewproduct;