import Animal from './Animal.js'
class Aguila extends Animal{
    chillar() {
        console.log("sonido");
    }
}

let nombreEspecie = document.getElementById("animal").value;
let edadEspecie = document.getElementById("edad").value;
let comentarioEspecie = document.getElementById("comentarios").value;

