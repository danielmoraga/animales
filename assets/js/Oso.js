import Animal from './Animal.js'
class Oso extends Animal{
    constructor(nombre,edad, img, comentarios, sonido){
    super(nombre,edad, img, comentarios, sonido)
    }
    grunir() {
        let audioPlayer = document.getElementById("player") 
        audioPlayer.src =`assets/sounds/${this.sonido}`
        audioPlayer.play()
    }
}

export default Oso