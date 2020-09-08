import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../images/Intuitive_Surgical_logo.svg";
import { Navbar, Nav } from "react-bootstrap";


const CNavbar = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <div className="container">
                    <Link className="navbar-brand" exact to="/"><img className="App-logo" src={logo} alt="logo" /></Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <NavLink className="nav-link" exact to="/">Home</NavLink>
                            <NavLink className="nav-link" exact to="/category">Category</NavLink>
                            <NavLink className="nav-link" exact to="/product">Product</NavLink>
                        </Nav>

                        <Link className="btn btn-outline" exact to="/auth/add"> Add Category </Link>
                        <Link className="btn btn-outline" exact to="/auth/addproduct"> Add Product </Link>

                    </Navbar.Collapse>
                </div>
            </Navbar>




        </div>
        //Satish Responsive Nabar end.

    )
}
export default CNavbar;