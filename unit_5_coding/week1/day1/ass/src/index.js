
import  "../index.html" 
import  "./index.css" 
import logo from "../images/mern2.jpg"

let image = document.createElement("img");
image.setAttribute("class","photo");
image.src = logo;
document.querySelector("#logo").append(image);

document.querySelector("form").addEventListener("submit", show);

function show(event){
    event.preventDefault();

    let text = document.getElementById("note").value
    // console.log(text);
    let para = document.createElement("p");
    para.textContent = "";
    para.textContent = text;

    document.getElementById("para").append(para);

}
