import Animal from './Animal.js'
class Serpiente extends Animal{
    constructor(nombre,edad, img, comentarios, sonido){
    super(nombre,edad, img, comentarios, sonido)
    }
    sisear() {
        let siseo = this.sonido;
        return siseo
    }
}

export default Serpiente