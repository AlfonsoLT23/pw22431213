/*document.write("<h1>Hola</h1>");
console.log("consola desde JS");
//console.error("esto es un error");

//variables
let x;
console.log(typeof(x));
let esPW=false;
console.log(typeof(esPW));
if(esPW){
    console.log("estamos en clase")
}else{
    console.log("no estamos en clase")
}

let numero=-234.124;
console.log(numero);

let cadena="una cadena 'comillas'";
console.log(cadena)
let cadena2='una cadena "al reves" ' + numero;
console.log(cadena2)
let cadena3="a";
console.log(cadena3)

let id1 = Symbol("id");
let id2 = Symbol("id");
console.log(id1);
let usuario={nombre:"Alfonso",[id1]:123};
console.log(usuario.nombre+" "+usuario[id1]);

let variablenulla=null;
console.log(variablenulla);

const PI=3.1416;
console.log(PI);

let arreglo=[];
console.log(arreglo);
arreglo=[1,2,3];
console.log(arreglo);
arreglo.push(4);
console.log(arreglo);
//console.pop();
console.log(arreglo);
arreglo.shift();
console.log(arreglo);
arreglo.unshift(10);
console.log(arreglo);

let objeto={nombre:"Alfonso",edad:21};
console.log(Object.keys(objeto));
console.log(Object.values(objeto));
console.log(Object.entries(objeto));

alert("Alerta en pantalla");
let edad=prompt("Dame la edad",0);
console.log(edad);

let variable= "valor";
const CONSTANTE= "VALOR";

function miFuncion(a=2){//valor por defecto
    return 2*2;
}
console.log(miFuncion(6));

const funcionFlecha= (a=10) =>{
    return a*2;
}
console.log(funcionFlecha(7));

//Destructuring - destructurar
//objetos

const usuarios={
    nombre:"Alfonso",
    apellido:"Lara"
}

//let nombre=usuarios.nombre;
//let apellido = usuarios.apellido

let{apellido,nombre}=usuarios;
console.log(nombre +" "+apellido);

//otro objeto
const usuarios2={
    nombre: "Alfonso",
    apellido:"Lara",
    redes:{
        sociales:{
            twx:'@miusuario',
            face:'@miface'
        }
    }
}
//const face= usuarios2.redes.sociales.face;
//const{twx,face}=usuarios2.redes.sociales;
//console.log(face);
const{redes:{sociales:{twx}}}=usuarios2;
console.log(twx);

//Arreglos
const arregloNombres=['Juan','Ernesto','Omar'];
//let nombre1= arregloNombres[0];
//let nombre3= arregloNombres[2];
const [nombre1,nombre3]=arregloNombres;
console.log(nombre1 + " "+ nombre3);

//combinaciones objetos
const usuarios3={
    direccion:'conocida',
    numerocasa:'300'
}
//propagacion de campos
const nuevoObjeto={...usuarios2,...usuarios3};
console.log(nuevoObjeto);

//arreglos
const arregloApellidos=['perez','lopez','gomez'];
const nuevoArreglo=[...arregloNombres,...arregloApellidos]
console.log(nuevoArreglo);
const otroNuevoArreglo=arregloNombres.concat(arregloApellidos);
console.log(otroNuevoArreglo);

//foreach,for,map,reduce -- iterar arreglos
for(let i=0;i<nuevoArreglo.length;i++ ){
    console.log(nuevoArreglo[i]);
}
nuevoArreglo.forEach(function(nombre){
    console.log(nombre)
});
let numoers= [1,2,3,4,5];
let suma=0;
numeros.forEach(function(numero){
    suma+=numero;
});
console.log(suma);

//Map
let precios=[10,20,30,40,50];
const conversion=0.85;

let preciosnuevos=precios.map(function(precio){
    return precio * conversion;
});
console.log(preciosnuevos);

//reduce
let sumaPrecios = precios.reduce(function(suma,precio){
    return suma + precio;
},0)
console.log(sumaPrecios);

//clases
class Animal{
    constructor(nombre){
        this.nombre=nombre;
    }
    habla(){
       // console.log(´Este ${this.nombre} ladra´)
    }
}*/


//Closures
const variablefuncion=function(){
    return "Hola";
}
console.log(variablefuncion());

const saludo="hola";
function externa(){
    const persona="alfonso"
    function interna(){
        const fin= "Lara"
        return saludo+persona+fin;
    }
    return interna;
}
console.log(externa()());
const clousure=externa();
console.log(clousure());

//otro ejemplo
const miContador = (function(){
    let contador=0;
    function incrementar(){
        return ++contador;
    }
    function decrementar(){
        return --contador;
    }
    function valor(){
        return contador;
    }
    return{
        incrementar,
        decrementar,
        valor
    }
})(); // ejecutar func principal
console.log(miContador);
miContador.incrementar;
miContador.incrementar;
miContador.incrementar;
miContador.incrementar;
miContador.incrementar;
miContador.decrementar;
console.log(miContador.valor());

//promesas
//paginas dinamicas -- acceso a datos internos,externos
//kb -- externas    internas-- mb o gb
let datos=[
    {
    id:1,
    materia:'pw',
    semestre:6
    },
    {
        id:2,
        materia:'POO',
        semestre:1
    },
    {
        id:3,
        materia:'EDD',
        semestre:2
    }
];

//datos = [];
//console.log(datos);
//funcion que simula obtener datos de un servidor remoto
const obtenerDatos = () =>{
    return new Promise((resolve,reject) =>{
        if(datos.length===0){
            reject(new Error("Datos esta vacio"));
        }
        setTimeout(() => {
            console.log(datos);
        }, 1500);//milisegundos
    })
  
}
//funcion async debe esperar a que termine de obtener la informacion
async function procesarDatos(){
    try{
        const misdatos= await obtenerDatos();
        console.log(misdatos);
    }catch(err){
        console.log(err.message);
    }
}
procesarDatos();
//console.log(obtenerDatos());









