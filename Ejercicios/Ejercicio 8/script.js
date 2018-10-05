let string = "string";
let int = 1;
let bool = true;

function getDiaDeLaSemana() {
  var value = parseInt(prompt("Dia de la semana: ", "dia"));
  var week = [
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo"
  ];

  var flag = false;
  if (!isNaN(value)) {
    if (value <= 6) {
      console.log(`La el nombre para el día ${value} es ${week[value - 1]}`);
    } else {
      console.log(`El número excede los días de la semana`);
      flag = true;
    }
  } else {
    console.log(`El valor no es un valor entero`);
    flag = true;
  }

  if (flag) {
    getDiaDeLaSemana();
  }
}

getDiaDeLaSemana();

function printNumbers() {
  for (var i = 0; i <= 100; i += 10) {
    console.log(`${i}`);
  }
}

printNumbers();

function printOdd() {
  for (var i = 0; i <= 30; i++) {
    if (i % 2 != 0) console.log(`${i}`);
  }
}

printOdd();

function printOddAndEvenArray() {
  var arreglo = Array.from({ length: 20 }, () =>
    Math.floor(Math.random() * 100)
  );
  arreglo.forEach((value, index) => {
    var tipo;
    if (value % 2 != 0) {
      tipo = "impar";
    } else {
      tipo = "par";
    }
    console.log(`${index + 1}: ${value} es ${tipo}`);
  });
}

printOddAndEvenArray();
