
import { useState } from "react";
import Bannar from "../Banner/Bannar";
import Category from "../Category/Category";

import "./Home.css"



const Home = () => {
    const[value ,setValue]=useState();
    
    const handleClick = categoryname => {
        console.log(categoryname);
        setValue(categoryname);
    }
    return (
        <div>
            <div className="hero-container ">
                <Bannar handleClick = {handleClick}></Bannar>
            </div>
            <Category categorys = {value}></Category>
        </div>
    );
};

export default Home;