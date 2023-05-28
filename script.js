/* VARIABLES */
var codEncriptado = {e: "enter", i: "imes", a: "ai", o: "ober", u: "ufat"};
var codDesencriptado = {enter: "e", imes: "i", ai: "a", ober: "o", ufat: "u"};
var textoEncriptado = ""
var textoDesencriptado = ""

var texto = document.getElementById("areatexto");
var botonEncriptar = document.getElementById("boton-encriptar");
var botonDesencriptar = document.getElementById("boton-desencriptar");

var resultado = document.getElementById("areaResultado");
var munheco = document.getElementById("munheco");
var aviso2 = document.getElementById("div-aviso2");
var botonCopiar = document.getElementById("boton-copiar");

/* FUNCIONES DE ENCRIPTADO/DESENCRIPTADO */
function Encriptar(textoInput) {
  textoEncriptado = textoInput.replace(/e|i|a|o|u/gi, function(matched){
    return codEncriptado[matched];
  });
  resultado.value = textoEncriptado.valueOf()
  texto.value = ""

  if(resultado.value != "") {
    resultadoLleno()    
  }  
}

function Desencriptar(textoEncriptado) {
  textoDesencriptado = textoEncriptado.replace(/enter|imes|ai|ober|ufat/gi, function(matched){
      return codDesencriptado[matched];
  });
  resultado.value = textoDesencriptado.valueOf()
  texto.value = ""

  if(resultado.value != "") {
    resultadoLleno()
  }
}

function resultadoLleno() {
  munheco.style.visibility = "hidden"
  aviso2.style.visibility = "hidden"
  botonCopiar.style.visibility = "visible"
  resultado.style.visibility = "visible"
}

/* ALERTAS*/
botonEncriptar.onclick = function() {
  if(texto.value == "") {
    alert("Por favor, ingrese texto para encriptar.")
  } else {
    Encriptar(texto.value)
  }

}

botonDesencriptar.onclick = function() {
  if(texto.value == "") {
    alert("Por favor, ingrese texto para desencriptar.")
  } else {
    Desencriptar(texto.value)
  }

}

/* DETECCION DE MAYUSCULAS Y ACENTOS */
function contieneMayusculas(str) {
  return /[A-Z]+/.test(str);
}

function contieneAcentos(str) {
  return /[´¨^]+/.test(str);
}

texto.addEventListener("input", evt => {

  if(contieneMayusculas(texto.value)){
    alert("Mayúsculas detectadas. Por favor ingrese texto sin mayúsculas.")
    texto.value = ""
  }

  if(contieneAcentos(texto.value)){
    alert("Acento detectado. Por favor ingrese texto sin acentos.")
    texto.value = ""
  }
})

/* COPIAR*/
botonCopiar.onclick = function() {
  resultado.select()
  navigator.clipboard.writeText(resultado.value)
}




