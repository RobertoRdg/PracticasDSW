let maravillas = ["chichen-itza.svg", "coliseo.svg", "cristo-redentor.svg", "machu-picchu.svg", "muralla-china.svg","petra.svg","taj-mahal.svg"];/*lista de imagenes de las 7 maravillas*/
let correcta = [1,0,2,1,2,0,1];/*lista de respuestas correctas*/


let opciones = [];/*array de opciones*/

opciones.push(["Machu Picchu", "Chichen Itza", "Coliseo"]);/*opciones de la primera pregunta*/
opciones.push(["Coliseo", "Petra", "Cristo Redentor"]);/*opciones de la segunda pregunta*/
opciones.push(["Muralla China", "Taj Mahal", "Cristo Redentor"]);/*opciones de la tercera pregunta*/
opciones.push(["Petra", "Machu Picchu", "Taj Mahal"]);/*opciones de la cuarta pregunta*/
opciones.push(["Chichen Itza", "Petra", "Muralla China"]);/*opciones de la quinta pregunta*/
opciones.push(["Petra", "Machu Pichu", "Chichen Itza"]);/*opciones de la sexta pregunta*/
opciones.push(["Coliseo", "Taj Mahal", "Cristo Redentor"]);/*opciones de la septima pregunta*/

let posActual = 0;
let cantidadAcertadas = 0;

function comenzarJuego(){
    posActual = 0;
    cantidadAcertadas = 0;
    document.getElementById("pantalla-inicial").style.display = "none";
    document.getElementById("pantalla-juego").style.display = "block";
    cargarMaravilla();

}

function cargarMaravilla(){
    if(maravillas.length <= posActual){
        terminarJuego();
    }
    else{
        limpiarOpciones();

        document.getElementById("imgMaravilla").src = "img/" + maravillas[posActual];
        document.getElementById("n0").innerHTML = opciones[posActual][0];
        document.getElementById("n1").innerHTML = opciones[posActual][1];
        document.getElementById("n2").innerHTML = opciones[posActual][2];
    }
}

function limpiarOpciones(){
    document.getElementById("n0").className = "nombre";
    document.getElementById("n1").className = "nombre";
    document.getElementById("n2").className = "nombre";
    document.getElementById("l0").className = "letra";
    document.getElementById("l1").className = "letra";
    document.getElementById("l2").className = "letra";
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
    setTimeout(cargarMaravilla,1000);
}
function terminarJuego(){
    document.getElementById("pantalla-juego").style.display = "none";
    document.getElementById("pantalla-final").style.display = "block";
    document.getElementById("numCorrectas").innerHTML = cantidadAcertadas;
    document.getElementById("numIncorrectas").innerHTML = maravillas.length - cantidadAcertadas;
}

function volverAlInicio(){
    document.getElementById("pantalla-final").style.display = "none";
    document.getElementById("pantalla-inicial").style.display = "block";
    document.getElementById("pantalla-juego").style.display = "none";
}