import React from "react";
import "./App.css";
import Home from "./Pages/Home/Home";
import HomeCl from "./Pages/Clothers/HomeCl";
import HomeShoes from "./Pages/Shoes/HomeShoes";
import HomeAcc from "./Pages/Accessories/HomeAcc";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import { ImSearch } from "react-icons/im";
import { IoPersonSharp } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import CiteLogo from "./Img/Logos/Logo.png";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="nav">
          <div className="nav-bar">
            <div className="nav-item">
              <div className="Links">
                <div id="Home">
                  <NavLink to="/">
                    <p>Home</p>
                  </NavLink>
                </div>
                <div id="Clothes">
                  <NavLink to="/clothes">
                    <p>Clothes</p>
                  </NavLink>
                </div>
                <div id="Shoes">
                  <NavLink to="/shoes">
                    <p>Shoes</p>
                  </NavLink>
                </div>
                <div id="Accessories">
                  <NavLink to="/accessories">
                    <p>Accessories</p>
                  </NavLink>
                </div>
              </div>
              <div className="Logo">
                <img src={CiteLogo} alt="" />
              </div>
              <div className="Search-icon">
                <div id="search">
                  <input type="text" placeholder="Search" />
                  <ImSearch />
                </div>
                <div id="icons">
                  <IoPersonSharp />
                  <FaShoppingCart />
                  <AiFillHeart />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clothes" element={<HomeCl />} />
          <Route path="/shoes" element={<HomeShoes />} />
          <Route path="/accessories" element={<HomeAcc />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
