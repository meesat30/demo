import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointLeft } from "@fortawesome/free-solid-svg-icons";



const Viewproduct = () => {
  const [product, setProduct] = useState({
    desc: "",
    categoryId: "",
    cost: ""
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
      <div className="text-left">
        <Link className="btn" to="/product">
          <FontAwesomeIcon icon={faHandPointLeft} /> Back to product
      </Link>
      </div>
      <div class="border row">
        <div class="border font-weight-bold col"><h3>Product Id: {Id}</h3></div>

      </div>
      <div class="border row">
        <div class="border font-weight-bold col-4">Product Description</div>
        <div class="border col text-left">{product.desc}</div>
      </div>
      <div class="border row">
        <div class="border font-weight-bold col-4">Product Categoy Id</div>
        <div class="border col text-left">{product.categoryId}</div>
      </div>
      <div class="border row">
        <div class="border font-weight-bold col-4">Cost</div>
        <div class="border col text-left">{product.cost}</div>
      </div>

    </div>
  );
};

export default Viewproduct;