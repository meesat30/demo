import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";




const Addproduct = () => {

    let history = useHistory();
    const [product, SetProduct] = useState({
        Desc: "",
        CategoryId: "",
        Cost: ""

    }
    );
    const [category, SetCategory] = useState([]); 

    const loadCategory = async () => {
        const result = await axios.get("http://localhost:5000/productcategory");
        SetCategory(result.data);
        console.log("loadCategory On add Product");

    };

    useEffect(() => {
        loadCategory();
        console.log("UseEffect");
    }, []);

  

    const { Desc, CategoryId, Cost } = product;


    const onInputChange = e => {
        console.log(e.target.value);
        SetProduct({ ...product, [e.target.name]: e.target.type === 'text' ? e.target.value : parseInt(e.target.value) })
    };

    const onSubmit = async e => {
        e.preventDefault();
        await axios.post("http://localhost:5000/product", product);
        history.push("/product");
    };




    return (


        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
            <h3 className="text-left mb-4">Add Product</h3>
                <form onSubmit={e => onSubmit(e)}>

                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Description"
                            name="Desc"
                            value={Desc}
                            onChange={e => onInputChange(e)}
                            required
                        />
                    </div>
                  
                    <div className="form-group">
                        <select className="form-control form-control-lg" name="CategoryId" onChange={e => onInputChange(e)} required>
                         <option  value="">Select Category</option>
                            {category.map((item, index) => (
                                <option key={item.categoryId} value={item.categoryId}>{item.categoryName}</option>
                                
                        ))}
                        </select>

                    </div>
                    <div className="form-group">
                        <input
                            type="number"
                            className="form-control form-control-lg"
                            placeholder="Enter Cost"
                            name="Cost"
                            value={Cost}
                            onChange={e => onInputChange(e)}
                            required
                        />
                    </div>

                    <button className="btn btn-primary btn-block">Add Product</button>
                </form>
            </div>
        </div>


    );

}

export default Addproduct;