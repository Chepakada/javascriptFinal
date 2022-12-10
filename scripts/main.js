import {addToList, removeFromList, listOfObjects} from "./list_changer.js";


const backgroundImage = "./images/bclowopacity.jpg";
const backgroundImageUrl = "https://whvn.cc/kx79md";
async function getBackgroundImage(backgroundImageUrl){
    image = await fetch(backgroundImageUrl, {
        
    headers:{
        "Access-Control-Allow-Origin": "*"
      }});
    image.setHeader("Access-Control-Allow-Origin", "*");
    console.log(image);
    if (image.ok){
       
        image = image.json();
        //pass_image(image);
        console.log(image);
    }
}

function pass_image(image){
    
    const backImage = document.querySelector("body");
    
    
    backImage.setAttribute("background" , image );
  
}
//pass_image(backgroundImage);
function random_messages(){
    const random_message = document.createElement("p");
    random_message.setAttribute("id", "subtext")
    random_message.innerText="Sorry, I tried to add a fetched image as background but couldn't make it work. ";
    random_message.innerText+="So now, This page will work as a search engine which directs your search to google search engine but keeps history for the key words. However, I got a bonus image for you, press 'get your food' button, you will get a foot item's image as your background.";
    random_message.style.textAlign = "center";
    var main = document.querySelector("#randomMessages");
    main.appendChild(random_message);
}

function buttonAction(){

    document.getElementById("searchButton").addEventListener('click', ()=>{
        const userInput = document.querySelector("#inputBox").value;
        window.open("https://www.google.com/search?client=firefox-b-1-d&q="+userInput);
        addToList(userInput);
        console.log(userInput);
        console.log(listOfObjects);
        return userInput;
    })}

//getBackgroundImage(backgroundImageUrl);
function createList(){
    //failed attempt to press enter for pressing search button.
    var userInput = buttonAction();
    
    //console.log(userInput);
    
    
    document.getElementById("inputBox")
    .addEventListener("keyup", function(event){
    event.preventDefault();


    if (KeyboardEvent.Code === 13) {
        document.getElementById("searchButton").click(); 
    }

   
});
}
function deleteHistory(searches){
    removeFromList(searches);
}

function history() {
    const historyBox = document.getElementById("historyBox");
    listOfObjects.forEach((searches)=>{
        historyBox.innerHTML += `<ul>Your Searches</ul>`
        document.querySelector("ul").innerHTML += `<li>${searches}    <button id = "${searches}">delete</button></li>`}
    )
    listOfObjects.forEach((searches)=>{
        document.getElementById(searches).addEventListener("click", ()=>{deleteHistory(searches)
            document.querySelector("ul").innerHTML = `<li></li>`;
            document.querySelector('ul').innerHTML +=`<li>${searches} <button id = "${searches}">delete</button></li>`});})
        
        //document.querySelector('ul').innerHTML -=`<li>${searches} <button id = "${searches}">delete</button></li>`})
        
        
    }
    




function image_change(backgroundImage) {
    document.querySelector("#foodButton").addEventListener("click", ()=>
    {pass_image(backgroundImage);
    document.querySelector("#foodButton").addEventListener("click",()=>{
    document.querySelector('body').style.background= "white";
})})}


random_messages();
image_change(backgroundImage);
createList();
document.getElementById("printList").addEventListener("click", 
    ()=>{
        history();
        
    })


