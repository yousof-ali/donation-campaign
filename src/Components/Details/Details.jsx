import { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";



const Details = () => {
    const { id } = useParams();
    const allData = useLoaderData();
    const [singleDonate, setSingleDonate] = useState([]);
    const back = useNavigate()




    useEffect(() => {
        const currentDtata = allData.find(data => data.id == id);
        setSingleDonate(currentDtata);
    }, [])
    console.log(singleDonate)


    const oneBack = ()=>{
        back(-1);
    }




    return (
        <div className="container space-y-4 p-6 rounded-md bg-slate-100 mx-auto flex flex-col items-center justify-center my-2 md:my-8">
            <div className="w-1/2">
                <img src={singleDonate.img} alt="" /></div>
            <div>
                <h2 className="text-4xl font-bold mb-4">{singleDonate.title}</h2>
                <p className="text-2xl text-gray-500">{singleDonate.category}</p>
                <p>{singleDonate.description}</p>
            </div>

            <button onClick={()=>oneBack()} className="bg-green-600 text-white font-bold py-2 px-4 rounded-md">Go Back</button>
        </div>
    );
};

export default Details;