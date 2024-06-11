import { useEffect, useState } from "react";
import SingleItem from "../SingleItem/SingleItem";


const Category = () => {
    const [category,setCategory]=useState([])
    useEffect(()=>{
        fetch('data/category.json')
        .then(res=>res.json())
        .then(cata => setCategory(cata))
    },[])
    
    return (
        <div className="container px-2 md:px-0 mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8 my-16">
            {
                category.map(data =><SingleItem key={data.id} single_data={data}></SingleItem>)
            }
        </div>
    );
};

export default Category;