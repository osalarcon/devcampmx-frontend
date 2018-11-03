var elemento = document.getElementById("elemento");
console.log(elemento.style);

elemento.style.display = "block";

document.getElementById("btn-toogle").onclick = function() {
  if (elemento.style.display == "block") {
    elemento.style.display = "none";
  } else {
    elemento.style.display = "block";
  }
};
