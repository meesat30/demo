import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faEye } from "@fortawesome/free-solid-svg-icons";

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
        console.log("delete product");
        console.log(id);
        await axios.delete(`http://localhost:5000/product/${id}`);
        loadProduct();
    }

    return (
        <div className="container">
            <div className="py-4">
                <h3 className="text-left mb-4">Product</h3>
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

                                <th scope="row">{index + 1}</th>
                                <td>{item.desc}</td>
                                <td>{item.productCategory.categoryName}</td>
                                <td>{item.cost}</td>
                                <td>
                                    <Link className="btn" exact to={`/auth/viewproduct/${item.productId}`}><FontAwesomeIcon icon={faEye} color="blue" /></Link>
                                    <Link className="btn" exact to={`/auth/editproduct/${item.productId}`} ><FontAwesomeIcon icon={faEdit} color="orange" /></Link>
                                    <Link className="btn" onClick={() => deleteProduct(item.productId)}><FontAwesomeIcon icon={faTrash} color="Red" /></Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    )

}
export default Product;