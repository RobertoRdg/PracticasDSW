var peso = prompt("ESCRIBE TU PESO EN KG:");
var opcion = prompt("ECCOGE ENTRE ESTOS DOS OPCIONES:\n1) MARTE\n2) JUPITER");
var peso_tierra = 9.807;
var peso_marte = 3.71;
var peso_jupiter = 25.79;
var resultado

switch (opcion) {
    case "1":
        resultado = peso * peso_marte / peso_tierra;
        alert("SU PESO EN MARTE ES DE: " + resultado + " KG");
        break;

    case "2":
        resultado = peso * peso_jupiter / peso_tierra;
        alert("SU PESO EN JUPITER ES DE: " + resultado + " KG");
        break;

    default:
        alert("OPCION NO VALIDA");
        break;
}

if (opcion == 1) {
    resultado = peso * peso_marte / peso_tierra;
    alert("SU PESO EN MARTE ES DE: " + resultado + " KG");
} else if (opcion==2){
    resultado=peso * peso_jupiter / peso_tierra;
    alert("SU PESO EN JUPITER ES DE: "+ resultado + " KG");
}else {
    alert("OPCION NO VALIDA");
}