/*for(var i=0; i<7; i++){
    console.log("HOLA");
    if(i==4){
        console.log("SOY EL 4TO HOLA")
    }
}
console.log("ACABAMOS DE SALUDAR");*/

let meses =['ENERO','FEBRERO','MARZO','ABRIL','MAYO','JUNIO','JULIO','AGOSTO','SEPTIEMBRE','OCTUBRE','NOVIEMBRE'];

/*for(let i in meses){
    console.log(meses[i]);
}*/

/*meses.forEach(function(mes){
    console.log(mes);
});*/

for(var mes of meses){
    console.log(mes);
}