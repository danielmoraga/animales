import Animal from './Animal.js'
class Serpiente extends Animal{
    constructor(nombre,edad, img, comentarios, sonido){
    super(nombre,edad, img, comentarios, sonido)
    }
    sisear() {
        let audioPlayer = document.getElementById("player") 
        audioPlayer.src =`assets/sounds/${this.sonido}`
        audioPlayer.play()
    }
}

export default Serpiente