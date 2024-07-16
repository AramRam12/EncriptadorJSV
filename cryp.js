//Boton encriptar - SECCION DE BOTONES
var BEncritpar = document.getElementById("encriptar"); //Detecta si se presiona el boton "Encriptar"
BEncritpar.addEventListener("click", encriptar); // Llama Funcion Encriptar

//Boton desencriptar
var BDesencritpar = document.getElementById("desencriptar");
BDesencritpar.addEventListener("click", desencriptar);

var BCopiar = document.getElementById("copiar");
BCopiar.addEventListener("click", copiar);

var BBorrar = document.getElementById("borrar");
BBorrar.addEventListener("click", borrar);

//Seccion de funciones

function encriptar(){ //funcion para incriptar el texto
    
    var texto = document.getElementById("cifrado").value.toLowerCase();

    for (var i = 0; i < texto.length ; i++){
        var caracter = texto.charAt(i);

        if(/[a-zA-Z]/.test(caracter)){

            //i= toma letras mayus y minusculas
            //g=toma en cuenta toda la linea o la oracion
            //m= tome en cuenta multiples lineas
            
             var encriptado= texto.replace(/e/img, "enter");
                encriptado= encriptado.replace(/i/img, "imes");
                encriptado= encriptado.replace(/a/img, "ai");
                encriptado= encriptado.replace(/o/img, "ober");
                encriptado= encriptado.replace(/u/img, "ufat");

            document.getElementById("TextoCifrado").value=encriptado;
            var ocultar = document.getElementById("#imgcod");
            ocultar.style.display = "none";



        }else{
            alert("Caracter no alfabetico")
        }

    }
}




function desencriptar(){  //funcion para desincriptar el texto

    var texto = document.getElementById("cifrado").value.toLowerCase();

   
    var desencriptado= texto.replace(/enter/img, "e");
         desencriptado= desencriptado.replace(/imes/img, "i");
         desencriptado= desencriptado.replace(/ai/img, "a");
         desencriptado= desencriptado.replace(/ober/img, "o");
         desencriptado= desencriptado.replace(/ufat/img, "u");

    document.getElementById("TextoCifrado").value=desencriptado;


}

function copiar(){
  texto = document.getElementById("TextoCifrado");
  texto.select();
  document.execCommand("copy");
  
alert("Texto Copiado Correctamente");


}

function borrar(){

//Borra el primer textarea
    var borrar = document.getElementById("TextoCifrado");
    var placeholder = borrar.getAttribute("placeholder");
    borrar.value = "";
    borrar.setAttribute("placeholder", placeholder);
//Borra el segundo textarea   
    var borrar2 = document.getElementById("cifrado");
    var placeholder= borrar2.getAttribute("placeholder");
    borrar2.value = "";  
    borrar2.setAttribute("placeholder", placeholder);

  alert("Texto Borrado Correctamente");
    
}

