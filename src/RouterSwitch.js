import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './style.css';
import { useState } from 'react';
//component
import Home from "./component/Home"
import Category from "./component/Category"
import Categories from "./component/Categories"
import SearchPage from "./component/SearchPage"
import AboutMe from "./component/AboutMe";

import Header from "./component/Header";
const RouteSwitch = ()=>{

    const [cat, SetCat] = useState('general');
    const [search, SetSearch]= useState('');
    const [searched, SetSearched]= useState('');
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={[<Header cat={cat} SetCat={SetCat} search={search} SetSearch={SetSearch} searched={searched} SetSearched={SetSearched}/>,<Home />  ]}></Route>
            <Route path="/category" element={[<Header cat={cat} SetCat={SetCat} search={search} SetSearch={SetSearch} searched={searched} SetSearched={SetSearched}/>,<Category cat={cat}/>]}></Route>
            <Route path="/categories" element={[<Header cat={cat} SetCat={SetCat} search={search} SetSearch={SetSearch} searched={searched} SetSearched={SetSearched}/>,<Categories />]}></Route>
            <Route path="/search" element={[<Header cat={cat} SetCat={SetCat} search={search} SetSearch={SetSearch} searched={searched} SetSearched={SetSearched}/>,<SearchPage searched={searched}/>]}></Route>
            <Route path="/aboutme" element={[<Header cat={cat} SetCat={SetCat} search={search} SetSearch={SetSearch} searched={searched} SetSearched={SetSearched}/>,<AboutMe />]}></Route>
        </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch