import {sum,mult} from "./calc";

import "./index.css"

console.log(sum(4,5));
console.log(mult(4,5));
console.log("hello");
console.log("atin sahu");

let tittle = document.getElementById("name")
let name = document.createElement("h1")
name.textContent = "atin sahu coding ka betaz badshah"
name.setAttribute("class", "redtext")

tittle.append(name);