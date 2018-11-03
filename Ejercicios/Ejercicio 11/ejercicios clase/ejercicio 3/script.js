// var colors = ["#00FF00", "#FF0000", "#0000FF", "red", "white"];

var colors = Array.from(
  { length: 20 },
  () => "#" + Math.floor(Math.random() * 1000000)
);

var elemento = document.getElementById("elemento");
var cont = 0;

document.getElementById("btn-toogle").onclick = function(param) {
  cont++;
  if (cont == colors.length) cont = 0;
  elemento.innerHTML = "<p>" + cont + "</p>";
  elemento.style.background = colors[cont];
};

document.getElementById("btn-toogle-random").onclick = function(param) {
  //elemento.style.background = '#' + Math.floor(Math.random() * 1000000);
  var value = Math.floor(Math.random() * colors.length);
  cont = value;
  elemento.innerHTML = "<p>" + value + "</p>";
  elemento.style.background = colors[value];
};

// function randomFromInterval(min,max)
// {
//     return Math.floor(Math.random()*(max-min+1)+min);
// }
