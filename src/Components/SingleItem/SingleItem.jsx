import { Link } from "react-router-dom";

const SingleItem = ({ single_data }) => {

    const { id, title, img, category, btnBgColor, bgColor, textColor } = single_data

    const saveInLocal = () =>{

    }
    return (
        <Link to={`/donate/${id}`}>
            <div onClick={saveInLocal} style={{ backgroundColor: bgColor, borderRadius: "10px" }}>
                <div>
                    <img className="rounded-xl " src={img} alt="Shoes" />
                </div>
                <div className=" p-4 ">
                    <button style={{ color: textColor, backgroundColor: btnBgColor, padding: "10px", fontWeight: "bold", borderRadius: "10px" }}>{category}</button>
                    <h2 style={{ fontWeight: "bold" }} className="text-2xl mt-4">{title}</h2>
                </div>
            </div>
        </Link>
    );
};

export default SingleItem;