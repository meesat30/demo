import React, {useState} from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
 

const Addcategory = () => {

    let history= useHistory();
    const [category,SetCategory]=useState({
        categoryName: ""

    }
    );

    const {categoryName }=category;
    const onInputChange= e =>{
        SetCategory({[e.target.name]:e.target.value})
       
    };

    const onSubmit= async e =>{
        e.preventDefault();
        await axios.post("http://localhost:5000/productcategory",category);
        history.push("/"); 
    };

    return (
        
        <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add Category</h2>
        <form  onSubmit={e=>onSubmit(e)}>
          
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter New Category"
              name="categoryName"
              value={categoryName}
              onChange={e => onInputChange(e)}
            />
          </div>
         
          <button className="btn btn-primary btn-block">Add Category</button>
        </form>
      </div>
    </div>
        

    )

}

export default Addcategory;