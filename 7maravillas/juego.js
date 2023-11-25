let personajes = ["Albus_Dumbledore.webp", "Dobby.webp", "draco_malfoy.webp", "Hagrid.webp", "Harry_Potter.webp","Hermione.webp","Ron_Weasley.webp","Severus_Snape.webp","Sirius_Black.webp","voldemort.webp"];/*lista de imagenes de las 7 personajes*/
let correcta = [0,0,2,1,3,0,1,3,1,1];/*lista de respuestas correctas*/


let opciones = [];/*array de opciones*/

opciones.push(["Albus Dumbledore", "Voldemort", "Severus Snape", "Remus Lupin"]);/*opciones de la primera pregunta*/
opciones.push(["Dobby", "Hermione", "Draco Malfoy", "Hagrid"]);/*opciones de la segunda pregunta*/
opciones.push(["Ron Weasley", "Gregory Goyle", "Draco Malfoy", "Cedric Diggory" ]);/*opciones de la tercera pregunta*/
opciones.push(["Hermione", "Hagrid", "Neville Longbottom","Peter Pettigrew"]);/*opciones de la cuarta pregunta*/
opciones.push(["Draco Malfoy", "Hermione", "Ron Weasley","Harry Potter"]);/*opciones de la quinta pregunta*/
opciones.push(["Hermione", "Bellatrix Lestrange", "Ginny Weasley","Luna Lovegood"]);/*opciones de la sexta pregunta*/
opciones.push(["Neville Longbottom", "Ron Weasley", "Harry Potter","Draco Malfoy"]);/*opciones de la septima pregunta*/
opciones.push(["Remus Lupin", "Albus Dumbledore", "Voldemort","Severus Snape"]);/*opciones de la octava pregunta*/
opciones.push(["Severus Snape", "Sirius Black", "Remus Lupin","Albus Dumbledore"]);/*opciones de la novena pregunta*/
opciones.push(["Albus Dumbledore", "Voldemort", "Severus Snape", "Remus Lupin"]);/*opciones de la decima pregunta*/

let posActual = 0;
let cantidadAcertadas = 0;

function comenzarJuego(){
    posActual = 0;
    cantidadAcertadas = 0;
    document.getElementById("pantalla-inicial").style.display = "none";
    document.getElementById("pantalla-juego").style.display = "block";
    cargarPersonaje();

}

function cargarPersonaje(){
    if(personajes.length <= posActual){
        terminarJuego();
    }
    else{
        limpiarOpciones();

        document.getElementById("imgMaravilla").src = "imgHP/" + personajes[posActual];
        document.getElementById("n0").innerHTML = opciones[posActual][0];
        document.getElementById("n1").innerHTML = opciones[posActual][1];
        document.getElementById("n2").innerHTML = opciones[posActual][2];
        document.getElementById("n3").innerHTML = opciones[posActual][3];
    }
}

function limpiarOpciones(){
    document.getElementById("n0").className = "nombre";
    document.getElementById("n1").className = "nombre";
    document.getElementById("n2").className = "nombre";
    document.getElementById("n3").className = "nombre";
    document.getElementById("l0").className = "letra";
    document.getElementById("l1").className = "letra";
    document.getElementById("l2").className = "letra";
    document.getElementById("l3").className = "letra";
}

function comprobarRespuesta(opElegida){
    if(opElegida==correcta[posActual]){//acertó
        document.getElementById("n" + opElegida).className = "nombre nombreAcertada";
        document.getElementById("l" + opElegida).className = "letra letraAcertada";
        cantidadAcertadas++;
    }else{
        document.getElementById("n" + opElegida).className = "nombre nombreNoAcertada";
        document.getElementById("l" + opElegida).className = "letra letraNoAcertada";
        document.getElementById("n" + correcta[posActual]).className = "nombre nombreAcertada";
        document.getElementById("l" + correcta[posActual]).className = "letra letraAcertada";
    }
    posActual++;
    setTimeout(cargarPersonaje,1000);
}
function terminarJuego(){
    document.getElementById("pantalla-juego").style.display = "none";
    document.getElementById("pantalla-final").style.display = "block";
    document.getElementById("numCorrectas").innerHTML = cantidadAcertadas;
    document.getElementById("numIncorrectas").innerHTML = personajes.length - cantidadAcertadas;
}

function volverAlInicio(){
    document.getElementById("pantalla-final").style.display = "none";
    document.getElementById("pantalla-inicial").style.display = "block";
    document.getElementById("pantalla-juego").style.display = "none";
}