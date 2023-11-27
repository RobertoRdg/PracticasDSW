/*var num = prompt("ESCRIBE UN NUMERO:");

function par_impar() {
    if (num %2==0) {
        alert("EL NUMERO ES PAR");
    }else{
        alert("EL NUMERO ES IMPAR");
    }
}
par_impar();*/


/*var hayunhuracan = true;
function aviso_huracan(huracan) {
    if (hayunhuracan == true) {
        alert("HAY UN HURACAN");
    }else{
        alert("ESTA SOLEADO");
    }
}
aviso_huracan(hayunhuracan);*/


var TipoOp=prompt("ESCRIBE LA OPERACION A REALIZAR:\n1) SUMA\n2) RESTA\n3) MULTIPLICACION\n4) DIVISION\n5) RESIDUO");
var numa=5;
var numb=6;

function operaciones_matematicas(operacion, a, b) {
    switch (TipoOp) {
        case "SUMA":
            resultado = numa+numb;
            alert("EL RESULTADO DE LA SUMA ES: " + resultado);
            break;
    
        case "RESTA":
            resultado = numa-numb;
            alert("EL RESULTADO DE LA RESTA ES: " + resultado);
            break;

        case "MULTIPLICACION":
            resultado = numa*numb;
            alert("EL RESULTADO DE LA MULTIPLICACION ES: " + resultado);
            break;
    
        case "DIVISION":
            resultado = numa/numb;
            alert("EL RESULTADO DE LA DIVISION ES: " + resultado);
            break;

        case "RESIDUO":
            resultado = numa%numb;
            alert("EL RESULTADO DEL RESIDUO ES: " + resultado);
            break;
    
        default:
            alert("OPCION NO VALIDA");
            break;
    }

}
operaciones_matematicas();