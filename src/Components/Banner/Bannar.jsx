import { useState } from "react";
import "./Bannar.css"

const Bannar = ({ handleClick }) => {
    const [value, setValue] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault()
        const categoryValue = e.target.category.value;
        setValue(categoryValue);
    }

    return (
        <div className=" bannar mx-auto text-center py-20  bg-slate-50 bg-opacity-80 lg:py-32">
            <h2 className="text-4xl font-bold mx-width-10/12 mb-8">I Grow By Helping People In Need</h2>
            <div >
                <form onSubmit={handleSubmit} className="border-2 md:max-w-md  justify-center items-center w-10/12 rounded-xl mx-auto flex" >
                    <input type="text" name="category" className="outline-none rounded-l-xl w-full  py-3 px-2 " placeholder="Search a category" />
                    <button onClick={()=>handleClick(value)} className="bg-red-500 rounded-r-xl px-4 text-white py-3">
                        Search
                    </button>

                </form>

            </div>
        </div>
    );
};

export default Bannar;