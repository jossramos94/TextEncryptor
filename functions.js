

//ocument.getElementById("copiar").style.visibility = "hidden";
//document.getElementById("ocultar").style.visibility = 'visible';

function validarTexto(){
  let textoIngresado = document.querySelector(".input-mensaje").value;
  let validar = textoIngresado.match(/^[a-z]*$/);

  if(!validar || validar === 0){
    alert("Solo se permiten minusculas y sin acentos");
    location.reload();
    return true;
  }
}
 

function encriptarTexto() {
  if(!validarTexto()){
   let array;
   let textArea = document.getElementById("mensaje");
   array = textArea.value.replace(/\s+/g, ' ').split(' ').filter((e) => e.length > 0);
   array = array.map((e) => e.toLowerCase());

    for (let i = 0; i < array.length; i++) {
        
        array[i] = array[i].replace(/e/g, 'enter');
        array[i] = array[i].replace(/i/g, 'imes');
        array[i] = array[i].replace(/a/g, 'ai');
        array[i] = array[i].replace(/o/g, 'ober');
        array[i] = array[i].replace(/u/g, 'ufat');
    }
 

    let textArea2 = document.getElementById("desencriptarTexto");
    textArea2.value = array.join(" ");
  
    
  
      var btn = document.getElementById("encriptar");
      btn.addEventListener("click", encriptarTexto);
      textArea.value = " ";
    
    
    let miDiv = document.getElementById("ocultar");
    miDiv.style.visibility = "hidden";

    document.getElementById("copiar").style.visibility = "visible";
  }
 }


 function desencriptarTexto(){
  
    let array2;
    let textArea2 = document.getElementById('mensaje');
    array2 = textArea2.value.replace(/\s+/g, ' ').split(' ' ).filter((e)=> e.length > 0);
    array2 = array2.map((e) => e.toLowerCase());

    for (let i = 0; i < array2.length; i++) {
         
        array2[i] = array2[i].replace(/enter/g, 'e');
        array2[i] = array2[i].replace(/imes/g, 'i');
        array2[i] = array2[i].replace(/ai/g, 'a');
        array2[i] = array2[i].replace(/ober/g, 'o');
        array2[i] = array2[i].replace(/ufat/g, 'u');
    }

    let textArea3 = document.getElementById("desencriptarTexto");
    textArea3.value = array2.join(" ");

    let btn2 = document.getElementById("desencriptar");
    btn2.addEventListener("click", desencriptarTexto);  
    textArea2.value = " ";

    let miDiv = document.getElementById("ocultar");
    miDiv.style.visibility = "hidden";

    document.getElementById("copiar").style.visibility = "visible";
    

}

 function copiarTexto(){
    let textArea = document.getElementById("desencriptarTexto");
    textArea.select();
    document.execCommand("copy");
    alert("Texto copiado");
    textArea.value = " ";
    document.getElementById("ocultar").style.visibility = "visible";

    document.getElementById("copiar").style.visibility = "hidden";

    location.reload();
 }

 







