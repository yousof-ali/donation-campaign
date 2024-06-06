import { Link, useNavigate, useRouteError } from "react-router-dom";


const Error = () => {
    const error = useRouteError()
    const useNaviGate = useNavigate()

    
    return (
        <div className="text-center mt-16">
            <div className="flex items-center justify-center">
                <img src="/img/images.png" alt="" />
            </div>
            <p>{error.data}</p> <br />
            <Link to={useNaviGate(-1)}><button className=" text-white bg-red-600 border-0 p-4 rounded-xl hover:bg-red-400 ">Go Back</button></Link>
        </div>
    );
};

export default Error;