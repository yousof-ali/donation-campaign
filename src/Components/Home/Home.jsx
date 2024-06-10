import { useLoaderData } from "react-router-dom";
import Bannar from "../Banner/Bannar";
import Category from "../Category/Category";

import "./Home.css"



const Home = () => {
    return (
        <div>
            <div className="hero-container ">
                <Bannar></Bannar>
            </div>
            <Category></Category>
        </div>
    );
};

export default Home;