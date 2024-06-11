
const getDonateId = ()=>{
    const storedId = localStorage.getItem('donateIds');
    if(storedId){
        return JSON.parse(storedId);
    }  
    return [];
    
}


const saveDonateId = id =>{
    const storedIds = getDonateId();
    const exists = storedIds.find(donateId=>donateId === id);
    if(!exists){
       storedIds.push(id);
       localStorage.setItem('donateIds',JSON.stringify(storedIds));
    }


}

export { getDonateId , saveDonateId }