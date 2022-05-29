import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home'
import Products from './Components/Products'
import ProductItem from './Components/ProductItem'
import NavBar from "./Components/NavBar";
import PageNotFound from "./Components/PageNotFound";

function RouteConfig() {
    return (
        <div>
            <NavBar />
            <Routes>
                <Route path="/" element={<Products />} />
                <Route path="/home" element={<Home />} />
                <Route path="products" element={<Products />} />
                <Route path="/product/:id" element = {<ProductItem />} />
                <Route path="*" element = {<PageNotFound />} />
            </Routes>
        </div>
    )
}

export default RouteConfig;