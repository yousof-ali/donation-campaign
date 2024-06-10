import { useNavigate, useRouteError } from "react-router-dom";


const Error = () => {
    const error = useRouteError()
    const back = useNavigate()
    
    const oneBack = ()=>{
        back(-1);
    }
    
    return (
        <div className="text-center mt-16">
            <div className="flex items-center justify-center">
                <img src="/img/images.png" alt="" />
            </div>
            <p>{error.data}</p> <br />
            <button onClick={()=>oneBack()} className=" text-white bg-red-600 border-0 p-4 rounded-xl hover:bg-red-400 ">Go Back</button>
        </div>
    );
};

export default Error;