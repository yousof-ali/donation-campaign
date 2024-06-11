import { useEffect, useState } from "react";
import { getDonateId} from "../Utility/utility";
import DonateSingle from "../DonateSingle/DonateSingle";



const Donate = () => {
    
    const[allData,setAllData]=useState([])

    const[display,setDisplay]=useState([])
    useEffect(()=>{
        fetch('data/category.json')
        .then(res=>res.json())
        .then(data=>setAllData(data))
    },[])

    useEffect(()=>{
        const saveId = getDonateId()
        if(allData.length>0){
            const newData = []
            for(const id of saveId){
                const singel = allData?.find(item1=>item1.id===parseInt(id));
                if(singel){
                    newData.push(singel);  
                }
                
            }

            setDisplay(newData);
        }
    },[allData])


    return (
        <div className="container grid grid-cols-1 md:grid-cols-2 mx-auto px-2 md:px-0 gap-8">
         {
            display.map(item=><DonateSingle
            key={item.id} item={item}></DonateSingle>)
         }
        </div>
    );
};

export default Donate;