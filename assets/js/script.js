// Ejercicio 1

let eje1 = document.querySelector("#eje_1");

function ejercicio1() {
  if (eje1.style.borderColor == "red") {
    eje1.style.borderColor = "white";
  } else {
    eje1.style.borderColor = "red";
  }
}

eje1.addEventListener("click", ejercicio1);

// Ejercicio 2

let eje2 = document.querySelector("#verificarPines");

function verificarPines() {
  let num1 = document.querySelector("#cantidadPines1").value;
  let num2 = document.querySelector("#cantidadPines2").value;
  let num3 = document.querySelector("#cantidadPines3").value;
  let num4 = document.querySelector("#cantidadPines4").value;

  let total = +num1 + +num2 + +num3 + +num4;

  if (total <= 10) {
    document.querySelector("#verificacion").textContent = "Llevas " + total;
  } else {
    document.querySelector("#verificacion").innerHTML =
      "Llevas demasiados Pines";
  }
}

eje2.addEventListener("click", verificarPines);

// Ejercicio 3

let eje3 = document.querySelector("#vericarCodigo");

function verificarCodigo() {
  let a = document.querySelector("#a").value;
  let b = document.querySelector("#b").value;
  let c = document.querySelector("#c").value;

  if (a == 9 && b == 1 && c == 1) {
    document.querySelector("#avisoCodigo").innerHTML =
      "El password 1 es correcto";
  } else if (a == 7 && b == 1 && c == 4) {
    document.querySelector("#avisoCodigo").innerHTML =
      "El password 2 es correcto";
  } else {
    document.querySelector("#avisoCodigo").innerHTML =
      "El password es incorrecto";
  }
}

eje3.addEventListener("click", verificarCodigo);
