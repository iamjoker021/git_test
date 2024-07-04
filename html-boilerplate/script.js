const body = document.querySelector("body");

// Add P to Body
const para = document.createElement("p");
para.textContent = "Hey I am red";
para.style.color = "red";
body.appendChild(para);

// Add H3 to Body
const h3 = document.createElement("h3");
h3.textContent = "Hey I am blue h3";
h3.style.color = "blue";
body.appendChild(h3);


// Add Div to Body
const div = document.createElement("div");
div.setAttribute("style", "border: 1px solid black; background-color: pink;")
body.appendChild(div);

// Add h1 to inner div
const div_h1 = document.createElement("h1");
div.textContent = "Im a div"
div.appendChild(div_h1)

// Add p to inner div
const div_p = document.createElement("p");
div_p.textContent = "Me too"
div.appendChild(div_p)

function alertFunction() {
    alert("YAY! YOU DID IT!");
}

// METHOD 3
btn.addEventListener("click", (e) => {
    e.target.style.background = "blue";
});


