
const getDonateId = ()=>{
    const storedId = localStorage.getItem('donateId');
    if(storedId){
        return JSON.parse(storedId)
    }  
    return [];
    
}


const saveDonateId = id =>{
    const storedIds = getDonateId();
    const exists = storedIds.find(donateId=>donateId === id);
    if(!exists){
       storedIds.push(id);
       localStorage.setItem('donateId',JSON.stringify(storedJobApplication))
    }


}

export { getDonateId , saveDonateId }