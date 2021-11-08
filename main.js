if ('serviceWorker' in navigator) {
navigator.serviceWorker.register('./sw.js')
.then(reg => console.log('Registro de SW exitoso', reg))
.catch(err => console.warn('Error al tratar de registrar el sw', err))
}
function Borrar(){
let contenedor = document.getElementById("contenedor");
contenedor.parentNode.removeChild(contenedor);
}
function Libro(){
Borrar()

fetch('Meditacones.json')
.then(Response =>Response.json())
.then(data =>{
let UL = document.getElementById("UL");

for(let i = 0; i<num; i++){
var Texto = JSON.stringify(data[l][i]);
UL.innerHTML += `<li class="lista">${i+1 +". "+Texto}</li>`
}
UL.style.marginBottom ="20%";
UL.querySelectorAll(".lista")
Li= UL.querySelectorAll(".lista");

for(let item of Li){
item.addEventListener("click",()=>{
item.classList.toggle("activo")
item.innerHTML += `<div class="Boton"><i Id="star"class="fas fa-star"></i></i><i id="pen" class="fas fa-pencil-alt"></i></div>`
})}})
document.getElementById("star").style.background ="#e50000";
}
function Book(){window.location.href="index.html"}
function note(){window.location.href="notes.html"}