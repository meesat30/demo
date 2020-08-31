import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const Product = () => {

    const [product, SetProduct] = useState([]);
    useEffect(() => {
        loadProduct();
        console.log("Useeffect");
    }, []);

    const loadProduct = async () => {
        const result = await axios.get("http://localhost:5000/product");
        console.log(result);
        console.log(result.data);
        SetProduct(result.data);
        console.log("product-loadproduct");
    }

    const deleteProduct = async id => {
        await axios.delete(`http://localhost:5000/product/${id}`);
        loadProduct();
    }

    return (
        <div className="container">
            <h1>Product Page</h1>
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Description</th>
                        <th scope="col">Category</th>
                        <th scope="col">Cost</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {product.map((item, index) => (
                        <tr>

                            <th scope="row">{item.productid}</th>
                            <td>{item.desc}</td>
                            <td>{item.productCategory.categoryName}</td>
                            <td>{item.cost}</td>
                            <td>
                                <Link className="btn btn-primary mr-2" exact to={`/auth/viewproduct/${item.productid}`}>View</Link>
                                <Link className="btn btn-outline-primary mr-2" exact to={`/auth/editproduct/${item.productid}`} >Edit</Link>
                                <Link className="btn btn-danger mr-2" onClick={() => deleteProduct(item.productid)}>Delete</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    )

}
export default Product;