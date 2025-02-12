// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let lista = document.getElementById("listaAmigos");
let ganador = document.createElement("li");
let amigos = [];
let listaganadora = document.getElementById("resultado")
listaganadora.appendChild(ganador);
function agregarAmigo(){
    if(document.getElementById("amigo").value === ""){
        alert("elemento vacio, solo acepta valores");
    } else{
        let añadir = document.createElement("li");
        añadir.textContent = document.getElementById("amigo").value;
        amigos.push(añadir);
        for(i = 0; i < amigos.length; i++){
            lista.appendChild(amigos[i]);
        }
        document.getElementById("amigo").value = "";
    }
}

function sortearAmigo(){
    let numero = parseInt(Math.floor(Math.random() * amigos.length));
    ganador.textContent  = amigos[numero].textContent;
    //     //introducirlo a la lista
}