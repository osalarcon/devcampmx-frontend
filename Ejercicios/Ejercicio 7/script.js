window.onload = function() {
  var a = 10;
  var b = 5;

  var result = a + b;
  document.getElementById("suma").innerHTML = result;

  var result2 = a - b;
  document.getElementById("resta").innerHTML = result2;
  document.getElementById("isEven").innerHTML = isEven(a);
  document.getElementById("saludo").innerHTML = saludo("Oscar");

  fbcc();

  oneToTwenty();

  this.console.log(legal(15));
};

var yb = 1;
var xb = 1;

function oneToTwenty() {
  var array = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20
  ];

  array.forEach((element, index, array) => console.log(index + 1));
}

function legal(age) {
  return age >= 18 ? "Legal" : "Ilegal"; //no dice que sea mayor o igual
}

function squareArea() {
  var size = prompt("Ingrese el lado del cuadrado", "Ingrese el tamaño");

  var side = parseInt(size);
  if (isNaN(side)) {
    console.log("No es numérico");
  } else {
    var area = side ** 2;
    console.log("El area es: " + area);
  }
}

function fbcc() {
  var ant = 10;
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.moveTo(10, 0);

  for (
    var x = 1, y = 1, value = 0;
    value <= 10;
    y += value * Math.pow(y, value), x += 100, value++
  ) {
    ctx.lineTo(x, y);
  }

  ctx.stroke();
}

var fb = function(n) {
  var a = 0,
    b = 1,
    f = 1;
  for (var i = 2; i <= n; i++) {
    f = a + b;
    a = b;
    b = f;
  }
  return f;
};

function isEven(numero) {
  return numero % 2 === 0 ? "Even" : "Odd";
}

function saludo(nombre) {
  return "Hola " + nombre;
}
