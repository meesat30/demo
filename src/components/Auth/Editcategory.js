import React, {useState,useEffect} from "react";
import axios from "axios";
import {useHistory,useParams} from "react-router-dom";

const Editcategory =() =>{


        let history= useHistory();
        const{Id}=useParams();
        const [category,SetCategory]=useState({
            categoryid:"",
            categoryName: ""
    
        }
        );
        useEffect(()=>{
            loadCategory();
        },[]);
    
        const {categoryName }=category;
        const onInputChange= e =>{
            SetCategory({...category,[e.target.name]:e.target.value});
           
        };
    
        const onSubmit= async e =>{
            e.preventDefault();
            console.log('update');
             
           var status= await axios.put(`http://localhost:5000/productcategory/${Id}`,category);
           console.log(status);
            history.push("/category"); 
        };

        const loadCategory= async ()=>{
            const result= await axios.get(`http://localhost:5000/productcategory/${Id}`);
            console.log('edit');
            console.log(result.data);
            SetCategory(result.data);
        }
    return(

        <div className="container">
        <div className="w-75 mx-auto shadow p-5">
        <h3 className="text-left mb-4">Edit Category</h3>
          <form  onSubmit={e=>onSubmit(e)}>
            
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter New Category"
                name="categoryName"
                value={categoryName}
                onChange={e => onInputChange(e)}
                required

              />
            </div>
           
            <button className="btn btn-primary btn-block">Update Category</button>
          </form>
        </div>
      </div>

    )
}

export default Editcategory;