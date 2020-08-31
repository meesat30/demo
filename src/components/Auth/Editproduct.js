import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";


const Editproduct = () => {

  let history = useHistory();
  const { Id } = useParams();
  const [product, SetProduct] = useState({
    desc: "",
    categoryId: "",
    cost: ""


  }
  );
  useEffect(() => {
    loadProduct();
  }, []);

  const { desc, categoryId, cost } = product;
  const onInputChange = e => {
    console.log("start");
    console.log(e.target.value);
    console.log(e.target.type);
    console.log(e.target.name);
    console.log("end");


    SetProduct({ ...product, [e.target.name]: e.target.type === 'text' ? e.target.value : parseInt(e.target.value) })
    console.log("onchange");
    console.log(product);
  };

  const onSubmit = async e => {
    e.preventDefault();
    console.log("onupdateproduct");
    console.log(product);
    await axios.put(`http://localhost:5000/product/${Id}`, product);
    history.push("/product");
  };

  const loadProduct = async () => {
    const result = await axios.get(`http://localhost:5000/product/${Id}`);
    console.log('productedit');
    console.log(result.data);
    SetProduct(result.data);
  }

  const [category, SetCategory] = useState([]);

  useEffect(() => {
    loadCategory();
    console.log("UseEffect");
  }, []);

  const loadCategory = async () => {
    const result = await axios.get("http://localhost:5000/productcategory");
    SetCategory(result.data);
    console.log("updateproduct-loadCategory");

  };

  return (

    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Update Product</h2>
        <form onSubmit={e => onSubmit(e)}>

          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter New Description"
              name="desc"
              value={desc}
              onChange={e => onInputChange(e)}
              required
            />
          </div>
          <div class="form-group">
            <select class="form-control" name="categoryId" onChange={e => onInputChange(e)}>
              {category.map((item, index) => (
                <option value={item.categoryId}>{item.categoryName}</option>

              ))}
            </select>

          </div>

          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter New Cost"
              name="cost"
              value={cost}
              onChange={e => onInputChange(e)}
              required
            />
          </div>

          <button className="btn btn-primary btn-block">Update Product</button>
        </form>
      </div>
    </div>


  )

}

export default Editproduct;