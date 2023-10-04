var valores = [true, 10, false, "codigo", "herrramientas", 7];

var valor1 = valores[3];
var valor2 = valores[4];

if (valores[3] >> valores[4]) {
        alert(valores[3]);
    } else {
        alert(valores[4]);
    }

//------------------------------------------

var dolar=parseInt(prompt("INGRESE VALOR DE DOLAR"));;

if (dolar == 17) {
        var boolean = true;
    } else {
        var boolean = false;
    }
alert("¿EL DOLAR TIENE ESE VALOR? "+boolean);

//-------------------------------------------

num1 = valores[1];
num2 = valores[5]

var suma = num1+num2;
var resta = num1-num2;
var multiplicacion = num1*num2;
var division = num1/num2;
var exponencial = num1 ** num2;

var textoS = "EL RESULTADO DE LA SUMA ES: "
var textoR = "EL RESULTADO DE LA RESTA ES: "
var textoM = "EL RESULTADO DE LA MULTIPLICACION ES: "
var textoD = "EL RESULTADO DE LA DIVISION ES: "
var textoE = "EL RESULTADO DEL EXPONENCIAL ES: "

alert( textoS+suma+", "+textoR+resta+", "+textoM+multiplicacion+", "+textoD+division+", "+textoE+exponencial);