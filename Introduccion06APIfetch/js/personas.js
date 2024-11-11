const url = 'https://randomuser.me/api/?results=12';
let boton=document.querySelector("button");
/*let foto=document.querySelector("#foto");
let nombre=document.querySelector("#nombre");
let direccion=document.querySelector("#direccion");
let telefono=document.querySelector("#telefono");*/
let lista=document.querySelector("#lista-personas");

const agregarPersonasLista= (persona)=>{
    lista.classList.add("lista-personas");
    
    const tarjeta=document.createElement("article");
    tarjeta.classList.add("tarjeta");

    const foto=document.createElement("img");
    foto.setAttribute("src",persona.picture.large);
    
    const nombre=document.createElement("article");
    nombre.textContent=persona.name.first+" "+persona.name.last;

    const direccion=document.createElement("article");
    direccion.textContent=persona.location.street.name+" "+persona.location.street.number;

    const telefono=document.createElement("article");
    telefono.textContent=persona.phone;

    tarjeta.appendChild(foto);
    tarjeta.appendChild(nombre);
    tarjeta.appendChild(direccion);
    tarjeta.appendChild(telefono);

    lista.appendChild(tarjeta);

}

const obtenerPersona=()=>{
    lista.innerHTML="";
    fetch(url)
    .then(respuesta=>respuesta.json())
    .then(respuesta=>{
        respuesta.results.forEach(persona => {
            agregarPersonasLista(persona);
            /*nombre.textContent=persona.name.first+" "+persona.name.last;
            foto.setAttribute("src",persona.picture.large);
            direccion.textContent=persona.location.street.name+" "+persona.location.street.number;
            telefono=persona.phone;*/
        });
    })
}

boton.addEventListener("click",(e)=>{
    obtenerPersona();
});

obtenerPersona();