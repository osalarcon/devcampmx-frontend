var texto = document.getElementById("texto");
texto.style.fontSize = "20px";

document.getElementById("menos").onclick = function(param) {
  var font = texto.style.fontSize;
  var size = getSize(font);
  texto.style.fontSize = (size - 1) + "px";
};

document.getElementById("mas").onclick = function(param) {
  var font = texto.style.fontSize;
  var size = getSize(font);
  texto.style.fontSize = (size + 1) + "px";
};

function getSize(value) {
  var size = value.split("px");
  return parseInt(size[0]);
}
