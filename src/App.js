import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Category from "./components/pages/Category";
import Home  from "./components/pages/Home";
import { BrowserRouter as Router,Route, Switch } from "react-router-dom";
import Notfound from "./components/pages/Notfound";
import Addcategory from "./components/Auth/Addcategory";
import Editcategory from "./components/Auth/Editcategory";
import Viewcategory from './components/Auth/Viewcategory';
import Product from "./components/pages/Product";
import Addproduct from "./components/Auth/Addproduct";
import Editproduct from "./components/Auth/Editproduct";
import Viewproduct from "./components/Auth/Viewproduct";
import CNavbar from "./components/layout/CNavbar";



function App() {
  

  return (
  
    <Router>
    <div className="App">
        <CNavbar/>
        <Switch>
        <Route exact path="/" component={Home}/>
          <Route exactpath="/category" component={Category}/>
          <Route exact path="/product" component={Product }/>
          <Route exact path="/auth/add" component={Addcategory}/>
          <Route exact path="/auth/edit/:Id" component={Editcategory}/>

          <Route exact path="/auth/view/:Id" component={Viewcategory}/>

          <Route exact path="/auth/addproduct" component={Addproduct}/>
          <Route exact path="/auth/editproduct/:Id" component={Editproduct}/>
          <Route exact path="/auth/viewproduct/:Id" component={Viewproduct}/>
          <Route component={Notfound}/>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
