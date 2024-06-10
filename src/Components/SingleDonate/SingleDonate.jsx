import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveDonateId } from "../Utility/utility";

const SingleDonate = () => {
    const { id } = useParams()
    const datas = useLoaderData()
    const[btn,setBtn]=useState(false)

    const mydata = datas.find(sdata => sdata.id === parseInt(id))

    const { description, img, category, textColor, donate_taka } = mydata
    
    const tost=() =>{
        toast("Your Donation Sucessfully Done!");
        setBtn(true);
        saveDonateId(id)
    }

    return (
        <div className="container mx-auto my-8">
            <div className="max-w-7xl mx-auto" >
                <div className="relative w-full">
                    <img className="w-full" src={`${img}`} alt="" />
                    <div className="bg-black py-8 bg-opacity-40 w-full absolute bottom-0">
                        <button onClick={tost} className={`ml-8 text-white btn ${btn && "hidden"} border-none`} style={{ backgroundColor: textColor}}>Donate ${donate_taka}</button>
                        <ToastContainer></ToastContainer>
                    </div>
                </div>
                <div className="px-4">
                    <h2 className="text-3xl font-bold my-6">{category}</h2>
                    <p className="text-lg text-justify">{description}</p>
                </div>
            </div>

        </div>
    );
};

export default SingleDonate;