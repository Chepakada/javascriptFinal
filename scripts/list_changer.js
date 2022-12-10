//it adds the passed object to the list.
const listOfObjects = [];
function addToList(keyword){
    
    listOfObjects.push(keyword);

}
function removeFromList(keyword){
    for(var i = 0; i<listOfObjects.length; i++){
        if (listOfObjects[i]===keyword){
            listOfObjects.splice(i, 1);
        }
    }
}
export { listOfObjects, addToList, removeFromList};