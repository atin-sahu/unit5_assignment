
import "../index.html"

document.querySelector("form").addEventListener("submit", show);

function show(event){
    event.preventDefault();

    let text = document.getElementById("nootbook").value
    // console.log(text);
    let para = document.createElement("p");
    para.textContent = "";
    para.textContent = text;

    document.getElementById("para").append(para);

}
