window.addEventListener('DOMContentlLoaded', (event) =>{
    getVisitCount();
})



const functionAPI = '';

const getVisitCount =() => {
    let count =50;
    fetch (functionAPI).then (response => {
        return response.json()
    }).then(response =>{
        console.log("Website called function API.");
        count = response.count;
        document.getElementById("counter"),innerText=count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}
