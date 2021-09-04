import Animal from './Animal.js'
class Aguila extends Animal{
    constructor(nombre,edad, img, comentarios, sonido){
    super(nombre,edad, img, comentarios, sonido)
    }
    chillar() {
        console.log("sonido");
    }
}

let nombreEspecie = document.getElementById("animal").value;
let edadEspecie = document.getElementById("edad").value;
let comentarioEspecie = document.getElementById("comentarios").value;

export default Aguila

