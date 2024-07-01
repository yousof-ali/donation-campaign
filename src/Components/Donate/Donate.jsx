import { useEffect, useState } from "react";
import { getDonateId } from "../Utility/utility";
import DonateSingle from "../DonateSingle/DonateSingle";



const Donate = () => {

    const [allData, setAllData] = useState([]);

    const [display, setDisplay] = useState([]);
    const[allDisplay,setAllDisplay] = useState([]);
    const[btnClk,setBtnClk]=useState(false);


    useEffect(() => {
        fetch('data/category.json')
            .then(res => res.json())
            .then(data => setAllData(data))
    }, [])

    useEffect(() => {
        const saveId = getDonateId()
        if (allData.length > 0) {
            const newData = []
            for (const id of saveId) {
                const singel = allData?.find(item1 => item1.id === parseInt(id));
                if (singel) {
                    newData.push(singel);
                }

            }

            setDisplay(newData.slice(0,4));
            setAllDisplay(newData);
        }
    }, [allData])
    


    const handlebtn = ()=>{
        setDisplay(allDisplay);
        setBtnClk(true);
    }
    console.log(typeof display.length);

    return (
        <div className="mx-auto container px-2 py-4 md:py-16 md:px-0">
            <div className=" grid grid-cols-1 md:grid-cols-2  gap-8">
                {
                    display.map(item => <DonateSingle
                        key={item.id} item={item}></DonateSingle>)
                }

            </div>
            <div className="flex justify-center mt-8">
                <button onClick={handlebtn} className={`bg-green-600 text-white  font-bold py-2 px-4 rounded-md ${display.length<=4 && "hidden"}  ${btnClk&& "hidden"}`} >see more</button>
            </div>
        </div>
    );
};

export default Donate;