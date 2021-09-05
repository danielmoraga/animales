import Animal from './Animal.js'
class Lobo extends Animal{
    constructor(nombre,edad, img, comentarios, sonido){
        super(nombre,edad, img, comentarios, sonido)
    }
    aullar() {
        let audioPlayer = document.getElementById("player") 
        audioPlayer.src =`assets/sounds/${this.sonido}`
        audioPlayer.play()
    }
}

export default Lobo