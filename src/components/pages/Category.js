import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faEye } from "@fortawesome/free-solid-svg-icons";





const Category = () => {

  const [category, SetCategory] = useState([]);
  useEffect(() => {
    loadCategory();
    console.log("UseEffect");
  }, []);

  const loadCategory = async () => {
    const result = await axios.get("http://localhost:5000/productcategory");
    SetCategory(result.data);
    console.log("Home-loadCategory");
  }

  const deleteCategory = async id => {
    await axios.delete(`http://localhost:5000/productcategory/${id}`);
    loadCategory();
  }

  return (
    <div className="container">
      <div className="py-4">
        <h3 className="text-left mb-4">Category</h3>


        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Category Name</th>
              <th scope="col">Action</th>

            </tr>
          </thead>
          <tbody>
            {category.map((item, index) => (

              <tr>
                <th scope="row">{index+1}</th>
                <td>{item.categoryName}</td>
                <td>

                  <Link className="btn" exact to={`/auth/view/${item.categoryId}`}> <FontAwesomeIcon icon={faEye} color="blue" /></Link>
                  <Link className="btn" exact to={`/auth/edit/${item.categoryId}`} ><FontAwesomeIcon icon={faEdit} color="orange" /></Link>
                  <Link className="btn" onClick={() => deleteCategory(item.categoryId)}><FontAwesomeIcon icon={faTrash} color="Red" /></Link>
                </td>

              </tr>

            ))}


          </tbody>
        </table>



      </div>
    </div>


  )
}

export default Category;