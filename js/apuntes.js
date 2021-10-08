/*var descubrirNacimiento = function(fechaActual,edad){
    var nacimiento  = fechaActual - edad;
       
   
        if(nacimiento <= 2000)  
     {
       document.write("Eres del siglo pasado, te admiro" + ' ');    
     }
       else if(nacimiento > 2000 && nacimiento < 2010)
       {
       document.write("eres de este siglo, te queda una larga vida" + ' ');
       }
       else if(nacimiento >= 2010)
       {
       document.write("que chico eres, disfruta tu vida" + ' ');
       }
       
   
   
   return nacimiento;
       
   };      */


   /*      juego de piedra papel o tijera


   var lista = ['piedra','papel','tijera']


  function piedra_papel_tijera(opcion){
alert("piedra gana a tijera, pierde con papel --- papel gana a piedra, pierde con tijera --- tijera gana a papel, pierde con piedra");
var item = lista[Math.ceil(Math.random()*lista.length)];
let mensaje = "sigue jugando con nosotros"; 
let maquina = "la maquina ha jugado con " + item; 

if(opcion == lista[0]){
alert(maquina);
alert("piedra vs " + item + " ganaste o perdiste?");
alert(mensaje);
}

else if (opcion == lista[1]){
alert(maquina)
alert("papel vs " + item + " ganaste o perdiste?");
alert(mensaje);
}

else if(opcion == lista[2]){
alert(maquina);
alert("tijera vs " + item + " ganaste o perdiste?");
alert(mensaje);
}

else if(opcion === item){
alert("empate")
}

else{"no has ingresado un valor valido"};

}        */




var lista = ['piedra','papel','tijera'];
var traerTexto = document.getElementById("texto");
var traerBoton = document.getElementById("boton");
var escuchador = traerBoton.addEventListener("click",juego);

function juego() {
let item = lista[Math.floor(Math.random()*lista.length)];
let ganaste = "ganaste, la maquina ha jugado con ";
let perdiste = "perdiste, la maquina ha jugado con ";
let empate = "ha sido un empate, la maquina ha jugado con ";


if (traerTexto.value.toLowerCase() == lista[0] && item == lista[2])
{
    let texto = document.getElementById("parrafo").innerHTML = (ganaste + item);
}
else if(traerTexto.value.toLowerCase() == lista[0] && item == lista[1])
{
    let texto = document.getElementById("parrafo").innerHTML = (perdiste + item);
}
else if(traerTexto.value.toLowerCase() == lista[0] && item == lista[0])
{
    let texto = document.getElementById("parrafo").innerHTML = (empate + item);
}
else if(traerTexto.value.toLowerCase() == lista[1] && item == lista[0])
{
    let texto = document.getElementById("parrafo").innerHTML = (ganaste + item);
}
else if(traerTexto.value.toLowerCase() == lista[1] && item == lista[2])
{
    let texto = document.getElementById("parrafo").innerHTML = (perdiste + item);
}
else if(traerTexto.value.toLowerCase() == lista[1] && item == lista[1])
{
    let texto = document.getElementById("parrafo").innerHTML = (empate + item);
}
else if(traerTexto.value.toLowerCase() == lista[2] && item == lista[1]){
    let texto = document.getElementById("parrafo").innerHTML = (ganaste + item);
}
else if(traerTexto.value.toLowerCase() == lista[2] && item == lista[0]){
    let texto = document.getElementById("parrafo").innerHTML = (perdiste + item);
}
else if(traerTexto.value.toLowerCase() == lista[2] && item == lista[2]){
    let texto = document.getElementById("parrafo").innerHTML = (empate + item);
}


};