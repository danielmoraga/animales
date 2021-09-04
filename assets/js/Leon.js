import Animal from './Animal.js'
class Leon extends Animal{
    constructor(nombre,edad, img, comentarios, sonido){
    super(nombre,edad, img, comentarios, sonido)
    }
    rugir() {
        console.log("sonido");
    }
}

export default Leon