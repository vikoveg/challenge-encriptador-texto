function encriptar() {
    let textoUsuario = document.getElementById("texto").value;
    let estadoMensaje = document.getElementById("estado_mensaje");
    let parrafoMensaje = document.getElementById("parrafo_mensaje");

    let textoCifrado = textoUsuario
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    if (textoUsuario.length != 0){ 
       estadoMensaje.textContent=textoCifrado;
       parrafoMensaje.textContent="Mensaje encriptado exitosamente";
    } else {
        estadoMensaje.textContent="Ningún mensaje fue encontrado";
        parrafoMensaje.textContent="Ingresa el texto que desees encriptar o desencriptar.";
    }
}

function desencriptar(){
    let textoUsuario = document.getElementById("texto").value;
    let estadoMensaje = document.getElementById("estado_mensaje");
    let parrafoMensaje = document.getElementById("parrafo_mensaje");

    let textoDesifrado = textoUsuario
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    if (textoUsuario.length != 0){ 
       estadoMensaje.textContent=textoDesifrado;
        parrafoMensaje.textContent="Mensaje desencriptado exitosamente";
    } else {
        estadoMensaje.textContent="Ningún mensaje fue encontrado";
        parrafoMensaje.textContent="Ingresa el texto que desees encriptar o desencriptar.";
    }
}