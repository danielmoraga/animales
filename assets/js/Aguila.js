import Animal from './Animal.js'
class Aguila extends Animal{
    constructor(nombre,edad, img, comentarios, sonido){
    super(nombre,edad, img, comentarios, sonido)
    }
    chillar() {
        let audioPlayer = document.getElementById("player") 
        audioPlayer.src =`assets/sounds/${this.sonido}`
        audioPlayer.play()
    }
}

export default Aguila

