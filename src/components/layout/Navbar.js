import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
    

      
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">DemoApp</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>


          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                 <NavLink className="nav-link" exact to="/">Home </NavLink>
              </li>
              <li className="nav-item">
              <NavLink className="nav-link" exact to="/product">Product</NavLink>
              </li>
              
            </ul>
           
              
            <Link  className="btn btn-outline-success my-2 my-sm-0" exact to="/auth/add">Add Category</Link>
            <Link  className="btn btn-outline-success my-2 my-sm-0" exact to="/auth/addproduct">Add Product</Link>
          </div>
          </div>
        </nav>
      
    </div>
    //Satish Responsive Nabar end.

  )
}
export default Navbar;