import Animal from './Animal.js'
class Leon extends Animal{
    constructor(nombre,edad, img, comentarios, sonido){
    super(nombre,edad, img, comentarios, sonido)
    }
    rugir() {
        let audioPlayer = document.getElementById("player") 
        audioPlayer.src =`assets/sounds/${this.sonido}`
        audioPlayer.play()
    }
}

export default Leon