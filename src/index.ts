


fetch("http://localhost:3000/env")
.then(res=>res.json())
.then(data=>document.querySelector(".root").textContent=JSON.stringify(data));