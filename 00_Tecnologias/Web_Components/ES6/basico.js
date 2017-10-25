//ES5
var data=[{precio:12},{precio:234},{precio:45}];

data.forEach(function(elem){
    console.log(elem.precio);

});

//ES6
data.forEach((elem)=>{
    if(true){
        let iva=1.21;//var iva=1.21 let crea una variable solo utilizable en el bloque en el que se define
        const a=1.25;
        a++;
    }
    console.log(elem.precio);
});
/*Si la funcion arrow solo recibe un parametro no hacen falta parentesis.

si solo ejecuta una acción no hacen falta llaves
*/
