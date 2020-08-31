import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {

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
        <h1> Home Page</h1>

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
                <th scope="row">{item.categoryId}</th>
                <td>{item.categoryName}</td>
                <td>
                  <Link className="btn btn-primary mr-2" exact to={`/auth/view/${item.categoryId}`}>View</Link>
                  <Link className="btn btn-outline-primary mr-2" exact to={`/auth/edit/${item.categoryId}`} >Edit</Link>
                  <Link className="btn btn-danger mr-2" onClick={() => deleteCategory(item.categoryId)}>Delete</Link>
                </td>

              </tr>

            ))}


          </tbody>
        </table>



      </div>
    </div>


  )
}

export default Home;